# Temp · G10 SGK Toán 10 KNTT Tập Một · Chương V (B12–B14) — PED1–PED6 R02 FULL CHAPTER REVIEW

PACKET_ID: G10-SGK-CHV-PED-BRIDGE-R02-20261105
ROLE: AUTHORING_ONLY
STATUS: DELTA_C_ACADEMIC_MATERIAL_REVIEW_CANDIDATE
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
REVIEWED_PATH: SGK_CHAPTER
REVIEW_SCOPE: NEW_PED1_PED6_AND_14_CANONICAL_FIRST_TRY_ONLY
CONTENT_READY: NO
ACADEMIC_VERDICT_NEW: NOTEBOOKLM_PENDING
PEDAGOGICAL_VERDICT_NEW: NOTEBOOKLM_PENDING
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
PRIVATE_RD1_NEW: 0
R01_B12_B14_IMMUTABLE_SOURCE_GIT_BLOB: 49502fe39cf0a67f6a3e973a77f94164150637a7
R01_HISTORICAL_NOTEBOOKLM_VERDICT: ACADEMIC_PASS_14_OUTCOMES_27_ITEMS
B12_HELP01_CANONICAL_R02_OVERLAY_BLOB: 2cecaba020881a560bc33251c38d55cc10a05516
B12_HELP02_CANONICAL_R02_OVERLAY_BLOB: 913400d6aff63befac95a8a47a00870663dd0096
LEGACY_PUBLIC_CHV_JSON_BLOB: 94c5c39ad7958b2ef02ada016d928954a0b430f6
S1_PRINTED_SGK_B12: 73–77
S1_PRINTED_SGK_B13: 78–83
S1_PRINTED_SGK_B14: 84–88
S1_PRINTED_CHAPTER_REVIEW: 89–90
S1_PRINTED_SBT_B12: 72–73
S1_PRINTED_SBT_B13: 74–77
S1_PRINTED_SBT_B14: 78–80
S1_PRINTED_SBT_CHAPTER_REVIEW: 81–84

## I. Phạm vi SGK/SBT S1, quyền sở hữu và lý do chỉ review Delta C

**S1:** SGK Kết nối tri thức Toán 10 Tập Một Chương V, B12 Số gần đúng và sai số, B13 Các số đặc trưng đo xu thế trung tâm, B14 Các số đặc trưng đo độ phân tán; SBT đúng bài tương ứng. Trang in trên giữ theo biên bản nguồn đã được tác giả cũ và NotebookLM đối chiếu. NotebookLM cần đối chiếu trực tiếp với S1, không suy số trang PDF từ trang in; nếu phát hiện sai trang thì đề xuất sửa metadata và ghi nhật ký chứ không thay đề toán không liên quan.

**R01 đã nghiệm thu:** 14/14 outcomes, **27/27 câu canonical** gồm 24 Core/Practice và 3 Written (một Anchor là nhãn), 9 ví dụ có phân tích, 3 hình SVG (B12 có overlay FIG01@R02) và 6 thẻ HELP (B12 HELP01/02 dùng overlay R02 độc lập PASS). **Không xét lại** các phần đó trừ khi phát hiện lỗi ảnh hưởng thật sự. Nội dung D1–D6 B12 đã có hai thẻ HELP R01 được sửa ở đúng ID; tuyệt đối không dùng lại văn bản R01 của hai thẻ đã thay thế. D3/Written giữ nguyên.

**Lỗ hổng nâng cấp:** Trang kiến thức hiện có mở bằng định nghĩa/công thức; cần dẫn dắt WHY → PRE → MEANING → đọc hình → lý do phương pháp và giới hạn → FIRST_TRY tự mở đáp án **trước** SGK Core R01 để người chưa học có thể tiếp cận. Các 14 cầu nối và 14 câu Tự thử mới trong packet này là DELTA_C cần phản biện độc lập; không tự cấp PASS, không tự giao RELEASE.

**Tự kiểm tra cuối chương:** `docs/assets/data/thpt-g10-readiness/CHV.json` có 18 câu đã công khai trên website, chỉ là `CLIENT_SELF_CHECK_NO_MASTERY` sau Final Submit, không phải ngân hàng RD1 giữ kín; không tái bản stem/đáp án JSON trong packet PED. `SGK_CHAPTER_READINESS` độc lập không đồng nghĩa `TOPIC_READINESS` và không ghi Skill Mastery.

### Ma trận 14/14 outcomes — một ID Tự thử cho một outcome

