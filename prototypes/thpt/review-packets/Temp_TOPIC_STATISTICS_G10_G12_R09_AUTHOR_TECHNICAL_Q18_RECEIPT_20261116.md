<!-- TOP22_G10_B13_B14_S1_NOTES_DELTA_C_20261120 -->
## 20/11/2026 · SOURCE S1 ghi chú bổ sung B13/B14 (affected Delta C)

Cùng một nguồn `4ff6bfde83f55a1390661f11c71cc66873f3ecdb` đã bổ sung thêm hai mục nhỏ ở phần Knowledge để tránh bỏ sót phát biểu SGK: (i) **mốt của dữ liệu định tính** theo chú ý SGK Toán 10 T1 B13 trang in 81; (ii) công thức ghi chú SGK Toán 10 T1 B14 trang in 86: \(\hat s^2=\sum(x_i-\bar x)^2/(n-1)\), \(n>1\), được phân biệt tường minh với phương sai mô tả \(s^2=\sum(x_i-\bar x)^2/n\). Đây là hai **CHÚ Ý SGK**, không thay mục chính, không đổi câu hỏi/công thức đã có. Ví dụ định tính B có tần số 3/5, mẫu 3,4,5 cho \(s^2=2/3\), \(\hat s^2=1\). **7/7 math/scope case PASS**. Bản thảo, Ví dụ, Luyện tập, Tự kiểm tra, 114 canonical IDs, keys, rubric, SVG, Q16 giữ nguyên ngoài hai đoạn dẫn giải. `CONTENT_READY` tiếp tục theo owner-authorized affected author self-verification; không gọi là NotebookLM review độc lập mới.

---
<!-- TOPIC22_S1_G10_B13_MODE_EQUAL_FREQUENCY_DELTA_C_20261120 -->
## 20/11/2026 · Bổ sung/hiệu chỉnh quy ước MỐT SGK Toán 10 tập 1 Bài 13 — DELTA_C

**Đối chiếu trực tiếp:** SGK KNTT Toán 10 tập 1, Bài 13, trang in **81** (mục “3. Mốt”, nhận xét về tần số bằng nhau): “Khi các giá trị trong mẫu số liệu xuất hiện với tần số như nhau thì mẫu số liệu không có mốt.” Nguồn đọc: https://media.metaisach.com/2025/09/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-7ff1b316.pdf . Không lấy chứng cứ của SGK 11 mẫu ghép nhóm thay S1 lớp 10 thô.

**Đối tượng thiếu:** `G10-B13-MODE`, duy nhất `§1.2` Kiến thức bản thảo learner trước `4fd31e9669c5808106d12f6a49470a81303946a8` thiếu ngoại lệ **mọi tần số bằng nhau → không có mốt**; câu “khi hai giá trị cùng cao nhất thì hai mốt” không đủ điều kiện nếu chỉ có đúng hai giá trị với tần số ngang nhau.

**Đã bổ sung ngay vào canonical** sau `4ff6bfde83f55a1390661f11c71cc66873f3ecdb`: đúng ba dòng phần Knowledge (văn xuôi, khối ĐỊNH NGHĨA/CÔNG THỨC và đoạn outcome G10-B13-MODE) làm rõ quy ước; minh họa `1,2,3,4` không có mốt, `1,1,2,2,3` có hai mốt. Một giá trị phân biệt duy nhất lặp lại vẫn là mốt; quy tắc không có mốt áp khi **ít nhất hai giá trị phân biệt** cùng tần số. **Không sửa bất kỳ stem/key/rubric/placement/ITEM_ID/đồ thị/assessment nào**, nguồn Luyện tập/Tự kiểm tra byte-exact.

