# Temp — Toán 10 Chương VII: 2 bài tự luận mô hình hóa elip và hypebol — R00 (để NotebookLM review)

**PACKET_ID:** `SLM-THPT-TRANSFER-WRITTEN-20261106-R00`  
**BATCH_ID:** `G10-SGK-CHVII-TRANSFER-R00`  
**STATUS:** `AUTHORING_NEW_CANDIDATE / DELTA_C_ACADEMIC_MATERIAL / NOTEBOOKLM_REVIEW_PENDING`  
**STANDARD:** `SLM-THPT-QUALITY-ONE`, Q01–Q18, dùng phiên bản hiệu lực theo GitHub.  
**LEARNING_PATH:** `SGK_CHAPTER` · **LESSON_ID:** `G10-SGK-B22` · **OUTCOMES:** `G10-B22-ELLIPSE_PARAMETERS`, `G10-B22-HYPERBOLA_PARAMETERS` và ngữ cảnh mô hình hóa `G10-B22-CONIC_MODEL` (secondary; cần reviewer xác nhận ánh xạ vì outcome gốc đang dạy ví dụ parabol).  
**ASSESSMENT_MODE:** `CLIENT_SELF_CHECK_NO_MASTERY`; đây là 2 bài `WRITTEN_TRANSFER` **công khai có đối chiếu sau tự làm**, không phải RD1/Readiness kín và không được dùng đã xem lời giải làm chứng cứ độc lập.  
**PRESERVE:** 238 câu D4 G10–G12 trước đây bất biến; các bài trong file là đề xuất item **mới**, chưa cộng vào ngân hàng và chưa review.  
**SOURCE_BLOB_OLD:** G10 ChVII R02 `prototypes/thpt/content-drafts/Temp_G10_SGK_CHVII_FULL_R02_SOURCE_WITH_CANONICAL_REFERENCES_20261105.md` Git blob `c5c222af88b0e932f9b60df059d8ffd4da5f0f26` · D3 bank 32 canonical Git blob `2b191d7abba7a4f5bd79d4c122673cd53a45495b` · 4 Written ChVII Git blob `ebc70018a168998c7dd43b34c3e195a2b1e15ed7`.  
**S1 original PDF:** SGK Toán 10 KNTT Tập Hai SHA256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`, **bài 7.24 trang in 56 ↔ PDF trang 57** (tín hiệu và hypebol), giải thích LORAN trang in 56–57. SBT cùng tập SHA256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7`, **bài 7.35 trang in 46 ↔ PDF 47** (hầm nửa elip) và 7.61 trang in 50 ↔ PDF 51 (elip ứng dụng). Cả hai đã kiểm ảnh PDF đúng trang và SHA256 raw trên bản owner.  
**ORIGINALITY:** Đề và số liệu bên dưới tự biên soạn, không chép lại ví dụ/đáp án SGK 7.24/SBT 7.35 hoặc đề giáo viên.

## 1. REGISTER — 6 canonical candidate IDs, 2 D4 mới

| ITEM_ID | role | PRIMARY_OUTCOME_ID | SECONDARY_OUTCOME_ID | placement | version |
|---|---|---|---|---|---|
| `THPT-G10-CHVII-TRY-ELLIPSE-TR01` | `SGK_PRE_CORE_FIRST_TRY`, unscored | `G10-B22-ELLIPSE_PARAMETERS` | `G10-B22-CONIC_MODEL` | G10/ChVII/B22 | 1 |
| `EX-G10-B22-ELLIPSE-TR01` | `SGK_D2_WORKED_EXAMPLE` | `G10-B22-ELLIPSE_PARAMETERS` | `G10-B22-CONIC_MODEL` | G10/ChVII/B22 | 1 |
| `THPT-G10-CHVII-W22-ELLIPSE-TR01` | `SGK_WRITTEN`, `TRANSFER` | `G10-B22-ELLIPSE_PARAMETERS` | `G10-B22-CONIC_MODEL` | G10/ChVII/B22 | 1 |
| `THPT-G10-CHVII-TRY-HYPERBOLA-TR01` | `SGK_PRE_CORE_FIRST_TRY`, unscored | `G10-B22-HYPERBOLA_PARAMETERS` | `G10-B22-CONIC_MODEL` | G10/ChVII/B22 | 1 |
| `EX-G10-B22-HYPERBOLA-TR01` | `SGK_D2_WORKED_EXAMPLE` | `G10-B22-HYPERBOLA_PARAMETERS` | `G10-B22-CONIC_MODEL` | G10/ChVII/B22 | 1 |
| `THPT-G10-CHVII-W22-HYPERBOLA-TR01` | `SGK_WRITTEN`, `TRANSFER` | `G10-B22-HYPERBOLA_PARAMETERS` | `G10-B22-CONIC_MODEL` | G10/ChVII/B22 | 1 |

