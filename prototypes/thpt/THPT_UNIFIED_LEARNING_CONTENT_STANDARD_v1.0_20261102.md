# SELF-LEARNING MATH — TIÊU CHUẨN CHẤT LƯỢNG HỌC LIỆU THPT THỐNG NHẤT v1.0

**STANDARD_ID:** `SLM-THPT-QUALITY-ONE`  
**VERSION:** `1.0.0-draft-20261102` · **OWNER:** Chủ dự án Self-Learning Math / G Learning  
**STATUS:** `GOVERNANCE_DRAFT_PENDING_OWNER_APPROVAL` — chỉ có hiệu lực chính thức sau khi chủ dự án nghiệm thu và tích hợp PR quản trị; **KHÔNG** tự sửa chương, chuyển gói, merge/deploy hoặc tái khởi động automation.  
**SCOPE:** mọi học liệu Toán THPT 10–12 KNTT theo **SGK_CHAPTER** và **TOPIC**; áp dụng cho cả tác giả, NotebookLM và nhánh phát hành. **Một tiêu chuẩn chất lượng; các cổng kiểm tra phân theo trách nhiệm, không phải hai bộ tiêu chuẩn cạnh tranh.**

## 0. Luật thống nhất và thứ tự hiệu lực

1. **Chỉ có một bộ tiêu chí chất lượng:** các điều `Q01–Q18` bên dưới là tiêu chí nghiệm thu nội dung. `A1–A7` là bằng chứng nguồn/học liệu của AUTHORING; `PED1–PED6` là chiều sư phạm của chính học liệu; `AP1–AP5`, `R1–R5`, `P1/P2` là kiểm tra **bản thể hiện/triển khai** của cùng tiêu chuẩn sau bàn giao. Không có “chuẩn học thuật của release” riêng để bổ sung ngầm cho chuẩn của tác giả.
2. **Thẩm quyền:** (a) quyết định mới nhất của chủ dự án; (b) chính SGK/SBT KNTT, chương trình chính thức **S1 đối với sự thật toán học và phạm vi Core**; (c) Project Source `08` cho hai hành trình/nguồn dùng chung, `06` cho vận chuyển review, `07 v1.1` cho delta; (d) đúng 5 Permanent Sources THPT v2.1 do chủ dự án quyết định thay thế v2.0 (sau khi owner cài đặt); (e) hợp đồng bàn giao `THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md`; (f) tiêu chuẩn thống nhất này là **tập hợp cách kiểm chứng** các nguồn trên, không hủy quyết định cao hơn. Nếu phát hiện xung đột, ghi `STANDARD_CONFLICT_HOLD`, xin quyết định chủ dự án và phát hành một phiên bản chuẩn mới; không tự chọn kết luận tiện cho branch.
3. **Điều kiện phiên bản:** mỗi chuẩn và checklist phải ghi `STANDARD_ID`, `STANDARD_VERSION`, `ACADEMIC_SOURCE_BLOB`, `REVIEW_RECEIPT_BLOB`, `RELEASE_SCOPE`, `LESSON_IDS`, `OUTCOME_IDS`, `PUBLIC_ITEM_IDS`, `ASSESSMENT_MODE` và danh sách `BLOCKERS`. Việc áp dụng phiên bản chuẩn mới cho **nội dung mới** là mặc định sau owner approval; nội dung **đã phát hành** giữ đóng băng theo #675/#691 và quy tắc delta, không kiểm toán hồi tố đồng loạt.
4. **Nguồn quy định có tên và khả năng đồng bộ:** `06_NOTEBOOKLM_REVIEW_HANDOFF_PROTOCOL_v1.0.md` (vận chuyển file + prompt), `07_THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.1.md` (phân loại DELTA), `08_THPT_DUAL_COMPLETE_LEARNING_PATHS_AND_SHARED_RESOURCES_v2.0.md` (hành trình SGK/Chuyên đề). Theo quyết định chủ dự án 02/11/2026, **không cần đối chiếu byte các nguồn Permanent v2.0 cũ** mà thay trọn bộ bằng **năm file v2.1 mới**: `01_THPT_MASTER_PLAN_v2.1.md`, `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.1.md`, `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.1.md`, `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.1.md`, `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.1.md`. Danh mục, phạm vi, hướng dẫn thay thế và SHA256 từng file tại `prototypes/thpt/notebooklm-permanent-sources/THPT_5_PERMANENT_SOURCES_v2.1_REPLACEMENT_MANIFEST_20261102.md`; chủ dự án phải giải nén ZIP, bỏ chọn/xóa 5 Permanent v2.0 **trước** khi thêm đủ 5 v2.1. **NOTEBOOKLM_V21_SOURCE_INSTALLATION=PENDING_OWNER_ACTION** cho đến khi người dùng xác nhận. Không thêm nguồn quy tắc thứ sáu, không giả định NotebookLM tự đồng bộ, không làm mất PASS lịch sử hợp lệ đúng snapshot.

