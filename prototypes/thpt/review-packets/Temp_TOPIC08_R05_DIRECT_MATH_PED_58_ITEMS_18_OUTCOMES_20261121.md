# CĐ08 — Kiểm toán AUTHORING trực tiếp 58 canonical, 18 tuyến giới hạn và liên tục

Ngày 21/11/2026. Tự kiểm chất lượng học thuật/sư phạm theo **source thực tế**, có giới hạn. Không giả nhận đây là reviewer độc lập NotebookLM mới, không thay học liệu đã nghiệm thu nếu không có lỗi.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_SOURCE: prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md
PACKET_ID: THPT-TOPIC08-LIMITS-CONTINUITY-FULL-R01
LEARNING_PATH: TOPIC
SOURCE_PATH: prototypes/thpt/content-drafts/topic08-limits-continuity/Temp_TOPIC08_R05_STUDENT_FIRST_58_CANONICAL_VISIBLE_20261115.md
SOURCE_BLOB: df47c56c8a7559047d35b44640ea74dce27a3f91
ORIGINAL_G11_CHV_SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0
ORIGINAL_TOPIC22_SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac
REVIEW_MODE: AUTHOR_DIRECT_Q15_KEY_SOLUTION_RUBRIC_PARITY_AND_OUTCOME_PED
CONTENT_DELTA: NONE
AUTHOR_MATH_CHECKED_SCOPE: PASS
AUTHOR_PED_CHECKED_SCOPE: PASS
P0_OBSERVED: 0
P1_OBSERVED: 0
INDEPENDENT_NOTEBOOKLM_REVIEW: NOT_REPEATED_NO_NEW_DELTA_C
RELEASE_AUTHORIZATION: NO

## 1. Q15: một nguồn gốc và 58 bản chiếu không nhân bản ID

- `58/58` markers `DISPLAY_ONLY_CANONICAL` có ID duy nhất và `58/58` heading thật trong hai bank ký: **36 G11 SGK ChV** (B15–B17) và **22 Topic-owned** (18 Practice + 4 Written). Không tự tạo một ngân hàng mới từ câu SGK đã dùng.
- So `120/120` trường nguyên văn nguồn (đáp án, lời giải, rubric khi nguồn có) với vùng bài học tương ứng; đối chiếu sử dụng source raw và vùng ẩn Lời giải, không xóa dấu `<`/`>` toán học. **Toàn bộ 120 khớp**. Những bài Written không tách key và solution riêng được kiểm theo đúng nhãn nguồn, không báo thiếu giả.
- Có đúng **18** outcomes TOP08-O01–O18, 18 tuyến Kiến thức/Vận dụng/Tự thử, **76** `<details>`/`</details>` cân bằng (18 tuyến + 58 Practice), 18 `PUBLIC_REPLAY_ONLY` no-Mastery. Tự kiểm tra công khai là câu đã xuất hiện và không được nhận là kiểm tra độc lập/ghi Mastery.

## 2. Kiểm phép toán, điều kiện và lựa chọn phương pháp