**AUTHOR_SELF_VERIFIED_AFFECTED_DELTA:** 6/6 phép kiểm bảng tần số (cả không có mốt, hai mốt, một mốt, dữ liệu một giá trị) PASS; 7/7 assertion phạm vi sửa (dòng ngoài scope, canonical ID, example counts, hai trường hợp minh họa, assessment text, no RD1) PASS. `DELTA_C_ACADEMIC_MATERIAL`, Q01+Q03+Q10+Q11 source-covered. **Không** tự gán verdict NotebookLM độc lập mới hoặc chứng thực hoàn thành kiểm toán đủ 22 chuyên đề. Giữ `CONTENT_READY` trong phạm vi owner-authorized source improvement and Q18 self-verification; NO RELEASE merge/deploy.

---
# CĐ22 · R09 source-equivalent AUTHOR technical Q18 receipt · original R07 mathematics preserved

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
PACKET_ID: THPT-TOPIC-STATISTICS-G10-G12-FULL-R09
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
SOURCE_PATH: prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R09_GLOBAL_PRACTICE_NUMBERING_20261116.md
SOURCE_BLOB: 155f14cc191800d52fce98b0f7df6ab30bb0faf4
PREVIOUS_R06_BLOB: 12f3af42c2e6b0f316355dcedfc34ec8b6136694
BASELINE_R05_BLOB: 0762cc67491965a4bab700aa1d33937aa3bf7cb6
ORIGINAL_R01_BLOB: 4f4dc4abcf671479fe0650595e9b67f745738b9a
SOURCE_INDEX_BLOB: 51a6e99587187838aea61c5c72108adae7874d1d
CANONICAL_PUBLIC_EXTENSION_BLOB: c222f9c8ef2c3b34caf4f6d6c33fa88f960471c3
SELF_CHECK_DEMO_BLOB: a2dc982d21e352d3ff9d175f19072a8f5cb3ee05
S1_RECEIPT: G10 T1 ChV B12–B14 (trang in 73–88); G11 T1 ChIII B08–B09 (58–68; B09 chứa mốt ghép nhóm); G12 T1 ChIII B09–B10 (75–84). SGK Kết nối tri thức S1, kế thừa snapshot gốc R01 + G11 R03 S1 receipt, không tuyên bố đã scan lại PDF trong lần này. Lời reviewer R2 ghi G11 ChV B14 trang 129–131 là SAI metadata: đúng KNTT B14 là Phép chiếu song song ChIV. Chênh lệch đó không thay phạm vi Core hay lời giải trên source; phân loại REFERENCE_METADATA_CORRECTION_NONBLOCKING, đính chính tại PR #812, không sửa lời reviewer gốc.
OUTCOME_AUDIT: 39/39 outcomes, 13 full knowledge units, each source outcome includes concept/conditions/method/limit and 2–5 original practice item references; see the 39-row audited table below.
MATH_VERIFICATION: 21/21 direct recomputations of R07 first-try boundary cases, 13 independent worked examples checked through source explanation; original 114 practice stems and solutions source-parity exact (27 G10,32 G11,48 G12,7 extension); source R01 maths audit G10 27/27+7/7 and exact old G11+G12 80/80 reviewed component fidelity preserved on unchanged blocks.
PED_VERIFICATION: Learner-first prose, 13 actual question-led Khám phá, 13 standalone Ví dụ/Đề bài/Lời giải, 13 Vận dụng with opt-in Đối chiếu and D6 self-remediation; 114 actual Practice questions/solutions and 19 Written rubrics; 9 public self-check prompts with proof-of-mechanism standalone demo. Do not claim UI/device/runtime PASS.
CANONICAL_Q15: 114 unique canonical item IDs, 39 primary outcomes, 114 display-only copies each tagged in non-rendered comment with original source blob and exact stem/solution, 6 MCQ options checked, 19/19 original Written rubric display; source bank is the four original immutable corpus files, not the display projection. Each outcome 2–5 public items; no duplicate canonical ID in source bank.
ASSESSMENT_Q16: Nine reused public questions, exposed only as CLIENT_SELF_CHECK_NO_MASTERY; demo requires all nine attempts before Final Submit reveals public solutions; no score, learner persistence, skill Mastery or official TOPIC_READINESS; no RD1 held-out stem/solution/rubric in public repository. Full browser/render and website Final Submit remain RELEASE QA, never claimed here.
P0: 0
P1: 0
P2: 1 (SGK PDF page-index not independently reopened in this round; reference metadata reviewer R2 corrected against original S1 receipt, not an academic blocker)
AUTHOR_SIGNOFF: AUTHORING tự kiểm và chịu trách nhiệm Academic+PED theo Q01–Q18/A1–A7 trên **duy nhất** R06 Git blob `e31771e0fb9347c8c242ec8ca9e8a91a1ab74ff6`; không mạo danh NotebookLM hoặc cấp website approval. Dạng tự kiểm công khai không cấp Readiness/Mastery.