| LESSON_ID | OUTCOME_ID | FIRST_TRY_ITEM_ID | ROLE / PLACEMENT | HELP_CANONICAL_VERSION | NEXT_CORE_OR_PRACTICE |
| --- | --- | --- | --- | --- | --- |
| G10-SGK-B12 | G10-B12-APPROX_CONCEPT | THPT-G10-CHV-TRY01 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B12-01@R02 | THPT-G10-B12-P04 |
| G10-SGK-B12 | G10-B12-ABS_ERROR | THPT-G10-CHV-TRY02 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B12-01@R02 | THPT-G10-B12-C02 |
| G10-SGK-B12 | G10-B12-REL_ERROR | THPT-G10-CHV-TRY03 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B12-02@R02 | THPT-G10-B12-P06 |
| G10-SGK-B12 | G10-B12-ROUNDING | THPT-G10-CHV-TRY04 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B12-01@R02 | THPT-G10-B12-P02 |
| G10-SGK-B13 | G10-B13-MEAN | THPT-G10-CHV-TRY05 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B13-02 | THPT-G10-B13-C01 |
| G10-SGK-B13 | G10-B13-MEDIAN | THPT-G10-CHV-TRY06 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B13-01 | THPT-G10-B13-C02 |
| G10-SGK-B13 | G10-B13-QUARTILES | THPT-G10-CHV-TRY07 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B13-01 | THPT-G10-B13-P02 |
| G10-SGK-B13 | G10-B13-MODE | THPT-G10-CHV-TRY08 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B13-02 | THPT-G10-B13-P03 |
| G10-SGK-B13 | G10-B13-INTERPRETATION | THPT-G10-CHV-TRY09 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B13-02 | THPT-G10-B13-P06 |
| G10-SGK-B14 | G10-B14-RANGE_IQR | THPT-G10-CHV-TRY10 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B14-02 | THPT-G10-B14-P01 |
| G10-SGK-B14 | G10-B14-VARIANCE | THPT-G10-CHV-TRY11 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B14-01 | THPT-G10-B14-C02 |
| G10-SGK-B14 | G10-B14-STDDEV | THPT-G10-CHV-TRY12 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B14-01 | THPT-G10-B14-P05 |
| G10-SGK-B14 | G10-B14-OUTLIERS | THPT-G10-CHV-TRY13 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B14-02 | THPT-G10-B14-P03 |
| G10-SGK-B14 | G10-B14-COMPARISON | THPT-G10-CHV-TRY14 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B14-01 | THPT-G10-B14-P04 |

## II. Học liệu mới cần phản biện độc lập (PED1–PED6 theo outcome)

## B12 — Số gần đúng và sai số

**SGK KNTT Toán 10 Tập Một trang in 73–77; SBT trang in 72–73.** D5 hình khoảng sai số B12 dùng overlay FIG01@R02 đã được review trước đó, không phục hồi hình R01 sai; HELP01/HELP02 dùng chính xác hai overlay @R02 đã PASS. Nội dung R02 này phải đặt trước công thức/Core R01, giữ nguyên 9 ví dụ D2 và 27 câu public R01 đã PASS.

### G10-B12-APPROX_CONCEPT — Vì sao cần nói số gần đúng?

**LESSON_ID:** `G10-SGK-B12` · **OUTCOME_ID:** `G10-B12-APPROX_CONCEPT` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY01` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Một phần ba chiếc bánh là một lượng chính xác, nhưng máy chỉ hiển thị đến hai chữ số thập phân. Số hiện trên máy giúp sử dụng thuận tiện nhưng không còn biểu diễn chính xác toàn bộ lượng đó.

**PED2 · PRE — cần biết gì trước.** Nhắc lại phân số \(1/3\) và phép viết thập phân vô hạn \(0{,}333\ldots\). Phân biệt con số biểu diễn trên thiết bị với giá trị toán học ban đầu. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Khi giới hạn độ dài biểu diễn, ta phải chọn một số hữu hạn chữ số để **thay cho** giá trị đúng: kí hiệu R01 dùng \(a\) là số gần đúng và \(\bar a\) là số đúng. Dấu \(\approx\) nói hai số gần nhau, không phải luôn bằng nhau.

**PED4 · READ_VISUAL — xem hình như thế nào.** Với hình khoảng sai số `FIG-G10-B12-01@R02`, nhận diện điểm giữa là số gần đúng \(a\); hai đầu khoảng không nhất thiết là số đúng. Hình không nói số đúng nằm chính giữa. Giữ đúng hình canonical `FIG-G10-B12-01@R02`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Chọn số gần đúng khi số đúng khó viết hoặc khó đo hết; luôn nhớ giới hạn biểu diễn và không ghi dấu bằng nếu số hiển thị chỉ là xấp xỉ.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Với số đúng \(\bar a=1/3\), máy hiển thị \(a=0{,}33\). Số nào gần đúng, số nào đúng? Có thể viết \(a=\bar a\) hay chỉ \(a\approx\bar a\)?

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** \(a=0{,}33\) là số gần đúng; \(\bar a=1/3\) là số đúng; viết \(0{,}33\approx1/3\), không viết bằng.

**Giải thích vì sao:** \(0{,}33=33/100\ne1/3\). Việc cắt độ chính xác biểu diễn tạo ra số gần đúng dù cách tính là hợp lệ.

**Tự khắc phục:** quay về thẻ `HELP-G10-B12-01@R02`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B12-P04` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B12-ABS_ERROR — Độ chính xác không phải sai số thực