**Q15:** `W22-ELLIPSE-TR01` khác W22 cũ vì yêu cầu ứng dụng **nửa elip/mô hình hóa/độ hở an toàn**, không chỉ lập elip từ hai tiêu điểm; `W22-HYPERBOLA-TR01` là bài D4 hypebol ứng dụng vốn **chưa có** trong 4 D4 ChVII. Mỗi ID tồn tại một lần, không cấp thêm Anchor bản sao. `topic_placements=NONE_PENDING_TOPIC_REVIEW`.

## 2. Mô-đun A — Mặt cắt nửa elip và độ hở an toàn

**PED1 — Vì sao học?** Cùng chiều cao giữa đỉnh mái và nền **không đảm bảo** một thiết bị có bề rộng lớn đi lọt: phải xem độ cao thấp nhất của mái **trên toàn bề rộng thiết bị**.  
**PED2 — Tiền đề:** Elip chính tắc `(x²/a²)+(y²/b²)=1`, a,b>0 (không luôn bắt buộc a>b nếu ta chỉ dùng tên **bán trục theo Ox/Oy**); trục tọa độ và đoạn thẳng. Phân biệt **bán bề rộng** với bề rộng toàn phần.  
**PED3 — Bản chất:** Lấy tâm nền làm O, Ox dọc nền, Oy thẳng đứng. Mái **nửa trên** elip có `y≥0`, chiều rộng toàn phần `2a_x`, cao tại tâm `b_y`. Công thức tính trục theo hướng x/y là `x²/a_x²+y²/b_y²=1`; với chiều cao ở vị trí x, chỉ chọn **nghiệm y≥0**. Với thiết bị hình chữ nhật đặt giữa, cần kiểm độ cao tại **hai mép trên** chứ không chỉ tại tâm.  
**PED4 — Đọc hình:** Vẽ hai chân mái tại `(-a_x;0)` và `(a_x;0)`, đỉnh `(0;b_y)`; hình chữ nhật có mép x=±w/2, chiều cao h. Độ hở tối thiểu đo theo Oy từ đỉnh hai góc của vật lên mái. Đồ thị nửa elip thấp dần khi |x| tăng trong `[0,a_x]`.  
**PED5 — Chọn phương pháp/giới hạn:** Dựng **trục theo số đo vật lý trước**, dùng phương trình elip để tính mái tại mép; kiểm `|x|≤a_x`, `y≥0` và yêu cầu an toàn. Mô hình giả sử mặt cắt phẳng, đối xứng và vật đặt chính giữa; không suy tính an toàn 3D nếu dữ kiện chỉ có mặt cắt.  

### PED6 · Tự thử trước Core — `THPT-G10-CHVII-TRY-ELLIPSE-TR01`

Mái nửa elip rộng **12 m**, cao **4 m** tại tâm. Đặt O ở giữa nền, Ox dọc nền. (a) Viết phương trình elip đầy đủ và điều kiện miền mái. (b) Tại x=3 m, mái cao bao nhiêu? Tự làm rồi mở kết quả.

<details><summary>Tự mở kết quả sau khi đã thử</summary>

