# Chốt 6/6 bài tọa độ–conic trong đề cương giáo viên Trần Phú – Hoàn Kiếm G10 cuối HKII 2025–26

STAGE_ID: G10-TRANPHU-HKII-2026-CONIC-METHOD-CROSSWALK
LANE: AUTHORING_READ_ONLY
RESEARCH_SOURCE_CLASS: SCHOOL_PUBLISHED_TEACHER_REVISION_OUTLINE
SOURCE_IS_ACTUAL_SCHOOL_EXAM: NO
S1_AUTHORITY: SGK_SBT_KNTT
METHOD_DISCOVERY_GATE: TEXT_INDEX_AND_MATH_CHECK_6_OF_6
PDF_IMAGE_BYTES_SHA_GATE: HOLD
CANONICAL_WRITTEN_ADDED_OR_EDITED: ZERO
STAGE_QA: SIX_QUESTION_TYPE_CLASSIFICATIONS_COMPLETE
FORMAL_CONTENT_GAP_VERDICT: NONE
RELEASE_MERGE_DEPLOY: NO

## 1. Nguồn, phạm vi và giới hạn nhận diện

- **Nguồn trường có xác nhận rõ:** THPT Trần Phú – Hoàn Kiếm công bố “Đề cương ôn tập cuối HK2 các môn – Khối lớp 10 – Năm học 2025–2026” **07/04/2026**, gồm PDF Toán 10 là tệp **10/12**: https://thpttranphuhk.hanoi.edu.vn/de-cuong-cau-hoi-on-tap/de-cuong-on-tap-cuoi-hk2-cac-mon-khoi-lop-10-nam-hoc-2025-2026/ctmb/1765/13848 .
- **Tệp trường:** https://file2.hanoi.edu.vn/data/doc/2026/thpttranphuhk/2026_4/7/toan-10noi-dung-on-tap-cuoi-hoc-ky-ii-nam-hoc-2025-2026_7420269.pdf .
- **Bản lưu đủ text-index 16 trang:** https://file.giaitoan.edu.vn/file-pdf/on-tap-cuoi-hoc-ki-2-toan-10-nam-2025-2026-truong-thpt-tran-phu-ha-noi.pdf . Đã đọc trực tiếp **trang PDF 15–16 theo chỉ số một-based = P14–P15 zero-based**: “PHƯƠNG PHÁP TỌA ĐỘ TRONG MẶT PHẲNG → Phần C. Trả lời ngắn”, **sáu Câu 1–6**. Bảng đối chiếu dưới đây áp dụng **chỉ sáu câu này**. Các trang trước còn nhiều MCQ/T-F và phần thống kê–xác suất; không coi sáu câu là toàn bộ booklet.
- **Phân biệt cấu trúc đề và đề cương:** trang PDF 1 (P0) ghi kỳ thi dự kiến có **sáu ý tự luận Phần IV**, nhưng đó là **cấu trúc kế hoạch**, không phải sáu câu conic ở Phần C là đề thi thật. Đây là tuyển tập học tập **SCHOOL_REVISION_GUIDE**, hợp lệ cho tìm **dạng bài**, không dùng để đếm số lần thi.
- **Khiên chứng cứ:** đã thử screenshot PDF mirror P7, P8, P13, P14, P15 qua web, tất cả **Cache miss**; tải PDF mirror trực tiếp vào container thất bại, school-host PDF cũng không truy cập được. Không có ảnh sơ đồ C5, không có PDF source raw SHA. Chỉ các công thức/dữ kiện đọc đủ rõ trong indexed text mới được tính toán; câu phụ thuộc hình giữ ANSWER_VISUAL_HOLD.

## 2. Sáu câu Phần C (trang PDF P14–P15) và đối chiếu thật với SLM