## R09 exact source equivalence and technical item-preserving delta

ORIGINAL_R07_SOURCE_BLOB: e31771e0fb9347c8c242ec8ca9e8a91a1ab74ff6
ORIGINAL_R07_AUTHOR_Q18_BLOB: 40feca220c54fc0620ab113cc354e3d37a66088e
R09_SOURCE_BLOB: 4ff6bfde83f55a1390661f11c71cc66873f3ecdb
R09_A1_A7_PARITY_METADATA_PATH: prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R09_SOURCE_EQUIVALENCE_114_Q15_20261116.md
R09_A1_A7_PARITY_METADATA_BLOB: 4a519ff67d28ed3da93be87a8b630e42beb649f5
R09_DELTA_CLASS: DELTA_A_UI_AND_DELTA_B_SOURCE_EQUIVALENT
R09_Q15_AUDIT: 114/114 original source-owned student stem, choices, answers, full solutions/rubrics exact after stripping heading/labels, 114 unique original canonical IDs, 19 original Written rubrics unchanged. 39 outcomes, source register and item map unchanged, nine public selfcheck reuse placements not new canonical entries.
R09_PED_TECHNICAL: identical 13 Knowledge content lessons and their formal explanation, fully worked examples and Vận dụng; three Knowledge H2 groups / 13 H3 lessons, 3 Practice H2 groups and bold continuous "Bài luyện 1"→"Bài luyện 114" (no 114 H4 headings), nine existing public question-only Selfchecks. No altered source math or derived key.
R09_Q16: 0 private RD1 questions imported/public, public replay CLIENT_SELF_CHECK_NO_MASTERY, no official protected Readiness or Final Submit.
R09_REVIEW_SCOPE: R07 original source math checks and Q18 receipt remain valid only for immutable R07 source, this author technical source-equivalence is not independent NotebookLM Academic/PED PASS, and live website RELEASE AP/R/P is unverified.

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

## F. Delta R06 → R07 · chỉ sửa câu giao tiếp ở phần Tự kiểm tra

- **Lỗi hồi quy lọt sau Q18 R06:** đoạn đầu Tự kiểm tra R06 nói về `Final Submit`, “cơ chế mở kết quả”, trạng thái QA website; điều này vi phạm chính mục 11 checklist 13 yêu cầu. **Không được coi R06 hoàn hảo chỉ vì đã CONTENT_READY.**
- **Delta:** thay đúng một đoạn học sinh đọc bằng hướng dẫn tự làm đủ chín câu và đối chiếu sau khi hoàn thành. Phần Kiến thức và toàn bộ 114 đề/lời giải Luyện tập của R07 **byte-identical** với R06; chín đề Tự kiểm tra, ID reuse, thứ tự, SVG, công thức và một dòng nguồn không đổi. **DELTA_A_UI/editorial communication**, không thay math, outcome, câu, đáp án, lời giải hay rubric. Không reviewer mới vì không có academic delta.
- **Kiểm ngược:** R07 có 39 unique outcome tags, 13 mảng kiến thức, 13 Ví dụ–Đề bài–Lời giải, 13 Vận dụng/Đối chiếu, 114/114 canonical Practice câu+lời giải, 19 rubric, 9 selfcheck public questions. Riêng phần giới thiệu Tự kiểm tra không còn `Final Submit`, hướng dẫn website hoặc thuật ngữ Mastery. Public self-check không là readiness chính thức; phiếu HTML riêng vẫn là minh họa, không phải chức năng website đã chạy.
- **Chứng cứ theo source:** R06 học liệu `12f3af42c2e6b0f316355dcedfc34ec8b6136694`, R07 học liệu `e31771e0fb9347c8c242ec8ca9e8a91a1ab74ff6`; R06 Q18 receipt và handoff giữ nguyên lịch sử theo snapshot; một receipt R07 này là bản hiện hành, không đổi source canonical gốc. Thứ tự ưu tiên khi đọc Issue #865: trạng thái R07 mới nhất thay thế R06 về tài liệu học sinh, không sửa chứng cứ R06 lịch sử.


