# AUTHOR_SELF_QA_RECEIPT — Chuyên đề 2 Vectơ và phương pháp tọa độ · R03

**Vai trò:** AUTHORING; tự kiểm học thuật/sư phạm theo Q18 v3.0.1 trên bản R03, **không** tuyên bố NotebookLM đã review R03. Bản R02 và biên bản độc lập R02/RD1 là chứng cứ snapshot lịch sử được bảo toàn; R03 chỉ kế thừa phần toán được giữ nguyên, các biên tập mới được kiểm bởi tác giả.

PACKET_ID: THPT-TOPIC-VECTOR-COORDINATE-G10-G12-FULL-R03
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.1
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
SOURCE_PATH: prototypes/thpt/content-drafts/topic-vector-coordinate/Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R03_20261111.md
SOURCE_BLOB: b79c4c3e3a21c31a44a581dc5d5bd60f619ba207
BASELINE_R02_PATH: prototypes/thpt/content-drafts/topic-vector-coordinate/Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R02_20261108.md
BASELINE_R02_BLOB: 29669e6de80cba50a11bb8574220c6a19b4f7138
HISTORICAL_SAFE_REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/Temp_TOPIC_VECTOR_COORDINATE_R02_Q18_SAFE_NOTEBOOKLM_REVIEW_RECEIPT_R01_20261108.md
HISTORICAL_SAFE_REVIEW_RECEIPT_BLOB: 08a827a38f145a8932fd8dc8a1b565b35c122a19
S1_RECEIPT: SGK/SBT KNTT G10 T1 B07–B11; G10 T2 B19–B22; G11 T1 ChIV/T2 ChVII; G12 T1 B06–B08/T2 B14–B17 — nguồn in/PDF đã đối chiếu và reviewer nhận tại R02. Tác giả KHÔNG đọc lại mọi trang SGK/SBT scan trong riêng vòng chỉnh văn R03; không tạo claim S1 mới. Thiếu SBT G12 T2 trang in 25 được giữ đúng caveat, không phục dựng dữ liệu không thấy.
OUTCOME_AUDIT: 56/56 ID hợp lệ và có ít nhất một PUBLIC item ánh xạ theo bảng dưới, 7 phần trọn vẹn; nội dung toán gốc từ R02 không đổi đề, đáp án, lời giải, rubric.
MATH_VERIFICATION: 7/7 kiểm toán trực tiếp các tình huống mở đầu R03 bên dưới + giữ 39 ví dụ và 114 public canonical từ R02 độc lập PASS. Không đếm công thức/thống kê thay cho chứng cứ; các phép biến đổi gốc được đọc nguồn R02 đã khóa, không gán reviewer PASS cho văn bản R03.
PED_VERIFICATION: ba trang ngoài; Kiến thức có 3 mảng lớn/7 tab con, khám phá → ý nghĩa → ví dụ/điều kiện → 15 Tự thử mở lời giải theo thao tác → luyện tập và 7 khối D6; Luyện tập một thư viện canonical; Tự kiểm tra công khai 14 tham chiếu không giả độc lập/Mastery. Toàn bộ 7 câu dẫn nhập đã được soát đúng toán; các dòng S1/QA kỹ thuật được tách khỏi phần Knowledge học sinh.
CANONICAL_Q15: 114/114 PUBLIC item ID một lần trong register, 114 dòng mapping/56 outcome, không sao chép stems/keys/solutions/rubrics. 14 PUBLIC câu tự kiểm tra là placement lại trên cùng ID; không tạo 14 item mới. Written/Anchor vẫn dùng thư viện chung.
ASSESSMENT_Q16: PRIVATE RD1 owner-held 42 câu, SHA256 100076f65e91b4551bfe3488ff3eedf66711b662ba18cec521203e2f631b00be; không public stems/keys/solutions/rubric/private raw reports. Public `CLIENT_SELF_CHECK_NO_MASTERY`; phải giấu hint/key/correctness/Tutor cho tới Final Submit; runtime/browser và independent official TOPIC_READINESS NOT_CLAIMED; RELEASE kiểm sau.
P0: 0
P1: 0
P2: 0
AUTHOR_SIGNOFF: SELF_QA_PASS_ON_R03_PUBLIC_SCOPE_AND_HISTORICAL_R02_EQUIVALENCE, including 56 outcomes/114 canonical and all seven editorial changes; không cấp phép merge/deploy, RD1 activation hoặc hệ thống Mastery.

## Bảy kiểm toán toán trực tiếp trên lời dẫn R03

