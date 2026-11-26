# CĐ22 · R06 AUTHOR_SELF_QA_RECEIPT · Complete learner-source authoring verification

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
PACKET_ID: THPT-TOPIC-STATISTICS-G10-G12-FULL-R06
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
SOURCE_PATH: prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R06_MEANING_FIRST_EXPRESSION_REPAIR_20261115.md
SOURCE_BLOB: 12f3af42c2e6b0f316355dcedfc34ec8b6136694
BASELINE_R05_BLOB: 0762cc67491965a4bab700aa1d33937aa3bf7cb6
ORIGINAL_R01_BLOB: 4f4dc4abcf671479fe0650595e9b67f745738b9a
SOURCE_INDEX_BLOB: 51a6e99587187838aea61c5c72108adae7874d1d
CANONICAL_PUBLIC_EXTENSION_BLOB: c222f9c8ef2c3b34caf4f6d6c33fa88f960471c3
SELF_CHECK_DEMO_BLOB: a2dc982d21e352d3ff9d175f19072a8f5cb3ee05
S1_RECEIPT: G10 T1 ChV B12–B14 (trang in 73–88); G11 T1 ChIII B08–B09 (58–68; B09 chứa mốt ghép nhóm); G12 T1 ChIII B09–B10 (75–84). SGK Kết nối tri thức S1, kế thừa snapshot gốc R01 + G11 R03 S1 receipt, không tuyên bố đã scan lại PDF trong lần này. Lời reviewer R2 ghi G11 ChV B14 trang 129–131 là SAI metadata: đúng KNTT B14 là Phép chiếu song song ChIV. Chênh lệch đó không thay phạm vi Core hay lời giải trên source; phân loại REFERENCE_METADATA_CORRECTION_NONBLOCKING, đính chính tại PR #812, không sửa lời reviewer gốc.
OUTCOME_AUDIT: 39/39 outcomes, 13 full knowledge units, each source outcome includes concept/conditions/method/limit and 2–5 original practice item references; see the 39-row audited table below.
MATH_VERIFICATION: 21/21 direct recomputations of R06 first-try boundary cases, 13 independent worked examples checked through source explanation; original 114 practice stems and solutions source-parity exact (27 G10,32 G11,48 G12,7 extension); source R01 maths audit G10 27/27+7/7 and exact old G11+G12 80/80 reviewed component fidelity preserved on unchanged blocks.
PED_VERIFICATION: Learner-first prose, 13 actual question-led Khám phá, 13 standalone Ví dụ/Đề bài/Lời giải, 13 Vận dụng with opt-in Đối chiếu and D6 self-remediation; 114 actual Practice questions/solutions and 19 Written rubrics; 9 public self-check prompts with proof-of-mechanism standalone demo. Do not claim UI/device/runtime PASS.
CANONICAL_Q15: 114 unique canonical item IDs, 39 primary outcomes, 114 display-only copies each tagged in non-rendered comment with original source blob and exact stem/solution, 6 MCQ options checked, 19/19 original Written rubric display; source bank is the four original immutable corpus files, not the display projection. Each outcome 2–5 public items; no duplicate canonical ID in source bank.
ASSESSMENT_Q16: Nine reused public questions, exposed only as CLIENT_SELF_CHECK_NO_MASTERY; demo requires all nine attempts before Final Submit reveals public solutions; no score, learner persistence, skill Mastery or official TOPIC_READINESS; no RD1 held-out stem/solution/rubric in public repository. Full browser/render and website Final Submit remain RELEASE QA, never claimed here.
P0: 0
P1: 0
P2: 1 (SGK PDF page-index not independently reopened in this round; reference metadata reviewer R2 corrected against original S1 receipt, not an academic blocker)
AUTHOR_SIGNOFF: AUTHORING tự kiểm và chịu trách nhiệm Academic+PED theo Q01–Q18/A1–A7 trên **duy nhất** R06 Git blob `12f3af42c2e6b0f316355dcedfc34ec8b6136694`; không mạo danh NotebookLM hoặc cấp website approval. Dạng tự kiểm công khai không cấp Readiness/Mastery.