Bán trục ngang 6, bán trục đứng 4: `x²/36+y²/16=1`, **y≥0**, |x|≤6. Tại x=3, `y=4√(1−9/36)=2√3≈3,464 m`. Không lấy y âm hoặc dùng a=12. Nếu sai, xem `HELP-G10-CHVII-ELLIPSE-TR01`.

</details>

### D2 · Ví dụ giải có hướng dẫn — `EX-G10-B22-ELLIPSE-TR01`

**Tình huống khác câu D4:** Một mái che nửa elip có bề rộng **30 m**, cao tại tâm **10 m**. Người đứng cách chân mái bên phải **6 m về phía trong**. Tính độ cao mái ở vị trí đó.

1. **Vì sao chọn hệ trục này:** Đặt O ở giữa hai chân, Ox dọc mặt đất; khi đó bề rộng 30 m cho bán trục ngang `a_x=15`, cao 10 m cho bán trục đứng `b_y=10`.
2. **Dựng mô hình:** `x²/225+y²/100=1`, chỉ xét **nửa trên y≥0**. Chân phải x=15, cách chân vào trong 6m ⇒ **x=15−6=9**, **không phải x=6**.
3. **Tìm chiều cao:** `y=10√(1−81/225)=10√(144/225)=8 m`.
4. **Kiểm:** y=8 m nằm giữa 0 và 10m; càng đi từ chân vào giữa, chiều cao phải tăng. Nếu ra chiều cao lớn hơn 10 thì đã đọc sai trục/công thức.

**Tại sao là D2 mới:** Điểm khó nằm ở **dịch điều kiện thực tế “cách chân mái” thành hoành độ** và giới hạn nửa elip; cách dựng từ tiêu điểm trong `THPT-G10-B22-P01` không tự thay chuỗi này.

### D4 · Bài tự luận độc lập — `THPT-G10-CHVII-W22-ELLIPSE-TR01`

**ĐỀ CHO HỌC SINH:**

Một khu triển lãm có mặt cắt mái vòm dạng **nửa trên của elip** đối xứng qua đường thẳng đứng đi qua tâm nền. Mái rộng **20 m** giữa hai chân và cao **6 m** tại điểm giữa. Một khối trưng bày hình chữ nhật được đặt chính giữa, bề rộng **14 m**, cao **4 m**. Quy định yêu cầu **độ hở thẳng đứng ít nhất 0,8 m tại mọi điểm trên đỉnh khối** (bỏ qua độ dày mái và tính tới mặt cắt phẳng). Đặt O ở tâm nền, Ox dọc nền (m), Oy thẳng đứng.

(a) Lập phương trình elip và ghi rõ phần nào là mái thực.  
(b) Tính **độ cao mái nhỏ nhất** ngay phía trên khối rộng 14 m và khoảng hở nhỏ nhất giữa mái với đỉnh khối.  
(c) Khối có đạt yêu cầu **0,8 m** không? Nếu không, với **chiều cao giữ nguyên 4 m và đặt chính giữa**, tìm **bề rộng tối đa** để đạt yêu cầu (làm tròn tới 0,1 m nếu cần).  
(d) Giải thích vì sao không thể kiểm độ hở chỉ tại tâm x=0.

**GỢI Ý CÓ KIỂM SOÁT (chỉ mở sau tự làm):**
<details><summary>Gợi ý từng bước</summary>

Bán trục ngang 10, đứng 6. Khối rộng 14 nên hai mép x=±7. Trên mái y≥0, chiều cao giảm theo |x|. Để độ hở ≥0,8m với khối cao 4m, cần `y_mái≥4,8 m` trên toàn bề rộng.

</details>

**LỜI GIẢI CHUẨN — chỉ hiển thị sau khi học sinh hoàn thành:**

