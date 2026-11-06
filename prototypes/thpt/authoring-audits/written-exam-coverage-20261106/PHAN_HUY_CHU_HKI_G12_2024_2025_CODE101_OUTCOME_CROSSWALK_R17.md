# R17 — Toán 12 HKI 2024–2025 THPT Phan Huy Chú – Quốc Oai, mã 101: đối chiếu phương pháp theo bài/outcome

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
EXAM_EVENT_ID: HN-PHCQO-2025-HK1-G12
LANE: AUTHORING_READ_ONLY
STANDARD: SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18
GRADE: 12
IMMUTABLE_D4: G10 31 + G11 83 + G12 124 = 238
CANONICAL_SOURCE_ITEM_RUBRIC_CHANGES: 0
FORMAL_EXAM_ITEM_COVERED_OR_GAP: NONE
TOPIC_RELEASE_MERGE_DEPLOY: NO

## 1. Xuất xứ, trang và chất lượng chứng cứ

- **Trên ảnh chữ PDF mirror có nhãn:** Sở GD&ĐT Hà Nội, Trường THPT Phan Huy Chú – Quốc Oai, Toán 12 cuối học kì I 2024–2025, 90 phút, mã đề 101. Đề có **4 trang in**, bản PDF mirror gồm **5 trang**: web-index PDF p0–p3 chứa đề, p4 là bảng đáp án sáu mã **101,103,105,107,109,111**. Tính **một exam event**, KHÔNG sáu đề thi độc lập.
- **PDF mirror có văn bản trang:** https://toanmath.com/toanmath-pdf/de-cuoi-ki-1-toan-12-nam-2024-2025-truong-thpt-phan-huy-chu-ha-noi.pdf . Bài đăng 27/12/2024: https://toanmath.com/2024/12/de-cuoi-ki-1-toan-12-nam-2024-2025-truong-thpt-phan-huy-chu-ha-noi.html .
- **Đã đọc bằng chỉ mục PDF:** p0 nhãn trường/mã, p2 Phần II Câu 3 bảng vôn kế, p3 Phần III Câu 1–6, p4 bảng mã/đáp án. Đã gọi screenshot p2/p3/p4: **Cache miss cả ba**; thử tải file PDF trực tiếp không thành công. Chưa có **ảnh/bytes PDF, SHA256, đối chiếu hình và nguồn phát hành trực tiếp của trường**. Không coi bản mirror là school-original đã xác minh.
- EVIDENCE_GATE = MIRROR_PDF_INDEXED_TEXT_AND_PRINTED_KEY_PARTIAL; PRIMARY_SCHOOL_ISSUER_PDF_HOLD; PDF_VISUAL_SHA_HOLD; CORPUS_VERIFIED=NO. Câu có đồ thị/bảng bị lỗi text phải HOLD, không phỏng đoán.

## 2. Ma trận vị trí câu hỏi → method → item/outcome (tự kiểm đáp án mã 101)

