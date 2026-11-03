# BÁO CÁO KIỂM TOÁN HỌC THUẬT VÀ SƯ PHẠM ĐỘC LẬP TOÀN BỘ CHƯƠNG II — TOÁN 12 KNTT
**(Vectơ và Hệ tọa độ trong không gian: Bài 6, Bài 7, Bài 8 và Tự kiểm tra cuối chương)**

* **PACKET_ID:** `G12-SGK-CHII-B06-B08-R00-REVIEW_CANDIDATE`
* **STANDARD_ID:** `SLM-THPT-QUALITY-ONE` (v1.0.0) · **PERMANENT_SOURCES_VERSION:** `2.1`
* **CƠ SỞ THẨM ĐỊNH:** Đúng 5 Permanent Sources THPT v2.1 (`01_THPT_MASTER_PLAN_v2.1` đến `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.1`), Nguồn S1 SGK/SBT Toán 12 KNTT Tập Một gốc và các tệp nguồn snapshot `Temp_G12_CHII_B06_LEARNING_R00_20261103.md`, `Temp_G12_CHII_B07_LEARNING_R00_20261103.md`, `Temp_G12_CHII_B08_LEARNING_R00_20261103.md`, `Temp_G12_CHII_END_CANONICAL_Q01_Q18_R00_20261103.md`, `Temp_G12_CHII_RD1_PRIVATE_REVIEW_ONLY_20261103.md`, `Temp_G12_CHII_S1_AUDIT_OUTCOME_MATRIX_20261103.md`, `Temp_G12_CHII_QA_SHA_MANIFEST_20261103.md`.

---

### TÓM TẮT QUẢN TRỊ VÀ KẾT LUẬN THẨM ĐỊNH (EXECUTIVE SUMMARY)

1. **`ACADEMIC_G12_CHAPTER_II = PASS`**  
   Học liệu đạt chuẩn mực tuyệt đối về độ chính xác toán học vectơ và hình học tọa độ không gian 3D, khái niệm vectơ, hai vectơ bằng nhau/đối nhau, tổng/hiệu/tích vô hướng/tích với một số, quy tắc hình hộp, hệ tọa độ trực giao $Oxyz$, tọa độ điểm và vectơ, công thức khoảng cách, góc, trung điểm, trọng tâm và mô hình hóa lực/chuyển động thực tế.
2. **`PEDAGOGICAL_SELF_LEARNING_READY = PASS`**  
   Học liệu đáp ứng trọn vẹn 6 tiêu chí sư phạm tự học (`PED1–PED6`): Động cơ thực tế (`PED1 WHY`), kiến thức tiền đề phẳng (`PED2 WHAT`), hình thành bản chất mũi tên/hành trình trước công thức (`PED3 HOW`), hướng dẫn đọc hình 3D & giới hạn điều kiện (`PED4 FORMAL`), giải thích lý do lựa chọn phương pháp (`PED5 METHOD`), và thiết kế hoạt động Tự thử định hướng trước Core (`PED6 SELF-TRY`).
3. **`EXPOSURE_SYSTEM_VERDICT = SYSTEM_HOLD` | `RELEASE_AUTHORIZATION = NO` | `MASTERY_ACTIVATION = NO`**  
   Phê duyệt học thuật và sư phạm này là điều kiện cần nhưng **chưa cấp phép phát hành**, không tự động kích hoạt tính năng Tự kiểm tra công khai (Final Submit), không ghi nhận điểm Skill Mastery cho học sinh và không cấp quyền merge/deploy website.

---

### I. SOURCE_RECEIPT VÀ XÁC MINH S1 (SGK & SBT KNTT TẬP 1 GỐC)

#### 1. Nhật ký Nguồn S1 và Số trang in vs PDF 1-based Index

