# CĐ09 · Scoped NotebookLM academic/PED review packet — O32 vi phân chuyển giao từ đa thức sang phân thức

PACKET_ID: THPT-TOPIC09-O32-FIRST_TRY-TRANSFER-20261121
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
REVIEW_SCOPE: TOP09-M32 / TOP09-O32 FirstTry/Vận dụng and opt-in Đối chiếu only
CHANGE_CLASS: DELTA_C_ACADEMIC_MATERIAL
ACTIVE_READY_SOURCE_PATH: prototypes/thpt/content-drafts/topic09-derivative/Temp_TOPIC09_R05_STUDENT_FIRST_108_CANONICAL_VISIBLE_20261116.md
ACTIVE_READY_SOURCE_BLOB: e35b9a0d2e09bb06167ef9a051d979b9b7d5c6d7
AUTHORING_CANDIDATE_PATH: prototypes/thpt/content-drafts/topic09-derivative/Temp_TOPIC09_R06_O32_NONPOLYNOMIAL_FIRST_TRY_CANDIDATE_20261121.md
CANDIDATE_BLOB: 43efe4b4729d0504cf9614c3c6c618e62926e2ee
REVIEW_STATUS: PENDING_INDEPENDENT_ACADEMIC_AND_PED
OWNER_REVIEW_PERMISSION: independent affected-only reviewer to be provided, not automatically assumed
PROTECTION: no canonical bank/stem/key/solution/rubric/item_id change; RD1, Final Submit, Mastery unchanged
RELEASE_AUTHORIZATION: NO

## A. Vấn đề ở một outcome, không phải lỗi toán P0 của bản R05

TOP09-O32 hiện có 1 canonical Practice `THPT-TOP09-P32`. Học liệu trước sửa dùng f=x² cho ví dụ a=3, hình a=2, ví dụ a=4, Vận dụng a=1 và Practice P32 a=2. Các lần thực hành khác điểm a nhưng cùng **một dạng f=x²**, nên học sinh có thể lặp thao tác thuộc mẫu `Δy−dy=(dx)²` mà chưa chứng minh biết chọn `f'(a)dx` với hàm khác. Đây là một **cơ hội khắc phục PED chuyển giao P2 do tác giả quan sát**, không tự thu hồi PASS snapshot cũ hoặc tuyên bố cả Topic FAIL.

Mục tiêu hẹp: sau ví dụ x², học sinh tự thử 1/x, cần nêu miền qua đoạn [2;2,2], tính đạo hàm của 1/x, giữ dấu âm và so sai số. Việc này không cần tạo câu hỏi canonical mới hay đụng câu Tự kiểm tra công khai; nó thay câu Vận dụng tự thử ngay trước khi mở Đối chiếu.

## B. Trích nguyên văn trước thay đổi — nguồn R05 còn hiệu lực

**Vận dụng** f=x²,a=1,dx=0,1: dy và Δy lần lượt bằng?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

dy=2·0,1=0,2; Δy=1,1²−1=0,21; sai lệch0,01.

Nếu nói dy=Δy chính xác, khai triển bình phương để thấy thêm dx².

</details>


## C. Trích nguyên văn sau thay đổi — R06 ứng viên chưa nghiệm thu

**Vận dụng** Với f(x)=1/x, a=2, dx=0,2: (a) Kiểm miền giữa a và a+dx. (b) Tính vi phân dy và độ tăng thật Δy. (c) Tính |Δy−dy| và giải thích vì sao xấp xỉ không phải đẳng thức.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Miền xác định f đòi x≠0; cả đoạn [2;2,2] nằm trong miền và f khả vi tại a=2. Vì f'(x)=−1/x² nên f'(2)=−1/4. Với dx=0,2=1/5, vi phân dy=f'(2)dx=−1/20=−0,05. Độ tăng thật Δy=f(2,2)−f(2)=5/11−1/2=−1/22≈−0,04545. Sai số tuyệt đối |Δy−dy|=|−1/22+1/20|=1/220≈0,00455. Cả dy và Δy đều âm (giá trị hàm đang giảm), nhưng vi phân chỉ là xấp xỉ bậc nhất cho bước hữu hạn, không bằng Δy.