| Câu trong mã 101, trang in | Toán học được xác nhận ở mức văn bản PDF và kiểm tính độc lập | Key mirror p4, mã 101 | Canonical SOURCE-LOCKED có cùng năng lực; mức kết luận |
|---|---|---|---|
| **Phần III C1, trang 4 (PDF p3)** | Máy bay đi A(950;600;8) đến B(1050;450;9) km trong 12 phút, chuyển động vận tốc/hướng không đổi. Vectơ AB=(100;−150;1); độ dài √32501≈180,280 km. 12 phút=0,2 giờ; tốc độ √32501/0,2≈**901,402 km/h**, làm tròn **901**. Phải phân biệt độ dời, quãng đường, thời gian dương/đơn vị. | **901** | **THPT-G12-B08-W06** / G12-CHII-B08-O06 đã có full D4 độ dời 3D→độ dài→tốc độ và rubric giải thích trường hợp đi thẳng. **EXACT_METHOD_CHAIN_PRESENT**, chưa cấp full exam-item COVERED khi PDF chưa có ảnh/issuer. |
| **Phần III C3, trang 4 (PDF p3)** | Giá bán 100 nghìn đồng/sp; tổng chi phí T(x)=x²−20x+400 (nghìn). Lợi nhuận P=100x−T(x)=−x²+120x−400=3200−(x−60)², max **3200 nghìn đồng tại 60 sản phẩm**, hợp miền x nguyên không âm. Giữ đơn vị, không nhầm revenue và profit. | **3200** | G12 ChI B05 **EX-G12-B05-05** (D2) dạy *trọn chuỗi* giá→doanh thu−chi phí→cực đại, ràng buộc/đơn vị. **THPT-G12-CHI-B05-A03** thực hành kết quả lợi nhuận/đơn vị; D4 **THPT-G12-CHI-B02-W02** tối ưu có biên, B05-W01/W02 miền và chi phí cận biên. **FULL_METHOD_IN_D2_APPLICATION**, KHÔNG gọi là exact D4 profit item. |
| **Phần II C3, trang 3 (PDF p2)** | Hai vôn kế mỗi cái đo 10 lần, nhóm V [3,85;3,90), [3,90;3,95), [3,95;4,00), [4,00;4,05). An=(1,6,2,1), Bình=(1,3,4,2). Trung điểm=(3,875;3,925;3,975;4,025). R cả hai=0,20V; trung bình **3,94 vs 3,96V**; phương sai **0,001525 vs 0,002025 V²**, độ lệch chuẩn ≈**0,03905 vs 0,045 V**, An ít dao động hơn trong mẫu. Bốn ý a/b/c/d = **Đ,S,Đ,S**. Đây là tính *ước lượng từ grouped data*, không tính nguyên mẫu. | **ĐSĐS** | G12 ChIII B09 **THPT-G12-B09-W03/W06** dạy range & giới hạn, B10 **THPT-G12-B10-W04** tính n/mean/variance/s, **THPT-G12-B10-W05** so hai mẫu có s, nhận xét ổn định có điều kiện. **COMPOUND_METHOD_FAMILY_PRESENT**; W05 hai trung bình bằng nhau, bản exam hai trung bình gần nhau nên phải kiểm khả năng vận dụng chuyển bối cảnh trước full verdict. |
| **Phần III C6, trang 4 (PDF p3)** | Trục Ox Nam, Oy Đông, Oz hướng lên; drone A=(3;2;3), B=(−2;−4;5). M thẳng hàng và trên mặt đất z=0: M=A+t(B−A), B−A=(−5;−6;2). 3+2t=0 ⇒ t=−3/2, **M=(10,5;11;0)**, 2a+b+c=**32**. **Quan trọng:** t âm, M trên đường thẳng AB nhưng *ngoài đoạn AB*; không ép t∈[0,1]. | **32** | B07 **THPT-G12-B07-W03** dạy quy ước gốc/hướng trục, B07-O04 và W04 hiệu tọa độ, B08 **THPT-G12-B08-W02** điều kiện cùng phương, B07-O01 mặt phẳng Oxy=z=0. Có *các năng lực thành phần*; chưa thấy bằng chứng về **một canonical item nối toàn chuỗi tham số đường thẳng→giao mặt đất→phân biệt đường thẳng/đoạn**. Đánh dấu **INTEGRATED_LINE_GROUND_INTERSECTION_CHAIN_REVIEW_PENDING**, không là formal GAP. |

**Kiểm toán độc lập:** bốn đáp án trên được tính từ dữ kiện được web-index rõ và đối chiếu đúng hàng/mã 101 ở p4. Không dùng số nghiệm của bản mirror để chứng minh nội dung bài học SLM đã PASS; học liệu SLM được đọc từ original Git source blobs dưới đây.

## 3. Những câu phải HOLD

- Phần III **C2 mô hình dịch bệnh**: formula f(t) bị phá glyph khi trích PDF text. Bảng key p4 có 17 nhưng **chưa xác minh toàn bộ biểu thức**, không phát biểu từ key suy ra độc lập phương pháp hay thiếu/chưa thiếu G12 B02/B05.
- Phần III **C5 khoảng tứ phân vị 200 cây keo**: key mirror code 101 có số 0,53, nhưng **thiếu ảnh biểu đồ, nhóm/tần số** để tự nội suy Q1, Q3, nên **DIAGRAM_HOLD**. B09 W05/W06 chỉ làm chứng cứ có kỹ năng IQR, không đủ chấm chính câu thi.
- Các câu phụ thuộc đồ thị/hình ở Phần I C2/C3/C8/C9, Phần II C4, và công thức trích xuất không rõ đều **VISUAL_OR_GLYPH_HOLD**. Không dùng six-code answer table để nhân tần suất một kỹ năng.

## 4. Bằng chứng khóa source SLM trên GitHub

| Chương | Source Git blob và vị trí | Evidence chính đã đối chiếu |
|---|---|---|
| G12 ChI | Draft #711; prototypes/thpt/content-drafts/G12_SGK_CHI_B01_B05_FULL_CHAPTER_PUBLIC_CANONICAL_R00_SOURCE_CANDIDATE.md; Git blob **f0862dcdab21dec136e43969f45c42638e7c7574** | B05 EX-G12-B05-05 profit, B05-A03, B02-W02, B05-W01/W02 |
| G12 ChII | Draft #716; prototypes/thpt/content-drafts/G12_SGK_CHII_B06_B08_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md; Git blob **856a37bd16d2746ffc2e12906de18d1f4338a3b6** | B07 O01/O03/O04/W03/W04, B08 O02/O06/W02/W06 |
| G12 ChIII | Draft #718; prototypes/thpt/content-drafts/G12_SGK_CHIII_B09_B10_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md; Git blob **4e8e462a5c2243583be8c71625a9be3095e48c7b** | B09 W03/W05/W06, B10 W04/W05 |
| D4 124 | G12_WRITTEN_124_CANONICAL_BASELINE.md; blob **590b315ac5137bb08abcd4c385068b223479b4d3** | 124 G12 canonical unique; 238 SGK total across G10–12, unchanged |