* **SGK Toán 12 KNTT Tập Một (Nguồn S1):**
  * Tệp PDF gốc 104 trang, SHA256: `faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd`.
  * Trong tệp PDF SGK: **`PDF Index (1-based) = Trang in + 2`** (đã xác minh trực tiếp từ ảnh trang quét S1).
  * *Bài 6 (Vectơ trong không gian):* Trang in **45–59** (PDF 1-based: **47–61**)
  * *Bài 7 (Hệ trục tọa độ trong không gian):* Trang in **60–66** (PDF 1-based: **62–68**)
  * *Bài 8 (Biểu thức tọa độ của các phép toán vectơ):* Trang in **67–72** (PDF 1-based: **69–74**)
  * *Bài tập cuối Chương II:* Trang in **73–74** (PDF 1-based: **75–76**)
* **SBT Toán 12 KNTT Tập Một (Nguồn S1):**
  * Tệp PDF gốc 117 trang, SHA256: `db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca`.
  * Trong tệp PDF SBT: **`PDF Index (1-based) = Trang in - 2`** (đã xác minh trực tiếp từ ảnh trang quét S1).
  * *Bài 6:* Trang in **38–45** (PDF 1-based: **36–43**)
  * *Bài 7:* Trang in **46–49** (PDF 1-based: **44–47**)
  * *Bài 8:* Trang in **50–54** (PDF 1-based: **48–52**)
  * *Bài tập cuối Chương II:* Trang in **55–58** (PDF 1-based: **53–56**)

#### 2. Nhật ký Tệp Gói Review và Bằng chứng SHA-256

