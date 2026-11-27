# CĐ03 — Kiểm toán AUTHORING trực tiếp 31 câu, 12 tuyến tự học và điều kiện nghiệm · 21/11/2026

**Vai trò:** tác giả học liệu tự kiểm trên bản học sinh hiện hành (không phải reviewer NotebookLM độc lập). Không tự cấp lại independent PASS, không biên soạn delta nếu không thấy lỗi thực. Ưu tiên toán đúng, lời giải có suy luận và học sinh tự khắc phục được.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
PACKET_ID: THPT-TOPIC03-ALGEBRA-EQUATIONS-FULL-R01
LEARNING_PATH: TOPIC
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic03-algebra-equations/Temp_TOPIC03_R06_NUMBERING_CONSISTENT_20261116.md
ACADEMIC_SOURCE_BLOB: 9df43259cfb61646ec1d60c036e360c40417daae
REVIEW_MODE: AUTHOR_DIRECT_MATH_PED_SOURCE_PARITY_AND_SOLUTIONS
CONTENT_DELTA: NONE
Q18_AUTHOR_SCOPE: all 31 visible original Practice, 12 learner knowledge outcomes / D6, 12 FirstTry and 43 balanced `<details>`
AUTHOR_ACADEMIC_OBSERVED: PASS_CHECKED_SCOPE
AUTHOR_PED_OBSERVED: PASS_CHECKED_SCOPE
P0: 0
P1: 0
P2: 0
INDEPENDENT_NOTEBOOKLM_VERDICT: NOT_NEWLY_REQUESTED_NO_DELTA_C
RELEASE_AUTHORIZATION: NO

## A. Q15 canonical và bảo toàn nguồn

- 31 câu được trình bày theo bốn nhóm Practice: phép biến đổi/bậc hai; phân thức/giá trị tuyệt đối; căn/sinh nghiệm ngoại lai; đổi biến/mô hình. Original canonical gồm **23 câu Topic-owned**, **6 original G10 B18**, và **2 original SGK Written**. Không tạo ngân hàng thứ hai.
- Đối chiếu trường canonical Topic original Git blob `fd85d7056f3b934f4599727f8c6da173cf05cd65`: 23/23 câu, `Đáp án`, `Lời giải có suy luận` và các rubric Written được giữ nguyên văn trong projection learner. Original six SGK B18 items thuộc blob `1223d4c2b574433479c5d222dbeff363718ee4bb`, kiểm 6/6 câu lời giải nguyên văn. Hai SGK Written sử dụng nguồn HTML bất biến `4da918f36d30c9b7110099e81fc88943e5b7705b`, giữ stem/sol/rubric 5 và 6 điểm.
- Khi so bằng đoạn trích văn bản, hai lời giải `THPT-TOP03-ADD17` và `THPT-TOP03-W01` chứa dấu `<` toán học nên nếu dùng regex xóa mọi nội dung giữa `<` và `>` thì sẽ **xóa mất biểu thức toán**. Đã mở RAW source gốc và xác nhận các đoạn đáp án/lập luận khớp nguyên văn 2/2. Không đánh FAIL sai vì lỗi thao tác đọc.
- Kết quả học sinh và giá trị đầu vào không đổi byte, **43/43** khối Đối chiếu đóng/mở cân bằng, 12 tuyến Kiến thức, 12 FirstTry; các selfcheck công khai chỉ dùng lại câu đã có và không kích hoạt Mastery.

## B. Kiểm chứng trực tiếp những điểm dễ sai toán

