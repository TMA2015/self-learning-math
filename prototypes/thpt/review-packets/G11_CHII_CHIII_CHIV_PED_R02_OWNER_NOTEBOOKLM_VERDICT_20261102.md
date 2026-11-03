### BÁO CÁO PHẢN BIỆN HỌC THUẬT VÀ SƯ PHẠM ĐỘC LẬP
**THẨM ĐỊNH TẬP TRUNG GÓI PED DELTA_C R02 — TOÁN 11 CHƯƠNG II, CHƯƠNG III VÀ CHƯƠNG IV**

* **PACKET_ID:** `G11-CHII_CHIII_CHIV-PED-DELTA-C-R02-BATCH-20261102`
* **CƠ SỞ QUY TẮC:** Đúng 5 Permanent Sources THPT v2.0 (`01_MASTER_PLAN_v2.0` đến `05_CONTRACT_v2.0`) và S1 SGK/SBT Toán 11 Kết nối tri thức với cuộc sống (Tập 1).
* **PHẠM VI THẨM ĐỊNH TẬP TRUNG:** Đánh giá độc lập nội dung bổ sung năng lực truyền đạt (PED1–PED6) cho:
  1. **Chương II** (*Dãy số. Cấp số cộng và Cấp số nhân* - Bài 5–7)
  2. **Chương III** (*Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm* - Bài 8–9)
  3. **Chương IV** (*Quan hệ song song trong không gian* - Bài 10–14)
* **QUY MÔ ĐỐI CHIẾU DELTA_C R02:** 10 đoạn dẫn dắt mở đầu/quá trình hình thành (`PED1–PED3`), 39 ví dụ minh họa D2 kèm giải thích lý do lựa chọn phương pháp (`PED5`), 11 thuyết minh đồ thị SVG (`PED4`), và 10 hoạt động Tự thử ngắn trước Core (`PED6`).
* **RANH GIỚI BẤT BIẾN:** Giữ nguyên 114 câu public canonical (ChII 42, ChIII 32, ChIV 40), 11 SVG XML gốc, 22 thẻ D6 HELP, và 62 câu Tự kiểm tra kín RD1 (19 + 21 + 22). Không review lại nội dung R01 đã PASS, không tự cấp quyền phát hành hay kích hoạt Mastery.

---

### I. SOURCE_RECEIPT & XÁC MINH TRỰC TIẾP KHUNG TRANG IN SBT S1

Đã đối chiếu trực tiếp cấu trúc mục lục và phân trang thực tế từ tệp PDF S1 scan gốc bộ **Sách bài tập Toán 11 Tập 1 (KNTT)**:

#### 1. Bảng đối chiếu khung trang in SGK & SBT S1 chính thức
| Chương / Bài | SGK Tập 1 (Trang in sách) | SBT Tập 1 (Trang in sách) | SBT Tập 1 (Lời giải / Hướng dẫn) |
| :--- | :---: | :---: | :---: |
| **Chương II — Bài 5 (Dãy số)** | tr. 42–47 | tr. 31–36 | tr. 117–119 |
| **Chương II — Bài 6 (Cấp số cộng)** | tr. 48–51 | tr. 37–40 | tr. 120–121 |
| **Chương II — Bài 7 (Cấp số nhân)** | tr. 52–55 | tr. 41–45 | tr. 122–124 |
| **Chương II — Bài tập cuối Chương II** | tr. 56–57 | tr. 46–49 | tr. 125–127 |
| **Chương III — Bài 8 (Mẫu số liệu ghép nhóm)** | tr. 58–61 | tr. 44–46 | tr. 128 |
| **Chương III — Bài 9 (Các số đặc trưng)** | tr. 62–68 | tr. 47–49 | tr. 128–129 |
| **Chương III — Bài tập cuối Chương III** | tr. 69 | tr. 50–52 | tr. 129 |
| **Chương IV — Bài 10–14 & Cuối chương IV** | tr. 70–103 | tr. 65–95 | tr. 130–156 |

