# CĐ06 — AUTHORING QA toán học/sư phạm trực tiếp: 66 canonical, 16 tuyến Kiến thức/Vận dụng · 21/11/2026

**Đây là self-audit có chứng cứ trên nguồn học sinh, không là full independent NotebookLM Academic/PED PASS mới.** Nội dung đã nghiệm thu chỉ đổi khi có lỗi thực. Không đụng RELEASE/website/mastery.

STANDARD_ID: SLM-THPT-QUALITY-ONE
PACKET_ID: THPT-TOPIC06-TRIGONOMETRY-FULL-R06
LEARNING_PATH: TOPIC
SOURCE_PATH: prototypes/thpt/content-drafts/topic06-trigonometry/Temp_TOPIC06_R06_NUMBERING_CONSISTENT_20261116.md
SOURCE_BLOB: 55cbb23d860aaff700c959bc291ec44699584159
ORIGINAL_BANK_G11_B01_B04_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3
ORIGINAL_BANK_TOPIC_NEW20_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65
REVIEW_MODE: AUTHOR_DIRECT_ITEM_Q15_MATH_AND_OUTCOME_PED_AUDIT
SOURCE_DELTA: NONE
ACADEMIC_AUTHOR_CHECKED_SCOPE: PASS
PED_AUTHOR_CHECKED_SCOPE: PASS
P0_OBSERVED: 0
P1_OBSERVED: 0
NEW_INDEPENDENT_NOTEBOOKLM_VERDICT: NOT_REQUESTED_NO_DELTA_C
RELEASE_AUTHORIZATION: NO

## 1. Q15 đối chiếu từng câu với nguồn gốc

- Trang Luyện tập có **66/66 `DISPLAY_ONLY_CANONICAL` duy nhất**, trong đó **46 original G11 B01–B04** và **20 Topic new**. Nguồn original G11 raw cho **46/46 đáp án** khớp đúng phần chiếu và **44/44 lời giải riêng** khớp; 4 Written có rubric nguồn **4/4** khớp. Hai G11 Written còn lại trích phần gộp đáp án/lời giải, không phải thiếu nội dung.
- Ngân hàng Topic 20 có **20/20 khóa đáp án** khớp nguyên văn, **16/16 lời giải formative** khớp; bốn Written gộp lời giải riêng với rubric, **4/4 rubric** khớp nguyên văn. Có 82 `<details>` mở và 82 đóng (16 Kiến thức/Vận dụng, 66 Luyện tập), không rò đáp án trước khi mở đối chiếu.
- Original 2 Written/Anchor nhãn chỉ phân vai, không thêm bản sao item; không sửa SGK, mã/đề/key/rubric, IDs. Không sử dụng regexp loại bỏ dấu `<` toán học để xác định source parity vì có thể làm mất điều kiện.

## 2. Kiểm toán từng họ dạng và điều kiện