(a) Bán trục ngang 10 m, dọc 6 m. Phương trình elip **`x²/100+y²/36=1`**, chỉ lấy **`y≥0`** và `|x|≤10` cho mái.  
(b) Khối đặt giữa có x chạy từ −7 đến 7; mái cao nhất ở x=0 và thấp nhất trên phạm vi khối tại **x=±7**: `y(7)=6√(1−49/100)=3√51/5≈4,285 m`. Độ hở nhỏ nhất **`3√51/5−4≈0,285 m`**. Vì 0,285>0 nên khối **không va mái** trong mô hình, nhưng độ hở **chưa đạt 0,8m**.  
(c) Yêu cầu `y_mái≥4+0,8=4,8 m` tại mép x=±w/2. Từ `4,8²/36+(w/2)²/100≤1` suy `0,64+(w²/4)/100≤1` ⇒ `w²≤144` ⇒ **`0<w≤12 m`**. Bề rộng tối đa **12 m** (mô hình còn đủ chỗ).  
(d) Tại tâm y(0)=6m, độ hở 2m, nhưng càng ra hai mép mái càng thấp; đánh giá ở x=0 sẽ **bỏ sót chỗ nguy hiểm nhất**. Bằng lập luận đơn điệu của hàm `y(x)=6√(1−x²/100)` theo |x| trong [0,10], hai mép khối là vị trí quyết định.

**RUBRIC 4 ĐIỂM — tự đối chiếu, không ghi Mastery:**

| Bằng chứng suy luận | Điểm |
|---|---:|
| Dựng đúng `x²/100+y²/36=1`, miền **nửa trên** và tọa độ chân mái | 1,0 |
| Chọn đúng hai mép x=±7, tính mái `3√51/5` và độ hở khoảng `0,285 m` | 1,0 |
| Phân biệt **không va chạm** với **không đạt độ hở 0,8m**; giải đúng bề rộng tối đa `12 m` | 1,0 |
| Giải thích vì sao phải xét độ cao **tại mép khối** chứ không chỉ tại tâm | 1,0 |

**Lỗi điển hình:** dùng a=20 thay vì bán trục10; dùng x=14 thay vì x=7; chọn nghiệm y âm; thấy không va chạm nên đáp “đạt chuẩn”; dùng y(0)=6 cho toàn bề rộng.  
**Khắc phục:** `HELP-G10-CHVII-ELLIPSE-TR01` → B22 `THPT-G10-B22-P01` (dựng phương trình), `THPT-G10-B22-P05` (thế vị trí vào elip), D2 mới.

#### D6 — `HELP-G10-CHVII-ELLIPSE-TR01`
1. **Nhận diện:** sai bán trục, sai x mép, quên nửa elip, hay quên yêu cầu an toàn?  
2. **Chẩn đoán:** đánh dấu −10, −7, 0, 7, 10 trên Ox; khoanh hai góc trên khối và khoảng hở thẳng đứng cần kiểm.  
3. **Lấp nền:** elip chính tắc theo **bán trục ngang/dọc**, hình đối xứng; điểm trên mái thỏa `y≥0`.  
4. **Tự sửa:** thay x=7 vào phương trình; so `y(7)−4` với **0,8**, sau đó giải ngược điều kiện độ hở theo w.  
5. **Luyện đúng nguồn:** B22-P01 → B22-P05 → D2 mới; bài D4 đã xem lời giải không được tính làm kiểm tra độc lập.

## 3. Mô-đun B — Hypebol từ chênh lệch thời gian truyền tín hiệu

