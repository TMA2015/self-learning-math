# Temp · Toán 10 KNTT Tập Một · Chương IV Vectơ (Bài 7–11) — PED Delta C R02, gói phản biện trọn chương

PACKET_ID: G10-SGK-CHIV-PED-BRIDGE-R02-20261105
STATUS: AUTHORING_REVIEW_CANDIDATE
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
REVIEW_SCOPE: FIVE_LESSONS_B07_B11_PED1_PED6_DELTA_C_ONLY
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: PUBLIC_FORMATIVE_PLUS_EXISTING_PUBLIC_CLIENT_SELF_CHECK
ACADEMIC_REVIEW_NEW: PENDING_INDEPENDENT_NOTEBOOKLM
PEDAGOGICAL_REVIEW_NEW: PENDING_INDEPENDENT_NOTEBOOKLM
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
PRIVATE_RD1_COUNT_NEW: 0
R01_B07_B08_SOURCE_GIT_BLOB: 42b206e31421b33860a1bf697d2d04b7aba992cf
R01_B07_B08_REVIEW_RECEIPT_BLOB: cf4df6ecb603adb258ab5de03f9defa2c695369f
R01_B09_B11_SOURCE_GIT_BLOB: a9f6fab820559a8da98a5a42cd9902dbf9891f34
R01_B09_B11_REVIEW_RECEIPT_BLOB: f13acb74206c00cb489e533df7792870f88830e3
EXISTING_PUBLIC_CHIV_JSON_GIT_BLOB: 55b2753c04cffff897947d7007bdc860bc19fcfb
SOURCE_S1_SGK_PRINTED: TOAN_10_KNTT_TAP1_CHIV_B07_B11_PP46_70_CHAPTER_PP71_72
SOURCE_S1_SBT_PRINTED: TOAN_10_KNTT_TAP1_CHIV_B07_B11_PP45_65_CHAPTER_PP66_71
S1_SGK_PDF_SHA256: 3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2
S1_SBT_PDF_SHA256: 2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1

## 1. S1, phạm vi, kết quả học tập và bảo toàn PASS

**Nguồn thẩm quyền:** SGK/SBT Kết nối tri thức Toán 10 Tập Một, Chương IV *Vectơ*; trang in đúng như ma trận bên dưới. Hai bộ R01 đã được review độc lập, mọi D1–D6 của B07–B08 (10 outcomes, 18 canonical câu, 6 EX, 2 SVG, 4 HELP) và B09–B11 (14 outcomes, 27 canonical câu, 9 EX, 3 SVG, 6 HELP) được bảo toàn nguyên văn; kết quả 18/18 và 27/27 Academic PASS không cần review lại. Trang in có nguồn từ hai frozen R01 receipts; đây không phải việc tự quét lại PDF trong lượt này.

**Vấn đề của sản phẩm legacy:** Năm bài website lớp 10 đã được phát hành từ trước chuẩn Q01–Q18 và hiện trình bày định nghĩa/công thức trước WHY/PRE/MEANING. Đây là **khoảng cách nâng cấp PED**, không gọi lỗi của bản phát hành lịch sử. Gói này chỉ thêm nhịp dẫn dắt học sinh: WHY → PRE → quan sát/hình thành bản chất → đọc hình → vì sao chọn cách → Tự thử tự mở đáp án → D1/EX/Core R01 → luyện tập → tự kiểm tra cuối chương.

**Ranh giới:** Chỉ nội dung PED1–PED6 và 24 Tự thử mới là `DELTA_C_ACADEMIC_MATERIAL`; cần NotebookLM độc lập review theo **đúng năm Permanent Sources THPT v2.1** và SGK/SBT S1. 45 R01 canonical câu cũ không đổi. 21 câu cuối chương CHIV.json đã công khai từ trước dùng `CLIENT_SELF_CHECK_NO_MASTERY` sau Final Submit; không nhân bản đề/đáp án sang gói review, không tính là private RD1 chính thức. Topic không được suy PASS.

### Ma trận 5 bài, 24 outcomes — 24 Tự thử, không trùng ID

| LESSON_ID | OUTCOME_ID | FIRST_TRY_ITEM_ID | PLACEMENT / ROLE | D6_HELP_RETURN | R01_CORE_OR_PRACTICE |
| --- | --- | --- | --- | --- | --- |
| G10-SGK-B07 | G10-B07-DEFINITION | THPT-G10-CHIV-TRY01 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B07-01 | THPT-G10-B07-C01 |
| G10-SGK-B07 | G10-B07-LENGTH | THPT-G10-CHIV-TRY02 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B07-02 | THPT-G10-B07-P01 |
| G10-SGK-B07 | G10-B07-DIRECTION | THPT-G10-CHIV-TRY03 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B07-02 | THPT-G10-B07-P05 |
| G10-SGK-B07 | G10-B07-EQUALITY | THPT-G10-CHIV-TRY04 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B07-02 | THPT-G10-B07-C02 |
| G10-SGK-B07 | G10-B07-ZERO | THPT-G10-CHIV-TRY05 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B07-02 | THPT-G10-B07-P04 |
| G10-SGK-B08 | G10-B08-TRIANGLE | THPT-G10-CHIV-TRY06 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B08-01 | THPT-G10-B08-C01 |
| G10-SGK-B08 | G10-B08-PARALLELOGRAM | THPT-G10-CHIV-TRY07 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B08-02 | THPT-G10-B08-C02 |
| G10-SGK-B08 | G10-B08-OPPOSITE-SUBTRACTION | THPT-G10-CHIV-TRY08 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B08-01 | THPT-G10-B08-P01 |
| G10-SGK-B08 | G10-B08-MIDPOINT | THPT-G10-CHIV-TRY09 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B08-02 | THPT-G10-B08-P04 |
| G10-SGK-B08 | G10-B08-CENTROID | THPT-G10-CHIV-TRY10 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B08-02 | THPT-G10-B08-P05 |
| G10-SGK-B09 | G10-B09-SCALAR_DEFINITION | THPT-G10-CHIV-TRY11 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B09-01 | THPT-G10-B09-C02 |
| G10-SGK-B09 | G10-B09-LENGTH_DIRECTION | THPT-G10-CHIV-TRY12 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B09-01 | THPT-G10-B09-C01 |
| G10-SGK-B09 | G10-B09-DISTRIBUTION | THPT-G10-CHIV-TRY13 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B09-01 | THPT-G10-B09-P02 |
| G10-SGK-B09 | G10-B09-COLLINEAR | THPT-G10-CHIV-TRY14 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B09-01 | THPT-G10-B09-P05 |
| G10-SGK-B09 | G10-B09-MIDPOINT_CENTROID | THPT-G10-CHIV-TRY15 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B09-02 | THPT-G10-B09-P04 |
| G10-SGK-B10 | G10-B10-VECTOR_COORDS | THPT-G10-CHIV-TRY16 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B10-01 | THPT-G10-B10-C01 |
| G10-SGK-B10 | G10-B10-OPERATIONS | THPT-G10-CHIV-TRY17 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B10-01 | THPT-G10-B10-P01 |
| G10-SGK-B10 | G10-B10-NORM_DISTANCE | THPT-G10-CHIV-TRY18 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B10-01 | THPT-G10-B10-C02 |
| G10-SGK-B10 | G10-B10-COLLINEAR_COORDS | THPT-G10-CHIV-TRY19 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B10-02 | THPT-G10-B10-P05 |
| G10-SGK-B10 | G10-B10-MIDPOINT_CENTROID | THPT-G10-CHIV-TRY20 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B10-02 | THPT-G10-B10-P04 |
| G10-SGK-B11 | G10-B11-GEOMETRIC_DOT | THPT-G10-CHIV-TRY21 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B11-02 | THPT-G10-B11-P01 |
| G10-SGK-B11 | G10-B11-COORDINATE_DOT | THPT-G10-CHIV-TRY22 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B11-01 | THPT-G10-B11-C01 |
| G10-SGK-B11 | G10-B11-PERPENDICULAR | THPT-G10-CHIV-TRY23 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B11-01 | THPT-G10-B11-C02 |
| G10-SGK-B11 | G10-B11-APPLICATION | THPT-G10-CHIV-TRY24 | SGK_PRE_CORE_FIRST_TRY / PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED | HELP-G10-B11-02 | THPT-G10-B11-P05 |

