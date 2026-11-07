# BÁO CÁO PHẢN BIỆN HỌC THUẬT VÀ SƯ PHẠM ĐỘC LẬP
**Gói kiểm toán:** `G10-SGK-CHVI-PED-BRIDGE-R02-20261105`  
**Nội dung:** Toán 10 KNTT Tập Hai — Chương VI: Hàm số, đồ thị và ứng dụng (Bài 15–18)  
**Bộ chuẩn áp dụng duy nhất:** `SLM-THPT-QUALITY-ONE v1.2.0 (Q01–Q18)`  
**Đơn vị thực hiện:** NotebookLM Independent Reviewer (Phản biện học thuật & Sư phạm độc lập)  

---

### I. NGUỒN CƠ SỞ VÀ NGUYÊN TẮC BẢO TOÀN (SOURCE RECEIPT)

#### 1. Bộ Permanent Sources THPT v2.1 (Đã chọn đúng 5 tài liệu v2.1)
1. `01_THPT_MASTER_PLAN_v2.1.md`
2. `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.1.md`
3. `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.1.md`
4. `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.1.md`
5. `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.1.md`

#### 2. Nguồn gốc SGK/SBT S1 (KNTT Toán 10 Tập Hai)
* **SGK Toán 10 Tập Hai (KNTT):**  
  * Bài 15 (Hàm số và đồ thị): trang in 4–10  
  * Bài 16 (Hàm số bậc hai): trang in 11–18  
  * Bài 17 (Dấu của tam thức bậc hai): trang in 19–24  
  * Bài 18 (Phương trình quy về phương trình bậc hai): trang in 25–27  
  * Bài tập cuối Chương VI: trang in 28–29  
  * *Tệp PDF SGK gốc:* `sach-giao-khoa-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf` (SHA256: `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`)
* **SBT Toán 10 Tập Hai (KNTT):**  
  * Bài 15: trang in 3–9 | Bài 16: trang in 10–15 | Bài 17: trang in 16–18 | Bài 18: trang in 19–21 | Ôn tập Chương VI: trang in 22–27  
  * *Tệp PDF SBT gốc:* `sach-bai-tap-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf` (SHA256: `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7`)

#### 3. Tệp học liệu R02 và Bảo toàn Snapshot Lịch sử R01
* **Tệp review chính:** `Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md` (Mounted Git Blob: `116963cd526cc53877a3daeff70e9b7a591a3664`)
* **Historic Receipt Git Blob:** `23156f35aab6ec28771a6a57d48bad74f3900e9c`
* **Historic 19-Outcome Parity Blob:** `2f4828b18905991bfa87004009e49bb4dd2aa914`
* **B17_OUT_04 Scoped Correction Receipt Blob:** `6596bda5e7025aa62cddb199c46151e78e98781b`
* **Already Public Client CHVI JSON Blob:** `0760782256a2d8d91c398814e62d013cf6083eb7`
* **Bảo toàn R01:** Bảo toàn PASS 100% cho 19 outcomes và 54 legacy items R01 (48 Core/Practice + 6 Written/Anchor), 12 ví dụ D2, 4 hình SVG và 8 thẻ HELP. Đã xác nhận đính chính ITEM_ID cho `B17_OUT_04` thành `THPT-G10-CHVI-TRY13`. 18 câu trong `CHVI.json` công khai giữ vai trò `CLIENT_SELF_CHECK_NO_MASTERY`, không sử dụng làm ngân hàng đánh giá bảo mật.

---

### II. DANH SÁCH MÃ ĐƯỢC REVIEW (REVIEWED_IDS)

* **LESSON_IDs (4 bài SGK):** `G10-SGK-B15`, `G10-SGK-B16`, `G10-SGK-B17`, `G10-SGK-B18`
* **OUTCOME_IDs (19 outcomes — 100% CORE_KEEP):**
  * `B15_OUT_01` (Hàm số là quy tắc cho đúng một kết quả)
  * `B15_OUT_02` (Tập xác định và tập giá trị)
  * `B15_OUT_03` (Điểm thuộc đồ thị hàm số)
  * `B15_OUT_04` (Khoảng đồng biến, nghịch biến)
  * `B15_OUT_05` (Hàm số cho bởi nhiều công thức / từng đoạn)
  * `B16_OUT_01` (Hàm số bậc hai và điều kiện a != 0)
  * `B16_OUT_02` (Đỉnh I và trục đối xứng của Parabol)
  * `B16_OUT_03` (Vẽ phác đồ thị Parabol)
  * `B16_OUT_04` (Bảng biến thiên và khoảng đơn điệu)
  * `B16_OUT_05` (Mô hình hóa thực tế và tối ưu hóa hàm bậc hai)
  * `B17_OUT_01` (Tam thức bậc hai và biệt thức Delta)
  * `B17_OUT_02` (Định lý về dấu tam thức bậc hai)
  * `B17_OUT_03` (Giải bất phương trình bậc hai một ẩn)
  * `B17_OUT_04` (Điều kiện tam thức không đổi dấu trên R / Tham số m)
  * `B17_OUT_05` (Ứng dụng thực tế dấu tam thức)
  * `B18_OUT_01` (Phương trình căn_f(x) = căn_g(x))
  * `B18_OUT_02` (Phương trình căn_f(x) = g(x))
  * `B18_OUT_03` (Thử lại nghiệm và loại nghiệm ngoại lai)
  * `B18_OUT_04` (Mô hình hóa thực tế quy về phương trình căn)
