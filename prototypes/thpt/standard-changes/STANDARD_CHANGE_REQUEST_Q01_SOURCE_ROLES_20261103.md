# STANDARD_CHANGE_REQUEST — Q01: SGK làm khung Core; SBT/nguồn bài tập là tham khảo dạng và độ sâu
REQUEST_ID: STANDARD_CHANGE_REQUEST_Q01_SOURCE_ROLES_20261103
STANDARD_ID: SLM-THPT-QUALITY-ONE
BASE_VERSION: 1.0.0
PROPOSED_VERSION: 1.1.0
CHANGE_CLASS: MINOR
OWNER_DECISION: APPROVED_IN_AUTHORING_CONVERSATION_2026-11-03
IMPLEMENTATION_BRANCH: GOVERNANCE_PR_PENDING_MAIN_MERGE
APPLIES_TO: THPT_G10_G11_G12_SGK_CHAPTER_AND_TOPIC
OWNER_OF_CHANGE: AUTHORING_GOVERNANCE
RELEASE_EDITS_NORMATIVE_MATH: NO
INDEPENDENT_NOTEBOOKLM_AUTHORITY: PRESERVED
PRIVATE_RD1_AND_MASTERY_BOUNDARY: UNCHANGED
CURRENT_PRODUCTION: UNCHANGED

## 1. Quyết định chủ dự án (03/11/2026)
Chủ dự án xác nhận Self-Learning Math là **chương trình học liệu độc lập, tự biên soạn** nhằm phủ rộng kiến thức Toán THPT và họ dạng bài từ lý thuyết, nhận biết, thông hiểu, vận dụng đến nâng cao, tổng hợp và các bài **tự luận quan trọng trong kỳ thi**. **SGK KNTT/chương trình chính thức** là nguồn xác định phạm vi Core và outcome bắt buộc; SBT KNTT, đề thi và tài liệu uy tín khác chỉ tham khảo để kiểm thử độ đa dạng và chiều sâu. Khi không tìm được một đề SBT gốc, được tham khảo **nhiều bài tương đương khác đầu bài nhưng cùng cấu trúc, phương pháp và điều kiện**, rồi tự đặt bài, giải/kiểm nghiệm đáp số/rubric, bảo đảm năng lực phải học. Không yêu cầu đầy đủ từng trang SBT như tiên quyết nghiệm thu.
Đây là **phê duyệt về chính sách**. AUTHORING soạn PR governance và theo chuẩn được merge mới xin NotebookLM đánh giá bổ sung phần bị ảnh hưởng; không tự đổi kết quả review, quyền merge/deploy, website hay Mastery.

## 2. Vấn đề cụ thể và căn cứ thay đổi
- Q01 v1.0.0 trước đây đặt `SGK/SBT` cùng trong PASS source scope và `A2 HOLD nếu sách/ấn bản/trang không xác nhận`. Điều này vô tình đòi đủ từng trang SBT, mặc dù Core toàn chương và lời giải của học liệu do tác giả sáng tạo đã có thể được xác minh độc lập.
- **CASE_G12_CHV_B14:** SGK KNTT Toán 12 Tập Hai B14 trang in29–40 đã kiểm. PDF SBT trang in25 không có trong bản scan, ảnh hưởng tham khảo SBT 5.6–5.7, không làm SGK Core biến mất. NotebookLM R00 ghi `Q01_B14_SOURCE_GAP_HOLD`, Academic chapter HOLD, B15–B17 Academic PASS, toàn chapter PED PASS, P1=1. Source immutable `9e73f50efdf237ebdae8e64572e45b9b22e8dbbd`, receipt `d917ae352f7d3ba3818a8dad689e43fe119b9950`, Draft AUTHORING PR #725.
- Việc không đọc được **nguyên văn một bài SBT** là giới hạn nguồn tham khảo, **không tự chứng minh** tác giả thiếu năng lực tạo câu hỏi đúng phương pháp/giả thiết/đáp án. Nhưng cũng **không được giả nhận** đã bao phủ các bài 5.6–5.7 chưa đọc.
- Tiêu chí đúng cần chứng minh là **SGK/chương trình S1 Core đúng/đủ và mọi outcome có bằng chứng thực** theo Q02–Q14; đặc biệt độ bao phủ theo **họ dạng × phương pháp × điều kiện × mức độ**, đáp án/lời giải/rubric được kiểm tra.