## 5. Quyết định AUTHORING tiếp theo

1. **Không có formal COVERED/GAP verdict** do chưa có original school issuer PDF/image/SHA. Bốn phương pháp nêu trên đã có nhiều chứng cứ học liệu cụ thể và kết quả toán khớp bản mirror. Đủ làm *method research crosswalk*, không phải bằng chứng nghiệm thu toàn corpus.
2. Với C6 drone, giữ **INTEGRATED_CHAIN_REVIEW_PENDING** (vừa là kĩ năng ghép nhiều outcome vừa có bẫy t<0) và ưu tiên kiểm **SGK/SBT G12 Tập 1 B07/B08** về phạm vi cùng phương, tọa độ trên đường thẳng; *chỉ* đề xuất bổ sung sau khi owner phê duyệt và review Delta C khi thực sự thiếu mô hình học cần thiết.
3. Khi có PDF trường gốc hoặc ảnh trang mirror rõ ràng, đối chiếu biểu đồ, ký hiệu, đáp án theo mã; SHA-lock chứng cứ. Không tạo R18 từ cùng đoạn trích này nếu không có bằng chứng mới.
4. Giữ nguyên 238 D4, source/receipt SHA, NotebookLM Academic/PED PASS, Q15/Q16/Q18, RD1, Mastery, SGK/Topic journey, và không thao tác nhánh RELEASE.

CHECKPOINT: R17=HN_PHCQO_2025_HKI_G12_CODE101_ONE_EVENT;MIRROR_PDF_INDEX_AND_KEY_FOUR_MATH_CROSSCHECKS;PDF_VISUAL_AND_SHA_HOLD;FOUR_METHOD_CROSSWALKS;CHII_COMPOUND_CHAIN_PENDING;FORMAL_GAP=0;D4_CHANGE=0;RELEASE=NO

## 6. Addendum SOURCE_S1_VISUAL_VERIFIED — đọc trực tiếp SGK/SBT Toán 12 Tập Một

**Hai bản sách gốc** đã tải nguyên bytes từ Google Drive chủ dự án, được render ảnh tại runtime để đọc mục gốc (không OCR, không sao chép scan lên GitHub). Hash khớp chính xác receipt G12 ChI đã có ở #711; chỉ ghi checksum, trang và mô tả phương pháp.

| Nguồn S1 / checksum SHA256 | Phạm vi đã mở trang ảnh | Minh chứng năng lực |
|---|---|---|
| **SGK KNTT Toán 12 Tập Một**, 15.988.398 bytes, **104 trang PDF**, SHA256 **faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd** | ChII B07/B08; trang **in 70 = PDF p72** | **Ví dụ 5, Bài 8**: máy bay di chuyển vận tốc/hướng không đổi từ A đến B rồi thêm một khoảng thời gian; xác định điểm C bằng vectơ có **hệ số dương 1/2**, lập phương trình tọa độ từng thành phần; đây là chứng cứ trực tiếp cho **phối hợp ngữ cảnh → vectơ → hệ số tham số → tọa độ** trong một ứng dụng. |
| SGK cùng SHA | Trang **in 71 = PDF p73** | **Ví dụ 7**: hai khinh khí cầu với gốc O, trục Ox hướng Nam, Oy hướng Đông, Oz hướng lên, chuyển mô tả Bắc/Tây thành tọa độ âm và tính khoảng cách 3D; là bằng chứng năng lực hướng thực tế tương tự bài flycam, không chỉ toán trừ vectơ vô ngữ cảnh. |
| SGK cùng SHA | Trang **in 72 = PDF p74**, bài tập **2.21** và **2.24** | Bài **2.21(a)** yêu cầu lập MN, MP và chứng minh 3 điểm **không thẳng hàng**, tức dùng kiểm cùng phương/không cùng phương. Bài **2.24** gắn Oxyz với gian khoan biển, Ox Tây, Oy Nam, Oz hướng lên và phát hiện tàu ở độ sâu âm; củng cố chọn hệ quy chiếu vật lý. |
| **SBT KNTT Toán 12 Tập Một**, 25.644.753 bytes, **117 trang PDF**, SHA256 **db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca** | Trang **in 54 = PDF p52**, bài **2.30(c)** | Bài **2.30(c)** nêu bài chứng minh **O,G,A thẳng hàng trong hệ tọa độ Oxyz**; đòi điều kiện cùng phương trong không gian thay vì chỉ bài tính véc-tơ. |
| SBT cùng SHA | Trang **in 56 = PDF p54**, bài **2.38** và **2.40** | Bài **2.38**: B **nằm giữa** O và A với OB=OA/3, phải chọn hệ số **trong (0,1)**; bài **2.40** nhận biết điểm M z=0 nằm trên mặt phẳng tọa độ Oxy. Điều kiện **“nằm giữa”** khác câu thi flycam chỉ đòi **“thẳng hàng”** với hệ số **t=−3/2 ngoài đoạn AB**. |
| SBT cùng SHA | Trang **in 55 = PDF p53** bài **2.31–2.32**; **in 58 = PDF p56** bài **2.48** | Bài 2.31 lấy mặt sàn làm Oxy để tính đỉnh cột/dây, 2.32 mô hình hai bức tường vuông góc, và 2.48 đổi mô tả vật lý chiếc gậy tựa tường thành tọa độ/khoảng cách: minh chứng ứng dụng đa bước mặt đất/độ cao **đúng phạm vi S1**. |

