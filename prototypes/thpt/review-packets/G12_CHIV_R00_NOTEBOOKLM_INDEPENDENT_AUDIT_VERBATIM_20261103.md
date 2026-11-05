# BÁO CÁO PHẢN BIỆN HỌC THUẬT VÀ SƯ PHẠM ĐỘC LẬP
**THẨM ĐỊNH TOÀN BỘ HỌC LIỆU SGK TOÁN 12 KNTT TẬP HAI — CHƯƠNG IV (BÀI 11–13 VÀ TỰ KIỂM TRA CUỐI CHƯƠNG)**
*(Bản thẩm định độc lập theo chuẩn chuẩn mực `SLM-THPT-QUALITY-ONE` v1.0.0)*

* **PACKET_ID:** `G12-SGK-CHIV-B11-B13-R00-REVIEW_CANDIDATE`
* **CƠ SỞ THẨM ĐỊNH:** Đúng **5 Permanent Sources THPT v2.1** (`01_THPT_MASTER_PLAN_v2.1` đến `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.1`), Nguồn S1 SGK/SBT Toán 12 KNTT Tập Hai gốc và các tệp nguồn snapshot: `Temp_G12_CHIV_B11_LEARNING_R00_20261103.md`, `Temp_G12_CHIV_B12_LEARNING_R00_20261103.md`, `Temp_G12_CHIV_B13_LEARNING_R00_20261103.md`, `Temp_G12_CHIV_END_CANONICAL_Q01_Q18_R00_20261103.md`, `Temp_G12_CHIV_S1_AUDIT_OUTCOME_MATRIX_R00_20261103.md`, `Temp_G12_CHIV_RD1_PRIVATE_REVIEW_ONLY_R00_20261103.md`, `Temp_G12_CHIV_QA_SHA_MANIFEST_R00_20261103.md`.
* **NHÃN CHẤT LƯỢNG:** `SLM-THPT-QUALITY-ONE` (v1.0.0).

---

### TÓM TẮT QUẢN TRỊ VÀ KẾT LUẬN THẨM ĐỊNH (EXECUTIVE SUMMARY)

1. **`ACADEMIC_VERDICT = PASS`**  
   Học liệu đạt chuẩn mực tuyệt đối về độ chính xác toán học giải tích tích phân: Khái niệm nguyên hàm $F'(x) = f(x)$, họ nguyên hàm $F(x) + C$, điều kiện ban đầu $F(x_0) = y_0$, tính tuyến tính, nguyên hàm hàm lũy thừa, nguyên hàm $1/x$ với $\ln|x|$ trên khoảng không chứa $0$, nguyên hàm hàm mũ và hàm lượng giác; định lý Newton–Leibniz $\int_a^b f(x)dx = F(b) - F(a)$ (không $+C$), tính tuyến tính, đảo cận, ghép khoảng tích phân; ứng dụng diện tích hình phẳng dưới đường cong không âm, đường cong cắt $Ox$ (chia khoảng đổi dấu, diện tích tích phân trị tuyệt đối), diện tích giữa hai đường cong, thể tích khối vật thể theo diện tích lát cắt $S(x)$, thể tích khối tròn xoay quay quanh $Ox$ với công thức $\pi \int_a^b [f(x)]^2 dx$.

2. **`PEDAGOGICAL_SELF_LEARNING_READY = PASS`**  
   Học liệu đáp ứng trọn vẹn 6 tiêu chí sư phạm tự học (`PED1–PED6`): Động cơ thực tế phục hồi vị trí từ vận tốc, diện tích và thể tích hình không tiêu chuẩn (`PED1 WHY`), kiến thức tiền đề đạo hàm và giới hạn (`PED2 WHAT`), hình thành bản chất phép toán đảo và tích lũy liên tục trước công thức (`PED3 HOW`), làm rõ điều kiện xác định, miền khoảng và đọc 6 hình minh họa D5 (`PED4 FORMAL`), giải thích lý do lựa chọn phương pháp (`PED5 METHOD`), và thiết kế hoạt động Tự thử định hướng trước Core (`PED6 SELF-TRY`).