**PED1 — Vì sao học?** Hai trạm đồng phát cùng tín hiệu, tín hiệu đến người thu khác thời điểm vì **khoảng cách khác nhau**. Chênh lệch thời gian buộc người thu nằm trên một **quỹ tích hypebol**, không xác định duy nhất vị trí.  
**PED2 — Tiền đề:** `quãng đường = vận tốc × thời gian` với cùng đơn vị; tọa độ hai trạm; định nghĩa hypebol bằng **giá trị tuyệt đối hiệu hai khoảng cách** bằng 2a; `c²=a²+b²`, `2c=AB`.  
**PED3 — Bản chất trước công thức:** Với trạm A và B cùng truyền với tốc độ v tại cùng thời điểm, nếu tín hiệu B đến trước A một khoảng Δt>0 thì **`PA−PB=vΔt>0`**. Mỗi điểm trên nhánh phía B **gần B hơn**; việc chọn nhánh không được suy từ dấu “−” trong phương trình chính tắc (phương trình chứa cả hai nhánh).  
**PED4 — Cách đọc hình:** O trung điểm AB; đặt A bên trái x<0, B bên phải x>0. Hai đỉnh `(±a,0)` nằm trong hai tiêu điểm `(±c,0)` vì `0<a<c`. Nhánh phải là phía gần B; không nối hai nhánh thành oval.  
**PED5 — Chọn cách/giới hạn:** Dùng thời gian→hiệu quãng đường **trước** khi lập hypebol; phải kiểm **`0<vΔt<AB`** để hypebol không suy biến và có vị trí phù hợp. Một cặp trạm chỉ cho **một nhánh quỹ tích**, không xác định duy nhất điểm nhận; cần dữ liệu thêm để định vị.  

### PED6 · Tự thử trước Core — `THPT-G10-CHVII-TRY-HYPERBOLA-TR01`

Hai trạm cách nhau 60 km, phát tín hiệu đồng thời; sóng truyền 100.000 km/s. Chênh thời gian tới máy thu là 0,0002 s. Tính `2a`, `c`, `b²` cho hypebol tương ứng và kiểm điều kiện có nghiệm hình học, rồi mở đối chiếu.

<details><summary>Tự mở kết quả sau khi đã thử</summary>

Hiệu quãng đường `vΔt=100000·0,0002=20 km`, nên `2a=20`, `a=10 km`, `2c=60`, `c=30 km`, `b²=c²−a²=900−100=800 km²`. Vì `0<20<60`, dữ kiện hình học phù hợp hypebol. **Chưa đủ thông tin trạm nào nhận trước** nên chưa thể chọn nhánh. Nếu quên điều kiện này, xem `HELP-G10-CHVII-HYPERBOLA-TR01`.

</details>

### D2 · Ví dụ mẫu — `EX-G10-B22-HYPERBOLA-TR01`

**Khác số với bài SGK/đề D4:** Trạm A ở `(-40;0)` km, trạm B ở `(40;0)` km, đồng phát tín hiệu tốc độ **100.000 km/s**. Máy thu P nhận từ **A sớm hơn từ B** 0,0004 s. Xác định phương trình quỹ tích và nhánh.

1. **Đặt nguồn c:** AB=80km ⇒ c=40km; kiểm đơn vị. Chênh quãng đường `vΔt=100000·0,0004=40 km` ⇒ `2a=40km`, a=20km.
2. **Kiểm hợp lệ:** 0<40<80, nên tồn tại hypebol thật. `b²=c²−a²=1600−400=1200` km².
3. **Phương trình toàn hypebol:** **`x²/400−y²/1200=1`**, gồm hai nhánh. Vì **A đến trước**, P gần A hơn ⇒ P phải ở **nhánh trái, x≤−20**.
4. **Giới hạn:** Không thể suy một tọa độ P chính xác từ một chênh thời gian; còn vô số điểm trên nhánh này. Hai trạm phải **đồng bộ thời điểm phát** để suy hiệu khoảng cách chỉ từ hiệu thời gian nhận.

### D4 · Bài tự luận độc lập — `THPT-G10-CHVII-W22-HYPERBOLA-TR01`

**ĐỀ CHO HỌC SINH:**

Trong mô hình định vị phẳng, hai trạm phát **đồng thời** cùng một tín hiệu với tốc độ không đổi **200.000 km/s**. Trạm `A(-50;0)` km và `B(50;0)` km; máy thu tại P nhận tín hiệu **từ B sớm hơn từ A** một khoảng **0,0003 s**. Các tọa độ tính bằng km, bỏ qua sai số và các ảnh hưởng môi trường.

