# BÁO CÁO PHẢN BIỆN HỌC THUẬT VÀ SƯ PHẠM ĐỘC LẬP (TARGETED DELTA C)

**Gói kiểm toán:** `G12-SGK-CHI-B01-W01-W02-SOLUTIONS-DELTA-C-R00-20261107`  
**Tệp nguồn thẩm định:** `Temp_G12_CHI_B01_W01_W02_SOLUTIONS_DELTA_C_R00_20261107.md`  
**Phạm vi review hẹp:** Chỉ đánh giá việc bổ sung lời giải (`answer` & `solution`) cho 2 item tự luận gốc: `THPT-G12-CHI-B01-W01` và `THPT-G12-CHI-B01-W02`  
**Bộ chuẩn áp dụng duy nhất:** `SLM-THPT-QUALITY-ONE v1.2.0 (Q01–Q18)`  
**Đơn vị thực hiện:** NotebookLM Independent Reviewer (Phản biện học thuật & Sư phạm độc lập)  
**Ngày thực hiện:** 07/11/2026  

---

### I. NGUỒN CƠ SỞ VÀ RẬN GIỚI KIỂM TOÁN (SOURCE RECEIPT)

1. **Bộ Permanent Sources THPT v2.1 (Đã đối chiếu 5 tài liệu quy phạm):**
   * `01_THPT_MASTER_PLAN_v2.1.md`
   * `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.1.md`
   * `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.1.md`
   * `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.1.md`
   * `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.1.md`

2. **Nguồn gốc SGK & SBT S1 (KNTT Toán 12 Tập Một — Bài 1):**
   * **SGK Toán 12 Tập Một:** Trang in 5–14 (Bài 1: Tính đơn điệu và cực trị của hàm số). SHA256: `faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd`.
   * **SBT Toán 12 Tập Một:** Trang in 4–13. SHA256: `db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca`.

3. **Căn cứ nguồn khóa và ngân hàng hiện hành:**
   * **Source Candidate R00 đã PASS:** Git blob `f0862dcdab21dec136e43969f45c42638e7c7574`.
   * **Biên bản Review R00 gốc:** Git blob `8fef1c7dbd9b404881ff40cec8147c9ae89ef473`.
   * **Ngân hàng PUBLIC R00 hiện hành (`CH1.json`):** Git blob `4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a`.

4. **Bảo toàn Snapshot Lịch sử:**
   * Giữ nguyên 100% kết quả PASS lịch sử của 12/12 bài Written Chương I và toàn bộ 120+ câu hỏi Core/Practice/Application.
   * Không phát sinh `item_id` mới. Giữ nguyên stem, role/placement, rubric gốc (/4) và không nhân bản Anchor `W02`.

---

### II. ĐÁNH GIÁ CHI TIẾT TỪNG ITEM THUỘC PHẠM VI DELTA C

---