5. **Không cộng tác tưởng tượng:** hai cuộc trò chuyện không tự chuyển trạng thái; chỉ GitHub PR/Issue, file source-locked, owner-pasted NotebookLM verdict và manifest thực mới là bằng chứng. Không coi checklist đã tick, số lượng item hay green CI là chứng cứ toán học/PED độc lập.

## I. Các định nghĩa bắt buộc

- `ACADEMIC_PASS`: reviewer độc lập xác nhận tính đúng toán, độ sâu, nguồn S1, D1–D6, phạm vi và ID **đúng snapshot được xét**.
- `PED_PASS`: reviewer độc lập xác nhận học sinh chưa biết có thể đi từ động cơ đến khái niệm, ví dụ có suy luận và Tự thử/D6, **theo bài/outcome**, trên đúng snapshot.
- `CONTENT_READY`: AUTHORING đã có cả Academic + PED PASS, kiểm toán A1–A7 đầy đủ, source & receipt được khóa đúng SHA, manifest canonical trong `ready/` và REGISTER đúng một dòng. **Không** có nghĩa website đã hoạt động hay kiểm tra độc lập tính năng đánh giá.
- `INTEGRATION_CANDIDATE`: RELEASE đã tiếp nhận nguồn chuẩn nhưng cần AP1–AP5, R1–R5 và exact-head QA. Không tự nâng thành `RELEASE_READY`.
- `PUBLISHED/P1`: nguồn và website thực tế đã deploy được xác minh; `P2` là bằng chứng iPhone/iPad Safari thực, không suy từ viewport mô phỏng.
- `BLOCKED_BY_AUTHORING`: thiếu hoặc sai nguồn, lý thuyết, outcome, PED, kết quả NotebookLM, ID/rubric, private custody, hoặc source hash. `BLOCKED_BY_RELEASE`: source READY nhưng giao diện, MathJax, tương tác, an toàn Final Submit, CI, quyền deploy hoặc thiết bị thực chưa đạt.
- `RD0`: outcome/kiến thức, D1–D6 và luyện tập theo chương/chuyên đề. `RD1`: bộ Tự kiểm tra tách biệt có yêu cầu nguồn/tiếp xúc/đánh giá riêng; **demo/client self-check** không phải chứng cứ Mastery.

## II. Ma trận chuẩn chất lượng duy nhất Q01–Q18

| ID | Điều kiện PASS bắt buộc | Bằng chứng tối thiểu | Lỗi phải chặn / tuyến chịu trách nhiệm |
|---|---|---|---|
| **Q01 S1/Scope** | Đủ và đúng phạm vi chính thức của SGK/SBT KNTT theo lớp/tập/chương, không tự đẩy kiến thức tham khảo thành SGK Core | SGK/SBT bản gốc, ma trận Bài→outcome, danh sách bao gồm/loại trừ, trang **in** đã kiểm | A2 HOLD nếu sách/ấn bản/trang không xác nhận; AUTHORING |
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
| **Q18 Review/fidelity** | Academic **và** PED verdict độc lập trên snapshot đúng, P0/P1/P2/MINIMAL_DELTA closed, nguồn Git blob và receipt blob khớp, lịch sử delta bảo toàn | Temp_ source + prompt 3–6 câu theo 06; 5 Permanent THPT v2.1 + S1; scoped review theo 07; A1–A7 V2 | Reviewer PASS sai blob, receipt thiếu hoặc source đổi = HOLD |

