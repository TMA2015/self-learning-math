# BÁO CÁO PHẢN BIỆN HỌC THUẬT VÀ SƯ PHẠM ĐỘC LẬP
**THẨM ĐỊNH TOÀN BỘ HỌC LIỆU SGK TOÁN 12 KNTT TẬP HAI — CHƯƠNG V (BÀI 14–17 VÀ TỰ KIỂM TRA CUỐI CHƯƠNG)**
*(Bản thẩm định độc lập theo chuẩn chuẩn mực  v1.0.0)*

* **PACKET_ID:** 
* **CƠ SỞ THẨM ĐỊNH:** Đúng **5 Permanent Sources THPT v2.1** ( đến ), Nguồn S1 SGK/SBT Toán 12 KNTT Tập Hai gốc và các tệp nguồn snapshot: , , , , , , , .
* **NHÃN CHẤT LƯỢNG:**  (v1.0.0).

---

### TÓM TẮT QUẢN TRỊ VÀ KẾT LUẬN THẨM ĐỊNH (EXECUTIVE SUMMARY)

1. ** (Do lỗ hổng tệp scan SBT p25 Bài 14) / **  
   * **Lý do HOLD:** Tệp scan PDF SBT Toán 12 KNTT Tập Hai gốc bị khuyết trang in **25** (chứa bài tập 5.6–5.7 của Bài 14) khi chuyển từ PDF p23 (trang in 24) sang PDF p24 (trang in 26). Theo quy định nghiêm ngặt Q01, ghi nhận **** cho Bài 14 / SBT p25 cho đến khi bổ sung bản scan S1 nguyên bản.
   * **Đánh giá Toán học:** Tất cả nội dung toán học được biên soạn đều chính xác tuyệt đối: Vectơ pháp tuyến \(ec{n} 
eq ec{0}\), phương trình tổng quát mặt phẳng \(Ax+By+Cz+D=0\) (\(A^2+B^2+C^2>0\)), phương trình tham số/chính tắc đường thẳng (cấm chia 0), điều kiện hai đường thẳng chéo nhau, công thức góc đường–mặt dùng **** (do phụ thuộc góc với pháp tuyến), công thức góc hai mặt dùng **** trị tuyệt đối, điều kiện phương trình mặt cầu \(R^2 = a^2+b^2+c^2-d > 0\) (loại bỏ trường hợp suy biến \(\le 0\)).

2. ****  
   Học liệu đáp ứng trọn vẹn 6 tiêu chí sư phạm tự học (): Động cơ định vị không gian 3D và mô hình hóa đường đi (), kiến thức tiền đề vectơ/tích vô hướng/tích có hướng (), hình thành bản chất pháp tuyến/chỉ phương/bán kính trước công thức (), làm rõ điều kiện xác định, đọc 6 hình minh họa D5 (), giải thích lý do lựa chọn phương pháp (), và thiết kế 8 hoạt động Tự thử định hướng trước Core ().

3. ** |  | **  
   Phê duyệt học thuật và sư phạm này là điều kiện cần nhưng **chưa cấp phép phát hành**, không tự động kích hoạt tính năng Tự kiểm tra công khai (Final Submit), không ghi nhận điểm Skill Mastery cho học sinh và không cấp quyền merge/deploy website.

---

### I. SOURCE_RECEIPT VÀ XÁC MINH S1 (SGK & SBT KNTT TẬP 2 GỐC)

#### 1. Nhật ký Nguồn S1 và Số trang in vs PDF 1-based Index

* **SGK Toán 12 KNTT Tập Hai (Nguồn S1):**
  * Tệp PDF gốc 99 trang, SHA256: .
  * Trong tệp PDF SGK: **** (đã xác minh trực tiếp từ trang quét S1).
  * *Bài 14 (Phương trình mặt phẳng):* Trang in **29–40** (PDF 1-based: **31–42**)
  * *Bài 15 (Phương trình đường thẳng trong không gian):* Trang in **41–49** (PDF 1-based: **43–51**)
  * *Bài 16 (Công thức tính góc trong không gian):* Trang in **50–53** (PDF 1-based: **52–55**)
  * *Bài 17 (Phương trình mặt cầu):* Trang in **54–60** (PDF 1-based: **56–62**)
  * *Bài tập cuối Chương V:* Trang in **61–63** (PDF 1-based: **63–65**)
