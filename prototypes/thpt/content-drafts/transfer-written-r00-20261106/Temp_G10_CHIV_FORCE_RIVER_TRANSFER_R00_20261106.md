# Temp — Toán 10 Chương IV: 2 bài tự luận chuyển giao lực và dòng nước — R00 (để NotebookLM review)

**PACKET_ID:** `SLM-THPT-TRANSFER-WRITTEN-20261106-R00`  
**BATCH_ID:** `G10-SGK-CHIV-TRANSFER-R00`  
**STATUS:** `AUTHORING_NEW_CANDIDATE / DELTA_C_ACADEMIC_MATERIAL / NOTEBOOKLM_REVIEW_PENDING`  
**STANDARD:** `SLM-THPT-QUALITY-ONE`, Q01–Q18; kiểm phiên bản hiệu lực tại GitHub khi review; **không tạo chuẩn riêng**.  
**LEARNING_PATH:** `SGK_CHAPTER` · **LESSON_IDS:** `G10-SGK-B08`, `G10-SGK-B10`, `G10-SGK-B11`.  
**ASSESSMENT:** `PUBLIC_FORMATIVE + WRITTEN_SELF_CHECK`; `CLIENT_SELF_CHECK_NO_MASTERY`; không thuộc RD1, không cộng `SGK_CHAPTER_READINESS`, không chấm tự động.  
**PRESERVE:** 238 Written hiện hữu (G10 31 + G11 83 + G12 124) **bất biến**. Không sửa hoặc nhân bản câu/đáp án/rubric đã duyệt.  
**GITHUB_BASE_SOURCE (immutable):** `prototypes/thpt/content-drafts/Temp_G10_SGK_CHIV_FULL_R03_CONSOLIDATED_SOURCE_20261105.md` · Git blob `96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9`.  
**S1 direct primary:** SGK Toán 10 KNTT Tập Một, SHA256 `3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2`, trang **in 52–54 ↔ PDF 53–55** (B08, hợp lực, vận tốc trên sông, bài 4.9–4.10); SBT Tập Một, SHA256 `2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1`, trang **in 50–51 ↔ PDF 51–52** (ba lực cân bằng). Phần nào của SBT 4.12 bị lặp điều kiện `|F_1|=|F_1|` không được sử dụng làm dữ kiện.  
**ORIGINALITY:** Số liệu và tình huống dưới đây tự biên soạn, không phải bản sao đề SGK/SBT hoặc câu luyện của trường. Bài tập là **candidate mới**, chưa có reviewer PASS, không đưa lên website.  

## 1. REGISTER — đúng 6 ID mới trong batch này

| ITEM_ID | ROLE | PRIMARY_OUTCOME_ID | SECONDARY_OUTCOME_ID | Placement | content_version |
|---|---|---|---|---|---|
| `THPT-G10-CHIV-TRY-FORCE-TR01` | `SGK_PRE_CORE_FIRST_TRY`, unscored | `G10-B08-PARALLELOGRAM` | `G10-B11-GEOMETRIC_DOT` | G10/ChIV/B11, liên bài B08+B11 | 1 |
| `EX-G10-B08-FORCE-TR01` | `SGK_D2_WORKED_EXAMPLE` | `G10-B08-PARALLELOGRAM` | `G10-B11-GEOMETRIC_DOT` | G10/ChIV/B11, liên bài B08+B11 | 1 |
| `THPT-G10-CHIV-W08-FORCE-TR01` | `SGK_WRITTEN`, `TRANSFER` | `G10-B08-PARALLELOGRAM` | `G10-B11-GEOMETRIC_DOT` | G10/ChIV/B11, liên bài B08+B11 | 1 |
| `THPT-G10-CHIV-TRY-RIVER-TR01` | `SGK_PRE_CORE_FIRST_TRY`, unscored | `G10-B10-OPERATIONS` | `G10-B08-OPPOSITE-SUBTRACTION` | G10/ChIV/B10 | 1 |
| `EX-G10-B10-RIVER-TR01` | `SGK_D2_WORKED_EXAMPLE` | `G10-B10-OPERATIONS` | `G10-B08-OPPOSITE-SUBTRACTION` | G10/ChIV/B10 | 1 |
| `THPT-G10-CHIV-W10-RIVER-TR01` | `SGK_WRITTEN`, `TRANSFER` | `G10-B10-OPERATIONS` | `G10-B08-OPPOSITE-SUBTRACTION` | G10/ChIV/B10 | 1 |

