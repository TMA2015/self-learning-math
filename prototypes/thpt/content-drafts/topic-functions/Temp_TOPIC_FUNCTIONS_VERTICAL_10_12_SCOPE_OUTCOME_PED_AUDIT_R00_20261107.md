# AUTHORING — Thí điểm Chuyên đề "Hàm số và đồ thị" 10–12: phạm vi, outcome và kiểm toán sư phạm R00

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-VERTICAL-PILOT-PREP-R00-20261107  
**LANE:** AUTHORING · **STATE:** PREPARATION / NO ACADEMIC CLEARANCE FOR NEW VERTICAL CONTENT  
**STANDARD_ID:** SLM-THPT-QUALITY-ONE · **EFFECTIVE_VERSION:** 1.2.0 · **Q:** Q01–Q18 (ONE STANDARD)  
**OWNER DECISION:** 07/11/2026 — kết thúc công việc AUTHORING SGK 10–12; chỉ mở chuẩn bị/thí điểm đúng một Chuyên đề, ưu tiên dùng Hàm số và đồ thị đã có. Các việc còn lại của SGK thuộc RELEASE.  
**NO_SITE_CHANGE:** YES · **NO_MERGE_DEPLOY:** YES · **NO_MASTERY:** YES · **NO_PRIVATE_RD1_IN_PUBLIC_GIT:** YES  
**PURPOSE:** Thiết kế mạch kiến thức thực sự độc lập và dễ tự học, KHÔNG dựng cấu trúc SGK theo bài/chương, không ban hành quy chuẩn thứ hai và không buộc mọi mảng theo một mẫu trình bày.

## 1. Nguồn và giới hạn chứng cứ

- **Quy phạm:** `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md` trên main Git blob `2d7a3d951b4b2968376ab5b0a6e989a7e6cd8b4e` (nội dung v1.2.0), đặc biệt Q03–Q14, Q15–Q18 và phần II-B "gọn nhưng không nén". **Một Q01–Q18**, không thêm tiêu chí mới.
- **Kiến trúc:** `prototypes/thpt/THPT_DUAL_COMPLETE_PATHS_SHARED_ITEMS_OWNER_CONTRACT_v2.0.md`, main blob `a8d6b57e26fff7fabef95c63a80e76aa243eb114`; đúng **Kiến thức / Luyện tập / Tự kiểm tra**, Adaptive Knowledge Tabs v2 một hoặc tối đa hai cấp, không trang Core riêng. Source 08/06/07 tiếp tục hiệu lực.
- **Bản G10 đã review:** AUTHORING Draft #672, `THPT_G10_TOPIC_FUNCTIONS_B15_B16_COMPLETE_AUTHORING_R01_20261031.md`, blob `57eaf0141a5db9bfba91f0e6c863fc7dcc638068`; 10 outcome G10, 8 ví dụ, 6 Topic Practice mới, 4 Written và 4 HELP reused, 12 private RD1. Owner-pasted NotebookLM summary receipt blob `95e34644c4520adf748cfe3118d8726a5202e3e3`: Academic PASS/D1–D6 10/10 outcomes, 6/6 practice, 12/12 private candidates, P0/P1/P2 0; reviewer dùng **5 Permanent Sources v2.0** tại 31/10, report đầy đủ nguyên bản không có trên Git. **Không suy v2.1 PED PASS, không suy vượt B15–B16.**
- **Website pilot trên main (KHÔNG là nguồn học liệu FULL):** `chuyen-de/ham-so/kien-thuc.md` blob `5e555b7e2a9e8e53ce6ad510bc1da1982d0219b0` có `PILOT_PARTIAL_G10`; `luyen-tap.md` blob `36b86700b51bc080c9535ed3ba401109fbd1d31d`; `tu-kiem-tra.md` blob `47519612d1dac6dd9ed6213031677297c58e0950`, `TECHNICAL_DEMO_ONLY` hai câu, `mastery_credit:false`.
- **Đối chiếu S1 cập nhật trực tiếp:** Bốn PDF SGK KNTT G10 T2/G11 T1/G11 T2/G12 T1 đã được tải, SHA256 thực tế, xem ảnh mục lục và trang mở bài; có biên bản trong `Temp_TOPIC_FUNCTIONS_S1_DIRECT_PDF_VISUAL_RECEIPT_R01_20261107.md` với offset trang PDF và nguồn theo Bài/printed page. **CHỈ** phạm vi/mốc nguồn đã được xác minh; chưa coi đã đọc sâu toàn bộ các trang bài hoặc SBT. Trước full Academic/PED review phải kiểm đủ S1 từng outcome và ma trận D1–D6, không suy từ mục lục.
- **Không lấy SGK web page làm nội dung bắt học sinh nhảy sang đọc:** chỉ dùng như **chứng cứ nội bộ** để tạo Topic knowledge độc lập và canonical placement dùng chung.

