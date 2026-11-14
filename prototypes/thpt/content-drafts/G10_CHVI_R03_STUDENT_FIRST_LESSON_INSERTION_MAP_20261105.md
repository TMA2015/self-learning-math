# G10 KNTT Tập Hai Chương VI — Bản thiết kế lộ trình đọc thực tế cho 19 outcome (AUTHORING)

AUTHORING_SCOPE: SGK_CHAPTER_B15_B18
PACKET_ID: G10-SGK-CHVI-LESSON-INSERTION-MAP-R03-20261105
STANDARD_ID: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
STATUS: AUTHORING_PLACEMENT_QA_PASS_NO_RELEASE
EFFECTIVE_PED_SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R03_EFFECTIVE_CANONICAL_SOURCE_20261105.md
EFFECTIVE_PED_SOURCE_GIT_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
SOURCE_R01_PUBLIC_B15_GIT_BLOB: 11ec84bedd9ab8b35912a1565751cfa3396149a2
SOURCE_R01_PUBLIC_B16_GIT_BLOB: 0c1ce1ddbd44dd0d50acc0eba5c7e7d58d37c50a
SOURCE_R01_PUBLIC_B17_GIT_BLOB: dafa3ee1d68753bf06806bb212742d7db2ddc6fc
SOURCE_R01_PUBLIC_B18_GIT_BLOB: 1f832722a7aec125d5b1868aa59e7a0c3ada78c0
NEW_FIRST_TRY_PLACEMENTS: 19
NEW_ACTIVE_CANONICAL_ITEM_IDS: 18
REUSED_OLD_FIRST_TRY_CANONICAL: THPT-G10-B18-C01
HELP_CARDS: 19
D6_RECOVERY_CORRECTED: 12
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## Mục tiêu của bản thiết kế này

Nguồn SGK hiện có bắt đầu nhiều tiểu mục bằng định nghĩa, định lí hoặc công thức, còn nguồn R03 đã phản biện có đủ `WHY → PRE → MEANING → READ_VISUAL → METHOD → FIRST_TRY → HELP` nhưng chưa được định vị cụ thể vào từng điểm đọc. **Không được gom 19 Tự thử ở đầu chương rồi mới dạy lý thuyết**, vì học sinh sẽ gặp các câu vượt tiền đề. Thay vào đó, theo từng tiểu mục của **cùng bài SGK**, hiển thị nội dung R03 có bản chất trước quy tắc, cho học sinh làm First Try, rồi mới giới thiệu định nghĩa/công thức và ví dụ tương ứng; Core và luyện tập sau khi kiến thức được hình thành.

Bản này chỉ cung cấp **vị trí chèn chính xác** và chỉ dẫn hành trình, không tạo học liệu thứ hai, không tái bản đề/đáp án, không chỉnh nguồn R03 hay website. Các chuỗi văn bản anchor được kiểm tra là **xuất hiện chính xác 1 lần** trong bản gốc từng bài tại các Git blob đã khóa phía trên. Các outcome có thể được trình bày theo **thứ tự đọc trong sách**, không nhất thiết tăng dần về số ID.

## 19 vị trí cụ thể trước phần kiến thức liên quan

**Áp dụng cho từng dòng**: mở block R03 của đúng `OUTCOME_ID`, trình bày WHY/PRE/MEANING/READ_VISUAL rồi phương pháp, mời người học **Tự thử trước khi mở đáp án / trước Core**, không tự động lộ kết quả; nếu chưa đúng, mở HELP tương ứng, làm theo 5 bước và dẫn đúng route đã sửa; tiếp theo mới hiện phần lý thuyết/ ví dụ SGK ở anchor. Các block First Try đã là học liệu học tập công khai, không được gọi là kiểm tra RD1 kín.