1. **Tương đương và hệ số 0:** `x=3` kéo theo `x²=9` nhưng hai phương trình có tập nghiệm khác nhau; với `m(x−2)=m−1`, m=0 cho 0=−1 vô nghiệm, m≠0 cho x=3−1/m. Bài 3 x=11, bài 4 `mx=2m`: m≠0 x=2, m=0 mọi x. Không bỏ nhánh m=0 khi chia.
2. **Tích và biệt thức:** `(x−1)²(x+4)=0` có đúng hai giá trị nghiệm 1 và −4 mặc dù 1 bội hai. `2x²−5x−3=0` có nghiệm 3, −1/2, Δ=49. `x²+2x+5=0` không có nghiệm thực vì `(x+1)²+4>0`.
3. **Phân thức và trị tuyệt đối:** `(x²−4)/(x−2)=0` buộc x≠2 nên chỉ x=−2. `1/(x−1)+1/(x+1)=1` với x≠±1 cho x=1±√2, đều hợp miền. `|2x−3|=5` cho x=−1,4; `|x−2|=x` chỉ x=1, điều kiện x≥0.
4. **Một căn và hai căn:** `√(x+5)=x−1` có x=4, loại −1 vì x<1; `√((x+4)²)=√(x+4)` trên x≥−4 cho x=−4,−3; `√(3x+4)=x` chỉ x=4; `√(2x²+9)=x+3` nhận cả 0 và 6. `√(x²+7x+11)=√(x+3)` nghiệm −2, loại −4 vì ngoài miền. Điều kiện căn số học phải không âm; không tự khẳng định bình phương là tương đương trên miền không lọc dấu.
5. **Topic căn & ngoại lai:** `√(x+2)=x` ứng viên 2,−1, chỉ 2 hợp dấu. `√(x²)=x` có mọi x≥0, không phải mọi thực. `√(3x+1)=√(x+7)` có nghiệm 3. `√(5x+4)=x+2` có hai nghiệm thật 0,1. `√(x+4)=√(x²+5x+2)` ứng viên −2±√6, giá trị −2−√6<−4 bị loại vì x+4<0; giá trị dương hợp. `√(x²+9)=x−1` vô nghiệm sau lọc vì ứng viên −4 vi phạm x≥1.
6. **Written logic:** `THPT-TOP03-W01`: với r±=(3±√33)/2, phương trình (A) `√(x+7)=x−1` chỉ nhận r+ vì x−1≥0; (B) `√(x+7)=|x−1|` nhận r−,r+. Thang /7 chấm miền, bình phương, lọc và giải thích sự khác nhau — cùng source original. SGK Written B18 `√(x²+4x+4)=√(2x+4)` nhận −2,0; giữ rubric 5 điểm. Bài tam giác với hai cạnh 12,5 có cạnh huyền13, rubric /6 nguyên bản.
7. **Đổi t và mô hình:** `x⁴−5x²+4=0` với t=x²≥0 cho ±1,±2; `x⁴+3x²−4=0` loại t=−4, x=±1. Thang 10 m có chân cách tường6 m, cao8 m. Bài vận tốc 120 km: v=40→60 km/h, thời gian3→2 giờ; loại −60 do vận tốc âm. Luôn ghi điều kiện vật lý/trả đơn vị.

## C. D1–D6/PED về tự học

- Mỗi tuyến lý thuyết giải thích **vì sao** cần giữ miền, giữ tập nghiệm trước khi trình bày cách giải. Lộ trình từ tương đương/tích/bậc hai đến phân thức–trị tuyệt đối, một căn/hai căn, đổi biến/mô hình. Nội dung Topic có đủ Kiến thức/Luyện tập/Tự kiểm tra, không tạo Core riêng.
- Các phương pháp lựa chọn có giới hạn áp dụng: chia biểu thức khác 0, khử mẫu trên miền, bình phương tạo ứng viên, giá trị tuyệt đối chia nhánh, `t=x²≥0`, mô hình với đại lượng dương. Tự thử trước khi mở Đối chiếu và hướng D6 dẫn về bài liên quan.
- SVG quy trình bình phương và hình trục số phân biệt nhánh 1 căn/2 căn, ghi rõ hình chỉ minh họa một ví dụ cụ thể không thay việc kiểm phương trình gốc. Đặc biệt bẫy r− ở Written W01 và nghiệm −4 ngoài miền ở Bài 17 đã được giải thích bước lọc.
- Không tìm thấy lỗi P0/P1 khi đối chiếu 31 bài và 12 tuyến học này. Đây là **self-QA có chứng cứ**, không là nghiệm thu độc lập toàn Topic / SBT trang in / render website / đánh giá RD1.

## D. Handoff và bước tiếp

AUTHORING_SOURCE_STATUS: existing R06 CONTENT_READY unchanged. No new Delta C nor additional NotebookLM request. Existing signed Q18/metadata/handoff/REGISTER/ready snapshot stays bound to original source `9df43259cfb61646ec1d60c036e360c40417daae` and is not replaced by this supplemental self-audit.
NO_RELEASE: Draft PR #888, no merge/deploy, no Final Submit/Mastery changes.