| Tệp nguồn trong gói Candidate | Dung lượng (Bytes) | Mã Hash SHA-256 Cục bộ | Vai trò / Phạm vi |
| :--- | :---: | :---: | :--- |
| `Temp_G12_CHII_B06_LEARNING_R00_20261103.md` | 26.066 | `58848452a89858e2daeb73e275368dbeef5d87d157a42ca6f2c349ee2d8c61ee` | Bài 6: Lý thuyết D1, 6 VD D2, 24 Items D3/D4, 6 HELP D6 |
| `Temp_G12_CHII_B07_LEARNING_R00_20261103.md` | 17.483 | `f2b4834c202088fe0e0139ddada7f307fdac96481c3c514e6672ee3d78fe2050` | Bài 7: Lý thuyết D1, 4 VD D2, 16 Items D3/D4, 4 HELP D6 |
| `Temp_G12_CHII_B08_LEARNING_R00_20261103.md` | 22.173 | `834199f674bebf924defe6a7707cd9a726044af437f83d8426d05827446f78f1` | Bài 8: Lý thuyết D1, 6 VD D2, 24 Items D3/D4, 6 HELP D6 |
| `Temp_G12_CHII_END_CANONICAL_Q01_Q18_R00_20261103.md` | 12.029 | `f1711b66b4d5ff792f3fca25e5bb61e0e7a83ed9c0735ba5ba326eac1ecc37eb` | Tự kiểm tra cuối chương: 16 Placements Practice |
| `Temp_G12_CHII_RD1_PRIVATE_REVIEW_ONLY_20261103.md` | 11.725 | `2b25189f74db37a8c79106efc6ebae5e8943a38707d9962eb6f64edffe239dc1` | Đề Tự kiểm tra kín độc lập: 20 Items RD1 Held-out |
| `Temp_G12_CHII_S1_AUDIT_OUTCOME_MATRIX_20261103.md` | 8.037 | `8bcd846654fcacc65af6935e361f359a3de2c034012d66566a5e1865db2a06c5` | Ma trận 16 Outcomes, S1 receipt và phân bổ bài tập |
| `Temp_G12_CHII_QA_SHA_MANIFEST_20261103.md` | 4.297 | `f6829e55edfffa1a22a19ea9ada6b8013edccc252dc6fc8f9ad0543a3d52d64a` | Bản kê khai QA kiểm soát chất lượng và SHA checksums |
| `Temp_FIG-G12-CHII-B06-R00.png` | 85.163 | `391d1a9dbe7a70cbf2c941303edcdf44aaf757fba730a3d345f65d71a97afcf5` | Đồ thị D5 Bài 6: Quy tắc hình hộp thêm vectơ $\vec{AC'}$ |
| `Temp_FIG-G12-CHII-B07-R00.png` | 71.561 | `c3470b8bc38f37af1d837617eb4488241b8c93907710a2a350171296003cee72` | Đồ thị D5 Bài 7: Điểm $M(2;1;3)$ trong hệ trục $Oxyz$ |
| `Temp_FIG-G12-CHII-B08-R00.png` | 68.467 | `df3edb70ad9444247c7f49a6da07a78600192ff28eb94c092b44fd95a3259cd3` | Đồ thị D5 Bài 8: Phân tích vectơ $\vec{AB}$ thành $(\Delta x, \Delta y, \Delta z)$ |

---

### II. BẢNG MÃ TRẬN ĐỐI CHIẾU HỌC LIỆU VÀ TỔNG HỢP ID RECONCILIATION

| Bài học / Phân đoạn | Outcomes | Scored Items (D3 & D4) | Worked Examples (D2) | PNG/SVG Graphs (D5) | HELP Cards (D6) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Bài 6: Vectơ trong không gian** | 6 (`O01`–`O06`) | 24 (6C + 12P + 6W) | 6 (`EX01`–`EX06`) | 1 | 6 (`HELP01`–`06`) |
| **Bài 7: Hệ trục tọa độ trong không gian** | 4 (`O01`–`O04`) | 16 (4C + 8P + 4W) | 4 (`EX01`–`EX04`) | 1 | 4 (`HELP01`–`04`) |
| **Bài 8: Biểu thức tọa độ phép toán vectơ** | 6 (`O01`–`O06`) | 24 (6C + 12P + 6W) | 6 (`EX01`–`EX06`) | 1 | 6 (`HELP01`–`06`) |
| **CHII-END: Tự kiểm tra cuối chương** | 16 Placements | 16 Placements Practice | 0 | 0 | 0 (Dẫn đường B06-08) |
| **CHII-RD1: Đề kiểm tra kín độc lập** | 20 Items RD1 | 20 Held-out Items | 0 | 0 | 0 |
| **TỔNG CỘNG TOÀN CHƯƠNG II** | **16 Outcomes** | **64 Public Items + 20 RD1** | **16 Ví dụ D2** | **3 Hình D5** | **16 Thẻ D6 HELP** |

---

### III. PHẢN BIỆN CHUYÊN SÂU PED1–PED6 VÀ PHÂN TÍCH TOÁN HỌC THEO BÀI

#### 1. Bài 6: Vectơ trong không gian (6 Outcomes, 24 Public Items + 6 VD + 6 HELP) — `PASS`
* **PED1–PED3 (Động cơ & Bản chất):** Mở đầu từ sự chuyển dịch trong thực tế 3D (trái/phải, trước/sau, lên/xuống) của máy bay, lực kéo dây. Nối tiếp kiến thức phẳng lớp 10, giải thích bản chất tổng hai vectơ là ghép nối hành trình "đầu–đuôi", quy tắc hình hộp $\vec{AB}+\vec{AD}+\vec{AA'} = \vec{AC'}$.
* **PED4 (Giới hạn & Điều kiện nghiêm ngặt):**
  1. *Đặc tính vectơ-không:* Vectơ-không $\vec 0$ có độ dài 0 và **không có hướng xác định** (cấm nói $\vec 0$ chỉ lên/chỉ xuống).
  2. *Đọc hình phối cảnh 3D:* Cảnh báo không dùng thước đo độ dài nét vẽ xiên trên màn hình để kết luận độ dài thật; hai vectơ bằng nhau khi và chỉ khi cùng hướng và cùng độ dài trong không gian 3D.
  3. *Tích vô hướng và Công:* $\vec u \cdot \vec v = |\vec u||\vec v|\cos(\vec u, \vec v)$ (chỉ định nghĩa khi cả hai khác $\vec 0$); Công $W = \vec F \cdot \vec d = |\vec F||\vec d|\cos\theta$.
* **PED5–PED6 (Ví dụ & Tự thử):** 6 ví dụ suy luận (`EX-G12-B06-01..06`) phân tích hình lập phương, hình bình hành, hình hộp, trung điểm, tích vô hướng và công của lực. 6 câu Tự thử định hướng giúp người học tự đối chiếu trước khi làm Core.
* **Hình ảnh D5:** `Temp_FIG-G12-CHII-B06-R00.png` minh họa quy tắc hình hộp với mũi tên đỏ $\vec{AB}$, xanh lam $\vec{AD}$, xanh lá $\vec{AA'}$ ghép thành $\vec{AC'}$, kèm caption lưu ý không đo nét xiên phối cảnh.

#### 2. Bài 7: Hệ trục tọa độ trong không gian (4 Outcomes, 16 Public Items + 4 VD + 4 HELP) — `PASS`
* **PED1–PED3 (Hệ quy chiếu 3D):** Nhu cầu định vị kho hàng/robot 3D cần 3 tọa độ (dọc $Ox$, dọc $Oy$, độ cao $Oz$). Giới thiệu hệ trực giao $Oxyz$ với 3 vectơ đơn vị $\vec i, \vec j, \vec k$ đôi một vuông góc và có độ dài bằng 1.
* **PED4 (Tọa độ điểm & Vectơ):**
  1. *Tọa độ điểm vs. Vectơ:* Điểm $M(x;y;z) \iff \overrightarrow{OM} = x\vec i + y\vec j + z\vec k$. Vectơ $\overrightarrow{AB} = (x_B-x_A; y_B-y_A; z_B-z_A)$ (lấy điểm cuối trừ điểm đầu, cấm đảo chiều).
  2. *Định hướng trục:* Hệ ba trục tuân theo quy tắc bàn tay phải/trực giao. Cảnh báo góc vẽ trên màn hình không dùng để đo góc vuông thật.
* **PED5–PED6:** 4 ví dụ (`EX-G12-B07-01..04`) hướng dẫn đọc tọa độ điểm trên mặt phẳng tọa độ ($Oxy, Oyz, Ozx$), biểu diễn theo $\vec i, \vec j, \vec k$, mô hình không gian phòng học $6\times 4\times 3$m và hiệu tọa độ 2 điểm. 4 câu Tự thử rèn luyện phản xạ trước Core.
* **Hình ảnh D5:** `Temp_FIG-G12-CHII-B07-R00.png` thể hiện hệ trục $Oxyz$, điểm $M(2;1;3)$ và đường dóng vuông góc xuống gốc và mặt đáy, chú thích rõ $x$: dọc $Ox$, $y$: dọc $Oy$, $z$: độ cao.

#### 3. Bài 8: Biểu thức tọa độ của các phép toán vectơ (6 Outcomes, 24 Public Items + 6 VD + 6 HELP) — `PASS`
* **PED1–PED3 (Đại số hóa hình học):** Chuyển các phép toán hình học không gian thành công thức đại số trên tọa độ thành phần $(x;y;z)$.
* **PED4 (Ràng buộc toán học & Khóa bẫy):**
  1. *Điều kiện cùng phương:* $\vec u = k\vec v \iff (x_1,y_1,z_1) = k(x_2,y_2,z_2)$. **Cấm chia tọa độ khi có thành phần bằng 0** (ví dụ $\vec v=(1;0;2)$ thì không viết $\frac{x_1}{1} = \frac{y_1}{0} = \frac{z_1}{2}$).
  2. *Góc hai vectơ & Cắt ngưỡng làm tròn:* $\cos(\vec a, \vec b) = \frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\sqrt{x_1^2+y_1^2+z_1^2}\sqrt{x_2^2+y_2^2+z_2^2}}$ (chỉ áp dụng khi $\vec a, \vec b \neq \vec 0$). Nếu do làm tròn máy tính cho kết quả $\cos = 1,0000001$, phải cắt ngưỡng về $[-1; 1]$ trước khi lấy $\arccos$.
  3. *Tọa độ trung điểm & Trọng tâm:* $M = \frac{A+B}{2}$, $G = \frac{A+B+C}{3}$ (trung bình cộng từng tọa độ thành phần, không cộng độ dài).