**LESSON_ID:** `G10-SGK-B12` · **OUTCOME_ID:** `G10-B12-ABS_ERROR` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY02` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Một thước báo 'sai lệch không quá 0,3 cm' không có nghĩa mọi lần đo đều lệch đúng 0,3 cm.

**PED2 · PRE — cần biết gì trước.** Nhắc lại khoảng đóng \([a-d;a+d]\), trị tuyệt đối là khoảng cách không âm và số đúng \(\bar a\) có thể chưa biết. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Đặt số đo gần đúng tại \(a\); số đúng nằm đâu đó quanh a. **Sai số thực** là khoảng cách tới giá trị đúng, chỉ tính được khi biết \(\bar a\); **độ chính xác d** là giới hạn cho khoảng cách này. Nhận thức 'không quá' đến trước ký hiệu \(\Delta_a=|a-\bar a|\le d\).

**PED4 · READ_VISUAL — xem hình như thế nào.** Đọc `FIG-G10-B12-01@R02`: đặt \(a\) ở tâm và vùng cho phép \([a-d;a+d]\); không khẳng định số đúng ở biên hoặc rằng khoảng là kết quả đo chính xác. Giữ đúng hình canonical `FIG-G10-B12-01@R02`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Khi thiếu \(\bar a\), chỉ lập khoảng và viết bất đẳng thức \(\Delta_a\le d\). Không được tự thay bằng dấu bằng.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Máy báo \(a=8{,}4\,\mathrm{cm}\), độ chính xác \(d=0{,}3\,\mathrm{cm}\). Số đúng \(\bar a\) thuộc khoảng nào? Có chắc \(\Delta_a=0{,}3\,\mathrm{cm}\) không?

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** \(\bar a\in[8{,}1;8{,}7]\,\mathrm{cm}\). Chỉ chắc \(\Delta_a\le0{,}3\,\mathrm{cm}\), không chắc bằng.

**Giải thích vì sao:** Lấy 8,4 trừ/cộng 0,3. Sai số có thể 0 nếu giá trị đúng đúng bằng 8,4; độ chính xác chỉ giới hạn trên.

**Tự khắc phục:** quay về thẻ `HELP-G10-B12-01@R02`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B12-C02` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B12-REL_ERROR — Sai số lớn hay nhỏ còn phụ thuộc cỡ đại lượng

**LESSON_ID:** `G10-SGK-B12` · **OUTCOME_ID:** `G10-B12-REL_ERROR` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY03` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Sai 3 m khi đo 150 m thường nhẹ hơn sai 3 m khi đo một đoạn 10 m. Cần so sánh sai số với quy mô con số đang dùng.

**PED2 · PRE — cần biết gì trước.** Đã biết độ chính xác d, sai số tuyệt đối \(\Delta_a\), số gần đúng a và phép đổi tỉ số sang phần trăm. Kiểm a khác 0. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Để đánh giá mức sai số so với cỡ số gần đúng, ta lấy độ lệch tuyệt đối **chia cho \(|a|\)** theo KNTT. Nếu chỉ biết \(\Delta_a\le d\), chỉ có cận trên tỉ lệ chứ chưa biết tỉ lệ thực. Điều này giải thích cả mẫu số lẫn dấu bất đẳng thức.

**PED4 · READ_VISUAL — xem hình như thế nào.** Trên `FIG-G10-B12-01@R02`, đọc khoảng chứa số đúng trước; phần trăm là phép so tỉ lệ dựa trên số gần đúng a, **không** là khoảng cách trục mới. Giữ đúng hình canonical `FIG-G10-B12-01@R02`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Khi a≠0 dùng \(\delta_a=\Delta_a/|a|\), còn khi chỉ biết d thì chỉ kết luận \(\delta_a\le d/|a|\). Tuyệt đối không lấy số đúng chưa biết để làm mẫu hoặc khẳng định đạt cận.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Một phép đo cho \(a=150\,\mathrm{m}\) và độ chính xác \(d=3\,\mathrm{m}\), chưa biết số đúng. Cận trên sai số tương đối là bao nhiêu phần trăm? Có thể kết luận sai số tương đối chính xác bằng mức đó không?

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** \(\delta_a\le3/150=0{,}02=2\%\), không thể kết luận \(\delta_a=2\%\).

**Giải thích vì sao:** Ta đang so giới hạn sai số 3 m với số gần đúng 150 m. Sai số thực có thể nhỏ hơn 3 m; cần giữ dấu \(\le\).

**Tự khắc phục:** quay về thẻ `HELP-G10-B12-02@R02`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B12-P06` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B12-ROUNDING — Cắt bớt chữ số nhưng phải biết mức chênh

**LESSON_ID:** `G10-SGK-B12` · **OUTCOME_ID:** `G10-B12-ROUNDING` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY04` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Khi ghi giá tiền hay chiều dài, ta thường không cần mọi chữ số; quy tròn giúp trình bày gọn nhưng có thể làm đổi giá trị.

**PED2 · PRE — cần biết gì trước.** Biết hàng phần mười, phần trăm (0,01) và quy tắc chữ số ngay bên phải hàng giữ lại. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Làm tròn đến một hàng là chọn giá trị gần số ban đầu nhất theo bội của đơn vị hàng đó; chênh lệch là cái giá của sự giản lược. Nếu số ban đầu **được biết chính xác** và làm tròn gần nhất tới bước h, sai số quy tròn không vượt quá h/2; điều đó không biến thành độ chính xác của một phép đo khác.

**PED4 · READ_VISUAL — xem hình như thế nào.** Ở thang số minh họa của `FIG-G10-B12-01@R02`, đọc vị trí số so với hai mốc quy tròn gần nhất; không đánh đồng hai đầu khoảng đo với hai số quy tròn. Giữ đúng hình canonical `FIG-G10-B12-01@R02`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Chọn đúng hàng cần quy tròn, xem chữ số kế tiếp rồi kiểm khoảng cách tới số cũ. Không suy giới hạn độ chính xác phép đo chỉ từ số chữ số đã hiển thị.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Giả sử \(7{,}346\) là số **đúng**. Làm tròn tới hàng phần trăm, tìm số quy tròn và sai số thực của thao tác làm tròn.

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** Số quy tròn là \(7{,}35\); sai số là \(|7{,}35-7{,}346|=0{,}004\).

**Giải thích vì sao:** Giữ hai chữ số thập phân, chữ số kế tiếp 6 làm tăng hàng phần trăm. Sai số 0,004 nhỏ hơn 0,005 (nửa đơn vị hàng phần trăm).

**Tự khắc phục:** quay về thẻ `HELP-G10-B12-01@R02`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B12-P02` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