3. **`EXPOSURE_SYSTEM_VERDICT = SYSTEM_HOLD` | `RELEASE_AUTHORIZATION = NO` | `MASTERY_ACTIVATION = NO`**  
   Phê duyệt học thuật và sư phạm này là điều kiện cần nhưng **chưa cấp phép phát hành**, không tự động kích hoạt tính năng Tự kiểm tra công khai (Final Submit), không ghi nhận điểm Skill Mastery cho học sinh và không cấp quyền merge/deploy website.

---

### I. SOURCE_RECEIPT VÀ XÁC MINH S1 (SGK & SBT KNTT TẬP 2 GỐC)

#### 1. Nhật ký Nguồn S1 và Số trang in vs PDF 1-based Index

* **SGK Toán 12 KNTT Tập Hai (Nguồn S1):**
  * Tệp PDF gốc 99 trang, SHA256: `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`.
  * Trong tệp PDF SGK: **`PDF Index (1-based) = Trang in + 2`** (đã xác minh trực tiếp từ trang quét S1).
  * *Bài 11 (Nguyên hàm):* Trang in **4–11** (PDF 1-based: **6–13**)
  * *Bài 12 (Tích phân):* Trang in **12–18** (PDF 1-based: **14–20**)
  * *Bài 13 (Ứng dụng hình học của tích phân):* Trang in **19–26** (PDF 1-based: **21–28**)
  * *Bài tập cuối Chương IV:* Trang in **27–28** (PDF 1-based: **29–30**)
  * *Lưu ý:* B14 trở đi thuộc Chương V, không tham gia đánh giá Chương IV.
* **SBT Toán 12 KNTT Tập Hai (Nguồn S1):**
  * Tệp PDF gốc 117 trang, SHA256: `823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1`.
  * Trong tệp PDF SBT: **`PDF Index (1-based) = Trang in - 1`** (đã xác minh trực tiếp từ trang quét S1).
  * *Bài 11:* Trang in **3–8** (PDF 1-based: **2–7**)
  * *Bài 12:* Trang in **9–13** (PDF 1-based: **8–12**)
  * *Bài 13:* Trang in **14–18** (PDF 1-based: **13–17**)
  * *Bài tập cuối Chương IV:* Trang in **19–21** (PDF 1-based: **18–20**)

---

### II. BẢNG MÃ TRẬN ĐỐI CHIẾU HỌC LIỆU VÀ TỔNG HỢP ID RECONCILIATION

| Bài học / Phân đoạn | Outcomes | Scored Items (D3 & D4) | Worked Examples (D2) | PNG/SVG Graphs (D5) | HELP Cards (D6) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Bài 11: Nguyên hàm** | 7 (`O01`–`O07`) | 28 (7C + 7P + 7A + 7W) | 7 (`EX01`–`EX07`) | 1 | 7 (`HELP01`–`07`) |
| **Bài 12: Tích phân** | 7 (`O01`–`O07`) | 28 (7C + 7P + 7A + 7W) | 7 (`EX01`–`EX07`) | 2 | 7 (`HELP01`–`07`) |
| **Bài 13: Ứng dụng hình học của tích phân** | 8 (`O01`–`O08`) | 32 (8C + 8P + 8A + 8W) | 8 (`EX01`–`EX08`) | 3 | 8 (`HELP01`–`08`) |
| **CHIV-END: Tự kiểm tra cuối chương** | 22 Placements | 22 Placements Application | 0 | 0 | 0 (Dẫn đường B11-13) |
| **CHIV-RD1: Đề kiểm tra kín độc lập** | 26 Items RD1 | 26 Held-out Items | 0 | 0 | 0 |
| **TỔNG CỘNG TOÀN CHƯƠNG IV** | **22 Outcomes** | **88 Public Items + 26 RD1** | **22 Ví dụ D2** | **6 Hình D5** | **22 Thẻ D6 HELP** |

---

### III. PHẢN BIỆN CHUYÊN SÂU PED1–PED6 VÀ PHÂN TÍCH TOÁN HỌC THEO BÀI

