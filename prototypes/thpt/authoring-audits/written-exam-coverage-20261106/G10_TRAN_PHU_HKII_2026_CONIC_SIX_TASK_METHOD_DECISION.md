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
| **C1, P14**: vùng phủ sóng tâm I(−2,1), R=3 km, M(−3,4) | **Khoảng cách ngắn nhất từ điểm đến miền hình tròn**: kiểm M ở ngoài/trong trước, áp `max(0,IM−R)`, đơn vị/rounding | IM=√10>3, min=√10−3≈**0,16 km** | B21 `G10-B21-CIRCLE_STANDARD` D1/PED bắt đầu từ ví dụ trạm phát sóng; `THPT-G10-B21-C01` phương trình đường tròn, `THPT-G10-B21-P01` hình tròn đường kính. **Không có câu D3/Written nào trong bank ChVII đặt chính bài toán khoảng cách tối thiểu tới miền phủ.** | `REAL_WORLD_MIN_DISTANCE_BRIDGE_CANDIDATE` (mức vừa). Công thức khoảng cách đã có, ứng dụng trạm phát được giới thiệu bằng lời; không chứng minh thiếu kiến thức, có thể dùng một ví dụ áp dụng nếu duyệt |
| **C2, P14–P15**: người tuyết gồm hai hình tròn chạm nhau, R_lớn=2R_nhỏ và cao 180 cm | Chuyển chiều cao hai đường kính thành phương trình 2R_lớn+2R_nhỏ=180, giải tỉ lệ | r=30 cm, R=60 cm ⇒ **tổng bán kính 90 cm** | G10 B21 `CIRCLE_STANDARD` hiểu bán kính, đường kính; hình học sơ cấp. Không cần dùng conic analytic, không yêu cầu phương pháp ChVII mới. | `EXISTING_ELEMENTARY_METHOD_NO_NEW_D4` |
| **C3, P15**: ném đĩa theo đường tròn tâm (1,1), R²=169/144; buông ở M(17/12;2), tìm tiếp tuyến x+by+c=0 | Kiểm M thuộc (C), lấy IM làm pháp tuyến rồi chuẩn hoá hệ số x=1 | IM=(5/12,1); tiếp tuyến `x+(12/5)y−373/60=0`; **60(b+c)=−229** | B21 `THPT-G10-B21-P02` **chính xác dạng tiếp tuyến tại điểm trên đường tròn**; `THPT-G10-CHVII-W21-ANCHOR-01` tích hợp đường tròn và tiếp tuyến; R02 Ped `G10-B21-CIRCLE_TANGENT` kiểm điều kiện điểm thuộc trước khi viết tiếp tuyến. | `EXACT_METHOD_FAMILY_PRESENT`; bối cảnh thể thao/đổi chuẩn hệ số không tạo họ phương pháp mới; **không đề nghị nhân bản** |
| **C4, P15**: mặt cắt mái nhà vòm **nửa elip**, cao 10m rộng 24m; tại vị trí cách chân tường 4m tìm độ cao | Lựa chọn trục phù hợp; a=12,b=10; điểm trong mép có \|x\|=8; giải `x²/144+y²/100=1`, lấy nghiệm y≥0 | y=10√(1−64/144)=**10√5/3≈7,45m** | B22 `THPT-G10-B22-P01` dùng tiêu điểm/trục lớn lập phương trình, `THPT-G10-B22-P05` tính giao tuyến elip với đường y=3/2; Written `THPT-G10-CHVII-W22-01` lập elip + tiếp tuyến ngang. **Chưa có bài ghép kích thước mái thực→trục mô hình→đánh giá chiều cao theo vị trí trong bank ChVII.** | `ELLIPSE_PHYSICAL_DIMENSION_TRANSFER_CANDIDATE`, **ưu tiên cao cho depth** chứ chưa là `COVERAGE_GAP` |
| **C5, P15**: điều hướng Loran, hai trạm phát cách 300 dặm, trễ thời gian 0,001s, sóng 186.000 dặm/s, tàu trên một nhánh hypebol | Chuyển độ chênh thời gian→độ chênh quãng đường 2a=186; c=150; suy b²=c²−a²=13851; điều kiện vị trí khi cập bờ và trạm số 1 phụ thuộc sơ đồ | **a=93, b²=13851** chắc chắn theo text. Nếu điểm cập bờ là đỉnh nhánh x=−93 gần F1=(−150,0), khoảng cách **57 dặm**; nhánh x=+93 sẽ cách F1 **243 dặm**. **CHƯA chốt kết quả câu C5 khi chưa nhìn hình/cách gắn “trạm số 1”.** | B22 `THPT-G10-B22-C02` tìm hai tiêu điểm/tiệm cận; `THPT-G10-B22-P02` lập hypebol từ đỉnh/tiêu điểm; D1/PED `G10-B22-HYPERBOLA_PARAMETERS` nêu định nghĩa **chênh lệch khoảng cách**. Chưa thấy bài **mô hình tín hiệu chậm→độ chênh quãng đường→hypebol→chọn nhánh/địa điểm thực** trong formative/Written ChVII. | `HYPERBOLA_TIME_DELAY_MODEL_TRANSFER_CANDIDATE`; **ưu tiên cao nhưng DIAGRAM_AND_FINAL_ANSWER_HOLD**, không dùng số 57 làm đáp án đã verified |
| **C6, P15**: cổng vòm **parabol úp xuống**, khoảng cách hai chân 162m; vị trí cách chân gần nhất 10m có cao 43m; hỏi chiều cao cực đại | Chọn trục đất từ chân x=0→162, đặt y=kx(162−x) thay vì máy móc dùng y²=2px ở trục ngang; dùng điểm (10,43) tìm k và đỉnh ở x=81 | k=43/1520; H=43·81²/1520=**185,607… ≈185,6 m** (hàng phần mười, theo text) | B22 D1/PED `G10-B22-PARABOLA_FOCUS` và `THPT-G10-B22-P03/P04/P06` hiện trọng tâm **parabol chính tắc y²=2px mở ngang**, conic focus/directrix và chảo phản xạ; **chưa có mẫu ChVII ghép cổng úp xuống, hai nghiệm chân cổng, điểm nội và cực đại**. Tuy nhiên G10 ChVI B16 ĐÃ dạy parabol mở xuống, nghiệm chân mặt đất, giới hạn miền thực tế và cực đại; xem phần 3.1 dưới đây. Không gọi là thiếu phương pháp toàn SGK. | `DOWNWARD_PARABOLA_GEOMETRIC_MODEL_TRANSFER_CANDIDATE`, **ưu tiên cao, liên chương cần kiểm**, không phải `MISSING_PARABOLA_THEORY` |

