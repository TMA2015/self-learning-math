# CĐ04 — affected-only independent Academic/PED review, mô hình giảm cố định ở TOP04-O17 / THPT-TOP04-P21

PACKET_ID: THPT-TOPIC04-O17-P21-DETERMINISTIC-MODEL-20261121
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
REVIEW_SCOPE: ONE existing item THPT-TOP04-P21 in outcome TOP04-O17 (Bài 73)
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
BASE_BANK_BLOB: 004692a2d996b5ba955318a087f4d58dcdb2df04
BASE_STUDENT_BLOB: a101ca5e0130ff51fab1a1c867e1b23d642d98b8
REVIEW_CANDIDATE_BANK_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895
REVIEW_CANDIDATE_STUDENT_BLOB: 078ab3247170ec8c709c45872ab6afb507cf521a
INDEPENDENT_ACADEMIC_PED: PENDING
CURRENT_ACTIVE_AUTHORING_READY: R06 unchanged, do not promote candidate
AUTHOR_PROOF: one identical new answer line in bank/student; revert restores base bytes, 75 canonical displays and 93 balanced disclosures unchanged
ASSESSMENT_PROTECTION: Question, canonical ID, mathematical formula, reasoning, D6, selfcheck/Final Submit/Mastery all unchanged
RELEASE_AUTHORIZATION: NO

## A. Lý do toán/sư phạm cần phản biện

Đề bài chỉ đưa **mô hình xác định** N(n)=500·0,8^n, n số kỳ nguyên không âm. Không cho biến ngẫu nhiên, không có giả thiết về phân phối hay xác suất. Kết quả tính N(3)=256 chính xác **trong mô hình đã cho**, chứ chưa có cơ sở gọi là **giá trị kỳ vọng** theo nghĩa xác suất. Câu cũ dễ khiến học sinh hiểu rằng đã có mô hình ngẫu nhiên hoặc rằng kết quả chỉ là một kỳ vọng được tính từ phân phối ngầm định. Sửa sang 'theo mô hình giảm cố định' giữ nguyên toán và nói rõ giới hạn áp dụng với thực tế.

**Trước sửa (canonical bank + learner):**

> **Đáp án:** N(3)=256 cá thể theo giá trị kỳ vọng của mô hình; không bảo đảm số thực tế nếu tác động ngẫu nhiên.

**Sau sửa (canonical bank + learner):**

> **Đáp án:** N(3)=256 cá thể **theo mô hình giảm cố định 20% mỗi chu kỳ**; đây là kết quả của công thức đã cho, không phải một kỳ vọng xác suất. Số lượng ngoài thực tế có thể khác khi các giả thiết của mô hình không còn đúng.

## B. Toàn bộ item canonical đề xuất và diễn giải cho học sinh

## THPT-TOP04-P21 · TOP04-O17
item_id: THPT-TOP04-P21
outcome_id: TOP04-O17
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP04-EXP_DECAY_DISCRETE
**Đề:** Một quần thể giả định có 500 cá thể và giảm 20% sau mỗi chu kỳ, không có sinh nhập cư. Mô hình N(n)=500·0,8^n. Tính N(3) và diễn giải phạm vi mô hình.
**Đáp án:** N(3)=256 cá thể **theo mô hình giảm cố định 20% mỗi chu kỳ**; đây là kết quả của công thức đã cho, không phải một kỳ vọng xác suất. Số lượng ngoài thực tế có thể khác khi các giả thiết của mô hình không còn đúng.
**Lời giải có suy luận:** Mỗi chu kỳ nhân 1−0,2=0,8; ba chu kỳ 500·(4/5)³=500·64/125=256. Mô hình nhân cố định chỉ là giả thiết, không tính các biến cố ngẫu nhiên.
**D6 tự khắc phục:** Nếu lấy 500−3·100=200, đó là giảm tuyến tính theo lượng cố định, không phải giảm 20% của lượng còn lại.


## C. Lời giải Đối chiếu tương ứng trên trang học sinh

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P21; ORIGINAL_BLOB: 004692a2d996b5ba955318a087f4d58dcdb2df04; OUTCOME: TOP04-O17; NOT_NEW_BANK -->

**Bài 73.**

Một quần thể giả định có 500 cá thể và giảm 20% sau mỗi chu kỳ, không có sinh nhập cư. Mô hình N(n)=500·0,8^n. Tính N(3) và diễn giải phạm vi mô hình.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** N(3)=256 cá thể **theo mô hình giảm cố định 20% mỗi chu kỳ**; đây là kết quả của công thức đã cho, không phải một kỳ vọng xác suất. Số lượng ngoài thực tế có thể khác khi các giả thiết của mô hình không còn đúng.

Mỗi chu kỳ nhân 1−0,2=0,8; ba chu kỳ 500·(4/5)³=500·64/125=256. Mô hình nhân cố định chỉ là giả thiết, không tính các biến cố ngẫu nhiên.

</details>

## D. Ranh giới và prompt NotebookLM (4 câu về chất lượng học liệu, không về Git)

Phân biệt **giá trị xác định của mô hình** với **giá trị kỳ vọng của một biến ngẫu nhiên** trong tình huống N(n)=500·0,8^n. Đánh giá câu trả lời được sửa có giữ đúng toán, điều kiện, và giúp học sinh lớp 11 hiểu ý nghĩa/giới hạn của mô hình tăng giảm theo kỳ hay không. Kiểm tra đề–đáp án–lời giải–D6 có nhất quán và có phát sinh yêu cầu ngoài đề không; chỉ rõ P0/P1/P2 và sửa tối thiểu nếu có. Kết luận riêng **Academic PASS/FAIL** và **PED PASS/FAIL** **chỉ cho TOP04-O17/P21**, sử dụng đúng 5 Permanent Sources THPT v2.1, không yêu cầu SHA, commit, manifest, CI hay phản biện toàn CĐ04.

**Ghi chú AUTHORING:** Nếu reviewer kết luận chưa đạt, giữ nguyên R06 ký. Nếu PASS, tác giả sẽ tự kiểm soát việc chuyển canonical ngân hàng và projection học sinh sang cùng một phiên bản, chạy Q15/Q18/CI và chỉ đổi trạng thái sau kiểm tra. NotebookLM không làm kiểm toán kỹ thuật này.