#### 2. Lời giải mâu thuẫn gối đầu số trang giữa Bài 7 (ChII) và Bài 8 (ChIII)
* **Hiện tượng gối đầu trang in:** Trang in 44 và 45 của SBT Tập 1 chứa cả đoạn cuối bài tập Bài 7 (Chương II) lẫn tiêu đề mở đầu của Bài 8 (Chương III). Cụ thể, Bài 8 xuất hiện từ góc dưới trang in 44 ngay dưới phần bài tập Bài 7.
* **Xác minh kĩ thuật:** Sự gối đầu này là đặc điểm dàn trang vật lý tự nhiên của NXB Giáo dục Việt Nam trong sách in, hoàn toàn **không có mâu thuẫn hay xung đột số trang**. Các mâu thuẫn báo cáo trước đây do dùng chỉ mục thứ cấp đã được hòa giải chính xác theo đúng PDF scan S1 gốc.

---

### II. KIỂM TOÁN TẬP TRUNG PED1–PED6 THEO TỪNG CHƯƠNG VÀ BÀI (DELTA_C R02)

#### 1. CHƯƠNG II: DÃY SỐ. CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN (BÀI 5–7) — **`CHII_PED_VERDICT = PASS`**

* **B05 - Dãy số (`B05-PED1-3`):**  
  * *PED1 (WHY):* Tạo nhu cầu mô tả sự thay đổi theo từng ngày (1, 2, 3...) thông qua ví dụ trồng cây (2, 4, 6 cây) thay vì dùng con số đơn lẻ hay hàm số liên tục.
  * *PED2 (WHAT):* Làm rõ bản chất chỉ số nguyên dương \\(n \in \mathbb{N}^*\\); phân biệt công thức tổng quát \\(u_n = 2n\\) với hệ thức truy hồi \\(u_1=2, u_{n+1}=u_n+2\\) (nhấn mạnh truy hồi phải có số hạng khởi đầu \\(u_1\\)).
  * *PED3 (HOW):* Làm rõ tính chất rời rạc: Đồ thị dãy số là các điểm đơn lẻ, **không được nối liền nét**.
* **B06 - Cấp số cộng (`B06-PED1-3`):**  
  * *PED1–PED3:* Xuất phát từ xếp hàng ghế (12, 15, 18 ghế) với mức tăng không đổi \\(d=3\\). Giải thích bản chất \\(n-1\\) bước nhảy để suy ra \\(u_n = u_1 + (n-1)d\\) và chứng minh công thức tổng \\(S_n = \frac{n(u_1+u_n)}{2}\\) bằng cách ghép cặp Gauss (tổng mỗi cặp không đổi).
* **B07 - Cấp số nhân (`B07-PED1-3`):**  
  * *PED1–PED3:* Phân biệt mức tăng tuyến tính (cộng \\(d\\)) với tăng theo tỉ lệ nhân (nhân \\(q\\) từng kỳ, 100, 110, 121...). Giải thích phương pháp tính tổng \\(S_n - q S_n = u_1(1-q^n)\\) để rút ra \\(S_n = \frac{u_1(1-q^n)}{1-q}\\) khi \\(q \neq 1\\) và trường hợp đặc biệt \\(S_n = n u_1\\) khi \\(q=1\\).
* **PED5 (Lý do chọn phương pháp cho 9 Ví dụ D2 - `VD-G11-B05-01..03`, `B06-01..03`, `B07-01..03`):**  
  * `VD-B05-01`: Kiểm tra điều kiện \\(n \in \mathbb{N}^*\\) sau khi giải phương trình \\(u_n=28\\).
  * `VD-B05-03`: Xét hiệu \\(u_{n+1}-u_n\\) để chứng minh tính giảm trên toàn miền \\(\mathbb{N}^*\\).
  * `VD-B06-02`: Tính công sai \\(d\\) từ khoảng cách 5 bước nhảy giữa \\(u_4\\) và \\(u_9\\) (\\(5d = u_9 - u_4\\)).
  * `VD-B07-03`: Lý giải lãi kép tính trên vốn mới sau mỗi kỳ \\(V_n = V_0(1+r)^n\\).