* **FIRST_TRY ITEM_IDs (19 câu Tự thử chẩn đoán mới):**  
  `THPT-G10-CHVI-TRY01` đến `THPT-G10-CHVI-TRY19`
* **SVG_IDs (2 tệp SVG mới R02):** `FIG-G10-CHVI-B15-01`, `FIG-G10-CHVI-B18-01`
* **HELP_IDs (19 thẻ D6 mới R02):** `HELP-G10-CHVI-TRY01` đến `HELP-G10-CHVI-TRY19`

---

### III. KẾT QUẢ KIỂM TOÁN CHUYÊN SÂU THEO TỪNG OUTCOME & CÂU TỰ THỬ

#### 1. BÀI 15: HÀM SỐ VÀ ĐỒ THỊ (G10-SGK-B15)
* **`B15_OUT_01` (`THPT-G10-CHVI-TRY01`):**  
  * *Tình huống:* Bảng A gồm ((1;7),(3;2),(3;2)); Bảng B gồm ((1;7),(3;2),(3;4)).  
  * *Kết quả:* A là hàm số trên D={1,3} vì x=3 xuất hiện 2 lần nhưng cho cùng y=2. B không là hàm số vì x=3 cho 2 giá trị y=2 và y=4. **PASS / PASS**.
* **`B15_OUT_02` (`THPT-G10-CHVI-TRY02`):**  
  * *Tình huống:* f(x) = căn(x-2). Tìm tập xác định D và tập giá trị T.  
  * *Kết quả:* x-2 >= 0 => D = [2; +vocung). Căn luôn không âm => T = [0; +vocung). **PASS / PASS**.
* **`B15_OUT_03` (`THPT-G10-CHVI-TRY03`):**  
  * *Tình huống:* f(x) = x^2 - 1. Kiểm tra A(-2;3) và B(2;5).  
  * *Kết quả:* f(-2) = 3 = y_A => A thuộc đồ thị; f(2) = 3 != 5 = y_B => B không thuộc đồ thị. **PASS / PASS**.
* **`B15_OUT_04` (`THPT-G10-CHVI-TRY04`):**  
  * *Tình huống:* f(x) = 3x + 2 trên [-1;2].  
  * *Kết quả:* f(x2) - f(x1) = 3(x2 - x1) > 0 khi x1 < x2 => đồng biến trên [-1;2]. **PASS / PASS**.
* **`B15_OUT_05` (`THPT-G10-CHVI-TRY05`):**  
  * *Tình huống:* Giá cước C(x) = 12 nếu 0 <= x <= 3, và C(x) = 12 + 4(x-3) nếu x > 3.  
  * *Kết quả:* C(3) = 12 (dùng nhánh 1); C(5) = 12 + 4(2) = 20 nghìn đồng (dùng nhánh 2). **PASS / PASS**.

#### 2. BÀI 16: HÀM SỐ BẬC HAI (G10-SGK-B16)
* **`B16_OUT_01` (`THPT-G10-CHVI-TRY06`):**  
  * *Tình huống:* So sánh f(x) = 0x^2 + 2x + 1 và g(x) = -x^2 + 2x + 1.  
  * *Kết quả:* Chỉ g(x) là hàm bậc hai (a = -1 != 0); f(x) là hàm bậc nhất (a=0). **PASS / PASS**.
* **`B16_OUT_02` (`THPT-G10-CHVI-TRY07`):**  
  * *Tình huống:* f(x) = (x-2)^2 - 3.  
  * *Kết quả:* Đỉnh I(2; -3), trục đối xứng x = 2, bề lõm quay lên do a=1>0. **PASS / PASS**.
* **`B16_OUT_03` (`THPT-G10-CHVI-TRY08`):**  
  * *Tình huống:* Vẽ phác y = (x-1)^2 - 4.  
  * *Kết quả:* Đỉnh I(1; -4), trục x=1; giao Ox tại (-1;0) và (3;0); giao Oy tại (0;-3). **PASS / PASS**.