**Kiểm nghiệm đối xứng C4/C6:** C4 một mái elip lấy **nửa trên** y≥0, chân tường ở x=±12 nên “4m từ chân” ⇒ x=8 từ tâm theo trị tuyệt đối; C6 đỉnh cổng tại trung điểm 81 m và dùng hàm số bậc hai có hai nghiệm chân cổng. Không nhầm "trục parabol y²=2px" đã học với **mọi** tư thế/bối cảnh của một cổng parabol. **Không sử dụng kết quả số C5 cho formal content decision** khi diagram chưa xem.

## 3. Custody của bank đã xét, tránh suy từ item count

| Học liệu | Git blob SHA | Đã đối chiếu |
|---|---|---|
| AUTHORING G10 ChVII R02 source-lock (Draft #764): `prototypes/thpt/content-drafts/Temp_G10_SGK_CHVII_FULL_R02_SOURCE_WITH_CANONICAL_REFERENCES_20261105.md` | `c5c222af88b0e932f9b60df059d8ffd4da5f0f26` | B21 `CIRCLE_STANDARD`, `CIRCLE_TANGENT`; B22 `ELLIPSE_PARAMETERS`, `HYPERBOLA_PARAMETERS`, `PARABOLA_FOCUS`, `CONIC_MODEL`; PED1–6/First Try/D6 |
| **32 canonical formative items** in `docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js` | `2b191d7abba7a4f5bd79d4c122673cd53a45495b` | Đọc **32/32 stems**, bao gồm 8 B21 và 8 B22; phương pháp cụ thể trên items B21-P02, B21-P05, B21-P06, B22-P01–P06, giữ B22-C01 tùy chọn |
| **4 Written/Anchor** in `docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md` | `ebc70018a168998c7dd43b34c3e195a2b1e15ed7` | **4/4** W19/W20/W21/W22; W21 tích hợp đường tròn/tiếp tuyến, W22 elip từ tiêu điểm, không nhầm 4 D4 với 32 formative |
| **G10 D4 immutable 31** in `G10_WRITTEN_31_CANONICAL_BASELINE.md` | `19ad4b47d4e046d770a4126011dcdccbd899f45a` | G10 ChVII 4 distinct D4 đã có trong 31; toàn G10–12 **238/238** không thay |

**Lưu ý:** “Không thấy trong 32 bank + 4 D4 của ChVII” là kết luận bounded đối với bank và D2 scope đã đọc, **không** phải khẳng định “chưa có ở toàn bộ SGK 10” hoặc “phải bổ sung D4”. Chương III/hàm bậc hai có thể hỗ trợ chuỗi C6; S1 là trọng tài phạm vi.

### 3.1. Đối chiếu bổ sung nguyên nguồn G10 ChVI B16 — đóng nguy cơ nhận nhầm C6 là dạng toán thiếu

**Lưu ý chương học:** kiến thức hàm bậc hai/hàm số parabol nằm ở **Chương VI Bài 16**, KHÔNG phải Chương III. Đã đọc trực tiếp toàn tác vụ B16 trong source canonical G10 ChVI R04, path `prototypes/thpt/content-drafts/Temp_G10_SGK_CHVI_FULL_R04_CONSOLIDATED_AUTHOR_SOURCE_20261105.md`, Git blob **3f3d32c3bfd13634dad033970e944a3623cb5f14** tại source commit `7ed565eb1e85345f35013cb4bc9150067d7ee248`.

- `B16_OUT_03`, `THPT-G10-CHVI-TRY08`: từ dạng đỉnh suy đồ thị, giao trục Ox, hai nghiệm và tính đối xứng — đúng các phép xây mô hình chân cổng.
- `B16_OUT_05`, `THPT-G10-CHVI-TRY10`: mô hình độ cao của vật bay `h(t)=-5t²+20t`, miền vật lý `0≤t≤4`, nghiệm ở t=0,4, cực đại tại t=2, giải thích giới hạn đơn vị. Đây là **một ví dụ tích hợp nhiều bước của một parabol mở xuống theo thời gian**.
- `THPT-G10-CHVI-APP-A2`: chuyển `-x²+6x−5` về dạng đỉnh; `HPT-WRI-DEMO-01` và `HPT-WRI-DEMO-ANCHOR-01` là D4 gốc cho B16, không được nhân bản.

**Kết luận C6 sau khi xem ChVI:** các thao tác hai nghiệm→đỉnh→GTLN có trong SLM **và** tình huống thực tế đã có ở B16, nên **không có căn cứ nói thiếu phương pháp parabol mở xuống trong G10**. Một bước ứng dụng khác là **tự lập hệ số** `k` từ bề rộng/điểm đo của cổng; chưa tìm thấy trong B16/B22 đã kiểm, nhưng mới là `PHYSICAL_PARAMETER_FIT_TRANSFER_DEPTH_CANDIDATE` **ưu tiên trung bình**. Cần tránh chỉ dùng khác ngữ cảnh cổng/vật bay để tăng số lượng Written.

### 3.2. Kiểm soát chất lượng nguồn luyện tập (không coi tuyển tập là đáp án chuẩn)

Ở **phần Thống kê và Xác suất, Phần C Câu 6, PDF P8** có câu “số ghế trống ... trong **9 ngày**” nhưng dòng dữ liệu văn bản chỉ mục liệt kê **10 số**: 12,7,10,9,12,9,10,11,10,14. Đây là **SOURCE_INCONSISTENCY_CANDIDATE** của tài liệu luyện (số ngày khác số quan sát) và phải đánh dấu **INPUT_DATA_VISUAL_HOLD**, không tự bỏ một số để tính IQR hoặc sửa lén giả thiết. Cần xem PDF trang gốc để biết có OCR lặp số hay lỗi biên soạn thật.

Điều đó không làm mất giá trị tài liệu giáo viên để tìm **dạng bài**; chỉ có nghĩa phải có bước kiểm toán dữ kiện và giải toán trước khi chuyển một câu thành nguồn soạn học liệu.

## 4. Quyết định khép kín công đoạn loại bài, đề xuất nhỏ có ưu tiên

- **Đã đóng 6/6 đối chiếu dạng bài conic** và tự kiểm toán 5 lời giải số đủ dữ kiện (C1=0,16; C2=90; C3=−229; C4=7,45; C6=185,6); C5 chỉ khoá **a=93**, **b²=13851** và giữ đáp án cuối `DIAGRAM_HOLD`. Một mô hình/kết quả tự giải **không phải** school official answer key.
- **C3** phương pháp đã có, **C2** không cần nội dung toán mới. **C1** bridge thực tế mức vừa. **C4/C5** là **hai ứng viên tăng độ sâu tích hợp ưu tiên cao**; **C6** hạ ưu tiên trung bình sau khi kiểm G10 ChVI B16, không phải ba bài tự luận đã được duyệt hay chính thức GAP.
- **Sự khác biệt một ngữ cảnh thực tế** không đủ chứng minh khuyết toán: ưu tiên **một/tối đa hai** ví dụ PED5/D2 tích hợp cho B22 hoặc áp dụng Canonical Practice hiện hữu trước, thay vì tự tăng số lượng Written; C4 có đủ dữ kiện, C5 giữ hình/đáp án cuối HOLD; C6 có cơ sở B16 nên chưa ưu tiên bài mới. Nếu sau khi kiểm **toàn bài/outcome liên quan và S1 ChVII / ChVI**, chứng minh còn một phương pháp/mức sâu quan trọng thực sự thiếu, lập `MINIMAL_DELTA` với source lock, chủ dự án duyệt trước; mới tạo canonical ID khác biệt và targeted independent NotebookLM `DELTA_C_ACADEMIC_MATERIAL` đúng 5 Permanent Sources v2.1.
- **Nguồn sưu tập của giáo viên = có giá trị METHOD_DISCOVERY** ngay khi chưa đủ PDF image; giữ riêng `EXAM_AUTHENTICITY` cho thống kê đề thi. Không lặp yêu cầu “đề thật trường Hà Nội” để chặn mở rộng kho phương pháp.
- **Không thao tác nhánh RELEASE**, Golden, Firebase, RD1, Topic/PASS/Readiness/Mastery, website hoặc merge/deploy.

CHECKPOINT: TRANPHU_G10_HKII_REVISION_2026|PRIMARY_SCHOOL_PAGE_VERIFIED|SECONDARY_16PAGE_PDF_INDEX_TEXT|SIX_CONIC_Q_LOCI_P14_P15|SIX_OF_SIX_METHODS_CLASSIFIED|FIVE_NUMERICAL_RESULTS_INDEPENDENTLY_CHECKED|LORAN_FINAL_DIAGRAM_HOLD|TWO_HIGH_PRIORITY_DEPTH_CANDIDATES_C4_C5|TWO_MID_C1_C6|EXACT_C3_ALREADY_COVERED|NO_NEW_D4|238_IMMUTABLE|SOURCE_IMAGE_SHA_HOLD|RELEASE_NO

## 5. S1 DIRECT PDF — elliptical tunnel and LORAN (SOURCE VALIDATION COMPLETE, no content edit)

**Gate:** AUTHORING read-only source/depth analysis COMPLETE; original owner's S1 book PDF byte SHA and page-images VERIFIED; current public SLM B22 integrated transfer task ABSENT_IN_INSPECTED_SCOPE; Academic/PED re-verdict NOT ISSUED; new Written 0; targeted Delta C OWNER_APPROVAL_REQUIRED. Teacher-outline C5 final answer still DIAGRAM_HOLD, separate from S1 page verification.

### 5.1 Original S1 books, printed pages vs PDF pages, direct visual review

| Original S1 PDF from owner's KNTT TOAN 10 Drive folder | SHA256 exact bytes | Printed page = PDF page (1-based) | Verified original exercise / educational significance |
|---|---|---|---|
| SGK Toán 10 KNTT Tập Hai, 102 PDF pages, 21,979,142 bytes | ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6 | **printed 56 = PDF57** | **SGK 7.24**: two radio stations 300 km apart, 292,000 km/s radio speed, receiving-time difference 0.0005 s; signal from A earlier than B; model hyperbola AND identify branch. This is an actual main textbook exercise, not just optional fun facts |
| Same original SGK | same | **printed 56–57 = PDF57–58** | LORAN information box: time-delay difference implies distance difference; a station pair determines one hyperbola branch, adding station pairs determines intersection |
| Same original SGK | same | **printed 51 = PDF52** | Worked **Ví dụ 3**: equal distance to two disjoint circular islands implies constant difference of distances to their centres; explains how physical context creates hyperbola |
| SBT Toán 10 KNTT Tập Hai, 143 PDF pages, 16,249,440 bytes | 3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7 | **printed 46 = PDF47** | **SBT 7.35**: a tunnel with a **semi-ellipse** cross section, 12 m wide and 3 m high; asks whether a vehicle 2.8 m high and no more than 3 m wide can pass; includes axis diagram |
| Same original SBT | same | **printed 50 = PDF51** | **SBT 7.61**: whispering gallery whose horizontal cross-section is a semiellipse of width 80 feet and height 24 feet; uses focal positions and conversion to metres, further applied ellipse variety |
| Same original SBT | same | **printed 47 = PDF48** | **SBT 7.37**: lunar elliptic orbit and distance from one focus, further non-duplicate physical ellipse application |

**Source custody:** both original scanned PDFs fetched from owner Drive folder KNTT TOAN 10, SHA256 independently computed on complete files and specified printed pages manually rendered/read; no OCR and no textbook scans committed to public GitHub. Do NOT confuse SGK/SBT checksum confidence with the teacher-outline PDF that still lacks original bytes/image.

### 5.2 Exact S1 exercise mathematical audit (self-computed, not claimed official key)

**SGK 7.24 (radio hyperbola):** O midpoint of AB, A=(-150,0), B=(150,0), unit km. Time delay makes absolute distance difference 292000*0.0005 = **146 km**, so 2a=146, **a=73**, **c=150**, **b²=22500-5329=17171**. Hyperbola equation is x²/5329 - y²/17171 = 1. Because signal from A arrives earlier, distance to A is shorter: P lies on **left branch x≤-73** under A-left convention. Check 0<146<300 to ensure a<c. This includes actual modelling, units, magnitude and orientation, unlike only reading coefficients of a supplied equation.

**SBT 7.35 (ellipse tunnel):** use centred vehicle and y>=0 ground-plane model x²/36+y²/9=1, y>=0. For vehicle width 3 m, edges x=±1.5. The roof height there is y=3sqrt(1-(1.5/6)²)=**3sqrt(15)/4 ≈2.9047 m**, larger than 2.8m by **0.1047 m**. Thus it *can* pass in the idealized centred configuration, not if parked arbitrarily near a side. Student must distinguish outline ellipse from interior clearance, fit axes from physical measurements, and explain constraints.

**Teacher C4** is the **same method family** as SBT 7.35, not an entirely new out-of-curriculum topic: 24m width, 10m height, 4m from side => |x|=8, y=10sqrt(5)/3≈7.4536m. **Teacher C5** is the **same method family** as main SGK 7.24: two transmitters with time lag, multiply speed by time, a=93 miles, b²=13851 miles². Original teacher figure needed to give final distance-to-station number; do not use guessed 57 miles as official key.

### 5.3 Current canonical public learner source comparison — all 23 PED outcomes, 32/32 D3 and 4/4 D4

Original approved G10 ChVII R02 source Draft #764:
prototypes/thpt/content-drafts/Temp_G10_SGK_CHVII_FULL_R02_SOURCE_WITH_CANONICAL_REFERENCES_20261105.md — Git blob **c5c222af88b0e932f9b60df059d8ffd4da5f0f26** (81,529 characters). Exact D3 bank docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js Git blob **2b191d7abba7a4f5bd79d4c122673cd53a45495b** (32/32 stems). Four unchanged D4 items in docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md Git blob **ebc70018a168998c7dd43b34c3e195a2b1e15ed7** (4/4 stems and solutions).

| S1-backed method | What SLM ALREADY covers | Evidence of bounded application depth still absent in the inspected canonical |
|---|---|---|
| Semiellipse tunnel/architecture | G10-B22-ELLIPSE_PARAMETERS, B22-P01: equation from foci/major axis; B22-P05: ellipse intersect with y=constant when equation is given. B22 Written W22-01: derive ellipse from foci and find a horizontal tangent | No D2 worked task or D3/D4 exercise converts physical *width+height* into semiellipse and checks a vehicle's clearance or the height at a side offset. The current CONIC_MODEL PED example TRY23 models **parabola width**, not an ellipse tunnel |
| Radio-time-delay hyperbola | G10-B22-HYPERBOLA_PARAMETERS, B22-C02 and P02: foci/vertices/asymptotes from given equation, or equation from given foci/vertices; PED describes focal distance difference | No D2 worked task or D3/D4 exercise asks convert **wave speed × arrival-time difference** into focal-distance difference 2a, derive b², choose physical branch from "A earlier", and check 0<2a<2c. The word LORAN and source exercise 7.24 method-chain are not demonstrated in the inspected public source |

**What this proves and does not:** It is FALSE that ellipse tunnels/LORAN are outside or missing from original S1: **both are explicit core S1 exercises**, so user-supplied teacher revision cases are strong *confirmation of relevant types*. It is FALSE that SLM is missing basic ellipse/hyperbola definitions: these are taught. But **the integrated S1 practice chains are not present in the public B22 materials just audited**, which is an evidence-backed **S1_ANCHORED_INTEGRATED_PRACTICE_DEPTH_OMISSION_CANDIDATE**. It is NOT permission to rewrite old PASS, mark Q01/Q04 FAIL, assert the entire G10 or Topic lacks these abilities, or call the school exam source byte verified.

### 5.4 Minimal owner-decision proposals (candidate only: no canonical item or change made)

| Candidate proposal ref (NOT an ITEM_ID) | S1 anchor | Minimal desired learner step | Possible extra Written ONLY AFTER owner approval |
|---|---|---|---|
| P-G10-B22-ELLIPSE-REALMODEL | SBT 7.35 printed p46; teacher C4 | One **D2/PED5 worked-example**: choose a,b from height+span, read half-ellipse y>=0, solve boundary height, interpret clearance/domain; include a preceding self-try and D6 back to B22-P01/P05 | One new fully independent D4 problem only if owner wants Written transfer evidence; must be materially distinct from SBT 7.35, teacher C4 and old W22 |
| P-G10-B22-HYPERBOLA-TIME | **SGK 7.24 printed p56**; teacher C5 | One **D2/PED5 worked-example**: station coords, delta travel time => distance difference, a/c/b, station-order selects branch, units and feasibility; D6 back to B22-C02/P02 | One new D4 problem if owner approves, with mathematically complete independent givens and rubric, not a clone of main SGK 7.24 |

**Priority:** both are S1-anchored and are stronger candidates than merely changing scenery/figures. If authorized, treat addition of worked explanations and/or D4 as DELTA_C_ACADEMIC_MATERIAL and target **only the affected new content** with NotebookLM independent review and exactly 5 permanent v2.1 sources + S1, canonical unique IDs, outcome matrix, no second standard or Topic PASS. No new source has been created; 238 existing D4 are still intact (G10 31/G11 83/G12 124). Do not continue searching official semester exam originals as a gate for these two S1 method discoveries.

**CLOSED:** source grounding and canonical method-depth comparison for C4/C5. **OPEN SEPARATELY:** owner decision to write material, teacher-outline C5 diagram/official answer, Q18 targeted reviewer if material ever changes, and release eligibility. No merge/deploy.

CLOSEOUT: SGK10_T2_SHA_ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6;SGK_7_24_P56_LORAN;SBT10_T2_SHA_3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7;SBT_7_35_P46_ELLIPSE_TUNNEL;CANONICAL_32_D3_4_D4_CROSSED;2_S1_TRANSFER_APPLICATIONS_NOT_PRESENT_IN_SCOPE;OWNER_PENDING;NEW_WRITTEN_ZERO;238_D4_IMMUTABLE

## 6. OWNER DECISION PACKET — MINIMAL ADDITION, PRIORITY, NON-DUPLICATE QA PROBES (khép khâu thiết kế, chưa phải học liệu)

STAGE: G10_B22_S1_ANCHORED_MINIMAL_CHANGE_DECISION_READY
S1_SOURCE_DIRECT_SHA_PAGE_VISUAL: PASS (as in §5)
EXISTING_D1_D2_D3_D4_READ: PASS (23 outcomes; 32 D3; 4 D4)
CANONICAL_ITEM_ADDED_OR_CHANGED: 0
OWNER_CONTENT_DELTA_APPROVAL: PENDING
AUTHORING_CONTENT_READY: NO
ACADEMIC_PED_NEW_REVIEW: NOT_STARTED
THIS_SECTION_IS_AUDIT_SPEC_ONLY: TRUE

### 6.1 Điều thực sự thiếu và điều KHÔNG được làm

**Thực sự thiếu trong đúng snapshot SGK G10 ChVII đã đối chiếu:** Với outcome hiện hữu \`G10-B22-ELLIPSE_PARAMETERS\`, chưa có hướng dẫn + tự luyện dựng **nửa elip từ kích thước thực tế**, thay tọa độ của một vị trí, phân tích khoảng hở và điều kiện vật lý. Với \`G10-B22-HYPERBOLA_PARAMETERS\`, chưa có hướng dẫn + tự luyện biến **độ trễ tín hiệu thành 2a**, kiểm \`0<2a<2c\`, tính \`b²\`, rồi chọn **nhánh** bằng trạm nhận tín hiệu sớm; cả hai đều được yêu cầu trong S1.

**Không thiếu:** khái niệm/định nghĩa/hệ thức cơ bản elip–hypebol, conic equation, foci/vertices, đơn vị và trung điểm; \`THPT-G10-B22-P01/P02/P05\` và \`THPT-G10-CHVII-W22-01\` đã có những phần đó. Không đổi lời giải/rubric các ID hiện hữu, không nâng \`G10-B22-CONIC_MODEL\` (hiện dạy parabol) thành outcome elip/hypebol bằng một tag thiếu cơ sở.

### 6.2 Phương án MINIMAL_DELTA theo thứ tự tiết kiệm nội dung

| Mức ưu tiên | Scope đề xuất (chưa thi hành) | Vì sao cần, và giới hạn |
|---|---|---|
| **P1** | Thêm **một D2/PED5 hướng dẫn đầy đủ “hypebol từ độ trễ tín hiệu”** trong existing \`G10-B22-HYPERBOLA_PARAMETERS\`, với một **Tự thử trước Core**, D6 dẫn trở lại \`THPT-G10-B22-C02/P02\`. Nếu cần minh chứng học sinh tự giải độc lập, **một Written D4 mới** thuộc họ định vị (canonical ID cấp sau, không copy SGK 7.24). | **Toàn ChVII hiện không có Written riêng cho hypebol**, vì D4 B22 duy nhất \`THPT-G10-CHVII-W22-01\` về elip. Họ phương pháp đã có ở SGK 7.24, nhưng chưa thành chuỗi vận dụng public hiện có. Đây là đề xuất D4 có tính bổ sung năng lực, không phải đổi số trong SGK. |
| **P2** | Thêm **một D2/PED5 “nửa elip – điều kiện khoảng hở”** dưới \`G10-B22-ELLIPSE_PARAMETERS\`, có bước nhận dạng miền y≥0 và D6 quay B22-P01/P05. **Không mặc định thêm D4 elip** ở lượt đầu. | Bài SBT 7.35 chứng minh cần transfer model, nhưng ChVII đã có 1 Written B22 elip từ dữ kiện tiêu điểm. Bổ sung D2 trước giảm ngân hàng trùng họ; một D4 mới chỉ khi có bằng chứng năng lực *tự dựng ứng dụng* vẫn chưa được đo và owner chọn mở rộng. |
| **Không làm** | Không thêm hai bài là bản sao SBT 7.35 và SGK 7.24; không biến tuyển tập ôn tập thành đề thi thật; không tự sửa outcome counts/Q01–Q18, không cấp thêm Core riêng hay Topic READINESS; không đụng 238 D4 đã PASS. | Tránh trùng lặp, Q15 duplicate, Q16 leakage, nội dung dàn trải và việc mất hiệu lực receipt snapshot đã khóa. |

**Điểm chốt quy mô đề xuất:** \`2_D2_EXPLANATION_BRIDGES + OPTIONAL_1_DISTINCT_HYPERBOLA_WRITTEN\` là **phương án học liệu nhỏ nhất có lý do mạnh**; \`ELIPSE_SECOND_D4\` chỉ là dự phòng. Tất cả **chưa tạo item_id** và **chưa biên soạn vào nguồn học liệu**.

### 6.3 Hai QA probe tính toán TỰ TẠO để định nghĩa độ sâu (không là đề mới, không cấp canonical ID)

Đây là bộ số thử **chỉ cho kiểm toán phương pháp**, dùng để xác định rubric/checklist cho một delta tương lai. Không là đề đã duyệt, không cung cấp cho học sinh và không dùng thay SGK/SBT.

**QA-ELLIPSE-01 — phân biệt “đủ độ cao” và “đủ khoảng an toàn”:**
- Mái kính nửa elip đối xứng, rộng 20 m, cao 6 m (không giống SBT 7.35 hoặc GV C4), gốc ở tâm nền, lấy nửa trên. \(x²/100+y²/36=1, y≥0, |x|≤10\).
- Tại vị trí \(|x|=8\) m, mái cao \(y=6\sqrt{1-64/100}=\mathbf{3.6}\) m. Vật cao 3.5 m **không chạm mái** nhưng **chỉ dư 0.1 m**, nên **không đạt** yêu cầu chừa ít nhất 0.2 m. Không được đáp “đi qua được” mà bỏ điều kiện an toàn. Hai cách hỏi (không va chạm / đạt khoảng an toàn) có kết luận khác nhau.
- Cổng PED5: chọn trục và đơn vị → từ rộng/cao suy a,b đúng vị trí → chỉ lấy nửa y≥0 → thế khoảng cách *từ tâm* (phân biệt từ mép) → so **đúng ràng buộc**.
- D6: nếu lấy a=6,b=10 dẫn đến trục sai thì quay \`B22-P01\`; nếu dùng cả y âm quay bản chất nửa elip/đọc hình; nếu bỏ điều kiện khoảng an toàn thì quay PED5 đánh dấu yêu cầu ra quyết định.

**QA-HYPERBOLA-01 — mô hình + điều kiện vô lý + chọn nhánh:**
- Hai trạm tại \(A(-20,0)\), \(B(20,0)\), đơn vị km, đồng phát tín hiệu theo **mô hình giả định** với vận tốc \(v=200000\) km/s; tín hiệu từ B đến tàu sớm hơn tín hiệu từ A \(0.0001\) s. Độ chênh quãng đường \(\Delta d=v\Delta t=20\) km = \(2a\), nên \(a=10\), \(c=20\), \(b²=c²-a²=\mathbf{300}\) km²; locus \(x²/100-y²/300=1\).
- B đến trước ⇒ tàu gần B ⇒ **nhánh phải \(\mathbf{x≥10}\)**, không phải mọi điểm trên cả hai nhánh; một cặp trạm cho một **quỹ tích**, chưa định được duy nhất một tọa độ tàu.
- Trường hợp phép đo lần hai báo \(\Delta t=0.00025\) s ⇒ \(\Delta d=50\) km lớn hơn khoảng cách hai trạm 40 km; theo bất đẳng thức tam giác \(|PA-PB|≤AB=40\), **không có vị trí thực nào thỏa**. Dữ liệu vô lý, không được cố lập hypebol với \(a≥c\).
- Cổng PED5: đổi đơn vị thời gian → \(\Delta d= v\Delta t\) → nhận diện \(\Delta d=2a\) và \(AB=2c\) → kiểm feasibility trước khi tính \(b²\) → branch orientation → giới hạn không xác định được điểm duy nhất.
- Rubric *đề xuất để NotebookLM phản biện khi owner duyệt*, không dùng để chấm học sinh hiện tại: 1 điểm đơn vị/độ trễ, 1 điểm 2a/c, 1 điểm điều kiện tồn tại, 2 điểm phương trình/b², 1 điểm nhánh, 1 điểm không xác định vị trí duy nhất, 1 điểm bác bỏ phép đo vô lý = **8 điểm dự kiến**. Reviewer có thể đổi thang sau khi thực sự soạn item và đồng bộ một source canonical.

**QA chống trùng:** hai probes tạo thêm chiều sâu khác so với SBT 7.35/SGK 7.24 (quyết định có **khoảng an toàn**, kiểm **độ trễ phi vật lý**), khác B22-P01/P02 và W22-01 về chuỗi mô hình hóa, không chỉ thay đơn vị hoặc số. Không đưa trực tiếp probes này lên học liệu như bài tự luận nếu chưa biên soạn đúng outcome, lời giải, rubrics, D6, source-lock và review độc lập.

### 6.4 Tiêu chí đóng AUTHORING nếu được phê duyệt *về sau*

- **Tách hai delta theo chính các lesson outcomes bị ảnh hưởng:** bổ sung D2/PED5 cho elip+hypebol; nếu có Written mới chỉ cấp **một \`ITEM_ID\` canonical** khác 238 ID đã khóa, một rubric/chấm duy nhất, có thể dùng nhiều placement nhưng không nhân bản.
- **Delta class:** \`DELTA_C_ACADEMIC_MATERIAL\`, vì thêm hướng dẫn bản chất/chuỗi bài và có thể thêm câu, không gọi Delta A/B metadata-only.
- **Reviewer:** đúng **năm Permanent Sources v2.1**, **S1 SGK/SBT KNTT trực tiếp**, review độc lập Q01–Q18 Academic/PED từng affected outcome/item (D1–D6, PED1–PED6, Q15/Q16/Q18); evidence receipt và source SHA phải trùng snapshot mới. Không suy snapshot 238 PASS sang học liệu thêm, không review lại 238 câu không bị ảnh hưởng.
- **Owner gate:** chỉ chuyển từ **DECISION_READY** sang **AUTHORING_DELTA_IN_PROGRESS** sau khi có quyết định cho phép *thêm D2 và/hoặc D4*, phạm vi lớp/chương và duyệt câu mới. Không tự đổi source-locked original/REGISTER CONTENT_READY, không mở RELEASE/merge/deploy.

**Kết luận công đoạn:** hai họ method đã được khóa nguồn S1, xác nhận bounded gap sư phạm trong public canonical, thiết kế minimal delta theo thứ tự, QA nguyên lý và chống trùng. Bước tiếp không phải là thêm “R20 kiểm toán PDF” nữa; nếu không có quyết định mở content delta thì giữ \`OWNER_DECISION_PENDING\` và tiếp tục tìm dạng **khác** theo bộ đề luyện mà người dùng đã cho phép, không xoay vòng hai dạng này.

END_STAGE: B22_METHOD_DELTA_SCOPE_DECISION_READY;P1_HYPERBOLA_D2_OPTIONAL_WRITTEN;P2_ELLIPSE_D2_NO_DEFAULT_EXTRA_WRITTEN;TWO_ORIGINAL_NONCANONICAL_QA_PROBES_CHECKED;S1_SHA_VERIFIED;238_CANONICAL_IMMUTABLE;CONTENT_DELTA_NOT_STARTED;AUTHORING_ONLY
