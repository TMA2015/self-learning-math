# Math App — Quy trình NotebookLM theo cụm bài và xử lý sửa đổi nhỏ · Toán THPT v1.2 · CÓ HIỆU LỰC

**Ngày hiệu lực:** 10/11/2026 theo quyết định chủ dự án; Q18 v2.0.0 đã merge vào main qua governance PR #804. Bản Project Source 07 v1.1 chỉ dùng làm lịch sử sau khi chủ dự án đồng bộ bản đang gắn trong Project.  
**Loại tài liệu:** Permanent Project Source cho ChatGPT Math App (không phải Batch Source gửi review).  
**Phạm vi:** Toán THPT lớp 10–12, R4, SGK/SBT Kết nối tri thức.  
**Phối hợp với:** `06_NOTEBOOKLM_REVIEW_HANDOFF_PROTOCOL_v1.0.md` (quy tắc bàn giao file và prompt, vẫn bắt buộc).

**Trạng thái sử dụng:** Điều VIII và chuẩn gốc v2.0.0 §X-C quyết định phạm vi đang có hiệu lực; điều VII là lịch sử đề xuất đã được giải quyết, không phải một HOLD mới. Ngoại lệ tự kiểm Knowledge SGK **không** áp mặc định cho AUTHORING Topic mới. Khi tiến hành NotebookLM review thật, áp Source 06, năm Permanent Sources THPT v2.1 và một lần review đúng Delta chịu ảnh hưởng.

**OWNER APPROVED — SINGLE SOURCE:** Bản v1.2 thay quy tắc Delta vận hành cũ kể từ khi Q18 v2.0.0 merged vào main; không phải chuẩn thứ hai hoặc Permanent Source NotebookLM thứ sáu.

## I. Quy mô review theo giai đoạn

- **Chưa nghiệm thu Golden UI:** Review đơn lẻ từng bài hoặc chuyên đề mẫu để xác nhận kiến trúc học, trình bày, tương tác và học thuật.
- **Sau khi nghiệm thu Golden UI:** Mặc định tổ chức review theo **cụm bài cùng chương**, hoặc **cả chương** nếu khối lượng vừa phải và NotebookLM có thể kiểm tra đầy đủ từng outcome và từng item.
- Không bắt buộc một số bài cứng. Với chương lớn, chia thành các cụm có nội dung liên quan (thường khoảng 3–5 bài, tùy số lượng câu, đồ thị và độ phức tạp); với chương ngắn, có thể review toàn chương.
- Chuyên đề xuyên lớp cần review theo các cụm kiến thức tự đủ, có liên kết tiền đề rõ. Một bài mẫu PASS không chứng minh toàn bộ chuyên đề/chương PASS.
- Mỗi batch phải cung cấp danh mục `LESSON_ID`, `OUTCOME_ID`, `ITEM_ID`, đáp án, lời giải, nguồn SGK/SBT và phạm vi bài/chương. NotebookLM phải trả verdict theo **từng bài, từng outcome và từng item**, đồng thời đối chiếu số mục đã review/thiếu/lặp.

## II. Quyền chủ động sửa sau khi nhận NotebookLM review

Đánh giá **rủi ro thực chất**, không dựa vào số dòng sửa hoặc chỉ tên P0/P1/P2.

| Phân loại | Đặc điểm | Hành động |
|---|---|---|
| `DELTA_A_UI` | Chính tả không đổi nghĩa, giao diện, CSS, responsive, nhãn, liên kết và hiển thị hình nhưng không thay đổi toán học | ChatGPT tự sửa, tự QA, **không cần NotebookLM review lại** |
| `DELTA_B_SOURCE_EQUIVALENT` | Chỉnh nhỏ có chỉ dẫn nguồn/reviewer rõ ràng, tương đương nghĩa toán học, không thay đổi điều kiện, đáp án, rubric hay mục tiêu | ChatGPT được chủ động sửa, kiểm chứng và ghi log; **không bắt buộc review lại** |
| `DELTA_C_ACADEMIC_MATERIAL` | Thêm/bớt outcome, đổi phát biểu/điều kiện toán, công thức, đáp án, phương pháp trọng yếu, rubric, phân tầng Core/Practice/Readiness, thêm nhóm item; hoặc bổ sung ví dụ/lời giảng/hình có nội dung toán đáng kể | **Mặc định review độc lập phần chịu ảnh hưởng**, không review lại toàn chương. **Ngoại lệ có điều kiện:** chỉ cập nhật trang Kiến thức SGK đã nghiệm thu, không đổi Core/outcome/định lý/điều kiện/câu hỏi canonical/đáp án/rubric/Q15/Q16/RD1, đã tự kiểm S1, toán từng ví dụ/hình, PED và khóa `SELF_QA_EVIDENCE_RECEIPT` theo đúng mode Q18 đã được phê duyệt; khi đó không bắt buộc NotebookLM mới. Nếu thiếu một điều kiện, HOLD/review phần ảnh hưởng. |
| `DELTA_D_BLOCKER` | Sai toán nghiêm trọng, sai chấm, mâu thuẫn SGK hoặc thiếu nguồn không giải quyết được | Chặn nghiệm thu phần liên quan, xử lý nguồn và review lại |