| Phần | Bài thử / điều kiện | Kết quả đã tính / đối chiếu |
|---|---|---|
| 1 | Hai độ dời cùng độ dài nhưng hướng đối nhau | Hai vectơ khác nhau; độ dài riêng vẫn bằng nhau; trường hợp vectơ-không theo quy ước KNTT giữ nguyên R02 |
| 2 | Đi 4 m Đông, 3 m Bắc | Độ lớn độ dời $\\sqrt{4^2+3^2}=5$ m, không phải 7 m; tổng quãng đường 7 m |
| 3 | A(−2;3), B(4;−1) | $\\overrightarrow{AB}=(4-(-2);-1-3)=(6;-4)$; đảo AB cho dấu đối |
| 4 | Điểm thuộc đường thẳng/đường tròn | Phải thay đúng tọa độ vào phương trình đã xác định và kiểm điều kiện; không đánh tráo phương trình đường với vị trí một điểm |
| 5 | Cạnh đối AB và CD của một tứ diện | Hai đường chéo nhau vì bốn điểm không đồng phẳng; hình chiếu không tự chứng minh giao/sóng song |
| 6 | Hai vị trí cùng x,y nhưng z khác nhau | Không trùng điểm; cần bộ ba (x;y;z) và chênh z trong độ dời |
| 7 | A(1;2;3), u=(1;1;−1), P:x+2y+2z−9=0 | n=(1;2;2), u·n=1≠0; thay A+tu vào P: 2+t=0 ⇒ t=−2, M(−1;0;5) |

## Ma trận đối chiếu từng outcome / một item đại diện