## A. S1/metadata — chốt đúng bản chất, không tạo HOLD giả

- S1 bản gốc R01 và snapshot G11 R03 dẫn **đúng** G11 Tập Một ChIII B08–B09; bài mốt là B09. Bài 14 KNTT là Phép chiếu song song, không phải mốt. Đính chính biên bản R2 bằng bản ghi độc lập này, **không tự sửa nguồn report reviewer**.
- Không có biến đổi Core/đáp án/điều kiện nào dựa trên trích dẫn reviewer sai. R06 sửa lời giảng/MathJax từ R05, không ảnh hưởng canonical stem/key/solution/rubric. Sai index PDF ngoài phạm vi không tự thành P0/P1; thông tin trang in lấy đúng receipt từng lớp và không để học sinh đọc SHA/trang in.
- SGK S1 là authority xác định Core, Topic mở rộng chiều sâu và ứng dụng có điều kiện. SBT được tham khảo theo bản source gốc: G10 SBT 72–80, G11 SBT 44–49, G12 SBT 59–69 (trang in theo original receipt); không khẳng định đọc trực tiếp các PDF đó trong lượt này.

## B. 39 outcomes: bằng chứng lời giảng và câu luyện thực tế (không dựa vào số lượng trống)

| LESSON_ID / mục | OUTCOME_ID | Điều kiện/giới hạn đã đọc trong đoạn learner | Practice canonical | Thử–sửa |
|---|---|---|---:|---|
| `TOPIC-STAT-M01` / 1.1 | `G10-B12-APPROX_CONCEPT` | Hỏi trước: số này do **đếm** hay do **đo**? Đếm đủ 25 học sinh cho số đúng trong tình huống đã xác định; thước ghi 120,3 cm cho một giá trị … | 2 (ví dụ `THPT-G10-B12-P04`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.1 |
| `TOPIC-STAT-M01` / 1.1 | `G10-B12-ABS_ERROR` | Muốn tính **sai số tuyệt đối thực**, cần biết cả giá trị đúng và gần đúng. Ví dụ \(a=7{,}2,\bar a=7{,}16\) cho \(\Delta=0{,}04\). Nếu chỉ bi… | 3 (ví dụ `THPT-G10-B12-C01`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.1 |
| `TOPIC-STAT-M01` / 1.1 | `G10-B12-REL_ERROR` | Sai số \(0{,}1\) ở vật dài 1 đơn vị đáng kể hơn ở vật dài 100 đơn vị. Vì vậy chia sai số tuyệt đối cho \( a >0\), rồi nhân 100% nếu muốn tỷ … | 3 (ví dụ `THPT-G10-B12-P01`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.1 |
| `TOPIC-STAT-M01` / 1.1 | `G10-B12-ROUNDING` | Làm tròn là thay giá trị bởi số thuận tiện hơn ở một hàng xác định. Quy tắc chặn bằng nửa đơn vị hàng làm tròn cho phép **ước lượng sai số t… | 2 (ví dụ `THPT-G10-B12-P02`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.1 |
| `TOPIC-STAT-M02` / 1.2 | `G10-B13-MEAN` | Trung bình là mức chia đều, không nhất thiết thuộc danh sách số liệu. Nếu giá trị 5 có tần số 3, phải cộng 5 **ba lần** hoặc nhân (\(5\cdot3… | 3 (ví dụ `THPT-G10-B13-C01`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.2 |
| `TOPIC-STAT-M02` / 1.2 | `G10-B13-MODE` | Mốt trả lời 'giá trị gặp thường nhất' chứ không đo vị trí trung tâm hay tổng. Khi tần số cao nhất xuất hiện ở hai giá trị, ta có **hai mốt**… | 2 (ví dụ `THPT-G10-B13-P03`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.2 |
| `TOPIC-STAT-M03` / 1.3 | `G10-B13-MEDIAN` | Muốn tìm trung vị, bước không được bỏ là **xếp lại dãy tăng dần**. Với số phần tử chẵn, hai giá trị ở giữa cần lấy trung bình, dù trung vị c… | 2 (ví dụ `THPT-G10-B13-C02`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.3 |
| `TOPIC-STAT-M03` / 1.3 | `G10-B13-QUARTILES` | Trên dãy thô, dùng đúng quy ước chia nửa mẫu của SGK KNTT. Với dãy lẻ, tách phần tử trung vị ra rồi mới lấy \(Q_1,Q_3\) từ hai nửa; với dãy … | 2 (ví dụ `THPT-G10-B13-P02`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.3 |
| `TOPIC-STAT-M04` / 1.4 | `G10-B13-INTERPRETATION` | Nếu hầu hết thu nhập khoảng 5 nhưng một giá trị là 50, số trung bình bị kéo lên, còn trung vị vẫn mô tả người ở giữa. Không có một số đặc tr… | 2 (ví dụ `THPT-G10-B13-P04`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.4 |
| `TOPIC-STAT-M04` / 1.4 | `G10-B14-RANGE_IQR` | Khoảng biến thiên chỉ dùng hai cực trị nên nhạy với một số rất lớn, còn IQR dùng \(Q_3-Q_1\) để đo độ trải trung tâm. Khi hai mẫu cùng trung… | 2 (ví dụ `THPT-G10-B14-C01`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.4 |
| `TOPIC-STAT-M04` / 1.4 | `G10-B14-OUTLIERS` | Hàng rào \(Q_1-1{,}5IQR\) và \(Q_3+1{,}5IQR\) là quy tắc **phát hiện điểm đáng kiểm tra**. Một điểm vượt hàng rào có thể là quan sát hợp lệ.… | 2 (ví dụ `THPT-G10-B14-P03`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.4 |
| `TOPIC-STAT-M05` / 1.5 | `G10-B14-VARIANCE` | Bình phương sai lệch giúp các độ lệch âm/dương không triệt tiêu. Theo phương sai mô tả SGK, chia **cho \(n\)** chứ không tự đổi sang \(n-1\)… | 3 (ví dụ `THPT-G10-B14-C02`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.5 |
| `TOPIC-STAT-M05` / 1.5 | `G10-B14-STDDEV` | Độ lệch chuẩn là căn bậc hai của phương sai, giúp thước đo trở lại cùng **đơn vị** với dữ liệu. Nếu số đo tính bằng cm, \(s\) tính cm nhưng … | 2 (ví dụ `THPT-G10-B14-P02`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.5 |
| `TOPIC-STAT-M05` / 1.5 | `G10-B14-COMPARISON` | Hai dãy có cùng số trung bình không nhất thiết phân tán như nhau. Với A=3,4,5 và B=1,4,7, trung bình đều là 4, nhưng B biến động mạnh hơn. H… | 2 (ví dụ `THPT-G10-B14-P04`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 1.5 |
| `TOPIC-STAT-M06` / 2.1 | `G11-B08-GROUPED-DEFINITION` | Bảng ghép nhóm thay các số đo riêng lẻ bằng số phần tử nằm trong các khoảng. Được lợi khả năng đọc tổng quan nhưng **mất độ chính xác từng c… | 2 (ví dụ `THPT-G11-B08-C01`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.1 |
| `TOPIC-STAT-M06` / 2.1 | `G11-B08-CLASS-BOUNDARIES` | Trong ký hiệu [10,20), 10 được lấy nhưng 20 không; số 20 chuyển sang [20,30). Điều này bảo đảm một điểm biên không bị đếm hai lần. Trước khi… | 2 (ví dụ `THPT-G11-B08-C02`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.1 |
| `TOPIC-STAT-M06` / 2.1 | `G11-B08-GROUP-WIDTH` | Độ rộng nhóm \(h=b-a\) phải dương. Nhóm [0,10) có độ rộng 10, khác nhóm [10,30) rộng 20. Với độ rộng không đều, chỉ so chiều cao cột tần số … | 2 (ví dụ `THPT-G11-B08-C03`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.1 |
| `TOPIC-STAT-M06` / 2.1 | `G11-B08-FREQUENCY-TABLE` | Mỗi quan sát được gán đúng **một** khoảng, rồi đếm tần số. Tổng \(\sum f_i\) phải bằng số quan sát gốc \(n\); nếu thiếu hoặc dư, kiểm ngay c… | 4 (ví dụ `THPT-G11-B08-C04`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.1 |
| `TOPIC-STAT-M06` / 2.1 | `G11-B08-INTERPRETATION` | Tần số 8 trên tổng 20 nghĩa là 40% mẫu nằm trong khoảng đó. Điều này **không** cho biết bao nhiêu người đúng bằng trung điểm, và cũng không … | 5 (ví dụ `THPT-G11-B08-C05`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.1 |
| `TOPIC-STAT-M07` / 2.2 | `G11-B09-REPRESENTATIVE` | Trung điểm của khoảng \([10,20)\) là \(15\), được dùng thay thế khi chỉ còn số nhóm. Nó đại diện cho phép **ước lượng**, không phải số đo gố… | 2 (ví dụ `THPT-G11-B09-C01`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.2 |
| `TOPIC-STAT-M07` / 2.2 | `G11-B09-GROUPED-MEAN` | Số trung bình ghép nhóm dùng \(\sum f_ic_i/n\) vì nhóm nhiều quan sát phải có trọng số lớn hơn. Nếu nhóm 1 có tần số 9 và nhóm 2 là 1, trung… | 3 (ví dụ `THPT-G11-B09-C02`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.2 |
| `TOPIC-STAT-M07` / 2.2 | `G11-B09-CUMULATIVE` | Tần số tích lũy nối lần lượt các nhóm từ trái sang phải; nhóm chứa vị trí \(p\) là nhóm đầu tiên có tần số tích lũy đạt tới hoặc vượt \(p\) … | 2 (ví dụ `THPT-G11-B09-C03`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.2 |
| `TOPIC-STAT-M08` / 2.3 | `G11-B09-GROUPED-MEDIAN` | Trung vị ghép nhóm là **ước lượng**: đánh dấu vị trí \(n/2\), tìm nhóm dựa tích lũy, rồi nội suy từ cận trái \(L\) với tần số nhóm \(f>0\). … | 4 (ví dụ `THPT-G11-B09-C04`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.3 |
| `TOPIC-STAT-M08` / 2.3 | `G11-B09-GROUPED-QUARTILES` | Với \(Q_1,Q_3\), thay vị trí \(p\) bằng \(n/4\) hoặc \(3n/4\) trong quy tắc nội suy nhóm. Hai phân vị có thể nằm trong hai nhóm khác nhau; p… | 2 (ví dụ `THPT-G11-B09-P03`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.3 |
| `TOPIC-STAT-M09` / 2.4 | `G11-B09-GROUPED-MODE` | Nhóm mốt có tần số lớn nhất khi **các khoảng cùng độ rộng**. Sau khi xác định nhóm, dùng tần số nhóm trước/nhóm sau để nội suy vị trí mốt; đ… | 2 (ví dụ `THPT-G11-B09-P04`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.4 |
| `TOPIC-STAT-M09` / 2.4 | `G11-B09-MODE-CONDITIONS` | Nếu nhóm cao nhất nằm ở biên, nhiều nhóm cùng cao nhất hoặc độ rộng nhóm khác nhau, không thế chỗ điều kiện bằng thói quen máy móc. Với nhóm… | 2 (ví dụ `THPT-G11-B09-C05`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.4 |
| `TOPIC-STAT-M09` / 2.4 | `G11-B09-INTERPRETATION` | Từ bảng nhóm, trung bình, trung vị, tứ phân vị và mốt đều được suy qua đại diện/nội suy, nên chỉ báo **ước lượng**. Không suy kết quả chính … | 2 (ví dụ `THPT-G11-B09-P10`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 2.4 |
| `TOPIC-STAT-M10` / 3.1 | `G12-CHIII-B09-O01` | Trước khi tính độ phân tán, đọc xem bảng là số liệu ghép nhóm với tần số hay dữ liệu thô. Phải kiểm tổng tần số, nhóm cực biên có tần số dươ… | 4 (ví dụ `THPT-G12-B09-C01`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.1 |
| `TOPIC-STAT-M10` / 3.1 | `G12-CHIII-B09-O02` | Khoảng biến thiên ghép nhóm dựa cận thấp nhất và cận cao nhất của nhóm có số liệu. Vì không biết giá trị thực trong các nhóm, kết quả mô tả … | 4 (ví dụ `THPT-G12-B09-C02`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.1 |
| `TOPIC-STAT-M10` / 3.1 | `G12-CHIII-B09-O03` | Chỉ một nhóm cực biên có vài quan sát cũng có thể khiến độ phủ nhóm rất rộng. Khi so sánh, thước đo R nhạy với cực trị, nên cần xem thêm IQR… | 4 (ví dụ `THPT-G12-B09-C03`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.1 |
| `TOPIC-STAT-M11` / 3.2 | `G12-CHIII-B09-O04` | Để tìm nhóm chứa phân vị, xây tần số tích lũy trước rồi đánh dấu hai vị trí \(n/4\) và \(3n/4\). Khi vị trí đúng ở ranh tích lũy, dùng quy ư… | 4 (ví dụ `THPT-G12-B09-C04`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.2 |
| `TOPIC-STAT-M11` / 3.2 | `G12-CHIII-B09-O05` | Sau khi tìm \(Q_1,Q_3\) từ bảng nhóm, lấy \(IQR_g=Q_3-Q_1\). Đó là **ước lượng** mức trải của 50% dữ liệu trung tâm, không phải IQR chính xá… | 4 (ví dụ `THPT-G12-B09-C05`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.2 |
| `TOPIC-STAT-M11` / 3.2 | `G12-CHIII-B09-O06` | Khi so độ ổn định hai mẫu, R cho biết độ phủ từ cực thấp đến cực cao còn IQR mô tả phần giữa. Nêu rõ thước đo chọn theo mục tiêu: tìm thay đ… | 4 (ví dụ `THPT-G12-B09-C06`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.2 |
| `TOPIC-STAT-M12` / 3.3 | `G12-CHIII-B10-O01` | Muốn ước lượng trung bình ghép nhóm, sử dụng trung điểm \(c_i\) của từng khoảng và trọng số \(f_i\). Nếu có nhóm không quan sát nào \(f_i=0\… | 4 (ví dụ `THPT-G12-B10-C01`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.3 |
| `TOPIC-STAT-M12` / 3.3 | `G12-CHIII-B10-O02` | Phương sai là trung bình **bình phương** khoảng cách đến giá trị trung bình, nên không âm. Với bảng nhóm, dùng trung điểm thay số liệu gốc đ… | 4 (ví dụ `THPT-G12-B10-C02`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.3 |
| `TOPIC-STAT-M12` / 3.3 | `G12-CHIII-B10-O03` | Có hai cách kiểm chéo: \(\sum f_i(c_i-\bar x_g)^2/n\) và \(\sum f_i c_i^2/n-\bar x_g^2\). Hai cách phải bằng nhau (sai khác nhỏ khi làm tròn… | 4 (ví dụ `THPT-G12-B10-C03`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.3 |
| `TOPIC-STAT-M12` / 3.3 | `G12-CHIII-B10-O04` | Độ lệch chuẩn là căn của phương sai ước lượng, giúp diễn giải theo đơn vị **gốc**. Phương sai dữ liệu tính bằng phút có đơn vị phút²; độ lệc… | 4 (ví dụ `THPT-G12-B10-C04`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.3 |
| `TOPIC-STAT-M13` / 3.4 | `G12-CHIII-B10-O05` | So sánh hai mẫu có cùng thang đo bằng \(s_g\) hoặc \(s_g^2\). Số nhỏ hơn phản ánh mẫu tập trung hơn quanh trung bình theo mô hình nhóm, **kh… | 4 (ví dụ `THPT-G12-B10-C05`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.4 |
| `TOPIC-STAT-M13` / 3.4 | `G12-CHIII-B10-O06` | Thống kê mô tả chỉ mô tả dữ liệu đã quan sát, không chứng minh nguyên nhân hoặc rủi ro tương lai. Khi cần khuyến nghị, nêu giả định về mẫu, … | 4 (ví dụ `THPT-G12-B10-C06`) | Ví dụ/Vận dụng/Đối chiếu + D6: kiểm tại mục 3.4 |

**Phép thử:** Mỗi mục được đọc như người học; khung toán có điều kiện, giải ví dụ và một câu Vận dụng *khác* ví dụ. 39 outcome đều có diễn giải riêng, không chỉ heading/id; trong phần Practice có câu hỏi cụ thể theo mỗi outcome qua 2–5 câu. Nếu sai, có dòng “Nếu còn vướng” theo đúng mục, không dẫn học sinh sang SGK bắt buộc. 13 prompt khám phá mở câu hỏi trước công thức, không sao chép nhãn kiểm toán thành heading cấp 5.

## C. Toán học — thử thực tính, không thay bằng lint

1. 1.1 sai số: 0.02 — PASS (đối chiếu 0.02)
2. 1.1 phần trăm: 0.206185567 — PASS (đối chiếu 0.206185567)
3. 1.2 trung bình: 4 — PASS (đối chiếu 4)
4. 1.3 trung vị: 7 — PASS (đối chiếu 7)
5. 1.4 hàng rào: 13 — PASS (đối chiếu 13)
6. 1.5 phương sai A: 0.6666666667 — PASS (đối chiếu 0.6666666667)
7. 1.5 phương sai B: 6 — PASS (đối chiếu 6)
8. 2.1 tần số biên: 5 — PASS (đối chiếu 5)
9. 2.2 trung bình nhóm: 15 — PASS (đối chiếu 15)
10. 2.3 trung vị nhóm: 20 — PASS (đối chiếu 20)
11. 2.3 Q1: 10 — PASS (đối chiếu 10)
12. 2.3 Q3: 25 — PASS (đối chiếu 25)
13. 2.4 mốt: 16 — PASS (đối chiếu 16)
14. 3.1 khoảng phủ: 30 — PASS (đối chiếu 30)
15. 3.2 Q1: 11 — PASS (đối chiếu 11)
16. 3.2 Q3: 21.6666666667 — PASS (đối chiếu 21.6666666667)
17. 3.2 IQR: 10.6666666667 — PASS (đối chiếu 10.6666666667)
18. 3.3 phương sai: 50 — PASS (đối chiếu 50)
19. 3.3 độ lệch chuẩn: 7.0710678119 — PASS (đối chiếu 7.0710678119)
20. 3.4 var A: 33.3333333333 — PASS (đối chiếu 33.3333333333)
21. 3.4 var B: 66.6666666667 — PASS (đối chiếu 66.6666666667)

- Trường hợp biên quan trọng: mốt nhóm đầu theo quy ước f_- =0 cho Mo≈120/17≈7,06; nhóm không đều 6/5=1,2 so 12/15=0,8, không áp công thức mốt nhóm bằng nhau; nhiều nhóm cực đại không tự chọn duy nhất. Sai số tương đối dùng số gần đúng a≠0; tứ phân vị thô và nội suy nhóm không đánh đồng; phương sai chia n và giữ đúng đơn vị; ngoại lệ dùng hàng rào nghiêm ngặt, không xóa quan sát.
- 114 practice display **không biên soạn lại**: từng source ID+Git blob, stem, solution và options giữ nguyên theo R05 QA và R06 xác nhận byte-identical *toàn bộ* section Practice từ R05; 19/19 Written rubric phục hồi từ canonical. Giá trị source Academic/PED đã review G11/G12 giữ đúng các component bất biến, không suy PASS sang đoạn prose R06 nếu chưa được tự kiểm (đoạn này đã tự kiểm như bảng 39 rows).
- Hai SVG gốc đã đọc title/desc/data: biểu đồ nhóm tần số 4,6,8,2/tích lũy 4,10,18,20; boxplot mẫu 1,2,2,4,5,8,30 với Q1=2, Me=4,Q3=8/IQR=6, hàng rào trên17, outlier30. Cả hai đặt cạnh nội dung cần xem và có chỉ dẫn đọc. Không có đáp án Vận dụng bị lộ từ hai hình theo câu đã dùng.

## D. Checklist AUTHORING Chuyên đề 13 mục đã duyệt (Issue #864)

| Mục | Kiểm chứng kết luận |
|---|---|
| 01 Kiến trúc ba phần | Có Knowledge, Practice 114 stem/solution và Self-check 9 prompt thực sự; no Topic Core |
| 02 Mục đánh số | 1.1–3.4 theo mảng toán, không có 1.1.1/1.1.2 |
| 03 Khám phá | 13 câu hỏi dẫn và ngữ cảnh tiền đề/liên kết |
| 04 Khung nội dung | Định nghĩa/công thức/điều kiện đặt sau bản chất và trước Ví dụ |
| 05 Kiểm toán học | 21 phép tính độc lập, 114 nguồn canonical giữ nguyên |
| 06 Ví dụ | 13 Đề bài tự đủ và Lời giải có suy luận, không lộ ID |
| 07 Hình | 2 SVG đã kiểm toán, gần nội dung và alt/desc |
| 08 Vận dụng | 13 câu tự làm, 13 Đối chiếu tự mở, D6 sau đáp án |
| 09 Luyện tập | 114 stem/solution và 19 rubric, mapping duy nhất theo blob |
| 10 Tự kiểm tra | 9 câu public; demo offline gated sau Final Submit; không RD1/Mastery |
| 11 Ngôn ngữ/MathJax | Đã sửa 22 biểu thức thô/ký tự điều khiển, inline \(\) 2 chiều cân, display \[\] cân; no Mxx/O_ID kỹ thuật render |
| 12 SGK cuối bài | Duy nhất một dòng nguồn SGK Toán 10–12 KNTT, nguồn kỹ thuật nằm ở receipt |
| 13 Kiểm ngược lỗi cũ | Kiểm 1.1.1, nhãn checklist, sai source G11, thiếu rubric G12, 114 empty practice, leak tự kiểm/Final Submit; đã sửa và log đúng source SHA |

## E. Q01–Q18/A1–A7 quyết định AUTHORING

| Q | Academic/PED/source evidence |
|---|---|
| Q01 | SGK KNTT G10/11/12 Core theo receipt gốc; metadata reviewer R2 đã phân biệt rõ, không sai bài |
| Q02 | 39/39 outcome G10(14), G11(13), G12(12) |
| Q03–Q04 | Khung lý thuyết đủ điều kiện, 13 Ví dụ độc lập và lý do chọn cách |
| Q05–Q06 | 114 public câu/solution, 19 Written rubric, ít nhất hai dạng-câu mỗi outcome theo index |
| Q07–Q08 | Hai SVG, ứng dụng và remedial đúng bài |
| Q09–Q14 | WHY/bridge/meaning-first, câu khám phá, tự thử và D6 |
| Q15 | 114 item_id canonical, 114 display-only projection, 0 duplicate registry ID |
| Q16 | Chỉ public self-check no Mastery; protected RD1 không public; pre-Final Submit không lộ trong demo UI |
| Q17 | Ba trang học độc lập, không cần Topic/SGK khác mới làm bài |
| Q18 | Signed self-QA R06 blob, một receipt, V2/ready/REGISTER hoàn tất sau khi tạo các artifact cùng pass |

**A1–A7:** A1 đúng S1 scope/source và page receipt đã có; A2=39 outcome, học liệu liên tục; A3=AUTHOR_SELF_VERIFIED đúng snapshot; A4=114 item maps một canon; A5=D1–D6/PED1–6 theo bảng; A6=delta R05→R06 source QA+22 math expression fixes, no canonical delta; A7=0 private RD1 import, public client selfcheck NO_MASTERY.

**LIMITATION:** AP1–AP5/R1–R5/P1–P2 browser/device/website và owner merge/deploy hoàn toàn chưa xét, không gọi prototype là runtime. Câu hỏi công khai do học sinh đã xem không trở thành kiểm tra độc lập. Historical R01 READY chỉ đúng blob R01, không được tráo với R06.