Tất cả ID là **câu/đối tượng học liệu khác nhau**; không lấy D2/First Try đã xem làm kết quả kiểm tra độc lập. `topic_placements=NONE_PENDING_TOPIC_REVIEW`, không gán Topic PASS. Hai D4 là **2 câu mới đề xuất** (chưa cộng vào 238).

## 2. Mô-đun A — Hợp lực góc không vuông và lực cân bằng

**PLACEMENT / SEQUENCE:** Tổ chức mô-đun hợp lực góc không vuông **sau Bài 11** (học sinh đã biết tích vô hướng), dù outcome gốc là quy tắc hình bình hành của Bài 8; không đưa nó thành điều kiện học Core B08 trước khi B11 được học.  

**PED1 — Vì sao học?** Một vòng móc được kéo bởi hai dây theo hai hướng; muốn giữ vòng móc đứng yên, lực thứ ba phải triệt tiêu **tổng vectơ** của hai lực, không phải triệt tiêu tổng hai con số độ lớn.  
**PED2 — Tiền đề:** Quy tắc hình bình hành B08, định nghĩa lực đối của một vectơ; góc giữa hai vectơ khác 0 và tích vô hướng B11. Cần phân biệt “hai lực bằng độ lớn” với “hai lực bằng vectơ”.  
**PED3 — Bản chất trước công thức:** Dời hai lực cùng gốc, đường chéo hình bình hành là hợp lực `R=F₁+F₂`. Lực giữ cân bằng `F₃=−R`. Vì `|u+v|²=|u|²+|v|²+2u·v`, ta có `|R|²=|F₁|²+|F₂|²+2|F₁||F₂|cosθ`; Pythagoras chỉ là trường hợp **θ=90°**.  
**PED4 — Đọc hình:** Vẽ O là điểm đặt, Ox trùng hướng F₁, F₂ quay ngược chiều kim đồng hồ một góc θ. R là đường chéo, F₃ có **cùng độ dài nhưng chiều đối ngược R**. Trên hình, góc θ phải là góc **giữa F₁ và F₂**, không phải giữa F₂ và F₃.  
**PED5 — Vì sao chọn cách:** Dùng công thức tổng vectơ khi **biết độ lớn và góc**; dùng tọa độ nếu cần **hướng và các thành phần**. Kiểm `0≤|R|≤|F₁|+|F₂|`; không kết luận lực thứ ba cùng chiều với hợp lực.  

### PED6 · Tự thử trước Core — `THPT-G10-CHIV-TRY-FORCE-TR01`

Hai lực bằng nhau, mỗi lực 4 N, tạo góc 60°. Muốn vật cân bằng, lực thứ ba phải có **độ lớn và chiều** như thế nào? Hãy tự dự đoán trước khi mở kết quả.

<details><summary>Tự mở đáp án sau khi đã tự thử</summary>

`|F₁+F₂|=√(4²+4²+2·4·4·cos60°)=4√3 N`. Vì tổng ba lực bằng vectơ 0, `F₃=−(F₁+F₂)` nên lực thứ ba có độ lớn `4√3 N` và **ngược chiều hợp lực**. Nếu đáp `8 N`, xem `HELP-G10-CHIV-FORCE-TR01`.

</details>

### D2 · Ví dụ hướng dẫn có suy luận — `EX-G10-B08-FORCE-TR01`