| Bài | Outcome | Chèn block R03 trước **đúng chuỗi gốc** trong trang học | First Try canonical | D6 HELP → đường khắc phục đúng kỹ năng | Tác dụng |
|---|---|---|---|---|---|
| 15 | `B15_OUT_01` | `## 1. Khái niệm hàm số` | `THPT-G10-CHVI-TRY01` | `HELP-G10-CHVI-TRY01` → `THPT-G10-B15-C01` | Tính duy nhất của đầu ra; học sinh Tự thử trước khi gặp định nghĩa. |
| 15 | `B15_OUT_02` | `**Ví dụ 1.** Với` | `THPT-G10-CHVI-TRY02` | `HELP-G10-CHVI-TRY02` → `THPT-G10-B15-C02` | Đối chiếu tập xác định/tập giá trị trước khi đọc hai ví dụ căn và phân thức. |
| 15 | `B15_OUT_03` | `## 2. Đồ thị của hàm số` | `THPT-G10-CHVI-TRY03` | `HELP-G10-CHVI-TRY03` → `SGK Bài 15 §2 — điểm thuộc đồ thị` | Tự thử điểm thuộc đồ thị trước khi học tiêu chí (x;f(x)). |
| 15 | `B15_OUT_05` | `**Ví dụ bổ sung B — Hàm số cho theo từng khoảng.**` | `THPT-G10-CHVI-TRY05` | `HELP-G10-CHVI-TRY05` → `THPT-G10-B15-P02` | Tự thử tại ranh giới từng đoạn trước khi đọc ví dụ mô hình. |
| 15 | `B15_OUT_04` | `## 3. Sự đồng biến, nghịch biến của hàm số` | `THPT-G10-CHVI-TRY04` | `HELP-G10-CHVI-TRY04` → `THPT-G10-B15-P03` | Tự thử so sánh f(x1), f(x2) trước định nghĩa và bảng đồng/nghịch biến. |
| 16 | `B16_OUT_01` | `## 1. Khái niệm` | `THPT-G10-CHVI-TRY06` | `HELP-G10-CHVI-TRY06` → `SGK Bài 16 §1 — hệ số a khác 0` | Kiểm điều kiện a khác 0 trước định nghĩa hàm bậc hai. |
| 16 | `B16_OUT_02` | `## 2. Đồ thị và tính chất` | `THPT-G10-CHVI-TRY07` | `HELP-G10-CHVI-TRY07` → `THPT-CORE-QF01` | Tự thử dạng đỉnh trước khi đọc công thức h, k. |
| 16 | `B16_OUT_04` | `- Với \(a>0\): parabol mở lên` | `THPT-G10-CHVI-TRY09` | `HELP-G10-CHVI-TRY09` → `SGK Bài 16 §2 — tính biến thiên và tập giá trị` | Tự thử khoảng biến thiên trước các quy tắc mở lên/mở xuống và bảng biến thiên. |
| 16 | `B16_OUT_03` | `### Bốn bước vẽ đồ thị parabol` | `THPT-G10-CHVI-TRY08` | `HELP-G10-CHVI-TRY08` → `THPT-G10-CHVI-APP-A2` | Tự thử phác họa trước quy trình vẽ bốn bước, tránh học thuộc mà không đọc hình. |
| 16 | `B16_OUT_05` | `## 5. Vận dụng` | `THPT-G10-CHVI-TRY10` | `HELP-G10-CHVI-TRY10` → `SGK Bài 16 §5 — mô hình thực tế` | Tự thử mô hình và miền thời gian thực tế trước hai ví dụ vận dụng. |
| 17 | `B17_OUT_01` | `## 1. Tam thức bậc hai` | `THPT-G10-CHVI-TRY11` | `HELP-G10-CHVI-TRY11` → `THPT-G10-B17-C01` | Tự thử vị trí đồ thị so với Ox trước định nghĩa tam thức. |
| 17 | `B17_OUT_02` | `## 2. Định lí về dấu của tam thức bậc hai` | `THPT-G10-CHVI-TRY12` | `HELP-G10-CHVI-TRY12` → `THPT-G10-B17-C02` | Tự thử nghiệm kép trước định lí và ba trường hợp biệt thức. |
| 17 | `B17_OUT_03` | `## 3. Bất phương trình bậc hai` | `THPT-G10-CHVI-TRY13` | `HELP-G10-CHVI-TRY13` → `THPT-G10-B17-P01` | Tự thử khoảng nghiệm trước quy trình xét dấu và xử lý dấu bằng. |
| 17 | `B17_OUT_05` | `**Ví dụ 4 (thực tế do dự án tự soạn).**` | `THPT-G10-CHVI-TRY15` | `HELP-G10-CHVI-TRY15` → `THPT-G10-B17-P04` | Tự thử mô hình rào vườn và điều kiện hình học trước ví dụ diện tích. |
| 17 | `B17_OUT_04` | `### Bất phương trình có tham số: khi nào đúng với mọi số thực?` | `THPT-G10-CHVI-TRY14` | `HELP-G10-CHVI-TRY14` → `THPT-G10-B17-P03` | Tự thử tham số với hệ số a cố định trước mục tham số và biệt thức. |
| 18 | `B18_OUT_01` | `## 2. Phương trình dạng \(\sqrt{A(x)}=\sqrt{B(x)}\)` | `THPT-G10-CHVI-TRY16` | `HELP-G10-CHVI-TRY16` → `THPT-G10-B18-C02` | Tự thử phương trình hai căn trước điều kiện và quy trình bình phương. |
| 18 | `B18_OUT_02` | `## 3. Phương trình dạng \(\sqrt{A(x)}=B(x)\)` | `THPT-G10-B18-C01` | `HELP-G10-CHVI-TRY17` → `THPT-G10-B18-P01` | Tự thử một căn bằng biểu thức, reuse canonical B18-C01, trước công thức điều kiện vế phải. |
| 18 | `B18_OUT_03` | `### Ví dụ 3 — Hai căn thức và nghiệm ngoại lai (tự soạn)` | `THPT-G10-CHVI-TRY18` | `HELP-G10-CHVI-TRY18` → `THPT-G10-B18-P01` | Tự thử lọc nghiệm ngoại lai trước ví dụ giải nghiệm ứng viên. |
| 18 | `B18_OUT_04` | `### Ví dụ 4 — Ứng dụng độ dài trong hình học (tự soạn)` | `THPT-G10-CHVI-TRY19` | `HELP-G10-CHVI-TRY19` → `THPT-G10-B18-P04` | Tự thử thang và điều kiện độ dài trước ví dụ ứng dụng Pitago. |