## 2. Ranh giới đề tài — không gom máy móc tất cả bài SGK có chữ "hàm số"

**Câu hỏi lớn của Chuyên đề:** "Khi một đại lượng thay đổi theo đại lượng khác, làm thế nào biểu diễn, đọc, dự đoán sự thay đổi, phát hiện giới hạn và quyết định tối ưu?" Chuyên đề đi theo **mạch ý nghĩa và sự phát triển công cụ**, không theo thứ tự chương SGK.

- **Thuộc mạch nền tảng của thí điểm:** quy tắc đầu vào/đầu ra; miền và tập giá trị; cách đọc bảng/đồ thị; so sánh tăng giảm; mô hình từng đoạn; parabol, đỉnh, giao trục, miền thực tế; mô tả họ đồ thị tuần hoàn và tăng trưởng; hành vi gần điểm (giới hạn/liên tục); thay đổi tức thời (đạo hàm); biến thiên, cực trị, tiệm cận, khảo sát và tối ưu.
- **Các họ hàm đặc biệt** (sin/cos/tan/cot, mũ/log) cần giải thích điều kiện, hình dáng, chu kỳ/chiều biến thiên **ngay trong Chuyên đề** nếu xuất hiện. Không ép học sinh học toàn bộ kỹ thuật giải phương trình lượng giác hay phương trình mũ/lôgarit ở đây nếu thuộc Chuyên đề khác. Liên kết chéo chỉ để mở rộng/ôn tự chọn.
- **Không đồng nhất** hàm số với dãy số; giới hạn dãy số G11 B15 là cầu nối tùy nhu cầu, không biến mọi kết quả về cấp số thành mảng bắt buộc. Đạo hàm cấp hai (G11 B33) cần ý nghĩa khi xét chuyển động/độ cong, không biến toàn Chuyên đề thành giáo trình cơ học.
- **Không tự mở rộng** G10 B17 dấu tam thức, B18 phương trình quy về bậc hai, G12 tích phân (ChIV) thành các mảng bắt buộc chỉ vì có dùng hàm số. Dùng những kết quả thật sự cần thiết tại chỗ, dẫn khác nếu tự chọn.
- **Phạm vi phát hành có thể cắt theo mảng** nhưng không gọi Topic FULL/PASS nếu phần quảng bá "10–12" chưa đủ kiến thức, luyện tập, written, D6 và Topic Readiness riêng.

## 3. Bản đồ mạch kiến thức — module là cấu trúc nội dung, KHÔNG là chương SGK/luồng tab bắt buộc

