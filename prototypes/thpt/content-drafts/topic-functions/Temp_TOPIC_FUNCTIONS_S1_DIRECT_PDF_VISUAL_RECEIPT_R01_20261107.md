# SOURCE RECEIPT — Kiểm trực tiếp S1 SGK KNTT Toán 10–12 cho Topic Hàm số và đồ thị

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-VERTICAL-PILOT-PREP-R00-20261107  
**RECEIPT_ID:** TOP-FUNC-S1-DIRECT-VISUAL-R01-20261107  
**ROLE:** AUTHORING academic-source mapping, **not** an Academic/PED verdict.  
**VERIFY_DATE:** 2026-11-07. **MEDIA:** 4 bản scan PDF SGK KNTT thực tế do chủ dự án lưu trên Google Drive; bản quét chỉ chứa hình trang, không có layer text PDF để tìm kiếm (PyMuPDF thử PDF page 1/2/5/9/13/17/25/51, 0 text). **Không dùng OCR**; nhìn trực tiếp hình trang của nguồn đã tải, so sánh trang mục lục và trang mở đầu bài. **Không công khai ID/link Drive hoặc bản PDF nội bộ lên GitHub.**

## 1. Tệp nguồn gốc và nhận dạng

| Mã | Tên PDF gốc trên Drive (chỉ filename) | PDF pages | Raw SHA256 của byte PDF đã tải và kiểm | Đối chiếu trang |
|---|---|---:|---|---|
| S1-G10-T2 | `sach-giao-khoa-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf` | 102 | `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6` | PDF index 1-based = printed page + **1** đối với trang nội dung |
| S1-G11-T1 | `sach-giao-khoa-toan-11-tap-1-ket-noi-tri-thuc-voi-cuoc-song (2).pdf` | 134 | `4492122eb2c9df626582d37b5c3d0e6513d66ca68d80d8a1e69577aa8b706828` | PDF index 1-based = printed page + **1** |
| S1-G11-T2 | `sach-giao-khoa-toan-11-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf` | 114 | `14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491` | PDF index 1-based = printed page + **1** |
| S1-G12-T1 | `sach-giao-khoa-toan-12-tap-1-ket-noi-tri-thuc-voi-cuoc-song (2).pdf` | 104 | `faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd` | PDF index 1-based = printed page + **2** |

**Chứng cứ định vị:** Trang "Mục lục" **thật trong bản scan** và ảnh render trang mở đầu nội dung đối chiếu số trang in ở footer: G10 T2 printed p4 = PDF p5, p11 = PDF p12; G11 T1 p22 = PDF p23, p111 = PDF p112; G11 T2 p16 = PDF p17, p81 = PDF p82; G12 T1 p5 = PDF p7. Số PDF index ở đây **đếm từ 1**, bao gồm bìa, không phải số printed. Đây là các offset đã nhìn trực tiếp theo đúng tập, không áp dụng offset G12 T1 sang tập khác.

## 2. Bảng map **đúng phạm vi** từ mục lục ảnh của S1

| Topic mạch | Thực thể SGK S1 tham chiếu | Số trang in theo mục lục | PDF 1-based phải xem | Ý nghĩa/giới hạn đưa vào Topic |
|---|---|---|---|---|
| M1–M2 | G10 T2 B15 **Hàm số** | 4–10 | 5–11 | Mô hình hàm số, tập xác định, tập giá trị, đồ thị, đồng biến/nghịch biến, ứng dụng; không chỉ một công thức |
| M3 | G10 T2 B16 **Hàm số bậc hai** | 11–18 | 12–19 | Parabol, đỉnh/trục đối xứng/bảng giá trị, mô hình bài toán vườn/tối ưu trong miền |
| M4-A | G11 T1 B03 **Hàm số lượng giác** | 22–30 | 23–31 | **Hàm chẵn, hàm lẻ, tính tuần hoàn, TXĐ, đồ thị sin/cos/tan/cot, chu kỳ và khoảng đơn điệu**; bản map R00 mới nêu chu kỳ và miền, **chưa đầy đủ theo S1** |
| M5-A | G11 T1 B16 **Giới hạn của hàm số** | 111–118 | 112–119 | Giới hạn hữu hạn tại điểm/vô cực; giới hạn một phía/vô cực, phép tính và điều kiện, bài toán xu thế |
| M5-B | G11 T1 B17 **Hàm số liên tục** | 119–122 | 120–123 | Điều kiện liên tục, gián đoạn, phương pháp và ứng dụng theo nguồn |
| M4-B | G11 T2 B20 **Hàm số mũ và hàm số lôgarit** | 16–19 | 17–20 | Nhận biết, TXĐ/tập giá trị, đồ thị, tính chất và tình huống; không nhập toàn bộ B21 phương trình mũ/log nếu đã dành chuyên đề khác |
| M6-A | G11 T2 B31 **Định nghĩa và ý nghĩa của đạo hàm** | 81–87 | 82–88 | Thương sai phân, tiếp tuyến/ý nghĩa vật lý, điều kiện đạo hàm |
| M6-B | G11 T2 B32 **Các quy tắc tính đạo hàm** | 88–94 | 89–95 | Bảng quy tắc/các họ hàm và phạm vi sử dụng phải dạy đủ **trong Topic** nếu áp dụng |
| M6-C | G11 T2 B33 **Đạo hàm cấp hai** | 95–96 | 96–97 | Ý nghĩa đạo hàm cấp hai trong chuyển động/gia tốc, phép tính và giới hạn ngữ cảnh |
| M7-A | G12 T1 B01 **Tính đơn điệu và cực trị của hàm số** | 5–14 | 7–16 | Dấu đạo hàm, cực trị, trường hợp không kết luận, bảng biến thiên |
| M7-B | G12 T1 B02 **GTLN và GTNN của hàm số** | 15–19 | 17–21 | Đầu mút, miền xác định và điều kiện |
| M7-C | G12 T1 B03 **Đường tiệm cận của đồ thị hàm số** | 20–25 | 22–27 | Tiệm cận đứng/ngang/xiên theo giới hạn, lỗ đồ thị |
| M7-D | G12 T1 B04 **Khảo sát sự biến thiên và vẽ đồ thị của hàm số** | 26–32 | 28–34 | Lập đồ thị bằng nguồn toán, các họ hàm phù hợp |
| M7-E | G12 T1 B05 **Ứng dụng đạo hàm giải quyết vấn đề thực tiễn** | 33–41 | 35–43 | Tối ưu, tốc độ và mô hình trên miền khả thi |