* **SBT Toán 12 KNTT Tập Hai (Nguồn S1):**
  * Tệp PDF gốc 117 trang, SHA256: .
  * Trong tệp PDF SBT: **** (trừ trang in 25 bị khuyết).
  * *Bài 14:* Trang in **22–25** (PDF p21–23 tương ứng in 22–24; **KHÔNG CÓ TRANG IN 25** trong bản scan; PDF p24 nhảy sang in 26) \(\implies\) ****.
  * *Bài 15:* Trang in **26–29** (PDF 1-based: **24–27**)
  * *Bài 16:* Trang in **30–31** (PDF 1-based: **28–29**)
  * *Bài 17:* Trang in **32–34** (PDF 1-based: **30–32**)
  * *Bài tập cuối Chương V:* Trang in **35–39** (PDF 1-based: **33–37**)

---

### II. BẢNG MÃ TRẬN ĐỐI CHIẾU HỌC LIỆU VÀ TỔNG HỢP ID RECONCILIATION

| Bài học / Phân đoạn | Outcomes | Scored Items (D3 & D4) | Worked Examples (D2) | PNG/SVG Graphs (D5) | HELP Cards (D6) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Bài 14: Phương trình mặt phẳng** | 7 (–) | 28 (7C + 7P + 7A + 7W) | 7 (–) | 1 () | 7 (–) |
| **Bài 15: Phương trình đường thẳng** | 7 (–) | 28 (7C + 7P + 7A + 7W) | 7 (–) | 2 (, ) | 7 (–) |
| **Bài 16: Công thức tính góc** | 5 (–) | 20 (5C + 5P + 5A + 5W) | 5 (–) | 2 (, ) | 5 (–) |
| **Bài 17: Phương trình mặt cầu** | 5 (–) | 20 (5C + 5P + 5A + 5W) | 5 (–) | 1 () | 5 (–) |
| **CHV-END: Tự kiểm tra cuối chương** | 24 Placements | 24 Placements Application | 0 | 0 | 0 (Dẫn đường B14-17) |
| **CHV-RD1: Đề kiểm tra kín độc lập** | 28 Items RD1 | 28 Held-out Items | 0 | 0 | 0 |
| **TỔNG CỘNG TOÀN CHƯƠNG V** | **24 Outcomes** | **96 Public Items + 28 RD1** | **24 Ví dụ D2** | **6 Hình D5** | **24 Thẻ D6 HELP** |

---

### III. PHẢN BIỆN CHUYÊN SÂU PED1–PED6 VÀ PHÂN TÍCH TOÁN HỌC THEO BÀI

#### 1. Bài 14: Phương trình mặt phẳng (7 Outcomes, 28 Public Items + 7 VD + 7 HELP) —  / 
* **PED1–PED3 (Động cơ & Bản chất):** Nhu cầu định vị mặt phẳng trong không gian 3D (mặt phẳng gian phòng, tấm pin mặt trời). Tích có hướng \([ec{a}, ec{b}]\) của hai vectơ chỉ phương không cùng phương cho ta **Vectơ pháp tuyến \(ec{n} 
eq ec{0}\)** vuông góc với mặt phẳng.
* **PED4 (Công thức & Điều kiện):**
  1. *Phương trình mặt phẳng:* \(A(x-x_0) + B(y-y_0) + C(z-z_0) = 0 \iff Ax + By + Cz + D = 0\) với \(A^2+B^2+C^2 > 0\).
  2. *Khoảng cách từ điểm đến mặt phẳng:* \(d(M_0, (P)) = rac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}\).
* **PED5–PED6:** 7 ví dụ suy luận () phân tích lập phương trình qua điểm & VTPT, qua 3 điểm, song song/vuông góc, và tính khoảng cách. 2 hoạt động Tự thử (, ).
* **Hình ảnh D5:**  thể hiện mặt phẳng, điểm \(M_0\) và vectơ pháp tuyến \(ec{n}\).
* **Nguồn Gap:** SBT trang in 25 khuyết \(\implies\) ****.

#### 2. Bài 15: Phương trình đường thẳng trong không gian (7 Outcomes, 28 Public Items + 7 VD + 7 HELP) — 
* **PED1–PED3 (Đường thẳng & VTCP):** Đường thẳng được xác định bởi điểm \(M_0(x_0, y_0, z_0)\) và Vectơ chỉ phương \(ec{u} = (a,b,c) 
eq ec{0}\).
* **PED4 (Ràng buộc toán học & Khóa bẫy):**
  1. *Phương trình tham số:* \(x = x_0 + at, y = y_0 + bt, z = z_0 + ct\) (\(t \in \mathbb{R}\)).
  2. *Phương trình chính tắc:* \(rac{x-x_0}{a} = rac{y-y_0}{b} = rac{z-z_0}{c}\) (chỉ áp dụng khi \(a,b,c 
eq 0\)). **Cấm chia 0** khi có thành phần bằng 0.
  3. *Đường thẳng chéo nhau:* Hai đường thẳng không cắt nhau và không đồng phẳng (hai VTCP không cùng phương và hệ phương trình giao điểm vô nghiệm).