**Cảnh báo:** Một thay đổi rất ngắn nhưng đảo dấu `>`, `<`, `≠`, đổi điều kiện xác định hoặc đáp án luôn có thể là thay đổi học thuật nghiêm trọng. Khi không chắc, phân loại C/D. Không dùng việc tự kiểm toán nội bộ như một phép đổi nhãn giả tạo từ Delta C thành A/B; cũng không dùng CI render/đếm công thức thay cho chứng minh toán.

Nếu NotebookLM đã chỉ định một sửa đổi **đơn trị, có căn cứ SGK cụ thể, không đổi ý nghĩa/đáp án/phạm vi**, ChatGPT được triển khai và QA mà không yêu cầu vòng review lại chỉ vì có một commit mới. Các thay đổi lớn hoặc nội dung mới vẫn cần **bằng chứng kiểm chứng phù hợp mode Q18 đã được ban hành**: mặc định reviewer độc lập; chỉ riêng cập nhật Kiến thức SGK đã nghiệm thu đủ điều kiện mới dùng hồ sơ tự kiểm chứng.

## III. Nhật ký sửa đổi và các cổng nghiệm thu

Ghi gọn trong PR/checkpoint sau mỗi đợt sửa:

- `BASE_ACADEMIC_PACKET` và verdict; `CHANGESET_COMMIT`; `AFFECTED_LESSON_IDS` và `AFFECTED_ITEM_IDS`.
- `DELTA_CLASS`, mô tả thay đổi, chứng cứ SGK/reviewer; đánh dấu có/không đổi ý nghĩa toán, đáp án/rubric, mục tiêu.
- Kết quả CI/browser QA phù hợp; `NOTEBOOKLM_REREVIEW=NOT_REQUIRED_WITH_REASON | REQUIRED | PASS`; nếu theo chế độ Q18 tự kiểm đã có hiệu lực, thêm `Q18_VERIFICATION_MODE`, `SELF_QA_EVIDENCE_RECEIPT` Git blob SHA, baseline Academic PASS source/receipt và trạng thái PED cũ được ghi trung thực, ID từng đoạn/ví dụ/hình mới, kết quả kiểm toán toán/PED và P0/P1, không mạo danh reviewer PASS.
- Academic PASS là **trong đúng phạm vi nội dung đã review**. Owner UI QA và phát hành là các cổng riêng; không tự động merge/deploy.

## IV. Bàn giao nếu thật sự cần NotebookLM review

Áp dụng **nguyên văn** Project Source `06_NOTEBOOKLM_REVIEW_HANDOFF_PROTOCOL_v1.0.md`:

1. Mỗi lần gửi **2 thứ trong cùng câu trả lời**: file review **thật, tải được** + prompt ngắn (3–6 câu).
2. File review là Markdown/TXT, **không phải JSON**. Nếu dữ liệu nguồn là JSON, xuất nội dung thực cần đánh giá thành Markdown.
3. **1–2 file**: từng link tải trực tiếp; **từ 3 file**: đóng **ZIP** để người dùng giải nén rồi thêm các file vào NotebookLM.
4. Tất cả file review tạm và ZIP bắt đầu `Temp_`; **Permanent Sources không mang `Temp_`**.
5. File có snapshot đầy đủ, phiên bản/commit, nguồn cần đối chiếu, IDs và tiêu chí/định dạng verdict; xác minh file tồn tại trước khi gửi.

## V. Trạng thái khi ban hành