* **PED5–PED6:** 6 ví dụ (`EX-G12-B08-01..06`) giải chi tiết các phép toán tuyến tính, điều kiện cùng phương, trọng tâm/trung điểm, góc/vuông góc, khoảng cách 2 điểm và bài toán thiết bị bay 3D. 6 câu Tự thử định hướng trước Core.
* **Hình ảnh D5:** `Temp_FIG-G12-CHII-B08-R00.png` minh họa sự phân tích vectơ $\overrightarrow{AB}$ thành 3 thành phần vuông góc $\Delta x, \Delta y, \Delta z$, khẳng định $\overrightarrow{AB} = (x_B-x_A; y_B-y_A; z_B-z_A)$.

#### 4. Bài tập Cuối chương II (Public Self-Check) & Bộ Đề kín RD1 Độc lập
* **Tự kiểm tra công khai (`CLIENT_SELF_CHECK_NO_MASTERY`):**  
  * Bao gồm 16 placements tham chiếu trực tiếp đến 16 câu Practice công khai đã duyệt của B06, B07, B08 (`THPT-G12-B06-P02`, `P04`, `P06`, `P08`, `P10`, `P12`; `B07-P02`, `P04`, `P06`, `P08`; `B08-P02`, `P04`, `P06`, `P08`, `P10`, `P12`).
  * **Đảm bảo an toàn:** 0 câu mới được tạo ra (tránh nhân bản item ID); không ghi điểm Skill Mastery; đáp án và lời giải chỉ mở sau `Final Submit`.