#### 1. Item `THPT-G12-CHI-B01-W01`
* **Lesson & Outcome:** `G12-SGK-B01` / `G12-B01-EXTREMA_SIGN_CHANGE`
* **Role & Placement:** `SGK_WRITTEN` / `WRITTEN`
* **Đề bài bất biến:** Khảo sát sự đồng biến, nghịch biến và cực trị của $f(x)=x^3-3x$, tự vẽ phác thảo bảng dấu. Trình bày vì sao $f'=0$ riêng lẻ chưa phải kết luận.
* **Rubric bất biến (/4):** 1đ ($D=\mathbb{R}$, $f'=3(x^2-1)$); 1đ (nghiệm $-1, 1$, dấu $+,-,+$); 1đ (khoảng tăng/giảm); 1đ (cực đại $(-1,2)$, cực tiểu $(1,-2)$ & giải thích sự đổi dấu).

##### A. Thẩm định Toán học (`answer` & `solution`)
* **Hàm số & Tập xác định:** $f(x) = x^3 - 3x$, xác định trên $D = \mathbb{R}$.
* **Đạo hàm & Nghiệm tới hạn:** $f'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0 \iff x = -1$ hoặc $x = 1$.
* **Xét dấu $f'(x)$:** Tam thức bậc hai $a = 3 > 0$ có 2 nghiệm $-1, 1 \implies f'(x) > 0$ trên $(-\infty, -1)$ và $(1, +\infty)$; $f'(x) < 0$ trên $(-1, 1)$.
* **Khoảng đơn điệu:** Hàm số đồng biến trên $(-\infty, -1)$ và $(1, +\infty)$; nghịch biến trên $(-1, 1)$.
* **Cực trị địa phương:**
  * Tại $x = -1$, $f'$ đổi dấu từ dương $(+)$ sang âm $(-)$ $\implies x = -1$ là điểm cực đại, giá trị cực đại $f(-1) = 2$, điểm cực đại đồ thị $(-1, 2)$.
  * Tại $x = 1$, $f'$ đổi dấu từ âm $(-)$ sang dương $(+)$ $\implies x = 1$ là điểm cực tiểu, giá trị cực tiểu $f(1) = -2$, điểm cực tiểu đồ thị $(1, -2)$.
* **Giải thích điều kiện $f'(x_0) = 0$ chưa đủ:** $f'(x_0) = 0$ chỉ xác định điểm tới hạn (ứng viên). Bắt buộc phải có sự đổi dấu của $f'(x)$ khi $x$ qua $x_0$. Phản ví dụ mẫu: $g(x) = x^3 \implies g'(0) = 0$ nhưng $g'(x) = 3x^2 \ge 0, \forall x$, không đổi dấu qua $0 \implies x=0$ không là điểm cực trị. Phân biệt rõ cực trị địa phương và GTLN/GTNN toàn cục.
* **Đánh giá:** Lời giải chuẩn xác 100%, mạch lạc, không lỗi sô học, đáp ứng trọn vẹn tiêu chuẩn Q04, Q06 và PED3/PED5.

##### B. Thẩm định Sư phạm & Khắc phục D6
* Dẫn dắt 5 bước D6 rõ ràng: chẩn đoán sai đạo hàm, xét dấu sai, quên kiểm tra sự đổi dấu của $f'$, nhầm cực trị địa phương với GTLN/GTNN. Trỏ về đúng kiến thức gốc SGK B01 và không tự cộng điểm Mastery.

##### C. Phán quyết Item 1:
* **`ACADEMIC VERDICT:` PASS**
* **`PEDAGOGICAL VERDICT:` PASS**

---

#### 2. Item `THPT-G12-CHI-B01-W02`
* **Lesson & Outcome:** `G12-SGK-B01` / `G12-B01-DOMAIN_INTERVALS`
* **Role & Placement:** `SGK_WRITTEN` / `ANCHOR_TAG` (Duy nhất 1 canonical item_id, không nhân bản câu).
* **Đề bài bất biến:** Xét $f(x)=\frac{1}{x-2}$. Chứng minh $f$ nghịch biến trên mỗi thành phần khoảng của miền xác định; nêu một cặp $x_1<x_2$ ở hai phía $x=2$ cho thấy không thể gộp các khoảng vào một phát biểu "nghịch biến trên D".
* **Rubric bất biến (/4):** 1đ ($D=\mathbb{R}\setminus\{2\}$); 1đ ($f'=-\frac{1}{(x-2)^2}<0$); 1đ (2 khoảng $(-\infty,2)$ và $(2,+\infty)$); 1đ (phản ví dụ $f(1)=-1, f(3)=1$ với $1<3$ nhưng $f(1)<f(3) \implies$ không nghịch biến trên $D$).

##### A. Thẩm định Toán học (`answer` & `solution`)
* **Tập xác định:** Điều kiện $x - 2 \ne 0 \iff x \ne 2 \implies D = \mathbb{R} \setminus \{2\} = (-\infty, 2) \cup (2, +\infty)$.
* **Đạo hàm:** Với mọi $x \in D$:
  $$f'(x) = \left(\frac{1}{x-2}\right)' = -\frac{1}{(x-2)^2} < 0$$
* **Áp dụng định lý đơn điệu trên khoảng:** Mặc dù $f'(x) < 0, \forall x \in D$, định lý dấu đạo hàm chỉ áp dụng trên từng khoảng liên thông. Do đó, $f$ nghịch biến trên **từng khoảng** $(-\infty, 2)$ và $(2, +\infty)$.
* **Bác bỏ phát biểu "nghịch biến trên D":**
  * Chọn $x_1 = 1 \in (-\infty, 2)$ và $x_2 = 3 \in (2, +\infty)$.
  * Ta có $x_1 < x_2$ ($1 < 3$).
  * Giá trị hàm số: $f(1) = \frac{1}{1-2} = -1$ và $f(3) = \frac{1}{3-2} = 1 \implies f(1) < f(3)$ ($-1 < 1$).
  * Theo định nghĩa hàm nghịch biến trên tập $S$: Với mọi $x_1, x_2 \in S$, nếu $x_1 < x_2$ thì phải có $f(x_1) > f(x_2)$. Ở đây cặp $(1, 3)$ cho kết quả $f(1) < f(3)$ ngược lại, chứng tỏ $f$ **không nghịch biến trên toàn bộ tập $D$**.
* **Phân tích sai lầm thường gặp (Step 5):** Mệnh đề "$f'(x) < 0$ trên $D$" không cho phép đi xuyên qua điểm gián đoạn $x=2$ để gộp hai khoảng. Định lý dấu đạo hàm chỉ có hiệu lực trên khoảng không bị gián đoạn.
* **Đánh giá:** Lập luận toán học chặt chẽ, chính xác tuyệt đối, làm nổi bật bản chất định lý đơn điệu và phản ví dụ bác bỏ.

##### B. Thẩm định Sư phạm & Khắc phục D6
* D6 hướng dẫn 5 bước khắc phục cụ thể: phát hiện lỗi gộp khoảng, kiểm tra điểm gián đoạn $x=2$, đối chiếu trực tiếp phản ví dụ $f(1)=-1 < f(3)=1$. Trỏ đúng về kỹ năng gốc, không cấp điểm Mastery tự động.

##### C. Phán quyết Item 2:
* **`ACADEMIC VERDICT:` PASS**
* **`PEDAGOGICAL VERDICT:` PASS**

---

### III. BẢNG MÃ ÁNH XẠ CHUẨN Q01–Q18 (SLM-THPT-QUALITY-ONE v1.2.0)

| Mã Q | Nội hàm Tiêu chuẩn | Kết quả Audit | Chứng cứ Chi tiết gói Targeted Delta C R00 |
| :--- | :--- | :--- | :--- |
| **Q01** | S1 Scope & Provenance | **PASS** | Khóa đúng SGK/SBT Toán 12 Tập Một (Bài 1, SGK pp. 5–14, SBT pp. 4–13). |
| **Q02** | Outcomes Coverage | **PASS** | Gắn đúng 2 outcomes `G12-B01-EXTREMA_SIGN_CHANGE` và `G12-B01-DOMAIN_INTERVALS`. |
| **Q03** | D1 Rigor & Meaning | **PASS** | Làm rõ bản chất sự đổi dấu $f'$ và tính đơn điệu trên từng khoảng liên thông rời nhau. |
| **Q04** | D2 Worked Examples | **PASS** | Kế thừa 100% ví dụ D2 R00 lịch sử đã PASS. |
| **Q05** | D3 Core / Practice Depth | **PASS** | Đạt độ sâu tự luận phân tích bản chất, không vi phạm quy tắc đơn điệu. |
| **Q06** | D4 Written / Rubric | **PASS** | Giữ nguyên Rubric 4.0 điểm (/4) gốc cho cả W01 và W02. Đầy đủ 4 tiêu chí x 1 điểm. |
| **Q07** | D5 Figures & Visuals | **PASS** | Kế thừa bảng biến thiên và hình học R00 lịch sử. |
| **Q08** | D6 Remediation Pathways | **PASS** | Bổ sung 2 đường D6 sau đối chiếu, đủ 5 bước chẩn đoán và khắc phục. |
| **Q09–Q14**| PED1–PED6 Process | **PASS** | Đầy đủ 5 bước trình bày lời giải chi tiết (WHY/PRE/MEANING/METHOD/LIMIT). |
| **Q15** | Canonical ID Contract | **PASS** | Giữ đúng 2 item_id canonical duy nhất (`THPT-G12-CHI-B01-W01` và `W02`), Anchor W02 không bị nhân bản. |
| **Q16** | Assessment Safety | **PASS** | Ẩn `answer` và `solution` trước khi học sinh nộp bài / tự đối chiếu; không ghi Mastery. |
| **Q17** | Dual Learning Paths | **PASS** | Đánh giá độc lập trên tuyến `SGK_CHAPTER`. |
| **Q18** | Independent Review Audit | **PASS** | Đã kiểm toán hẹp đúng phạm vi Delta C của 2 item, bảo toàn snapshot cũ. |

---

### IV. XÁC MINH CƠ CHẾ RUBRIC VÀ TRẠNG THÁI HIỂN THỊ (DELTA_A_UI vs DELTA_C)

1. **Kiểm tra Rubric Gốc:**
   * Cả 2 item `W01` và `W02` đều có Rubric 4 tiêu chí $\times$ 1.0 điểm = **4.0 điểm (/4)**.
   * Đây là chuẩn mực nhất quán của Golden Learning Architecture v2.1 áp dụng cho 238 câu tự luận canonical.

2. **Xử lý Sai lệch Trình bày trên Giao diện (Issue #767):**
   * Nếu giao diện frontend/web hiện tại ghi điểm tối đa "/5", đây là **lệch trình bày giao diện (`DELTA_A_UI`)**.
   * Báo cáo kiểm toán xác nhận: **KHÔNG** tự ý nâng Rubric học thuật từ /4 thành /5. Đội ngũ Release/Frontend sẽ điều chỉnh UI hiển thị đúng thang điểm `/4` (4 tiêu chí $\times$ 1đ) theo đúng bản ghi canonical đã duyệt.

---

### V. TỔNG HỢP PHÁN QUYẾT VÀ CHỈ SỐ SỬA ĐỔI MINIMAL DELTA

* **`ACADEMIC_VERDICT:` PASS** (Cho cả 2 item `THPT-G12-CHI-B01-W01` và `THPT-G12-CHI-B01-W02`)
* **`PEDAGOGICAL_VERDICT:` PASS** (Cho cả 2 item `THPT-G12-CHI-B01-W01` và `THPT-G12-CHI-B01-W02`)
* **MỨC ĐỘ SỬA ĐỔI BẮT BUỘC:** **`P0 = 0`**, **`P1 = 0`**, **`P2 = 0`**
* **`MINIMAL_DELTA:` 0 REVISIONS REQUIRED** (Nội dung toán học, lời giải chi tiết `solution` và đáp án tóm tắt `answer` bổ sung đạt độ chính xác 100%)
* **`DELTA_CLASS:`** `DELTA_C_ACADEMIC_MATERIAL`

#### Giới hạn Thẩm quyền Hệ thống (System Safety Limits)
* **`CONTENT_READY:` NO** (Cần tạo snapshot nguồn consolidated mới và thực hiện quy trình bàn giao V2 chính thức)
* **`RELEASE_AUTHORIZATION:` NO**
* **`MASTERY_ACTIVATION:` NO**
* **`PRIVATE_RD1_COUNT_NEW:` 0**

---
*(Báo cáo kiểm toán chi tiết đầy đủ đã được xuất bản và đồng bộ chính thức tại Studio panel với tên tệp: `Bao_Cao_Kiem_Toan_Toan_12_Chuong_I_W01_W02_Delta_C_20261107.md`).*