#### 1. Bài 11: Nguyên hàm (7 Outcomes, 28 Public Items + 7 VD + 7 HELP) — `PASS`
* **PED1–PED3 (Động cơ & Bản chất):** Mở đầu từ bài toán ngược của đạo hàm: nếu biết vận tốc $v(t) = s'(t)$, làm sao tìm vị trí $s(t)$? Phép toán đảo của đạo hàm dẫn đến khái niệm Nguyên hàm.
* **PED4 (Ràng buộc toán học & Khóa bẫy):**
  1. *Họ nguyên hàm $F(x) + C$:* Hai nguyên hàm của cùng một hàm $f(x)$ trên khoảng $K$ chỉ khác nhau một hằng số $C$. Khi có điều kiện đầu $F(x_0) = y_0$, hằng số $C$ được xác định duy nhất.
  2. *Miền xác định của $1/x$:* $\int \frac{1}{x} dx = \ln|x| + C$ trên mỗi khoảng $(-\infty, 0)$ hoặc $(0, +\infty)$. Cấm ghi $\ln x$ khi $x < 0$ và không gộp hằng số $C$ chung cho hai khoảng tách rời bởi $x=0$.
  3. *Nguyên hàm lượng giác:* $\int \sin x dx = -\cos x + C$ (dấu âm), $\int \cos x dx = \sin x + C$. Mọi công thức lượng giác chỉ xét trên các khoảng liên tục không chứa điểm gián đoạn.
* **PED5–PED6 (Ví dụ & Tự thử):** 7 ví dụ suy luận (`EX-G12-B11-01..07`) phân tích định nghĩa, họ nguyên hàm với điều kiện đầu, quy tắc lũy thừa, $1/x$, hàm mũ, hàm lượng giác và bài toán vật lý/kinh tế. 2 hoạt động Tự thử (`B11-T01`, `B11-T02`) giúp học sinh tự đối chiếu trước Core.
* **Hình ảnh D5:** `Temp_FIG-G12-CHIV-B11-PRIMITIVES-R00.png` thể hiện họ đồ thị các nguyên hàm song song dịch chuyển dọc theo trục $Oy$ do hằng số $C$.

#### 2. Bài 12: Tích phân (7 Outcomes, 28 Public Items + 7 VD + 7 HELP) — `PASS`
* **PED1–PED3 (Tích phân xác định & Newton–Leibniz):** Tích phân xác định $\int_a^b f(x)dx = F(b) - F(a)$ đo sự tích lũy biến đổi liên tục từ $a$ đến $b$.
* **PED4 (Tính chất & Khóa bẫy):**
  1. *Không có $+C$ trong Tích phân xác định:* Tích phân xác định là một **số thực cụ thể**, không chứa hằng số $C$ (do $(F(b)+C) - (F(a)+C) = F(b)-F(a)$).
  2. *Tính chất tuyến tính, đảo cận, ghép khoảng:* $\int_a^b = -\int_b^a$, $\int_a^a = 0$, $\int_a^b + \int_b^c = \int_a^c$.
  3. *Tích phân có dấu vs. Diện tích:* Tích phân $\int_a^b f(x)dx$ có thể âm nếu $f(x) < 0$ trên $[a,b]$; diện tích đại số $S = \int_a^b |f(x)|dx$ luôn không âm.
* **PED5–PED6:** 7 ví dụ (`EX-G12-B12-01..07`) hướng dẫn tính tích phân bằng công thức Newton–Leibniz, tính chất tuyến tính, ghép đoạn, hàm trị tuyệt đối, hàm mũ/lượng giác, độ dời vận tốc và bài toán tích lũy kinh tế. 2 câu Tự thử định hướng trước Core.
* **Hình ảnh D5:** 
  * `Temp_FIG-G12-CHIV-B12-NEWTON-LEIBNIZ-R00.png`: Minh họa định lý Newton–Leibniz và diện tích hình thang cong.
  * `Temp_FIG-G12-CHIV-B12-SIGNED-AREA-R00.png`: Minh họa tích phân có dấu (vùng trên $Ox$ mang dấu $+$, vùng dưới $Ox$ mang dấu $-$).

#### 3. Bài 13: Ứng dụng hình học của tích phân (8 Outcomes, 32 Public Items + 8 VD + 8 HELP) — `PASS`
* **PED1–PED3 (Hình phẳng & Thể tích):**
  * *Diện tích hình phẳng:* $S = \int_a^b |f(x)|dx$. Khi $f(x)$ đổi dấu trên $[a,b]$ tại $c$, ta tách thành $\int_a^c f(x)dx - \int_c^b f(x)dx$ (với $f \ge 0$ trên $[a,c]$ và $f \le 0$ trên $[c,b]$).
  * *Diện tích giữa hai đường:* $S = \int_a^b |f(x) - g(x)|dx$. Nếu $f(x) \ge g(x)$ trên $[a,b]$, $S = \int_a^b (f(x) - g(x))dx$.
  * *Thể tích vật thể theo lát cắt $S(x)$:* $V = \int_a^b S(x)dx$.
  * *Thể tích tròn xoay quay quanh $Ox$:* $V = \pi \int_a^b [f(x)]^2 dx$.