## B13 — Các số đặc trưng đo xu thế trung tâm

**SGK KNTT Toán 10 Tập Một trang in 78–83; SBT trang in 74–77.** Giữ nguyên hình D5 R01 về tứ phân vị, theo đúng quy ước n lẻ loại Q2 của SGK KNTT. Nội dung R02 này phải đặt trước công thức/Core R01, giữ nguyên 9 ví dụ D2 và 27 câu public R01 đã PASS.

### G10-B13-MEAN — Tìm một giá trị đại diện cho toàn nhóm

**LESSON_ID:** `G10-SGK-B13` · **OUTCOME_ID:** `G10-B13-MEAN` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY05` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Một lớp có điểm số thay đổi từng người. Muốn tính mức điểm bình quân của cả lớp, cần chia tổng điểm cho số người chứ không chọn đại một bạn.

**PED2 · PRE — cần biết gì trước.** Đã biết tổng các số, phép chia và bảng tần số: một giá trị xuất hiện m lần phải được tính m lần. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Giả sử dàn đều tổng số điểm cho mọi người sao cho tổng không đổi; lượng mỗi người nhận chính là **trung bình**. Với bảng tần số, nhóm các phần tử giống nhau thành giá trị nhân số lần xuất hiện, không làm mất người nào.

**PED4 · READ_VISUAL — xem hình như thế nào.** Với bảng dữ liệu trong `FIG-G10-B13-01` (hình kế thừa R01 trình bày tứ phân vị), đếm mỗi điểm dữ liệu đúng một lần; khi có tần số phải nở các bản ghi trước khi chia. Giữ đúng hình canonical `FIG-G10-B13-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Dùng trung bình khi cần đại diện cho tổng hoặc chi phí; tính cả dữ liệu lớn/nhỏ và lưu ý nhạy với giá trị bất thường.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Một nhóm có bốn giá trị \(2,4,4,10\). Tính số trung bình và nêu vì sao giá trị 10 phải được tính một lần dù lớn.

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** \(\bar x=(2+4+4+10)/4=5\).

**Giải thích vì sao:** Có bốn quan sát, tổng 20. Chia đều tổng cho bốn lần ghi cho 5; không bỏ giá trị 10 chỉ vì cao.

**Tự khắc phục:** quay về thẻ `HELP-G10-B13-02`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B13-C01` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B13-MEDIAN — Điểm giữa không bị một giá trị rất lớn kéo đi

**LESSON_ID:** `G10-SGK-B13` · **OUTCOME_ID:** `G10-B13-MEDIAN` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY06` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Để biết người đứng ở vị trí giữa trong hàng người có chiều cao khác nhau, phải xếp thứ tự, không cần cộng tất cả chiều cao.

**PED2 · PRE — cần biết gì trước.** Đã biết sắp xếp dãy không giảm, dãy có n chẵn hoặc n lẻ, giá trị chính giữa. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Trung vị nhìn vào **vị trí** sau sắp xếp chứ không dàn đều tổng. Với n chẵn có hai vị trí giữa, trung vị là trung bình hai giá trị đó; với n lẻ lấy một giá trị ở giữa.

**PED4 · READ_VISUAL — xem hình như thế nào.** Ở `FIG-G10-B13-01`, đi theo thứ tự điểm từ nhỏ đến lớn rồi đánh dấu (các) vị trí trung tâm; chưa xác định thứ tự thì không thể chọn đúng trung vị. Giữ đúng hình canonical `FIG-G10-B13-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Dùng trung vị khi muốn giá trị chia mẫu thành hai nửa và giảm tác động của cực trị; không được tính trung vị từ danh sách chưa sắp.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Cho mẫu chưa xếp \(12,2,9,5\). Tìm trung vị.

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** Sắp thành \(2,5,9,12\). Trung vị \(Q_2=(5+9)/2=7\).

**Giải thích vì sao:** Với bốn giá trị, hai phần tử ở giữa là 5 và 9 sau sắp xếp. Không lấy 2 và 9 theo thứ tự ghi ban đầu.

**Tự khắc phục:** quay về thẻ `HELP-G10-B13-01`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B13-C02` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B13-QUARTILES — Chia mẫu dữ liệu thành bốn phần