## 2. Học liệu mới cần NotebookLM phản biện (chỉ Delta C)

## B07 — Các khái niệm mở đầu về vectơ

**SGK KNTT Toán 10 Tập Một trang in 46–50; SBT trang in 45–47.** Nguồn R01 đã được NotebookLM review Academic/D1–D6 PASS. Nguồn bổ sung này chỉ đặt các cầu nối và Tự thử **trước kiến thức/Core R01**, không thay câu đã duyệt.

### G10-B07-DEFINITION — Vectơ là gì và tại sao phải có chiều?

**LESSON_ID:** `G10-SGK-B07` · **OUTCOME_ID:** `G10-B07-DEFINITION` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY01` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Đi từ A đến B rồi đi ngược từ B về A có cùng đoạn đường, nhưng hai lần di chuyển đưa ta về hai hướng trái nhau. Chỉ độ dài AB không đủ mô tả sự di chuyển.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết đoạn thẳng AB, hai đầu mút và hướng chuyển động trên đường thẳng; ký hiệu A là nơi xuất phát, B là nơi đến. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Đặt mũi tên đi từ A tới B: đó là độ dời có cả độ lớn lẫn chiều; đổi điểm đầu–cuối làm đổi vectơ, dù độ dài vẫn là AB. Bây giờ mới đặt tên đoạn thẳng có hướng là vectơ \(\overrightarrow{AB}\).

**PED4 · Cách đọc hình.** Với `FIG-G10-B07-01`, trước tiên nhận diện hai đỉnh và chiều các mũi tên, không nhìn độ dài đơn thuần rồi kết luận hai vectơ bằng nhau. D5 kế thừa: `FIG-G10-B07-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Muốn xác định vectơ, hỏi 'đi từ đâu đến đâu?' trước khi so sánh độ dài. Không thay \(\overrightarrow{AB}\) bằng đoạn AB nếu bài yêu cầu hướng.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY01`).** An đi từ A đến B; Bình đi từ B về A, với A khác B. Hai vectơ độ dời có bằng nhau không, và độ dài của chúng thế nào?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Không bằng nhau: \(\overrightarrow{AB}=-\overrightarrow{BA}\); cả hai có độ dài AB.

**Vì sao:** Khi đảo điểm đầu/cuối mũi tên quay ngược, trong khi khoảng cách giữa hai đầu không đổi. Độ dài bằng nhau chưa đủ để vectơ bằng nhau.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B07-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B07-C01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B07-LENGTH — Độ lớn không phải là hướng

**LESSON_ID:** `G10-SGK-B07` · **OUTCOME_ID:** `G10-B07-LENGTH` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY02` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Trên bản đồ, hai người đi 4 km theo các hướng khác nhau đều có quãng di chuyển 4 km, nhưng không có cùng vectơ độ dời.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết độ dài đoạn thẳng là số không âm; vectơ \(\overrightarrow{AB}\) thể hiện cả chiều A→B. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Chỉ bỏ chiều của mũi tên và đo độ dài đoạn nối A-B thì được **độ dài vectơ** \(|\overrightarrow{AB}|=AB\). Phép đo này không 'nhớ' chiều và luôn không âm.

**PED4 · Cách đọc hình.** Trong `FIG-G10-B07-01`, so hai cạnh có cùng độ dài nhưng ngược chiều; đọc đầu mũi tên riêng với số đo. D5 kế thừa: `FIG-G10-B07-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Khi hỏi độ lớn dùng ký hiệu độ dài; khi hỏi vectơ bằng nhau phải xét hướng. Không cộng số đo đường đi theo nhiều chặng để suy luôn độ dài độ dời.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY02`).** Một vectơ đi 3 m sang Đông, vectơ khác đi 3 m sang Tây. Hai độ dài bằng bao nhiêu và các vectơ có bằng nhau không?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Đều có độ dài 3 m, nhưng hai vectơ không bằng nhau.

**Vì sao:** Độ lớn chỉ bằng 3 m cho cả hai; chiều Đông và Tây khác nhau. Nếu cùng đường thẳng thì chúng ngược hướng.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B07-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B07-P01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B07-DIRECTION — Cùng phương khác cùng hướng

**LESSON_ID:** `G10-SGK-B07` · **OUTCOME_ID:** `G10-B07-DIRECTION` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY03` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Trên đường hai chiều, hai xe có thể đi trên hai làn song song mà một xe về Đông, xe còn lại về Tây.

**PED2 · Nền tảng cần nhớ (PRE).** Nhớ định nghĩa giá vectơ khác không và hai đường thẳng song song; phải phân biệt đường chạy với chiều chạy. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** **Phương** cho biết mũi tên nằm dọc đường nào; **hướng** cho biết chạy về phía nào trên đường ấy. Hai vectơ khác không cùng phương khi giá song song hoặc trùng; sau đó mới phân biệt cùng hay ngược hướng.

**PED4 · Cách đọc hình.** Đọc `FIG-G10-B07-01`: đánh dấu giá song song trước, rồi nhìn vị trí đầu nhọn của mũi tên để phân loại hướng. D5 kế thừa: `FIG-G10-B07-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Kiểm tra hai giá trước, tiếp đến dấu chiều; với vectơ-không dùng quy ước S1 riêng, không lấy mũi tên tưởng tượng để suy.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY03`).** Hai vectơ khác không nằm trên hai đường thẳng song song; một mũi tên hướng Đông, một hướng Tây. Chúng cùng phương không? Có cùng hướng không?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Cùng phương, nhưng ngược hướng; không cùng hướng.

**Vì sao:** Đường thẳng song song chứng minh cùng phương; chiều Đông/Tây trái nhau làm hai vectơ ngược hướng.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B07-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B07-P05` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B07-EQUALITY — Khi nào hai mũi tên ở nơi khác nhau là một vectơ?