* **PED4 (Chú ý đơn vị & Khóa bẫy):**
  * *Phân biệt diện tích ($m^2$) và thể tích ($m^3$):* Thể tích tròn xoay **bắt buộc phải có hệ số $\pi$** và **bình phương bán kính $[f(x)]^2$**. Quên $\pi$ hoặc quên bình phương là lỗi P0/P1.
  * *Bán kính vs. Đường kính:* Nếu cho đường kính $d(x)$, phải lấy $r(x) = d(x)/2$ trước khi bình phương $r(x)^2 = d(x)^2/4$.
* **PED5–PED6:** 8 ví dụ (`EX-G12-B13-01..08`) hướng dẫn diện tích dưới đường cong, đường cong cắt $Ox$, giữa 2 đường cong, giữa 2 đường cắt nhau, thực tế mặt đất, thể tích lát cắt vuông, thể tích lát cắt tròn và thể tích tròn xoay quanh $Ox$. 2 câu Tự thử trước Core.
* **Hình ảnh D5:** 
  * `Temp_FIG-G12-CHIV-B13-TWO-CURVES-R00.png`: Diện tích giữa hai đường cong $y=f(x)$ và $y=g(x)$.
  * `Temp_FIG-G12-CHIV-B13-VOLUME-SLICES-R00.png`: Thể tích vật thể qua các lát cắt $S(x)$.
  * `Temp_FIG-G12-CHIV-B13-REVOLUTION-R00.png`: Thể tích khối tròn xoay tạo thành khi quay quanh $Ox$.

#### 4. Bài tập Cuối chương IV (Public Self-Check) & Bộ Đề kín RD1 Độc lập
* **Tự kiểm tra công khai (`CLIENT_SELF_CHECK_NO_MASTERY`):**  
  * Bao gồm 22 placements tham chiếu trực tiếp đến 22 câu Application công khai đã duyệt (`THPT-G12-B11-A01..A07`, `THPT-G12-B12-A01..A07`, `THPT-G12-B13-A01..A08`).
  * **Đảm bảo an toàn:** 0 câu mới được tạo ra (tránh nhân bản item ID); không ghi điểm Skill Mastery; đáp án và lời giải chỉ mở sau `Final Submit`.
* **Bộ Đề kín RD1 Độc lập (`SGK_CHAPTER_READINESS`):**  
  * Gồm 26 câu độc lập (`THPT-G12-CHIV-RD1-001` đến `026`) được bảo mật hoàn toàn trong tệp `Temp_G12_CHIV_RD1_PRIVATE_REVIEW_ONLY_R00_20261103.md`.
  * Khảo sát 22/22 outcomes + 4 câu tích hợp liên-outcome, có đáp án và rubric 5 bước chi tiết. Không trùng lặp câu chữ hay số liệu với ngân hàng công khai.

---

### IV. THẨM ĐỊNH 18 CỔNG CHẤT LƯỢNG (Q01–Q18)