| Nguồn Câu | Dạng bài / chuỗi thao tác | Tự giải/QA số độc lập | Source canonical THPT G10 ChVII có nội dung tương ứng | Kết luận có giới hạn |
|---|---|---|---|---|
| **C1, P14**: vùng phủ sóng tâm I(−2,1), R=3 km, M(−3,4) | **Khoảng cách ngắn nhất từ điểm đến miền hình tròn**: kiểm M ở ngoài/trong trước, áp \`max(0,IM−R)\`, đơn vị/rounding | IM=√10>3, min=√10−3≈**0,16 km** | B21 \`G10-B21-CIRCLE_STANDARD\` D1/PED bắt đầu từ ví dụ trạm phát sóng; \`THPT-G10-B21-C01\` phương trình đường tròn, \`THPT-G10-B21-P01\` hình tròn đường kính. **Không có câu D3/Written nào trong bank ChVII đặt chính bài toán khoảng cách tối thiểu tới miền phủ.** | \`REAL_WORLD_MIN_DISTANCE_BRIDGE_CANDIDATE\` (mức vừa). Công thức khoảng cách đã có, ứng dụng trạm phát được giới thiệu bằng lời; không chứng minh thiếu kiến thức, có thể dùng một ví dụ áp dụng nếu duyệt |
| **C2, P14–P15**: người tuyết gồm hai hình tròn chạm nhau, R_lớn=2R_nhỏ và cao 180 cm | Chuyển chiều cao hai đường kính thành phương trình 2R_lớn+2R_nhỏ=180, giải tỉ lệ | r=30 cm, R=60 cm ⇒ **tổng bán kính 90 cm** | G10 B21 \`CIRCLE_STANDARD\` hiểu bán kính, đường kính; hình học sơ cấp. Không cần dùng conic analytic, không yêu cầu phương pháp ChVII mới. | \`EXISTING_ELEMENTARY_METHOD_NO_NEW_D4\` |
| **C3, P15**: ném đĩa theo đường tròn tâm (1,1), R²=169/144; buông ở M(17/12;2), tìm tiếp tuyến x+by+c=0 | Kiểm M thuộc (C), lấy IM làm pháp tuyến rồi chuẩn hoá hệ số x=1 | IM=(5/12,1); tiếp tuyến \`x+(12/5)y−373/60=0\`; **60(b+c)=−229** | B21 \`THPT-G10-B21-P02\` **chính xác dạng tiếp tuyến tại điểm trên đường tròn**; \`THPT-G10-CHVII-W21-ANCHOR-01\` tích hợp đường tròn và tiếp tuyến; R02 Ped \`G10-B21-CIRCLE_TANGENT\` kiểm điều kiện điểm thuộc trước khi viết tiếp tuyến. | \`EXACT_METHOD_FAMILY_PRESENT\`; bối cảnh thể thao/đổi chuẩn hệ số không tạo họ phương pháp mới; **không đề nghị nhân bản** |
| **C4, P15**: mặt cắt mái nhà vòm **nửa elip**, cao 10m rộng 24m; tại vị trí cách chân tường 4m tìm độ cao | Lựa chọn trục phù hợp; a=12,b=10; điểm trong mép có \|x\|=8; giải \`x²/144+y²/100=1\`, lấy nghiệm y≥0 | y=10√(1−64/144)=**10√5/3≈7,45m** | B22 \`THPT-G10-B22-P01\` dùng tiêu điểm/trục lớn lập phương trình, \`THPT-G10-B22-P05\` tính giao tuyến elip với đường y=3/2; Written \`THPT-G10-CHVII-W22-01\` lập elip + tiếp tuyến ngang. **Chưa có bài ghép kích thước mái thực→trục mô hình→đánh giá chiều cao theo vị trí trong bank ChVII.** | \`ELLIPSE_PHYSICAL_DIMENSION_TRANSFER_CANDIDATE\`, **ưu tiên cao cho depth** chứ chưa là \`COVERAGE_GAP\` |
| **C5, P15**: điều hướng Loran, hai trạm phát cách 300 dặm, trễ thời gian 0,001s, sóng 186.000 dặm/s, tàu trên một nhánh hypebol | Chuyển độ chênh thời gian→độ chênh quãng đường 2a=186; c=150; suy b²=c²−a²=13851; điều kiện vị trí khi cập bờ và trạm số 1 phụ thuộc sơ đồ | **a=93, b²=13851** chắc chắn theo text. Nếu điểm cập bờ là đỉnh nhánh x=−93 gần F1=(−150,0), khoảng cách **57 dặm**; nhánh x=+93 sẽ cách F1 **243 dặm**. **CHƯA chốt kết quả câu C5 khi chưa nhìn hình/cách gắn “trạm số 1”.** | B22 \`THPT-G10-B22-C02\` tìm hai tiêu điểm/tiệm cận; \`THPT-G10-B22-P02\` lập hypebol từ đỉnh/tiêu điểm; D1/PED \`G10-B22-HYPERBOLA_PARAMETERS\` nêu định nghĩa **chênh lệch khoảng cách**. Chưa thấy bài **mô hình tín hiệu chậm→độ chênh quãng đường→hypebol→chọn nhánh/địa điểm thực** trong formative/Written ChVII. | \`HYPERBOLA_TIME_DELAY_MODEL_TRANSFER_CANDIDATE\`; **ưu tiên cao nhưng DIAGRAM_AND_FINAL_ANSWER_HOLD**, không dùng số 57 làm đáp án đã verified |
| **C6, P15**: cổng vòm **parabol úp xuống**, khoảng cách hai chân 162m; vị trí cách chân gần nhất 10m có cao 43m; hỏi chiều cao cực đại | Chọn trục đất từ chân x=0→162, đặt y=kx(162−x) thay vì máy móc dùng y²=2px ở trục ngang; dùng điểm (10,43) tìm k và đỉnh ở x=81 | k=43/1520; H=43·81²/1520=**185,607… ≈185,6 m** (hàng phần mười, theo text) | B22 D1/PED \`G10-B22-PARABOLA_FOCUS\` và \`THPT-G10-B22-P03/P04/P06\` hiện trọng tâm **parabol chính tắc y²=2px mở ngang**, conic focus/directrix và chảo phản xạ; **chưa có mẫu ChVII ghép cổng úp xuống, hai nghiệm chân cổng, điểm nội và cực đại**. Có liên hệ với kiến thức **hàm bậc hai** trong G10; cần kiểm toàn ChIII/SGK S1 trước khi nhận thiếu toàn SGK. | \`DOWNWARD_PARABOLA_GEOMETRIC_MODEL_TRANSFER_CANDIDATE\`, **ưu tiên cao, liên chương cần kiểm**, không phải \`MISSING_PARABOLA_THEORY\` |

**Kiểm nghiệm đối xứng C4/C6:** C4 một mái elip lấy **nửa trên** y≥0, chân tường ở x=±12 nên “4m từ chân” ⇒ x=8 từ tâm theo trị tuyệt đối; C6 đỉnh cổng tại trung điểm 81 m và dùng hàm số bậc hai có hai nghiệm chân cổng. Không nhầm "trục parabol y²=2px" đã học với **mọi** tư thế/bối cảnh của một cổng parabol. **Không sử dụng kết quả số C5 cho formal content decision** khi diagram chưa xem.

## 3. Custody của bank đã xét, tránh suy từ item count

| Học liệu | Git blob SHA | Đã đối chiếu |
|---|---|---|
| AUTHORING G10 ChVII R02 source-lock (Draft #764): \`prototypes/thpt/content-drafts/Temp_G10_SGK_CHVII_FULL_R02_SOURCE_WITH_CANONICAL_REFERENCES_20261105.md\` | \`c5c222af88b0e932f9b60df059d8ffd4da5f0f26\` | B21 \`CIRCLE_STANDARD\`, \`CIRCLE_TANGENT\`; B22 \`ELLIPSE_PARAMETERS\`, \`HYPERBOLA_PARAMETERS\`, \`PARABOLA_FOCUS\`, \`CONIC_MODEL\`; PED1–6/First Try/D6 |
| **32 canonical formative items** in \`docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js\` | \`2b191d7abba7a4f5bd79d4c122673cd53a45495b\` | Đọc **32/32 stems**, bao gồm 8 B21 và 8 B22; phương pháp cụ thể trên items B21-P02, B21-P05, B21-P06, B22-P01–P06, giữ B22-C01 tùy chọn |
| **4 Written/Anchor** in \`docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md\` | \`ebc70018a168998c7dd43b34c3e195a2b1e15ed7\` | **4/4** W19/W20/W21/W22; W21 tích hợp đường tròn/tiếp tuyến, W22 elip từ tiêu điểm, không nhầm 4 D4 với 32 formative |
| **G10 D4 immutable 31** in \`G10_WRITTEN_31_CANONICAL_BASELINE.md\` | \`19ad4b47d4e046d770a4126011dcdccbd899f45a\` | G10 ChVII 4 distinct D4 đã có trong 31; toàn G10–12 **238/238** không thay |

**Lưu ý:** “Không thấy trong 32 bank + 4 D4 của ChVII” là kết luận bounded đối với bank và D2 scope đã đọc, **không** phải khẳng định “chưa có ở toàn bộ SGK 10” hoặc “phải bổ sung D4”. Chương III/hàm bậc hai có thể hỗ trợ chuỗi C6; S1 là trọng tài phạm vi.

## 4. Quyết định khép kín công đoạn loại bài, đề xuất nhỏ có ưu tiên

- **Đã đóng 6/6 đối chiếu dạng bài conic** và tự kiểm toán 5 lời giải số đủ dữ kiện (C1=0,16; C2=90; C3=−229; C4=7,45; C6=185,6); C5 chỉ khoá **a=93**, **b²=13851** và giữ đáp án cuối \`DIAGRAM_HOLD\`. Một mô hình/kết quả tự giải **không phải** school official answer key.
- **C3** phương pháp đã có, **C2** không cần nội dung toán mới. **C1** bridge thực tế mức vừa. **C4/C5/C6** là **ba ứng viên tăng độ sâu tích hợp ưu tiên cao**, không phải ba bài tự luận đã được duyệt hay chính thức GAP.
- **Sự khác biệt một ngữ cảnh thực tế** không đủ chứng minh khuyết toán: ưu tiên **một/tối đa hai** ví dụ PED5/D2 tích hợp cho B22 hoặc áp dụng Canonical Practice hiện hữu trước, thay vì tự tăng số lượng Written; C4 và C6 có độ rõ dữ kiện cao hơn C5. Nếu sau khi kiểm **toàn bài/outcome liên quan, S1 ChVII và G10 ChIII**, chứng minh còn một phương pháp/mức sâu quan trọng thực sự thiếu, lập \`MINIMAL_DELTA\` với source lock, chủ dự án duyệt trước; mới tạo canonical ID khác biệt và targeted independent NotebookLM \`DELTA_C_ACADEMIC_MATERIAL\` đúng 5 Permanent Sources v2.1.
- **Nguồn sưu tập của giáo viên = có giá trị METHOD_DISCOVERY** ngay khi chưa đủ PDF image; giữ riêng \`EXAM_AUTHENTICITY\` cho thống kê đề thi. Không lặp yêu cầu “đề thật trường Hà Nội” để chặn mở rộng kho phương pháp.
- **Không thao tác nhánh RELEASE**, Golden, Firebase, RD1, Topic/PASS/Readiness/Mastery, website hoặc merge/deploy.

CHECKPOINT: TRANPHU_G10_HKII_REVISION_2026|PRIMARY_SCHOOL_PAGE_VERIFIED|SECONDARY_16PAGE_PDF_INDEX_TEXT|SIX_CONIC_Q_LOCI_P14_P15|SIX_OF_SIX_METHODS_CLASSIFIED|FIVE_NUMERICAL_RESULTS_INDEPENDENTLY_CHECKED|LORAN_FINAL_DIAGRAM_HOLD|THREE_HIGH_PRIORITY_DEPTH_CANDIDATES_C4_C5_C6|ONE_MID_C1|EXACT_C3_ALREADY_COVERED|NO_NEW_D4|238_IMMUTABLE|SOURCE_IMAGE_SHA_HOLD|RELEASE_NO