**LESSON_ID:** `G10-SGK-B07` · **OUTCOME_ID:** `G10-B07-EQUALITY` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY04` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Một xe dịch chuyển 2 km về Đông ở Hà Nội và một xe khác dịch chuyển 2 km về Đông ở nơi khác: độ dời mô tả như nhau dù điểm đặt khác.

**PED2 · Nền tảng cần nhớ (PRE).** Đã phân biệt độ dài, phương, hướng; học sinh không được đồng nhất điểm xuất phát với bản thân vectơ tự do. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Để mô tả cùng một độ dời, ta có thể tịnh tiến mũi tên mà không xoay hay co giãn: đây là trực giác để có hai vectơ bằng nhau khi **cùng hướng và cùng độ dài**.

**PED4 · Cách đọc hình.** Ở `FIG-G10-B07-01`, kiểm tra \(\overrightarrow{AB}\) và \(\overrightarrow{DC}\) trong hình bình hành; tránh so với \(\overrightarrow{CD}\) vì chiều ngược. D5 kế thừa: `FIG-G10-B07-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Chỉ kết luận bằng nhau khi cả hai điều kiện độ dài và cùng hướng đạt; không yêu cầu trùng giá và không suy chỉ từ cùng phương.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY04`).** Hình bình hành ABCD theo thứ tự các đỉnh. \(\overrightarrow{AB}\) và \(\overrightarrow{DC}\) có bằng nhau không? \(\overrightarrow{CD}\) thì sao?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(\overrightarrow{AB}=\overrightarrow{DC}\), còn \(\overrightarrow{AB}\ne\overrightarrow{CD}\).

**Vì sao:** AB và DC song song, cùng hướng, cùng dài; CD ngược hướng với AB. Cùng độ dài vẫn không đủ.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B07-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B07-C02` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B07-ZERO — Không di chuyển vẫn cần một vectơ

**LESSON_ID:** `G10-SGK-B07` · **OUTCOME_ID:** `G10-B07-ZERO` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY05` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Đi một vòng rồi quay lại đúng điểm xuất phát, độ dời cuối cùng bằng 0 dù quãng đường đã đi có thể lớn hơn 0.

**PED2 · Nền tảng cần nhớ (PRE).** Phân biệt độ dời và quãng đường, một điểm A, đoạn AA độ dài 0; nhớ quy ước đặc biệt của SBT KNTT. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Khi A trùng B, mũi tên co lại thành một điểm: \(\overrightarrow{AA}=\vec0\), độ dài 0. **Theo quy ước SBT KNTT**, vectơ-không cùng phương và cùng hướng với mọi vectơ; đây là quy ước chứ không phải mũi tên vật lý có chiều xác định.

**PED4 · Cách đọc hình.** Với hình vectơ B07, quan sát vectơ khác không có hai đầu phân biệt; so với ký hiệu \(\overrightarrow{AA}\) tại một điểm không có đầu mũi tên thông thường. D5 kế thừa: `FIG-G10-B07-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Dùng \(\vec0\) để cộng, trừ và biểu diễn độ dời ròng bằng 0. Đừng dùng góc giữa hai vectơ khi có vectơ-không (B11 sẽ có điều kiện khác không).

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY05`).** Bạn đi từ A đến B rồi trở về A. Vectơ độ dời từ điểm đầu đến điểm cuối là gì? Có bằng tổng độ dài hai chặng không?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Vectơ độ dời \(\overrightarrow{AA}=\vec0\), độ dài 0; không bằng tổng quãng đường hai chặng (trừ trường hợp không hề đi).

**Vì sao:** Độ dời chỉ quan tâm vị trí đầu/cuối; đi rồi quay lại cho vectơ-không. Quãng đường vẫn là số dương nếu có di chuyển.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B07-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B07-P04` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

## B08 — Tổng và hiệu của hai vectơ

**SGK KNTT Toán 10 Tập Một trang in 51–54; SBT trang in 48–50.** Nguồn R01 đã được NotebookLM review Academic/D1–D6 PASS. Nguồn bổ sung này chỉ đặt các cầu nối và Tự thử **trước kiến thức/Core R01**, không thay câu đã duyệt.

### G10-B08-TRIANGLE — Cộng hai lần di chuyển nối tiếp

**LESSON_ID:** `G10-SGK-B08` · **OUTCOME_ID:** `G10-B08-TRIANGLE` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY06` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Một người đi từ A đến B rồi từ B đến C. Muốn biết độ dời cuối cùng, không cần giữ mọi chặng nếu biết điểm đầu A và điểm cuối C.

**PED2 · Nền tảng cần nhớ (PRE).** Nhớ vectơ có điểm đầu/cuối; hai chặng phải nối đúng B; tổng độ dài hai chặng không nhất thiết bằng độ dài đoạn AC. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Xếp hai mũi tên 'đuôi–đầu': mũi thứ nhất A→B rồi mũi thứ hai B→C. Hướng đi ròng A→C chính là ý nghĩa phép cộng vectơ \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\).

**PED4 · Cách đọc hình.** Đọc `FIG-G10-B08-01`: lần theo đường A→B→C bằng ngón tay, sau đó nhìn mũi tên tắt A→C, không đảo B→C thành C→B. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Nhận dạng chuỗi điểm nối trước khi áp dụng quy tắc ba điểm; không cộng độ dài trừ khi hai chặng thẳng hàng cùng chiều.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY06`).** Đi từ A 3 m sang Đông đến B, rồi 4 m lên Bắc đến C. Vectơ tổng đi từ đâu tới đâu? Độ dài của nó bằng 7 m không?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Vectơ tổng là \(\overrightarrow{AC}\); độ dài 5 m, không phải 7 m.

**Vì sao:** Hai chặng vuông góc nên hình học Pitago cho AC = √(3²+4²)=5; 7 m là quãng đường, không phải độ dời.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-C01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B08-PARALLELOGRAM — Hai tác động cùng lúc và hợp lực

**LESSON_ID:** `G10-SGK-B08` · **OUTCOME_ID:** `G10-B08-PARALLELOGRAM` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY07` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Hai lực có chung điểm đặt nhưng khác hướng không cho hợp lực bằng cách cộng độ lớn như cộng hai số thường.

**PED2 · Nền tảng cần nhớ (PRE).** Biết quy tắc nối mũi tên của phép cộng và hình bình hành ABCD; hai vectơ cùng xuất phát A. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Dịch chuyển một lực để nối đuôi–đầu không đổi vectơ; dựng hình bình hành cho thấy đường chéo từ điểm chung A chính là kết quả \(\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}\).

**PED4 · Cách đọc hình.** Trong `FIG-G10-B08-01`, kiểm tra hai cạnh AB/AD có chung gốc A và đường chéo AC; không lấy BD hoặc đường chéo ngược. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Khi hai vectơ có cùng điểm đầu, vẽ hình bình hành cho trực giác nhanh; nếu điểm đầu khác, có thể tịnh tiến một vectơ rồi dùng quy tắc tam giác.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY07`).** Ở A có hai lực vuông góc, độ lớn lần lượt 3 N và 4 N. Hợp lực theo đường chéo có độ lớn là 7 N hay 5 N?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** 5 N, theo đường chéo hình bình hành dựng từ A.