**Chốt ranh giới S1 so với bài thi mirror:** Nền tảng `Oxyz + orientation + affine vector + collinear/segment + z=0` đã **xác minh trực quan trong chính SGK/SBT Tập Một**. Vì vậy **không được** kết luận bài flycam là nội dung ngoài SGK, và cũng không được gắn `SGK_MISSING_METHOD` từ chỗ chưa thấy một bài y hệt. Tuy nhiên, **trong các trang S1 đã kiểm**, chưa thấy nguyên vẹn tình huống *hai điểm trên không → kéo dài đường thẳng → tìm giao mặt sàn z=0 với t âm*; bài thi mirror cần chứng cứ issuer PDF và chất lượng nhiệm vụ D1–D4 trên *từng outcome*. Giữ `G12_B08_MULTI_OUTCOME_TRANSFER_DEPTH_PENDING`, không gắn formal `COVERED/GAP`.

**Quan sát QA có ích:** SBT 2.38 nói rõ B nằm **giữa** O,A (hệ số dương dưới 1), còn bài thi flycam có M nằm trên **đường thẳng** AB và ở ngoài **đoạn** AB (hệ số âm). Đây là phân biệt điều kiện/ràng buộc đáng đưa vào **review depth PED5/D3**, chứ chưa phải ủy quyền thêm D4 hay thay snapshot.

**S1 evidence status:** `SGK_SBT_T1_ORIGINAL_BYTES_SHA_AND_PAGE_VISUAL_PASS` (chỉ cho các trang/đề mục ghi trên); `EXAM_ISSUER_PDF_VISUAL_SHA_HOLD` vẫn giữ. Nguồn SLM Draft #711/#716/#718 và 238 D4 canonical **chỉ đọc**, không đổi; không phát hành hay NotebookLM review tự cấp.

## 7. R18 — UPGRADE PROVENANCE TO ORIGINAL ISSUER, thêm 3 method checks (2026-11-06)

### 7.1 Phát hiện tài liệu trên đúng tên miền của trường phát hành

**Điều chỉnh đối với kết luận R17:** Thay vì chỉ có một PDF do ToanMath phát lại, đã tìm thấy **tệp đề cùng kỳ thi và mã 101 do chính trường đăng tải trên website `c3phanhuychu.edu.vn`**. Đây là bằng chứng mới **PRIMARY_ISSUER_HOSTED_PDF_URL_AND_INDEXED_TEXT_VERIFIED**; *không* hồi tố đổi trạng thái ảnh/bytes/SHA của R17.