## 3. Thay đổi chuẩn gốc (không sinh chuẩn thứ hai)
Chỉ sửa tài liệu normative **đang tồn tại** tại `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`, đổi VERSION metadata `1.0.0 → 1.1.0`. Giữ tên đường dẫn chuẩn cũ để không tạo hai normative files song song; mọi hệ thống nhận dạng theo `STANDARD_ID + VERSION`, không theo hậu tố đường dẫn.
- Q01: SGK/chương trình S1 bắt buộc cho Core; SBT/đề thi/nguồn bài tập đáng tin cậy là `REFERENCE_EXERCISE`; các bài tự viết là `ORIGINAL_AUTHORED`; chứng cứ ma trận outcome/họ dạng/độ khó/phương pháp/điều kiện.
- Bổ sung `SBT_REFERENCE_GAP_DOCUMENTED`: trang SBT tham khảo bị thiếu ghi rõ tên/trang/bài chưa kiểm; không giả nhận sao chép hoặc PASS từng bài đó. **Không AUTO HOLD** nếu SGK Core/outcome đã đủ và bài tự biên soạn được review, nhưng vẫn HOLD nếu nội dung Core/outcome/điều kiện bắt buộc chưa chứng minh được.
- D1–D6/Q02–Q18 giữ nguyên độ chặt, không đổi Q16/RD1 privacy, Final Submit, SGK vs Topic và Golden UI; mở rộng chiều sâu luyện thi có nhãn, không lấn vào Core.
- `MINOR` vì **chỉ sửa phương thức chứng minh phạm vi Q01 và phân loại nguồn tham khảo**, không giảm/hủy 18 Q, không sửa thẩm quyền SGK/chương trình, không đổi triết lý tự học hoặc handoff/assessment contract. Đây **không phải PATCH** vì có ảnh hưởng đến tiêu chí AUTO HOLD.

## 4. Cách AUTHORING dùng nguồn và biên soạn
| SOURCE_ROLE | CHỨC NĂNG | ĐIỀU KIỆN |
|---|---|---|
| `SGK_CORE_AUTHORITY` | Chương trình, SGK KNTT chính thức bắt buộc: kiến thức, định nghĩa, điều kiện, outcome Core | Xác nhận lớp/tập/bài/trang in thực; không suy hoặc mở rộng giả |
| `REFERENCE_EXERCISE` | SBT, đề thi, tài liệu luyện tập đáng tin cậy để tìm họ dạng, mức độ và ứng dụng | Chỉ ghi đã đọc gì, không chép nguyên văn khi không có gốc; đối chiếu cách làm/điều kiện, nhận biết nguồn |
| `ORIGINAL_AUTHORED` | Câu hỏi/ví dụ/lời giải/rubric/hình do dự án biên soạn | Lời giải độc lập, phép kiểm điều kiện và đáp án, outcome/role/item canonical; tránh sao chép |

**Họ dạng tương đương** cần đồng thời kiểm chứng phương pháp toán, giả thiết, phạm vi/ngoại lệ, mức độ nhận thức và năng lực đích. Khuyến khích tự luận định hướng thi, vận dụng liên-outcome, ứng dụng thực tế, phân tầng từ dễ→khó, **không lấy quota câu thay chiều sâu** và không yêu cầu mỗi câu phải có một câu trùng trong SBT.

## 5. Ví dụ PASS/HOLD theo Q01 v1.1.0
- **PASS có điều kiện reviewer:** SGK B14 gốc đủ, các outcome/phương pháp/điều kiện được kiểm, dạng mặt phẳng qua điểm và VTPT/qua ba điểm, quan hệ song song/vuông góc, khoảng cách v.v. được thể hiện bằng bài **tự biên soạn có lời giải/rubric**; SBT 5.6–5.7 chưa xem thì minh bạch `SBT_REFERENCE_GAP_DOCUMENTED`; reviewer kiểm tra không có lỗ hổng Core/outcome thực chất.
- **HOLD thực chất:** thiếu trang SGK bắt buộc chứa định nghĩa/công thức chưa xác nhận; câu tương đương sai điều kiện (chia cho 0, nhầm VTPT/VTCP, ngoại lệ), outcome quan trọng không có chứng cứ, hoặc một dạng bắt buộc được xác nhận đã thiếu.
- **Không bao giờ PASS dựa trên suy luận tự động:** việc owner duyệt chính sách không tự biến NotebookLM `ACADEMIC_HOLD` thành PASS. Cần targeted độc lập trên đúng frozen source và normative mới.