(a) Lập hệ thức giữa `PA`, `PB` và thời gian trễ; giải thích **dấu** của hiệu khoảng cách.  
(b) Lập phương trình chính tắc của **toàn bộ hypebol** gồm hai nhánh tương ứng với giá trị tuyệt đối hiệu khoảng cách.  
(c) Nêu **nhánh chính xác** của quỹ tích P và giải thích vì sao một cặp trạm chưa xác định được một **vị trí duy nhất**.  
(d) Nếu hệ thống báo chênh thời gian **0,00055 s** ở lần đo khác, với cùng hai trạm và tốc độ truyền, dữ liệu này có khả thi không? Chứng minh bằng giới hạn khoảng cách.

**GỢI Ý — chỉ mở sau khi tự thử:**
<details><summary>Gợi ý phương pháp</summary>

Khoảng cách hai trạm là `2c=100 km`. Giá trị tuyệt đối `|PA−PB|=vΔt=2a`. Nếu B đến trước thì **PB<PA**, do đó P gần B; trạm B nằm về phía x>0. Kiểm `|PA−PB|≤AB` trước khi tin một phép đo.

</details>

**LỜI GIẢI CHUẨN — sau khi tự làm xong:**

(a) Tín hiệu đến từ B sớm hơn ⇒ `PB<PA`, nên **`PA−PB=vΔt=200000·0,0003=60 km`**, không phải `PB−PA=+60`.  
(b) A,B là hai tiêu điểm `F₁,F₂`, `c=50`. `2a=60` ⇒ `a=30`, `a²=900`; `b²=c²−a²=2500−900=1600`. Toàn hypebol **`x²/900−y²/1600=1`**. Điều kiện `0<60<100` thỏa.  
(c) Vì **P gần B**, P nằm trên **nhánh phải `x≥30`**. Phương trình toàn hypebol có cả nhánh trái, nên phải bổ sung điều kiện chọn nhánh. Một độ trễ chỉ cho một quỹ tích 1 chiều, không xác định duy nhất hai tọa độ P.  
(d) Phép đo mới đòi `|PA−PB|=200000·0,00055=110 km`, nhưng bất đẳng thức tam giác cho **`|PA−PB|≤AB=100 km`**. Vậy **không có P** phù hợp; không được cố dùng `a=55>c=50` để viết hypebol thực.

**RUBRIC 4 ĐIỂM — chỉ tự đối chiếu:**

| Bằng chứng | Điểm |
|---|---:|
| Hiệu khoảng cách **có dấu đúng** `PA−PB=60 km`, hiểu quan hệ thời gian–quãng đường | 1,0 |
| Kiểm `a<c`, tính `a=30`, `b²=1600`, lập đúng `x²/900−y²/1600=1` | 1,0 |
| Chọn nhánh phải `x≥30`, giải thích vì sao một cặp trạm chưa xác định duy nhất P | 1,0 |
| Chứng minh phép đo 0,00055 s **bất khả thi** bằng `110>100` và bất đẳng thức tam giác | 1,0 |

**Lỗi điển hình:** quên đổi mili/micro giây nếu đơn vị đề thay đổi; nhầm `2a` với `a`; dùng `b²=a²−c²` như elip; chọn cả hai nhánh; đổi “B đến trước” thành “xa B hơn”; nhận phép đo vô lý và ra b² âm.  
**Khắc phục:** `HELP-G10-CHVII-HYPERBOLA-TR01` → B22 `THPT-G10-B22-C02/P02` → D2 mới. Không sử dụng làm đề chấm chính thức trước khi cổng RD1 độc lập được duyệt.

