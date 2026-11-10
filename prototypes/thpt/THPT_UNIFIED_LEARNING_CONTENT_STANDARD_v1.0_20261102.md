# SELF-LEARNING MATH — TIÊU CHUẨN CHẤT LƯỢNG HỌC LIỆU THPT THỐNG NHẤT v2.0 (DỰ THẢO CHỈNH Q18)

**STANDARD_ID:** `SLM-THPT-QUALITY-ONE`  
**VERSION:** `2.0.0` (GOVERNANCE DRAFT; chưa có hiệu lực) · **OWNER:** Chủ dự án Self-Learning Math / G Learning  
**STATUS:** `GOVERNANCE_PROPOSAL_OWNER_REVIEW_PENDING` — ngày 10/11/2026 chủ dự án chỉ đạo xem xét bỏ vòng phản biện độc lập lặp lại cho phần cập nhật Kiến thức đã nghiệm thu mà có thể tự kiểm chứng chính xác toán. Đây là **dự thảo nâng Q18 có phiên bản**, chỉ có hiệu lực **sau owner duyệt bản điều khoản chính xác, đồng bộ Source 07/handoff/QA và governance PR merge vào `main`**. V1.2.0 trên main vẫn là baseline trong khi PR này chưa merge; snapshot PASS lịch sử bảo toàn. Không tạo quyền deploy nguồn chưa nghiệm thu hay mở Mastery.  
**SCOPE:** mọi học liệu Toán THPT 10–12 KNTT theo **SGK_CHAPTER** và **TOPIC**; áp dụng cho cả tác giả, NotebookLM và nhánh phát hành. **Một tiêu chuẩn chất lượng; các cổng kiểm tra phân theo trách nhiệm, không phải hai bộ tiêu chuẩn cạnh tranh.**

## 0. Luật thống nhất và thứ tự hiệu lực

1. **Chỉ có một bộ tiêu chí chất lượng:** các điều `Q01–Q18` bên dưới là tiêu chí nghiệm thu nội dung. `A1–A7` là bằng chứng nguồn/học liệu của AUTHORING; `PED1–PED6` là chiều sư phạm của chính học liệu; `AP1–AP5`, `R1–R5`, `P1/P2` là kiểm tra **bản thể hiện/triển khai** của cùng tiêu chuẩn sau bàn giao. Không có “chuẩn học thuật của release” riêng để bổ sung ngầm cho chuẩn của tác giả.
2. **Thẩm quyền:** (a) quyết định mới nhất của chủ dự án; (b) **chương trình chính thức và SGK KNTT S1** quyết định Core/outcome và sự thật toán học; **SBT KNTT cùng sách luyện tập, đề thi chính thống, nguồn tham khảo uy tín** giúp kiểm tra **họ dạng bài, mức độ và ứng dụng**, không trở thành thẩm quyền Core và không bắt buộc có mọi trang SBT; (c) Project Source `08` cho hai hành trình/nguồn dùng chung, `06` cho vận chuyển review, `07 v1.1` cho delta; (d) đúng 5 Permanent Sources THPT v2.1 do chủ dự án quyết định thay thế v2.0 (sau khi owner cài đặt); (e) hợp đồng bàn giao `THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md`; (f) tiêu chuẩn thống nhất này là **tập hợp cách kiểm chứng** các nguồn trên, không hủy quyết định cao hơn. Nếu phát hiện xung đột, ghi `STANDARD_CONFLICT_HOLD`, xin quyết định chủ dự án và phát hành một phiên bản chuẩn mới; không tự chọn kết luận tiện cho branch.
3. **Điều kiện phiên bản:** mỗi chuẩn và checklist phải ghi `STANDARD_ID`, `STANDARD_VERSION`, `ACADEMIC_SOURCE_BLOB`, `REVIEW_RECEIPT_BLOB`, `RELEASE_SCOPE`, `LESSON_IDS`, `OUTCOME_IDS`, `PUBLIC_ITEM_IDS`, `ASSESSMENT_MODE` và danh sách `BLOCKERS`. Việc áp dụng phiên bản chuẩn mới cho **nội dung mới** là mặc định sau owner approval; nội dung **đã phát hành** giữ đóng băng theo #675/#691 và quy tắc delta, không kiểm toán hồi tố đồng loạt.
4. **Nguồn quy định có tên và khả năng đồng bộ:** `06_NOTEBOOKLM_REVIEW_HANDOFF_PROTOCOL_v1.0.md` (vận chuyển file + prompt), `07_THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.1.md` (phân loại DELTA), `08_THPT_DUAL_COMPLETE_LEARNING_PATHS_AND_SHARED_RESOURCES_v2.0.md` (hành trình SGK/Chuyên đề). Theo quyết định chủ dự án 02/11/2026, **không cần đối chiếu byte các nguồn Permanent v2.0 cũ** mà thay trọn bộ bằng **năm file v2.1 mới**: `01_THPT_MASTER_PLAN_v2.1.md`, `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.1.md`, `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.1.md`, `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.1.md`, `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.1.md`. Danh mục, phạm vi, hướng dẫn thay thế và SHA256 từng file tại `prototypes/thpt/notebooklm-permanent-sources/THPT_5_PERMANENT_SOURCES_v2.1_REPLACEMENT_MANIFEST_20261102.md`; chủ dự án phải giải nén ZIP, bỏ chọn/xóa 5 Permanent v2.0 **trước** khi thêm đủ 5 v2.1. **NOTEBOOKLM_V21_SOURCE_INSTALLATION=PENDING_OWNER_ACTION** cho đến khi người dùng xác nhận. Không thêm nguồn quy tắc thứ sáu, không giả định NotebookLM tự đồng bộ, không làm mất PASS lịch sử hợp lệ đúng snapshot.

5. **Không cộng tác tưởng tượng:** hai cuộc trò chuyện không tự chuyển trạng thái; chỉ GitHub PR/Issue, file source-locked, owner-pasted NotebookLM verdict và manifest thực mới là bằng chứng. Không coi checklist đã tick, số lượng item hay green CI là chứng cứ toán học/PED độc lập.

## I. Các định nghĩa bắt buộc

- `ACADEMIC_PASS`: reviewer độc lập xác nhận tính đúng toán, độ sâu, nguồn S1, D1–D6, phạm vi và ID **đúng snapshot được xét**.
- `PED_PASS`: reviewer độc lập xác nhận học sinh chưa biết có thể đi từ động cơ đến khái niệm, ví dụ có suy luận và Tự thử/D6, **theo bài/outcome**, trên đúng snapshot.
- `CONTENT_READY`: đối với học liệu mới, AUTHORING có Academic + PED reviewer PASS; **hoặc** (chỉ sau khi v2.0.0 có hiệu lực) nhánh **được chủ dự án giao nâng cấp Kiến thức SGK — RELEASE hiện tại** lập và ký hồ sơ `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` có bằng chứng thực, đạt mọi điều kiện dành riêng cho trang Kiến thức đã nghiệm thu trước. Cả hai chế độ phải đủ A1–A7 thích hợp, source/receipt SHA, một manifest `ready/` và REGISTER; hồ sơ tự kiểm **không được mạo danh** `ACADEMIC_PASS`/`PED_PASS` của reviewer. Không có nghĩa website đã hoạt động hay đánh giá được Mastery.
- `INTEGRATION_CANDIDATE`: RELEASE đã tiếp nhận nguồn chuẩn nhưng cần AP1–AP5, R1–R5 và exact-head QA. Không tự nâng thành `RELEASE_READY`.
- `PUBLISHED/P1`: nguồn và website thực tế đã deploy được xác minh; `P2` là bằng chứng iPhone/iPad Safari thực, không suy từ viewport mô phỏng.
- `BLOCKED_BY_AUTHORING`: thiếu hoặc sai nguồn, lý thuyết, outcome, PED, kết quả NotebookLM, ID/rubric, private custody, hoặc source hash. `BLOCKED_BY_RELEASE`: source READY nhưng giao diện, MathJax, tương tác, an toàn Final Submit, CI, quyền deploy hoặc thiết bị thực chưa đạt.
- `RD0`: outcome/kiến thức, D1–D6 và luyện tập theo chương/chuyên đề. `RD1`: bộ Tự kiểm tra tách biệt có yêu cầu nguồn/tiếp xúc/đánh giá riêng; **demo/client self-check** không phải chứng cứ Mastery.