Nếu cho dy dương, kiểm dấu f'(2)<0. Nếu cho dy=Δy đúng tuyệt đối, so hai phân số −1/20 và −1/22; muốn dùng xấp xỉ, kiểm f khả vi và bước dx đủ nhỏ trong miền.

</details>


## D. Kiểm toán học thuật của tác giả trên phần sửa

- f(x)=1/x xác định x≠0 và khả vi tại a=2; đoạn [2;2,2] nằm trong miền, có f'(x)=−1/x², f'(2)=−1/4.
- Với dx=0,2=1/5, dy=−1/20=−0,05. a+dx=11/5 nên Δy=5/11−1/2=−1/22≈−0,04545.
- Δy−dy=(−1/22)−(−1/20)=1/220>0, nên |Δy−dy|=1/220≈0,004545. Khi dx nhỏ, dy là xấp xỉ bậc nhất; với dx hữu hạn, không tự nhận bằng Δy.
- Giữ câu hỏi trước lời giải: một khối `<details class="slm-topic-first-try">` opt-in duy nhất, không đưa đáp án vào đề. D6 chữa riêng dấu âm, sai số và miền.
- Đối chiếu raw source trước/sau: ngoài comment header ứng viên, **chỉ đúng một đoạn Vận dụng+Đối chiếu TOP09-O32** thay đổi; mọi byte trước đoạn ấy và sau đoạn ấy khớp. **108/108 canonical Practice**, 32 replay-only selfchecks, 31 Kiến thức outcomes còn lại, 140/140 balanced details, 14 Written rubrics (9 SGK + 5 Topic), 4 visuals giữ nguyên. Mọi nội dung đang `CONTENT_READY` có Git blob khóa cũ; chưa promote candidate.
- Tác giả đã đối chiếu **108/108** item IDs với original 71 G11 ChIX + 37 Topic bank và **159/159** trường đáp án/lời giải/rubric exact original nguồn, không phát hiện P0/P1 mới trong phần không sửa. Đây là QA AUTHORING, không thay independent NotebookLM review.

## E. Prompt NotebookLM — bốn câu, phản biện chỉ toán và PED

Kiểm tra độc lập **chỉ TOP09-O32, câu Tự thử/Vận dụng về vi phân**: bài mới với f(x)=1/x, a=2, dx=0,2 có đúng miền, công thức đạo hàm, vi phân dy, độ tăng thật Δy và sai số tuyệt đối hay không?

Đánh giá bài mới có tăng **chuyển giao phương pháp** so với Tự thử cũ lặp f=x², nhưng vẫn đủ tiền đề cho học sinh học độc lập theo SGK/Chuyên đề KNTT hay không.

Xét hướng D6 mới có giúp học sinh tự sửa lỗi dấu âm, nhầm dy=Δy và quên miền xác định, đồng thời không lộ lời giải trước khi học sinh tự thử.

Chỉ kết luận **Academic PASS/FAIL, PED PASS/FAIL** cho đoạn chịu ảnh hưởng, P0/P1/P2 và `MINIMAL_DELTA` nếu cần theo đúng 5 Permanent Sources v2.1; không phản biện lại 108 câu unchanged và không kiểm tra SHA/CI/GitHub.

## F. Điều kiện promotion

Chỉ khi có **Academic + PED PASS đúng phần O32**, không còn blocker và source/receipt SHA được tác giả xác minh, mới xét chuyển single active learner, cập nhật Q18/A1/V2/ready/REGISTER trên nhánh AUTHORING; chạy CI ở HEAD tương ứng. Khi reviewer chưa trả lời: giữ **R05 `CONTENT_READY`** bất biến, candidate **REVIEW_PENDING**. Không merge/deploy và không chỉnh website hoặc đánh giá.