Golden Pilot Toán 10 Chương VI Bài 16 R4 Postfix đã nhận `ACADEMIC_OVERALL=PASS`, `ACADEMIC_CLEARANCE=YES` từ NotebookLM với 5/5 mục tiêu và 5/5 item. Trạng thái này không áp dụng cho những bài khác của Chương VI hoặc chuyên đề Hàm số lớp 10–12. Golden UI R4 đã được owner nghiệm thu về thiết kế; staging/thiết bị thực tế và phát hành là các cổng riêng. Tiếp theo là chuẩn bị học liệu để review theo cụm bài/chương.

**Tài liệu kỹ thuật chi tiết trên GitHub:** `prototypes/thpt/THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.0.md` (Draft PR #612).


## VI. Phạm vi batch và delta theo kiến trúc THPT v2.0

Khi review sau Golden UI phải đánh giá **độc lập cả hai hành trình học đầy đủ**. Với **batch SGK chương**: mỗi bài/outcome, Core/Practice, cùng một **Readiness cuối chương**. Với **batch Chuyên đề**: mảng kiến thức trục dọc, Practice theo dạng/cấp độ, **Readiness chuyên đề**, chỉ ba trang; không đòi mục Core thứ tư.

Một `item_id` có thể dùng SGK Core và Topic Practice cơ bản; expected/reviewed unique IDs chỉ đếm **một lần**, còn role/placement ở hai nhánh phải được kiểm tra riêng. Việc chuyển Core từ tab Chuyên đề sang thư viện SGK chỉ là UI/storage-placement delta nếu giữ nguyên nội dung/đáp án; phải QA liên kết và no-duplicate engine. Nếu thay đổi câu, đáp án, rubric hay coverage thì dùng DELTA_C theo phần ảnh hưởng. Không tự coi một chương SGK đã PASS là Chuyên đề đã PASS. Mọi handoff vẫn theo file 06.


## VII. Dự thảo ngoại lệ Q18 cho việc cải tiến Kiến thức SGK đã nghiệm thu (10/11/2026)

**Chỉ có hiệu lực sau phê duyệt chính thức:** đoạn này là đề xuất thay đổi có phiên bản, không phải quyền vượt cổng hiện hành. Căn cứ quyết định chủ dự án muốn bỏ vòng phản biện độc lập lặp lại cho việc bổ sung lời dẫn/ví dụ/hình *có thể tự kiểm toán* mà không thay chương trình; xem `STANDARD_CHANGE_REQUEST_Q18_ENRICHMENT_SELF_VERIFICATION_20261110`, Draft PR #804.

1. **Hai hình thức kiểm chứng trong cùng Q18:** `Q18_INDEPENDENT_REVIEW` mặc định cho học liệu chưa nghiệm thu, Core/outcome/định lý/điều kiện/đáp án/rubric/RD1 hoặc vấn đề chưa xác định đúng toán; `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` chỉ cho phần bổ sung **Kiến thức SGK đã phát hành, có baseline Academic PASS đúng scope; PED cũ ghi đúng `PASS_MATCHED | SCOPED_PARTIAL | NOT_LOCATED`, PED bản mới phải tự kiểm đủ outcome**, có phép tính/chứng minh/hình tự đối chiếu được và không đổi Q15/Q16/Final Submit/Mastery.
2. **Bằng chứng nội bộ tối thiểu:** `BASELINE_SOURCE_BLOB`, receipt Academic PASS cũ, `BASELINE_PED_REVIEW_STATUS` theo đúng chứng cứ (kể cả NOT_LOCATED), `CANDIDATE_SOURCE_BLOB` và Git blob từng SVG mới; `LESSON_ID`, `OUTCOME_ID`, `DELTA_ID` theo từng đoạn chịu ảnh hưởng, S1 với trang in thật được kiểm; giả thiết, suy luận, phép kiểm ngược/toán số, nhãn/điều kiện hình, mạch WHY→bản chất→phương pháp→Tự thử→D6 cho **từng outcome chịu ảnh hưởng**, không lấy nhãn PED cũ hay UI PASS thay chứng cứ PED mới. Nhánh **được owner giao nâng cấp Kiến thức SGK (RELEASE hiện tại)** lập/ký `SELF_QA_EVIDENCE_RECEIPT` cho đúng nội dung mình sửa, trạng thái P0/P1 đã đóng và các ngoại lệ rõ ràng.
3. **Quyền và trách nhiệm RELEASE trong giai đoạn nâng cấp:** trực tiếp biên tập Knowledge SGK và tự tính/kiểm chứng từng delta toán/PED theo S1, lập receipt có bằng chứng; đồng thời chạy source SHA/Q15/Q16/RD1, AP1–AP5, R1–R5 và QA website độc lập về mặt kỹ thuật. **Không tự nhận reviewer NotebookLM Academic/PED PASS** hoặc thay đổi Core/đánh giá. AUTHORING tiếp tục phụ trách Chuyên đề và nội dung học thuật mới. Không coi `CLIENT_SELF_CHECK_NO_MASTERY` thành bài đánh giá chính thức. Không nới khóa SHA nguồn cũ trước khi chính sách và bộ kiểm V2 tương thích được ban hành.
4. **Khi không thỏa điều kiện:** chuyển reviewer độc lập đúng bài/outcome ảnh hưởng, hoặc `DELTA_D_BLOCKER` nếu sai toán/nguồn. Giữ nguyên PASS của snapshot không đổi; không mặc định phản biện lại toàn chương và không suy SGK PASS thành Topic PASS.
5. **Quan hệ với NotebookLM:** nếu thực sự cần phản biện độc lập thì áp dụng nguyên vẹn Source 06, đúng 5 Permanent Sources v2.1; không chọn đồng thời bản v2.0, không thêm nguồn thứ sáu. Tài liệu 07 là Project Source chính sách, không đưa vào NotebookLM như một source phát sinh nếu chưa được chủ dự án chỉ định.

**Migration bắt buộc:** owner phê duyệt điều khoản Q18 chính xác và bản 07 v1.2; cập nhật *cùng chuẩn gốc* `SLM-THPT-QUALITY-ONE` có phiên bản; hợp đồng V2, ready/REGISTER và CI nguồn thay đổi theo đúng quyết định; RELEASE tự kiểm toán phần Delta C của #797 theo các lesson/outcome/asset SHA; sau đó RELEASE phát hành khi đủ QA theo quyền đã cấp. Trước đó: `STANDARD_CONFLICT_HOLD / NO_MERGE_NO_DEPLOY` cho 27 trang Kiến thức Toán 10 mới.

## VIII. QUY TẮC VẬN HÀNH ĐÃ ĐƯỢC CHỦ DỰ ÁN PHÊ DUYỆT — RELEASE giai đoạn nâng cấp (10/11/2026)

**Supersedes** mọi dòng trong lịch sử v1.1/v1.2 draft yêu cầu reviewer độc lập lặp lại chỉ vì bổ sung lời giảng, ví dụ/hình cho **SGK Knowledge đã phát hành**. Mọi tiêu chí Q01–Q18 khác vẫn phải được đáp ứng đúng phạm vi.

- `DELTA_A_UI`: QA UI/Golden, không review học thuật mới.
- `DELTA_B_SOURCE_EQUIVALENT`: lưu bằng chứng tương đương và kiểm toán cục bộ, không reviewer mới.
- `DELTA_C_ACADEMIC_MATERIAL`: **Topic/học liệu mới, Core/định nghĩa/điều kiện/item/key/rubric/RD1** → independent reviewer phần ảnh hưởng. **Chỉ Knowledge SGK đã phát hành**, sửa lời dẫn, bảng, hình/ví dụ không đụng protected scope → `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, RELEASE ký một `ENRICHMENT_DELTA_RECEIPT` theo **gói**, có ma trận lesson/outcome/delta, S1, phép toán/đọc hình/PED, baseline & candidate SHA, P0/P1=0; không cần NotebookLM mới hoặc biên bản reviewer lịch sử thất lạc.
- `DELTA_D_BLOCKER`: sai toán/S1 hoặc vi phạm bảo vệ đánh giá → HOLD **đúng phần**, có điều kiện đóng; không kéo toàn bộ gói khác đã đủ chứng cứ vào HOLD không liên quan.

**GATE DESIGN:** chỉ 3 cổng chặn hữu hiệu: `CONTENT_MATH_PED_SOURCE`, `ASSESSMENT_DATA_SAFETY`, `RENDER_RELEASE_QA`. SHA/FNV/số công thức của bản **lịch sử** chỉ replay trên bản lịch sử; với candidate dùng exact SHA và nội dung toán/PED thực theo delta, không bắt giống văn bản cũ. Chuyên đề mới sử dụng V2 đã merge ở PR #799 và độc lập với Q18 Knowledge SGK. Không có gate mới trùng lặp hoặc reviewer giả.
