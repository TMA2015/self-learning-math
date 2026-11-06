# R12 — Đối chiếu ứng dụng vectơ/lực từ đề cương chính thức THPT Trần Phú – Hoàn Kiếm (AUTHORING, read-only)

**AUDIT_ID:** `SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106`
**PACKET_ID:** `SLM-SGK-G10-FORCE_METHOD_SOURCE_CROSSWALK-R12-20261106`
**STANDARD:** `SLM-THPT-QUALITY-ONE v1.2.0`, Q01–Q18; không tạo chuẩn thứ hai.
**SOURCE_CLASS:** `SCHOOL_PUBLISHED_REVISION_GUIDE` (đề cương ôn tập, KHÔNG phải đề kiểm tra thực tế).
**EXAM_EVENT_COUNT_ADDED:** `0`
**CUSTODY:** `SCHOOL_PUBLISHER_PAGE=CONFIRMED`; `SCHOOL_HOSTED_PDF_TEXT=INDEXED`; `PDF_FILE_BYTES_SHA256=UNVERIFIED`; `PDF_FIGURE_VISUAL=HOLD`; `OFFICIAL_EXAM_PAPER=NO`.
**RESULT:** `METHOD_EVIDENCE_PARTIAL`; `FORMAL_COVERED_OR_COVERAGE_GAP_VERDICT=0`; `NEW_ITEMS=0`; `AUTHORING_SOURCE_EDITS=0`; `ACADEMIC_PED_REREVIEW=NO`; `TOPIC_OR_RELEASE=NO`.

## 1. Nguồn và mức chứng cứ

