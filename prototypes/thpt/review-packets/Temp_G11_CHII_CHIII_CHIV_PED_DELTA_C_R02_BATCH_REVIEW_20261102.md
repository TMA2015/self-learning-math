# Temp · Toán 11 KNTT Chương II–IV — ONE targeted PED Delta_C R02 batch review

**PACKET_ID:** G11-CHII_CHIII_CHIV-PED-DELTA-C-R02-BATCH-20261102
**STATE:** REVIEW_CANDIDATE_ONLY, NOT_ACADEMIC_PASS_FOR_R02, NOT_RELEASE_READY
**REVIEW_TARGET:** Theo từng chương II B05–B07; III B08–B09; IV B10–B14, từng bài và từng nhóm PED1–PED6. Các phần bên dưới là **đoạn bổ sung nguyên văn** được trích tự động bằng so sánh Git blob R01 (đã Academic PASS, ChIV đã có PED PASS cho snapshot cũ) và Git blob R02 (chưa review). **Không** đưa nguồn RD1 kín vào file.
**AUTHORITIES:** SGK/SBT Toán 11 KNTT Tập 1 S1 và đúng 5 Permanent Sources THPT NotebookLM v2.0.
**SOURCE_PAGES (owner receipts):** II SGK tr.42–57, SBT B05–B07 tr.31–45, cuối ChII tr.46–49 *cần reconcile*; III SGK tr.58–69, SBT trang B08–B09 và cuối chương *S1 chưa thống nhất, ChIII p45–52 theo nguồn thứ cấp không phải S1*; IV SGK tr.70–103, SBT tr.65–95.
**QA BOUNDARY:** Cùng 114 câu public canonical (ChII 42, ChIII 32, ChIV 40), 11 SVG, 22 D6 (ChII 6 + ChIII 6 + ChIV 10), 62 RD1 private (19+21+22) **không được thay/chia sẻ**; không thay lời giải, đáp án, rubric, item IDs, Mastery/Readiness.
**VERDICT REQUIRED:** per chapter → per lesson → per changed section/VD/FIG; SOURCE_RECEIPT, PED1–6, D1–D6 impact, SGK/SBT S1, P0/P1/P2, MINIMAL_DELTA, `TARGETED_PED_CLEARANCE` PASS/REVISE/HOLD. Chỉ PASS đúng snapshot R02 được ghi bên dưới.

---

## CHƯƠNG II — R02 SOURCE DELTA, SNAPSHOT HASH LOCK

