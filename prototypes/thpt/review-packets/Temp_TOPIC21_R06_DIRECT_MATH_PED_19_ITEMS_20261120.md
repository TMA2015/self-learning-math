# CĐ21 — Phản biện AUTHORING trực tiếp 19 câu học sinh: xác suất có điều kiện / toàn phần / Bayes

**Ngày:** 20/11/2026. **Đánh giá:** kiểm toán toán học và sư phạm có giới hạn dựa trên đúng learner đang hiển thị. Không tự nhận NotebookLM full-Topic PASS mới. Không thay source, rubric, câu hỏi/ID, RD1 hoặc cơ chế website.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
SOURCE_PATH: prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R05_LEARNER_PRESENTATION_20261116.md
SOURCE_BLOB: ab886f53b9bee89f71a852febb7f2d9ccfff2373
EXISTING_AUTHORING_PR: #885
REVIEW_MODE: AUTHOR_DIRECT_SCOPED_Q18
REVIEW_SCOPE: 8 FirstTry + 8 Topic Practice + 3 Written, 19 own canonical IDs, 19 balanced reveal blocks
AUTHOR_MATH_VERDICT: PASS_ON_19_CHECKED_ITEMS
AUTHOR_PED_VERDICT: PASS_ON_19_CHECKED_ITEMS
P0_P1_FOUND: 0/0
SOURCE_DELTA: NONE
INDEPENDENT_NOTEBOOKLM_REVIEW_REQUEST: NONE_NO_ACADEMIC_MATERIAL_CHANGE
RELEASE_AUTHORIZATION: NO

## 1. Điều kiện và phép tính toán chính xác

**Xác suất có điều kiện (T01–T04 / P01–P04):** T01 biết vé xanh thì mẫu điều kiện 9 vé xanh, 6 có sao => P(sao|xanh)=6/9=2/3, không chia 24; T02 xúc xắc A chia hết cho 3, B chẵn => A∩B={6}, P(A|B)=1/3; T03 rút thẻ không hoàn lại P(đỏ đầu,xanh sau)=4/9×5/8=5/18, không dùng 5/9 cho lượt sau; T04 xu 2 lần, A lượt đầu ngửa và B đúng một ngửa có P(giao)=1/4=P(A)P(B): **độc lập dù B nhắc lại lượt đầu**. P01 12 phiếu tam giác trong 40 có 5 đỏ => P(đỏ|tam giác)=5/12; P02 1..12 B>6 (6 số), A chia hết4 có 2 kết quả {8,12} => P(A|B)=1/3; P03 đỏ–vàng–đỏ không hoàn lại trong 5 đỏ/2 vàng: (5/7)(2/6)(4/5)=4/21; P04 xúc xắc A chẵn, B>3 có P(giao)=2/6=1/3 ≠ P(A)P(B)=1/4, **không độc lập**. Đã kiểm phần tiền đề mẫu điều kiện phải có P(B)>0 và rút lần lượt thay đổi số mẫu.

**Toàn phần–Bayes (T05–T06 / P05–P06):** T05 hai nguồn X 1/4 với lỗi1/10, Y 3/4 với lỗi1/30 cho P(lỗi)=1/40+1/40=1/20; T06 X2/5 lỗi1/10, Y3/5 lỗi1/5 => P(Y|lỗi)=(3/25)/(4/25)=3/4. P05 X2/5 lỗi1/20, Y3/5 lỗi1/10 cho 1/50+3/50=2/25; P06 H1/4 có P(xanh|H)=3/5, K3/4 có P(xanh|K)=1/5 => P(H|xanh)=(3/20)/(3/20+3/20)=1/2. Học liệu đều tính xác suất nhánh 'nguồn→dấu hiệu' trước rồi mới chuẩn hóa theo toàn bộ dấu hiệu; không lẫn hướng xác suất.

**Sơ đồ cây & tỉ lệ nền (T07–T08 / P07–P08):** T07 A3/5 có đỏ3/10 => 9/50, A không đỏ21/50; B2/5 có đỏ1/4 =>1/10, B không đỏ3/10; tổng lá=1; P(đỏ)=7/25. T08 P(H)=2%, phát hiện90%, báo nhầm15%: P(H|báo)=0.018/(0.018+0.147)=6/55≈10.91%. P07 R2/5 thành công3/4, S3/5 thành công1/2 => P(S thất bại)=3/10, P(thành công)=3/5, bốn lá cộng1. P08 trong 1000 sản phẩm có20 lỗi, máy đúng80% lỗi (16), nhầm5% trong 980 tốt (49) => P(lỗi|báo)=16/(16+49)=16/65≈24.62%. Cả bài ví dụ và D6 dùng bảng tần suất để lý giải tại sao tỉ lệ nền thấp làm xác suất hậu nghiệm khác xa độ nhạy bộ lọc.

**Tự luận /4 (W01–W03):** W01 từ 60 học sinh, C có24 (15 kính/9 không), ngoài C36 (18 kính/18 không), toàn kính33; P(kính|C)=15/24=5/8, P(C|kính)=15/33=5/11, P(C∩kính)=15/60=1/4. W02 nguồn X1/3 lỗi1/5, Y2/3 lỗi1/10: bốn lá 1/15,4/15,1/15,3/5 tổng1; P(lỗi)=2/15, P(X|lỗi)=1/2. W03 trong 10,000 hồ sơ P(H)=1%, bộ lọc nhạy80%, báo nhầm5% khôngH: 80 báo đúng, 495 báo nhầm, P(H|báo)=80/575=16/115≈13.91%; phát biểu '80% hồ sơ bị báo thuộc H' là sai do đảo chiều và bỏ tỉ lệ nền. Ba Written đều có bài giải có suy luận, rubric /4, D6 hướng sửa nhầm chiều hoặc mẫu số.

## 2. Vì sao học sinh có thể tự khắc phục lỗi

- Các câu điều kiện thu hẹp tập hợp kết quả (24 vé→9 vé xanh, 40 thẻ→12 tam giác) trước khi chia; D6 nêu cụ thể mẫu số cần đổi, không chỉ nhắc công thức.
- Ví dụ một biến cố **độc lập** dù mô tả chung ngôn ngữ ở T04, đối chứng một cặp có **cùng xác suất 1/2 nhưng không độc lập** ở P04; hai phản ví dụ chữa thói quen suy theo cảm giác thay vì kiểm P(giao)=P(A)P(B).
- Các sơ đồ cây/Bayes diễn giải 'nhân dọc đường, cộng các lá cùng đích, rồi chia cho tổng các lá phù hợp', đối chiếu bằng bảng 10.000/1.000 trường hợp; không đánh đồng độ nhạy với xác suất hậu nghiệm.
- Kiểm tra mã nguồn học sinh: 8 FirstTry, 8 Practice, 3 Written và 19 opt-in `<details>` cân bằng; 8 public question-only selfchecks không ghi Mastery. Hướng D6 có bài/nhóm kiến thức cụ thể, không lộ mã kỹ thuật trong đoạn học sinh cần hiểu.

## 3. Verdict và giới hạn

AUTHOR_MATH_PED: PASS in 19 inspected Topic-owned T/P/W cards; no P0/P1 detected. **CONTENT CHANGE NONE**. Đây là spot-check tác giả, không tái chứng nhận toàn bộ original SGK/SBT 8 display-only items hoặc cấp một full independent NotebookLM PASS mới. Giữ nguyên CONTENT_READY của snapshot trước, giữ Assessment Q16 và private RD1 owner-held; không merge/deploy hay kích hoạt mastery.