## II. Ma trận chuẩn chất lượng duy nhất Q01–Q18

| ID | Điều kiện PASS bắt buộc | Bằng chứng tối thiểu | Lỗi phải chặn / tuyến chịu trách nhiệm |
|---|---|---|---|
| **Q01 S1/Scope** | Đúng và đủ kiến thức/năng lực Core theo **chương trình chính thức và SGK KNTT gốc** theo lớp/tập/chương; học liệu lý thuyết, ví dụ, bài tập và Written là **tự biên soạn**. SBT, đề thi, tài liệu bài tập khác là **nguồn tham khảo dạng/phương pháp/điều kiện/độ sâu**, không phải bộ câu bắt buộc phải chép hoặc kiểm đủ từng trang; kiến thức ngoài Core phải gắn nhãn mở rộng. | Chứng cứ SGK S1 (tên/ấn bản/trang **in** kiểm chứng được), ma trận Bài→outcome→kiến thức/D1–D6 và họ dạng bài theo mức độ; nguồn tham khảo đã đọc nếu có, mức tin cậy, điều kiện/kiểu phương pháp tương đương, đáp án và rubric tự kiểm chứng; nguồn SBT thiếu trang phải ghi `SBT_REFERENCE_GAP_DOCUMENTED` và giới hạn đã kiểm, không giả nhận đã đọc. | **HOLD** nếu SGK/chương trình bắt buộc hoặc outcome/Core toán thiếu/không chắc, sai điều kiện hay học liệu không đủ độ sâu. **Không tự HOLD vì thiếu riêng trang SBT** khi các outcome và họ dạng bài đã được kiểm chứng độc lập; AUTHORING phản biện Q01 theo phạm vi thực tế. |
| **Q02 Outcomes** | Mỗi `outcome_id` có bằng chứng kiến thức và năng lực học, không chỉ ghi ID hoặc đếm số câu; nội dung liên kết đủ với điều kiện toán | Matrix Bài/Outcome→D1/D2/D3/D4/D5/D6/PED/RD1; outcome tích hợp có dấu vết xuyên bài | Mất outcome/gap thực chất = DELTA_C; AUTHORING |
| **Q03 D1** | Lý thuyết có giải thích ý nghĩa, định nghĩa/định lý, ký hiệu, giả thiết, điều kiện, ngoại lệ, tập xác định/phạm vi; đầy đủ theo SGK | D1 section IDs/số dòng, đối chiếu S1 và lời giải thích trước formal | Chỉ có công thức/bảng mà bỏ bản chất = PED HOLD; AUTHORING |
| **Q04 D2** | Ví dụ đúng toán, đa dạng thực chất, giải từng bước có lý do chọn công cụ, đối chiếu điều kiện và bẫy thường gặp | Ví dụ EX_ID, phân loại dạng và mức, cách giải/cách kiểm; không chỉ thay số | Sai đáp số/điều kiện = P0/P1; thiếu WHY = PED5 HOLD; AUTHORING |
| **Q05 D3** | Core/Practice/Application có độ sâu và phân tầng đúng chương, kiến thức được tự luyện; đáp án/lời giải/level và skill đúng | Item register ID→outcome, role/placement, lời giải, coverage, độ khó, kiểm uniqueness | Tăng số lượng không thay bằng chứng độ sâu; AUTHORING |
| **Q06 D4** | Written/Anchor dùng **một thư viện**, Anchor chỉ là nhãn; đề, lời giải, rubric, outcome chính và tags đúng | D4 item_id duy nhất, mapping/rubric/khóa phiên bản, không tự chấm bài tự luận không kiểm chứng | Trùng item hoặc rubric sai = HOLD; AUTHORING |
| **Q07 D5** | Hình/SVG, bảng, đồ thị và ngữ cảnh ứng dụng/bằng chứng phục vụ suy luận, tọa độ/nhãn/đơn vị/các đường tiệm cận chính xác | FIG_ID/asset/hash, mô tả “đọc gì/vì sao”, toán và alt/fallback, source | SVG đẹp nhưng sai/không giải thích = ACADEMIC/PED HOLD; AUTHORING |
| **Q08 D6** | Có lộ trình khắc phục lỗ hổng theo lỗi/tiền đề và liên kết thật về kiến thức/ví dụ/luyện tập | HELP_ID, lỗi→nguyên nhân→bài tiền đề→câu áp dụng; links chuẩn | Mô tả chung không dẫn hành động được = AUTHORING HOLD |
| **Q09 PED1** | Mở bằng vấn đề có lý do tồn tại khái niệm/định lý, **trước** thuật toán/công thức chưa giải thích | 1 đoạn WHY có tình huống toán/thực tế thích hợp theo bài/outcome | Bắt đầu bằng định nghĩa khó hiểu khi không có WHY = PED HOLD |
| **Q10 PED2** | Nền tảng, thuật ngữ, ký hiệu và điều kiện tiên quyết đã học hoặc giải thích tại chỗ, không buộc rời hành trình | Sổ `NEW / PREREQUISITE_CONFIRMED / RECALL_ONLY / OPTIONAL_ADVANCED`, liên kết tiền đề có thật | “Đã biết” chưa chứng minh = PED HOLD |
| **Q11 PED3** | Trực giác/bản chất có trước phát biểu formal; nêu rõ “là gì/giúp gì/hình thành thế nào” và ranh giới áp dụng | D1 text theo thứ tự WHY→BRIDGE→WHAT/HOW→FORMAL, phản ví dụ | Đảo thứ tự/nhảy sang dấu và tính khi chưa hiểu = PED HOLD |
| **Q12 PED4** | Mỗi hình/bảng quan trọng có lời hướng dẫn đọc: quan hệ, dấu/đơn vị, biến đổi và hạn chế; không hình trang trí | FIG_ID→đoạn diễn giải tương ứng, ảnh nguyên/nhãn và fallback | Hình không khớp mô tả = PED/ACADEMIC HOLD |
| **Q13 PED5** | Mỗi nhóm ví dụ cho thấy cách nhận dạng, tại sao chọn phương pháp, bước suy luận, kiểm kết quả và khi nào không dùng | EX_ID→WHY/WHEN/NOT WHEN, lỗi dễ gặp | Chỉ có phép tính, đáp án = PED HOLD |
| **Q14 PED6** | Học sinh tự thực hiện một bước nhỏ **trước Core** với lời giải chỉ hiện khi tự yêu cầu, đường quay lại D6/tiền đề; không tính Mastery | First-try ID theo bài (có thể không là canonical item), remediation link và self-reveal boundary | Trực tiếp đẩy học sinh sang bài phức tạp hoặc lộ key trước tự thử = PED HOLD |
| **Q15 ID/Shared bank** | Một `item_id` canonical, đúng `content_version`, `answer_key`, `worked_solution`, `skill_id`; nhiều placement khác role không nhân bản | 1 register, uniqueness, role/placement/provenance, Written/Anchor shared | Nhân bản câu/ghi Mastery kép = HOLD |
| **Q16 Assessment/exposure** | `SGK_CHAPTER_READINESS` và `TOPIC_READINESS` khác scope; độc lập với câu đã luyện/đã xem; không hint/Tutor/đúng–sai/key trước **Final Submit**; Written free-text không tự chấm bừa | RD1 metadata/hash và nguồn kín, exposure plan, audit no leak; `CLIENT_SELF_CHECK_NO_MASTERY` nếu chỉ tự đối chiếu | RD1 public keys/private stem leak/chấm không có engine = BLOCKER; A7 AUTHORING + RELEASE R3/R4 |
| **Q17 Dual complete journeys** | SGK tự học đủ theo chương: theory→Core→Practice→Written→tự kiểm tra cuối chương; Chuyên đề tự học đủ với **chỉ 3 mục**: Kiến thức/Luyện tập/Tự kiểm tra; cross-link hỗ trợ không thay kiến thức | 2 outcome/depth matrices riêng, nhãn `LEARNING_PATH`, `RELEASE_SCOPE`; links và role | Gắn Topic PASS nhờ SGK PASS hoặc thiếu kiến thức độc lập = HOLD |
| **Q18 Review/fidelity** | **Hai chế độ cùng một chuẩn**: `Q18_INDEPENDENT_REVIEW` cho bài mới/đổi Core/điều kiện/đáp án/rubric/RD1, hoặc `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` cho *chỉ cập nhật Kiến thức SGK đã nghiệm thu* mà không đổi outcome, Core, định lý/điều kiện, canonical bank, Q15/Q16; P0/P1/P2 và MINIMAL_DELTA đều phải đóng | Chế độ độc lập: Temp_ source/5 Permanent v2.1 + S1, verdict theo snapshot. Chế độ tự kiểm: baseline PASS blob + mapping outcome/Delta, tính lại từng ví dụ/đối chiếu SGK, kiểm hình/đơn vị, PED tự học, `SELF_QA_EVIDENCE_RECEIPT` gắn đúng candidate Git blob, QA browser/assessment tách biệt; chỉ áp dụng sau owner approval + governance migration | Thiếu baseline PASS, sai/không chắc toán, đụng Core/key/RD1, receipt thiếu/lệch SHA hoặc dùng CI render thay toán PASS = HOLD; đẩy sang independent mode đúng outcome nếu cần |