| Mạch | Tên gợi ý hướng học sinh (được chỉnh theo ngữ nghĩa khi biên soạn) | Tại sao cần mạch này / câu hỏi dẫn | Nguồn tra cứu S1 | Điều kiện tự đủ |
|---|---|---|---|---|
| M1 | Khi một lượng phụ thuộc vào một lượng khác | Mỗi đầu vào cho kết quả nào? Khi nào đó là hàm số? | G10 B15 | Quy tắc một giá trị; tập xác định/tập giá trị, điều kiện căn/mẫu và tình huống |
| M2 | Đọc được câu chuyện từ bảng và đồ thị | Đồ thị nói điều gì *có chứng cứ*? Cùng hình có thể diễn giải sai ra sao? | G10 B15; các ví dụ G10 B16 | Điểm trên đồ thị, hướng tăng/giảm trên khoảng, miền/đơn vị, hàm từng đoạn |
| M3 | Vì sao parabol có một đỉnh? | Dự đoán chỗ tăng/giảm và tối ưu, kể cả trên đoạn có giới hạn | G10 B16 | Dạng đỉnh, đồ thị, giao trục, điều kiện Δ và miền hạn chế |
| M4 | Những kiểu thay đổi không giống parabol | Vì sao có hiện tượng lặp theo chu kỳ hoặc tăng theo tỉ lệ? | G11 B03, B20; cầu nối B01/B18/B19 khi cần | Khái niệm/điều kiện/range/đồ thị của hàm lượng giác và mũ/log đủ để **đọc**; kỹ thuật chuyên sâu không bị kéo vào chỉ vì tên giống |
| M5 | Giá trị khi tiến gần một điểm và tính liền mạch | Nếu tại x=a không tính được thì lân cận có thể dự đoán điều gì? | G11 B16–B17; cầu nối G11 B15 nếu hữu ích | Giới hạn hai bên, một bên, vô cực ở phạm vi thích hợp; f(a) khác giới hạn; liên tục và điều kiện |
| M6 | Đo độ dốc và tốc độ thay đổi tức thời | Từ thay đổi trung bình, vì sao cần một thước đo tại đúng một điểm? | G11 B31–B33 | Thương sai phân→giới hạn→đạo hàm; quy tắc và điều kiện; tiếp tuyến, dấu/đơn vị; đạo hàm cấp hai đúng vai trò |
| M7 | Từ dấu đạo hàm đến bức tranh toàn đồ thị | Tìm nơi tăng/giảm, cực trị, tiệm cận và lời giải tối ưu mà không suy từ một con số | G12 B01–B05 | Giải thích dấu đạo hàm; phân biệt cực trị với max/min; giới hạn/tiệm cận; đồ thị tổng hợp; miền khả thi và xác minh kết quả |

**Quan hệ tiền đề (học sinh có thể đi liên tục ngay trong nhánh Topic):** M1 → M2 → M3; M2 → M4; M2/M4 → M5 → M6 → M7; M3 và M7 gặp nhau ở bài toán tối ưu. Đây là **lộ trình hiểu**; các ô/tab tùy vào độ dài và bản chất, không cứng nhắc 7 tab và không tạo tab cấp ba.

**Điều hướng Golden:** đầu trang có tiêu đề, mục đích và bản đồ ngắn; chuyên đề nhiều mảng có thể dùng cấp 1 theo nhóm M1–M3 / M4–M5 / M6–M7 với nhãn dễ hiểu, cấp 2 theo quan sát / khái niệm / ví dụ hoặc theo tên logic riêng. Một mảng ít ý có thể dùng văn bản dọc. Không bắt module nào cũng có đúng số card/tiêu đề.

## 4. Ma trận outcome thí điểm — ID đề nghị CHƯA phải canonical/chưa review

Các ID `TOP-FUNC-PILOT-Oxx` chỉ là **khóa phác thảo để đối chiếu**, không phải item/scoring IDs và **không tự ghi vào Mastery**. Biên soạn FULL sau khi kiểm S1 có thể chia/tách/gộp, giữ ledger.

