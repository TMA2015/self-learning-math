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