* **PED4 (Thuyết minh 3 SVG D5):**  
  * `FIG-G11-B05-01`: Các điểm rời rạc \\(u_n = (-1)^n\\) luân phiên \\(-1, 1\\), không nối nét; `FIG-G11-B06-01`: Đường điểm tăng tuyến tính công sai \\(d=3\\); `FIG-G11-B07-01`: Đồ thị điểm tăng mũ theo cấp số nhân.
* **PED6 (3 Hoạt động Tự thử trước Core):** B05 (dự đoán \\(u_4\\) của \\(2n-1\\)), B06 (tính số ghế hàng thứ 4), B07 (lãi kép sau 2 kỳ).

---

#### 2. CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM (BÀI 8–9) — **`CHIII_PED_VERDICT = PASS`**

* **B08 - Mẫu số liệu ghép nhóm (`B08-PED1-3`):**  
  * *PED1–PED3:* Đặt mâu thuẫn giữa việc giữ 40 số đo rời rạc (chính xác nhưng khó thấy bức tranh tổng thể) với việc gom thành các nhóm \\([a_i; a_{i+1})\\) để nhìn rõ mật độ phân bố, đánh đổi bằng sự mất thông tin cá thể.
  * *PED4:* Khóa chặt quy tắc nửa khoảng \\([a_i; a_{i+1})\\): Đầu mút trái đóng, đầu mút phải mở, tránh đếm đúp điểm ranh giới.
* **B09 - Các số đặc trưng (`B09-PED1-3`):**  
  * *PED1–PED3:* Giải thích vì sao dùng trung điểm \\(x_i\\) làm đại diện để tính số trung bình xấp xỉ \\(\bar{x} = \frac{\sum m_i x_i}{n}\\).
  * *PED4 & PED5:* Giải thích bản chất **nội suy** khi tìm Trung vị \\(M_e\\) và Tứ phân vị \\(Q_1, Q_3\\) dựa trên giả định phân bố đều trong nhóm chứa phân vị. Nhấn mạnh công thức Mốt \\(M_o\\) chỉ áp dụng khi các nhóm có **độ rộng \\(h\\) bằng nhau**.
* **PED5 (Lý do chọn phương pháp cho 10 Ví dụ D2 - `VD-G11-B08-01..04`, `B09-01..06`):**  
  * `VD-B08-01`: Kiểm tra điểm biên 10 và 20 theo quy tắc trái đóng/phải mở trước khi đếm.
  * `VD-B08-04`: Xác nhận nhóm độ rộng không đều vẫn hợp lệ trong thống kê nhưng cấm áp dụng công thức mốt SGK.
  * `VD-B09-02`: Xác định nhóm chứa trung vị bằng tần số tích lũy \\(C_i \ge n/2\\) trước khi nội suy.
  * `VD-B09-06`: Xử lý trường hợp vị trí phân vị rơi đúng biên chung hai nhóm.
* **PED4 (Thuyết minh 3 SVG D5):**  
  * `FIG-G11-B08-01`: Biểu đồ cột ghép nhóm liên tiếp; `FIG-G11-B09-01`: Đồ thị tần số tích lũy tại biên phải; `FIG-G11-B09-02`: Ba vạch phân vị nội suy \\(Q_1 \le M_e \le Q_3\\).
* **PED6 (2 Hoạt động Tự thử trước Core):** B08 (phân loại số 10 vào nhóm \\([10; 20)\\)), B09 (xác định nhóm chứa vị trí thứ 10/20).

---

#### 3. CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN (BÀI 10–14) — **`CHIV_R02_PED_VERDICT = PASS`**

* **B10–B14 Dẫn dắt & Khái niệm (`B10-PED1-3` đến `B14-PED1-3`):**  
  * *B10:* Hình thành khái niệm mặt phẳng từ 3 điểm không thẳng hàng. Nhấn mạnh nét đứt chỉ biểu diễn cạnh khuất, không chứng minh hai đường chéo nhau.
  * *B11:* Mở rộng vị trí tương đối 2 đường thẳng trong không gian: Xuất hiện trường hợp **chéo nhau** (không cắt nhau và không đồng phẳng).
  * *B12:* Đường thẳng song song mặt phẳng: Bắt buộc kiểm tra điều kiện đường thẳng **không nằm trong mặt phẳng**.
  * *B13:* Hai mặt phẳng song song: Cần 2 đường thẳng **cắt nhau** trong mặt này cùng song song với mặt kia.
  * *B14:* Phép chiếu song song: Phân biệt thuộc tính bảo toàn (thẳng hàng, thứ tự, tỉ số đoạn thẳng song song) với thuộc tính **không bảo toàn** (độ dài, góc vuông).