**Tình huống khác câu tự luận:** Hai dây đồng thời kéo vòng móc với lực 6 N và 6 N, tạo góc 120°. Một dây thứ ba giữ vòng đứng yên. Hãy tìm độ lớn và chiều của lực thứ ba.

1. **Chọn mô hình:** Cân bằng nghĩa là `F₁+F₂+F₃=0`, vì thế **phải tìm hợp lực** hai dây trước khi tìm F₃.
2. **Chọn định lí:** Góc 120° không vuông, nên `|F₁+F₂|²=6²+6²+2·6·6·cos120°=72−36=36`; suy ra hợp lực có độ lớn **6 N**.
3. **Giải thích chiều:** `F₃=−(F₁+F₂)`, nghĩa là **6 N ngược chiều đường chéo hợp lực**; không phải ngược riêng một trong hai dây.
4. **Kiểm:** Hợp lực bằng 6 N nằm trong `[0,12]` N, phù hợp bất đẳng thức tam giác. Nếu dùng 6+6=12 N là nhầm độ lớn với tổng vectơ.

**D2 WHY/METHOD/LIMIT:** Không cộng thẳng độ lớn khi lực không cùng phương; dữ kiện hai độ lớn + góc cho **độ lớn**, còn yêu cầu xác định **hướng** cần đọc hướng vectơ hoặc bổ sung hệ trục. Số liệu được chọn để học sinh thấy lực thứ ba cũng có thể bằng độ lớn **một** lực mà không cùng phương lực đó.

### D4 · Bài tự luận độc lập mới — `THPT-G10-CHIV-W08-FORCE-TR01`

**ĐỀ CHO HỌC SINH (chỉ phần này hiển thị khi chưa tự hoàn thành):**

Tại một vòng móc O, lực `F₁` có độ lớn **8 N**, hướng dọc chiều dương trục Ox; lực `F₂` có độ lớn **15 N**, hợp với Ox một góc **120°** đo ngược chiều kim đồng hồ. Một lực thứ ba `F₃` được bố trí để vòng móc cân bằng. Chọn hệ trục Oxy có các trục vuông góc và cùng đơn vị N.

(a) Viết điều kiện cân bằng bằng **vectơ**, cho biết vì sao không được cộng `8+15` để có độ lớn hợp lực.  
(b) Tính chính xác độ lớn `|F₁+F₂|` và `|F₃|`.  
(c) Tìm tọa độ từng lực và mô tả **chiều** của F₃.  
(d) Một bạn viết “F₃ có độ lớn 23 N và cùng chiều F₁+F₂”. Hãy nêu **hai lỗi độc lập** của lời giải này.

**HINT (chỉ mở sau khi đã tự làm, không hiển thị trước Final Submit nếu item đặt trong đánh giá):**
<details><summary>Gợi ý từng bước</summary>

1. Góc giữa F₁ và F₂ là 120°, không phải 90°. 2. Dùng `cos120°=−1/2`. 3. `F₃=−(F₁+F₂)`; tọa độ F₂ từ cos và sin góc đã cho.

</details>

**ĐÁP ÁN VÀ LỜI GIẢI CHUẨN — Chỉ đối chiếu sau khi học sinh đã hoàn thành:**

(a) Điều kiện đúng `F₁+F₂+F₃=0`. Tổng độ lớn bằng độ lớn hợp lực chỉ khi hai lực cùng chiều; ở đây góc 120° nên phép cộng 8+15 không có cơ sở.  
(b) `|F₁+F₂|²=8²+15²+2·8·15·cos120°=64+225−120=169`. Do đó **`|F₃|=|F₁+F₂|=13 N`**.  
(c) `F₁=(8;0)`, `F₂=(15cos120°;15sin120°)=(-15/2;15√3/2)` N; hợp lực `R=(1/2;15√3/2)` N, nên **`F₃=(-1/2;-15√3/2)` N**, hướng ngược R. Đối chiếu độ dài `sqrt((1/2)²+(15√3/2)²)=sqrt(676/4)=13`.  
(d) Lỗi 1: xem độ lớn của tổng vectơ bằng tổng độ lớn trong khi góc 120°. Lỗi 2: cho lực giữ cân bằng **cùng chiều** hợp lực, khiến tổng lực khác 0; thực tế phải ngược chiều.