**Vì sao:** Hai lực vuông góc là hai cạnh góc vuông dài 3,4 nên đường chéo có độ lớn √(9+16)=5. Không cộng 3+4.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-C02` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B08-OPPOSITE-SUBTRACTION — Vì sao trừ phải đổi chiều?

**LESSON_ID:** `G10-SGK-B08` · **OUTCOME_ID:** `G10-B08-OPPOSITE-SUBTRACTION` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY08` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Nếu biết hai vị trí đích B và C nhìn từ cùng A, muốn đi từ C sang B ta phải 'bù' chặng A→C bằng chiều ngược của nó.

**PED2 · Nền tảng cần nhớ (PRE).** Nhớ vectơ đối là mũi tên quay 180° giữ độ dài; phép cộng ba điểm A→C→B. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Hiệu \(\vec u-\vec v\) có nghĩa là cộng vectơ ngược \(-\vec v\); vì thế \(\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{CA}=\overrightarrow{CB}\).

**PED4 · Cách đọc hình.** Ở `FIG-G10-B08-01`, nhận ra hai vectơ có cùng điểm đầu A và vẽ mũi tên kết quả C→B, không B→C. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Đổi dấu vectơ thứ hai trước rồi nối đầu–đuôi. Phép trừ vectơ nhìn chung không giao hoán, không lấy \(\overrightarrow{BC}\) cho trường hợp này.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY08`).** Cho ba điểm A,B,C bất kỳ. Rút gọn \(\overrightarrow{AB}-\overrightarrow{AC}\) thành vectơ có hai chữ cái.

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(\overrightarrow{CB}\).

**Vì sao:** Đổi trừ thành cộng \(\overrightarrow{CA}\): CA+AB=CB theo quy tắc ba điểm; CB và BC là hai vectơ đối.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-P01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B08-MIDPOINT — Trung điểm làm hai độ dời triệt tiêu

**LESSON_ID:** `G10-SGK-B08` · **OUTCOME_ID:** `G10-B08-MIDPOINT` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY09` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Đứng ở giữa một đoạn đường, đi tới hai đầu theo hai hướng đối nhau và cùng độ dài; tổng hai vectơ này phải bằng 0.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết M là trung điểm AB khi MA=MB và M thuộc AB; hướng M→A, M→B đối nhau. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Vì \(\overrightarrow{MA}=-\overrightarrow{MB}\), tổng hai vectơ bằng \(\vec0\). Ngược lại, tổng bằng 0 ép hai độ dời ngược nhau và cùng dài nên M ở giữa A,B (với A≠B).

**PED4 · Cách đọc hình.** Đọc sơ đồ điểm A–M–B theo thứ tự, hai mũi tên xuất phát ở M; đừng vẽ A→M rồi M→B khi kiểm tổng này. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Nhận diện hai vectơ cùng xuất phát trung điểm; dùng tổng bằng 0 thay vì chỉ chứng minh MA=MB mà quên thẳng hàng.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY09`).** Trên đường thẳng chọn A=0 m, B=8 m và M là trung điểm. Lấy \(\vec e\) là vectơ đơn vị dài 1 m hướng từ A đến B. Viết hai vectơ \(\overrightarrow{MA}\), \(\overrightarrow{MB}\) theo \(\vec e\) và tính tổng.

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(\overrightarrow{MA}=-4\vec e\), \(\overrightarrow{MB}=4\vec e\), nên tổng bằng \(\vec0\). Mỗi vectơ có độ dài 4 m.

**Vì sao:** Đặt M ở tọa độ 4 m. Hai độ dời là các bội đối nhau của vectơ đơn vị \(\vec e\), do đó tổng triệt tiêu. Không đồng nhất vectơ với một số đo độ dài.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-P04` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B08-CENTROID — Ba độ dời cân bằng tại trọng tâm

**LESSON_ID:** `G10-SGK-B08` · **OUTCOME_ID:** `G10-B08-CENTROID` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY10` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Đặt điểm G ở trọng tâm một tam giác, ba vectơ hướng từ G đến các đỉnh cân bằng nhau khi cộng theo quy tắc vectơ.

**PED2 · Nền tảng cần nhớ (PRE).** Biết M là trung điểm BC và G nằm trên trung tuyến AM với AG:GM=2:1; ở thời điểm này chưa cần tọa độ Oxy (B10). Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Từ trung điểm: \(\overrightarrow{GB}+\overrightarrow{GC}=2\overrightarrow{GM}\). Vì G trên AM và AG=2GM nên \(\overrightarrow{GA}=-2\overrightarrow{GM}\); cộng lại được tổng ba vectơ bằng 0.

**PED4 · Cách đọc hình.** Đọc hình tam giác có trung tuyến A–G–M: hai mũi tên G→B và G→C có hợp vectơ hướng G→M; GA ngược chiều với GM. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Đặt trung điểm và trọng tâm đúng vị trí trước khi viết công thức. Không suy tổng độ dài GA+GB+GC=0 vì các độ dài đều không âm.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY10`).** Với M trung điểm BC và G trọng tâm ABC, biết \(\overrightarrow{GB}+\overrightarrow{GC}=2\overrightarrow{GM}\). Viết \(\overrightarrow{GA}\) theo \(\overrightarrow{GM}\) và tìm tổng ba vectơ từ G.

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(\overrightarrow{GA}=-2\overrightarrow{GM}\), do đó \(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0\).

**Vì sao:** AG=2GM trên cùng trung tuyến, hai vectơ G→A và G→M ngược chiều. Đây là cân bằng vectơ, không phải cộng ba khoảng cách.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-P05` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

## B09 — Tích của một vectơ với một số

**SGK KNTT Toán 10 Tập Một trang in 55–59; SBT trang in 51–54.** Nguồn R01 đã được NotebookLM review Academic/D1–D6 PASS. Nguồn bổ sung này chỉ đặt các cầu nối và Tự thử **trước kiến thức/Core R01**, không thay câu đã duyệt.

### G10-B09-SCALAR_DEFINITION — Nhân vectơ với số: phóng to, thu nhỏ, đổi chiều

**LESSON_ID:** `G10-SGK-B09` · **OUTCOME_ID:** `G10-B09-SCALAR_DEFINITION` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY11` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Trên bản đồ, một mũi tên dịch chuyển có thể được kéo dài gấp đôi hay đảo chiều mà vẫn nằm theo cùng phương; số nhân mô tả phép biến đổi này.

**PED2 · Nền tảng cần nhớ (PRE).** Ôn vectơ có chiều và độ dài không âm, các số dương, âm, 0, vectơ-không của B07. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Nhân một vectơ \(\vec u\) với số k giữ phương khi khác không, đổi độ dài theo \(|k|\), đổi hướng nếu k âm; k=0 biến thành \(\vec0\). Đây là ý nghĩa của \(k\vec u\), không phải phép cộng hai độ dài.

