# Temp — Toán 11 Chương IX: 1 bài tự luận chuyển động, cực đại vận tốc và quãng đường — R00 (để NotebookLM review)

**PACKET_ID:** `SLM-THPT-TRANSFER-WRITTEN-20261106-R00`  
**BATCH_ID:** `G11-SGK-CHIX-TRANSFER-R00`  
**STATUS:** `AUTHORING_NEW_CANDIDATE / DELTA_C_ACADEMIC_MATERIAL / NOTEBOOKLM_REVIEW_PENDING`  
**STANDARD:** `SLM-THPT-QUALITY-ONE`, Q01–Q18; phiên bản hiệu lực kiểm ở main tại thời điểm review.  
**LEARNING_PATH:** `SGK_CHAPTER` · **LESSON_IDS:** `G11-SGK-B31`, `G11-SGK-B33`.  
**OUTCOME_IDS:** `G11-B31-INSTANT_VELOCITY`, `G11-B33-ACCELERATION`, `G11-B33-SIGN_INTERPRET`; những outcome mới là `NONE` — đây là luyện **chuyển giao kiến thức đã dạy**.  
**ASSESSMENT:** `WRITTEN_SELF_CHECK` + First Try unscored; `CLIENT_SELF_CHECK_NO_MASTERY`, tuyệt đối không RD1, không ghi Readiness/Skill Mastery.  
**SOURCE_BLOB_OLD:** `prototypes/thpt/content-drafts/G11_CHIX_B31_B33_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` trên `main`, Git blob `3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0` (31 outcomes, 32 D2, 62 D3, 9 D4). Hai Written chuyển động cũ B31-W03/B33-W03 **không sửa**.  
**S1 original raw:** SGK Toán 11 KNTT Tập Hai SHA256 `14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491`, **trang in 96 ↔ PDF 97** gia tốc từ đạo hàm cấp hai; **bài 9.33 trang in 98 ↔ PDF 99** tính vận tốc và quãng đường chuyển động bậc ba. SBT Tập Hai SHA256 `a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189`, **bài 9.16 trang in 60 ↔ PDF 61** về vận tốc cực đại. Đã đọc ảnh trang thật và băm file gốc; không sao chép nguyên văn bài SGK/SBT.  
**PRIVACY:** không có RD1, dữ liệu học sinh, câu/đáp án riêng tư trong file.  

## 1. ITEM_REGISTER — 3 canonical candidate IDs

| ITEM_ID | ROLE | PRIMARY_OUTCOME_ID | SECONDARY_OUTCOME_ID | PLACEMENT | content_version |
|---|---|---|---|---|---|
| `THPT-G11-CHIX-TRY-MOTION-TR01` | `SGK_PRE_CORE_FIRST_TRY` (unscored) | `G11-B31-INSTANT_VELOCITY` | `G11-B33-ACCELERATION` | G11/ChIX/B33, ôn liên bài B31+B33 | 1 |
| `EX-G11-B33-MOTION-TR01` | `SGK_D2_WORKED_EXAMPLE` | `G11-B33-ACCELERATION` | `G11-B31-INSTANT_VELOCITY` | G11/ChIX/B33 | 1 |
| `THPT-G11-CHIX-W33-MOTION-TR01` | `SGK_WRITTEN`, `TRANSFER` | `G11-B33-SIGN_INTERPRET` | `G11-B31-INSTANT_VELOCITY`, `G11-B33-ACCELERATION` | G11/ChIX/B33 | 1 |

**Q15:** 3 IDs biểu thị ba câu học tập **khác nhau**, không lặp stem dưới các role khác nhau. D4 mới không nhân bản `THPT-G11-CHIX-B31-W03`, `THPT-G11-CHIX-B33-W03` hoặc `THPT-G11-CHIX-B33-W01`. Không gán Topic placement khi Topic chưa được đánh giá độc lập.

## 2. Hướng dẫn tự học PED1–PED6 trước khi làm bài