| Proposed outcome | Mạch | Học sinh có thể tự chứng minh điều gì? | Trạng thái nguồn / lỗ hổng |
|---|---|---|---|
| O01 | M1 | Nhận ra hàm số là ánh xạ đơn trị, không nhầm đơn ánh | G10 R01 TOP-O01 PASS đúng source v2.0; cần biên tập lời dẫn mới Delta C |
| O02 | M1 | Xác định miền/tập giá trị và điều kiện mô hình | G10 R01 TOP-O02 PASS; cần nhấn miền thực tế |
| O03 | M2 | Đọc điểm/miền, phân biệt dữ liệu nhìn thấy và suy đoán ngoài miền | G10 R01 TOP-O03 PASS; website pilot còn quá ngắn |
| O04 | M2 | Giải thích tăng/giảm trên khoảng đúng | G10 R01 TOP-O04 PASS; cần câu hỏi xem đồ thị thực |
| O05 | M2 | Tự sử dụng hàm từng đoạn có điều kiện đúng tại điểm nối | G10 R01 TOP-O05 PASS; cần luyện contextual không ép SGK |
| O06 | M3 | Hiểu ý nghĩa hệ số a≠0, dạng đỉnh và vì sao có đỉnh | G10 R01 TOP-O06/O07 PASS; website công thức-first |
| O07 | M3 | Tự vẽ/đọc parabol, giao trục theo Δ và đối xứng | G10 R01 TOP-O08 PASS; D5 phải mô tả hình tại chỗ |
| O08 | M3 | Tối ưu parabol trên miền ràng buộc, kết luận đúng đơn vị | G10 R01 TOP-O09/O10 PASS; cần Tự thử trước công thức |
| O09 | M4 | Xác định chẵn/lẻ bằng \(f(-x)\) và miền đối xứng; giải thích sin/cos, tính đối xứng, tuần hoàn, miền/đồ thị/chu kỳ và khoảng đơn điệu | G11 B03 S1 printed p22–30, PDF p23–31 trực tiếp xác minh phạm vi; **Topic NOT REVIEWED** |
| O10 | M4 | Đọc đồ thị tan/cot: miền loại, tiệm cận, chu kỳ \(\pi\), khoảng tăng/giảm; phân biệt đồ thị tuần hoàn với đối xứng chẵn/lẻ | G11 B03 S1 printed p22–30, PDF p23–31; **Topic NOT REVIEWED** |
| O11 | M4 | Phân biệt x² với a^x, mô tả dạng và miền của a^x/log_a x | G11 B20 SGK có nội dung; **Topic NOT REVIEWED** |
| O12 | M5 | Diễn giải giới hạn khi x→a khác giá trị f(a), đọc giới hạn trái/phải | G11 B16 SGK có nội dung; **Topic NOT REVIEWED** |
| O13 | M5 | Kiểm liên tục ở điểm và phân biệt lỗ đồ thị/nhảy/vô hạn | G11 B17 SGK có nội dung; **Topic NOT REVIEWED** |
| O14 | M5 | Dùng giới hạn trong việc dự đoán hành vi đồ thị/tiệm cận | G11 B16, G12 B03; **Topic NOT REVIEWED** |
| O15 | M6 | Hình thành đạo hàm từ thương sai phân, độ dốc và tốc độ theo đơn vị | G11 B31 SGK có nội dung; **Topic NOT REVIEWED** |
| O16 | M6 | Chọn quy tắc đạo hàm và kiểm điều kiện áp dụng | G11 B32 SGK có nội dung; **Topic NOT REVIEWED** |
| O17 | M6 | Phân biệt đạo hàm cấp hai với đạo hàm bậc nhất trong ngữ cảnh | G11 B33 SGK có nội dung; **Topic NOT REVIEWED** |
| O18 | M7 | Từ dấu đạo hàm kết luận khoảng tăng/giảm, cực trị đúng điều kiện | G12 B01 SGK có nội dung; **Topic NOT REVIEWED** |
| O19 | M7 | Phân biệt cực trị cục bộ với GTLN/GTNN trên miền xét | G12 B02; **Topic NOT REVIEWED** |
| O20 | M7 | Xét giới hạn, tiệm cận và dựng đồ thị có căn cứ | G12 B03–B04; **Topic NOT REVIEWED** |
| O21 | M7 | Mô hình hóa và tối ưu thực tế với điều kiện/đơn vị/giới hạn | G12 B05; **Topic NOT REVIEWED** |