## 4 đường học hoàn chỉnh theo bài

### Bài 15 — Hàm số (SGK trang in 4–10, SBT 3–9)

**Trình tự bắt buộc theo thứ tự đọc**: `B15_OUT_01` → định nghĩa hàm số → `B15_OUT_02` → ví dụ tập xác định/tập giá trị → `B15_OUT_03` → đồ thị & điểm thuộc đồ thị → `B15_OUT_05` → phí từng đoạn/ràng buộc điểm biên → `B15_OUT_04` → đồng/nghịch biến → ví dụ → tự luyện theo bài → Core và Practice. Không nhầm lẫn đầu vào lặp với nhiều đầu ra, không suy từ 2 điểm ra tính đơn điệu trên cả khoảng. Khi sai đồ thị, trở về **B15 §2** vì P01 hiện có chỉ là bài tìm tập xác định.

### Bài 16 — Hàm số bậc hai (SGK 11–18, SBT 10–15)

`B16_OUT_01` → hệ số `a ≠ 0` → `B16_OUT_02` → đỉnh, trục → `B16_OUT_04` → dấu a và khoảng tăng/giảm + tập giá trị → `B16_OUT_03` → bốn bước vẽ → ví dụ parabol SVG cũ → Core B16 và Practice → `B16_OUT_05` → mô hình chuyển động/doanh thu kèm miền/đơn vị → luyện tập/tổng hợp. **Không dùng bài Topic DEMO về giao Ox để thay thế học sự biến thiên hoặc mô hình SGK**; SGK tự đủ kiến thức.

### Bài 17 — Dấu tam thức bậc hai (SGK 19–24, SBT 16–18)

`B17_OUT_01` → tam thức & đọc vị trí so với Ox → `B17_OUT_02` → `Δ<0, =0, >0` và nghiệm kép/bảng dấu → `B17_OUT_03` → giải bất phương trình bằng khoảng → `B17_OUT_05` → mô hình rào vườn giữ miền hình học → `B17_OUT_04` → tham số với hệ số a cố định khác 0 và phân biệt `>0` / `≥0` → Core/Practice. B17_OUT_04 D6 về **B17-P03** (tham số), B17_OUT_05 D6 về **B17-P04** (rào vườn); không được đảo ngược như nguồn R02 cũ.

### Bài 18 — Phương trình quy về phương trình bậc hai (SGK 25–27, SBT 19–21)

Vào bài bằng ví dụ `x^2=1` chưa cho phép suy ngược `x=1`; sau đó `B18_OUT_01` → dạng hai căn và điều kiện → `B18_OUT_02` → dạng một căn và điều kiện dấu vế phải → `B18_OUT_03` → ngoại nghiệm và thử lại gốc → `B18_OUT_04` → độ dài thực tế và lọc nghiệm âm → Core/Practice. **Q15:** `B18_OUT_02` First Try chính là canonical R01 `THPT-G10-B18-C01`, chỉ được sử dụng **một item_id với nhiều placement**, không tạo phiên thi/chấm thứ hai từ cùng câu. Nếu đã xem lời giải lúc First Try, hành trình vẫn học tiếp nhưng không dùng lại Core đó làm kiểm tra độc lập; D6 dẫn sang **B18-P01**.

## Cổng tự đánh giá cuối chương

- Bài luyện và ví dụ có thể tự mở đáp án sau khi học sinh tự làm. Khi vào bài **Tự kiểm tra cuối chương** (`docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md`), toàn bộ đáp án/đúng-sai/lời giải/rubric chỉ được mở **sau Final Submit**.
- 18 item từ `CHVI.json` đã công khai, là `CLIENT_SELF_CHECK_NO_MASTERY` chứ **không phải** một ngân hàng RD1 bí mật; practice/First Try/đọc lời giải không ghi Skill Mastery. SGK_CHAPTER_READINESS độc lập với TOPIC_READINESS.
- Ánh xạ item cuối chương → 19 outcome, nơi còn thiếu minh chứng chiều sâu, được kiểm tra riêng tại `G10_CHVI_R03_PUBLIC_END_SELF_CHECK_OUTCOME_COVERAGE_20261105.md`; không lấy số câu thay chứng cứ khả năng tự học.

## Handoff boundary

AUTHORING chỉ cung cấp thứ tự bài học và nguồn đã review. **RELEASE** mới có trách nhiệm tích hợp từng điểm vào UI, bảo đảm AP1–AP5, Golden UI, deep links, nội dung MathJax, ẩn đáp án và responsive; không tự tích hợp trên PR này. Mọi nội dung mới thực sự thay đề/điều kiện/giải thích bắt buộc phải phân loại Delta C để NotebookLM phản biện **toán và sư phạm**, không bắt reviewer làm công việc hash. Chưa ký `CONTENT_READY` khi hồ sơ Q18 nguồn lịch sử chưa giải quyết; không sửa main hoặc kích hoạt Mastery.
