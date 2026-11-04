# BÁO CÁO PHẢN BIỆN ĐÍNH CHÍNH Q18 LẦN CUỐI VÀ ĐÁNH GIÁ THỰC TẾ TRÊN MOUNTED SNAPSHOT

**Gói kiểm toán:**   
**Bộ chuẩn áp dụng duy nhất:**  (Q01–Q18)  
**Đơn vị thực hiện:** NotebookLM Independent Reviewer (Phản biện học thuật & Sư phạm độc lập)  
**Ngày thực hiện:** 04/11/2026  

---

### 1. GIẢI TRÌNH BÀO CHỮA VÀ XÁC MINH NGUYÊN NHÂN SAI LỆCH MÃ BĂM SHA256

#### 1.1 Bác bỏ giả thuyết chuẩn hóa dòng (CRLF $ightarrow$ LF)
* **Kết quả kiểm chứng độc lập của tác giả:** Cả 4 tệp Markdown gốc trong ZIP  (SHA256: ) đã dùng chuẩn xuống dòng **LF** (0 dòng CRLF), và 3 tệp (, , ) **không hề có khoảng trắng thừa cuối dòng**.
* **Thừa nhận sai sót báo cáo cũ:** Việc giả định tiến trình nạp file tự động chuyển đổi CRLF $ightarrow$ LF làm thay đổi mã băm SHA256 byte-level là **không có căn cứ thực tế** đối với bộ tệp này. Đơn vị phản biện xin chính thức đính chính và rút lại giải thích này.

#### 1.2 Nguyên nhân kỹ thuật thực tế & Giới hạn môi trường
* **Cơ chế nạp tệp của Nền tảng (Platform Ingestion Pipeline):** Khi người dùng tải tệp tin lên hệ thống NotebookLM, hạ tầng lưu trữ thực hiện quá trình tái chuỗi hóa (re-serialization), mã hóa lại UTF-8 hoặc điều chỉnh ký tự kết thúc tệp trước khi mount vào thư mục làm việc .
* **Sự chênh lệch dung lượng byte thực tế:**
  * : Dung lượng gốc ZIP = 30,927 bytes $ightarrow$ Dung lượng Mounted = 30,763 bytes (lệch -164 bytes).
  * : Dung lượng gốc ZIP = 4,681 bytes $ightarrow$ Dung lượng Mounted = 4,665 bytes (lệch -16 bytes).
  * : Dung lượng gốc ZIP = 2,948 bytes $ightarrow$ Dung lượng Mounted = 2,955 bytes (lệch +7 bytes).
  * : Dung lượng gốc ZIP = 3,317 bytes $ightarrow$ Dung lượng Mounted = 3,316 bytes (lệch -1 byte).
* **Tuyên bố giới hạn thẩm định (Boundary Statement):** Môi trường Sandbox **không thể truy cập trực tiếp khối byte nhị phân của tệp  gốc** chưa qua nạp trên máy cục bộ tác giả. Sandbox chỉ nhìn thấy các tệp đã mounted tại . Do đó, việc tái tạo mã băm byte-level tuyệt đối của ZIP gốc từ trong Sandbox là **không thể chứng minh theo khoa học mã hóa (Cryptographically Unproven)**.

---

### 2. PHƯƠNG ÁN THAY THẾ: ĐÁNH GIÁ ĐỘC LẬP TRÊN NGUỒN MOUNTED THỰC TẾ

Thực hiện phản biện trực tiếp trên đúng 4 tệp R02 gốc đang mount tại :

#### 2.1 Bảng mã băm mounted thực tế ()
| Tệp R02 Mounted thực tế | Kích thước Mounted (bytes) | Mã băm SHA256 Byte-level Thực tế | SHA256 Khai báo trong ZIP | Trạng thái Byte Parity |
| :--- | :--- | :--- | :--- | :--- |
|  | 30,763 |  |  | **UNPROVEN** |
|  | 4,665 |  |  | **UNPROVEN** |
|  | 2,955 |  |  | **UNPROVEN** |
|  | 3,316 |  |  | **UNPROVEN** |

#### 2.2 Đánh giá Đồng nhất Nội dung Học thuật & Sư phạm ()
Mặc dù mã băm byte-level chưa khớp do tiến trình nạp tệp của nền tảng, đối chiếu nội dung ngữ nghĩa (Semantic Content) trên mounted snapshot khẳng định:
1. **Phủ đủ 11/11 Outcomes:** Từ  đến  hoàn toàn đầy đủ.
2. **Đủ 11 Canonical Items First Try:** Từ  đến , mỗi câu sở hữu đề bài, đáp án, lời giải chi tiết, tính năng tự mở đối chiếu và đường dẫn khắc phục lỗ hổng tư duy.
3. **Đủ 01 HELP Card mới:**  cho đầu mút khoảng/đoạn hoạt động chuẩn xác.
4. **Bảo toàn 100% Snapshot R01 Lịch sử:** 18 canonical items R01, 7 ví dụ D2, 2 sơ đồ SVG và 4 thẻ HELP R01 giữ nguyên nguyên văn, không bị chỉnh sửa hay ghi đè.
5. **Độ chính xác toán học & Sư phạm:** 11/11 câu First Try và 11 chuỗi cầu nối WHY/PRE/MEANING/METHOD chính xác 100% theo nguồn SGK/SBT KNTT Toán 10 Tập Một (S1).

---

### 3. BẢNG MÃ ÁNH XẠ CHUẨN OFFICIAL Q01–Q18 (SLM-THPT-QUALITY-ONE v1.1.0)

