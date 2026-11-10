# STANDARD_CHANGE_REQUEST — Q18: tự kiểm chứng có bằng chứng cho cập nhật cách giảng SGK đã nghiệm thu

REQUEST_ID: STANDARD_CHANGE_REQUEST_Q18_ENRICHMENT_SELF_VERIFICATION_20261110
STANDARD_ID: SLM-THPT-QUALITY-ONE
BASE_VERSION_IN_MAIN: 1.2.0
PROPOSED_VERSION: 2.0.0
CHANGE_CLASS: MAJOR
OWNER_DIRECTION: 2026-11-10 — không tạo vòng phản biện độc lập lặp lại chỉ vì bổ sung diễn giải/ví dụ/hình có thể tự xác minh; tránh bottleneck G10–G12
OWNER_APPROVAL_OF_EXACT_AMENDMENT: PENDING
PROPOSED_SCOPE: SGK_CHAPTER_KNOWLEDGE_G10_G11_G12_ALREADY_APPROVED
CONFLICT_STATUS_UNTIL_GOVERNANCE_MERGE: STANDARD_CONFLICT_HOLD
AUTHORING_RESPONSIBILITY: new Topic learning materials, new academic Core/outcome content and independent-review handoffs; no mandatory re-authoring of owner-delegated SGK Knowledge upgrades
RELEASE_RESPONSIBILITY: owner-delegated SGK Knowledge enrichment, source/S1/math/PED delta self-verification and evidence custody; independent technical/UI/assessment QA, final HEAD gates and conditional deployment
ASSESSMENT_PROTECTION: Q15_Q16_RD1_UNCHANGED

## 1. Vấn đề phải giải quyết