| Mã Cổng | Tên Cổng Chất Lượng (SLM-THPT-QUALITY-ONE) | Kết quả | Trích dẫn Bằng chứng Thẩm định |
| :---: | :--- | :---: | :--- |
| **Q01** | Source Receipt & S1 Page Matching | **PASS** | Khớp 100% trang in SGK (4–28) và SBT (3–21) cùng SHA256 PDF S1. |
| **Q02** | Math Correctness & Domain Limits | **PASS** | Họ nguyên hàm, $+C$, $\ln|x|$, Newton-Leibniz, diện tích, thể tích $\pi \int f^2$ chính xác. |
| **Q03** | Canonical Exercise & ID Contract | **PASS** | 88 câu công khai có `item_id` duy nhất, gán đúng 1 `OUTCOME_ID` chính. |
| **Q04** | Assessment Security & Self-Check Boundary | **PASS** | Tự kiểm tra cuối chương dùng `CLIENT_SELF_CHECK_NO_MASTERY`, khóa đáp án pre-Submit. |
| **Q05** | Worked Examples Rationale (D2) | **PASS** | 22 ví dụ D2 có lý giải chọn phương pháp, thử lại kết quả và kiểm đơn vị. |
| **Q06** | Written Item Rubrics (/5 Scale) | **PASS** | 22 bài tự luận D4 có rubric /5 phân rã đúng các bước tính toán. |
| **Q07** | Image / Visual QA (D5) | **PASS** | 6 ảnh PNG/SVG có chú thích, trục tọa độ và biểu diễn trực quan diện tích/thể tích. |
| **Q08** | HELP Remediation Cards (D6) | **PASS** | 22 thẻ HELP tuân thủ quy trình 5 bước quay về đúng outcome ban đầu. |
| **Q09–Q14**| PED1–PED6 Self-Learning Architecture | **PASS** | Kiến tạo động cơ WHY, tiền đề, bản chất trước công thức, Tự thử trước Core. |
| **Q15** | Canonical ID & Shared Bank | **PASS** | Mỗi bài tập có 1 `item_id` duy nhất, không nhân bản ID. |
| **Q16** | Client Self-Check & Exposure Control | **PASS** | Tự kiểm tra cuối chương dùng `CLIENT_SELF_CHECK_NO_MASTERY`, bảo mật 26 câu RD1 kín. |
| **Q17** | Dual Journey Boundaries | **PASS** | Giữ nguyên ranh giới SGK vs. Chuyên đề. |
| **Q18** | System Authorization Boundary | **PASS** | Giữ nguyên ranh giới hệ thống: `RELEASE_AUTHORIZATION = NO`, `MASTERY_ACTIVATION = NO`. |

* **Thống kê Lỗi & Phân loại Delta:**  
  * **P0 (System Blockers):** `0` | **P1 (Revisions Required):** `0` | **P2 (Minor Improvement Suggestions):** `0`
  * **MINIMAL_DELTA:** `0` (Phân loại: `DELTA_A_NO_CHANGE`).

---

### V. BẢNG MÁY KIỂM TRA MÃ HÓA (MACHINE-CHECKABLE VERDICT)

```text
PACKET_ID|G12-SGK-CHIV-B11-B13-R00-REVIEW_CANDIDATE
STANDARD_ID|SLM-THPT-QUALITY-ONE
STANDARD_VERSION|1.0.0
PERMANENT_SOURCES_VERSION|2.1
S1_SGK_RECEIPT|TOAN_12_KNTT_TAP_HAI_P4-28_SHA256_3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb
S1_SBT_RECEIPT|BAI_TAP_TOAN_12_KNTT_TAP_HAI_P3-21_SHA256_823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1
ACADEMIC_G12_CHAPTER_IV|PASS
PEDAGOGICAL_SELF_LEARNING_READY|PASS
OUTCOME_MATRIX_COUNT|22
WORKED_EXAMPLES_D2_COUNT|22
PUBLIC_CANONICAL_ITEMS_COUNT|88
WRITTEN_RUBRIC_5_COUNT|22
IMAGE_GRAPH_D5_COUNT|6
REMEDIATION_HELP_D6_COUNT|22
PRIVATE_RD1_HELD_OUT_COUNT|26
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

1. Phê duyệt **`ACADEMIC_G12_CHAPTER_IV = PASS`** và **`PEDAGOGICAL_SELF_LEARNING_READY = PASS`** áp dụng nghiêm ngặt cho toàn bộ học liệu SGK Toán 12 KNTT Tập 2 (Bài 11–13 và Tự kiểm tra cuối chương) trong gói candidate `R00`.
2. **`RELEASE_AUTHORIZATION = NO`**: Phê duyệt học thuật và sư phạm này **không** cấp quyền merge/deploy code lên GitHub repository công khai hay xuất bản lên website/frontend.
3. **`MASTERY_ACTIVATION = NO`**: **Không** tự động kích hoạt tính năng Tự kiểm tra công khai (Final Submit) hay tính điểm Skill Mastery cho người học.
4. **`EXPOSURE_SYSTEM_VERDICT = SYSTEM_HOLD`**: Tạm hoãn xuất bản hệ thống cho đến khi hoàn tất cổng kiểm thử kỹ thuật và duyệt release chính thức.