**Dẫn chứng nhìn trực tiếp ở trang học:** G10 B15 trang 4 nêu tập xác định/tập giá trị, đồ thị, tăng giảm; B16 trang 11 xuất phát từ bài toán quây vườn ba cạnh với lưới 20 m dẫn đến `S(x)=-2x²+20x` và `0<x<10`. G11 B03 trang 22 nêu rõ **hàm chẵn, hàm lẻ, hàm tuần hoàn**, đồ thị sin/cos/tan/cot; phần này phải có trong Topic nếu đã công bố học hoàn chỉnh. G11 B16 trang 111 có yêu cầu giới hạn tại điểm/vô cực và một phía; B20 trang 16 nêu đồ thị/tính chất hàm mũ và log. G12 ChI bắt đầu p5 theo mục lục, trực tiếp nêu dấu đạo hàm/tính đơn điệu.

### 07/11/2026 — AUTHORING SOURCE-PAGINATION CORRECTION (DELTA_B, G12 T1 only)

Trong phiên bản R01 trước đây, tác giả đã **ghi nhầm** offset SGK G12 Tập 1 là `printed+3` (ví dụ trang in 5→PDF 8). Đọc lại trực tiếp đúng PDF bytes SHA256 `faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd` cho thấy **printed+2**: trang in 5 nằm ở PDF 1-based trang 7 (ảnh mở B01), trang in 15→PDF 17 (mở B02), trang in 26→PDF 28 (mở B04), và nguồn G12 CHI canonical R00 đã ghi đúng offset này. **Các hàng M7 trên đã sửa; dòng offset+3 cũ KHÔNG còn hiệu lực.** Đây là sửa metadata nguồn/receipt, không đổi bài toán, đáp án, rubric hay PASS của nguồn học liệu lịch sử; áp dụng chỉ cho bốn PDF SGK được định vị trong biên bản này và không suy offset G12 sang tập khác. Mọi lần review trích trang G12 từ phiên bản trước phải dùng biên bản R01 đã sửa và kiểm snapshot SHA hiện hành.

## 3. Phạm vi thực sự của lượt kiểm và các lỗ hổng chưa được coi PASS

- **SOURCE_IDENTIFICATION=PASS:** đã tải **đúng 4 SGK gốc** và kiểm SHA256 thực tế; ảnh mục lục và các trang mở đầu được nhìn trực tiếp. `PDF_PRINTED_OFFSET_VERIFIED=YES_ON_ANCHORS`.
- **S1_SCOPE_MAP=VERIFIED_BY_ORIGINAL_TOC_AND_LESSON_OPENINGS** cho các hàng ở bảng. Các trang trong khoảng được suy theo mốc mở đầu bài tiếp theo và đều nằm trong 4 PDF đã tải; **chưa chứng nhận mọi mục nhỏ/bài tập trong từng khoảng đã được đọc đầy đủ**. Trước khi hoàn tất FULL D1–D6/outcome cần rà trực tiếp toàn bộ các trang liên quan, không lấy mục lục thay nội dung gốc.
- **SBT_SOURCE_NOT_FULLY_AUDITED_IN_THIS_PASS:** KNTT SBT G10–12 chưa được mở theo cùng bảng, chỉ SGK S1 ở trên được định vị trực tiếp. SBT là tham khảo họ dạng; không suy SBT "không có nội dung".
- **MATH_PED_GAP_IDENTIFIED:** mạch M4 trong R00 cần bổ sung `EVEN_ODD_SYMMETRY` (hàm chẵn/lẻ, tính đối xứng, đồ thị và điều kiện miền), cùng đầy đủ tính chất các hàm lượng giác; mạch M6 phải thêm bảng phương pháp/giới hạn áp dụng quy tắc đạo hàm. **Đây là Q01/Q02/D1-PED delta cần biên soạn**, chưa cấp PASS.
- **TOPIC_INDEPENDENCE:** nội dung do Topic trình bày hoàn toàn tại chỗ, không bắt mở SGK; S1 dẫn chỉ dành cho hồ sơ tác giả. Đồ thị/HELP/Practice canonical dùng chung qua placement nhưng trải nghiệm học diễn ra trong Topic.
- **REVIEW_SCOPE:** phần mới/được viết lại so với G10 R01 là Delta C và các module G11/G12 Topic mới chưa reviewer xác nhận. Không review lại 238 Written SGK bất biến; không viện PASS SGK làm Topic PASS.
- **NO_RD1/WEB:** không đưa private RD1, không cập nhật website hay tự cấp Mastery.

**NEXT:** cập nhật proposed outcome M4; rà toàn văn S1 các khoảng trên theo module; chốt hoàn chỉnh D1–D6/PED và đề bài canonical Topic, bảo vệ PASS G10 R01; chỉ sau đó làm gói NotebookLM với đúng 5 Permanent v2.1 và source receipt.