**Lưu ý:** ma trận Q01–Q18 là **chuẩn học liệu** dùng chung; các nhãn `PED1–6` và `D1–D6` là trục chi tiết của **cùng chuẩn**, không phải tiêu chuẩn bổ sung độc lập sau khi Q đã PASS.

## III. Cách đánh giá PASS theo đơn vị và chứng cứ

**Đơn vị nhỏ nhất là (LEARNING_PATH, LESSON_ID, OUTCOME_ID, SOURCE_BLOB, STANDARD_VERSION).** Mỗi outcome khai báo Q01–Q18 liên quan và trạng thái `PASS / REVISE / HOLD / NOT_APPLICABLE_WITH_REASON`; không tự cho N/A với Q01, Q02, Q03, Q09–Q11, Q14 hoặc Q18 khi học liệu đang dạy một concept mới. Không suy PASS toàn chương bằng trung bình hoặc tỷ lệ 80%; **một lỗi trọng yếu chưa đóng vẫn là HOLD phần chịu ảnh hưởng**. Khi một chiều không phát sinh (ví dụ không có SVG độc lập ở một outcome), chỉ ghi N/A cùng bằng chứng học qua hình dùng chung hoặc ví dụ tương đương; không tạo hình giả để đủ chỉ tiêu.

**Bản kiểm theo outcome** tối thiểu:
```text
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
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

**Chiều sâu, không lấy số lượng làm thay:** ít nhất một ví dụ/biến thể thật sự khác cách nhận diện hoặc điều kiện khi năng lực yêu cầu; Core đúng mức SGK, Application chỉ trong S1 khi gắn SGK; các mức khó/biểu diễn khác nhau phải có lý do, không ép quota câu/ảnh cứng. Quy định này không đặt lại số câu của các chapter đã PASS.

## IV. Source S1 và đối chiếu số trang PDF (AUTHORING tự làm)

1. Lưu `BOOK_TITLE`, lớp, tập, ấn bản, filename/PDF checksum nếu có; tách `PRINTED_PAGE` (số thực tế in trên giấy) và `PDF_PAGE_INDEX_1_BASED` (bắt đầu từ bìa), cùng phần lời giải của SBT. Các mục SGK/SBT có thể có số trang khác nhau; không đồng nhất hai loại.
2. Đối chiếu mục lục, trang mở đầu và kết thúc bài/chương, đọc **số trang in** trên ảnh thật nếu có. Đừng suy số trang in bằng `pdf_index – constant` cho mọi trang nếu file có chèn/trang lặp/thiếu; chỉ ghi offset đã **kiểm tra thực tế cho đoạn**.
3. `SOURCE_RECEIPT_CONFLICT` nếu hai biên bản cùng S1 có khoảng trang chồng lấn không giải thích được. **AUTHORING tự kiểm PDF trước**; chỉ yêu cầu NotebookLM xác nhận ngoại lệ khi sách gốc không có/không đọc được hoặc nguồn mâu thuẫn về học thuật. Không bắt NotebookLM làm nhiệm vụ tìm trang cơ học của tác giả.
4. Nếu PDF chưa truy cập được, ghi `S1_UNVERIFIED` / `BLOCKED_BY_AUTHORING`, không bịa trang rồi nhờ reviewer hợp thức hóa.

## V. Một chương SGK độc lập và một chuyên đề độc lập

**SGK_CHAPTER** = lớp→chương→bài→kiến thức đầy đủ (Q01–Q14)→SGK Core canonical→Practice/Application→Written/Anchor→**Tự kiểm tra cuối chương** theo scope, có điều kiện riêng về mức độ phơi lộ và bằng chứng đánh giá. Không gọi `FULL_LEARNING_PATH` nếu chỉ có Practice và demo; nếu chỉ phát hành `PUBLIC_FORMATIVE_ONLY` thì phải khai báo trung thực và không gắn “chương đã hoàn thành”.

**TOPIC** = chuyên đề xuyên lớp (khi thích hợp)→**Kiến thức / Luyện tập / Tự kiểm tra**, đúng ba mục, không trang Core riêng. Đủ D1–D6, PED, RD0/RD1 **độc lập**, có thể dùng chung item Core SGK qua `placement_id` và cùng `item_id`/lời giải. Bằng chứng `TOPIC_READINESS` không kế thừa `SGK_CHAPTER_READINESS`; không cấp Skill Mastery từ những câu luyện tập đã xem hoặc tự đối chiếu.

**Độ sâu `FULL_LEARNING_PATH`** cần cả nguồn học thuật đầy đủ **và kế hoạch đánh giá an toàn**; nếu chỉ có client self-check thì AUTHORING phải ghi rõ `CLIENT_SELF_CHECK_NO_MASTERY`, RELEASE phải giải thích đúng cho học sinh khi phát hành, và không gọi đó là chứng cứ đánh giá độc lập.

## VI. Một luồng nghiệm thu duy nhất và ranh giới hai nhánh

| Giai đoạn | Cùng tiêu chí gốc | Chủ trách nhiệm và bằng chứng | Quyền kết luận |
|---|---|---|---|
| **AUTHORING A1–A7** | Q01–Q18 theo chương/outcome, D1–D6, PED1–PED6 | SGK/SBT S1, 1 canonical source, 1 item/outcome matrix, D1–D6/PED evidence, metadata RD1, source parity/ID; Temp_ + prompt | Chỉ `AUTHORING_QA_PASS` về cấu trúc; không tự cấp Academic/PED PASS |
| **NOTEBOOKLM độc lập** | Cùng Q01–Q18, đặc biệt sự thật toán/độ sâu và PED, theo snapshot | 5 Permanent Sources v2.1, review theo bài/outcome/item, P0–P2, MINIMAL_DELTA, source receipt | Có thể cấp `ACADEMIC_PASS`, `PED_PASS` trong đúng phạm vi xét; không cấp quyền phát hành |
| **AUTHORING ký V2** | Q01–Q18 nguồn đã PASS độc lập | 1 `release-handoffs/` V2, 1 `ready/PACKET_ID.md`, 1 REGISTER row, source SHA/receipt SHA/delta | `CONTENT_READY` nếu **không blocker nguồn** và V2 CI source-lock PASS |
| **RELEASE AP1–AP5** | **Kiểm tra cùng Q** ở sản phẩm học sinh, không thêm luật toán riêng | AP1 ý học rõ; AP2 công thức/MathJax; AP3 hình; AP4 tiến trình tự học; AP5 responsive 390/820/1440 + thiết bị thực khi yêu cầu | `RENDERED_QA_PASS`, không xét lại Academic PASS nếu source nguyên |
| **RELEASE R1–R5/P1/P2** | Source fidelity Q15/Q18, Q16 assessment, Q17 paths | Receipt chính xác HEAD, no hint/key trước submit, no Mastery trái phép, Golden UI/THCS, owner approval, P1/P2 | `RELEASE_READY` rồi `PUBLISHED` **chỉ sau owner authorization** |

**Quy tắc phát hiện mới từ RELEASE:** nếu một bài *đúng nguồn nhưng khó tự học*, RELEASE tạo `AUTHORING_DEFECT` tham chiếu **Qxx + LESSON_ID + OUTCOME_ID + mô tả + bằng chứng UI**; AUTHORING quyết định `DELTA_B/C/D`, sửa, review affected scope rồi chuyển một handoff mới. RELEASE không được lặng lẽ “sửa toán”; AUTHORING không được trả “đã có Academic PASS” để bỏ qua một thất bại PED được chứng minh. Nếu chỉ lỗi font, MathJax, SVG render/đường dẫn không đổi toán, ghi `DELTA_A_UI` và RELEASE tự QA, không bắt NotebookLM kiểm toán lại chương.

## VII. Snapshot + NotebookLM + Delta: bảo toàn kết quả hợp lệ

- **Một nguồn canonical** `content-drafts/` có Git blob SHA. `Temp_*.md`/txt là **gói vận chuyển review** (nếu chỉ 1–2 file đưa link từng file, ≥3 file thì `Temp_*.zip`, giải nén trước khi thêm), gửi **cùng prompt 3–6 câu**. Không đưa JSON làm nguồn NotebookLM; không giả định NotebookLM đã đọc GitHub.
- Reviewer phải xác nhận S1, exact source file/content fingerprint khi có, expected/reviewed IDs, câu/đáp án/độ sâu, PED theo lesson/outcome, P0/P1/P2, MINIMAL_DELTA. Nếu reviewer không có SHA gốc, ghi rõ hạn chế về provenance; đối chiếu nội dung, không khẳng định byte-exact input Studio.
- `DELTA_A_UI`: chỉ giao diện/nhãn không đổi nghĩa → QA UI. `DELTA_B_SOURCE_EQUIVALENT`: có đối chiếu S1, không đổi đáp án/điều kiện/rubric/outcome → QA và log, không mặc định review lại. `DELTA_C_ACADEMIC_MATERIAL`: thay đổi học thuật/sư phạm thực chất → **NotebookLM chỉ review affected scope**. `DELTA_D_BLOCKER`: sai nghiêm trọng/thiếu nguồn → HOLD đúng phần. Không mở lại nguồn R01/B01/B02 đã PASS nếu bất biến.
- Một thay đổi nhỏ có thể vẫn là C/D nếu đảo `<`/`>`, thay mẫu số, ràng buộc hoặc nghiệm. Không phân loại bằng kích thước diff.
- Mỗi lần chuyển cần `STANDARD_VERSION` trong ledger. Các chapter cũ giữ PASS **snapshot cũ**; chỉ áp tiêu chí mới hồi tố theo kế hoạch và quyết định chủ dự án, không sửa website/hoán đổi source review tùy tiện.

## VIII. Checklist PRE-REVIEW (AUTHORING — không thể tự cấp PASS)

Một chương mới **không gửi NotebookLM** nếu chưa tự kiểm:
- [ ] S1 SGK/SBT đúng tập, in-page vs PDF index đối chiếu, chapter/outcome scope đóng băng; loại trừ phần ngoài Core.
- [ ] Từng outcome có Q01–Q18 applicable, D1–D6/PED1–PED6 source pointer và nguồn tiền đề `NEW/PREREQUISITE_CONFIRMED`.
- [ ] Mỗi bài bắt đầu bằng WHY/BRIDGE/WHAT trước formal; có khi nào dùng/không dùng, ví dụ WHY, first-try, D6 thật.
- [ ] Câu canonical không trùng ID, có answer/solution/rubric, level/role/placement/outcome đúng; Written/Anchor một thư viện; RD1 private metadata tách.
- [ ] Hình SVG/bảng/đồ thị được kiểm toán toán học và có lời dẫn; ứng dụng/SBT không mở rộng Core.
- [ ] Chương đầy đủ trước review (nếu dài chia batch có danh mục expected toàn chương và reviewer trả theo bài/outcome/item); NotebookLM nhận file thật và prompt đúng 06.
- [ ] Học liệu chưa được review đánh dấu `AUTHORING_CANDIDATE`, không `CONTENT_READY`. Nếu rà soát phát hiện vấn đề tự học, sửa trước review, tránh liên tục thêm R02/R03 sau PASS.

## IX. Checklist PRE-HANDOFF V2 (AUTHORING)

- [ ] `A1` source S1 canonical Git blob, version/commit, trang sách đã kiểm; `A2` outcome/scope chính xác; `A3` Academic **và** PED reviewer receipts đúng snapshot.
- [ ] `A4` LESSON/OUTCOME/ITEM matrix từng ID, role/placement/primary outcome và bằng chứng integrated outcome; `A5` D1–D6 + PED1–6 per outcome, câu/mức/dạng thật; `A6` delta log đóng hết thay đổi C/D; `A7` RD1 private custody count/hash, exposure mode trung thực.
- [ ] Một handoff V2, một manifest `ready/PACKET_ID.md`, đúng một REGISTER row, exact blob hash, `BLOCKERS:NONE`; chạy source-lock CI ở đúng HEAD. Không tự merge nguồn tác giả.
- [ ] `R1–R5`, AP1–AP5 và P1/P2 **chưa tick** nếu chưa có release QA/owner; không công bố demo là scoring thật.

## X. Quản trị thay đổi và bảo đảm “một chuẩn”

1. **Chủ dự án sở hữu quyết định thay đổi chuẩn**. Mọi yêu cầu mới phải được mở trong một `STANDARD_CHANGE_REQUEST` duy nhất: mô tả tiêu chí Q hiện tại bị ảnh hưởng, lý do, ví dụ PASS/FAIL, tính tương thích với S1/08/06/07/5 Permanent, tác động G10/G11/G12/Topic, kế hoạch migration, có/không review lại. Không thêm nguyên tắc học thuật độc lập trong PR release.
2. **Một thay đổi = nâng phiên bản tài liệu chuẩn gốc**, ghi quyết định, diff, affected Qxx và đơn vị cần áp dụng. Phân loại `PATCH` (sửa cách diễn đạt không đổi nghĩa), `MINOR` (thêm bằng chứng/tiêu chí), `MAJOR` (thay phạm vi/triết lý/hợp đồng). Owner approval và QA áp dụng trước khi merge governance.
3. **Các nguồn chuyên biệt vẫn tồn tại làm phụ lục thẩm quyền, không thành bộ chuẩn chất lượng cạnh tranh:** Project 08 chỉ định kiến trúc, 06 định cách gửi, 07 định delta, V2 định handoff, Golden/AP định cách render; 5 NotebookLM v2.1 mới là nguồn nền sau khi thay thế để reviewer trích dẫn. Tất cả checklists/automation mới phải trỏ **chính xác STANDARD_ID + VERSION + Qxx**. Khi 5 Permanent Sources cần đồng bộ, thay đúng **cả năm nguồn cùng phiên bản v2.1** theo manifest SHA256, không thêm nguồn Permanent thứ sáu, không chọn v2.0 và v2.1 cùng lúc.
4. **Migration không phá PASS cũ:** chủ dự án chốt ngày cắt phiên bản. Chương cũ PASS on old snapshot giữ hiệu lực đúng phạm vi, theo issue #675 chỉ kiểm toán hồi tố sau khi xong chương trình trừ P0. Chương mới (đặc biệt G12) dùng v1.0 từ DRAFT ngay đầu tiên sau khi owner phê duyệt. Chuyên đề dùng cùng Q01–Q18, nhưng profile `TOPIC` tự đủ và ba trang; không tạo chuẩn thứ hai.
5. **Freeze quản trị:** trong giai đoạn chủ dự án quyết định tạm ngừng cả authoring/release, chỉ cho phép thay đổi **governance docs/QA** trên nhánh riêng để nghiệm thu tiêu chuẩn. Không sửa câu hỏi, PDF, RD1, learner pages, assessment runtime hoặc activate workflow; không merge/deploy khi chưa được chủ dự án chấp thuận phạm vi quản trị.

## XI. Truy vết nguồn → điều khoản và phân công

| Nguồn quyết định/kiểm toán | Điều chuẩn Qxx | Cổng AUTHORING | Cổng RELEASE |
|---|---|---|---|
| S1 SGK/SBT + Project 08 | Q01,Q02,Q03,Q05,Q17 | A1,A2,A4,A5 | R1 fidelity |
| Phạm vi học thuật D1–D6, SBT Core/Practice, Written | Q03–Q08,Q15 | A4,A5,A7 | R1, AP1–AP3 |
| Chủ dự án #691 / concept-first v1 | Q09–Q14 | PED1–PED6, A5, NotebookLM PED | AP1,AP4 |
| 5 Permanent THPT v2.1 + Source 06 | Q01–Q18 | A3/Q18 review packets | No forged PASS |
| Source 07 delta v1.1 | Q18 (mọi nội dung) | A6 | DELTA_A QA / affected C return |
| Source 08 two-path design | Q15,Q16,Q17 | A4,A7 | R3,R4, AP4 |
| Source-locked handoff V2 PR #699 | Q01,Q02,Q15,Q18 | A1–A7+READY | R1–R5 |
| Issue #655 AP1–AP5; Golden R4 | Q03,Q07,Q09–Q14,Q16,Q17 (in rendered view) | Evidence before handoff | AP1–AP5, P2 |
| Issue #662 Final Submit and #675 program sequencing | Q16–Q18 | RD1 custody, source honesty | R3,R4,R5,P1/P2 |

**NO_UNRESOLVED_DUPLICATE_STANDARD:** This file is the proposed single normative definition of THPT learning-content quality; any older academic/pedagogic contract/checklist is **source history or implementation guidance only** unless a higher-authority owner/S1/08/06/07 decision remains binding. This does **not** auto-amend the five existing NotebookLM Permanent Sources or create PASS for old lessons.