## II-A. Q01 — phân vai nguồn, học liệu tự biên soạn và độ phủ họ dạng bài (owner approved 03/11/2026)

1. **Nguồn thẩm quyền Core:** chương trình Toán hiện hành và **SGK KNTT đúng lớp/tập/chương** xác định khái niệm, định lý, điều kiện toán, outcome và mức Core bắt buộc. SGK được **đối chiếu nguồn gốc**; không cần chép nguyên văn SGK. Không biến dạng nâng cao từ nguồn phụ thành Core SGK.
2. **Nguồn tham khảo mở rộng:** SBT KNTT, đề thi/kỳ thi chính thống và nguồn bài tập tin cậy khác được dùng để **khảo sát họ dạng, biến thể, độ khó, mô hình ứng dụng, năng lực tự luận và bài tổng hợp**. Chúng không nhất thiết trùng đầu bài, con số, ngôn từ, hoặc có đủ mọi trang SBT. Mọi câu trong sản phẩm phải do AUTHORING biên soạn, giải, kiểm chứng và liên kết outcome theo chuẩn Q02–Q06, Q15; không khẳng định đã đối chiếu một đề SBT chưa có bản gốc.
3. **Đối chiếu đúng cái cần giống:** ví dụ/câu tương đương phải cùng **cấu trúc toán, phương pháp then chốt, giả thiết, điều kiện tồn tại/giới hạn, mức độ nhận thức và kỹ năng đích**; đổi số đơn thuần **không** chứng minh đa dạng dạng bài. Khi các đề thi khác nhau có cấu trúc chung, gom vào **một họ dạng**, tạo nhiều biến thể có độ sâu và điều kiện khác nhau; luyện từ hiểu lý thuyết đến vận dụng, liên-outcome và Written có rubric thật.
4. **Ma trận bắt buộc:** với mỗi `OUTCOME_ID`, ghi `CONCEPT/CORE`, `PROBLEM_FAMILY_ID`, `METHOD_AND_CONDITIONS`, `DIFFICULTY_BAND` (nhận biết/thông hiểu/vận dụng/tổng hợp), `ITEM_ID/WRITTEN_ID`, `D6/EX` và `SOURCE_ROLE` (`SGK_CORE_AUTHORITY` hoặc `REFERENCE_EXERCISE` hoặc `ORIGINAL_AUTHORED`). Khuyến khích rà độ phủ các dạng tự luận thường gặp trong kỳ thi; **không áp quota câu cứng** hoặc quy chụp PASS khi chưa chứng minh thật.
5. **Trang SBT thiếu:** `SBT_REFERENCE_GAP_DOCUMENTED` chỉ ghi **đã biết có bài/trang nhưng chưa đọc gốc**, và những dạng được kiểm bằng chứng khác. Nếu đủ SGK/chương trình S1, outcome, phương pháp/điều kiện, độ phủ và reviewer độc lập xác nhận, **không dùng riêng trang SBT thiếu để áp Academic HOLD toàn chương**. Ngược lại, nếu có chứng cứ trang thiếu chứa năng lực/điều kiện bắt buộc chưa được kiểm chứng hoặc SGK nguồn bắt buộc thiếu, ghi `Q01_CORE_OR_OUTCOME_GAP_HOLD` đúng Bài/Outcome.
6. **Phản biện và di trú:** Q01 mới áp dụng sau governance merge. Reviewer xem đúng **nội dung tự biên soạn**, không cố gắng tái dựng nguyên văn SBT. Với ChV G12 R00 trước đó Q01/B14 HOLD, chỉ review **targeted B14 Q01 + các dạng tương đương và nguy cơ outcome-gap** theo `STANDARD_VERSION=1.1.0`; bảo toàn PASS của B15–B17/PED và blob học liệu gốc, không tự sửa các verdict lịch sử. Chỉ khi độc lập xác nhận không có lỗ hổng, đóng HOLD và hoàn thành V2/READY. Không thêm nguồn NotebookLM Permanent thứ sáu, không sửa website, không cấp Mastery.

**Lưu ý:** ma trận Q01–Q18 là **chuẩn học liệu** dùng chung; các nhãn `PED1–6` và `D1–D6` là trục chi tiết của **cùng chuẩn**, không phải tiêu chuẩn bổ sung độc lập sau khi Q đã PASS.