## R09 source-specific author technical signoff

AUTHOR_SIGNOFF: TOP22_R09_114_EXACT_ORIGINAL_ITEM_PROJECTIONS_19_WRITTEN_13_LESSONS_9_PUBLIC_SELF_CHECK_2_SVG_20261116
AUTHOR_SELF_QA_RECEIPT: This source-specific technical receipt binds R09 `4ff6bfde83f55a1390661f11c71cc66873f3ecdb`, A1–A7 `4a519ff67d28ed3da93be87a8b630e42beb649f5` and original unchanged R07 source; math/PED original assertions are historical R07 evidence, NOT a new independent NotebookLM review or website QA. No merge/deploy.

## 18/11/2026 — active in-place Q18/Q16 source equivalence

- **CURRENT_LEARNER_SOURCE_BLOB** `4ff6bfde83f55a1390661f11c71cc66873f3ecdb` on the existing unique R09 learner path; historical source `b5713f0c2a1aa6a9fa7a7d63f6e6878bdf8d338b` retains its original immutable Git snapshot and checks. Exact source diff has precisely two redundant standalone `**Đọc hình:**` headings removed and seven public Written self-comparison instruction lines rewritten; original scoring weights, criteria, mathematical solutions and answer keys remain unchanged.
- Seven notes now explicitly require **self-attempt before reveal** and say **not an official grade**; original had said no official self-grade/Mastery. Runtime Q16 stays unaffected: all **nine public Selfcheck** question-only placements retain `NO_MASTERY NOT_RD1`, the learner Markdown does not implement official Final Submit or write Mastery, no extra private RD1 material disclosed. This is scoped `DELTA_B_SOURCE_EQUIVALENT` verification of guidance semantics, not mathematical-material change.
- Verified complete **114 original Practice headings**, canonical display marker sequence, two SVG references, 9 public question-only Selfchecks, and answer disclosure count unchanged. Existing grouped-mode worked math and 21 direct recomputation checks remain source-equivalent on the unchanged math blocks. No new mathematical definitions, formulas, conditions, item answer/rubric changed.
- **PDF-index:** original reviewer R2 citation was a metadata error; correct G11 KNTT printed scope ChIII B08–B09 pp58–68 recorded by prior source receipt, without requiring an exclusive PDF offset to establish correct mathematics. Historical P2=1 is a nonblocking provenance note, not P0/P1, and **not** a reason to change the mathematics. No new independent NotebookLM full-Topic PASS claimed.


<!-- TOP22_OWNER_EDITORIAL_DELTA_A_20261119 -->
**Owner-approved DELTA_A_UI (19/11):** Bỏ chính xác 13 dòng tiêu đề phụ `**Khám phá kiến thức**` (mỗi lesson một lần) trong cùng sole learner canonical; **giữ nguyên toàn văn lời giải thích ngay sau nhãn, mọi định nghĩa, công thức, điều kiện, ví dụ, Vận dụng, Đối chiếu, 114 stems/solutions/rubrics, 9 public selfchecks, 2 SVG, Q15/16**. Baseline source `b875ca4e726ab14071f17a2d8a85d6950e3b4ba9` → source sau sửa `4ff6bfde83f55a1390661f11c71cc66873f3ecdb`. R09 academic/PED snapshot không bị hồi tố; Q18 tự xác minh tương đương trên scope nhãn. Không cần full NotebookLM review, không merge/deploy; tiếp tục STATE CONTENT_READY.