**RUBRIC 4 ĐIỂM (tự đối chiếu, không chấm Mastery):**

| Bằng chứng cần có | Điểm |
|---|---:|
| Lập đúng `F₁+F₂+F₃=0` và giải thích vì sao không được cộng thẳng độ lớn | 1,0 |
| Dùng đúng cos120°; tính đúng hợp lực và `|F₃|=13 N` | 1,0 |
| Tọa độ đúng F₁/F₂ và `F₃=(-1/2;-15√3/2)`; nêu đúng chiều | 1,0 |
| Chỉ ra **hai lỗi khác nhau** của đáp án 23 N cùng chiều, bằng lập luận vectơ | 1,0 |

**Lỗi điển hình:** thay `cos120°` bằng `cos60°`; áp Pythagoras ở góc 120°; ra đúng 13 N nhưng quên mô tả chiều; viết độ lớn F₃ là `−13 N` (độ lớn không âm).  
**Đường khắc phục:** `HELP-G10-CHIV-FORCE-TR01` → xem lại B08 `THPT-G10-B08-P06` (góc vuông chỉ là trường hợp riêng), B11 `THPT-G10-B11-P01` (tích vô hướng góc 60°), D2 mới `EX-G10-B08-FORCE-TR01`. Không dùng câu đã mở lời giải làm kiểm tra độc lập.

#### D6 — `HELP-G10-CHIV-FORCE-TR01`
1. **Nhận diện:** em đã cộng `8+15`, dùng Pythagoras ở góc 120°, hay lấy F₃ cùng chiều hợp lực?  
2. **Chẩn đoán:** vẽ lại hai vectơ xuất phát O và đánh dấu góc **120°**; thử hướng F₃ xem ba mũi tên có khép thành đường gấp khúc không.  
3. **Lấp nền:** B08 quy tắc hình bình hành và vectơ đối; B11 `u·v=|u||v|cosθ`.  
4. **Tự sửa:** tính `R²` trước, kiểm `|R|≤23`, rồi đặt `F₃=−R`; kiểm tổng thành phần Ox/Oy bằng 0.  
5. **Luyện lại đúng nguồn:** B08-P06 → B11-P01 → D2 mới; nếu đã xem đáp án D4, **không** tái dùng D4 làm chứng cứ RD1.

## 3. Mô-đun B — Ca nô, vận tốc tương đối và điều kiện cập bờ

**PED1 — Vì sao học?** Mũi thuyền đang hướng Bắc nhưng dòng nước kéo sang Đông: **hướng mũi thuyền không trùng quỹ đạo theo bờ**. Muốn cập đúng điểm đối diện, phải chủ động hướng thuyền ngược dòng.  
**PED2 — Tiền đề:** B08 cộng/trừ vectơ, B10 tọa độ `(x;y)` và độ dài vectơ; định nghĩa vận tốc là vectơ (m/s), phân biệt **vận tốc riêng so với nước** với **vận tốc theo bờ**.  
**PED3 — Bản chất:** Nếu chọn Ox về Đông, Oy về Bắc: `v_bờ=v_thuyền/nước+v_dòng`. Thời gian qua sông bằng **bề rộng chia thành phần Bắc dương** của `v_bờ` (không tự động chia cho độ lớn tốc độ riêng). Dịch chuyển ngang bằng `v_bờ,x·t`.  
**PED4 — Hướng dẫn hình:** Vẽ mũi tên dòng nước sang phải, mũi tên lái về phía bờ (có thể hơi chếch trái), và đường chéo vận tốc thực. Khoảng cách hai bờ đo dọc Oy; trôi dạt đo dọc Ox. Không coi đồ thị tốc độ–thời gian là sơ đồ hai bờ.  
**PED5 — Chọn phương pháp/giới hạn:** Để **không trôi**, giải `v_thuyền/nước,x=−v_dòng,x` rồi chọn thành phần Bắc dương từ độ lớn đã cho. Điều kiện **`|v_dòng|<|v_thuyền/nước|`** cần thiết để vẫn có thành phần Bắc dương (dòng bằng tốc độ riêng thì không vượt qua bờ). Giả định dòng đều, vận tốc riêng có độ lớn không đổi, hai bờ thẳng song song.  