* **Bộ Đề kín RD1 Độc lập (`SGK_CHAPTER_READINESS`):**  
  * Gồm 20 câu độc lập (`THPT-G12-CHII-RD1-001` đến `020`) được bảo mật hoàn toàn trong tệp `Temp_G12_CHII_RD1_PRIVATE_REVIEW_ONLY_20261103.md`.
  * Khảo sát 16/16 outcomes + 4 câu tích hợp liên-outcome, có đáp án và rubric 5 bước chi tiết. Không trùng lặp câu chữ với ngân hàng công khai.

---

### IV. THẨM ĐỊNH 18 CỔNG CHẤT LƯỢNG (Q01–Q18)

| Mã Cổng | Tên Cổng Chất Lượng (SLM-THPT-QUALITY-ONE) | Kết quả | Trích dẫn Bằng chứng Thẩm định |
| :---: | :--- | :---: | :--- |
| **Q01** | Source Receipt & S1 Page Matching | **PASS** | Khớp 100% trang in SGK (45–74) và SBT (38–58) cùng SHA256 PDF S1. |
| **Q02** | Math Correctness & Domain Limits | **PASS** | Vectơ-không, quy tắc hình hộp, hệ $Oxyz$, tích vô hướng, không chia cho 0. |
| **Q03** | Canonical Exercise & ID Contract | **PASS** | 64 câu công khai có `item_id` duy nhất, gán đúng 1 `OUTCOME_ID` chính. |
| **Q04** | Assessment Security & Self-Check Boundary | **PASS** | Tự kiểm tra cuối chương dùng `CLIENT_SELF_CHECK_NO_MASTERY`, khóa đáp án pre-Submit. |
| **Q05** | Worked Examples Rationale (D2) | **PASS** | 16 ví dụ D2 có lý giải chọn phương pháp, thử lại kết quả và kiểm miền. |
| **Q06** | Written Item Rubrics (/4 Scale) | **PASS** | 16 bài tự luận D4 có rubric /4 phân rã đúng 4 tiêu chí 1 điểm. |
| **Q07** | Image / Visual QA (D5) | **PASS** | 3 ảnh PNG/SVG có chú thích, tọa độ và nguyên lý hình học 3D chuẩn xác. |
| **Q08** | HELP Remediation Cards (D6) | **PASS** | 16 thẻ HELP tuân thủ quy trình 5 bước quay về đúng outcome ban đầu. |
| **Q09–Q14**| PED1–PED6 Self-Learning Architecture | **PASS** | Kiến tạo động cơ WHY, tiền đề, bản chất trước công thức, Tự thử trước Core. |
| **Q15–Q17**| Exposure System Control & Journey Boundary | **PASS** | Bảo vệ ngân hàng đề kín RD1; giữ nguyên ranh giới SGK vs. Chuyên đề. |
| **Q18** | System Authorization Boundary | **PASS** | Giữ nguyên ranh giới hệ thống: `RELEASE_AUTHORIZATION = NO`, `MASTERY_ACTIVATION = NO`. |