**PED4 · Cách đọc hình.** Đọc `FIG-G10-B09-01` từ cùng gốc, so chiều mũi tên đối với hệ số dương/âm và độ dài so với \(\vec u\). D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Kiểm k=0 hoặc \(\vec u=\vec0\) trước khi nói cùng/ngược hướng của một mũi tên có chiều. Không chia tỉ số khi vectơ gốc bằng 0.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY11`).** Với \(\vec u\ne\vec0\), vectơ \(0\vec u\) là gì? Nó có độ dài bằng bao nhiêu?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(0\vec u=\vec0\), độ dài bằng 0.

**Vì sao:** Vì \(|0\vec u|=|0|\,|\vec u|=0\); không cố gán hướng vật lý riêng cho vectơ-không.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-C02` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B09-LENGTH_DIRECTION — Dấu k quyết định chiều, |k| quyết định độ lớn

**LESSON_ID:** `G10-SGK-B09` · **OUTCOME_ID:** `G10-B09-LENGTH_DIRECTION` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY12` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Khi một robot quay trở lại theo đúng đường vừa đi nhưng gấp đôi độ dời, độ lớn tăng còn chiều đổi ngược.

**PED2 · Nền tảng cần nhớ (PRE).** Biết phân biệt chiều, độ dài, vectơ đối và dấu hệ số k. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Với vectơ khác không, \(k=-2\) làm mũi tên quay ngược và kéo dài gấp đôi; **độ dài** dùng \(|k|\), còn dấu chỉ ảnh hưởng **hướng**.

**PED4 · Cách đọc hình.** Trên `FIG-G10-B09-01`, đối chiếu \(\vec u\), \(2\vec u\), \(-2\vec u\) ở đầu mũi tên và tỉ lệ chiều dài. D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Hỏi 'k có âm không' để xét hướng; hỏi '|k| bằng mấy' để xét độ dài. Không ghi 'độ dài −6 m' dù k âm.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY12`).** Một vectơ \(\vec u\) dài 3 m hướng Đông. Mô tả \(-2\vec u\): độ dài và hướng.

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(-2\vec u\) dài 6 m và hướng Tây.

**Vì sao:** Độ dài là 2×3=6, dấu âm khiến nó ngược hướng với \(\vec u\).

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-C01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B09-DISTRIBUTION — Phóng to cả chuyển động tổng cộng hoặc từng chặng

**LESSON_ID:** `G10-SGK-B09` · **OUTCOME_ID:** `G10-B09-DISTRIBUTION` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY13` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Đi hai chặng rồi phóng to toàn bộ lộ trình theo một tỉ lệ cho cùng độ dời ròng như phóng to từng chặng rồi cộng.

**PED2 · Nền tảng cần nhớ (PRE).** Nhớ phép cộng vectơ B08 và ý nghĩa nhân vectơ với số; dùng quy tắc tam giác. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Do phép dời tỉ lệ theo từng thành phần, \(k(\vec u+\vec v)=k\vec u+k\vec v\). Cùng một vectơ có thể biểu diễn theo nhiều chặng, không được nhân k chỉ cho chặng đầu.

**PED4 · Cách đọc hình.** Trên sơ đồ hai mũi tên nối đầu–đuôi, hình dung phóng to đồng thời cả hai cạnh và đường chéo; với k âm cần đảo hướng toàn hình. D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Nhận ra biểu thức có ngoặc và một hệ số chung trước khi phân phối; không dùng phép phân phối lên độ dài \(|\vec u+\vec v|\) như một tổng số học.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY13`).** Cho \(\vec u\) dài 2 đơn vị về Đông và \(\vec v\) dài 1 đơn vị về Bắc. Hãy mô tả \(2(\vec u+\vec v)\) và \(2\vec u+2\vec v\).

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Cả hai là vectơ có thành phần 4 đơn vị về Đông và 2 đơn vị về Bắc.

**Vì sao:** Phóng đôi tổng hai chặng hoặc phóng đôi từng chặng dẫn đến cùng điểm cuối. Đây là đẳng thức vectơ, không có nghĩa độ dài bằng 4+2.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-P02` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B09-COLLINEAR — Một đường chuyển động, nhiều vectơ

**LESSON_ID:** `G10-SGK-B09` · **OUTCOME_ID:** `G10-B09-COLLINEAR` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY14` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Các mũi tên cùng nằm trên một đường có thể dài ngắn khác nhau và ngược chiều; vẫn cùng phương.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết cùng phương B07 và nhân số B09; nhớ điều kiện cả hai vectơ khác không nếu diễn đạt tỉ lệ k khác 0. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Hai vectơ khác không cùng phương khi vectơ nọ là bội khác 0 của vectơ kia; hệ số âm cho ngược hướng, hệ số dương cho cùng hướng. Trường hợp \(\vec0\) cần quy ước S1 riêng.

**PED4 · Cách đọc hình.** Đọc `FIG-G10-B09-01`: tìm cặp mũi tên nằm trên cùng giá hoặc giá song song; chiều chỉ phân biệt hướng chứ không phá cùng phương. D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Để kiểm cùng phương, tìm hệ số k sao cho \(\vec v=k\vec u\) khi \(\vec u\ne\vec0\). Không chia cho 0 hay suy bằng nhau chỉ từ cùng phương.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY14`).** \(\vec v=-3\vec u\) và \(\vec u\ne\vec0\). Hai vectơ có cùng phương không? Cùng hướng không? Tỉ số độ dài bằng bao nhiêu?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Cùng phương, ngược hướng, \(|\vec v|/|\vec u|=3\).

**Vì sao:** Bội âm đổi chiều, độ lớn nhân với 3. Đây là phép mô tả phương/hướng, không phải hai vectơ bằng nhau.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-P05` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B09-MIDPOINT_CENTROID — Tỉ lệ trung tuyến dẫn tới tỉ lệ vectơ

**LESSON_ID:** `G10-SGK-B09` · **OUTCOME_ID:** `G10-B09-MIDPOINT_CENTROID` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY15` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Biết điểm M ở chính giữa AB hay G chia trung tuyến AM theo tỉ lệ 2:1 giúp tìm vị trí chỉ bằng phép nhân vectơ với số.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết điểm M trung điểm BC, G trọng tâm ABC, hai điểm G và M nằm trên trung tuyến AM, độ dài AG:GM=2:1. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Vectơ cùng phương cùng chiều theo một đoạn cho phép đổi tỉ số độ dài thành hệ số có dấu: \(\overrightarrow{AG}=\frac23\overrightarrow{AM}\), trong khi \(\overrightarrow{GA}=-2\overrightarrow{GM}\).

**PED4 · Cách đọc hình.** Trên hình trung tuyến A–G–M, nhìn chiều A→M và G→A trước khi viết hệ số; cùng một tỉ số dài có thể cho hệ số âm khi đổi điểm đầu. D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Đặt thứ tự điểm trên đoạn trước, rồi chọn hệ số của đúng vectơ đích. Không nhầm AG/GM=2 với AG/AM=2.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY15`).** Trong tam giác ABC, M là trung điểm BC, G là trọng tâm; nếu AM=9 cm thì AG bằng bao nhiêu? Viết \(\overrightarrow{AG}\) theo \(\overrightarrow{AM}\).

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** AG=6 cm và \(\overrightarrow{AG}=\frac23\overrightarrow{AM}\).