- **School publisher page:** https://c3phanhuychu.edu.vn/posts/599 — “Đề và đáp án các môn thi tập trung cuối học kì I năm học 2024–2025”. Trang mục lục tại https://c3phanhuychu.edu.vn/posts?category_id=58 ghi cập nhật **29/12/2024**.
- **School-hosted original Toán 12:** https://c3phanhuychu.edu.vn/uploads/embedded_file/file/1258/M%C3%B4n_To%C3%A1n_l%E1%BB%9Bp_12.pdf . Chỉ mục web PDF hiển thị rõ header **Trường THPT Phan Huy Chú – Quốc Oai, Toán 12, cuối HKI 2024–2025, mã đề 101**, **4 trang đề** và phần key sáu mã ở cuối tệp. School PDF web text cho các locators Phần I/II/III.
- **Independent corroboration (không phải independent exam event):** https://toanmath.com/toanmath-pdf/de-cuoi-ki-1-toan-12-nam-2024-2025-truong-thpt-phan-huy-chu-ha-noi.pdf và https://www.scribd.com/document/810126272/De-Cuoi-Ki-1-Toan-12-Nam-2024-2025-Truong-Thpt-Phan-Huy-Chu-Ha-Noi — đúng cùng nhãn trường/kỳ/mã và khớp dữ kiện các câu kiểm được; các upload khác **không** tăng số lượng exam events, và không khẳng định file bytes-identical.
- **Attempted page-view/source SHA:** `web screenshot` school PDF p3/p4 **Cache miss**; tải raw PDF từ school host trong container bị lỗi DNS/network. Không có source file bytes, page image, checksum SHA256; nhiều hình/đồ thị và đồ họa vẫn chưa thể xác nhận bằng mắt. Phân loại hai tầng: `ISSUER_URL_AND_TEXT_PASS`; `PDF_BYTES_VISUAL_SHA_HOLD`. Không nói `CORPUS_VISUAL_VERIFIED`, cũng không tuyên bố publisher key được xác minh bằng ảnh.
- **Nhật ký sự kiện nguồn:** một trường/kỳ thi `HN-PHCQO-2025-HK1-G12`, mã 101 đại diện, sáu mã không thành sáu kỳ thi. School publisher chính là trọng tài **xuất xứ**; ToanMath/Scribd chỉ hỗ trợ đối chiếu văn bản/công thức.

### 7.2 Nâng từ 4 lên 7 câu đối chiếu có dữ kiện/kết quả rõ

Bốn câu ở §2 của R17 vẫn giữ **kết quả toán**: II C3 `ĐSĐS` (vôn kế), III C1 `901` (máy bay), III C3 `3200` (lợi nhuận), III C6 `32` (flycam). Nay đối chiếu **văn bản website trường + key code101**, không còn chỉ dùng mirror làm xuất xứ.

| Câu mới kiểm từ PDF school-hosted (page text) | Lời giải độc lập; không sao chép bản giải thương mại | Key code101 school PDF | Năng lực canonical/source đã có và giới hạn |
|---|---|---|---|
| **Phần II C1, trang in 3**: M(2;3;−1), N(−1;1;1), P(1;m+1;2); bốn mệnh đề, trong đó (c) Q∈Oxy và M,N,Q thẳng hàng thì Q là trung điểm MN. | `MN=(-3,-2,2)`, `MN=√17` nên (a) “√13” sai; trung điểm `I=(1/2,2,0)` nên (b) ghi x=3/2 sai. Gọi `Q=M+t(N−M)`, từ `z=-1+2t=0` → **t=1/2**, do đó Q=I, (c) đúng. `MN·MP=(-3)(-1)+(-2)(m-2)+2·3=13−2m`; tại m=−2 khác 0, (d) sai. **S,S,Đ,S**. Đây là **line ∩ ground nằm trong đoạn**, khác III C6 có t=−3/2 nằm ngoài đoạn. | **SSĐS** | G12 ChII **B07 O01** `Oxy⇔z=0`, **B07 O04** tọa độ vectơ theo hai đầu mút, **B08 O02** `u=kv`, **B08 O03** trung điểm. D4 `THPT-G12-B08-W02` kiểm collinear-factor, `THPT-G12-B08-W03` kiểm midpoint. Kỹ năng thành phần có, *chưa chứng minh một canonical tích hợp*; `INTEGRATED_LINE_PLANE_TRANSFER_DEPTH_PENDING`, không tự cấp GAP. |
| **Phần III C2, trang in 4**: mô hình ca bệnh `f(t)=−t³/3+17t²+580t` và `f′(t)` là tốc độ lây lan trong 30 ngày đầu. | `f′(t)=−t²+34t+580=869−(t−17)²` trên [0,30]. `f′` đạt max tại **t=17**; phải tối ưu **đạo hàm của số tích lũy**, không tối ưu trực tiếp f. Đã đối chiếu chính công thức ở văn bản school-hosted với bản mirror có glyph rõ hơn; không cần sơ đồ. | **17** | G12 ChI **B05** D1/PED khẳng định đạo hàm là tốc độ thay đổi và giới hạn đơn vị, B05 có tình huống vận tốc/gia tốc; **B02** dạy tối ưu cực đại/biên. `RATE_OF_CHANGE_THEN_OPTIMISE_CHAIN_PRESENT_IN_COMPONENTS`, nhưng không khẳng định có exact canonical B05 D4 tối ưu *f′*. |
| **Phần III C4, trang in 4**: `y=((m+1)x+m)/(2x+1)`, m nguyên [−24,24], đồng biến **trên từng khoảng xác định**. | `D=R\\{−1/2}`, `y′=((m+1)(2x+1)−2((m+1)x+m))/(2x+1)²=(1−m)/(2x+1)²`. Tăng trên **mỗi** thành phần iff m<1. Các m∈{−24,...,0} ⇒ **25** giá trị. Không nhầm “từng khoảng xác định” với “toàn D”. | **25** | G12 ChI **`THPT-G12-CHI-B01-W02` / `G12-B01-DOMAIN_INTERVALS`** đã có phản ví dụ **không gộp hai khoảng của miền phân thức**; cùng nguyên tắc ràng buộc, bài thi thêm tham số và đếm số nguyên. `EXACT_DOMAIN_COMPONENTS_METHOD_PRESENT`, không coi exact parametrized problem covered. |