**LESSON_ID:** `G10-SGK-B13` · **OUTCOME_ID:** `G10-B13-QUARTILES` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY07` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Hai lớp có cùng trung vị vẫn có thể khác nhau ở phần thấp và phần cao. Ta cần mốc để nhìn nửa dưới và nửa trên của mẫu.

**PED2 · PRE — cần biết gì trước.** Nhắc lại trung vị \(Q_2\), sắp dữ liệu không giảm và cách tìm trung vị một nửa mẫu. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Tìm điểm giữa toàn mẫu trước, sau đó chia mẫu thành hai nửa để tìm điểm giữa mỗi nửa: được \(Q_1,Q_3\). **Theo SGK KNTT, nếu n lẻ thì bỏ chính phần tử Q2 khi chia hai nửa**; không đưa nó vào cả hai nửa hay dùng mặc định quy tắc percentile của phần mềm.

**PED4 · READ_VISUAL — xem hình như thế nào.** Đọc `FIG-G10-B13-01`: đếm thứ tự các chấm, khoanh giá trị giữa toàn bộ rồi tách hai phía đúng quy ước; không suy tứ phân vị chỉ từ độ dài đoạn trên hình không đúng tỉ lệ. Giữ đúng hình canonical `FIG-G10-B13-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Với n lẻ, loại một phần tử giữa; với n chẵn, chia thành hai nửa bằng nhau. Sau đó lấy trung vị từng nửa; tránh dùng phương pháp máy khác quy ước KNTT.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Cho mẫu đã sắp \(1,2,3,4,5,6,7\). Tìm \(Q_1,Q_2,Q_3\) theo quy ước KNTT.

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** \(Q_2=4\), nửa dưới \(1,2,3\) cho \(Q_1=2\), nửa trên \(5,6,7\) cho \(Q_3=6\).

**Giải thích vì sao:** Có bảy phần tử, bỏ chính 4 khi tìm Q1/Q3. Không lấy trung bình các vị trí 3 và 4 hay đưa 4 vào hai nửa.

**Tự khắc phục:** quay về thẻ `HELP-G10-B13-01`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B13-P02` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B13-MODE — Giá trị lặp lại nhiều nhất mới là mốt

**LESSON_ID:** `G10-SGK-B13` · **OUTCOME_ID:** `G10-B13-MODE` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY08` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Trong cửa hàng bán áo, chủ cửa hàng quan tâm cỡ áo bán nhiều nhất chứ không phải số trung bình của mã cỡ.

**PED2 · PRE — cần biết gì trước.** Đã biết số lần xuất hiện của từng giá trị (tần số). Có thể có nhiều giá trị cùng số lần cao nhất. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Mốt là giá trị (hoặc các giá trị) có tần số cao nhất. Khi nhiều giá trị cùng đứng đầu, mẫu có nhiều mốt; theo quy ước minh họa SGK KNTT, nếu mỗi giá trị chỉ xuất hiện một lần thì coi là không có mốt.

**PED4 · READ_VISUAL — xem hình như thế nào.** Ở bảng hoặc chấm dữ liệu `FIG-G10-B13-01`, đếm tần số trước khi chọn giá trị; đừng nhầm đỉnh hình với số lớn nhất theo giá trị. Giữ đúng hình canonical `FIG-G10-B13-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Chọn mốt khi hỏi loại nào phổ biến nhất, không dùng mốt để suy số trung bình hoặc thứ tự của dữ liệu.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Mẫu \(1,2,2,3,3,4\) có những mốt nào? Vì sao không chỉ chọn số 3?

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** Có hai mốt là 2 và 3, mỗi số xuất hiện hai lần.

**Giải thích vì sao:** Cùng tần số cao nhất 2 nên cả hai đều là mốt; 3 lớn hơn 2 không làm nó 'mốt hơn'.

**Tự khắc phục:** quay về thẻ `HELP-G10-B13-02`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B13-P03` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B13-INTERPRETATION — Vì sao đôi khi trung vị nói đúng hơn trung bình?

**LESSON_ID:** `G10-SGK-B13` · **OUTCOME_ID:** `G10-B13-INTERPRETATION` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY09` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Một khoản thu rất lớn xuất hiện trong mẫu có thể làm số bình quân cao dù phần lớn quan sát còn thấp. Khi muốn tả người 'điển hình', không nên chỉ nhìn một con số.

**PED2 · PRE — cần biết gì trước.** Biết tính số trung bình, trung vị sau sắp xếp; hiểu một giá trị lớn bất thường có thể ảnh hưởng tổng. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Trung bình dùng mọi giá trị nên nhạy với cực trị; trung vị là điểm giữa theo vị trí nên thường ổn định hơn khi chỉ một giá trị thay đổi rất mạnh. Cả hai đều là số mô tả nhưng cần chọn tùy câu hỏi.

**PED4 · READ_VISUAL — xem hình như thế nào.** Đọc chuỗi đã sắp và nếu có biểu đồ của R01 B13, định vị phần lớn điểm tập trung rồi nhận ra một điểm quá cao; không suy trung bình luôn 'sai'. Giữ đúng hình canonical `FIG-G10-B13-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Khi mô tả mức điển hình trong mẫu lệch mạnh, ưu tiên xét trung vị và giải thích; khi tổng lượng quan trọng, trung bình vẫn có ý nghĩa.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Dữ liệu \(4,5,6,7,28\) đã sắp. Tính trung bình và trung vị; số nào ít bị giá trị 28 chi phối hơn?

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** Trung bình \((4+5+6+7+28)/5=50/5=10\); trung vị 6; trung vị ít bị 28 chi phối hơn.

**Giải thích vì sao:** Vị trí giữa không đổi nếu 28 còn lớn nhất, còn tổng và trung bình tăng khi cực trị tăng.