* **PED5–PED6:** 7 ví dụ () phân tích lập PT tham số, chính tắc, chuyển đổi dạng, xét vị trí tương đối và tìm giao điểm. 2 câu Tự thử trước Core.
* **Hình ảnh D5:** 
  * : Minh họa đường thẳng \(d\), điểm \(M_0\) và VTCP \(ec{u}\).
  * : Minh họa hai đường thẳng chéo nhau trong không gian 3D.

#### 3. Bài 16: Công thức tính góc trong không gian (5 Outcomes, 20 Public Items + 5 VD + 5 HELP) — 
* **PED1–PED3 (Góc & Quy tắc Lượng giác):**
  * *Góc giữa hai đường thẳng (\(d_1, d_2\)):* \(\cos(d_1, d_2) = rac{|ec{u}_1 \cdot ec{u}_2|}{|ec{u}_1||ec{u}_2|}\) (dùng **** trị tuyệt đối, góc \(\le 90^\circ\)).
  * *Góc giữa đường thẳng và mặt phẳng (\(d, (P)\)):* \(\sin(d, (P)) = rac{|ec{u} \cdot ec{n}|}{|ec{u}||ec{n}|}\) (dùng **** vì góc giữa đường và mặt phụ thuộc góc phụ với pháp tuyến).
  * *Góc giữa hai mặt phẳng (\((P_1), (P_2)\)):* \(\cos((P_1), (P_2)) = rac{|ec{n}_1 \cdot ec{n}_2|}{|ec{n}_1||ec{n}_2|}\) (dùng **** trị tuyệt đối).
* **PED4 (Khóa bẫy sin/cos):** Giải thích rõ ràng nguyên nhân chọn  cho góc đường–mặt và  cho góc hai mặt/hai đường.
* **PED5–PED6:** 5 ví dụ () hướng dẫn tính góc hai đường thẳng, đường–mặt, hai mặt phẳng và ứng dụng thực tế mái nhà/đường dốc. 2 câu Tự thử trước Core.
* **Hình ảnh D5:** 
  * : Minh họa góc giữa đường thẳng và mặt phẳng.
  * : Minh họa hai pháp tuyến \(ec{n}_1, ec{n}_2\) để xác định góc giữa hai mặt phẳng.

#### 4. Bài 17: Phương trình mặt cầu (5 Outcomes, 20 Public Items + 5 VD + 5 HELP) — 
* **PED1–PED3 (Mặt cầu & Tập hợp điểm):** Tập hợp các điểm trong không gian cách tâm \(I(a,b,c)\) một khoảng bằng \(R > 0\).
* **PED4 (Điều kiện tồn tại mặt cầu):**
  1. *Dạng chính tắc:* \((x-a)^2 + (y-b)^2 + (z-c)^2 = R^2\) (với \(R > 0\)).
  2. *Dạng khai triển:* \(x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0\).
     **Điều kiện cần và đủ để là phương trình mặt cầu:**
     \[a^2 + b^2 + c^2 - d > 0\]
     Khi đó tâm \(I(a,b,c)\) và bán kính \(R = \sqrt{a^2 + b^2 + c^2 - d}\). Nếu \(a^2 + b^2 + c^2 - d \le 0\), phương trình suy biến, **không phải là phương trình mặt cầu**.
* **PED5–PED6:** 5 ví dụ () lập PT mặt cầu biết tâm & bán kính, tìm tâm & bán kính từ dạng khai triển, mặt cầu đường kính \(AB\), và vị trí tương đối với mặt phẳng. 2 câu Tự thử trước Core.
* **Hình ảnh D5:**  minh họa mặt cầu tâm \(I\), bán kính \(R\) và thiết diện đường tròn với mặt phẳng.

#### 5. Bài tập Cuối chương V (Public Self-Check) & Bộ Đề kín RD1 Độc lập
* **Tự kiểm tra công khai ():**  
  * Bao gồm 24 placements tham chiếu trực tiếp đến 24 câu Application công khai đã duyệt (, , , ).
  * **Đảm bảo an toàn:** 0 câu mới được tạo ra (tránh nhân bản item ID); không ghi điểm Skill Mastery; đáp án và lời giải chỉ mở sau .