## II-B. Diễn giải áp dụng Q03/Q04/Q07/Q08/Q09–Q14/Q17 qua cùng AP1–AP5 — bổ sung v1.2.0

**Mục tiêu của cùng một chuẩn:** học sinh lần đầu gặp kiến thức có thể **hiểu vì sao cần học → nhận ra bản chất → nắm điều kiện và cách suy luận → tự thử → tự luyện/vận dụng** ngay trên bài học, không phải gọi AI Tutor để đọc hộ tài liệu. Lấy bằng chứng theo **bài + OUTCOME_ID + bản hiển thị thực tế**; không thay Q01–Q18, không mở bộ tiêu chí độc lập, không đặt chỉ tiêu cứng về số từ, số card, hay yêu cầu mọi bài kể chuyện.

| Vấn đề quan sát và cách vận dụng | Điều Q đang có | Bằng chứng kiểm của đúng cổng hiện có |
|---|---|---|
| **Bắt đầu từ câu hỏi cần giải trước ký hiệu mới:** người học nhận ra hiện tượng/vấn đề, mục đích và bối cảnh; có thể dùng trực giác toán hoặc ví dụ quen thuộc, không áp dụng phép tương tự thiếu chính xác. | Q03, Q09 (PED1), Q11 (PED3) | Trên màn hình mở đầu học sinh có thể nói được “vì sao cần” bằng lời; nếu ví dụ chuyển động phải phân biệt vị trí có dấu/quãng đường và vận tốc có hướng/tốc độ; AP1/AP4. |
| **Cầu nối tiền đề, thuật ngữ đúng lúc:** không dùng một ký hiệu/định nghĩa mới để giải thích ngay một ký hiệu chưa biết khác; liên kết bài cũ chỉ hỗ trợ, không thay lý thuyết bắt buộc trong hành trình độc lập. | Q10 (PED2), Q17 | Đoạn giới thiệu thuật ngữ/ý nghĩa ở sát chỗ dùng; AP1/AP4. |
| **Giải thích bản chất trước quy tắc:** mỗi luận điểm nêu được quan sát → điều thay đổi/quan hệ → khái niệm/công cụ → điều kiện, phạm vi và ngoại lệ. Tên mục “Hiểu bản chất” không tự chứng minh học sinh hiểu. | Q03, Q11 (PED3) | Một lời dẫn/hoạt động tự học ở đúng outcome trước công thức tính; AP1/AP4. |
| **Gọn nhưng không nén:** một nhóm thị giác trình bày một ý tương đối hoàn chỉnh; ý mới phải tách hợp lý, nhưng điều kiện/ngoại lệ/giải thích cùng vấn đề phải đặt gần nhau, không chia card chỉ để đủ quota. | Q03, Q09–Q11 | So sánh bố cục nguyên nguồn và giao diện ở cùng LESSON_ID; AP1/AP4. |
| **Toán và hình có thứ bậc dễ đọc:** công thức/điều kiện quan trọng dùng MathJax rõ ràng; hình được hướng dẫn “nhìn gì → nhận ra gì → suy luận gì”, chú giải sát hình; giữ nguyên giả thiết và nguồn SVG. | Q03, Q07, Q12 (PED4) | AP2 MathJax, AP3 hình/đồ thị, AP5 responsive; FIG_ID/file/SHA lưu trong metadata kiểm toán, **không coi là lời dạy hướng tới học sinh**. |
| **Ví dụ có “vì sao” và giới hạn phương pháp:** học sinh nhận ra chọn công cụ nào, do điều kiện gì, các bước suy luận và cách đối chiếu, không chỉ thấy đáp số. | Q04, Q13 (PED5) | Ví dụ/điều kiện/lỗi thường gặp tách rõ trong AP1/AP4, không bớt D2 hoặc phản ví dụ. |
| **Tự thử có điểm dừng trước Core, sửa lỗ hổng đúng chỗ:** nội dung phải nổi bật đủ để người học thực sự suy nghĩ; chỉ tự mở đáp án khi thiết kế cho phép và không chấm Mastery từ thực hành. | Q08, Q14 (PED6), Q15, Q16 | AP4 và Q16 Final Submit; không hint/key/AI trên RD1 trước Final Submit. |
| **Tự học độc lập, dễ theo dõi trên điện thoại:** thứ tự ý, kích cỡ chữ/công thức/SVG và bố cục ở các màn hình không gây mất nghĩa hoặc cuộn ngang không cần thiết; AI chỉ hỗ trợ, không là tiền đề học kiến thức bắt buộc. | Q09–Q14, Q17 | AP4/AP5, test 390/820/1440; P2 nghiệm thu iPhone/iPad **thực** khi cần. |

**Kiểm chứng mức độ hiểu:** phân biệt **dễ đọc/dễ thích** với **thực sự hiểu và chuyển giao**. Khi nghiên cứu một mẫu UI, có thể so sánh A/B cùng source và cùng outcome bằng nhiệm vụ diễn đạt ý nghĩa/điều kiện, một tình huống mới chưa xem và ý kiến học sinh; ghi cỡ mẫu, hạn chế và kết quả thật. **Chưa có người học thử thì ghi `LEARNER_EVIDENCE_PENDING`, không tự cấp PED PASS hay kết luận hiệu quả A/B**. Phương pháp này là *gợi ý bằng chứng thử nghiệm*, không phải cổng yêu cầu điểm số/cỡ mẫu cố định cho tất cả bài học.

**Ranh giới phiên bản/delta:** `DELTA_A_UI` chỉ đổi bố cục/nhãn/DOM giữ nguyên ngữ nghĩa, cần AP/QA nguồn parity; `DELTA_B_SOURCE_EQUIVALENT` chỉ thay source tương đương có chứng cứ; **viết lại lời dẫn, thay trình tự suy luận học thuật, thêm ví dụ/phép tương tự có ý nghĩa sư phạm** là `DELTA_C_ACADEMIC_MATERIAL` và cần AUTHORING + NotebookLM review phần chịu ảnh hưởng; `DELTA_D_BLOCKER` khi sai điều kiện/toán hay thiếu nguồn. RELEASE phát hiện lỗi sư phạm không thể sửa bằng UI thì trả `AUTHORING_DEFECT` có Qxx/Bài/Outcome/ảnh và minimal delta. **Không mở lại toàn bộ học liệu đã PASS chỉ vì thêm hướng dẫn v1.2.0**: bảo toàn snapshot, Q18, ưu tiên hoàn thành chương trình và chỉ audit hồi tố theo owner #675/#691.