- **O01–O05 giới hạn dãy và tổng:** Với `u_n=(4n+7)/(n+3)=4−5/(n+3)` ta có u1=11/4, 11/4≤u_n<4, dãy tăng và tiến4 nhưng không đạt4. `(-1)^n+1/n` không hội tụ vì dãy con chẵn→1, lẻ→−1. `(-2/5)^n→0` vì |q|<1. Giới hạn dãy phân thức bậc2 chia n² cho 7/2,5/2 đúng. Tổng `12+3+3/4+...` bằng16 do q=1/4; W02 a1=15,q=−1/4 cho Sn=12[1−(−1/4)^n], S∞=12, sai số12/4^n <3/64 suy n nguyên nhỏ nhất5 (n4 bằng đúng ngưỡng).
- **O06–O12 giới hạn hàm:** `lim_(x→2)(x²−6x+8)/(x−2)=−2` sau phân tích; 0/0 chỉ là dạng cần biến đổi, không phải giá trị. W03 `(x²−4)/|x−2|` tại2 có giới hạn trái−4, phải4 nên không có giới hạn hai phía; f(2) không cần xác định để có giới hạn. `lim_(x→2−)(x+1)/(2−x)=+∞`, nhưng `(x+1)/(x−2)` tại2 trái−∞ phải+∞. `lim_(x→−∞)√(x²+4)/x=−1` vì √(x²)=|x|=−x bên trái. Nhân liên hợp `lim_(x→4)(√(x+5)−3)/(x−4)=1/6`; `lim_(x→+∞)(√(x²+2x)−x)=1`, chỉ chia x sau khi xét x>0. Không lẫn gián đoạn có thể khử với vô cực.
- **O13–O16 liên tục:** f=(x²−4)/(x−2), x≠2 và f(2)=k: liên tục iff k=4. Với `(x²−4x+3)/(x−1)` và f(1)=9, giới hạn−2; gián đoạn có thể khử bằng đổi f(1)=−2, không gọi 'vô cực' chỉ vì mẫu gốc bằng0. Căn `√(x(4−x))` trên [0,4] liên tục theo miền, chỉ cần giới hạn phải ở0 và trái ở4. `√(x−1)/(x−3)` có D=[1,3)∪(3,+∞), không khẳng định liên tục xuyên x=3. Hàm từng đoạn hai nhánh trùng giới hạn và giá trị thì liên tục, nếu lệch giá trị hoặc giới hạn thì phân loại gián đoạn.
- **O17–O18 định lí giá trị trung gian và chia đôi:** g=x³+x−1 trên [0,1] liên tục và g(0)=−1<0, g(1)=1>0, suy có **ít nhất một** nghiệm, không suy duy nhất chỉ từ IVT. g=t²+t−3 trên [1,2] có g(1)=−1, g(2)=3, g(3/2)=3/4>0, g(5/4)=−3/16<0 ⇒ sau hai bước chia đôi khoảng [5/4,3/2] độ dài1/4. W04 f=2−x² với x≤1, f=ax+3 với x>1 liên tục tại1 iff a=−2; với a đó nghiệm duy nhất x=3/2 trong [0,2] vì nhánh trái ≥1>0, nhánh phải tuyến tính và cắt trục ở3/2. Nêu đủ **tồn tại và duy nhất là hai suy luận khác nhau**.

## 3. PED theo hành trình độc lập, không chỉ đếm số

- O01–O05 bắt đầu bằng ý nghĩa giới hạn là 'tiến gần không cần đạt', quy tắc sai số, dãy con và công bội; O06–O12 giải thích vì sao cần xem trái/phải, vì sao 0/0 chưa kết luận, khi nào nhân tử/liên hợp và dấu x tại vô cực; O13–O16 xem liên tục trên miền, trong đó đầu mút chỉ yêu cầu giới hạn từ trong miền; O17–O18 kiểm đủ *liên tục trên đoạn, trái dấu hai đầu*, rồi mới chia đôi.
- Mỗi một trong 18 tuyến có ví dụ giải thích, Tự thử/Vận dụng trước khi xem `<details>` và hướng D6 chữa lỗi cụ thể. Các bài Written giữ rubric nguồn, không gộp thêm Anchor một item mới. SVG về giới hạn dãy, bước nhảy một phía, chia đôi khoảng hỗ trợ cách đọc hình chứ không thay chứng minh.
- Giữ đúng Topic Kiến thức/Luyện tập/Tự kiểm tra (không Core riêng); 18 câu công khai tự luyện lại không thành `TOPIC_READINESS` độc lập; RD1 và Final Submit/Mastery không thay.

## 4. Verdict và ranh giới

AUTHOR_Q18_CHECKED_SCOPE: 58/58 canonical keys/steps read and source parity 120/120 fields confirmed, 18/18 learner pathways inspected, P0/P1 found 0/0. Đây là **chứng cứ tự kiểm tác giả** chứ không là reviewer Academic/PED độc lập mới, không tái xác thực ảnh SGK/SBT in và không có browser/mobile UI evidence.
NO_SOURCE_DELTA: signed learner blob `df47c56c8a7559047d35b44640ea74dce27a3f91`, active original bank, historical Q18/A1/V2/manifest/REGISTER unchanged. Không yêu cầu NotebookLM xét lại khi toán và nội dung không thay.
NO_RELEASE: Draft PR #829, no merge/deploy, no protected RD1/official readiness/mastery alterations.