**PED1 — Vì sao cần học?** Biết **vận tốc tại một giây** chưa đủ để biết vật đã đi bao xa. Vật có thể chuyển động về phía âm rồi quay đầu; khi đó **quãng đường** bằng tổng chiều dài các chặng, còn **độ dời** có dấu được tính bằng vị trí cuối trừ vị trí đầu.  
**PED2 — Tiền đề:** Đạo hàm đa thức; `v(t)=s'(t)` có thể âm, còn tốc độ `|v(t)|≥0`; gia tốc `a(t)=v'(t)=s''(t)`. Muốn cực trị vận tốc trên đoạn phải kiểm điểm tới hạn và **đầu mút**; dấu a cho chiều tăng/giảm của **v**, không trực tiếp là dấu của v.  
**PED3 — Bản chất trước công thức:** Điểm vận tốc cực đại là thời điểm hàm `v(t)` đạt giá trị cao nhất **có dấu** trong miền. Điểm a(t)=0 chỉ là ứng viên: phải kiểm a đổi dấu +→− hoặc so giá trị/biểu diễn dạng đỉnh. Để tính **quãng đường**, phân đoạn tại nghiệm v=0: mỗi chặng cộng `|s(t_{i+1})−s(t_i)|`. Chỉ khi v không đổi dấu mới dùng trị tuyệt đối của **một** độ dời.  
**PED4 — Cách đọc hình/bảng:** Trục ngang là **thời gian t (s)**, trục dọc đồ thị s(t) là **tọa độ có dấu (m)**. Đồ thị v(t) là parabol quay xuống nếu hệ số t² âm: **đỉnh v** không nhất thiết là **đỉnh s**, và giao trục v=0 là điểm s đổi chiều (nếu v đổi dấu). Hãy đánh dấu lần lượt `t=0`, nghiệm v=0, thời điểm v cực đại, rồi đọc s ở các mốc.  
**PED5 — Vì sao phương pháp này?** Vì yêu cầu vừa có **cực đại vận tốc** vừa có **tổng quãng đường**, nên phải (i) tính v=s', (ii) kiểm t cực đại trong miền, (iii) giải `v=0` để kiểm đảo chiều, (iv) cộng độ dài từng chặng. Không dùng “`a=0` ⇒ tốc độ lớn nhất” vì tốc độ = |v| và còn phụ thuộc miền. Không suy quãng đường bằng `s(t*)` nếu s(0)≠0 hoặc có đổi chiều.  

### PED6 · Tự thử trước Core — `THPT-G11-CHIX-TRY-MOTION-TR01`

Một vật có tọa độ `s(t)=−t³+3t²+3t` (m), `0≤t≤2` (s). (a) Viết `v(t)` và tìm thời điểm **vận tốc có dấu** lớn nhất. (b) Trong khoảng từ 0 đến thời điểm đó, vật có đổi chiều không? (c) Tính quãng đường. Tự làm trước khi xem.

<details><summary>Tự mở đối chiếu sau khi đã thử</summary>

`v(t)=−3t²+6t+3=6−3(t−1)²` m/s, đạt **6 m/s tại t=1 s**. Trên `[0,1]`, `v(t)≥3>0`, không đổi chiều. `s(1)−s(0)=−1+3+3=5 m`; quãng đường **5 m**. Nếu chỉ cho a(1)=0 mà không kiểm cực đại, hoặc bỏ dấu v, xem `HELP-G11-CHIX-MOTION-TR01`.

</details>

## 3. D2 — Worked example độc lập — `EX-G11-B33-MOTION-TR01`

**Tình huống khác bài D4:** Một vật đi dọc trục số với `s(t)=−t³+6t²+4t` (m), `0≤t≤3` (s). Tìm vận tốc lớn nhất và quãng đường vật đi từ lúc bắt đầu đến thời điểm vận tốc lớn nhất.

1. **Chọn đại lượng cần tối ưu:** Đề hỏi **vận tốc**, không phải tọa độ hay tốc độ; vì vậy lấy **`v(t)=s'(t)=−3t²+12t+4`** m/s.
2. **Tìm max có chứng minh:** `v(t)=16−3(t−2)²` nên `v(t)≤16`, dấu bằng khi **t=2 s**, nằm trong `[0,3]`. Vậy vận tốc lớn nhất là **16 m/s**. Việc viết `a(t)=12−6t` và a(2)=0 có thể giúp tìm **ứng viên**, nhưng cần bước chứng minh này.
3. **Kiểm đổi chiều trên [0,2]:** `v(t)=16−3(t−2)²≥16−12=4>0` với `0≤t≤2`, do đó vật chỉ đi theo chiều dương, không quay đầu trước t=2.
4. **Tính quãng đường đúng nghĩa:** `s(0)=0`, `s(2)=−8+24+8=24 m`, quãng đường là **24 m**. Nếu v đã đổi dấu thì không thể dùng một hiệu tọa độ duy nhất.
5. **Kiểm đơn vị:** t đo bằng giây, s(t) mét, v m/s, quãng đường mét. Cực đại tọa độ `s(t)` là câu hỏi **khác** cực đại vận tốc v(t).

## 4. D4 — Bài tự luận mới có tình huống đảo chiều — `THPT-G11-CHIX-W33-MOTION-TR01`