- [PR #797](https://github.com/TMA2015/self-learning-math/pull/797) thay đổi 27 trang **Kiến thức** của SGK Toán 10 đã có nguồn cũ nghiệm thu, theo mẫu 4 tab B; nội dung Core/Luyện tập/Tự kiểm tra và ngân hàng đánh giá bất biến. Ví dụ/hình/lời dẫn mới được thêm ở một số bài; [QA render 27 × 3](https://github.com/TMA2015/self-learning-math/actions/runs/42783520977) SUCCESS, nhưng R4 vẫn FAIL đúng tại khóa SHA nguồn B01 vì Q18 đang yêu cầu Academic/PED verdict độc lập cho mọi thay đổi `DELTA_C`.
- Chủ dự án ngày 10/11/2026 cho rằng phần bổ sung có thể **tự kiểm chứng tính đúng toán**, không bắt buộc review độc lập để tránh vòng lặp tốn thời gian, đồng thời mong quy trình áp dụng được cho các cải tiến Kiến thức lớp 11–12.
- Chuẩn đang ở `main` ghi `SLM-THPT-QUALITY-ONE 1.2.0`, Q18 bắt buộc reviewer độc lập và Source 07 v1.1 ghi DELTA_C review affected scope. Đây là **mâu thuẫn giữa quyết định chủ dự án mới và văn bản hiện tại**; phải xử lý bằng thay đổi chuẩn có phiên bản, không đổi SHA test để giả vờ nội dung cũ bất biến.

## 2. Giải pháp đề xuất: hai cơ chế Q18 thuộc MỘT chuẩn, không sinh chuẩn thứ hai

**Chế độ A — `Q18_INDEPENDENT_REVIEW` (giữ mặc định hiện hành)** nếu là học liệu ban đầu chưa nghiệm thu, chương/outcome Core mới, thay định nghĩa/định lý hoặc điều kiện, thay câu hỏi/đáp án/lời giải/rubric có ảnh hưởng đánh giá, thay RD1/Final Submit, nguồn S1 mâu thuẫn, lỗi toán P0/P1 chưa giải quyết, hoặc chưa thể chứng minh thay đổi đủ điều kiện chế độ B. Vẫn NotebookLM độc lập theo phạm vi chịu ảnh hưởng, đúng 5 Permanent Sources v2.1 và S1.

**Chế độ B — `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`** cho **trang Kiến thức SGK đã phát hành và có baseline Academic reviewer PASS đúng snapshot/phạm vi**, khi chỉ cập nhật cách diễn giải, tổ chức bài, ví dụ minh họa hoặc hình/dữ kiện **tự biên soạn**, mà không thay Core/outcome, định lý, điều kiện tổng quát, bài tập canonical, key/rubric, Q15/Q16, RD1 hay hai hành trình học. Có thể vẫn là `DELTA_C_ACADEMIC_MATERIAL` (không đánh tráo thành DELTA_A hoặc DELTA_B), nhưng **không yêu cầu một lượt NotebookLM/independent reviewer riêng** nếu đủ hồ sơ tự kiểm toán dưới đây và chủ dự án duyệt cơ chế này.

### Hồ sơ bắt buộc chế độ B (một kiểm tra nội bộ gọn, không review lại toàn chương)

1. **Bản gốc được nghiệm thu:** `LESSON_ID`, `OUTCOME_ID`, SGK KNTT S1 (đúng tập/trang in có bằng chứng), `BASELINE_SOURCE_BLOB` và **Academic PASS gốc gắn chính snapshot**; chứng minh Knowledge đã phát hành, không mất outcome/kiến thức bắt buộc. Ghi riêng `BASELINE_PED_REVIEW_STATUS: PASS_MATCHED | SCOPED_PARTIAL | NOT_LOCATED` theo chứng cứ thực; **không mạo danh PED PASS lịch sử**. Vì chính mục tiêu của giai đoạn này là khắc phục cách giảng chưa đáp ứng tự học, **PED PASS cũ không phải điều kiện tiên quyết độc lập** khi phần Knowledge mới được kiểm lại PED đầy đủ theo từng outcome và có hồ sơ chứng minh.
2. **Danh sách thay đổi thực chất:** mỗi đoạn/ví dụ/hình mới có `DELTA_ID`, `LESSON/OUTCOME`, `CHANGE_KIND` và nguyên nhân; phân biệt thuần trình bày với ví dụ toán mới. Không đưa toàn bộ 27 bài vào review lại chỉ do source hash thay đổi.
3. **Tự kiểm toán toán học:** từng ví dụ mới có giả thiết, phép tính/suy luận, điều kiện, kết luận và cách kiểm ngược (tính lại, phản ví dụ, chương trình/đối chiếu độc lập khi phù hợp). Từng SVG mới có nhãn, tỷ lệ khi cần, đơn vị và phép kiểm gắn với ví dụ; ghi phát hiện/sửa sai. Chứng cứ **thực**, không lấy 81 browser PASS làm toán PASS.
4. **Kiểm tra sư phạm nội bộ:** giải thích WHY→tiền đề→bản chất→điều kiện→ví dụ→Tự thử/D6 theo **từng outcome chịu tác động**, lưu các trường hợp sai dễ mắc và đường khắc phục; `PED_CURRENT_OUTCOME_SELF_CHECK=PASS` chỉ khi **mọi outcome trong phạm vi được kiểm đủ**. PED của trang cũ có thể thiếu hoặc scoped; đây là phần phải chứng minh mới, không thể lấy render QA thay thế. Nếu bài mới vẫn khó tự học hoặc không thể chứng minh đúng S1 thì HOLD đúng đoạn, không tự ký.
5. **Toàn vẹn kỹ thuật:** `CANDIDATE_SOURCE_BLOB` và asset blob SHA, canonical First Try/HELP/item IDs không mất/nhân đôi, Q15/Q16 Final Submit/RD1/Mastery bất biến, AP1–AP5 và R1–R5 kiểm trên HEAD cuối.
6. **Ký nhận trung thực:** Nhánh **trực tiếp cập nhật nội dung Kiến thức SGK — RELEASE theo phân công chủ dự án hiện hành** lập và ký `SELF_QA_EVIDENCE_RECEIPT` gồm `STANDARD_VERSION`, phạm vi, lesson/outcome/delta ID, baseline + candidate blob SHA, `MATH_SELF_CHECK=PASS`, `PED_SELF_CHECK=PASS`, P0/P1/P2, các ngoại lệ và `OWNER_SELF_VERIFICATION_POLICY`. Đây **không phải** `ACADEMIC_PASS`/`PED_PASS` do reviewer độc lập; không gán nhãn NotebookLM PASS khi không chạy.

Chế độ B phải có **hai lớp bằng chứng phân biệt**: RELEASE, với vai trò chủ biên trang Kiến thức SGK được ủy quyền, tự tính/đối chiếu S1, ghi toán/PED và ký receipt theo delta; **cổng CI/source-lock + QA trình duyệt/assessment** kiểm độc lập về mặt kỹ thuật, không tự xác nhận toán PASS. Không bắt AUTHORING làm lại học liệu SGK vốn thuộc RELEASE; AUTHORING vẫn phụ trách Chuyên đề/học liệu mới và trường hợp review độc lập theo đúng phạm vi. Nếu lỗi có nguy cơ sai toán, thiếu S1, thay scope hoặc nghi ngờ lời giải, **hạ cấp sang chế độ A/HOLD đúng bài/outcome**, không cố làm PASS.

## 3. Phạm vi và tính tương thích

- **Có hiệu lực tương lai** cho các cập nhật trang Kiến thức **đã nghiệm thu** lớp 10, 11, 12 sau khi chuẩn được owner duyệt và merge. Không tự áp cho học liệu/chuyên đề ban đầu chưa được nghiệm thu; RELEASE được biên tập/kiểm toán toán của **ví dụ, diễn giải và hình trên trang Kiến thức** theo đúng quyền chủ dự án, nhưng không tự đổi định lý/điều kiện, Core/outcome hay đánh giá canonical.
- **Q01–Q17 giữ nguyên:** đúng SGK S1, đủ outcome và lý do học, hình/toán đúng; Q15 canonical ID, Q16 đánh giá/Final Submit/private RD1, Q17 hai hành trình độc lập. Giữ Golden THCS/THPT, Firebase, deep links và dữ liệu học sinh.
- **Q18 thay đổi có kiểm soát:** bổ sung chế độ B như **ngoại lệ theo hồ sơ có chứng cứ**; source/asset blob SHA + delta log vẫn bắt buộc. Không suy từ `BROWSER_PASS` thành `SELF_QA_PASS`.
- **Hợp đồng V2/ready/REGISTER:** đề nghị thêm cờ `Q18_VERIFICATION_MODE` và `SELF_QA_EVIDENCE_RECEIPT` cho bản cập nhật Knowledge. `CONTENT_READY` theo chế độ B chỉ hợp lệ sau khi thay đổi chuẩn/hợp đồng được ban hành; trước đó vẫn `STANDARD_CONFLICT_HOLD` với **owner lane của nguồn Knowledge là RELEASE**, không mặc định chuyển việc này cho AUTHORING.
- **Source 07 v1.1:** bắt buộc ghi rõ phụ lục/sửa phiên bản chính thức để `DELTA_C` chế độ B không còn xung đột với yêu cầu NotebookLM affected-scope. Không âm thầm sửa/giả nhận 5 Permanent Sources v2.1 đã đồng bộ; không thêm nguồn thứ sáu.
- **Không hồi tố:** các snapshot PASS cũ giữ trạng thái cũ, không review lại toàn bộ vì đổi quy trình. `DELTA_A_UI` và `DELTA_B_SOURCE_EQUIVALENT` tiếp tục theo cách đã nghiệm thu.

## 4. Ca kiểm chứng bắt buộc khi nghiệm thu chuẩn

- **PASS-B:** G10 B02 bổ sung phép ví von hộp `A={2,4}, B={2}`, có chứng minh `2∈A`, `B⊆A`, `B∉A` trong tập đang xét, hình SVG đúng, không đổi key/điều kiện canonical, receipt nguồn và tự kiểm toán đầy đủ.
- **PASS-B:** G10 B06 bổ sung ví dụ tam giác vuông cân `AB=20√2`, `A=B=45°`, `AC=BC=20`, `CH=10√2`, diện tích `200`; có suy luận, kiểm ngược và hình đúng đơn vị.
- **HOLD-A:** Ví dụ mới dùng nhầm luật phủ định lượng từ, đảo chiều bất đẳng thức/điều kiện, sai đáp số, thiếu giả thiết hoặc SVG mâu thuẫn đoạn văn.
- **HOLD-A:** Bất kỳ thay đổi trắc nghiệm chính thức, đáp án/rubric, Core/outcome, ngân hàng RD1, exposure plan, đánh giá Final Submit, thiếu receipt S1 hoặc **thiếu baseline Academic PASS đúng scope**. Chỉ riêng `BASELINE_PED_REVIEW_STATUS=NOT_LOCATED/SCOPED_PARTIAL` **không tự đóng dấu HOLD** khi đủ chứng cứ PED mới của từng outcome; không cho phép tự cấp reviewer PED PASS.
- **HOLD-CONFLICT:** Test source SHA cũ không khớp source mới nhưng chưa có `SELF_QA_EVIDENCE_RECEIPT`; KHÔNG cập nhật expected SHA chỉ để xanh CI.

## 5. Kế hoạch migration

1. **GOVERNANCE DRAFT:** mở PR riêng, đề xuất nâng **cùng file chuẩn gốc** `1.2.0 → 2.0.0` (major vì thay cơ chế nghiệm thu Q18); OWNER phê duyệt chính xác hai chế độ, phạm vi và hồ sơ tối thiểu; QA governance exact HEAD rồi merge. Không sửa learning-content PR trong bước này.
2. **Đồng bộ chính sách/hợp đồng:** cập nhật Source 07 và hợp đồng V2/CI theo cùng quyết định, phiên bản, không tạo chuẩn thứ hai. Nguồn Permanent v2.1 đã cài vào NotebookLM không được tự thay mà phải theo kế hoạch thay nguồn được chủ dự án xác nhận.
3. **Áp dụng G10 trước:** RELEASE (chủ biên trang Kiến thức SGK được owner giao) tự kiểm toán chính các `DELTA_ID` của 27 trang PR #797, 11 SVG và bài toán/ví dụ mới, ghi self-QA receipt theo từng lesson/outcome và chứng cứ PED **cho mọi outcome thay đổi**; 137 First Try + 115 HELP đã có parity, CI browser đã qua. ChVI có Academic reviewer PASS trong snapshot cũ nhưng PED baseline chưa truy ra, phải ghi đúng `NOT_LOCATED` và chứng minh PED của bản mới, không ép vòng review chỉ vì thiếu nhãn PED cũ. Nếu phát hiện lỗi toán/sư phạm, sửa đúng đoạn và kiểm lại SHA.
4. **RELEASE:** chỉ sau source receipt hợp lệ mới cập nhật test source-lock theo đúng mode, đồng bộ PR #797 lên main hiện hành (có PR #800/#802), chạy R4/Roadmap/Golden/P2/Q15/Q16 exact HEAD, merge/deploy theo **quyền chủ dự án đã cấp cho G10**. Không xin phát hành lại.
5. **G11/G12:** áp dụng khi cải tiến bài Kiến thức đã được nghiệm thu; không đặt một quy trình phản biện toàn chương mới. Chương/chuyên đề mới chưa được nghiệm thu vẫn giữ chế độ A cho đến khi chủ dự án quyết định thêm.

## 6. Bảng đối chiếu và đề xuất sửa Project Source `07 v1.1` (chưa cập nhật nguồn gốc)

**Nguồn đang có thật:** `07_THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.1.md` (Project Source do chủ dự án quản lý). Mục II, dòng `DELTA_C_ACADEMIC_MATERIAL` quy định **review lại phần chịu ảnh hưởng**. V1.1 đã cho `DELTA_A_UI` và `DELTA_B_SOURCE_EQUIVALENT` tự QA và log, nhưng **chưa có ngoại lệ** cho ví dụ/hình mới thuộc DELTA_C. Vì vậy không được tuyên bố Source 07 đã thay hoặc chọn phiên bản GitHub `THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.0.md` làm nguồn thay thế cho Project Source 07 v1.1.

**Nội dung bổ sung đề xuất cho bản Source 07 kế tiếp — cần owner cập nhật nguồn gốc và phiên bản, không thêm nguồn thứ sáu NotebookLM**:

> `DELTA_C_ACADEMIC_MATERIAL` giữ nguyên phân loại nếu bổ sung ví dụ, hình hoặc lời giải thích mang nội dung toán. Khi phần sửa là **SGK Knowledge đã phát hành với baseline Academic PASS đúng snapshot**, không đổi Core/outcome, phát biểu điều kiện/định lý, item canonical, đáp án/rubric, RD1, Final Submit hoặc Mastery, và đúng bản chuẩn `SLM-THPT-QUALITY-ONE` có hiệu lực cho phép `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, nhánh trực tiếp nâng cấp Kiến thức SGK (hiện tại là RELEASE) tự kiểm SGK S1, tính và kiểm ngược từng ví dụ, xác minh hình/điều kiện/PED theo outcome, khóa `SELF_QA_EVIDENCE_RECEIPT` cho đúng Git blob SHA. Nếu đầy đủ bằng chứng này, **không bắt buộc vòng NotebookLM reviewer mới chỉ vì thêm giải thích/ví dụ/hình**. Nếu thiếu PASS gốc, đổi outcome/Core/điều kiện/key/rubric, có lỗi toán P0/P1 chưa giải quyết hoặc không chắc nguồn S1, dùng DELTA_C reviewer independent theo affected scope hoặc DELTA_D HOLD. Không gọi `SELF_QA_EVIDENCE_RECEIPT` là ACADEMIC/PED reviewer PASS.

**Tính tương thích và lộ trình:** trước khi chủ dự án duyệt và thay Project Source 07 gốc, đoạn trên chỉ là đề xuất, `STANDARD_CONFLICT_HOLD` tiếp tục hiệu lực. Không gửi bộ nguồn NotebookLM v2.0/v2.1 trùng nhau và không tự cập nhật Permanent Sources v2.1. Hợp đồng V2 hiện có phần phụ lục dự thảo trong chính PR #804, song script `test-thpt-handoff-gate-v2.cjs` chưa kích hoạt chế độ mới và nguồn học liệu G10 #797 chưa được phát hành.

## 7. Trạng thái và đề nghị quyết định

**Ghi nhận chủ trương owner:** bỏ vòng reviewer lặp lại đối với cập nhật kiến thức có thể tự kiểm chứng; **không đồng nghĩa** owner đã chấp nhận chính xác chữ nghĩa thay đổi Q18 hoặc miễn mọi trường hợp sai toán.

**STATUS:** `GOVERNANCE_PROPOSAL / STANDARD_CONFLICT_HOLD_UNTIL_OWNER_APPROVAL_AND_MERGE / PR797_RELEASE_HOLD / NO_WEBSITE_DEPLOY`.

**Đề nghị owner quyết định:** chấp thuận bản nâng chuẩn `SLM-THPT-QUALITY-ONE v2.0.0` với hai chế độ Q18 trên, rồi cho phép governance PR merge sau exact-head QA. Quyền phát hành học liệu G10 đã cấp vẫn được bảo lưu với điều kiện kiểm soát mới.