**Vì sao:** G nằm giữa A và M, AG:GM=2:1 nên AM gồm 3 phần, AG chiếm 2 phần. Hai vectơ A→G, A→M cùng hướng.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-P04` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

## B10 — Vectơ trong mặt phẳng tọa độ

**SGK KNTT Toán 10 Tập Một trang in 60–65; SBT trang in 55–58.** Nguồn R01 đã được NotebookLM review Academic/D1–D6 PASS. Nguồn bổ sung này chỉ đặt các cầu nối và Tự thử **trước kiến thức/Core R01**, không thay câu đã duyệt.

### G10-B10-VECTOR_COORDS — Vì sao lấy điểm cuối trừ điểm đầu?

**LESSON_ID:** `G10-SGK-B10` · **OUTCOME_ID:** `G10-B10-VECTOR_COORDS` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY16` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Trên bản đồ tọa độ, muốn biết bạn đã dịch chuyển bao xa theo Đông–Tây và Bắc–Nam từ A đến B, chỉ cần nhìn sự thay đổi tọa độ.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết trục Ox, Oy và điểm A(xA;yA), B(xB;yB); quy ước đổi theo chiều dương của hai trục. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Độ dời theo trục x là 'x đến − x đi', theo trục y là 'y đến − y đi'. Hai số đó ghép thành tọa độ vectơ \(\overrightarrow{AB}\); điểm đặt có thể khác nhưng cùng cặp độ dời tạo vectơ bằng nhau.

**PED4 · Cách đọc hình.** Đọc `FIG-G10-B10-01`: chiếu A và B xuống hai trục, lần theo số ô ngang/dọc; chọn đầu B trừ đầu A theo cả hai trục. D5 kế thừa: `FIG-G10-B10-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Viết 'cuối trừ đầu' thành hai bước độc lập, đừng lấy luôn tọa độ B. Đổi sang BA thì cả hai thành phần đổi dấu.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY16`).** Cho A(-3;2), B(2;-1). Tìm tọa độ \(\overrightarrow{AB}\) và \(\overrightarrow{BA}\).

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(\overrightarrow{AB}=(5;-3)\), \(\overrightarrow{BA}=(-5;3)\).

**Vì sao:** 2−(−3)=5 và −1−2=−3. Đảo điểm đầu/cuối làm vectơ đối.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B10-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B10-C01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B10-OPERATIONS — Tọa độ giữ phép cộng vectơ dễ tính

**LESSON_ID:** `G10-SGK-B10` · **OUTCOME_ID:** `G10-B10-OPERATIONS` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY17` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Từ hai lần dịch chuyển đã mô tả bằng (ngang; dọc), ta muốn ghép chúng mà không phải vẽ lại từng mũi tên.

**PED2 · Nền tảng cần nhớ (PRE).** Biết cộng hai vectơ theo thành phần ngang/dọc B08, nhân một số B09; cặp số (x;y) biểu diễn hai thành phần theo trục. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Đi thêm 2 đơn vị ngang và −1 dọc rồi tiếp thêm −1 ngang và 3 dọc nghĩa là cộng các độ dời ngang với nhau, dọc với nhau. Vì vậy phép cộng/trừ và nhân số được thực hiện theo từng tọa độ.

**PED4 · Cách đọc hình.** Đọc hình trục `FIG-G10-B10-01`, theo dõi mỗi thành phần riêng trước khi dựng mũi tên kết quả tổng. D5 kế thừa: `FIG-G10-B10-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Chọn đại số theo tọa độ khi đã có cặp số; không cộng chéo x với y, và đặt ngoặc đúng khi trừ một vectơ.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY17`).** \(\vec u=(2;-1)\), \(\vec v=(-1;3)\). Tính \(2\vec u-\vec v\).

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \((5;-5)\).

**Vì sao:** 2u=(4;−2); trừ v=(-1;3) nghĩa là (4−(−1);−2−3)=(5;−5).

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B10-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B10-P01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B10-NORM_DISTANCE — Khoảng cách là độ dài mũi tên, không phải tổng hai ô

**LESSON_ID:** `G10-SGK-B10` · **OUTCOME_ID:** `G10-B10-NORM_DISTANCE` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY18` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Đi 3 ô sang Đông và 4 ô lên Bắc có quãng đường theo lưới 7 ô nhưng khoảng cách thẳng chỉ 5 ô.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết tam giác vuông và Pitago; tọa độ vectơ AB=(Δx;Δy) là hai cạnh góc vuông. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Đường nối trực tiếp A–B là cạnh huyền: \(AB=\sqrt{(\Delta x)^2+(\Delta y)^2}\). Đó là độ dài vectơ, luôn không âm; không cộng |Δx|+|Δy| trừ khi đang hỏi đường đi theo lưới.

**PED4 · Cách đọc hình.** Đọc `FIG-G10-B10-01`, vẽ hình chiếu ngang/dọc từ A tới B để thấy hai chân vuông góc và cạnh huyền AB. D5 kế thừa: `FIG-G10-B10-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Dùng Pitago khi hỏi độ dài vectơ/khoảng cách giữa hai điểm, không nhầm với quãng đường đi theo cạnh ô.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY18`).** Cho A(1;2), B(4;6). Khoảng cách AB là 7 hay 5 đơn vị?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** 5 đơn vị.

**Vì sao:** AB=(3;4), nên AB=√(3²+4²)=5. 7 là tổng chặng theo hai trục, không phải khoảng cách thẳng.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B10-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B10-C02` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B10-COLLINEAR_COORDS — Hai cặp số có cùng hướng hình học khi nào?

**LESSON_ID:** `G10-SGK-B10` · **OUTCOME_ID:** `G10-B10-COLLINEAR_COORDS` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY19` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Trong bản đồ, (2 ô Đông,1 ô Bắc) và (6 ô Đông,3 ô Bắc) cùng đường đi nhưng khác độ dài.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết bội vô hướng và điều kiện khác vectơ-không của B09; tọa độ vectơ biểu diễn hai thành phần. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Nếu \(\vec v=k\vec u\) thì cả hai tọa độ đều nhân cùng k, nên hai mũi tên song song. Nếu không có cùng một k cho cả hai thành phần thì khác phương.

**PED4 · Cách đọc hình.** Trên trục `FIG-G10-B10-01`, so độ dốc của đường mang hai mũi tên, không chỉ so riêng x hoặc riêng y. D5 kế thừa: `FIG-G10-B10-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Tìm cùng hệ số k ở cả hai tọa độ; trường hợp một tọa độ bằng 0 cần đối chiếu trực tiếp, không chia cho số 0.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY19`).** Với \(\vec u=(2;1)\), \(\vec v=(6;3)\), \(\vec w=(6;4)\). Vectơ nào cùng phương với u (biết cả ba đều khác 0)?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Chỉ \(\vec v\) cùng phương với \(\vec u\), vì \(\vec v=3\vec u\); \(\vec w\) không cùng phương.