**Nguồn kiểm từ school issuer:** bài toán/đáp án Phần II C1 và III C2/C4 cùng mã 101 xuất hiện trong indexed school PDF; bản Scribd là đối chiếu văn bản phụ cho công thức do PDF search text phân mảnh. Toàn bộ kết quả toán đã tự tính lại; nếu ảnh trang gốc sau này cho thấy glyph khác, ưu tiên sửa *nhận định audit* với receipt, tuyệt đối không tự sửa học liệu canonical.

### 7.3 Kết luận nguồn, độ sâu và giới hạn

- **Nhờ hai bài line-ground trong chính một đề trường**: II C1 có t=+1/2, III C6 có t=−3/2. Đề kiểm tra thực sự phân biệt **“thuộc đoạn”** và **“thuộc đường thẳng nhưng ngoài đoạn”** trên cùng nền tảng Oxyz. Đây là một **đích review về khả năng chuyển giao phương pháp và diễn giải điều kiện** (D3/PED5), KHÔNG tự động thành nội dung mới SGK hoặc yêu cầu thêm D4.
- Các phương pháp còn lại: tính đạo hàm rồi tối ưu *tốc độ* (III C2), đạo hàm phân thức có tham số và xét từng khoảng (III C4) đã có nền tảng tương ứng ở ChI B01/B02/B05. Không được chỉ đếm số lượng để phán đủ/thiếu.
- R17 `MIRROR_PDF_INDEXED_TEXT_AND_PRINTED_KEY_PARTIAL` là lịch sử trước khi tìm thấy trường; R18 nâng **provenance** lên `SCHOOL_HOSTED_ORIGINAL_URL_INDEXED_TEXT_VERIFIED`. **PDF page visual/bytes/SHA vẫn HOLD**, đặc biệt biểu đồ thống kê III C5 và đồ thị phần I/II C4. Không phát hành formal exam `COVERED/GAP`, không mở `DELTA_C` hoặc review lại Written.
- **Bảo toàn:** 238 canonical D4, khóa các Git blob nguồn G12 ChI/II/III và Academic/PED historical receipts, không tạo content/placement/rubric mới, không can thiệp RD1/Topic/RELEASE.

CHECKPOINT: R18=PRIMARY_SCHOOL_HOSTED_PDF_URL_INDEX_VERIFIED;SCHOOL_PUBLISHER_PAGE_2024_12_29;CODE101_SEVEN_MATH_CHECKS;SAME_EXAM_LINE_PLANE_T_1_2_VS_MINUS_3_2;B01_DOMAIN_COMPONENTS_EXACT_METHOD;B05_RATE_OPTIMIZE_COMPONENTS;EXAM_IMAGE_SHA_HOLD;238_IMMUTABLE;FORMAL_GAP_0

## 8. CLOSEOUT — B07–B08: kiểm toán khép kín năng lực ghép outcome và điều kiện đường thẳng/đoạn thẳng

STAGE_ID: G12-CHII-B07-B08-LINE_GROUND_TRANSFER_DEPTH
LANE: AUTHORING_READ_ONLY
QA_STAGE_VERDICT: BOUNDED_SOURCE_OUTCOME_AUDIT_COMPLETE
S1_GATE: ORIGINAL_OWNER_BOOK_BYTES_SHA_AND_PAGE_IMAGES_VERIFIED
SCHOOL_GATE: ORIGINAL_ISSUER_HOSTED_URL_AND_INDEXED_TEXT_VERIFIED
SCHOOL_PDF_BYTES_AND_PAGE_IMAGES: HOLD
FORMAL_EXAM_COVERED_OR_GAP: NOT_ISSUED
CANONICAL_ITEM_DELTA: ZERO
D4_BASELINE: G10_31_G11_83_G12_124_UNCHANGED
NO_REVIEWER_PASS_REOPENED: TRUE