## 20/11/2026 — OWNER EDITORIAL ΔA · 14 formal boxes
- Current learner Git blob `dfe01e7dfcf554b11834ac0c93a5eaf2af7aa3eb` (prior `4ff6bfde83f55a1390661f11c71cc66873f3ecdb` historical). Parsed actual Knowledge source: 14/14 compound/SGK-meta labels normalized by meaning: definition, formula, property or concise knowledge-to-remember; no internal formula, theorem condition, example, item, answer, rubric or SVG altered.
- Reversible label-only diff; 13 thematic mathematical modules and three Topic pages unaffected. Q03/Q07/PED targeted author self-QA PASS; no full fresh NotebookLM or website AP claim.


## 20/11/2026 · Full S1 Knowledge CĐ22 G10/G11/G12 39 outcomes — AUTHOR SELF Q18
- One sole student source `155f14cc191800d52fce98b0f7df6ab30bb0faf4` vs preceding `dfe01e7dfcf554b11834ac0c93a5eaf2af7aa3eb`. Actual content inspection: 13 complete learner Knowledge lessons host original 39 SGK outcome references, prior 114 canonical Practice items and 19 Written, 9 public question-only selfchecks, 2 SVG. Primary scope G10 Tập 1 ChV B12–B14, G11 Tập 1 ChIII B08–B09 and G12 Tập 1 ChIII B09–B10, owner S1 source snapshot retained. Existing erroneous reviewer PDF page-index metadata P2 stays open; no fresh PDF re-render claim.
- Delta C: §1.1 difference between reported accuracy bound d and real |a−ā| with 12.5±0.1 cm sample; §1.5 algebraic descriptive n-divisor variance formula sum(x−mean)²/n=sum x²/n−mean², invariance under addition and scaling k² for variance; §2.1 unequal interval widths requiring density f_i/h_i for area-proportional histogram and not frequency as height; §2.2 same grouped frequencies [0,10):2,[10,20):2 can represent data with **true means 6 and14** but both grouped estimate 10; §2.3 when n/2 hits cumulative group boundary, left/right interpolation agree at 20, proper Q1=35/3 and Q3=26.25; §3.3 same grouped table can correspond to true variances 25 vs 41 while grouped variance estimate 25. Concept-first conditions, examples, limits, counterexamples and D6 repair are within prior Knowledge, no item/assessment rewrite.
- Arithmetic checks: reported error |12.47−12.5|=0.03, 0.03/12.5=0.0024; (2,4,6) mean4, s²=8/3 via both forms; unequal bins 10/10=20/20=1 density; D1(1,1,11,11) mean6 and D2(9,9,19,19) mean14, both grouped 2+2 and estimate10; f(4,6,8,2),n20 -> Me=20,Q1=10+(1/6)10=35/3,Q3=20+(5/8)10=26.25; D(1,9,11,19),mean10, s²=(81+1+1+81)/4=41. All mathematically consistent, examples with positive denominators and appropriate class interval conditions.
- Q15/Q16 source suffix `# Luyện tập` to end byte-identical; no change to 39 OUTCOME_REF, original 114 canonical SGK Practice, 19 Written rubrics, 9 public selfcheck no-Mastery, 2 SVG, public source-index/bank provenance and protected Final Submit/Skill Mastery. **P2:1 stays** — original SGK source page-index/reviewer metadata provenance not freshly rescanned; no new independent NotebookLM whole-Topic PASS, no website RELEASE/merge/deploy. Q01–Q18 single owner-effective v3.2.0, affected academic/PED AUTHOR_SELF_VERIFIED P0/P1=0.