**Tự khắc phục:** quay về thẻ `HELP-G10-B13-02`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B13-P06` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

## B14 — Các số đặc trưng đo độ phân tán

**SGK KNTT Toán 10 Tập Một trang in 84–88; SBT trang in 78–80.** Giữ nguyên hình D5 R01, phương sai chia n và hàng rào bất thường dùng dấu nghiêm ngặt. Nội dung R02 này phải đặt trước công thức/Core R01, giữ nguyên 9 ví dụ D2 và 27 câu public R01 đã PASS.

### G10-B14-RANGE_IQR — Hai cách nhìn độ trải rộng của dữ liệu

**LESSON_ID:** `G10-SGK-B14` · **OUTCOME_ID:** `G10-B14-RANGE_IQR` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY10` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Hai lớp có thể có trung bình gần nhau nhưng lớp có bạn quá cao hay quá thấp làm khoảng từ min đến max rộng hơn.

**PED2 · PRE — cần biết gì trước.** Đã biết min, max và \(Q_1,Q_3\) theo quy ước KNTT; phải sắp dữ liệu trước khi xác định tứ phân vị. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Khoảng biến thiên nhìn hai biên xa nhất; khoảng tứ phân vị nhìn hai mốc ôm phần giữa của mẫu, vì thế ít bị riêng một cực trị chi phối hơn. Từ ý nghĩa 'độ rộng' mới đặt \(R=x_{\max}-x_{\min}\), \(\Delta_Q=Q_3-Q_1\).

**PED4 · READ_VISUAL — xem hình như thế nào.** Đọc `FIG-G10-B14-01`: tìm đầu trái/phải toàn bộ dữ liệu và đoạn từ Q1 tới Q3; không xem hai đoạn dài như cùng một khoảng đo. Giữ đúng hình canonical `FIG-G10-B14-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Chọn R khi cần độ rộng toàn bộ, IQR khi quan tâm nửa giữa và mức ảnh hưởng của ngoại lệ; chúng không thay thế cho nhau.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Với mẫu đã sắp \(2,3,4,6,8,9,10\), tìm khoảng biến thiên R và khoảng tứ phân vị \(\Delta_Q\) theo KNTT.

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** \(R=10-2=8\); \(Q_2=6\), \(Q_1=3\), \(Q_3=9\) nên \(\Delta_Q=9-3=6\).

**Giải thích vì sao:** Với n=7 bỏ số giữa 6, nửa dưới 2,3,4 cho Q1=3 và nửa trên 8,9,10 cho Q3=9. R dùng min/max, IQR dùng Q1/Q3.

**Tự khắc phục:** quay về thẻ `HELP-G10-B14-02`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B14-P01` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B14-VARIANCE — Độ lệch có thể bù dấu, nên phải bình phương

**LESSON_ID:** `G10-SGK-B14` · **OUTCOME_ID:** `G10-B14-VARIANCE` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY11` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Các giá trị thấp hơn và cao hơn trung bình có độ lệch âm/dương bù nhau; cộng chênh lệch có dấu cho 0 dù dữ liệu rất phân tán.

**PED2 · PRE — cần biết gì trước.** Đã học trung bình, bình phương số và chia cho số quan sát n. Ở đây mô tả chính mẫu số liệu đang cho, không ước lượng tổng thể từ một mẫu ngẫu nhiên. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Muốn đo 'xa trung bình bao nhiêu', hãy bình phương các khoảng lệch để không bị bù dấu rồi lấy trung bình các bình phương. **Theo SGK KNTT ở mục này chia cho n**, không tự dùng mẫu số n−1; kết quả là phương sai và có đơn vị bình phương.

**PED4 · READ_VISUAL — xem hình như thế nào.** Đọc `FIG-G10-B14-01`, kẻ đường mức trung bình và so các khoảng lên/xuống; hình chỉ giải thích các khoảng, phép bình phương là bước tính. Giữ đúng hình canonical `FIG-G10-B14-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Chọn phương sai khi cần thước đo toàn bộ độ phân tán và có thể tính các bình phương; đừng lấy trung bình của hiệu có dấu hay chia n−1 trái phạm vi SGK.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Với mẫu \(2,4,6\), tìm trung bình và phương sai mô tả theo SGK (chia cho n).

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** \(\bar x=4\); \(s^2=[(2-4)^2+(4-4)^2+(6-4)^2]/3=8/3\).

**Giải thích vì sao:** Hai độ lệch −2 và +2 có tổng 0 nhưng bình phương đều 4; tổng bình phương 8 chia 3 phần tử.

**Tự khắc phục:** quay về thẻ `HELP-G10-B14-01`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B14-C02` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B14-STDDEV — Vì sao độ lệch chuẩn dễ đọc hơn phương sai?

**LESSON_ID:** `G10-SGK-B14` · **OUTCOME_ID:** `G10-B14-STDDEV` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY12` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Nếu đo chiều dài bằng cm thì phương sai mang đơn vị cm², khó so trực tiếp với chiều dài vài cm; cần số đo trở lại cùng đơn vị.

**PED2 · PRE — cần biết gì trước.** Biết phương sai không âm, căn bậc hai số không âm, trung bình mẫu và đơn vị cm. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Lấy căn bậc hai phương sai giúp đưa mức phân tán về **cùng đơn vị với dữ liệu gốc**. Độ lệch chuẩn không cho biết từng quan sát lệch đúng bằng s, mà tóm tắt mức lệch điển hình.