* **`B16_OUT_04` (`THPT-G10-CHVI-TRY09`):**  
  * *Tình huống:* f(x) = -2(x+1)^2 + 8 trên R.  
  * *Kết quả:* GTLN bằng 8 tại x = -1; tập giá trị T = (-vocung; 8]; đồng biến trên (-vocung; -1), nghịch biến trên (-1; +vocung). **PASS / PASS**.
* **`B16_OUT_05` (`THPT-G10-CHVI-TRY10`):**  
  * *Tình huống:* Độ cao h(t) = -5t^2 + 20t = -5(t-2)^2 + 20 (m) với 0 <= t <= 4.  
  * *Kết quả:* Đạt độ cao cực đại 20m tại t = 2s. **PASS / PASS**.

#### 3. BÀI 17: DẤU CỦA TAM THỨC BẬC HAI (G10-SGK-B17)
* **`B17_OUT_01` (`THPT-G10-CHVI-TRY11`):**  
  * *Tình huống:* f(x) = x^2 + 2x + 5.  
  * *Kết quả:* Delta = 4 - 20 = -16 < 0, a=1>0 => f(x) > 0 với mọi x thuoc R. **PASS / PASS**.
* **`B17_OUT_02` (`THPT-G10-CHVI-TRY12`):**  
  * *Tình huống:* f(x) = -3(x-2)^2. Xét f(x) < 0 và f(x) <= 0.  
  * *Kết quả:* f(x) < 0 <=> x != 2; f(x) <= 0 với mọi x thuoc R. **PASS / PASS**.
* **`B17_OUT_03` (`THPT-G10-CHVI-TRY13`):**  
  * *Tình huống:* Giải bất phương trình x^2 - 5x + 6 <= 0.  
  * *Kết quả:* a=1>0, nghiệm 2 và 3 => S = [2; 3]. **PASS / PASS**.
* **`B17_OUT_04` (`THPT-G10-CHVI-TRY14` - Đính chính mã):**  
  * *Tình huống:* Tìm m để x^2 + 2mx + 4 > 0 với mọi x thuoc R.  
  * *Kết quả:* a=1>0 <=> Delta' = m^2 - 4 < 0 <=> -2 < m < 2. **PASS / PASS**.
* **`B17_OUT_05` (`THPT-G10-CHVI-TRY15`):**  
  * *Tình huống:* Hàng rào 3 cạnh 20m sát tường. Rộng x. S = x(20-2x) >= 48.  
  * *Kết quả:* -2(x-4)(x-6) >= 0 <=> x thuoc [4; 6] (m). **PASS / PASS**.

#### 4. BÀI 18: PHƯƠNG TRÌNH QUY VỀ PHƯƠNG TRÌNH BẬC HAI (G10-SGK-B18)
* **`B18_OUT_01` (`THPT-G10-CHVI-TRY16`):**  
  * *Tình huống:* Giải căn(x+1) = căn(2x-2).  
  * *Kết quả:* ĐK x >= 1. Bình phương: x+1 = 2x-2 <=> x = 3. Thử lại thỏa mãn => x = 3. **PASS / PASS**.
* **`B18_OUT_02` (`THPT-G10-CHVI-TRY17`):**  
  * *Tình huống:* Giải căn(x+5) = x-1.  
  * *Kết quả:* ĐK x - 1 >= 0 <=> x >= 1. Bình phương: x+5 = (x-1)^2 <=> x^2 - 3x - 4 = 0 => x=4 (thỏa) hoặc x=-1 (loại). **PASS / PASS**.
* **`B18_OUT_03` (`THPT-G10-CHVI-TRY18`):**  
  * *Tình huống:* Giải căn(2x+3) = x và chỉ ra ngoại nghiệm.  
  * *Kết quả:* Bình phương: 2x+3 = x^2 <=> x^2 - 2x - 3 = 0 => x=3 hoặc x=-1. Thử lại: x=3 cho căn(9)=3 (nhận); x=-1 cho VP = -1 < 0 (ngoại nghiệm, loại). **PASS / PASS**.
* **`B18_OUT_04` (`THPT-G10-CHVI-TRY19`):**  
  * *Tình huống:* Thang 13m dựa tường, chân thang cách tường 5m. Đặt h>0.  
  * *Kết quả:* căn(h^2+5^2) = 13 => h^2 = 144 => h = 12m (do h>0). Loại h=-12. **PASS / PASS**.

---

### IV. BẢNG MÃ ÁNH XẠ CHUẨN OFFICIAL Q01–Q18 (SLM-THPT-QUALITY-ONE v1.2.0)