### 8.1 Phạm vi thực tế đã khóa theo source, không thống kê ước lượng

Đã đọc TOÀN VĂN original Git source G12 ChII B06–B08, Draft #716, source path: prototypes/thpt/content-drafts/G12_SGK_CHII_B06_B08_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md, Git blob SHA **856a37bd16d2746ffc2e12906de18d1f4338a3b6**. Đếm từ 40 item khai báo ITEM_ID/OUTCOME_ID/ROLE trong D3–D4 của riêng B07 và B08:

| Lesson / outcome | CORE | PRACTICE | Written D4 | D2 solved examples | D6 outcome routes |
|---|---:|---:|---:|---:|---:|
| G12-CHII-B07, O01–O04 | 4 | 8 | 4 | 4 | 4 |
| G12-CHII-B08, O01–O06 | 6 | 12 | 6 | 6 | 6 |
| **Toàn bộ hai bài** | **10** | **20** | **10** | **10** | **10** |

Có **40/40 canonical ID khác nhau** ở hai bài, kiểm stem và lời giải của cả 10 Written; có **10/10 ví dụ D2** và định tuyến D6. Đây không phải 40 Written: chỉ 10 là Written và nằm trong 124 G12 đã khóa. Không chỉnh source, placement, rubric hoặc answer.

Bằng chứng thành phần cụ thể từ original source:
- B07 O01: điều kiện thuộc Oxy là z=0; B07-C01.
- B07 O03: mô hình hóa chọn trục và dấu cao/thấp, B07-W03.
- B07 O04: tọa độ B−A và dấu hướng, B07-W04.
- B08 O02: cùng phương u=kv, hệ số âm ở B08-P03 và tham số t trong vectơ ở B08-W02.
- B08 O03: tọa độ trung điểm ở B08-W03.
- B08 O06: chuỗi độ dời 3D→độ dài→tốc độ và điều kiện đường thẳng ở B08-W06.
- Tất cả 10 ví dụ D2 gồm B07-EX01–04 và B08-EX01–06 đều giải theo từng outcome; B08-EX06 đã có máy bay/độ dời/tốc độ nhưng **không** giải bài đường thẳng cắt Oxy.

**Bằng chứng phủ định có giới hạn chặt chẽ:** Trong 40/40 stem, lời giải, 10/10 D2 và lý thuyết D1 của **chính** B07–B08 source-locked, chưa có một ví dụ/nhiệm vụ ghép đủ bốn bước: (1) hướng trục thực tế→tọa độ A,B; (2) một tham số chung cho P=A+t(B−A); (3) từ điều kiện P thuộc Oxy suy z=0 và tìm t; (4) xác định P trên **đường thẳng** hay trên **đoạn** bằng dấu/vị trí t. Toàn source không ghi trực tiếp công thức P=A+t(B−A), các câu B08-W02 chỉ tìm t để **hai vectơ cho trước** cùng phương, chưa dựng điểm giao mặt phẳng.

Finding có phạm vi: **EXACT_MULTI_OUTCOME_TRANSFER_BRIDGE_NOT_PRESENT_IN_INSPECTED_PUBLIC_SOURCE**, trong khi **ALL_PREREQUISITE_METHOD_FAMILIES_PRESENT**. Đây là evidence candidate về độ sâu hướng dẫn, KHÔNG tự kết luận Academic FAIL, Qxx FAIL, không biến chứng nhận PASS lịch sử thành FAIL, không nói ngoài toàn bộ SGK/Topic hoặc website.

### 8.2 Đã kiểm tính toán hai tình huống gốc từ cùng đề trường

Website THPT Phan Huy Chú – Quốc Oai: https://c3phanhuychu.edu.vn/posts/599 ; school-hosted Toán 12 mã 101: https://c3phanhuychu.edu.vn/uploads/embedded_file/file/1258/M%C3%B4n_To%C3%A1n_l%E1%BB%9Bp_12.pdf . Chỉ mục cho thấy 4 trang đề + 1 trang key sáu mã. Thêm nguồn ToanMath/Scribd là đối chứng, **không nhân thành sự kiện thi mới**.

- **Phần II C1, trang in 3/PDF p3:** M=(2;3;−1), N=(−1;1;1). \(\vec{MN}=(-3;-2;2)\). Đặt Q=M+t(N−M), từ Q∈Oxy ⇒ −1+2t=0 ⇒ **t=1/2**, Q=(1/2;2;0). Điểm Q nằm giữa M,N (trên đoạn). Key code 101 mệnh đề liên quan đúng; cả chuỗi Đ/S câu II C1 là **SSĐS**.
- **Phần III C6, trang in 4/PDF p4:** A=(3;2;3), B=(−2;−4;5), B−A=(−5;−6;2). M=A+t(B−A), từ 3+2t=0 ⇒ **t=−3/2**, M=(21/2;11;0), nên **2a+b+c=32**, khớp key code101. t âm ⇒ M nằm **ngoài đoạn AB** nhưng trên đường thẳng AB. Cả hai flycam z dương nên điểm mặt đất chỉ có thể nằm trên phần **kéo dài** đường thẳng, không suy chúng đã bay theo đoạn đó.