#### D6 — `HELP-G10-CHVII-HYPERBOLA-TR01`
1. **Nhận diện:** nhầm c với a, quên vΔt, sai nhánh hay cố lập hypebol từ chênh quãng đường quá lớn?  
2. **Chẩn đoán:** vẽ A trái/B phải; chọn điểm P bên B, kiểm ai gần hơn, viết `PA−PB` với dấu dương.  
3. **Lấp nền:** ôn định nghĩa giá trị tuyệt đối hiệu khoảng cách bằng `2a`, trục thực và quan hệ hypebol **`c²=a²+b²`**; nhắc bất đẳng thức tam giác `|PA−PB|≤AB`.  
4. **Tự sửa:** ghi bảng `2c=AB`, `2a=vΔt`, `b²=c²−a²`, `0<2a<2c`; sau đó mới dùng thông tin trạm đến trước để chọn nhánh.  
5. **Luyện đúng nguồn:** B22-C02/P02 → First Try mới nếu chưa mở đáp án → D2 mới; đã xem đáp án D4 thì không tái dùng D4 cho RD1.

## 4. D5, vị trí hiển thị, câu hỏi reviewer

- **Figure candidate `FIG-G10-CHVII-ELLIPSE-TR01`:** sơ đồ nửa elip, tâm O; chân tại x=±10, đỉnh y=6, góc của khối đặt tại ±7/y=4, độ hở dọc Oy tại x=±7. **Tệp hình D5 dùng cho review:** `Temp_D5_FIGURES_PDF_R00_20261106.pdf` (trang 3, `FIG-G10-CHVII-ELLIPSE-TR01`) trong gói; người phản biện kiểm hình D5 trên PDF, không dùng SVG làm nguồn NotebookLM. Chưa tích hợp website; reviewer kiểm tỉ lệ, miền và độ hở.
- **Figure candidate `FIG-G10-CHVII-HYPERBOLA-TR01`:** A(-50,0), B(50,0), hai nhánh qua ±30, nhánh đúng gần B tô nhấn, nêu `PA−PB=60`; hình phục vụ giải thích chứ không là minh chứng độc lập. **Tệp hình D5 dùng cho review:** `Temp_D5_FIGURES_PDF_R00_20261106.pdf` (trang 4, `FIG-G10-CHVII-HYPERBOLA-TR01`) trong gói; người phản biện kiểm hình D5 trên PDF, không dùng SVG làm nguồn NotebookLM. Chưa tích hợp website; reviewer kiểm hai tiêu điểm, đỉnh, nhánh và giới hạn quỹ tích.
- **Q16:** Khi đặt trên website, chỉ đề tự luận hiện trước khi học sinh hoàn thành; gợi ý/đúng–sai/đáp án/rubric **không** xuất hiện trước Final Submit trong vùng đánh giá; với public self-check, không tạo Mastery. Đây là bản nguồn học liệu, **chưa có runtime** để tuyên bố QA giao diện.
- **Reviewer xác minh riêng:** elip `y(7)=3√51/5≈4,285`, độ hở ≈0,285, `w_max=12 m`; hypebol `2a=60`, `a=30`, `b²=1600`, nhánh B/x≥30, phép đo 110km vô lý; đo tính độc lập so với bài SGK/SBT và W22 cũ, D1–D6/PED1–PED6/Q15–Q18, mapping secondary `CONIC_MODEL` và figure pending.
- **Expected:** 2 D4 Written candidate + 2 D2 + 2 First Try = **6 unique item IDs**, **2 HELP resources**. `ACADEMIC_VERDICT=PENDING`, `PED_VERDICT=PENDING`, không phát hành, không thay câu cũ hoặc thêm Anchor trùng.


---

**ĐÍNH CHÍNH ĐÓNG GÓI NOTEBOOKLM (06/11/2026):** Không đưa SVG vào nguồn NotebookLM. Năm hình D5 nằm trong `Temp_D5_FIGURES_PDF_R00_20261106.pdf` (5 trang). Bản R00 giữ nguyên đề, đáp án, lời giải, rubric và item_id; thay đổi chỉ liên quan cách tham chiếu hình cho reviewer. Kiểm tra SVG cho website thuộc nhánh RELEASE, không phải thao tác tải nguồn NotebookLM.