- **Public reviewed R01:** Git blob `a0975caaf39ead93c5faef149132f5ff6a828359`, original source lines **667/667 preserved** in candidate.
- **R02 actual full source:** [GitHub PR #683 prototypes/thpt/content-drafts/G11_CHII_B05_B07_PED_R02_FULL_SOURCE_DELTA_C_REVIEW_20261102.md](https://github.com/TMA2015/self-learning-math/blob/content/thpt-g11-chii-b05-b07-complete-r01-20261031/prototypes/thpt/content-drafts/G11_CHII_B05_B07_PED_R02_FULL_SOURCE_DELTA_C_REVIEW_20261102.md), exact blob **`9737e7b0ba33fc875bc1d78d1104e8ebb427b6f3`**; candidate has 7 appearances of `[R02-NEW]` (includes register mentions).
- **Expected review scope:** ChII B05–B07 9 existing D2 examples and 3 SVG / 3 self-tries; ChIII B08–B09 10 existing D2 examples and 3 SVG / 2 self-tries; ChIV B10–B14 20 existing D2 examples and 5 SVG / 5 self-tries. Review only new explanations and their consistency with the original source, **not** another complete original item-bank audit.
- **Metadata:** R01 source claims remain scoped to R01. No R02 Academic/PED PASS should be inferred from this batch's creation.

### Exact additions relative to frozen R01 source (67 lines)

# Temp · Toán 11 Chương II B05–B07 — Concept-first PED Delta_C R02 review candidate

**PACKET_ID:** G11-CHII-B05-B07-PED-DELTA-C-R02-20261102  
**SOURCE_LOCK_ORIGINAL:** Git blob `a0975caaf39ead93c5faef149132f5ff6a828359` — owner Academic PASS ChII Issue #684.  
**STATUS:** TARGETED_PED_REVIEW_REQUIRED, DELTA_C_ACADEMIC_MATERIAL, NOT_RELEASE_READY. **Bản R01 bên dưới nguyên văn**; nhãn 'CHƯA REVIEW' trong đó là metadata lịch sử, đã được biên bản R01 PASS thay thế.  
**SOURCE_S1:** SGK Toán 11 KNTT Tập 1 B05 tr.42–47, B06 48–51, B07 52–55; SBT B05 tr.31–36, B06 37–40, B07 41–45 và cuối ChII 46–49 **theo owner receipt #684, cần kiểm tra lại do trùng trang với receipt ChIII**.  
**PERMANENT:** đúng 5 THPT Sources v2.0. **REVIEW_SCOPE:** chỉ [R02-NEW] theo PED1–PED6 cho B05–B07 và chín ví dụ VD-G11-B05-01..03, B06-01..03, B07-01..03; SVG gốc giữ nguyên, private 19 RD1 không đưa lên GitHub. Bản này chưa nhận verdict độc lập.

---

### [R02-NEW] B05-PED1-3 — Vì sao cần dãy số và vì sao dùng chỉ số nguyên dương?

Em hãy ghi số cây được trồng trong ngày 1, ngày 2, ngày 3: 2, 4, 6. Một **con số đơn lẻ** không cho biết biến đổi theo từng ngày; một **hàm số thông thường** có thể nhận đầu vào bất kỳ, nhưng ở đây ta chỉ cần các chỉ số ngày 1,2,3,… . Gắn từng số tự nhiên n với lượng tương ứng u_n: đó là cách hình thành dãy số. Quy ước n bắt đầu từ 1 hay 0 phải được công bố; không tự thay u_1 bằng u_0.

Hai cách cung cấp thông tin đều hữu ích: u_n=2n cho biết ngay số hạng thứ n (công thức tổng quát), còn u_1=2, u_{n+1}=u_n+2 cho biết **cách tạo số tiếp theo** (truy hồi); truy hồi thiếu số khởi đầu chưa xác định duy nhất dãy. Khi mỗi ngày nhiều hơn ngày trước, cần so sánh u_{n+1}-u_n; khi hỏi “có vượt 10 không?”, ta xét cận đúng **với mọi n**, không chỉ vài số đầu. Dãy số là dữ liệu rời rạc: trên đồ thị không nối liên tục các điểm có chỉ số n nguyên.

### [R02-NEW] B06-PED1-3 — Từ “tăng cùng một lượng” đến công sai

Một hàng ghế có 12 chỗ, hàng kế tiếp 15, tiếp theo 18. Để dự đoán hàng thứ 20, không nên cộng 3 tới 19 lần bằng tay. Hãy nhìn **hiệu** giữa hai hàng kề: 15−12=3 và 18−15=3. Chính đại lượng được cộng **không đổi** d=3 tạo nên **cấp số cộng**. Nếu d=0 thì dãy hằng; d âm tương ứng giảm đều.

Vì từ hàng 1 đến hàng n có **n−1 bước**, nên u_n=u_1+(n−1)d. Nếu xếp ngược hai dãy của n số đầu, từng cặp đều bằng u_1+u_n; tổng hai dãy bằng n(u_1+u_n), vì vậy S_n=n(u_1+u_n)/2. Đây là lý do của công thức, không phải mẹo cần thuộc vô điều kiện. Khi mô hình hàng ghế hoặc sản lượng, nhớ rằng n phải là nguyên dương và số chỗ/người không thể âm.

### [R02-NEW] B07-PED1-3 — Từ “tăng theo cùng tỉ lệ” đến công bội

Một lượng ban đầu 100 được nhân 1,1 ở mỗi kỳ: 100; 110; 121; … . Nếu mỗi kỳ cộng 10 thì dãy thành 100;110;120; khác 121. Khi **tỉ số tăng trưởng** ổn định, ta cần cấp số nhân với công bội q, nghĩa là u_{n+1}=q u_n. Lý do u_n=u_1 q^{n−1}: từ số hạng đầu đến thứ n ta đã nhân q đúng n−1 lần.

Không chia u_{n+1}/u_n khi u_n=0; dùng định nghĩa nhân để kể cả q=0. Khi q âm, dấu có thể luân phiên; không đánh đồng giá trị tuyệt đối lớn dần với dãy đồng biến. Tổng hữu hạn xuất hiện khi muốn cộng mọi kỳ: S_n=u_1+...+u_n. Lấy qS_n rồi trừ hai tổng giúp suy ra (1−q)S_n=u_1(1−q^n); chỉ chia cho 1−q khi q≠1. Trường hợp q=1 phải dùng S_n=nu_1. Lãi kép cần thống nhất “vốn trước kỳ” và chỉ số kỳ.

### [R02-NEW] B05-B07-PED5 — Vì sao chọn cách giải trong 9 ví dụ gốc?

- VD-G11-B05-01: thay chỉ số vào u_n trước, sau đó giải u_n=28 và **kiểm n nguyên dương**; giải đại số mà bỏ điều kiện chỉ số là chưa xong.
- VD-G11-B05-02: tính từ u_1 theo truy hồi trước, chưa cần gọi tên cấp số cộng; vì thiếu u_1 sẽ có vô số dãy thỏa cùng quy luật.
- VD-G11-B05-03: xét u_{n+1}−u_n để chứng minh giảm **mọi n** và bất đẳng thức 0<u_n≤1 để chứng minh bị chặn.
- VD-G11-B06-01: đo hiệu u_{n+1}−u_n, vì định nghĩa CSC nói về **hiệu cố định**, không chỉ hình thức u_n.
- VD-G11-B06-02: từ hai số hạng u_4,u_9 suy ra 5d=15, vì có năm bước giữa hai chỉ số; sau đó mới tìm u_1.
- VD-G11-B06-03: dùng hai cách tính S_20 để tự kiểm; ghép cặp đầu–cuối giải thích vì sao có hệ số 1/2.
- VD-G11-B07-01: tìm q từ phép **nhân** liên tiếp, không gọi dãy có dấu xen kẽ là đồng biến; chú ý lũy thừa n−1.
- VD-G11-B07-02: phân biệt u_7 (một số hạng) với S_7 (tổng nhiều số hạng), kiểm điều kiện q≠1.
- VD-G11-B07-03: lãi mỗi kỳ tính trên vốn **mới** sau kỳ trước, nên dùng lũy thừa, không cộng 2% của vốn ban đầu năm lần.

### [R02-NEW] B05-B07-PED6 — Ba Tự thử ngắn trước khi vào Core (không tạo canonical ID)

**B05:** Dãy u_n=2n−1 bắt đầu từ n=1: em dự đoán u_4 và giải thích vì sao n=4, không phải n=0. **Chỉ mở đối chiếu sau khi tự làm:** u_4=7; trở về mục chỉ số và VD-G11-B05-01 nếu chưa chắc, sau đó làm `THPT-G11-B05-C01`.

**B06:** Hàng đầu có 12 ghế, mỗi hàng sau thêm 3 ghế. Hàng thứ 4 có mấy ghế? **Tự đối chiếu sau khi thử:** 12+3·3=21, vì có ba bước; làm `THPT-G11-B06-C01` sau khi giải thích.

**B07:** Từ vốn 100, nhân 1,1 mỗi kỳ. Sau 2 kỳ là 120 hay 121? **Tự đối chiếu sau khi thử:** 100·1,1²=121, vì tăng trên vốn mới; làm `THPT-G11-B07-C01`.

Hai loại hoạt động trên chỉ là luyện phản tư, không phải RD1, không ghi điểm/Mastery; nhánh phát hành phải giấu phần đối chiếu cho tới khi người học tự mở.

### [R02-NEW] B05-B07-PED4 — Cách đọc ba hình dãy số gốc

- `FIG-G11-B05-01`: chỉ số n=1..6 là các **giá trị rời rạc**; u_n=(-1)^n cho dãy −1,1,−1,1,−1,1; không nối chúng thành đồ thị một hàm liên tục theo n thực. Từ hình, dãy **không tăng/giảm nghiêm ngặt** nhưng bị chặn giữa −1 và 1.
- `FIG-G11-B06-01`: điểm (1,3),(2,6),(3,9),(4,12),(5,15) có tung độ tăng mỗi lần 3 khi chỉ số tăng 1; ý nghĩa là công sai d=3 chứ không phải một đường liên tục trên mọi n thực.
- `FIG-G11-B07-01`: các điểm (1,2),(2,4),(3,8),(4,16),(5,32) nhân đôi tung độ mỗi kỳ; so với hình CSC, khoảng cách tăng theo cấp số nhân. Kiểm tra trục tung và đơn vị; không suy rằng mọi CSN đều tăng vì q có thể âm hoặc nhỏ hơn 1.

Giữ nguyên ba SVG canonical gốc; chỉ bổ sung lời dẫn, không chỉnh tọa độ, title/desc, số hạng hoặc khóa câu hỏi.


---

## R02 review register và bảo toàn source

**8 khối học thuật:** B05-PED1-3, B06-PED1-3, B07-PED1-3, B05-B07-PED4, B05-B07-PED5 (9 VD), B05-B07-PED6 (3 first-tries), cùng liên kết 16 outcomes/D1–D6. **Review delta theo bài, outcome, VD và hình**, không review lại 42 canonical câu đã PASS trừ khi phát hiện lỗi cụ thể. R01 Academic PASS chỉ áp dụng nguồn cũ, R02 bổ sung không được tự nhận PASS.

**QA mục tiêu:** 36 Core/Practice + 6 Written/Anchor, ba SVG, sáu HELP, 19 private RD1 ngoài GitHub giữ nguyên; kết quả học sinh/Firebase/THCS/Skill Mastery không liên quan. Chương II SBT page receipt có mâu thuẫn với ChIII: yêu cầu NotebookLM kiểm tra trực tiếp trang in S1, không áp dụng số trang từ nguồn thứ cấp làm verdict.


---

## CHƯƠNG III — R02 SOURCE DELTA, SNAPSHOT HASH LOCK

- **Public reviewed R01:** Git blob `ef7dbfbd55c34abab8a384d4dac3284c100dbaac`, original source lines **310/310 preserved** in candidate.
- **R02 actual full source:** [GitHub PR #685 prototypes/thpt/content-drafts/G11_CHIII_B08_B09_PED_R02_FULL_SOURCE_DELTA_C_REVIEW_20261102.md](https://github.com/TMA2015/self-learning-math/blob/content/thpt-g11-chiii-b08-b09-whole-chapter-20261031/prototypes/thpt/content-drafts/G11_CHIII_B08_B09_PED_R02_FULL_SOURCE_DELTA_C_REVIEW_20261102.md), exact blob **`0b0fe33d213350c586f04345c39806c2633c594e`**; candidate has 6 appearances of `[R02-NEW]` (includes register mentions).
- **Expected review scope:** ChII B05–B07 9 existing D2 examples and 3 SVG / 3 self-tries; ChIII B08–B09 10 existing D2 examples and 3 SVG / 2 self-tries; ChIV B10–B14 20 existing D2 examples and 5 SVG / 5 self-tries. Review only new explanations and their consistency with the original source, **not** another complete original item-bank audit.
- **Metadata:** R01 source claims remain scoped to R01. No R02 Academic/PED PASS should be inferred from this batch's creation.

### Exact additions relative to frozen R01 source (62 lines)

# Temp · Toán 11 Chương III B08–B09 — Concept-first PED Delta_C R02 review candidate

**PACKET_ID:** G11-CHIII-B08-B09-PED-DELTA-C-R02-20261102  
**ORIGINAL_ACADEMIC_PASS_SOURCE:** Git blob `ef7dbfbd55c34abab8a384d4dac3284c100dbaac` — owner Academic PASS Issue #687; original R01 source text below preserved.  
**STATUS:** TARGETED_PED_REVIEW_REQUIRED / CITATION_S1_RECONCILIATION_REQUIRED / NOT_RELEASE_READY. Historical `NOT_NOTEBOOKLM_PASS` inside frozen R01 is pre-verdict metadata superseded by owner Issue #687 for R01 only.  
**SOURCE S1:** SGK Toán 11 KNTT Tập 1 B08 tr.58–61; B09 tr.62–68; cuối ChIII tr.69. **SBT ChIII vs ChII pagination contradictory in existing reviewer receipts**: ChIII B08 p44–46 vs ChII B07 p41–45; cần xác minh trực tiếp trang in từ S1. Nguồn thứ cấp có bài 3.1 ở SBT p45, chỉ là dấu hiệu kiểm tra chéo, không phải phép chứng thực S1. 
**AUTHORITIES:** 5 Permanent Sources THPT v2.0. **SCOPE:** chỉ đoạn `[R02-NEW]` PED1–6, mười VD-G11-B08-01..04/B09-01..06, 3 SVG gốc; 32 public canonical và 21 RD1 kín bất biến.

---

### [R02-NEW] B08-PED1-3 — Từ hàng trăm số đo rời rạc đến bảng nhóm

Một lớp có 40 số đo thời gian đi học, mỗi số hơi khác nhau. Viết đủ 40 số rất chính xác nhưng khó trả lời **bao nhiêu bạn đi dưới 20 phút, bao nhiêu bạn đi lâu hơn?** Bài 8 giải quyết bằng cách chia trục giá trị thành các khoảng rồi đếm số quan sát mỗi khoảng. Nhờ vậy nhìn được bức tranh tổng thể, đổi lại **không còn biết chính xác từng số trong nhóm**.

Hãy thử hai nhóm [10;20) và [20;30). Số 20 phải thuộc nhóm thứ hai vì nhóm đầu **loại đầu mút 20**; nếu cho cùng một điểm rơi vào hai nhóm thì tổng tần số sẽ lớn hơn cỡ mẫu. Tần số m_i là số quan sát thuộc nhóm i, tổng các m_i phải bằng n. Các khoảng có thể rộng khác nhau theo dữ liệu; khi đọc hoặc so sánh, phải xem độ rộng và ý nghĩa quy ước nhóm chứ không tự kết luận chỉ từ chiều cao cột.

**Cầu nối lớp 10:** bảng tần số dữ liệu thô còn giữ từng giá trị; bảng ghép nhóm ưu tiên nhìn phân bố và đổi lấy sai số ước lượng. Đây là lý do Bài 9 không thể lấy trung bình/thống kê gốc chính xác nếu chỉ còn các khoảng.

### [R02-NEW] B09-PED1-3 — Vì sao cần ước lượng trung bình, trung vị, tứ phân vị và mốt?

Giả sử chỉ còn bốn nhóm [0;10), [10;20), [20;30), [30;40) với tần số 4,8,6,2. Ta không còn biết các số đo riêng lẻ, nhưng muốn có một **con số mô tả trung tâm** để so sánh các lớp. Chọn trung điểm 5,15,25,35 làm **đại diện** cho nhóm; tổng có trọng số (4·5+8·15+6·25+2·35)/20=18. Đây là **số trung bình xấp xỉ**, không khẳng định mỗi bạn trong nhóm đúng bằng trung điểm.

Nếu muốn biết “một nửa dữ liệu ở phía trước đâu?”, hãy cộng tần số tích lũy: 4,12,18,20. Vị trí n/2=10 thuộc nhóm [10;20). **Nội suy** giả thiết phân bố đều tương đối trong nhóm để ước lượng Me=10+(10−4)·10/8=17,5; giá trị gốc có thể khác. Tương tự Q1, Q3 theo các vị trí n/4,3n/4. **Mốt** là vùng tập trung nhiều nhất, nhưng công thức nội suy đã học yêu cầu điều kiện về độ rộng các nhóm và tần số kề; không sử dụng bất chấp nhóm rộng khác nhau.

Bảng ghép nhóm cho hình dung và **ước lượng có điều kiện**, chứ không phục hồi đầy đủ dữ liệu thô. Mỗi kết luận phải ghi đơn vị và mức độ gần đúng.

### [R02-NEW] B08-B09-PED5 — Lý do chọn phương pháp trong 10 ví dụ gốc

- `VD-G11-B08-01`: kiểm điểm biên 10 và 20 theo quy ước trái đóng/phải mở **trước** khi đếm, tránh đếm hai lần.
- `VD-G11-B08-02`: lập nhóm không giao nhau, đếm tần số rồi kiểm tổng bằng n=8 để phát hiện bỏ sót.
- `VD-G11-B08-03`: chia 9/20 ra 45% vì “tỉ lệ nhóm” không phải giá trị trung điểm của từng người.
- `VD-G11-B08-04`: xác nhận nhóm rộng 5,15,10 vẫn có thể là nhóm thống kê; **không** áp công thức mốt SGK dành cho nhóm đều rộng.
- `VD-G11-B09-01`: nhân trung điểm với tần số vì mỗi đại diện “đứng thay” m_i quan sát, không lấy trung bình đơn của bốn trung điểm.
- `VD-G11-B09-02`: tìm nhóm chứa vị trí n/2 bằng tích lũy trước, rồi dùng nội suy; chỉ từ bảng không biết trung vị gốc chính xác.
- `VD-G11-B09-03`: chọn đúng nhóm cho n/4,3n/4 bằng tích lũy, nội suy từng phân vị thay vì chia đôi mẫu thô.
- `VD-G11-B09-04`: nhóm [10;20) có tần số lớn nhất 8; công thức mốt nội suy dùng chênh với hai nhóm kề và h=10, trả ra ước lượng.
- `VD-G11-B09-05`: dựng hai mẫu thô khác nhau cùng bảng nhóm cho thấy vì sao đặc trưng tính từ nhóm chỉ xấp xỉ.
- `VD-G11-B09-06`: khi vị trí phân vị rơi đúng biên, nội suy phải cho cùng đầu mút theo quy ước, không cộng hoặc trừ tùy tiện.

### [R02-NEW] B08-B09-PED6 — Hai Tự thử nhỏ trước Core, không có item_id mới

**B08:** Với các nhóm [0;10), [10;20), [20;30), số 10 thuộc nhóm nào? Tự giải thích quy ước rồi **chủ động mở lời giải**: [10;20) vì 10 nhận đầu trái; nếu chưa chắc trở về `B08-PED1-3`, sau đó luyện `THPT-G11-B08-C02`.

**B09:** Với các nhóm [0;10),[10;20),[20;30),[30;40) và tần số [4,8,6,2], tổng có bao nhiêu quan sát? Vị trí thứ 10 thuộc nhóm nào? **Tự mở đối chiếu sau khi làm:** 20 quan sát; tích lũy [4,12,18,20] nên vị trí thứ 10 thuộc [10;20). Trở về `B09-PED1-3`, làm `THPT-G11-B09-C03`.

Đây là formative không chấm, không RD1, không thay luyện tập và không ghi Skill Mastery.

### [R02-NEW] B08-B09-PED4 — Diễn giải ba hình đã review (không sửa SVG)

- `FIG-G11-B08-01`: bốn cột đại diện [0;10),[10;20),[20;30),[30;40), độ cao là 4,8,6,2; **nhãn nhóm và tần số**, không phải tọa độ điểm dữ liệu thô. Kiểm n=4+8+6+2=20.
- `FIG-G11-B09-01`: tại các biên phải 10,20,30,40, tần số tích lũy 4,12,18,20; điểm tại 20 nghĩa là 12 quan sát nằm trong các nhóm **đến trước 20**, không xác nhận mỗi quan sát bằng giá trị 20.
- `FIG-G11-B09-02`: ba vạch Q1≈11,25, Me≈17,5, Q3≈25 từ **nội suy bảng nhóm**, không khẳng định đó là ba phân vị gốc chính xác. Các vạch nằm đúng thứ tự Q1≤Me≤Q3.

Khi hình không tải, người học vẫn phải đọc được ý nghĩa trong diễn giải văn bản; font/kích thước thuộc QA trình bày A6. Không đổi SVG và chỉ số đã PASS.


---

## R02 change register và reviewer checklist

**Tập phần mới:** B08-PED1-3, B09-PED1-3, B08-B09-PED4 (3 SVG), B08-B09-PED5 (10 VD), B08-B09-PED6 (2 first tries). **PED1–PED6 review theo từng bài** và đối chiếu 14 outcomes. Cả 28 Core/Practice + 4 Written/Anchor + 3 SVG + 6 D6/HELP gốc, cùng 21 private RD1 giữ nguyên. Reviewer xác minh phạm vi SGK/SBT S1 và **xử lý xung đột trang SBT ChII–ChIII**, không dùng chứng cứ web cấp Academic PASS cho source. R01 Academic PASS giữ snapshot cũ; R02 không kế thừa PASS tự động. Verdict phải có SOURCE_RECEIPT, P0/P1/P2, MINIMAL_DELTA, PASS/REVISE/HOLD theo nhóm và yêu cầu sửa cụ thể nếu có.


---

## CHƯƠNG IV — R02 SOURCE DELTA, SNAPSHOT HASH LOCK

- **Public reviewed R01:** Git blob `f376c37dc4b98fe229f3151357da1d2701cab15e`, original source lines **704/704 preserved** in candidate.
- **R02 actual full source:** [GitHub PR #688 prototypes/thpt/content-drafts/G11_CHIV_B10_B14_PED_R02_FULL_SOURCE_DELTA_C_REVIEW_20261102.md](https://github.com/TMA2015/self-learning-math/blob/content/thpt-g11-chiv-b10-b14-whole-chapter-20261031/prototypes/thpt/content-drafts/G11_CHIV_B10_B14_PED_R02_FULL_SOURCE_DELTA_C_REVIEW_20261102.md), exact blob **`abc89621cc2b8a00950b178b65162c0d4ea34f54`**; candidate has 13 appearances of `[R02-NEW]` (includes register mentions).
- **Expected review scope:** ChII B05–B07 9 existing D2 examples and 3 SVG / 3 self-tries; ChIII B08–B09 10 existing D2 examples and 3 SVG / 2 self-tries; ChIV B10–B14 20 existing D2 examples and 5 SVG / 5 self-tries. Review only new explanations and their consistency with the original source, **not** another complete original item-bank audit.
- **Metadata:** R01 source claims remain scoped to R01. No R02 Academic/PED PASS should be inferred from this batch's creation.

### Exact additions relative to frozen R01 source (105 lines)

# Temp · Toán 11 Chương IV B10–B14 — Targeted concept-first PED Delta_C R02 candidate

**PACKET_ID:** G11-CHIV-B10-B14-PED-DELTA-C-R02-20261102. **ORIGINAL:** Git blob `f376c37dc4b98fe229f3151357da1d2701cab15e`, Academic+PED original PASS owner receipt PR #688; **giữ nguyên PASS cũ**. **R02:** tăng cường động cơ trước D1, ví dụ suy luận, thuyết minh 5 SVG, 5 Tự thử trước Core — `NOT_YET_REVIEWED`, không suy tự động từ PASS R01.
**SOURCE S1 (owner receipt):** SGK Toán 11 Tập 1 B10 tr.70–77, B11 78–83, B12 84–87, B13 88–94, B14 95–101, cuối ChIV 102–103; SBT B10 65–71, B11 72–76, B12 77–80, B13 81–86, B14 87–91, cuối ChIV 92–95. **Năm Permanent Sources THPT v2.0**.
**UNCHANGED:** 22 outcomes, 40 public item IDs (30 D3+10 Written/Anchor), 5 SVG, 10 D6, 22 private RD1; không sửa lời giải/rubric/canonical/SVG. Chỉ review các đoạn `[R02-NEW]` và mối liên kết PED1–6 thực tế; không review lại toán R01 bất biến.

---

### [R02-NEW] B10-PED1-3 — Vấn đề và quá trình hình thành

Một bản vẽ trên giấy có thể cho cảm giác hai đường cắt nhau, nhưng trong không gian chúng có thể ở các mặt khác nhau. Để xác định **mặt phẳng**, cần đủ dữ kiện (ba điểm không thẳng hàng, hoặc một đường và một điểm ngoài đường). Khi dựng **giao tuyến**, ta cần hai điểm chung phân biệt; không thể suy giao chỉ từ nét vẽ. Vì vậy học quan hệ điểm–đường–mặt trước khi tìm thiết diện. Trong tứ diện, nét đứt là cách biểu diễn cạnh khuất, không phải chứng cứ hai đường chéo nhau.


### [R02-NEW] B10-PED6 — Tự thử trước Core (không tạo item ID)

**Tự thử:** A,B là hai điểm phân biệt của mặt (P). Nếu C nằm trên AB thì C có thuộc (P) không? **Chỉ mở đối chiếu sau khi tự làm:** Có, vì AB nằm trọn trong (P). Trở về D1 B10 và câu Core THPT-G11-CHIV-B10-C01.

Đây là bước tự kiểm tra có chủ động mở lời giải, không ghi điểm hoặc tăng Mastery, không thay bài cuối chương. Nhánh phát hành chịu trách nhiệm ẩn lời giải trước khi người học mở.

### [R02-NEW] B11-PED1-3 — Vấn đề và quá trình hình thành

Trong mặt phẳng, hai đường thẳng phân biệt không cắt nhau sẽ song song. Trong không gian, còn khả năng **chéo nhau**. Hai cạnh ở hai mặt khác nhau của một chiếc hộp có thể không cắt và không đồng phẳng. Muốn kết luận song song phải chứng minh cùng mặt phẳng hoặc dùng dấu hiệu hợp lệ; qua đó hiểu vì sao định lý đường trung bình của tam giác chỉ dùng trong mặt của tam giác.


### [R02-NEW] B11-PED6 — Tự thử trước Core (không tạo item ID)

**Tự thử:** Hai đường SA và BC trong tứ diện S.ABC có cắt nhau không? Có đồng phẳng không? **Đối chiếu sau khi nghĩ:** Không cắt, không đồng phẳng nên chéo nhau, không song song. Trở về D1 B11 và THPT-G11-CHIV-B11-C01.

Đây là bước tự kiểm tra có chủ động mở lời giải, không ghi điểm hoặc tăng Mastery, không thay bài cuối chương. Nhánh phát hành chịu trách nhiệm ẩn lời giải trước khi người học mở.

### [R02-NEW] B12-PED1-3 — Vấn đề và quá trình hình thành

Hãy nhìn một bút chì đặt phía trên mặt bàn: nó có thể nằm trên bàn, chọc qua bàn hoặc nằm tách biệt và không cắt mặt bàn. Ba trường hợp là ba quan hệ khác nhau; đừng nhầm đường song song một đường trong mặt với đường song song mặt. Cần xác nhận đường xét **không nằm trong mặt**, rồi mới dùng dấu hiệu có đường trong mặt song song nó. Cạnh trung bình MN của tam giác bên trên đáy minh họa điều kiện ấy.


### [R02-NEW] B12-PED6 — Tự thử trước Core (không tạo item ID)

**Tự thử:** Trong hình bình hành ABCD, AB∥CD và CD nằm trong đáy. AB có song song mặt đáy không? **Đối chiếu:** Không; AB chính nó nằm trong mặt đáy. Trở lại D1 B12 và THPT-G11-CHIV-B12-C01.

Đây là bước tự kiểm tra có chủ động mở lời giải, không ghi điểm hoặc tăng Mastery, không thay bài cuối chương. Nhánh phát hành chịu trách nhiệm ẩn lời giải trước khi người học mở.

### [R02-NEW] B13-PED1-3 — Vấn đề và quá trình hình thành

Hai mặt phẳng có thể trùng, cắt theo một đường hoặc song song. Muốn chứng minh **cả mặt** không cắt mặt kia, một đường song song chưa đủ: mặt ấy vẫn có thể nghiêng và cắt theo hướng khác. Hai đường **cắt nhau** trong mặt thứ nhất, mỗi đường song song mặt thứ hai, tạo dấu hiệu. Thiết diện song song đáy của tứ diện cho phép quan sát hai đường cắt nhau trong thiết diện và tỉ lệ đồng dạng.


### [R02-NEW] B13-PED6 — Tự thử trước Core (không tạo item ID)

**Tự thử:** Trong tứ diện S.ABC, M,N,K là trung điểm SA,SB,SC. Vì sao (MNK) song song (ABC)? **Đối chiếu:** MN∥AB và MK∥AC là hai đường cắt tại M, lần lượt song song mặt (ABC). Trở về D1 B13 và THPT-G11-CHIV-B13-C01.

Đây là bước tự kiểm tra có chủ động mở lời giải, không ghi điểm hoặc tăng Mastery, không thay bài cuối chương. Nhánh phát hành chịu trách nhiệm ẩn lời giải trước khi người học mở.

### [R02-NEW] B14-PED1-3 — Vấn đề và quá trình hình thành

Hình vuông được vẽ lên giấy dưới dạng hình bình hành: hình biểu diễn không giữ góc dù vẫn giữ tính song song. Hãy chiếu mọi điểm theo **cùng một hướng** lên mặt đích. Khi hướng cắt mặt đích, mỗi điểm có một ảnh; một đường trùng hướng chiếu có thể co thành một điểm. Vì vậy phép chiếu giữ một số quan hệ thẳng hàng và tỉ số trong trường hợp không suy biến nhưng không giữ góc hoặc độ dài nói chung.


### [R02-NEW] B14-PED6 — Tự thử trước Core (không tạo item ID)

**Tự thử:** Chiếu cạnh AA' của lăng trụ lên mặt đáy (ABC) theo phương AA': ảnh là đoạn hay điểm? **Đối chiếu:** Chỉ là điểm A. Trở về D1 B14 và THPT-G11-CHIV-B14-C01.

Đây là bước tự kiểm tra có chủ động mở lời giải, không ghi điểm hoặc tăng Mastery, không thay bài cuối chương. Nhánh phát hành chịu trách nhiệm ẩn lời giải trước khi người học mở.


## [R02-NEW] CHIV-PED5 — Vì sao chọn từng phương pháp trong 20 ví dụ R01

- `EX-G11-B10-EX01`: Kiểm ba điểm không thẳng hàng để định một mặt; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B10-EX02`: Dùng hai điểm chung S,A thuộc hai mặt phẳng phân biệt; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B10-EX03`: Xác nhận M nằm SB⊂(SAB) rồi xem giao của CM; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B10-EX04`: Xét từng mặt bên và đoạn giao hợp lệ để tìm thiết diện; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B11-EX01`: Không cắt nhưng không đồng phẳng dẫn đến chéo; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B11-EX02`: Cần cùng mặt tam giác SAB trước khi áp dụng đường trung bình; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B11-EX03`: Nhìn hình không đủ để kết luận song song; kiểm đồng phẳng; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B11-EX04`: Kiểm trường hợp hai đường trùng nhau trước khi gọi song song; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B12-EX01`: Phân loại thuộc mặt/cắt mặt/song song mặt trước khi chọn định lý; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B12-EX02`: Bổ sung điều kiện đường không nằm trong mặt; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B12-EX03`: Kiểm giao tuyến (P)∩(Q) tồn tại rồi mới suy song song; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B12-EX04`: Đường trung bình tạo phương song song nhưng phải chứng minh không nằm đáy; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B13-EX01`: Dùng đặc trưng hai đáy của lăng trụ; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B13-EX02`: Cần hai đường cắt nhau cùng thuộc mặt thứ nhất; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B13-EX03`: Hai đoạn trung bình song song hai cạnh đáy, cùng cắt tại M; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B13-EX04`: Tỉ số diện tích bằng bình phương tỉ số cạnh, không giữ nguyên; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B14-EX01`: Theo dõi ảnh các cặp đỉnh theo phương chung; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B14-EX02`: Tỉ số trung điểm chỉ bảo toàn khi ảnh đoạn không suy biến; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B14-EX03`: Đường theo phương chiếu co lại thành điểm, mặt có thể co thành đoạn; kiểm rõ điều kiện áp dụng trước kết luận.
- `EX-G11-B14-EX04`: Không coi số đo góc/độ dài trên hình biểu diễn là thật; kiểm rõ điều kiện áp dụng trước kết luận.

Đây là bình luận lựa chọn phương pháp, giữ nguyên toàn bộ đề, đáp án, lời giải 20 ví dụ R01; NotebookLM cần kiểm PED5 theo ID.


## [R02-NEW] CHIV-PED4 — Thuyết minh hình D5 theo đúng bản R01

- FIG-G11-B10-01: theo dõi hai mặt (SAB), (SAC) và hai điểm chung phân biệt S,A; nét khuất không chứng minh góc hay giao tuyến.
- FIG-G11-B11-01: kiểm vị trí các cạnh để phân biệt hai đường cùng mặt song song và hai đường chéo nhau khác mặt; không dựa riêng vào hình phối cảnh.
- FIG-G11-B12-01: xác định đường nằm ở mặt nào và đường nào không nằm trong đáy trước khi gọi song song mặt.
- FIG-G11-B13-01: hai đường cắt nhau trong thiết diện cùng song song hai đường đáy, qua đó nhận diện hai mặt song song.
- FIG-G11-B14-01: phân biệt hình thật và hình biểu diễn; những đoạn theo hướng chiếu có thể suy biến, không mặc nhiên giữ độ dài/góc.

Người phản biện đối chiếu nội dung thật của 5 SVG hiện hành; không sửa một tọa độ hoặc nhãn hình, không tự suy hình có đối tượng chưa được vẽ.


## R02 review boundary

**Phạm vi chính xác:** B10–B14 của Chương IV; 5 mô-đun khởi động PED1–3, 5 Tự thử PED6, 20 ghi chú ví dụ PED5 và 5 chú giải hình PED4. 40 public items và 22 private RD1 không đổi. R01 PASS chỉ cho snapshot gốc, R02 cần verdict độc lập theo từng B10–B14/PED1–6, nguồn SGK/SBT S1, MINIMAL_DELTA/P0/P1/P2. A6 chịu AP1–AP5 và Final Submit. **NOT_RELEASE_READY** trước khi có verdict R02.


---