Dùng chung một tham số cho cả 3 tọa độ, không ép t∈[0,1] nếu đề chỉ nói thẳng hàng. **Điều kiện:** A≠B; P trên đoạn AB iff 0≤t≤1, trên đường thẳng iff t thực; nếu z_A=z_B≠0 thì đường thẳng không giao mặt phẳng Oxy; nếu z_A=z_B=0, đường thẳng nằm trong Oxy, không có giao duy nhất.

Bằng chứng S1 trực tiếp có checksum và trang in/PDF:
- SGK Toán 12 KNTT Tập 1 (104 trang, SHA256 **faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd**), trang in 70/PDF72 mô hình máy bay/giãn vectơ, trang in 71/PDF73 khinh khí cầu/Oxyz, trang in 72/PDF74 bài 2.21 thẳng hàng, 2.24 mô hình biển.
- SBT Toán 12 KNTT Tập 1 (117 trang, SHA256 **db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca**), trang in 54/PDF52 bài 2.30(c) chứng minh thẳng hàng, trang in 56/PDF54 bài 2.38 nêu B nằm giữa O,A, trang in 58/PDF56 bài 2.48 bài toán tọa độ thực. **Đã render ảnh để đối chiếu lại**, không đưa PDF/scan S1 lên GitHub.

### 8.3 Quyết định đóng khâu và minimal delta chỉ ở dạng đề xuất

**ĐÃ ĐÓNG:** việc kiểm tra source/outcome/độ sâu B07–B08 đã hoàn tất có số liệu item/ví dụ thực và Git SHA; kết luận kỹ năng thành phần hiện hữu nhưng **bridge ghép bốn bước chưa có trong public source được kiểm**. Trạng thái **TRANSFER_DEPTH_REVIEW_CANDIDATE**, không phải formal exam GAP hay Academic/PED re-verdict. Không cần lập R19 và không cần audit lặp cùng bộ đề/cùng source.

**Chỉ đề xuất, KHÔNG thay snapshot:** Khi được chủ dự án cho phép mở lại sư phạm B08, xét một **ví dụ D2/PED5 tích hợp** kèm Tự thử trước Core và D6 quay về ID gốc, không bổ sung Written mới và không động tới 238 item. Mẫu toán riêng để kiểm mô hình, **không sao chép câu thi**: U=(2;1;4), V=(−1;−3;6) ⇒ T=U−2(V−U)=(8;9;0), t=−2 ngoài đoạn; X=(1;2;−3), Y=(5;−2;3) ⇒ Q=X+1/2(Y−X)=(3;0;0), s=1/2 trong đoạn. Chọn một case zA=zB>0 để học sinh biết không có giao Oxy. Cần kiểm rubric/giới hạn/khả năng tự thử và không làm lộ câu RD1. Bất cứ sửa sư phạm source thực nào cũng phải **DELTA_C_ACADEMIC_MATERIAL + independent NotebookLM targeted review** đúng năm Permanent Sources v2.1, sau **owner approval**, bảo toàn các snapshot PASS khác.

**Blocker còn lại KHÁC khâu đã đóng:** School PDF đúng domain trường và nội dung/key đã kiểm qua web indexed text; screenshot trang p3/p4/p5 web vẫn Cache miss, container download DNS failure. Do đó **SCHOOL_PDF_VISUAL_BYTES_SHA_HOLD** vẫn còn; không ghi primary-byte verified, formal exam COVERED/GAP, hay đóng cổng ảnh/biểu đồ. Không phát hành RELEASE/merge/deploy.

END_STAGE_RECEIPT: G12_B07B08_PUBLIC_40_OF_40_ITEMS;B07B08_D2_10_OF_10;B07B08_D6_10_OUTCOMES;OWNER_S1_PDF_CHECKSUM_AND_PAGE_VISUAL;SCHOOL_ISSUER_URL_TEXT_AND_KEY_VERIFIED;T_INSIDE_1_2_VS_T_OUTSIDE_NEG_3_2;TRANSFER_BRIDGE_ABSENT_IN_CHECKED_SOURCE;AUDIT_STAGE_CLOSED;CONTENT_DELTA_ZERO;G10_31_G11_83_G12_124_IMMUTABLE;FORMAL_EXAM_GAP_NONE;SCHOOL_PDF_SHA_HOLD