- Trang do trường THPT Trần Phú – Hoàn Kiếm (Hà Nội) công bố **27/10/2025**: [Đề cương ôn tập cuối HK I, khối 10, năm học 2025–2026](https://thpttranphuhk.hanoi.edu.vn/de-cuong-cau-hoi-on-tap/de-cuong-on-tap-cuoi-hk-i-cac-mon-khoi-lop-10-nam-hoc-2025-2026/ctmb/1765/13435); liên kết file thứ 9/11 là Toán.
- Tài liệu Toán nằm trên máy chủ `file2.hanoi.edu.vn`: [PDF gốc liên kết từ trang trường](https://file2.hanoi.edu.vn/data/doc/2025/thpttranphuhk/2025_10/27/toan-noi-dung-on-tap-cuoi-ky-1k-10-nam-hoc-2025-2026_271020258.pdf). Tiêu đề và tên trường/năm học kiểm tra được qua phần văn bản PDF được chỉ mục.
- Đã đối chiếu **văn bản trích xuất** tại vị trí `III. Câu trả lời ngắn`, Câu 59 và Câu 70. Công cụ tải hình trực tiếp báo `Cache miss` nên **chưa đối chiếu trực quan hình F1/F2/F3 hoặc từng glyph ký hiệu**. Không có bản PDF bytes để khóa SHA256; không giả nhận đã xem nguyên trang in.
- Đây là **đề cương ôn tập của trường**, có giá trị tham chiếu họ dạng và phương pháp, nhưng **không chứng minh câu đó xuất hiện trong kỳ thi học kỳ**. Không cộng vào mẫu đề thi đã xác minh; không sử dụng làm SGK S1 hay thẩm quyền Core.

## 2. Đối chiếu 2 câu hỏi thực tế từ đề cương và học liệu bất biến

| Định vị trong tài liệu trường | Cấu trúc toán/phương pháp (diễn giải, không sao chép nguyên đề) | Bằng chứng canonical trong SLM | Kết luận giới hạn |
|---|---|---|---|
| Toán 10, phần trả lời ngắn, **C59** | Hai lực đồng quy, mỗi lực 25 N, góc 60°; vật cân bằng với lực thứ ba. Điều kiện `F1+F2+F3=0`, độ lớn `F3=|F1+F2|=25√3 N ≈ 43,30 N`. Cần phối hợp hình bình hành + góc không vuông/tích vô hướng + điều kiện cân bằng. | G10 B08 `THPT-G10-CHIV-TRY07` và `THPT-G10-B08-P06` giải **hợp lực vuông góc** (3/4 N → 5 N) và giải thích bằng hình bình hành; G10 B11 có D1 tích vô hướng và điều kiện góc. | `NONORTHOGONAL_EQUILIBRIUM_COMPOUND_TRANSFER_PENDING`: đã chứng minh **các thành phần nền tảng**, chưa chứng minh đủ chuỗi **60° + lực cân bằng thứ ba** trong các item đã xem. **KHÔNG gắn COVERAGE_GAP.** |
| Toán 10, phần trả lời ngắn, **C70** | Tính công khi biết lực 90 N, độ dời 100 m, góc 60°: `W=F·s=Fs cos60°=4.500 J`; yêu cầu ý nghĩa góc/đơn vị. | G10 B11 `THPT-G10-CHIV-W11-ANCHOR`, outcome `G10-B11-APPLICATION`: dùng lực/độ dời theo thành phần, công 48 J, cos góc và giải thích dấu công; lý thuyết D1.4 cho công thức `|F||s|cosθ`, đơn vị J. | `METHOD_FAMILY_EVIDENCE_PRESENT_IN_INSPECTED_CANONICAL`: cùng phương pháp tích vô hướng và công của lực, khác hình thức dữ liệu đầu vào. **Không tự nâng thành formal COVERED đối với corpus thi.** |

### Kiểm toán toán học độc lập trên dữ liệu đã thấy

- C59: do đứng yên, **tổng ba vectơ lực bằng không**; do đó lực thứ ba ngược chiều hợp lực của hai lực đầu và có cùng độ lớn. Bình phương hợp lực là `25²+25²+2·25·25·cos60° = 1.875 (N²)`; căn là `25√3 N`. Nếu chỉ cộng 25+25 hoặc dùng định lý Pythagoras cho góc 60° sẽ sai. Đây là phép tính kiểm toán nghiên cứu, **không** phải đáp án chính thức của trường hay revision rubric.
- C70: `90·100·cos60° = 4.500 J`, khác phép nhân thẳng 9.000 J. Đối chiếu SLM có phép tính công cùng bản chất (W11) và công thức nguồn (D1.4), không đòi thêm một item chỉ vì đổi biểu diễn tọa độ thành độ lớn–góc.

## 3. Source lock và boundaries

- Nguồn SLM được kiểm trên **Draft AUTHORING PR #750**, không sửa: `prototypes/thpt/content-drafts/Temp_G10_SGK_CHIV_FULL_R03_CONSOLIDATED_SOURCE_20261105.md`; Git blob **`96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9`**. R01/R02 reviews và composite receipt thuộc PR #750 giữ nguyên.
- D4 baseline G10: `G10_WRITTEN_31_CANONICAL_BASELINE.md` Git blob **`19ad4b47d4e046d770a4126011dcdccbd899f45a`**; W11 là **một** canonical item, Anchor là nhãn, không tính thêm item hoặc ID khác.
- Ma trận sơ bộ: `C59 → G10-B08-PARALLELOGRAM / G10-B11-GEOMETRIC_DOT` là nghiên cứu **liên-outcome**, không tự tạo placement hoặc thay chương SGK; `C70 → G10-B11-APPLICATION`, canonical `THPT-G10-CHIV-W11-ANCHOR` là đối chiếu phương pháp. Đây không phải kết luận toàn bộ đề cương hay tất cả outcome.
- 238 Written SGK được bảo toàn: G10 **31**, G11 **83**, G12 **124**, không đổi item/đáp án/rubric/source blob/historical verdict. Không mở NotebookLM review vì **không có Delta C học liệu**; nếu về sau thật sự đề xuất item mới cần khóa S1 + kiểm thiếu thực chất + owner decision + targeted independent review.
- Không upload PDF trường lên GitHub, không sao chép hình/đáp án toàn bộ, không đẩy RD1/private; không sửa website/engine/Firebase/Gemini; không merge/deploy. Giữ Draft #771.

## 4. Điều kiện bước tiếp theo

1. Tải và xem trực quan PDF đề cương và nếu có **đề HKI/HKII đã thi** được công bố bởi trường, kiểm đúng mã đề, trang, hình, đáp án; khóa SHA của bản bytes thực sự đọc.
2. Kiểm thêm toàn bộ D1–D4/EX/HELP của G10 B08 và B11 và SGK nguồn S1, sau đó so với một số trường phổ thông Hà Nội độc lập 2022–2026 cùng CT2018 để xác nhận tính cần thiết của phép phối hợp góc không vuông + cân bằng.
3. Chỉ khi chứng minh thiếu một họ phương pháp quan trọng mới tạo đề xuất bổ sung cho chủ dự án; không kết luận từ một đề cương hoặc ví dụ số liệu mới.

**CHECKPOINT:** `R12=SOURCE_AND_METHOD_CROSSWALK_RECORDED;ORIGINAL_PDF_VISUAL_HOLD;NO_FORMAL_GAP;NEW_WRITTEN=0;RELEASE=NO`.

## R12 CLOSEOUT — S1 originals + 45 canonical ChIV items (06/11/2026, read-only)

**Công đoạn khép kín:** Hai dạng Toán 10 lực cân bằng không vuông góc và chuyển động thuyền trên sông đã được chứng minh **nằm trong SGK/SBT KNTT gốc**; đồng thời đã đối chiếu **45/45 câu canonical ChIV B07–B11, 15/15 ví dụ D2, 24/24 Tự thử PED** của một source bất biến. Không còn lý do chờ chứng minh “đề thi thật” để nhận dạng **hai họ phương pháp**. Không tự tạo học liệu, không cấp verdict Academic/PED mới, không gọi thiếu lý thuyết vectơ.

### 1. S1 trực tiếp: sách của owner, PDF gốc, ảnh trang và byte SHA

| Sách | SHA256 toàn bộ file / trang | Chứng cứ toán gốc thực tế |
|---|---|---|
| **SGK Toán 10 KNTT Tập Một**, 106 trang PDF, 22.956.643 bytes | **3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2** | **Trang in 52 ↔ PDF53**: phân biệt hai lực cân bằng, vectơ đối. **Trang in 53 ↔ PDF54**: vận tốc thuyền so với bờ là tổng vận tốc thuyền so với nước + vận tốc dòng nước. **Trang in 54 ↔ PDF55**: **Ví dụ 4** tàu qua sông và chọn hướng lái; **bài 4.9** hai lực 3N và 2N tạo góc 120°; **bài 4.10** hai tàu cùng tốc độ chèo, hướng khác nhau và dòng chảy. |
| **SBT Toán 10 KNTT Tập Một**, 130 trang PDF, 20.734.072 bytes | **2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1** | **Trang in 50 ↔ PDF51 Ví dụ 3**: ba lực cân bằng, F1=F2=100N, góc giữa hai lực 120°, giải bằng hình bình hành, kết quả |F3|=100N. **Trang in 51 ↔ PDF52 bài 4.11**: ba lực cân bằng, hai lực 30N và 40N vuông góc; **bài 4.12**: ba lực, góc 60°, nhưng đề gốc có lỗi điều kiện in được nêu riêng bên dưới. |

Nguồn truy cập: hai file PDF SGK/SBT trong thư mục Drive KNTT TOAN 10 của chủ dự án (đã tải raw, băm SHA256, render ảnh/đọc công thức/hình); **không upload file/ảnh S1 lên repo**, không đưa ID cá nhân của Drive vào public audit. **Trang in sách và PDF page không đồng nhất**: SGK printed 54 ↔ PDF 55; SBT printed 51 ↔ PDF 52, đã xác minh trực quan, không đoán bằng số trang.

### 2. Phát hiện lỗi thực sự trong SBT 4.12: không tự sửa S1

**Trang in 51, bài 4.12**, sau khi giới thiệu F1,F2,F3 và góc F1,F2=60°, bản PDF gốc **in rõ** điều kiện độ lớn **|F1|=|F1|=2√3 N** (lặp F1 thay vì nêu độ lớn F2). Đây là **SOURCE_MATH_STEM_DEFECT_CONFIRMED_IN_OWNER_SCAN**. Đúng nguyên văn thì không cho độ lớn F2, nên **không xác định duy nhất** độ lớn F3 cân bằng: giả sử F2 có độ lớn t>0, thì |F3|² = (2√3)² + t² + 2(2√3)t cos60° biến thiên theo t. Không được âm thầm chuyển điều kiện thành |F1|=|F2|, giải ra một đáp số và gán ngược vào sách. **Ví dụ 3 trang 50 vẫn đầy đủ dữ kiện và xác nhận chắc chắn phương pháp.**

Tác động đối với SLM: **không có bằng chứng rằng lỗi in trên đã xuất hiện trong một item canonical**; không sửa 238 câu gốc, không gửi lại review Academic/PED của các nguồn bất biến. Gắn nhãn cảnh báo cho nguồn SBT 4.12 nếu sau này dùng làm tham khảo; nội dung mới bắt buộc tự tạo với điều kiện đầy đủ và reviewer độc lập nếu owner cho phép.

### 3. Đối chiếu chính xác học liệu ChIV hiện có

AUTHORING G10 ChIV R03 source-locked ở Draft #750:
**prototypes/thpt/content-drafts/Temp_G10_SGK_CHIV_FULL_R03_CONSOLIDATED_SOURCE_20261105.md**, Git blob **96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9**; 24 outcome, **45/45 original unique Core/Practice/Written**, **15/15 D2 ví dụ giải**, **24/24 Tự thử PED**. Đã trích và kiểm toàn bộ danh mục 45 đề bài, 15 stem D2 và 24 first-try IDs, đồng thời rà D1/PED theo hai phương pháp mục tiêu.

| Phương pháp | Có trong S1 | Có trong SLM ChIV | Chuỗi còn thiếu trong **public source đã kiểm** |
|---|---|---|---|
| **Hợp lực + lực thứ ba cân bằng** | SGK p52, p54 4.9; SBT p50 Ví dụ 3 / p51 4.11–4.12 (4.12 lỗi nguồn) | G10-B08-PARALLELOGRAM và B08-P06 có lực vuông góc 3–4 N → 5 N; THPT-G10-CHIV-TRY07 cùng mô hình. B11-P01 có tích vô hướng khi góc 60°, B11-EX01 góc 120°, B11-W11-ANCHOR về **công** | Không có **bài giải trọn** hai lực không vuông góc → |F1+F2| theo cosθ → **F3=−(F1+F2)** với cả độ lớn lẫn hướng cân bằng; W08 hiện là trung điểm/trọng tâm, W11 là công. **S1-ANCHORED_COMPOUND_FORCE_TRANSFER_CANDIDATE** |
| **Vận tốc thuyền / dòng nước** | SGK p53 quy tắc v_bờ=v_thuyền/nước+v_dòng; p54 Ví dụ 4 + 4.10 | B07 D1 có câu “lực, vận tốc, độ dời” như vectơ; B08 có phép cộng/trừ; B09-P06 biến thiên độ dời Đông/Tây; B10-EX02 và P01 có tính tọa độ; B10-P02 tìm B=A+AB | Không có **bài giải/tự luyện trọn** dòng chảy → chọn hệ trục/hướng → tính **v_bo=v_rieng+v_dòng**, phân biệt tốc độ theo bờ/so với nước → đặt điều kiện đến đúng điểm đối diện, giải thích trôi dạt. **S1-ANCHORED_RIVER_VECTOR_TRANSFER_CANDIDATE** |

**Đã đủ phương pháp, không nhân bản:** B11-P01 và W11 đã có tích vô hướng/công của lực; câu Trần Phú C70 90×100×cos60°=4500J cùng phương pháp nên **không đề xuất thêm**. Ví dụ một cảnh khác không chứng minh thiếu họ toán. Hai chuỗi phức hợp phía trên có căn cứ S1 và thực tế chưa xuất hiện trong source ChIV đã kiểm, **không suy diễn thành Academic/PED FAIL toàn chương hoặc mất hiệu lực PASS**.

### 4. QA probes TỰ TẠO (chỉ kiểm toán toán và thiết kế độ sâu, không phát hành ITEM_ID)

**QA-FORCE-NONORTH-01:** Hai lực có độ lớn **10N và 6N**, góc **60°**, có lực thứ ba giữ cân bằng. Hợp lực hai lực đầu có bình phương độ lớn 10²+6²+2×10×6×cos60°=196 ⇒ **14N**. Lực thứ ba có độ lớn **14N** nhưng **ngược hướng tổng hai lực**, không phải “cùng hướng 14N”. Giải thích không áp Pythagoras cho góc 60°, không cộng số 10+6, và nếu không cho góc thì kết quả chưa duy nhất. Nguồn SGK/SBT chỉ xác định họ phương pháp; bài số tự tạo không sao đề.

**QA-RIVER-RELATIVE-01:** Sông rộng **120m**, dòng chảy 3m/s về Đông, độ lớn vận tốc riêng của thuyền 5m/s, bờ đối diện ở phía Bắc, bỏ qua gia tốc. **Cách A:** lái thẳng về Bắc (v_rieng=(0,5)), v_bờ=(3,5) m/s ⇒ qua sông **24s**, trôi **72m** về Đông. **Cách B:** muốn cập bờ đối diện cùng hoành độ, chọn v_rieng=(-3,4), độ lớn √(9+16)=5, v_bờ=(0,4) m/s ⇒ qua sông **30s**, không trôi ngang. Điều kiện chung để triệt tiêu dòng hoàn toàn và vẫn tiến về bờ là **dòng chảy < độ lớn vận tốc riêng**. Phân biệt “giữ mũi thuyền vuông góc bờ” với “quỹ đạo thực vuông góc bờ”; đây là lỗi tư duy ứng dụng chưa được kiểm bằng một item hiện có.

**Kiểm soát nguồn thứ cấp R13:** Việt Đức HKI ca nô S20°E với 22km/h và dòng 2km/h hiện là **SECONDARY_EXCERPT_ONLY**; lời giải 21,4km/h của R13 chỉ hợp lệ **nếu** 22 là tốc độ đối với bờ và hướng đúng định nghĩa. Không gán làm kết quả chính thức/đề tự luận khi trang PDF gốc chưa kiểm. Việc xác định hai phương pháp có trong S1 KHÔNG phụ thuộc vào số 21,4 này.

### 5. Quyết định khép khâu, không tự mở DELTA C

**Source-method audit verdict:** Cả **hai họ dạng đã nằm trong S1**, nên không ghi “SLM thiếu kiến thức nền”; trong **45/45 câu canonical, 15/15 D2 và 24/24 First Try của ChIV** không có bài tích hợp đầy đủ hai chuỗi nêu tại §3. Hai **candidate ứng dụng cần tăng độ sâu** là có căn cứ; **không có full formal Qxx FAIL, không sửa PASS**.

**MINIMAL_DELTA đề xuất (chưa thực hiện):** (i) một D2/PED5 tích hợp điều kiện góc và lực cân bằng, D6 nối B08-P06 và B11-P01; (ii) một D2/PED5 thuyền–dòng nước so sánh hai hướng lái, D6 nối B08 và B10; chỉ xét **một Written độc lập mới cho từng loại** khi owner phê duyệt việc bổ sung chứng cứ tự giải (không mặc định quota, không sao SGK 4.9/4.10 hay SBT 4.12). Mọi bổ sung D2, D4 là **DELTA_C_ACADEMIC_MATERIAL** cần NotebookLM review **phần ảnh hưởng** bằng đúng 5 Permanent Sources v2.1 và S1. Tất cả **238 D4** G10=31, G11=83, G12=124 bất biến, không có item canonical mới lúc này.

**Khâu R12 METHOD_CROSSWALK G10 FORCE+RIVER: CLOSED**. PDF đề cương trường vẫn text-only/missing figure SHA, nhưng **không chặn** kiểm toán dạng bài vì SGK/SBT gốc đã trực quan và băm raw bytes; trường học không được viện làm chứng cứ số lần ra đề nếu không có bản trường gốc. Không mở thêm nhiều hồ sơ cùng nội dung. Không triển khai Topic/RELEASE/merge/deploy.

CLOSEOUT_RECEIPT: G10_CHIV_S1_SGK_SHA_3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2;SBT_SHA_2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1;SGK_PRINTED_52_53_54;SBT_PRINTED_50_51;SBT_4_12_BAD_REPEAT_F1;CHIV_CANONICAL_45_UNIQUE;D2_15;FIRSTTRY_24;TWO_COMPOUND_S1_METHOD_CANDIDATES;NO_NEW_WRITTEN;238_D4_IMMUTABLE;NO_RELEASE