**ĐỀ CHO HỌC SINH:**

Một vật chuyển động thẳng trên trục Ox, tọa độ có dấu của nó theo thời gian là

\[
s(t)=-t^3+6t^2-9t\quad(\text{m}),\qquad 0\le t\le3\quad(\text{s}).
\]

(a) Tính vận tốc `v(t)` và gia tốc `a(t)`. Tìm thời điểm mà **vận tốc có dấu** đạt giá trị **lớn nhất** trên đoạn `[0,3]` và giá trị đó; giải thích vì sao đây là cực đại thật sự.  
(b) Trong khoảng từ **t=0** đến thời điểm tìm ở (a), xác định mọi thời điểm vật đổi chiều. Tính tọa độ ở các mốc cần thiết.  
(c) Tính **tổng quãng đường thực** và **độ dời có dấu** từ lúc t=0 đến thời điểm vận tốc lớn nhất. Giải thích vì sao hai đại lượng khác nhau.  
(d) Trên cùng đoạn thời gian từ 0 đến thời điểm vận tốc lớn nhất, **tốc độ lớn nhất** có bằng **vận tốc có dấu lớn nhất** không? Giải thích bằng dữ kiện.

**GỢI Ý THEO TỪNG TẦNG — chỉ mở sau khi tự thử, không phát tán trước Final Submit nếu dùng trong assessment:**
<details><summary>Gợi ý 1 · Nhận diện</summary>

Tính `s'` rồi viết v dưới dạng **bình phương hoàn chỉnh**; kiểm miền t. Tốc độ là `|v|`, khác v khi v âm.

</details>
<details><summary>Gợi ý 2 · Quãng đường</summary>

Giải `v(t)=0` trên `[0,t*]`. Lập bảng `t=0, t_đổi_chiều, t*`, ghi s(t), rồi cộng **trị tuyệt đối** các hiệu vị trí. Độ dời chỉ là `s(t*)−s(0)`.

</details>

**ĐÁP ÁN / LỜI GIẢI CHUẨN — chỉ mở sau hoàn thành:**

(a) `v(t)=s'(t)=−3t²+12t−9=3−3(t−2)²` (m/s); `a(t)=v'(t)=−6t+12` (m/s²). Vì `(t−2)²≥0`, **v(t)≤3 m/s** với dấu bằng tại **t*=2 s**, nằm trong `[0,3]`; đây là **cực đại toàn cục** của vận tốc có dấu trên miền, không chỉ một nghiệm a=0.  
(b) `v(t)=−3(t−1)(t−3)`. Trên `[0,2]`, nghiệm v=0 duy nhất nằm **bên trong** là **t=1 s**; v âm trên `[0,1)`, dương trên `(1,2]`, nên vật **đổi chiều tại t=1 s**. Các tọa độ: `s(0)=0 m`, `s(1)=−1+6−9=−4 m`, `s(2)=−8+24−18=−2 m`.  
(c) Quãng đường thực `|s(1)−s(0)|+|s(2)−s(1)|=|−4−0|+|−2−(−4)|=4+2=**6 m**`. Độ dời có dấu `s(2)−s(0)=−2−0=**−2 m**`. Khác nhau vì vật đi về chiều âm 4m rồi quay lại chiều dương 2m; chuyển động ngược chiều không làm quãng đường giảm.  
(d) Trên `[0,2]`, `v(t)` tăng từ `−9 m/s` tại t=0 đến `3 m/s` tại t=2, nên tốc độ `|v|` lớn nhất là **9 m/s tại t=0** (ở t=1 là 0, ở t=2 là 3). Vậy **max tốc độ 9 m/s khác max vận tốc có dấu 3 m/s**. Không được nhầm điều kiện “gia tốc bằng 0” là tốc độ cực đại.

**D5 · Bảng đọc hình định lượng (sử dụng như sơ đồ trước khi vẽ SVG):**

| t (s) | 0 | 1 | 2 |
|---|---:|---:|---:|
| s(t) (m) | 0 | −4 | −2 |
| v(t) (m/s) | −9 | 0 | 3 |
| Diễn giải | đi sang âm | đổi chiều | v đạt max có dấu |

Bảng này cung cấp mốc và đơn vị; **Hình D5 đã xuất PDF** `Temp_D5_FIGURES_PDF_R00_20261106.pdf` (trang 5, `FIG-G11-CHIX-MOTION-TR01`) trong ZIP biểu diễn s(t),v(t) có các mốc t=0,1,2,3; XML và PNG render đã QA. Hình **chưa tích hợp website**; reviewer kiểm dấu v, tỷ lệ và cách đọc đồ thị.