* **Thống kê Lỗi & Phân loại Delta:**  
  * **P0 (System Blockers):** `0` | **P1 (Revisions Required):** `0` | **P2 (Minor Improvement Suggestions):** `0`
  * **MINIMAL_DELTA:** `0` (Phân loại: `DELTA_A_NO_CHANGE`).

---

### V. BẢNG MÁY KIỂM TRA MÃ HÓA (MACHINE-CHECKABLE VERDICT)

```text
PACKET_ID|G12-SGK-CHII-B06-B08-R00-REVIEW_CANDIDATE
STANDARD_ID|SLM-THPT-QUALITY-ONE
STANDARD_VERSION|1.0.0
PERMANENT_SOURCES_VERSION|2.1
S1_SGK_RECEIPT|TOAN_12_KNTT_TAP_MOT_P45-74_SHA256_faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd
S1_SBT_RECEIPT|BAI_TAP_TOAN_12_KNTT_TAP_MOT_P38-58_SHA256_db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca
ACADEMIC_G12_CHAPTER_II|PASS
PEDAGOGICAL_SELF_LEARNING_READY|PASS
OUTCOME_MATRIX_COUNT|16
WORKED_EXAMPLES_D2_COUNT|16
PUBLIC_CANONICAL_ITEMS_COUNT|64
WRITTEN_RUBRIC_4_COUNT|16
IMAGE_GRAPH_D5_COUNT|3
REMEDIATION_HELP_D6_COUNT|16
PRIVATE_RD1_HELD_OUT_COUNT|20
QUALITY_GATES_Q01_TO_Q18|ALL_PASS
P0|0
P1|0
P2|0
MINIMAL_DELTA|0
DELTA_CLASS|DELTA_A_NO_CHANGE
EXPOSURE_SYSTEM_VERDICT|SYSTEM_HOLD
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO
```

---

### VI. BẢO TỒN RANH GIỚI THẨM QUYỀN HỆ THỐNG

1. Phê duyệt **`ACADEMIC_G12_CHAPTER_II = PASS`** và **`PEDAGOGICAL_SELF_LEARNING_READY = PASS`** áp dụng nghiêm ngặt cho toàn bộ học liệu SGK Toán 12 KNTT Tập 1 (Bài 6–8 và Tự kiểm tra cuối chương) trong gói candidate `R00`.
2. **`RELEASE_AUTHORIZATION = NO`**: Phê duyệt học thuật và sư phạm này **không** cấp quyền merge/deploy code lên GitHub repository công khai hay xuất bản lên website/frontend.
3. **`MASTERY_ACTIVATION = NO`**: **Không** tự động kích hoạt tính năng Tự kiểm tra công khai (Final Submit) hay tính điểm Skill Mastery cho người học.
4. **`EXPOSURE_SYSTEM_VERDICT = SYSTEM_HOLD`**: Tạm hoãn xuất bản hệ thống cho đến khi hoàn tất cổng kiểm thử kỹ thuật và duyệt release chính thức.