### PED6 · Tự thử trước Core — `THPT-G10-CHIV-TRY-RIVER-TR01`

Sông rộng 60 m, nước chảy **3 m/s về Đông**; ca nô chạy **5 m/s so với nước**, lái thẳng về Bắc. Ca nô sẽ trôi bao nhiêu mét về Đông khi tới bờ bên kia? Hãy thử trước khi mở.

<details><summary>Tự mở đối chiếu kết quả</summary>

`v_bờ=(3;5)` m/s; thành phần qua sông 5 m/s, nên `t=60/5=12 s` và độ trôi Đông `3·12=36 m`. Độ lớn vận tốc thực `√34` m/s, **không phải** tốc độ Bắc 5 m/s. Nếu dùng `60/√34`, xem `HELP-G10-CHIV-RIVER-TR01`.

</details>

### D2 · Ví dụ hướng dẫn — `EX-G10-B10-RIVER-TR01`

Sông rộng 96 m, dòng chảy đều 3 m/s về Đông; thuyền chạy 5 m/s so với nước. So sánh (i) giữ mũi thuyền thẳng Bắc và (ii) chọn hướng để cập đúng điểm đối diện.

1. **Lập hệ:** Ox về Đông, Oy về Bắc. Vận tốc dòng `(3;0)` m/s. 
2. **Trường hợp (i):** vận tốc riêng `(0;5)` m/s; theo bờ `(3;5)` m/s. Thời gian `96/5=19,2 s`; trôi Đông `3·19,2=57,6 m`.
3. **Trường hợp (ii):** yêu cầu vận tốc thực không có thành phần Đông, tức vận tốc riêng `(-3;v_y)`; vì độ lớn là 5, `(-3)²+v_y²=25` ⇒ lấy **`v_y=+4` m/s** để qua bờ. Vận tốc thực `(0;4)`; qua sông hết `96/4=24 s`, không trôi ngang.
4. **So sánh:** đi đúng điểm đối diện tốn **nhiều thời gian hơn** do một phần tốc độ riêng dùng để khử dòng. Không lấy nghiệm `v_y=-4` vì nó hướng **ra xa bờ đích**.

**Tại sao không dùng định lí Pitago làm toàn bộ bài?** Pitago giúp tìm độ lớn/thành phần, nhưng không thay bước thiết lập quan hệ **vectơ vận tốc tương đối** và điều kiện “đúng điểm đối diện”.

### D4 · Bài tự luận độc lập mới — `THPT-G10-CHIV-W10-RIVER-TR01`

**ĐỀ CHO HỌC SINH:**

Hai bờ sông song song, cách nhau **150 m** theo hướng Bắc–Nam. Nước chảy đều **2,5 m/s về phía Đông**. Một ca nô có **tốc độ riêng không đổi 6,5 m/s so với nước**. Coi chuyển động là thẳng đều theo từng phương án. Chọn Ox hướng Đông, Oy hướng Bắc.