**Vì sao:** Cặp (6,4) có tỉ số x=3 nhưng y=4, không thể tìm cùng k cho hai tọa độ.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B10-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B10-P05` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B10-MIDPOINT_CENTROID — Tọa độ điểm cân bằng là trung bình các đỉnh

**LESSON_ID:** `G10-SGK-B10` · **OUTCOME_ID:** `G10-B10-MIDPOINT_CENTROID` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY20` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Trung điểm đoạn thẳng nằm cân giữa hai đầu, trọng tâm tam giác nằm cân giữa ba đỉnh khi xét tọa độ theo mỗi trục.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết trung điểm M của AB và trọng tâm G của tam giác; phép cộng vectơ và số trung bình cộng. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Vì trung điểm có vectơ MA+MB=0, tọa độ trung bình của A,B cho M. Tương tự GA+GB+GC=0 cho trọng tâm, nên tọa độ G là trung bình của ba tọa độ đỉnh.

**PED4 · Cách đọc hình.** Trong `FIG-G10-B10-01`, đọc vị trí các điểm và thử đối chiếu trung bình x, trung bình y, không lấy trung bình x với y. D5 kế thừa: `FIG-G10-B10-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Dùng trung bình tọa độ theo từng trục cho M hoặc G, kiểm G nằm trong tam giác và M nằm trên AB; không nhầm chia 2 và chia 3.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY20`).** Cho A(-2;4), B(4;0), C(1;5). Tính trung điểm M của AB và trọng tâm G của ABC.

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(M=(1;2)\), \(G=(1;3)\).

**Vì sao:** M: ((−2+4)/2;(4+0)/2)=(1;2); G: ((−2+4+1)/3;(4+0+5)/3)=(1;3).

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B10-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B10-P04` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

## B11 — Tích vô hướng của hai vectơ

**SGK KNTT Toán 10 Tập Một trang in 66–70; SBT trang in 59–65.** Nguồn R01 đã được NotebookLM review Academic/D1–D6 PASS. Nguồn bổ sung này chỉ đặt các cầu nối và Tự thử **trước kiến thức/Core R01**, không thay câu đã duyệt.

### G10-B11-GEOMETRIC_DOT — Tích vô hướng mô tả mức độ cùng hướng

**LESSON_ID:** `G10-SGK-B11` · **OUTCOME_ID:** `G10-B11-GEOMETRIC_DOT` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY21` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Một lực tác dụng dọc hướng di chuyển có ích hơn lực kéo vuông góc; lực ngược chiều chuyển động có thể gây công âm.

**PED2 · Nền tảng cần nhớ (PRE).** Nhớ độ dài vectơ, góc giữa hai vectơ khác không thuộc 0°–180° và cos góc nhọn/vuông/tù. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Tích vô hướng đo tích hai độ lớn có xét thành phần cùng hướng bằng cos: \(\vec u\cdot\vec v=|\vec u||\vec v|\cos\theta\). Nếu vuông góc tích 0, nếu ngược hướng tích âm; góc chỉ định nghĩa khi cả hai khác 0.

**PED4 · Cách đọc hình.** Đọc `FIG-G10-B11-01`: đặt hai vectơ cùng gốc để đọc góc đúng giữa mũi tên; nhìn góc tù cho dấu cos âm, không đổi thành góc nhọn bổ sung. D5 kế thừa: `FIG-G10-B11-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Chọn định nghĩa hình học nếu biết hai độ dài và góc giữa vectơ; nếu một vectơ bằng 0, tích là 0 theo đại số nhưng không gán góc thường.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY21`).** Cho \(|\vec u|=2\), \(|\vec v|=3\), góc giữa hai vectơ là 120°. Tích vô hướng âm hay dương, bằng bao nhiêu?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(\vec u\cdot\vec v=2\cdot3\cdot\cos120^\circ=-3\).

**Vì sao:** Cos120°=−1/2 nên tích âm; không thể dùng cos60° vì đây là góc giữa hai vectơ đang hướng xa nhau.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B11-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B11-P01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B11-COORDINATE_DOT — Tại sao tích vô hướng có thể tính bằng hai cặp số?

**LESSON_ID:** `G10-SGK-B11` · **OUTCOME_ID:** `G10-B11-COORDINATE_DOT` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY22` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Trong bản đồ Oxy, biết hai tọa độ vectơ có thể suy mức độ cùng hướng mà không cần đo góc.

**PED2 · Nền tảng cần nhớ (PRE).** Đã biết vectơ đơn vị \(\vec i,\vec j\) vuông góc, \(\vec u=u_x\vec i+u_y\vec j\) và tính chất phân phối. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Vì \(\vec i\cdot\vec i=1\), \(\vec j\cdot\vec j=1\), \(\vec i\cdot\vec j=0\), khi nhân phân phối chỉ còn \(u_xv_x+u_yv_y\). Đây là công thức tọa độ của cùng tích vô hướng hình học.

**PED4 · Cách đọc hình.** Đọc `FIG-G10-B11-01` cho hướng, góc; kết hợp hình trục B10 nếu cần tách thành phần trước khi nhân. D5 kế thừa: `FIG-G10-B11-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Khi có tọa độ, nhân các thành phần cùng trục rồi cộng; không nhân nhầm ux với vy hoặc lấy tích độ dài thay cho dấu.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY22`).** Cho \(\vec u=(2;-1)\), \(\vec v=(3;4)\). Tính \(\vec u\cdot\vec v\).

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** \(2\cdot3+(-1)\cdot4=2\).

**Vì sao:** Thành phần theo Ox cho 6, theo Oy cho −4, cộng là 2. Tích vô hướng là một số, không phải vectơ.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B11-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B11-C01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B11-PERPENDICULAR — Vuông góc có thể kiểm bằng số

**LESSON_ID:** `G10-SGK-B11` · **OUTCOME_ID:** `G10-B11-PERPENDICULAR` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY23` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Thay vì đo góc trên hình vẽ không chuẩn tỉ lệ, ta có thể dùng tích vô hướng bằng 0 để nhận biết hai vectơ vuông góc.

**PED2 · Nền tảng cần nhớ (PRE).** Biết cos90°=0 và công thức tọa độ tích vô hướng, cùng điều kiện cả hai vectơ khác không. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Nếu hai vectơ khác không có tích vô hướng 0 thì cos góc giữa chúng là 0, vì tích độ dài dương; góc bằng 90°. Chiều ngược lại cũng đúng.

**PED4 · Cách đọc hình.** Trong `FIG-G10-B11-01`, xem góc vẽ chỉ giúp dự đoán; kết luận bằng phép tính dấu/tích mới chính xác. D5 kế thừa: `FIG-G10-B11-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Kiểm tra hai vectơ khác không trước, sau đó tính tích vô hướng; \(\vec0\cdot\vec v=0\) nhưng không suy góc vuông với vectơ-không.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY23`).** \(\vec u=(2;3)\), \(\vec v=(3;-2)\). Chúng có vuông góc không? Vì sao điều kiện khác 0 quan trọng?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Có, vì \(\vec u\cdot\vec v=2\cdot3+3\cdot(-2)=0\), và cả hai khác \(\vec0\).

