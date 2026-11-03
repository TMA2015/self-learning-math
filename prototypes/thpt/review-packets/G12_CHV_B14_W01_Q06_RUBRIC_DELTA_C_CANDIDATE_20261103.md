# G12 SGK ChV B14 — DELTA_C candidate for exactly one Written item W01 (Q06)
STANDARD_ID: SLM-THPT-QUALITY-ONE
TARGET_STANDARD_VERSION: 1.1.0
SOURCE_SNAPSHOT: G12-SGK-CHV-B14-B17-R00
SOURCE_GIT_BLOB: 9e73f50efdf237ebdae8e64572e45b9b22e8dbbd
TARGET_OUTCOME_ID: G12-CHV-B14-O01
TARGET_ITEM_ID: THPT-G12-B14-W01
AFFECTED_Q: Q06_D4_WRITTEN_RUBRIC
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
REVIEW_STATUS: PROPOSED_NOT_APPLIED_NOT_INDEPENDENTLY_REVIEWED
ACADEMIC_CHV: HOLD
CONTENT_READY: NO
PRIVATE_RD1: NOT_INCLUDED

## A. Đề gốc R00 (được bảo toàn)
> Giải thích vì sao u=(1,1,0), v=(2,2,0) không đủ để xác định pháp tuyến duy nhất bằng tích có hướng.

**Đáp án/lời giải R00 (không đổi):** `v=2u` ⇒ `u×v=(0,0,0)`. Hai vectơ cùng phương nên không cho hai hướng độc lập; vectơ 0 không là pháp tuyến hợp lệ. Cần chọn hướng thứ hai không cùng phương để xác định pháp tuyến bằng tích có hướng.

## B. Rubric R00 — bằng chứng lỗi chấm
**Nguyên văn:**
> 2đ xác định hai hướng độc lập và tích có hướng; 1đ tính đúng thành phần pháp tuyến; 1đ kiểm n khác 0 và trực giao; 1đ giải thích vì sao hai hướng cùng phương không đủ.

**Vấn đề:** Với `u` và `v` cùng phương, `u×v=0`. Rubric lại yêu cầu chấm **tính đúng một pháp tuyến khác 0** và **kiểm vectơ đó trực giao**, điều mà đề không yêu cầu và không thể suy ra từ cặp hướng đã cho. Nếu chấm máy móc, học sinh giải đúng theo đề bị mất điểm vô lý. Đây là **sai lệch rubric thực chất Q06**, không phải lỗi metadata hay thiếu nguồn SBT.

## C. Rubric R01 đề xuất (/5) — chưa áp dụng
- **2 điểm:** chỉ ra rõ `v=2u`, nên hai hướng phụ thuộc tuyến tính/cùng phương, không phải hai hướng độc lập trong mặt phẳng.
- **1 điểm:** tính hoặc chứng minh `u×v=(0,0,0)`.
- **1 điểm:** giải thích vectơ không **không phải pháp tuyến hợp lệ** và tích có hướng của cặp này không xác định một hướng pháp tuyến.
- **1 điểm:** nêu cách khắc phục: cần thêm một vectơ chỉ phương **không cùng phương** với `u` để tìm pháp tuyến khác 0 (và kiểm trực giao nếu cần).

**Tổng = 5 điểm.** Đề, đáp án, lời giải, `ITEM_ID`, `OUTCOME_ID`, `SOURCE_ROLE` và mọi item khác **giữ nguyên**. Chỉ thay rubric W01 sau khi NotebookLM review affected scope theo Delta C. Không tạo bản sao canonical ID hay gán Mastery từ Written tự đối chiếu.

## D. Phản biện NotebookLM hẹp
Yêu cầu reviewer xác định đúng/sai việc W01 rubric gốc mâu thuẫn với đề và kiểm rubric R01 có bao phủ đủ nhận định `v=2u`, `u×v=0`, VTPT khác 0, điều kiện bổ sung hướng thứ hai và tổng 5 điểm hay không. Trả `W01_Q06_DELTA_C_VERDICT`, P0/P1/P2, `MINIMAL_DELTA`, tác động PED của chính W01, cùng `SOURCE_RECEIPT`; **không suy rộng verdict sang B15–B17 hoặc toàn ChV**. Học liệu R00 được giữ bất biến cho tới khi review chấp thuận bản sửa và AUTHORING khóa snapshot R01.