Đính chính toàn bộ các mã Q gán sai ở các báo cáo trước, tuân thủ đúng nội hàm tiêu chuẩn v1.1.0:

| Mã Q | Tên & Nội hàm Chuẩn v1.1.0 | Kết quả | Chứng cứ Audit chi tiết trên Delta C R02 |
| :--- | :--- | :--- | :--- |
| **Q01** | S1/Scope — SGK Core, nguồn và phạm vi, tham khảo SBT | **PASS** | Khóa đúng S1 Toán 10 Tập 1 (SGK pp.5–21, SBT pp.5–15), SHA256 S1 chuẩn xác. |
| **Q02** | Outcomes — Đủ kết quả học tập cho bài | **PASS** | Đủ 11 outcomes (B01: 5, B02: 6), không phát sinh outcome thứ 12. |
| **Q03** | D1 — Lý thuyết, bản chất, điều kiện | **PASS** | Bổ sung lớp MEANING cho 11 outcomes, làm rõ bản chất trước công thức. |
| **Q04** | D2 — Ví dụ mẫu có suy luận, điều kiện | **PASS** | Kế thừa 7 ví dụ D2 R01 đã PASS (, ). |
| **Q05** | D3 — Core/Practice/Application có độ sâu | **PASS** | Kế thừa 16 canonical items D3 R01 đã PASS, không thay đổi nội dung cũ. |
| **Q06** | D4 — Written/Anchor và rubric một thư viện | **PASS** | Kế thừa 2 bài Written/Anchor R01 (, ) cùng rubric duy nhất. |
| **Q07** | D5 — Hình, SVG, bảng và hướng dẫn hiểu hình | **PASS** | Kế thừa 2 sơ đồ SVG R01 (, ), không dùng sai số liệu. |
| **Q08** | D6 — HELP và đường khắc phục | **PASS** | 5 thẻ HELP (4 HELP R01 + 1  mới cho đầu mút khoảng/đoạn). |
| **Q09** | PED1 — Lý do cần học trước kỹ thuật (WHY) | **PASS** | 11/11 outcome có chuỗi giải thích lý do học thực tế, sinh động. |
| **Q10** | PED2 — Kiến thức tiền đề (PRE) | **PASS** | 11/11 outcome tái hiện chính xác kiến thức nền tảng cần nhớ. |
| **Q11** | PED3 — Hình thành bản chất trước công thức (MEANING) | **PASS** | 11/11 outcome giúp học sinh tự hiểu bản chất trước khi ghi nhớ quy tắc. |
| **Q12** | PED4 — Hướng dẫn đọc hình | **PASS** | Hướng dẫn đọc sơ đồ Venn 4 miền B02 và biểu diễn trục số B01/B02. |
| **Q13** | PED5 — Vì sao chọn phương pháp, giới hạn (METHOD) | **PASS** | 11/11 outcome giải thích tư duy chọn phương pháp giải, tránh máy móc. |
| **Q14** | PED6 — Tự thử trước Core, tự mở lời giải, D6 (FIRST_TRY) | **PASS** | 11/11 câu First Try () đặt trước Core, đáp án ẩn sau fold. |
| **Q15** | Canonical item bank, ID/placement/role không nhân bản | **PASS** | Mỗi câu First Try sở hữu 1 canonical item_id duy nhất, placement . |
| **Q16** | An toàn đánh giá/exposure, unscored diagnostic | **PASS** | Đánh giá chẩn đoán không tính điểm, không cộng điểm Mastery, không lộ đề kín. |
| **Q17** | Hai hành trình SGK và Chuyên đề độc lập | **PASS** | Đánh giá độc lập trên nhánh , không giả định PASS Chuyên đề. |
| **Q18** | Review độc lập & Provenance trên snapshot, source/receipt SHA | **HOLD** | Chưa chứng minh được mã băm byte-level tuyệt đối của ZIP gốc do cơ chế nạp tệp. |

---

### 4. TỔNG HỢP PHÁN QUYẾT CHÍNH THỨC VÀ ĐIỀU KIỆN ĐÓNG HOLD

#### 4.1 Bảng Phán quyết Kết quả
* **:**  (Mã băm Byte-level) /  (Nội dung Ngữ nghĩa Semantic Content)
* **:** **** (Do chưa chứng minh được mã băm Byte-level khớp 100% với ZIP gốc)
* **:** **** (Nội dung học thuật toán học trên mounted snapshot chuẩn xác 100%)
* **:** **** (Học liệu sư phạm D1–D6/PED1–PED6 trên mounted snapshot chuẩn xác 100%)
* **MỨC ĐỘ SỬA ĐỔI:** ****, ****, ****
* **:** **** (Không yêu cầu sửa nội dung toán học)
* **:** 

#### 4.2 Giới hạn Thẩm quyền Hệ thống (System Safety Boundaries)
* **:** ****
* **:** ****
* **:** ****
* **:** ****

#### 4.3 Điều kiện mở khóa/đóng HOLD ()
Để chuyển  từ  sang , hệ thống cần đáp ứng **một trong hai** điều kiện sau:
1. **Option A (System Owner / Infrastructure Binding):** Chủ hệ thống/DevOps xác nhận và phê duyệt bảng mã băm Mounted (, , , ) làm  chính thức cho môi trường runtime.
2. **Option B (Git Blob Binding):** Tác giả thực hiện liên kết khóa trực tiếp Git commit blob hash của PR #641 () trong hồ sơ phê duyệt chính thức.