**Vì sao:** Nếu một vectơ bằng 0 thì tích vẫn bằng 0 nhưng góc giữa hai vectơ không xác định theo định nghĩa dùng ở đây.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B11-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B11-C02` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>

### G10-B11-APPLICATION — Công của lực: độ lớn không đủ

**LESSON_ID:** `G10-SGK-B11` · **OUTCOME_ID:** `G10-B11-APPLICATION` · **FIRST_TRY_ITEM_ID:** `THPT-G10-CHIV-TRY24` · **PLACEMENT:** `SGK_PRE_CORE_FIRST_TRY` · **ROLE:** `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`

**PED1 · Tình huống vì sao cần học (WHY).** Đẩy một vật 3 m cùng chiều lực khác với kéo vật theo chiều ngược hoặc vuông góc lực, dù độ lớn lực và quãng dịch chuyển giống nhau.

**PED2 · Nền tảng cần nhớ (PRE).** Biết lực \(\vec F\) đo N, độ dời \(\vec s\) đo m, góc giữa hai vectơ khác không và tích vô hướng. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**PED3 · Hình thành bản chất trước công thức (MEANING).** Chỉ thành phần lực cùng chiều độ dời tạo công có dấu: \(W=\vec F\cdot\vec s=|\vec F||\vec s|\cos\theta\); cùng chiều cho dương, ngược chiều cho âm, vuông góc cho 0.

**PED4 · Cách đọc hình.** Đọc `FIG-G10-B11-01` như một ví dụ về dấu góc tù; trong tình huống lực phải đặt hai vectơ cùng gốc để xác định góc chính xác. D5 kế thừa: `FIG-G10-B11-01`, không tạo hình mới, không thay XML/nhãn.

**PED5 · Chọn phương pháp và giới hạn.** Xác định hướng tương đối của lực và độ dời trước, kiểm đơn vị N·m=J; không lấy giá trị tuyệt đối khi bài hỏi công có dấu.

**PED6 · Tự thử trước Core (item duy nhất `THPT-G10-CHIV-TRY24`).** Một lực 10 N hướng Đông, vật dịch chuyển 3 m hướng Tây. Công của lực là bao nhiêu J? Nếu dịch chuyển vuông góc lực thì sao?

<details><summary>Em tự mở đối chiếu sau khi đã thử làm</summary>

**Kết quả:** Cùng phương ngược hướng: \(W=10\cdot3\cos180^\circ=-30\) J; vuông góc: \(W=0\) J.

**Vì sao:** Cos180°=−1, cos90°=0. Công là vô hướng có dấu, khác với độ lớn lực hay quãng đường.

**Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B11-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B11-P05` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

</details>
## 3. Đối chiếu với nguồn cũ D1–D6 và đường tự học

- R01 B07–B08: `prototypes/thpt/content-drafts/THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01_SNAPSHOT.md` (Git blob `42b206e31421b33860a1bf697d2d04b7aba992cf`), original NotebookLM receipt blob `cf4df6ecb603adb258ab5de03f9defa2c695369f`. **Giữ nguyên** 16 Core/Practice + 2 Written (Anchor chỉ là nhãn), 6 EX, 2 SVG và 4 HELP.
- R01 B09–B11: `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md` (Git blob `a9f6fab820559a8da98a5a42cd9902dbf9891f34`), original reviewer `f13acb74206c00cb489e533df7792870f88830e3`. **Giữ nguyên** 24 Core/Practice + 3 Written, 9 EX, 3 SVG, 6 HELP.
- Tổng R01 toàn ChIV: **5 bài, 24 outcomes, 45 public canonical R01 items**, 15 worked examples, 5 original SVG, 10 HELP. Có 21 câu tự kiểm tra CHIV.json **đã công khai**; bất cứ tiền tố RD1 nào trong JSON không tạo ngân hàng độc lập giữ kín.
- Bản này chỉ bổ sung **24 FIRST_TRY mới** `THPT-G10-CHIV-TRY01..TRY24`, gắn đúng 24 OUTCOME_ID, một đề/một lời giải cho một ID. Nhiều placement/role không tạo câu thứ hai. Các lời giải nằm sau `<details>` tự mở, thích hợp cho luyện tập tự đối chiếu, không phải Final Submit chính thức.
- Trình tự học hợp lệ của từng bài: lời dẫn/khám phá PED R02 đứng trước định nghĩa/formula D1 R01; ví dụ R01 và Core sau Tự thử; nếu mắc lỗi quay về HELP D6 rồi làm lại. RELEASE chịu trách nhiệm hiển thị/click path AP1–AP5 nhưng AUTHORING phải biên soạn đủ từ đầu.

## 4. QA tự kiểm tác giả — không tự cấp NotebookLM PASS

- Kiểm định cấu trúc: 24/24 OUTCOME_ID ở hai nguồn R01 được ánh xạ đến 24/24 `TRY_ID` mới; phân bố B07:5, B08:5, B09:5, B10:5, B11:4.
- QA toán mẫu: quy tắc đảo điểm đầu cuối; vectơ-không theo **quy ước SBT KNTT** (cùng phương/cùng hướng mọi vectơ); công thức tổng/hiệu vectơ, trung điểm/trọng tâm; hệ số âm và độ dài; tọa độ B−A, độ dài Pitago, phép cộng theo thành phần; tích vô hướng có dấu/điều kiện khác 0; công lực có đơn vị J.
- QA sư phạm: mỗi outcome có WHY, PRE, MEANING **trước công thức chính thức R01**, PED4 chỉ dẫn hình hoặc mô tả thị giác thích hợp, METHOD chỉ rõ lý do lựa chọn và phạm vi, Tự thử có đối chiếu sau khi mở và D6 đúng bài.
- QA an toàn: `PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED`; chưa có UI website, không ghi score/Mastery, không dùng câu Tự thử để thay thế kiểm tra cuối chương, không tiết lộ ngân hàng RD1 private.
- Chờ reviewer xác nhận độc lập toán và tính khả thi tự học từ người mới bắt đầu theo outcome, bao gồm **nhất quán các điều kiện về vectơ-không** và thứ tự xây dựng khái niệm. Nếu có P0/P1/P2, sửa đúng phần; không mở review lại R01 bất biến.

## 5. Prompt NotebookLM đề xuất (4 câu)

Đọc file `Temp_G10_CHIV_PED_R02_FULL_CHAPTER_REVIEW_20261105.md` với **đúng năm Permanent Sources THPT v2.1** và SGK/SBT KNTT Toán 10 Tập Một. Hãy kiểm toán độc lập **chỉ 24 cầu nối PED1–PED6 và 24 FIRST_TRY item mới** trên năm bài B07–B11 theo chuẩn duy nhất `SLM-THPT-QUALITY-ONE Q01–Q18 v1.2.0`, kiểm tra toán, quy ước SBT vectơ-không, thứ tự khái niệm trước công thức, đọc hình, điều kiện áp dụng và D6 theo từng OUTCOME_ID/ITEM_ID. Bảo toàn PASS trước đó cho toàn bộ R01 B07–B11 (45 câu, 15 EX, 5 SVG, 10 HELP), không yêu cầu review lại nguồn không đổi; ghi rõ SOURCE_RECEIPT, tất cả REVIEWED_IDS, Academic/PED verdict theo bài/outcome/item, P0/P1/P2 và MINIMAL_DELTA. Chỉ đề xuất sửa tối thiểu nơi thực sự có lỗi; không cấp quyền CONTENT_READY, Mastery, merge hoặc deploy.