**Ghi chú Q02:** Không lấy số 21/21 hoặc 10/10 làm kết luận độ sâu; đây mới là các dòng để kiểm chứng outcome. `TOPIC_G10_FOUNDATION_PASS` chỉ giữ đúng 10 outcome của R01; các O11+ không có verdict Topic riêng. R01 dùng mô tả D1 rất cô đọng, chưa có chuỗi "vì sao→quan sát→suy luận→công thức" theo v1.2 tại từng chỗ; đây là cải biên **Delta C**, không phải chỉnh CSS.

## 5. Audit GAP bản website pilot vs nguồn G10 R01 vs mục tiêu thí điểm

| Mục kiểm theo Q | Website pilot main | G10 R01 đã review | Việc cần làm trong Topic pilot |
|---|---|---|---|
| Q03/Q09–Q11 (D1/PED1–3) | Kiến thức mở bằng `y=ax²+bx+c`; chưa dạy tự đủ Hàm số B15 | 4 mảng D1, 10 outcome có verdict v2.0 | Chuyển sang mạch "đầu vào→biểu diễn→mô hình→đỉnh" bằng ngôn ngữ dễ hiểu; thêm cầu nối/giới hạn thực chất theo từng outcome |
| Q04/Q13 (D2/PED5) | Ví dụ một parabol, thiếu chọn phương pháp và phản ví dụ | 8 ví dụ có câu trả lời, nhiều đoạn còn ngắn | Diễn giải chọn phương pháp, điều kiện và cách kiểm; không nhân bản nếu nguyên ví dụ vẫn đạt |
| Q07/Q12 (D5/PED4) | Mô tả tính chất, rất ít hướng dẫn hình | Reuse B16 figure, nguồn đồ thị có khóa | Tại Topic phải trình bày/đọc hình trực tiếp; cross-link SGK chỉ **tùy chọn**, không bắt mở |
| Q14 (PED6) | Chưa có Tự thử ngay trước luyện | G10 R01 có 6 new Practice nhưng không đủ bằng chứng Tự thử theo phiên bản mới | Tạo hoạt động "dự đoán/giải thích trước" nhỏ và đối chiếu tùy chọn ngay trong Topic; không tính mastery |
| Q05/Q06/Q15 | Một demo và link sang Core SGK | 6 new Practice + SGK shared + Written, canonical IDs đúng | Placement Topic riêng **render ngay tại Topic**, không buộc học sinh rời nhánh; câu/solution/rubric chỉ 1 nguồn |
| Q08 (D6) | Lỗi thường gặp mô tả; thiếu tuyến chữa lỗ hổng tại chỗ | 4 HELP reusable | Hiện HELP trong Topic tại đúng vị trí, không bắt mở SGK để được chữa lỗi |
| Q16 | Demo 2 câu có Final Submit, no mastery | 12 private held-out candidate R01 chỉ cho B15–B16 | Đánh giá tổng Topic phải có scope+nguồn riêng; chưa đủ → không gọi `TOPIC_READINESS` thật |
| Q17/Q18 | Pilot Partial G10, không bao trùm 11–12 | R01 G10 Academic PASS v2.0 đúng snapshot | Xây FULL mạch theo từng outcome, review thêm Delta C và module mới dưới 5 Permanent v2.1, lock SHA, V2/manifest |

## 6. Cách viết và sắp xếp — diễn giải Q09–Q14 hiện có, KHÔNG tạo quy chuẩn mới

**Bài kiểm tra tự học đơn giản cho mỗi mảng, không áp bố cục máy móc:** Một bạn học từ số 0 có hiểu *vì sao cần* khái niệm? Có biết biến/các điều kiện từ đâu? Có giải thích bằng lời ý nghĩa trước công thức? Có thể tự thử một bước và tự đối chiếu? Có hiểu vì sao chọn một cách giải và khi nào không dùng? Có quay lại đúng chỗ nếu sai? Một mảng có thể cần đồ thị, mảng khác cần bảng hoặc tình huống. **Không quy định mỗi bài có 7 mục, 2 ví dụ hay 3 card.**