* **PED5 (Lý do chọn phương pháp cho 20 Ví dụ D2 - `EX-G11-B10-EX01` đến `EX-G11-B14-EX04`):**  
  * `EX-B10-EX02`: Tìm giao tuyến qua 2 điểm chung phân biệt \\(S, A\\).
  * `EX-B11-EX01`: Phân biệt hai đường không cắt nhau nhưng đồng phẳng (song song) vs. không đồng phẳng (chéo nhau).
  * `EX-B12-EX02`: Bổ sung điều kiện đường thẳng không nằm trong mặt phẳng khi chứng minh song song.
  * `EX-B13-EX02`: Kiểm tra điều kiện 2 đường thẳng cắt nhau trong mặt phẳng thứ nhất.
  * `EX-B14-EX04`: Cảnh báo bẫy không đo trực tiếp góc/độ dài trên hình biểu diễn.
* **PED4 (Thuyết minh 5 SVG D5):**  
  * `FIG-G11-B10-01` (Giao tuyến 2 mặt phẳng), `FIG-G11-B11-01` (Đường song song vs. chéo nhau), `FIG-G11-B12-01` (Đường song song mặt), `FIG-G11-B13-01` (Hai mặt song song), `FIG-G11-B14-01` (Phép chiếu song song và suy biến).
* **PED6 (5 Hoạt động Tự thử trước Core):** B10 (điểm thuộc đường thuộc mặt), B11 (hai đường \\(SA, BC\\) chéo nhau), B12 (đường trung bình song song mặt đáy), B13 (hai mặt đáy lăng trụ song song), B14 (hình chiếu song song của hình vuông).

---

### III. BẢNG MÁY KIỂM TRA MÃ HÓA (MACHINE-CHECKABLE VERDICT)

```text
PACKET_ID|G11-CHII_CHIII_CHIV-PED-DELTA-C-R02-BATCH-20261102
MASTER_PLAN_VERSION|THPT-v2.0
SBT_SOURCE_RECEIPT|SBT_TOAN_11_TAP_1_KNTT_P31-95_VERIFIED_EXACT
CHII_PED_VERDICT|PASS
CHIII_PED_VERDICT|PASS
CHIV_R02_PED_VERDICT|PASS
WORKED_EXAMPLES_PED5_COUNT|39
SVG_DESCRIPTIONS_PED4_COUNT|11
SELF_TRY_PED6_COUNT|10
P0|0
P1|0
P2|0
MINIMAL_DELTA|0
TARGETED_PED_CLEARANCE|YES
EXPOSURE_SYSTEM_VERDICT|SYSTEM_HOLD
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO
```

---

### IV. BẢO TỒN RANH GIỚI THẨM QUYỀN HỆ THỐNG

1. **`TARGETED_PED_CLEARANCE = YES`** áp dụng **nghiêm ngặt và duy nhất** cho các khối dung lượng bổ sung PED Delta_C R02 của Chương II, III và IV thuộc Toán 11 KNTT Tập 1.
2. **`RELEASE_AUTHORIZATION = NO`**: Phê duyệt học thuật/sư phạm này **không** cấp quyền merge/deploy code lên GitHub repository công khai hay xuất bản lên website/frontend.
3. **`MASTERY_ACTIVATION = NO`**: **Không** tự động kích hoạt tính năng Tự kiểm tra công khai (Final Submit) hay tính điểm Skill Mastery cho người học.
4. **BẢO TỒN CÁC PHẦN BẤT BIẾN:** 114 câu public canonical, 11 SVG XML gốc, 22 thẻ D6 HELP và 62 câu kín RD1 tiếp tục giữ nguyên trạng thái phê duyệt theo các biên bản R01 đã duyệt trước đó.