* **Bộ Đề kín RD1 Độc lập ():**  
  * Gồm 28 câu độc lập ( đến ) được bảo mật hoàn toàn trong tệp .
  * Khảo sát 24/24 outcomes + 4 câu tích hợp liên-outcome, có đáp án và rubric 5 bước chi tiết. Không trùng lặp câu chữ hay số liệu với ngân hàng công khai.

---

### IV. THẨM ĐỊNH 18 CỔNG CHẤT LƯỢNG (Q01–Q18)

| Mã Cổng | Tên Cổng Chất Lượng (SLM-THPT-QUALITY-ONE) | Kết quả | Trích dẫn Bằng chứng Thẩm định |
| :---: | :--- | :---: | :--- |
| **Q01** | Source Receipt & S1 Page Matching | **HOLD** | Khuyết trang in SBT 25 (B14) \(\implies\) ****. |
| **Q02** | Math Correctness & Domain Limits | **PASS** | VTPT, VTCP, góc sin/cos, điều kiện mặt cầu \(a^2+b^2+c^2-d > 0\) chính xác. |
| **Q03** | Canonical Exercise & ID Contract | **PASS** | 96 câu công khai có  duy nhất, gán đúng 1  chính. |
| **Q04** | Assessment Security & Self-Check Boundary | **PASS** | Tự kiểm tra cuối chương dùng , khóa đáp án pre-Submit. |
| **Q05** | Worked Examples Rationale (D2) | **PASS** | 24 ví dụ D2 có lý giải chọn phương pháp, thử lại kết quả và kiểm miền. |
| **Q06** | Written Item Rubrics (/5 Scale) | **PASS** | 24 bài tự luận D4 có rubric /5 phân rã đúng các bước lập phương trình. |
| **Q07** | Image / Visual QA (D5) | **PASS** | 6 ảnh PNG/SVG có chú thích, trục tọa độ và biểu diễn trực quan không gian 3D. |
| **Q08** | HELP Remediation Cards (D6) | **PASS** | 24 thẻ HELP tuân thủ quy trình 5 bước quay về đúng outcome ban đầu. |
| **Q09–Q14**| PED1–PED6 Self-Learning Architecture | **PASS** | Kiến tạo động cơ WHY, tiền đề, bản chất trước công thức, 8 hoạt động Tự thử trước Core. |
| **Q15** | Canonical ID & Shared Bank | **PASS** | Mỗi bài tập có 1  duy nhất, không nhân bản ID. |
| **Q16** | Client Self-Check & Exposure Control | **PASS** | Tự kiểm tra cuối chương dùng , bảo mật 28 câu RD1 kín. |
| **Q17** | Dual Journey Boundaries | **PASS** | Giữ nguyên ranh giới SGK vs. Chuyên đề. |
| **Q18** | System Authorization Boundary | **PASS** | Giữ nguyên ranh giới hệ thống: , . |

* **Thống kê Lỗi & Phân loại Delta:**  
  * **P0 (System Blockers):** 
  * **P1 (Revisions Required / Gap Hold):**  (Khuyết bản scan SBT p25 Bài 14 \(\implies\) )
  * **P2 (Minor Improvement Suggestions):** 
  * **MINIMAL_DELTA:**  (Delta Class:  cho nguồn SBT p25; các phần học liệu tự biên soạn đạt ).

---

### V. BẢNG MÁY KIỂM TRA MÃ HÓA (MACHINE-CHECKABLE VERDICT)



---

### VI. BẢO TỒN RANH GIỚI THẨM QUYỀN HỆ THỐNG

1. Phê duyệt **** và **** áp dụng cho học liệu SGK Toán 12 KNTT Tập 2 Chương V. Ghi nhận **** chung do lỗ hổng nguồn scan SBT trang in 25 ().
2. ****: Phê duyệt học thuật và sư phạm này **không** cấp quyền merge/deploy code lên GitHub repository công khai hay xuất bản lên website/frontend.
3. ****: **Không** tự động kích hoạt tính năng Tự kiểm tra công khai (Final Submit) hay tính điểm Skill Mastery cho người học.
4. ****: Tạm hoãn xuất bản hệ thống cho đến khi bổ sung nguồn scan S1 SBT p25 và hoàn tất cổng kiểm thử kỹ thuật.