| Phần | OUTCOME_ID | Một item canonical đại diện | Truy vết kiểm tra |
|---|---|---|---|
| 1 | `TOPIC-VEC-P01-O01` | `THPT-G10-B07-C01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 1 | `TOPIC-VEC-P01-O02` | `THPT-G10-B07-C02` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 1 | `TOPIC-VEC-P01-O03` | `THPT-G10-B07-P01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 1 | `TOPIC-VEC-P01-O04` | `THPT-G10-B07-P04` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 1 | `TOPIC-VEC-P01-O05` | `THPT-TOPIC-VECTOR-P1-R01-P01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 1 | `TOPIC-VEC-P01-O06` | `THPT-G10-B07-P06` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B08-TRIANGLE` | `THPT-G10-B08-C01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B08-PARALLELOGRAM` | `THPT-G10-B08-C02` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B08-OPPOSITE-SUBTRACTION` | `THPT-G10-B08-P01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B08-MIDPOINT` | `THPT-G10-B08-P04` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B08-CENTROID` | `THPT-G10-B08-P05` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B09-SCALAR_DEFINITION` | `THPT-G10-B09-C02` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B09-LENGTH_DIRECTION` | `THPT-G10-B09-C01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B09-DISTRIBUTION` | `THPT-G10-B09-P02` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B09-COLLINEAR` | `THPT-G10-B09-P05` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 2 | `G10-B09-MIDPOINT_CENTROID` | `THPT-G10-B09-P03` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 3 | `TOPIC-VEC-P03-O01` | `THPT-TOPIC-VEC-P03-C01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 3 | `TOPIC-VEC-P03-O02` | `THPT-TOPIC-VEC-P03-C02` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 3 | `TOPIC-VEC-P03-O03` | `THPT-TOPIC-VEC-P03-C03` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 3 | `TOPIC-VEC-P03-O04` | `THPT-TOPIC-VEC-P03-C04` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 3 | `TOPIC-VEC-P03-O05` | `THPT-TOPIC-VEC-P03-C05` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 3 | `TOPIC-VEC-P03-O06` | `THPT-TOPIC-VEC-P03-C06` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 3 | `TOPIC-VEC-P03-O07` | `THPT-TOPIC-VEC-P03-C07` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 3 | `TOPIC-VEC-P03-O08` | `THPT-TOPIC-VEC-P03-C08` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 4 | `TOPIC-VEC-P04-O01` | `THPT-TOPIC-VEC-P04-C01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 4 | `TOPIC-VEC-P04-O02` | `THPT-TOPIC-VEC-P04-C02` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 4 | `TOPIC-VEC-P04-O03` | `THPT-TOPIC-VEC-P04-C03` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 4 | `TOPIC-VEC-P04-O04` | `THPT-TOPIC-VEC-P04-C04` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 4 | `TOPIC-VEC-P04-O05` | `THPT-TOPIC-VEC-P04-C05` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 4 | `TOPIC-VEC-P04-O06` | `THPT-TOPIC-VEC-P04-C06` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 4 | `TOPIC-VEC-P04-O07` | `THPT-TOPIC-VEC-P04-C07` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 4 | `TOPIC-VEC-P04-O08` | `THPT-TOPIC-VEC-P04-C08` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 5 | `TOPIC-VEC-P05-O01` | `THPT-TOPIC-VEC-P05-C01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 5 | `TOPIC-VEC-P05-O02` | `THPT-TOPIC-VEC-P05-C02` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 5 | `TOPIC-VEC-P05-O03` | `THPT-TOPIC-VEC-P05-C03` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 5 | `TOPIC-VEC-P05-O04` | `THPT-TOPIC-VEC-P05-C04` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 5 | `TOPIC-VEC-P05-O05` | `THPT-TOPIC-VEC-P05-C05` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 5 | `TOPIC-VEC-P05-O06` | `THPT-TOPIC-VEC-P05-C06` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 5 | `TOPIC-VEC-P05-O07` | `THPT-TOPIC-VEC-P05-C07` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 5 | `TOPIC-VEC-P05-O08` | `THPT-TOPIC-VEC-P05-C08` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 6 | `TOPIC-VEC-P06-O01` | `THPT-TOPIC-VEC-P06-C01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 6 | `TOPIC-VEC-P06-O02` | `THPT-TOPIC-VEC-P06-C02` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 6 | `TOPIC-VEC-P06-O03` | `THPT-TOPIC-VEC-P06-C03` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 6 | `TOPIC-VEC-P06-O04` | `THPT-TOPIC-VEC-P06-C04` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 6 | `TOPIC-VEC-P06-O05` | `THPT-TOPIC-VEC-P06-C05` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 6 | `TOPIC-VEC-P06-O06` | `THPT-TOPIC-VEC-P06-C06` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 6 | `TOPIC-VEC-P06-O07` | `THPT-TOPIC-VEC-P06-C07` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 6 | `TOPIC-VEC-P06-O08` | `THPT-TOPIC-VEC-P06-C08` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 7 | `TOPIC-VEC-P07-O01` | `THPT-TOPIC-VEC-P07-C01` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 7 | `TOPIC-VEC-P07-O02` | `THPT-TOPIC-VEC-P07-C02` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 7 | `TOPIC-VEC-P07-O03` | `THPT-TOPIC-VEC-P07-C03` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 7 | `TOPIC-VEC-P07-O04` | `THPT-TOPIC-VEC-P07-C04` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 7 | `TOPIC-VEC-P07-O05` | `THPT-TOPIC-VEC-P07-C05` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 7 | `TOPIC-VEC-P07-O06` | `THPT-TOPIC-VEC-P07-C06` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 7 | `TOPIC-VEC-P07-O07` | `THPT-TOPIC-VEC-P07-C07` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |
| 7 | `TOPIC-VEC-P07-O08` | `THPT-TOPIC-VEC-P07-C08` | R02_REVIEWED_SCOPE_RETAINED + R03_EDIT_QA |

## Q01–Q18 và A1–A7 — diễn giải nguồn chứng cứ

- **Q01–Q02 / A1–A2:** R02 original SGK/SBT in/PDF per-part receipts, caveat G12 SBT p25; 56 outcome có 114 item ánh xạ. Phần toán R03 không đổi thuật ngữ/giới hạn Core; mô tả mới chỉ giải thích ý tưởng R02.
- **Q03–Q08 / A5:** lý thuyết 7 phần, 39 worked reasoning examples R02, nguồn luyện tập shared, Written/rubric, figure placement + đọc hình và D6. Biên tập lại bảy lời mở đầu và bảy mô tả hình, không phát minh công thức mới.
- **Q09–Q14 / PED1–PED6:** vì sao cần học → tiền đề → hiểu cách mô tả → phương pháp và điều kiện → hình → 15 lần tự thử có nút đối chiếu và D6; rà đúng từ đầu đến cuối từng phần.
- **Q15 / A4:** một ID/item, 114/114 mapping, 14 self-check placements chỉ mô tả nơi xuất hiện, không clone đề/đáp án.
- **Q16 / A7:** raw RD1 off-Git, chỉ giữ hash/count; no Mastery, no hint/key trước Final Submit; chế độ chính thức chỉ được kích hoạt sau triển khai an toàn riêng.
- **Q17:** một hành trình Chuyên đề 3 trang tự đủ, không Core riêng, không dùng SGK path để lấp nội dung bắt buộc.
- **Q18 / A3/A6:** self-QA receipt này khóa source R03, giữ review R02 bất biến, phân loại chỉnh nội dung R03 là DELTA_C_PED_PRESENTATION kiểm tại tác giả theo v3.0.1; không yêu cầu NotebookLM lặp lại nếu đã xác minh được. Không có P0/P1 công khai trong phạm vi source authoring; AP/R/site QA riêng.

## Ranh giới

- Đây là nội dung SOURCE Q18 author self-verified, không là browser/UI approval. Các tab Markdown chỉ là hợp đồng trình bày; RELEASE phải tích hợp, kiểm hiển thị/MathJax/SVG/keyboard/mobile, hidden answer trong Final Submit, CI exact HEAD và chủ dự án phê duyệt.
- Tự kiểm tra công khai có thể dùng lại câu đã luyện nhưng không chứng minh kết quả độc lập. Tránh đưa private RD1 vào GitHub, JS bundle, logs hoặc Gemini.