**PED4 · READ_VISUAL — xem hình như thế nào.** Trên `FIG-G10-B14-01` so mức phân tán của các điểm với đường trung bình rồi liên hệ con số phương sai/độ lệch chuẩn; không dùng diện tích hình như một phép đo. Giữ đúng hình canonical `FIG-G10-B14-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Đầu tiên tính đúng phương sai chia n, sau đó mới lấy căn; kiểm đơn vị s² là cm², s là cm nếu dữ liệu tính cm.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Bốn chiều dài (cm) là \(2,2,6,6\). Tìm phương sai và độ lệch chuẩn, kèm đơn vị.

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** Trung bình 4 cm; \(s^2=[4+4+4+4]/4=4\,\mathrm{cm}^2\), \(s=2\,\mathrm{cm}\).

**Giải thích vì sao:** Mỗi độ lệch với 4 là ±2 cm, bình phương 4 cm²; căn 4 cm² cho 2 cm.

**Tự khắc phục:** quay về thẻ `HELP-G10-B14-01`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B14-P05` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B14-OUTLIERS — Một giá trị xa trung tâm cần được nhận diện bằng quy tắc

**LESSON_ID:** `G10-SGK-B14` · **OUTCOME_ID:** `G10-B14-OUTLIERS` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY13` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Một ngày ghi doanh số quá lớn có thể là thật hoặc nhập sai. Trước khi kết luận, ta cần tiêu chí định lượng để đánh dấu giá trị khác xa số còn lại.

**PED2 · PRE — cần biết gì trước.** Biết tứ phân vị theo KNTT, IQR=Q3−Q1 và cách kiểm bất đẳng thức nghiêm ngặt. Không đồng nhất giá trị bất thường với dữ liệu chắc chắn sai. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** Đặt hai hàng rào quanh phần giữa: dưới \(Q_1-1{,}5\Delta_Q\) và trên \(Q_3+1{,}5\Delta_Q\). Giá trị **nhỏ hơn** rào dưới hoặc **lớn hơn** rào trên được gắn cờ bất thường; bằng rào không bị gắn theo dấu chặt.

**PED4 · READ_VISUAL — xem hình như thế nào.** Trong `FIG-G10-B14-01`, đánh dấu Q1,Q3 rồi kéo xa thêm 1,5 lần chiều rộng IQR; xem một điểm nằm ngoài hay trên hàng rào. Giữ đúng hình canonical `FIG-G10-B14-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Chỉ kết luận sau khi sắp dữ liệu, tính Q1/Q3 đúng quy ước và so **<** hoặc **>**; không tự loại bỏ dữ liệu khi chỉ phát hiện bất thường.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Mẫu đã sắp \(1,2,3,4,5,6,20\). Tính \(Q_1,Q_3,\Delta_Q\), hai hàng rào và xác định giá trị bất thường theo quy tắc 1,5 IQR.

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** \(Q_2=4\), \(Q_1=2\), \(Q_3=6\), \(\Delta_Q=4\); hàng rào dưới −4, hàng rào trên 12. Chỉ giá trị 20 là bất thường.

**Giải thích vì sao:** Với n=7, bỏ số giữa 4. Hai hàng rào =2−1,5·4=−4 và 6+1,5·4=12; 20>12, các giá trị 1..6 trong khoảng.

**Tự khắc phục:** quay về thẻ `HELP-G10-B14-02`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B14-P03` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>

### G10-B14-COMPARISON — Cùng trung bình không có nghĩa phân tán giống nhau

**LESSON_ID:** `G10-SGK-B14` · **OUTCOME_ID:** `G10-B14-COMPARISON` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHV-TRY14` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · WHY — tại sao cần học.** Hai nhóm đều đạt trung bình 4 điểm, nhưng một nhóm tập trung quanh 4, nhóm khác có điểm rất thấp và rất cao. Chỉ trung bình không đủ mô tả chất lượng phân bố.

**PED2 · PRE — cần biết gì trước.** Đã biết trung bình và cách đo độ lệch bằng phương sai chia n, mỗi nhóm có cùng số quan sát trong ví dụ. Trạng thái: `PREREQUISITE_CONFIRMED/RECALL_ONLY`, đã nhắc đủ trong hành trình SGK mà không buộc chuyển sang Topic.

**PED3 · MEANING — bản chất trước quy tắc.** So hai nhóm cùng trung bình bằng mức lệch của từng quan sát: nhóm có bình phương lệch lớn hơn sẽ có phương sai lớn hơn; điều đó cho biết **độ phân tán**, không tự kết luận nhóm nào tốt hơn về mọi mặt.

**PED4 · READ_VISUAL — xem hình như thế nào.** Đọc `FIG-G10-B14-01`: đặt hai cụm điểm quanh cùng mốc trung bình, nhìn cụm nào trải dài hơn; công thức xác nhận ý nghĩa hình. Giữ đúng hình canonical `FIG-G10-B14-01`; không sáng tác thêm SVG hoặc chỉnh XML sau review.

**PED5 · METHOD — chọn cách và giới hạn.** Với hai nhóm cùng trung bình, dùng phương sai/độ lệch chuẩn để so độ trải; không chọn chỉ vì trung bình bằng nhau, cũng không suy độ lệch chuẩn cao là kết quả học tập kém về mọi mặt.

**PED6 · FIRST_TRY — Tự thử TRƯỚC SGK Core.** Nhóm A có \(2,4,6\), nhóm B có \(0,4,8\). Trung bình của hai nhóm và phương sai mô tả từng nhóm bằng bao nhiêu? Nhóm nào phân tán hơn?