(a) Viết hệ thức liên hệ ba vectơ vận tốc; phân biệt “hướng mũi ca nô” với “đường đi theo bờ”.  
(b) Nếu lái thẳng Bắc, tính **thời gian qua sông** và **độ trôi sang Đông**.  
(c) Để cập đúng điểm đối diện không trôi, hãy tìm **vectơ vận tốc riêng** phù hợp và thời gian qua sông; giải thích vì sao chọn thành phần Bắc dương.  
(d) Nếu dòng chảy tăng lên **7 m/s** nhưng tốc độ riêng vẫn 6,5 m/s, ca nô có thể **vừa qua sông vừa cập đúng điểm đối diện** trong mô hình này không? Vì sao?

**HINT — chỉ mở sau khi tự thử:**
<details><summary>Gợi ý phương pháp</summary>

Lấy `v_dòng=(5/2;0)`. Khi giữ mũi Bắc, `v_riêng=(0;13/2)`; để không trôi phải có `v_riêng,x=−5/2` và `|v_riêng|=13/2`. Ở (d), xét giá trị lớn nhất có thể của thành phần chống dòng.

</details>

**ĐÁP ÁN VÀ LỜI GIẢI CHUẨN — mở sau khi hoàn thành:**

(a) `v_bờ=v_riêng+v_dòng`. Hướng mũi do `v_riêng` quyết định, đường đi trên bản đồ do `v_bờ` quyết định; chúng nói chung khác hướng.  
(b) `v_dòng=(5/2;0)`, `v_riêng=(0;13/2)` ⇒ `v_bờ=(5/2;13/2)` m/s. Thời gian **`t=150/(13/2)=300/13≈23,08 s`**. Độ trôi **`d_x=(5/2)(300/13)=750/13≈57,69 m` về Đông**. Không dùng `150/|v_bờ|`.  
(c) Để `v_bờ,x=0`, cần `v_riêng,x=−5/2`. Do `|v_riêng|=13/2`, thành phần Bắc dương bằng `sqrt((13/2)²−(5/2)²)=sqrt(144/4)=6`. Vậy **`v_riêng=(-5/2;6)` m/s**, `v_bờ=(0;6)` m/s; thời gian **`150/6=25 s`**; độ trôi bằng 0. Chọn `+6` vì cần sang bờ Bắc.  
(d) **Không thể.** Muốn không trôi phải có thành phần riêng hướng Tây **−7 m/s**, độ lớn ít nhất 7 m/s, lớn hơn tốc độ riêng 6,5 m/s. Ngay cả nếu bằng nhau thì thành phần Bắc bằng 0 và không thể tới bờ đích.

**RUBRIC 4 ĐIỂM — tự đối chiếu, không Mastery:**

| Bằng chứng | Điểm |
|---|---:|
| Đúng quan hệ ba vectơ và phân biệt hướng lái/quỹ đạo | 1,0 |
| Đúng `300/13 s`, trôi Đông `750/13 m`; nêu rõ dùng thành phần Bắc | 1,0 |
| Đúng `v_riêng=(-5/2;6)` m/s, t=25 s, giải thích chọn nghiệm Bắc dương | 1,0 |
| Bác bỏ điều kiện dòng 7 m/s bằng giới hạn thành phần vận tốc riêng, không chỉ suy bằng cảm tính | 1,0 |

**Lỗi điển hình:** coi mũi thuyền hướng Bắc là đường đi Bắc; dùng tổng tốc độ theo số học 2,5+6,5; dùng `150/√(2,5²+6,5²)` để tính thời gian; chọn thành phần Bắc −6; cho rằng điều kiện chống dòng 7 m/s vẫn khả thi.  
**Đường khắc phục:** `HELP-G10-CHIV-RIVER-TR01` → B08 vectơ đối, B10 `THPT-G10-B10-P01/P02`, D2 mới. Nếu xem hướng dẫn/đáp án thì lần làm lại không là `RD1` độc lập.