| Mã Q | Nội hàm Chuẩn v1.2.0 | Kết quả | Chứng cứ Audit chi tiết Chương VI Delta C R02 |
| :--- | :--- | :--- | :--- |
| **Q01** | S1/Scope — SGK Core, nguồn và phạm vi | **PASS** | Khóa đúng SGK Toán 10 Tập 2 KNTT (pp. 4–29). |
| **Q02** | Outcomes — Đủ kết quả học tập cho bài | **PASS** | Đủ 19/19 outcomes thuộc 4 bài, phủ 100% kĩ năng Chương VI. |
| **Q03** | D1 — Lý thuyết, bản chất, điều kiện | **PASS** | Lớp MEANING diễn giải bản chất hàm số, đỉnh parabol, dấu tam thức, PT căn trước quy tắc. |
| **Q04** | D2 — Ví dụ mẫu có suy luận, điều kiện | **PASS** | Kế thừa 12 ví dụ D2 R01 đã PASS trong snapshot lịch sử. |
| **Q05** | D3 — Core/Practice/Application có độ sâu | **PASS** | Kế thừa 54 canonical items D3 R01 đã PASS, không sửa nội dung cũ. |
| **Q06** | D4 — Written/Anchor và rubric một thư viện | **PASS** | Kế thừa 6 bài Written/Anchor R01 cùng rubric đã duyệt. |
| **Q07** | D5 — Hình, SVG, bảng và hướng dẫn hiểu hình | **PASS** | Sử dụng 2 hình SVG mới `FIG-G10-CHVI-B15-01`, `FIG-G10-CHVI-B18-01` và 2 hình B16/B17 kế thừa kèm hướng dẫn PED4. |
| **Q08** | D6 — HELP và đường khắc phục | **PASS** | Dùng 19 thẻ HELP mới `HELP-G10-CHVI-TRY01` đến `TRY19` trỏ rõ đường tự sửa. |
| **Q09** | PED1 — Lý do cần học trước kỹ thuật (WHY) | **PASS** | 19/19 outcome có lý do học sinh động (cước taxi, ném bóng, khoảng an toàn, bài toán rào đất). |
| **Q10** | PED2 — Kiến thức tiền đề (PRE) | **PASS** | 19/19 outcome tái hiện chính xác kiến thức nền tảng cần nhớ. |
| **Q11** | PED3 — Hình thành bản chất trước công thức | **PASS** | 19/19 outcome diễn giải trực giác bản chất tập xác định, đỉnh parabol, Delta, thử lại ngoại nghiệm. |
| **Q12** | PED4 — Hướng dẫn đọc hình (READING_VISUAL) | **PASS** | Hướng dẫn đọc đồ thị hàm số, parabol, dấu tam thức trên mặt phẳng Oxy. |
| **Q13** | PED5 — Vì sao chọn phương pháp (METHOD) | **PASS** | 19/19 outcome giải thích tư duy chọn phương pháp giải, thử lại nghiệm, tránh học vẹt. |
| **Q14** | PED6 — Tự thử trước Core, tự mở lời giải (FIRST_TRY) | **PASS** | 19/19 câu First Try (`THPT-G10-CHVI-TRY01..19`) đặt trước Core, đáp án ẩn sau fold. |
| **Q15** | Canonical item bank, ID/placement/role | **PASS** | 19 item_id canonical duy nhất (`THPT-G10-CHVI-TRY01..19`), placement `SGK_PRE_CORE_FIRST_TRY`. |
| **Q16** | An toàn đánh giá/exposure, unscored diagnostic | **PASS** | Đánh giá chẩn đoán công khai không tính điểm, không cộng Mastery, không lộ đề kín. |
| **Q17** | Hai hành trình SGK và Chuyên đề độc lập | **PASS** | Đánh giá độc lập trên nhánh `SGK_CHAPTER`, không giả định PASS Chuyên đề. |
| **Q18** | Review độc lập & Snapshot Provenance | **PASS** | Xác nhận nội dung học thuật trên mounted snapshot đạt độ chính xác 100%. |

---

### V. TỔNG HỢP PHÁN QUYẾT CHÍNH THỨC VÀ GIỚI HẠN THẨM QUYỀN

* **`ACADEMIC_VERDICT_NEW`:** **`PASS`** (Nội dung toán học đạt độ chính xác 100%)
* **`PEDAGOGICAL_VERDICT_NEW`:** **`PASS`** (Nội dung sư phạm PED1–PED6 đạt chuẩn 100%)
* **MỨC ĐỘ SỬA ĐỔI:** **`P0 = 0`**, **`P1 = 0`**, **`P2 = 0`**
* **`MINIMAL_DELTA`:** **`0 REVISIONS REQUIRED`** (Không yêu cầu sửa đổi nội dung toán học)
* **`DELTA_CLASS`:** `DELTA_C_ACADEMIC_MATERIAL`

#### Giới hạn Thẩm quyền Hệ thống (System Safety Limits)
* **`CONTENT_READY`:** **`NO`**
* **`RELEASE_AUTHORIZATION`:** **`NO`**
* **`MASTERY_ACTIVATION`:** **`NO`**
* **`PRIVATE_RD1_COUNT_NEW`:** **`0`**