<details><summary>Em tự mở đáp án sau khi đã thử</summary>

**Đối chiếu kết quả:** Cả hai trung bình 4; \(s_A^2=8/3\), \(s_B^2=32/3\), nên B phân tán hơn.

**Giải thích vì sao:** A lệch −2,0,2; B lệch −4,0,4. Bình phương độ lệch nhóm B gấp bốn lần nên phương sai B lớn hơn.

**Tự khắc phục:** quay về thẻ `HELP-G10-B14-01`, đọc lại PED3/PED5 của outcome này và làm tiếp `THPT-G10-B14-P04` thuộc R01 đã duyệt (không sao chép câu). Câu này là tự luyện công khai không chấm điểm; không ghi Mastery hoặc tính làm minh chứng đánh giá độc lập.

</details>
## III. Bảo toàn nguồn R01 và đính chính lịch sử ở B12

- Nguồn D1–D6 R01 chính: `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md` @ blob `49502fe39cf0a67f6a3e973a77f94164150637a7`. Giữ 27 câu R01, 9 EX, 3 Written, 3 FIG IDs và 6 HELP IDs (ngoại trừ đúng hai HELP B12 có nội dung overlay R02). Không có thêm HELP_ID thứ bảy.
- `HELP-G10-B12-01` dùng bản canonical `@R02` blob `2cecaba020881a560bc33251c38d55cc10a05516`; `HELP-G10-B12-02` dùng bản `@R02` blob `913400d6aff63befac95a8a47a00870663dd0096`. Đây là **thay thế đúng ID**, không phải hai thẻ bổ sung; giữ các bản review delta scoped độc lập.
- `FIG-G10-B12-01` dùng hình R02 đã được review trước theo manifest lịch sử; hình B13/14 giữ bản R01. Không tự tạo lại hình hay tự nhận độ chính xác Git SHA của hình R02 khi chưa có blob trong gói.
- `B12` có đặc thù ký hiệu **a** số gần đúng, **\(\bar a\)** số đúng; sai số tuyệt đối \(\Delta_a=|a-\bar a|\); nếu \(\Delta_a\le d\), chỉ có cận. Sai số tương đối theo SGK KNTT dùng **\(\delta_a=\Delta_a/|a|\)** khi a≠0; không dùng \(|\bar a|\) hoặc kết luận \(\Delta_a=d\) khi thiếu số đúng.
- B13 theo SGK KNTT: tứ phân vị khi **n lẻ bỏ Q2 khỏi hai nửa**, mốt có thể có nhiều giá trị; B14 phương sai mô tả chia n (không phải n−1), ngoại lệ dùng dấu < hoặc > chặt.
- 18 câu cuối ChV trong CHV.json vẫn công khai, không trở thành held-out RD1. B14 học sinh tự thử kiểm đúng dấu rào; không tự loại một dữ liệu chỉ vì bị đánh dấu là bất thường.

## IV. Tự QA tác giả — chưa phải verdict độc lập

- Đối chiếu 14/14 OUTCOME_ID, các FIRST_TRY_ID `THPT-G10-CHV-TRY01..14` là 14 ID mới không trùng 27 ID R01 hoặc 18 ID selfcheck client hiện có; 3 Bài (B12: 4, B13: 5, B14: 5).
- Mỗi item có WHY/PRE/MEANING/READ_VISUAL/METHOD/TRY, self-reveal sau khi học sinh tự làm và đường giúp sửa về đúng HELP đã duyệt. Các 14 câu thử là câu tự viết và khác stem Core/Practice R01.
- QA tác giả tự tính lại đáp án, quy tắc KNTT và dấu bất đẳng thức; NotebookLM cần kiểm toán **từng câu, từng outcome** cả bản chất sư phạm, không coi đạt số lượng là đủ tự học.
- Không phát hành, không tạo Topic Core, không thay website, Firebase, chấm điểm chính thức hoặc Skill Mastery.

## V. Prompt phản biện NotebookLM (4 câu)

Hãy review độc lập file `Temp_G10_CHV_PED_R02_FULL_CHAPTER_REVIEW_20261105.md` theo duy nhất `SLM-THPT-QUALITY-ONE v1.2.0 (Q01–Q18)` cùng đúng 5 Permanent Sources THPT v2.1 và SGK/SBT KNTT Toán 10 Tập Một. Chỉ đánh giá **14 cầu nối PED1–PED6 và 14 First Try mới** trên B12–B14, kiểm từng OUTCOME_ID/ITEM_ID, kết quả/toán/điều kiện, câu hỏi trước Core, tự mở lời giải, quy ước a–bar a, \(\delta_a\), tứ phân vị theo KNTT, phương sai chia n và hàng rào ngoại lệ. Bảo toàn R01 Academic PASS 14 outcomes/27 câu và hai bản HELP01/HELP02 B12 @R02 đã review, không phục hồi lỗi cũ hay review lại nguồn không đổi; trả SOURCE_RECEIPT, danh sách REVIEWED_IDS, Academic/PED verdict theo outcome/item, P0/P1/P2 và MINIMAL_DELTA. Không cấp CONTENT_READY, quyền merge/deploy hoặc Mastery và chỉ yêu cầu DELTA tối thiểu nếu phát hiện lỗi thực chất.