**Liên kết bằng chứng:** [Issue #655](https://github.com/TMA2015/self-learning-math/issues/655) “gọn nhưng không nén”; [Issue #691](https://github.com/TMA2015/self-learning-math/issues/691) concept-first; [Issue #742](https://github.com/TMA2015/self-learning-math/issues/742) Toán 12 Bài 1 A/B. Các Issue chỉ lưu quyết định/chứng cứ, **không có thẩm quyền trở thành chuẩn thứ hai**. S1 SGK/SBT, 5 Permanent Sources v2.1, Golden THCS/THPT và các gói V2 giữ nguyên quy định.

## III. Cách đánh giá PASS theo đơn vị và chứng cứ

**Đơn vị nhỏ nhất là (LEARNING_PATH, LESSON_ID, OUTCOME_ID, SOURCE_BLOB, STANDARD_VERSION).** Mỗi outcome khai báo Q01–Q18 liên quan và trạng thái `PASS / REVISE / HOLD / NOT_APPLICABLE_WITH_REASON`; không tự cho N/A với Q01, Q02, Q03, Q09–Q11, Q14 hoặc Q18 khi học liệu đang dạy một concept mới. Không suy PASS toàn chương bằng trung bình hoặc tỷ lệ 80%; **một lỗi trọng yếu chưa đóng vẫn là HOLD phần chịu ảnh hưởng**. Khi một chiều không phát sinh (ví dụ không có SVG độc lập ở một outcome), chỉ ghi N/A cùng bằng chứng học qua hình dùng chung hoặc ví dụ tương đương; không tạo hình giả để đủ chỉ tiêu.

**Bản kiểm theo outcome** tối thiểu:
```text
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_CHAPTER | TOPIC
PACKET_ID: ...
ACADEMIC_SOURCE_BLOB: 40-hex
LESSON_ID: ...
OUTCOME_ID: ...
S1_PRINTED_PAGE_RECEIPT: ...  (PDF index and offset when useful)
D1: ... ; D2: EX_IDs ; D3: ITEM_IDs + roles ; D4: Written IDs
D5: FIG_IDs/interpretation ; D6: HELP_IDs
PED1: ... ; PED2: ... ; PED3: ... ; PED4: ... ; PED5: ... ; PED6: ...
RD1_MODE_AND_CUSTODY: PRIVATE_METADATA_ONLY | NOT_APPLICABLE_WITH_REASON
Q01_Q18_STATUS_AND_EVIDENCE: ...
ACADEMIC_REVIEW_RECEIPT: ... ; PED_REVIEW_RECEIPT: ...
BLOCKERS: NONE | [exact LESSON/OUTCOME/ITEM + defect + owner]
```
**Bản theo bài** tổng hợp outcome; **bản theo chương** tổng hợp các bài, không bỏ sót một outcome nào đã khai báo. Source review phải có expected/reviewed IDs, dấu vết khác biệt và những outcome chưa xét.

**Chiều sâu, không lấy số lượng làm thay:** ít nhất một ví dụ/biến thể thật sự khác cách nhận diện hoặc điều kiện khi năng lực yêu cầu. **SGK Core đúng mức nguồn SGK/chương trình**; các mức luyện tập, ứng dụng, tự luận ôn thi và tích hợp nhiều outcome có thể được tự biên soạn từ những họ dạng bài tương đương về phương pháp/điều kiện (SBT, đề thi, tài liệu tin cậy); gắn nhãn rõ `SGK_OUTCOME_ALIGNED`, `EXAM_PRACTICE` hoặc `OPTIONAL_ADVANCED` khi vượt mức Core, không giả nhận là bài SGK/SBT nguyên văn. Ưu tiên phổ từ nhận biết → thông hiểu → vận dụng → tổng hợp, bài Written có rubric; không ép quota câu/ảnh cứng. Quy định này không đặt lại số câu hoặc làm mất PASS của snapshot cũ.

## IV. Source S1 và đối chiếu số trang PDF (AUTHORING tự làm)

1. **SGK/chương trình S1 bắt buộc:** lưu `BOOK_TITLE`, lớp, tập, ấn bản, filename/PDF checksum nếu có; tách `PRINTED_PAGE` (số thực tế in trên giấy) và `PDF_PAGE_INDEX_1_BASED` (bắt đầu từ bìa). **SBT và các nguồn bài tập là nguồn tham khảo:** ghi trang/bài thực tế đã xem, loại nguồn, điều kiện, dạng bài và độ tin cậy; không bắt buộc đối chiếu mọi trang hay lời giải SBT mới được biên soạn.
2. Đối chiếu phạm vi SGK với mục lục, trang mở đầu/kết thúc bài/chương, đọc **số trang in** trên ảnh thật khi có. Với trang SBT đã truy cập, ghi thật offset đã kiểm; nếu bản quét SBT thiếu trang, đánh dấu `SBT_REFERENCE_GAP_DOCUMENTED` và **không đoán/không sao chép** bài gốc; học liệu tự biên soạn có thể dùng đề tương đương theo cùng outcome/phương pháp/điều kiện.
3. `SOURCE_RECEIPT_CONFLICT` khi hai chứng cứ nguồn **bắt buộc** mâu thuẫn ở nội dung/ấn bản/trang có ý nghĩa học thuật. AUTHORING tự kiểm SGK và PDF liên quan; NotebookLM xác minh **phạm vi/outcome và tính tương đương về phương pháp/điều kiện**, không biến việc tìm đủ một trang SBT tham khảo thành điều kiện tốt nghiệp toàn chương. Thiếu dữ liệu bài SBT không được nâng thành thiếu outcome nếu đã có bằng chứng độc lập.
4. Nếu **SGK/chương trình S1 bắt buộc** chưa thể xác minh phạm vi/kiến thức, ghi `S1_CORE_UNVERIFIED` / `BLOCKED_BY_AUTHORING`; không bịa trang hay đề. Nếu chỉ thiếu trang **SBT tham khảo**, ghi `SBT_REFERENCE_GAP_DOCUMENTED`, nêu đúng phần chưa đọc, hoàn thiện bằng bài tự biên soạn tương đương có QA toán và review outcome; **không tự cấp PASS** khi reviewer còn HOLD theo chuẩn/snapshot cũ.

## V. Một chương SGK độc lập và một chuyên đề độc lập

**SGK_CHAPTER** = lớp→chương→bài→kiến thức đầy đủ (Q01–Q14)→SGK Core canonical→Practice/Application→Written/Anchor→**Tự kiểm tra cuối chương** theo scope, có điều kiện riêng về mức độ phơi lộ và bằng chứng đánh giá. Không gọi `FULL_LEARNING_PATH` nếu chỉ có Practice và demo; nếu chỉ phát hành `PUBLIC_FORMATIVE_ONLY` thì phải khai báo trung thực và không gắn “chương đã hoàn thành”.

**TOPIC** = chuyên đề xuyên lớp (khi thích hợp)→**Kiến thức / Luyện tập / Tự kiểm tra**, đúng ba mục, không trang Core riêng. Đủ D1–D6, PED, RD0/RD1 **độc lập**, có thể dùng chung item Core SGK qua `placement_id` và cùng `item_id`/lời giải. Bằng chứng `TOPIC_READINESS` không kế thừa `SGK_CHAPTER_READINESS`; không cấp Skill Mastery từ những câu luyện tập đã xem hoặc tự đối chiếu.

**Độ sâu `FULL_LEARNING_PATH`** cần cả nguồn học thuật đầy đủ **và kế hoạch đánh giá an toàn**; nếu chỉ có client self-check thì AUTHORING phải ghi rõ `CLIENT_SELF_CHECK_NO_MASTERY`, RELEASE phải giải thích đúng cho học sinh khi phát hành, và không gọi đó là chứng cứ đánh giá độc lập.

## VI. Một luồng nghiệm thu duy nhất và ranh giới hai nhánh

| Giai đoạn | Cùng tiêu chí gốc | Chủ trách nhiệm và bằng chứng | Quyền kết luận |
|---|---|---|---|
| **AUTHORING A1–A7** | Q01–Q18 theo chương/outcome, D1–D6, PED1–PED6 | SGK/chương trình S1 cho Core, SBT/đề thi/nguồn tin cậy làm tham khảo họ dạng bài; 1 canonical source, ma trận outcome–họ dạng–mức độ–item, D1–D6/PED, RD1 metadata, source parity, `SBT_REFERENCE_GAP_DOCUMENTED` nếu có; Temp_ + prompt | Chỉ `AUTHORING_QA_PASS` về cấu trúc; không tự cấp Academic/PED PASS |
| **NOTEBOOKLM độc lập / Q18 self-QA ngoại lệ đã duyệt** | Cùng Q01–Q18; reviewer độc lập mặc định, self-QA chỉ cho Knowledge enrichment đã nghiệm thu theo §X-C | Independent: 5 Permanent v2.1/S1, reviewer receipt. Enrichment: SOURCE baseline đã PASS + tự kiểm toán toán/PED từng delta và asset, `SELF_QA_EVIDENCE_RECEIPT`, không mạo danh review độc lập | Independent có thể cấp ACADEMIC/PED PASS; self-QA có thể cấp `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` theo chuẩn hiệu lực, không cấp quyền phát hành |
| **Ký nguồn V2** (AUTHORING cho học liệu mới; chủ biên RELEASE cho Knowledge enrichment nếu chế độ Q18 được ban hành) | Q01–Q18 nguồn đã đạt verdict độc lập **hoặc** self-QA enrichment đã duyệt đúng profile | 1 V2 handoff, 1 `ready/PACKET_ID.md`, 1 REGISTER row, đúng source/receipt SHA/delta và `Q18_VERIFICATION_MODE` (self-QA khác reviewer) | `CONTENT_READY` nếu không blocker, hợp đồng V2 & CI đã tương thích mode, exact-source lock PASS |
| **RELEASE AP1–AP5** | **Kiểm tra cùng Q** ở sản phẩm học sinh, không thêm luật toán riêng | AP1 ý học rõ; AP2 công thức/MathJax; AP3 hình; AP4 tiến trình tự học; AP5 responsive 390/820/1440 + thiết bị thực khi yêu cầu | `RENDERED_QA_PASS`, không xét lại Academic PASS nếu source nguyên |
| **RELEASE R1–R5/P1/P2** | Source fidelity Q15/Q18, Q16 assessment, Q17 paths | Receipt chính xác HEAD, no hint/key trước submit, no Mastery trái phép, Golden UI/THCS, owner approval, P1/P2 | `RELEASE_READY` rồi `PUBLISHED` **chỉ sau owner authorization** |

**Quy tắc phát hiện mới từ RELEASE:** nếu một bài *đúng nguồn nhưng khó tự học*, RELEASE tạo `AUTHORING_DEFECT` tham chiếu **Qxx + LESSON_ID + OUTCOME_ID + mô tả + bằng chứng UI**; AUTHORING quyết định `DELTA_B/C/D`, sửa, review affected scope rồi chuyển một handoff mới. RELEASE không được lặng lẽ “sửa toán”; AUTHORING không được trả “đã có Academic PASS” để bỏ qua một thất bại PED được chứng minh. Nếu chỉ lỗi font, MathJax, SVG render/đường dẫn không đổi toán, ghi `DELTA_A_UI` và RELEASE tự QA, không bắt NotebookLM kiểm toán lại chương.

## VII. Snapshot + NotebookLM + Delta: bảo toàn kết quả hợp lệ

- **Một nguồn canonical** `content-drafts/` có Git blob SHA. `Temp_*.md`/txt là **gói vận chuyển review** (nếu chỉ 1–2 file đưa link từng file, ≥3 file thì `Temp_*.zip`, giải nén trước khi thêm), gửi **cùng prompt 3–6 câu**. Không đưa JSON làm nguồn NotebookLM; không giả định NotebookLM đã đọc GitHub.
- Reviewer phải xác nhận S1, exact source file/content fingerprint khi có, expected/reviewed IDs, câu/đáp án/độ sâu, PED theo lesson/outcome, P0/P1/P2, MINIMAL_DELTA. Nếu reviewer không có SHA gốc, ghi rõ hạn chế về provenance; đối chiếu nội dung, không khẳng định byte-exact input Studio.
- `DELTA_A_UI`: chỉ giao diện/nhãn không đổi nghĩa → QA UI. `DELTA_B_SOURCE_EQUIVALENT`: có đối chiếu S1, không đổi đáp án/điều kiện/rubric/outcome → QA và log, không mặc định review lại. `DELTA_C_ACADEMIC_MATERIAL`: thay đổi học thuật/sư phạm thực chất → **review độc lập affected scope theo chế độ mặc định**, hoặc **tự kiểm chứng nội bộ Q18 enrichment** chỉ nếu thỏa toàn bộ §X-C, source/asset SHA được khóa và bản chuẩn/hợp đồng đã ban hành; tuyệt đối không hạ Delta C thành A/B để qua gate. `DELTA_D_BLOCKER`: sai nghiêm trọng/thiếu nguồn → HOLD đúng phần. Không mở lại nguồn đã PASS nếu bất biến.
- Một thay đổi nhỏ có thể vẫn là C/D nếu đảo `<`/`>`, thay mẫu số, ràng buộc hoặc nghiệm. Không phân loại bằng kích thước diff.
- Mỗi lần chuyển cần `STANDARD_VERSION` trong ledger. Các chapter cũ giữ PASS **snapshot cũ**; chỉ áp tiêu chí mới hồi tố theo kế hoạch và quyết định chủ dự án, không sửa website/hoán đổi source review tùy tiện.

## VIII. Checklist PRE-REVIEW (AUTHORING — không thể tự cấp PASS)

Một chương mới **không gửi NotebookLM** nếu chưa tự kiểm:
- [ ] SGK/chương trình S1 đúng tập và đúng phạm vi Core, trang in/PDF index được kiểm; SBT/nguồn bài tập tham khảo ghi rõ phần **thực sự** đã xem, thiếu trang thì `SBT_REFERENCE_GAP_DOCUMENTED`, không tự coi đó là mất Core/outcome.
- [ ] Từng outcome có Q01–Q18 applicable, D1–D6/PED1–PED6 source pointer và nguồn tiền đề `NEW/PREREQUISITE_CONFIRMED`.
- [ ] Mỗi bài bắt đầu bằng WHY/BRIDGE/WHAT trước formal; có khi nào dùng/không dùng, ví dụ WHY, first-try, D6 thật.
- [ ] Câu canonical tự biên soạn, không trùng ID, có answer/solution/rubric, level/role/placement/outcome đúng; ma trận **outcome→họ dạng→mức độ→item** từ nhận biết đến vận dụng/tổng hợp, Written/Anchor một thư viện, RD1 private metadata tách; nguồn ngoài chỉ tham khảo và đối chiếu phương pháp, không sao chép đề/đáp án thiếu kiểm chứng.
- [ ] Hình SVG/bảng/đồ thị được kiểm toán toán học và có lời dẫn; ứng dụng/SBT không mở rộng Core.
- [ ] Chương đầy đủ trước review (nếu dài chia batch có danh mục expected toàn chương và reviewer trả theo bài/outcome/item); NotebookLM nhận file thật và prompt đúng 06.
- [ ] Học liệu chưa được review đánh dấu `AUTHORING_CANDIDATE`, không `CONTENT_READY`. Nếu rà soát phát hiện vấn đề tự học, sửa trước review, tránh liên tục thêm R02/R03 sau PASS.

## IX. Checklist PRE-HANDOFF V2 (AUTHORING)

- [ ] `A1` SGK/chương trình S1 Core canonical Git blob, version/commit, trang SGK thực sự đã kiểm; **SBT nguồn tham khảo phải ghi provenance và `SBT_REFERENCE_GAP_DOCUMENTED` nếu thiếu**, không tuyên bố đã đọc trang chưa có; `A2` outcome/scope và độ phủ họ dạng chính xác; `A3` Academic/PED reviewer receipts đúng snapshot **hoặc** (`Q18_OWNER_SELF_VERIFIED_ENRICHMENT` có hiệu lực và đủ điều kiện §X-C) `SELF_QA_EVIDENCE_RECEIPT` cùng baseline PASS source/receipt.
- [ ] `A4` LESSON/OUTCOME/ITEM matrix từng ID, role/placement/primary outcome và bằng chứng integrated outcome; `A5` D1–D6 + PED1–6 per outcome, câu/mức/dạng thật; `A6` delta log đóng hết thay đổi C/D; `A7` RD1 private custody count/hash, exposure mode trung thực.
- [ ] Một handoff V2, một manifest `ready/PACKET_ID.md`, đúng một REGISTER row, exact blob hash, `BLOCKERS:NONE`; chạy source-lock CI ở đúng HEAD. Không tự merge nguồn tác giả.
- [ ] `R1–R5`, AP1–AP5 và P1/P2 **chưa tick** nếu chưa có release QA/owner; không công bố demo là scoring thật.

## X. Quản trị thay đổi và bảo đảm “một chuẩn”

1. **Chủ dự án sở hữu quyết định thay đổi chuẩn**. Mọi yêu cầu mới phải được mở trong một `STANDARD_CHANGE_REQUEST` duy nhất: mô tả tiêu chí Q hiện tại bị ảnh hưởng, lý do, ví dụ PASS/FAIL, tính tương thích với S1/08/06/07/5 Permanent, tác động G10/G11/G12/Topic, kế hoạch migration, có/không review lại. Không thêm nguyên tắc học thuật độc lập trong PR release.
2. **Một thay đổi = nâng phiên bản tài liệu chuẩn gốc**, ghi quyết định, diff, affected Qxx và đơn vị cần áp dụng. Phân loại `PATCH` (sửa cách diễn đạt không đổi nghĩa), `MINOR` (thêm bằng chứng/tiêu chí), `MAJOR` (thay phạm vi/triết lý/hợp đồng). Owner approval và QA áp dụng trước khi merge governance.
3. **Các nguồn chuyên biệt vẫn tồn tại làm phụ lục thẩm quyền, không thành bộ chuẩn chất lượng cạnh tranh:** Project 08 chỉ định kiến trúc, 06 định cách gửi, 07 định delta, V2 định handoff, Golden/AP định cách render; 5 NotebookLM v2.1 mới là nguồn nền sau khi thay thế để reviewer trích dẫn. Tất cả checklists/automation mới phải trỏ **chính xác STANDARD_ID + VERSION + Qxx**. Khi 5 Permanent Sources cần đồng bộ, thay đúng **cả năm nguồn cùng phiên bản v2.1** theo manifest SHA256, không thêm nguồn Permanent thứ sáu, không chọn v2.0 và v2.1 cùng lúc.
4. **Migration không phá PASS cũ:** chủ dự án chốt ngày cắt phiên bản. Chương cũ PASS on old snapshot giữ hiệu lực đúng phạm vi, theo issue #675 chỉ kiểm toán hồi tố sau khi xong chương trình trừ P0. Chương mới sau khi governance v1.2.0 được merge dùng v1.2.0; chương trước đó giữ chuẩn theo snapshot/receipt của mình; các bản nháp G12 cũ giữ snapshot/receipt và chỉ review affected scope khi có blocker Q01 được giải quyết bằng quyết định mới. Chuyên đề dùng cùng Q01–Q18, nhưng profile `TOPIC` tự đủ và ba trang; không tạo chuẩn thứ hai.
5. **Freeze quản trị:** trong giai đoạn chủ dự án quyết định tạm ngừng cả authoring/release, chỉ cho phép thay đổi **governance docs/QA** trên nhánh riêng để nghiệm thu tiêu chuẩn. Không sửa câu hỏi, PDF, RD1, learner pages, assessment runtime hoặc activate workflow; không merge/deploy khi chưa được chủ dự án chấp thuận phạm vi quản trị.

## X-A. Quyết định thay đổi Q01 — Change Log 03/11/2026
- `STANDARD_CHANGE_REQUEST`: `prototypes/thpt/standard-changes/STANDARD_CHANGE_REQUEST_Q01_SOURCE_ROLES_20261103.md`; **quyết định chủ dự án đã phê duyệt trong chat 03/11/2026**, chỉ định AUTHORING thực hiện; RELEASE không đặt hoặc chỉnh chuẩn toán riêng.
- `CHANGE_CLASS=MINOR`, từ `v1.0.0 → v1.1.0`: làm rõ vai trò SGK Core vs SBT/nguồn bài tập làm tham khảo, thêm cơ chế ngoại lệ có bằng chứng cho thiếu trang SBT; **không đổi 18 Q, SGK S1 Core, chuẩn toán, Q16/private RD1, hai hành trình hoặc thẩm quyền deploy**.
- **Hiệu lực:** v1.1.0 chính thức được merge tại governance PR #726, `049fa190b05c3562816670d51defc62965986c31`, sau exact-head QA PASS và phê duyệt chủ dự án; mã hiệu lực `OFFICIAL_OWNER_APPROVED_MAIN`. Không thay thế/dùng song song Permanent Sources v2.1 hoặc mở Permanent thứ sáu. Thay đổi Q01 được trích trong **batch-source tạm thời có nguồn** khi review có tác động; đối chiếu những câu có xung đột trong Permanent v2.1 với **quyết định mới nhất của chủ dự án**, không âm thầm sửa 5 file đó.
- **Bảo toàn PASS và phạm vi delta:** những snapshot trước đây Academic/PED PASS vẫn giữ theo phiên bản cũ. ChV G12 R00 B14 Q01 HOLD cần targeted independent check theo v1.1.0, không tự upgrade/redo full review; không phát hành nếu targeted verdict chưa được chủ dự án chuyển giao.


## X-B. Quyết định hợp nhất trải nghiệm tự học — Change Log 04/11/2026

- `STANDARD_CHANGE_REQUEST`: [#742](https://github.com/TMA2015/self-learning-math/issues/742), bản đề xuất và thí điểm ở `prototypes/thpt/ux-ped/STANDARD_CHANGE_REQUEST_20261104.md` trên Draft nghiên cứu #743. **Chủ dự án phê duyệt triển khai nâng cấp tiêu chuẩn trong chat ngày 04/11/2026** sau khi chủ động yêu cầu hợp nhất thay vì rải rác và chấp thuận áp dụng.
- `CHANGE_CLASS=MINOR`, `1.1.0 → 1.2.0`: chuẩn hóa **cách chứng minh** chất lượng diễn giải/nhịp dẫn dắt và trình bày cho Q03/Q07/Q09–Q14/Q17 qua **AP1–AP5 hiện hữu**; Q01–Q18 giữ nguyên số điều, Q15/16 bảo mật không thay, không mở chuẩn mới. Không thay phạm vi chương trình, không nén/mất D1–D6.
- `OWNER_APPROVED_SCOPE=GOVERNANCE_ONLY`: cập nhật chuẩn gốc + chỉ dẫn/QA, **không cấp quyền rewrite học liệu SGK, PR RELEASE website, Firebase, Gemini, Mastery hoặc deploy học liệu**.
- `PILOT_EVIDENCE`: G12 B01 nghiên cứu từ source Git blob `7fc40081bb3f1e104e38e2c86a5bc1e8217e77cc`, 6 OUTCOME_ID chính thức, thử nghiệm A/B cô lập ở #743; **browser QA là bằng chứng kỹ thuật**, chưa chứng minh hiệu quả học tập thực tế (`LEARNER_EVIDENCE_PENDING`).
- `EFFECTIVE_VERSION_GATE`: bản này chỉ có hiệu lực sau chủ dự án cho phép, governance và Roadmap CI exact HEAD PASS, **merge**; phiên bản trước và verdict của snapshot cũ bất biến. Nếu nội dung mới cho AUTHORING phải thay sư phạm đáng kể thì `DELTA_C` review affected scope, không hồi tố đại trà.


## X-C. Đề xuất tự kiểm chứng nội bộ cho cập nhật Kiến thức SGK đã nghiệm thu — Change Log 10/11/2026 (DỰ THẢO)

**OWNER_APPROVAL_OF_EXACT_AMENDMENT:** `PENDING` — chủ dự án đã chỉ đạo giảm phản biện lặp lại nhưng chưa duyệt nguyên văn chế độ Q18 mới. Không dùng draft này để cấp CONTENT_READY, thay SHA lock hoặc mở quyền deploy.

- `STANDARD_CHANGE_REQUEST`: [Q18 enrichment self-verification](standard-changes/STANDARD_CHANGE_REQUEST_Q18_ENRICHMENT_SELF_VERIFICATION_20261110.md). `OWNER_DIRECTION=2026-11-10`: không buộc review độc lập lặp lại cho ví dụ/lời dẫn/hình có thể tự kiểm chứng trong Knowledge đã nghiệm thu; `EXACT_AMENDMENT_APPROVAL=PENDING` cho đến khi chủ dự án duyệt quy tắc và bản chuẩn chính xác.
- `CHANGE_CLASS=MAJOR`, đề xuất `1.2.0 → 2.0.0` vì bổ sung chế độ bằng chứng thay cho reviewer độc lập trong phạm vi hẹp; **không thay Q01–Q17** và không mở một bộ chuẩn khác.
- `Q18_INDEPENDENT_REVIEW`: mặc định cho học liệu mới, đổi Core/outcome/điều kiện/đáp án/rubric/RD1, không có baseline PASS, sai toán/nguồn chưa giải quyết. Reviewer Q18 theo hiện hành.
- `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`: chỉ cho cải tiến trang Kiến thức **đã có baseline Academic/PED PASS**, không đổi Core/outcome, điều kiện định lý, ngân hàng câu, Final Submit hoặc Mastery. nhánh **trực tiếp nâng cấp Kiến thức SGK (RELEASE trong giai đoạn hiện tại)** kiểm S1 và **tính lại từng ví dụ mới**,  kiểm hình/đơn vị/nhãn, PED theo outcome; `SELF_QA_EVIDENCE_RECEIPT` ghi từng `DELTA_ID`, baseline+candidate Git blob, P0/P1/P2 và đường khắc phục. RELEASE cũng kiểm fidelity/QA triển khai theo cổng riêng, nhưng không gọi tự kiểm là reviewer PASS. Không coi kết quả browser hoặc checksum là chứng cứ toán PASS.
- `COMPATIBILITY_HOLD`: Source 07 v1.1 còn ghi DELTA_C phải review NotebookLM; V2/handoff/CI còn chỉ nhận reviewer PASS. **Trước khi owner phê duyệt và đồng bộ văn bản/hợp đồng cùng QA, vẫn `STANDARD_CONFLICT_HOLD`, không cấp CONTENT_READY/merge/deploy từ chế độ mới.** Bảo toàn PASS lịch sử đúng snapshot.
- `G10_SCOPE`: PR #797 27 trang Knowledge và 11 SVG, owner đã cho phép phát hành **khi các cổng đã cập nhật hợp lệ đạt**; `OWNER_LANE=RELEASE` chịu trách nhiệm tự kiểm chứng nguồn mới mình chỉnh, không mặc định trả về AUTHORING của Chuyên đề. Không tự suy quyền áp dụng sang Topic/học liệu chưa nghiệm thu hoặc thay đổi đánh giá G11/G12.

## XI. Truy vết nguồn → điều khoản và phân công

| Nguồn quyết định/kiểm toán | Điều chuẩn Qxx | Cổng AUTHORING | Cổng RELEASE |
|---|---|---|---|
| S1 SGK/chương trình + SBT/nguồn bài tập tham khảo + Project 08 | Q01,Q02,Q03,Q05,Q17 | A1,A2,A4,A5 | R1 fidelity |
| Phạm vi học thuật D1–D6, SBT Core/Practice, Written | Q03–Q08,Q15 | A4,A5,A7 | R1, AP1–AP3 |
| Chủ dự án #691 / concept-first v1 | Q09–Q14 | PED1–PED6, A5, NotebookLM PED | AP1,AP4 |
| 5 Permanent THPT v2.1 + Source 06 | Q01–Q18 | A3/Q18 review packets | No forged PASS |
| Source 07 delta v1.1 | Q18 (mọi nội dung) | A6 | DELTA_A QA / affected C return |
| Source 08 two-path design | Q15,Q16,Q17 | A4,A7 | R3,R4, AP4 |
| Source-locked handoff V2 PR #699 | Q01,Q02,Q15,Q18 | A1–A7+READY | R1–R5 |
| Issue #655 AP1–AP5; Golden R4 | Q03,Q07,Q09–Q14,Q16,Q17 (in rendered view) | Evidence before handoff | AP1–AP5, P2 |
| Issue #742 nâng cấp diễn giải, #691 concept-first, #655 trình bày (v1.2.0) | Q03,Q04,Q07,Q08,Q09–Q14,Q17, Q18 | PED1–PED6 evidence theo outcome, giữ nguyên source/review | AP1–AP5 trên bản hiển thị, không phát sinh tiêu chí toán mới |
| Issue #662 Final Submit and #675 program sequencing | Q16–Q18 | RD1 custody, source honesty | R3,R4,R5,P1/P2 |

**NO_UNRESOLVED_DUPLICATE_STANDARD:** This file is the proposed single normative definition of THPT learning-content quality; any older academic/pedagogic contract/checklist is **source history or implementation guidance only** unless a higher-authority owner/S1/08/06/07 decision remains binding. This does **not** auto-amend the five existing NotebookLM Permanent Sources or create PASS for old lessons.