#### D6 — `HELP-G10-CHIV-RIVER-TR01`
1. **Nhận diện:** em đang dùng tốc độ tổng thay cho thành phần qua sông, hay quên cộng vectơ dòng nước?  
2. **Chẩn đoán:** vẽ 3 mũi tên từ cùng gốc; mũi tên nào chỉ đường đi thực khi đứng trên bờ?  
3. **Lấp nền:** quay B08 cộng/trừ, B10 tọa độ và định lí độ dài vectơ, giải nghĩa hai hệ quy chiếu “nước” và “bờ”.  
4. **Tự sửa:** viết `v_bờ,y>0`, áp `t=bề_rộng/v_bờ,y`, đặt `v_bờ,x=0` khi không trôi; kiểm điều kiện căn không âm và v_y dương.  
5. **Luyện lại:** B10-P01/P02 → Tự thử `THPT-G10-CHIV-TRY-RIVER-TR01` mới (đã xem đáp án thì không làm bằng chứng độc lập) → D2 mới.

## 4. D5, đánh giá độc lập và câu hỏi reviewer

- **D5 force:** `FIG-G10-CHIV-FORCE-TR01` — bản vẽ Oxy, `F₁` hướng Ox, `F₂` lệch 120°, `R` là đường chéo, `F₃` ngược R; cần kiểm tỉ lệ/nhãn đơn vị khi tích hợp. **Đã tạo asset thực:** `Temp_D5_FIGURES_PDF_R00_20261106.pdf` (trang 1, `FIG-G10-CHIV-FORCE-TR01`) trong ZIP, XML/SVG và render PNG đã QA; **không lấy ảnh minh họa làm lời giải**, lời giải tọa độ độc lập ở trên.
- **D5 river:** `FIG-G10-CHIV-RIVER-TR01` — hai bờ nằm ngang, Ox Đông/Oy Bắc, tam giác tổng vectơ vận tốc cho trường hợp (b) và (c); ghi rõ **mũi thuyền** vs **vận tốc theo bờ**. **Đã tạo SVG thực** `Temp_D5_FIGURES_PDF_R00_20261106.pdf` (trang 2, `FIG-G10-CHIV-RIVER-TR01`) trong ZIP, XML/SVG và PNG render QA PASS; reviewer đánh giá nhãn và quy ước hướng. **Tích hợp/QA giao diện trên website vẫn PENDING**, không suy AP1–AP5 PASS.
- **Q16:** Đề D4 chỉ hiển thị đề ban đầu; hint, đáp án, giải và rubric thuộc phần ẩn đến lúc học sinh tự làm xong; **không** tái dùng khi đã xem làm RD1; **không** chấm tự luận tự động và không ghi Mastery. Không có thay đổi trang web nào trong packet này.
- **Reviewer kiểm riêng:** (1) force: dấu cos120°, độ lớn **13 N**, chiều/tọa độ F₃; (2) river: phân biệt hệ quy chiếu, điều kiện triệt tiêu dòng, `300/13`, `750/13`, `25 s`, khả thi khi dòng 7 m/s; (3) mapping IDs, D1–D6/PED1–6; (4) độ khác biệt với nguyên nguồn SGK/SBT/238 canonical; (5) D5 figure candidate và quyền Final Submit. 
- **Expected:** 2 D4 Written mới + 2 D2 examples + 2 First Try = **6 public canonical candidate items**; 2 HELP resources. **Academic verdict/PED verdict:** `PENDING_NOTEBOOKLM` cho cả sáu ID. Nếu reviewer thấy một ID/tình huống chỉ là nhân bản, đề nghị `MINIMAL_DELTA`, **không tự xoá câu cũ**.


---

**ĐÍNH CHÍNH ĐÓNG GÓI NOTEBOOKLM (06/11/2026):** Không đưa SVG vào nguồn NotebookLM. Năm hình D5 nằm trong `Temp_D5_FIGURES_PDF_R00_20261106.pdf` (5 trang). Bản R00 giữ nguyên đề, đáp án, lời giải, rubric và item_id; thay đổi chỉ liên quan cách tham chiếu hình cho reviewer. Kiểm tra SVG cho website thuộc nhánh RELEASE, không phải thao tác tải nguồn NotebookLM.