**Ngữ điệu thân thiện:** nói "x là số đầu vào mà em được chọn", rồi làm rõ "tập xác định" là tập giá trị đầu vào hợp lệ; giải thích ký hiệu đúng lúc, không gọi học sinh "đã biết từ lớp 11" rồi đẩy sang SGK. Mọi định nghĩa và điều kiện bắt buộc xuất hiện ở chính Topic. Ví dụ mẫu nên có "vì sao làm bước này", "em kiểm lại bằng cách nào" và một phản ví dụ chỉ khi hữu ích.

**Trang Kiến thức:** có mục đích và bản đồ ngắn luôn thấy; các mảng/tabs theo ngữ nghĩa thật, có thể gộp hai mạch nhỏ nếu liền nguyên nhân. Không bắt lặp cùng tên tab `Khái niệm/Tính chất/Ví dụ` ở mọi nhóm. Nếu tab quá dài, chia mảng theo ý nghĩa, không đẻ cấp tab thứ ba. Có thể giữ `Bản đồ / Kiến thức / Liên quan / Dạng bài / Lỗi sai` như các vùng, nhưng mỗi vùng thật sự hỗ trợ đọc; không buộc "dạng bài" phải là thư mục riêng độc lập với ví dụ của mảng.

**Trang Luyện tập:** nhóm theo **khái niệm→dạng tư duy→mức độ**, không theo B15/B16/B31 hay ngân hàng lớp. Thao tác được trên cùng hành trình Topic, có gợi ý tự chọn; D6 chỉ khi gặp nút thắt. Written/Anchor là một thư viện canonical dùng placement Topic, không sinh kho riêng.

**Trang Tự kiểm tra:** Topic scope độc lập với SGK chapter scope, không hint/AI/đáp án/đúng-sai/rubric trước Final Submit; không tái sử dụng câu đã xem làm bằng chứng độc lập không kiểm soát; RD1 kín không commit đề/lời giải lên GitHub công khai. Bản demo chỉ `CLIENT_SELF_CHECK_NO_MASTERY`.

## 7. Các cổng tiếp theo, đúng ranh giới AUTHORING / RELEASE

- **PREP R00 hiện tại:** bản đồ khái niệm và khoảng trống dựa trên GitHub locked source receipts; không đổi source đã PASS, không phát hành.
- **PILOT CONTENT R00:** dự thảo độc lập, sinh viên đọc ngay trong Topic, theo mạch M1→M7. Mỗi nội dung mới/viết lại theo Delta C, QA toán và S1, có `LESSON/OUTCOME/ITEM` map và D1–D6/PED; không tự PASS.
- **REVIEW:** NotebookLM đúng 5 Permanent THPT **v2.1**, SGK/SBT S1 gốc, file `Temp_*.md` thật và prompt 3–6 câu; review *phần Topic mới/đã diễn giải lại* theo outcome, không yêu cầu reviewer xem lại nguyên SGK bất biến.
- **AUTHORING READY:** khi Academic + PED PASS đúng blob, đủ Q01–Q18/A1–A7/V2 + một `ready/` + một REGISTER; nếu chưa đủ, ghi `BLOCKED_BY_AUTHORING` cụ thể.
- **RELEASE:** nhập source chính xác, AP1–AP5/R1–R5, Golden responsive, no leak/no Mastery, chủ dự án cho phép thì mới merge/deploy/P1/P2. AUTHORING không làm website.

**STATE:** `SGK_AUTHORING_CLOSED_BY_OWNER` · `TOPIC_PILOT_PREP_IN_PROGRESS` · `G10_HISTORIC_TOPIC_PASS_PRESERVED` · `NEW_VERTICAL_CONTENT_ACADEMIC_PENDING` · `TOPIC_FULL_CONTENT_READY=NO`.