- **O01–O03 độ/radian, đường tròn đơn vị, cung có hướng:** 135°=3π/4 ở phần tư II; 765°→45°; cung R=12 góc5π/6 dài10π; quay −450°=−5π/2 tia cuối(0,−1); sinα=4/5 ở góc phần tư II cho cos=−3/5,tan=−4/3; quay bánh R=7,−120° cho độ dời có hướng−14π/3 và quãng đường14π/3. Written W01 M=(10,−10√3), cung100π/3 cm và dây20 cm đúng đơn vị, dấu.
- **O04–O07 công thức, miền tan/cot:** sin(π/3−π/6)=1/2; cos2π/3=−1/2; sin75°=(√6+√2)/4, cos75°=(√6−√2)/4; tích và tổng chuyển dạng chính xác 2sin75sin15=1/2, sin75+sin15=√6/2. `tan(u+v)` với tan u=1/2,tan v=1/3 có mẫu 5/6 ≠0 và kết quả 1. F=sinx/(1+cosx) cần loại (2k+1)π trước khi dùng tan(x/2). Written W02 cos3x+cosx=0 trong [0,2π) có 4 nghiệm từ cos2x và 2 từ cosx, tổng 6 nghiệm không trùng; Written công thức sin(u+v)sin(u−v)=sin²u−sin²v đúng cho mọi góc.
- **O08–O11 TXĐ, chu kỳ, biến thiên:** tanx loại π/2+kπ, cot2x loại kπ/2, tan3x loại π/6+kπ/3. sin2x+sin4x có chu kỳ cơ bản π; h=3−2cos(πt/4) có T8, TGT[1,5], h(0)=1,h(4)=5; T(t)=24+3cos(πt/6) có chu kỳ12, TGT[21,27]. Written y=2sin(3x+π/6)−1 đạt max1 tại π/9+2kπ/3, min−3 tại 4π/9+2kπ/3. Đúng hướng tăng/giảm tan và cot trên từng nhánh, không qua điểm loại.
- **O12–O15 phương trình, họ nghiệm và kiểm biên:** sinx=−1/2 có −π/6 và7π/6 modulo2π; cosx=1/2 có ±π/3 modulo2π; tanx=−1 có −π/4 moduloπ; cotx=1 có π/4 moduloπ. sin2x=1/2 ⇒ x=π/12,5π/12 moduloπ; cos2x=cosx ⇒ x=2kπ/3; sinx=sin3x ⇒ kπ hoặc π/4+kπ/2; tanx=tan2x ⇒ x=kπ nhưng bắt buộc kiểm hai mẫu cos khác0. Phân thức sinx/(1−cosx)=0 chỉ nhận x=(2k+1)π, loại 2kπ. Các bài [0,2π), [0,π], [−π,π) đều xét đúng điểm đầu/cuối.
- **O16 mô hình tuần hoàn giới hạn:** h(t)=20+6sin(πt/12), [0,24], T24, max26 tại t6, min14 tại t18, h>20 khi 0<t<12; nhiệt độ giả định h(t)=10+2sin(π(t−6)/12), [0,24], max12 tại t12, min8 tại t0,24, bằng10 ở t6,18. Written W04 /7 giải thích giá trị *theo mô hình*, không tự tuyên bố đó là dữ liệu đo hoặc dự báo chắc chắn.

## 3. Tự học theo từng outcome và chống sai lầm

- 16 tuyến Kiến thức có giải thích mục đích của định nghĩa/công thức, một ví dụ với suy luận, câu **Vận dụng tự thử** và Đối chiếu ẩn/D6 để học sinh tự khôi phục cách giải. Không nhận nhãn Vận dụng là một `canonical ITEM_ID` riêng; không tự tạo Core thứ tư cho Topic.
- O01–O03 phân biệt góc có dấu và độ dài cung không âm; O04–O07 kiểm dấu góc phần tư, điều kiện tan/cot và **không chia cho sin/cos khi có thể bằng0**; O08–O11 giải thích vì sao chu kỳ phải đúng trên miền và phân biệt biên độ/trục giữa/pha, tiệm cận; O12–O15 nhắc hai họ nghiệm, kiểm mẫu và lọc khoảng mở/đóng; O16 phân biệt mô hình định kỳ có giả thiết với đo thực tế.
- Có SVG đường tròn đơn vị, đồ thị sin chu kỳ, tiệm cận tan; phần lý thuyết/đáp án hướng dẫn đọc hình và quay lại phép thử số, không dùng hình thay chứng minh.

## 4. Verdict và điểm dừng

AUTHOR_MATH_SCOPE: 66/66 Practice read and compared for key, steps and conditions; 16/16 knowledge/example/application routes checked. AUTHOR_PED_SCOPE: 4/4 Topic Written rubric plus 4/4 G11 original Written, D6/đối chiếu phù hợp. Không phát hiện P0/P1 ở phạm vi này. Đây KHÔNG thay thế phản biện độc lập trước đây và KHÔNG phải QA website/device.
NO_SOURCE_DELTA: prior signed learner blob `55cbb23d860aaff700c959bc291ec44699584159` remains single active source. Q18 signed, A1, V2, ready, REGISTER unchanged; no source modification or duplicate ID. NotebookLM not re-requested for unchanged material.
NO_RELEASE: Draft PR #891 only; private RD1, Final Submit/Mastery, merge/deploy untouched.