## 6. Tác động, migration và review tối thiểu
- G10/G11/G12 SGK, sau đó Topic: dùng v1.1.0 **cho snapshot mới sau governance merge**; không làm lại học liệu đã có Academic+PED PASS theo chuẩn cũ.
- G12 ChV PR #725 giữ `ACADEMIC_HOLD`, `CONTENT_READY=NO` và source/receipt blob bất biến; không lấy lại/review toàn B15–17 hoặc PED. Sau normative merge, AUTHORING giao **một batch Temp Markdown** chứa quyết định Q01, ma trận B14/họ dạng, original Q01 source gap receipt + prompt review 3–6 câu. Chọn đúng 5 Permanent v2.1 cùng SGK/SBT Tập Hai và batch-source, không thêm Permanent thứ sáu. Yêu cầu reviewer chỉ `B14 Q01 / 7 outcomes / affected methods/assumptions / SBT_REFERENCE_GAP_DOCUMENTED`, verdict Academic PASS/HOLD theo v1.1.0, P0–P2, MINIMAL_DELTA. Không sửa nguồn nếu reviewer xác nhận đúng; nếu phát hiện thiếu thật, chỉ sửa `DELTA_C` phần bị ảnh hưởng.
- Khi và chỉ khi targeted PASS, AUTHORING ký **một handoff V2, một ready manifest, một REGISTER row** khóa SHA; RELEASE sau đó tích hợp và QA riêng theo R1–R5/AP1–AP5, Final Submit và quyền deploy của chủ dự án.
- Project Source `09` chỉ là bản tham chiếu, không phải chuẩn thứ hai; ghi nhận trên quản trị/bản tham chiếu ở lượt đồng bộ kế tiếp. `06` giao thức vận chuyển, `07` delta, `08` hai hành trình không đổi.

## 7. NotebookLM 5 Permanent v2.1 compatibility
- 5 file v2.1 đang cài nguyên, SHA256 manifest của chúng giữ nguyên. Manifest cũ nhắc STANDARD_VERSION 1.0.0 — đó là baseline historical của bộ nguồn, **không phải quyết định mới hơn của owner**.
- Không tạo Permanent thứ sáu, không yêu cầu thay toàn bộ năm nguồn ngay khi một điều Q01 được owner đổi. Sau merge, **Temp batch-source** (không permanent) phải trích chính xác Q01 v1.1.0 và owner change request; hướng dẫn reviewer ưu tiên quyết định mới về Q01, còn mọi Q02–Q18 vẫn dùng cùng một chuẩn gốc đã merge. Nếu mâu thuẫn tài liệu v2.1 ở phần Q01, reviewer ghi rõ `SOURCE_RULE_SUPERSEDED_OWNER_Q01_V1_1`, không tự chọn phiên bản cũ.
- Nếu sau này chủ dự án quyết định đồng bộ lại Permanent, phải thay **đúng 5** file thành một bộ mới cùng version và SHA manifest, không chọn đồng thời v2.1+v2.2.

## 8. Test & quyền thay đổi
- PR governance-only: file normative v1.1.0 này + một `STANDARD_CHANGE_REQUEST` + chỉnh manifest hướng dẫn phiên bản; không sửa câu hỏi, source SGK/SBT, reviewer raw receipts, RD1 hay website.
- Kiểm tra 18/18 Q vẫn tồn tại, source role/exception, quyền Core, old-PASS preservation, compatibility five Permanent, branch exact-head CI trên PR. Không tự merge.
- Khi PR được chủ dự án cho phép merge quản trị, `STATUS=OFFICIAL_OWNER_APPROVED_MAIN` mới đúng. Chưa có targeted NotebookLM PASS thì PR #725 vẫn HOLD.