**RUBRIC 4 ĐIỂM — tự đối chiếu, không tự ghi Mastery:**

| Bằng chứng lập luận cần có | Điểm |
|---|---:|
| Tìm đúng `v=3−3(t−2)²`, `a=12−6t`; chứng minh **vmax=3 m/s tại t=2** trên miền | 1,0 |
| Giải v=0, phát hiện **đổi chiều tại t=1**, tính đúng s(0)=0, s(1)=−4, s(2)=−2 | 1,0 |
| Tính đúng **quãng đường 6 m** theo tổng đoạn, **độ dời −2 m**, giải thích phân biệt | 1,0 |
| Đúng **tốc độ lớn nhất 9 m/s tại t=0** và giải thích tốc độ ≠ vận tốc có dấu | 1,0 |

**Lỗi thường gặp:** cực đại tọa độ s thay vì cực đại v; nhận t=2 chỉ vì a=0 mà không kiểm max; cộng độ dời có dấu cho quãng đường thành −2 m; bỏ nghiệm v=0 t=1; lấy max|v|=3 bằng v_max; ghi vận tốc âm là tốc độ âm.  
**Đường khắc phục:** `HELP-G11-CHIX-MOTION-TR01` → B31 `THPT-G11-CHIX-B31-P09` (vận tốc khác tốc độ), B33 `THPT-G11-CHIX-B33-P04/P05` (gia tốc và dấu); D2 mới; Written cũ B31-W03/B33-W03 vẫn nguyên vẹn, không nhân bản.

### D6 — `HELP-G11-CHIX-MOTION-TR01` (5 bước khắc phục)
1. **Nhận diện:** nhầm v với |v|, s với tổng quãng đường, hay bỏ qua đoạn v âm?  
2. **Tự chẩn đoán:** tính nhanh v(0), v(1), v(2); có mốc nào v đổi dấu không? Kiểm s(0), s(1), s(2) bằng thay trực tiếp.  
3. **Trở về gốc:** v=s' có dấu, a=v'; tốc độ=|v| không âm; quãng đường là tổng độ dài di chuyển theo từng đoạn có chiều không đổi.  
4. **Tự sửa:** lập bảng dấu v trước khi tính quãng đường; ghi `L=Σ|Δs_i|`, `Δs=s(t*)−s(0)` riêng; chứng minh v_max bằng dạng đỉnh và so miền.  
5. **Luyện lại:** B31-P09 → B33-P04/P05 → EX-G11-B33-MOTION-TR01. Bài D4 đã xem lời giải **không** được tự dùng làm Readiness/Mastery.

## 5. Lưu ý review và ranh giới an toàn

- **Academic:** cần đánh giá đúng toán cực đại v có dấu vs max|v|, nghiệm v=0 trên `[0,2]`, tọa độ/quãng đường; độ sâu so với SGK 9.33/SBT 9.16 và 9 Written hiện có.
- **PED:** từ bản chất đến phương pháp, Tự thử trước khi mở đáp án, D6 đủ năm bước, rubric 4 điểm; kiểm vai trò câu mới khác D4 B31-W03/B33-W03 đã PASS, khác excerpt trường.
- **D5:** Có bảng định lượng **và phụ lục hình PDF** đính kèm; reviewer phải kiểm hình PDF/tính đúng toán và chỉ cấp Q07 khi đạt, không tự coi QA ảnh là PED PASS.
- **Q16:** đây là `PUBLIC_WRITTEN_SELF_CHECK`, không phải câu RD1; khi hiển thị ở vùng có Final Submit, đáp án/hint/rubric không lộ trước submit; nếu người học đã xem gợi ý/lời giải, không được đánh giá độc lập bằng cùng câu. Không có code website/chấm/DB trong pack.
- **Expected:** **3 item IDs** gồm 1 First Try, 1 D2, **1 D4 mới**, 1 HELP resource; **new Academic/PED verdict PENDING**, không đóng `CONTENT_READY` hoặc deploy.


---

**ĐÍNH CHÍNH ĐÓNG GÓI NOTEBOOKLM (06/11/2026):** Không đưa SVG vào nguồn NotebookLM. Năm hình D5 nằm trong `Temp_D5_FIGURES_PDF_R00_20261106.pdf` (5 trang). Bản R00 giữ nguyên đề, đáp án, lời giải, rubric và item_id; thay đổi chỉ liên quan cách tham chiếu hình cho reviewer. Kiểm tra SVG cho website thuộc nhánh RELEASE, không phải thao tác tải nguồn NotebookLM.
