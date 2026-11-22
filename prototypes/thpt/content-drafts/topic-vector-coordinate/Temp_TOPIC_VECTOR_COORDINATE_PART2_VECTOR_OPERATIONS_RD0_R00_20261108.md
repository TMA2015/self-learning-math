# Chuyên đề 2 — Vectơ và phương pháp tọa độ (lớp 10–12)

## Phần 2/7: Cộng, trừ vectơ và nhân vectơ với một số

**Tình trạng:** `AUTHORING_RD0_DRAFT / NOT_NOTEBOOKLM_REVIEWED / NOT_CONTENT_READY / NO_RELEASE`  
**Chuẩn:** `SLM-THPT-QUALITY-ONE / 1.2.0` — Q01–Q18, D1–D6/PED1–PED6.  
**Hành trình:** `TOPIC` — 1 trong 7 phần của cùng một chuyên đề, **không** phải Chương IV SGK tái bản. Trong giao diện Chuyên đề chỉ có **Kiến thức / Luyện tập / Tự kiểm tra**; không lập Core thứ tư.  
**Quy tắc nguồn:** SGK/SBT KNTT S1 quyết định nội dung; 2 source canonical SGK đã PASS chỉ được **tham chiếu**, không nhân bản câu, key, lời giải hoặc rubric.  
**Kết quả biên soạn vòng này:** Hoàn thành bản thảo phần 2 gồm 10 outcome ánh xạ, D1/D2/D3/D4/D5/D6 và PED với 18 public item canonical tham chiếu (16 formative + 2 Written), 6 EX, 2 FIG, 4 HELP. Chưa có reviewer verdict riêng cho Chuyên đề hoặc QA giao diện.

---

## A. SOURCE_RECEIPT — kiểm trực tiếp trang in và chỉ số PDF

**PDF scan nguồn gốc, lấy từ thư mục Drive của chủ dự án `KNTT TOAN 10` (đã tự render và kiểm hình trang).**

| S1 | Nội dung | Trang in | PDF trang (đếm từ 1) | PDF index (đếm từ 0) |
| --- | --- | --- | --- | --- |
| SGK Toán 10 KNTT tập 1 | Bài 8 — Tổng và hiệu của hai vectơ | 51–54 | 52–55 | 51–54 |
| SGK Toán 10 KNTT tập 1 | Bài 9 — Tích của một vectơ với một số | 55–59 | 56–60 | 55–59 |
| SBT Toán 10 KNTT tập 1 | Bài 8 — Tổng và hiệu của hai vectơ | 48–50 | 49–51 | 48–50 |
| SBT Toán 10 KNTT tập 1 | Bài 9 — Tích của một vectơ với một số | 51–54 | 52–55 | 51–54 |

- **SGK PDF SHA256:** `3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2` (22,956,643 bytes).
- **SBT PDF SHA256:** `2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1` (20,734,072 bytes).
- **SGK canonical B08 source** (B07+B08, reviewer PASS chỉ trong SGK): `prototypes/thpt/content-drafts/THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01_SNAPSHOT.md`, blob `42b206e31421b33860a1bf697d2d04b7aba992cf`.
- **SGK canonical B09 source** (B09–B11, reviewer PASS chỉ trong SGK): `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md`, blob `a9f6fab820559a8da98a5a42cd9902dbf9891f34`.

**Đã trực tiếp đối chiếu:** SGK B08 có quy tắc tam giác, hình bình hành, vectơ đối/trừ, trung điểm, trọng tâm và bài toán lực/di chuyển; SGK B09 có định nghĩa tích với số, dấu hệ số, luật phân phối, các điều kiện cùng phương và ứng dụng trung tuyến. SBT có bài chứng minh tổng/hiệu nhiều chặng, hợp lực, trung điểm, trọng tâm và phép nhân số theo các trang in trên. **Chưa mở/đối chiếu S1 của Phần 3–7**, không suy rộng SOURCE_PASS toàn Chuyên đề.

## B. OUTCOME_MATRIX — 10 kết quả học tập của phần này

Các `OUTCOME_ID` dưới đây dùng chung từ SGK; chỉ đề xuất thêm **placement theo mạch học Topic**. ID tồn tại trên source gốc, nhưng việc engine đã hỗ trợ Topic placement cụ thể **chưa được kiểm**.

| Thứ tự | Outcome gốc | Học sinh cần làm được | Chứng cứ ở phần này |
| --- | --- | --- | --- |
| 1 | `G10-B08-TRIANGLE` | Hiểu vì sao ghép các độ dời theo đầu–đuôi và dùng quy tắc ba điểm | §C2, ví dụ E1, C01/P03 |
| 2 | `G10-B08-PARALLELOGRAM` | Nhận ra hai vectơ chung gốc và dựng hợp lực bằng đường chéo | §C3, E2, C02/P06 |
| 3 | `G10-B08-OPPOSITE-SUBTRACTION` | Phân biệt đối/ngược hướng và tìm hiệu thông qua cộng với vectơ đối | §C4, E2, P01/P02 |
| 4 | `G10-B08-MIDPOINT` | Vận dụng hệ thức trung điểm, giải thích thay vì thuộc công thức | §C5, E3, P04/W08 |
| 5 | `G10-B08-CENTROID` | Giải thích tổng ba vectơ từ trọng tâm bằng vectơ-không | §C5, E3, P05/W08 |
| 6 | `G10-B09-SCALAR_DEFINITION` | Xác định tích số thực với vectơ, các trường hợp k=0 hoặc vectơ-không | §C6, C02 |
| 7 | `G10-B09-LENGTH_DIRECTION` | Tính độ dài và biết chiều tích theo dấu k, không lấy độ dài âm | §C6, E4, C01/P01 |
| 8 | `G10-B09-DISTRIBUTION` | Dùng tính chất phân phối/kết hợp đúng vào biểu thức vectơ | §C7, P02/P06 |
| 9 | `G10-B09-COLLINEAR` | Giải thích điều kiện bội vô hướng của hai vectơ khác không/cùng phương | §C7, P05 |
| 10 | `G10-B09-MIDPOINT_CENTROID` | Diễn đạt vị trí M/G qua hệ số vectơ và kiểm chiều | §C8, E5/E6, P03/P04/W09 |

**Không gán `LESSON_ID` riêng giả tạo cho từng outcome**. Phần này là mạch chủ đề xuyên lớp, nhưng ở giai đoạn đầu xây nền đúng nội dung S1 lớp 10. Kết nối lên lớp 11–12 nằm ở phần 5–7, không mượn trước nội dung chưa dạy.

---

# C. KIẾN THỨC — dẫn dắt từ bản chất, không mở bằng bảng công thức

## 1. Vì sao cần cộng vectơ?

Một người đi **4 m về Đông** rồi **3 m về Bắc**. Tổng quãng đường đã đi là 7 m, nhưng độ dời từ nơi xuất phát đến nơi kết thúc là một mũi tên từ **đầu** tới **cuối**; nó có độ dài 5 m (tam giác vuông), không phải 7 m. Muốn biết độ dời sau nhiều lần di chuyển, ta phải **ghép các vectơ theo thứ tự đầu–đuôi**.

Tình huống khác: hai lực cùng tác dụng vào một vật, một lực kéo sang phải, một lực kéo chếch lên trên. Độ lớn của lực tổng hợp **không thể cộng số học** nếu lực khác hướng. Quy tắc hình bình hành cho ta cách tìm **vectơ hợp lực**.

**Tiền đề tự kiểm:** Hãy vẽ \(\overrightarrow{AB}\), nhận ra A là điểm đầu, B là điểm cuối; hiểu vectơ bằng nhau có thể đặt ở hai vị trí khác nhau; phân biệt quãng đường với độ dài độ dời. Nếu chưa làm được, quay lại Phần 1, mục “độ lớn và hướng”.

## 2. Quy tắc ba điểm: đi từ A đến C qua B

**Quan sát:** Dịch chuyển A→B rồi B→C chính là một dịch chuyển tổng từ A→C. Ta không đòi hai vectơ thẳng hàng; chỉ cần ghép **đầu B** của mũi tên thứ nhất với **đuôi B** của mũi tên thứ hai.

Từ đó với **mọi ba điểm** A, B, C:

\[
\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}.
\]

**Vì sao cách này đúng?** Nếu \(\overrightarrow{AB}\) là chuyển động thứ nhất và \(\overrightarrow{BC}\) là chuyển động thứ hai, vị trí cuối cùng là C; một chuyển động tương đương từ A đến C biểu diễn tổng.

**Giới hạn/bẫy:** Không được đổi tùy tiện \(\overrightarrow{BC}\) thành \(\overrightarrow{CB}\). Khi có nhiều vectơ, ghép đúng chuỗi đầu–đuôi và kiểm tra xem có đi về điểm ban đầu không. Đường gấp khúc khép kín có tổng vectơ bằng \(\vec0\), dù tổng các **độ dài** các chặng thường khác 0.

## 3. Quy tắc hình bình hành: hai vectơ cùng gốc

Nếu hai vectơ cùng đặt tại A, ví dụ \(\overrightarrow{AB}\) và \(\overrightarrow{AD}\), ta chưa có cặp “đầu nối đuôi”. Nhưng có thể **tịnh tiến** vectơ \(\overrightarrow{AD}\) sang B→C (vẫn giữ độ dài và hướng) trong hình bình hành ABCD. Khi đó:

\[
\overrightarrow{AB}+\overrightarrow{AD}
=\overrightarrow{AB}+\overrightarrow{BC}
=\overrightarrow{AC}.
\]

Ta dùng **quy tắc hình bình hành** vì hai vectơ gốc **chung điểm đầu A**; kết quả là đường chéo \(\overrightarrow{AC}\) bắt đầu tại A. Với hai vectơ không thẳng hàng, cách này làm rõ vì sao độ lớn hợp lực không phải lúc nào cũng bằng tổng hai độ lớn.

**Đọc hình D5:** Sử dụng hình đã được duyệt `FIG-G10-B08-01` (nguồn SGK canonical; không chép XML sang bank mới). Tìm đúng A, B, D, C; nhìn hai mũi tên từ A, rồi đi theo đường chéo A→C. Nét thẳng AB và BC biểu diễn hai bước đầu–đuôi; không nhầm với BA hoặc CA.

## 4. Vectơ đối, phép trừ và các phép toán cơ bản

**Từ trực giác:** Đi A→B rồi quay lại B→A sẽ về vị trí cũ. Hai vectơ đối nhau có tổng bằng vectơ-không.

\[
-\overrightarrow{AB}=\overrightarrow{BA},\quad
\vec a+(-\vec a)=\vec0,\quad
\vec a-\vec b=\vec a+(-\vec b).
\]

**Tính chất để dùng có lý do:** \(\vec a+\vec b=\vec b+\vec a\) (thứ tự thực hiện các bước dời có thể đổi mà tổng không đổi); \((\vec a+\vec b)+\vec c=\vec a+(\vec b+\vec c)\) (thay cách nhóm không đổi điểm đến); \(\vec a+\vec0=\vec a\).

**Bẫy về hướng:** \(\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}\), **không** phải \(\overrightarrow{BC}\). Giải thích bằng cộng \(\overrightarrow{AB}+\overrightarrow{CA}=\overrightarrow{CB}\) (đổi thứ tự để nối C→A→B). Phép trừ nói chung **không giao hoán**.

## 5. Từ phép cộng đến trung điểm và trọng tâm

**Trung điểm:** M ở giữa A, B với \(MA=MB\) thì hai vectơ \(\overrightarrow{MA}\) và \(\overrightarrow{MB}\) đối nhau, nên:

\[
\overrightarrow{MA}+\overrightarrow{MB}=\vec0.
\]

Với E tùy ý và M là trung điểm BC:

\[
\overrightarrow{EB}+\overrightarrow{EC}
=(\overrightarrow{EM}+\overrightarrow{MB})
 +(\overrightarrow{EM}+\overrightarrow{MC})
=2\overrightarrow{EM}.
\]

Đây là cách **chứng minh** hệ thức, không phải học thuộc \(2\overrightarrow{EM}\) rồi áp dụng cho M bất kỳ.

**Trọng tâm:** G là trọng tâm tam giác ABC (tam giác không suy biến), M là trung điểm BC. G nằm trên AM và \(\overrightarrow{AG}=\tfrac23\overrightarrow{AM}\). Sử dụng hệ thức trung điểm tại E=G cùng việc \(\overrightarrow{GA}\) và \(\overrightarrow{GM}\) ngược hướng với độ lớn \(GA=2GM\), suy ra:

\[
\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0.
\]

**Vì sao cần học?** Khi chứng minh các quan hệ hình học, một đẳng thức vectơ có thể thay cho nhiều phép đếm độ dài/phân giác. Nhưng không được dùng kết luận “trọng tâm” cho một điểm bất kỳ nằm trên trung tuyến mà không có tỉ số \(2:1\).

## 6. Nhân vectơ với một số: thay độ lớn, có thể đảo chiều

**Quan sát trước công thức:** Nếu cùng hướng đi \(2\) lần một đoạn dịch chuyển \(\vec u\) thì được \(2\vec u\). Nếu đi **ngược chiều** hai lần đoạn đó, ta biểu diễn bằng \(-2\vec u\). Với \(\vec u\ne\vec0\):

- \(k>0\): \(k\vec u\) **cùng hướng** \(\vec u\);
- \(k<0\): \(k\vec u\) **ngược hướng** \(\vec u\);
- \(k=0\) hoặc \(\vec u=\vec0\): \(k\vec u=\vec0\).

Độ dài luôn không âm:

\[
|k\vec u|=|k|\,|\vec u|,\qquad k\in\mathbb R.
\]

**Nhắc lại KNTT:** Vectơ-không được **quy ước cùng phương, cùng hướng với mọi vectơ**. Không vì hướng “ngược” khi k âm mà nói \(k\vec0\) có mũi tên vật lí ngược với \(\vec0\). Trong các quy tắc dấu hướng ở trên phải kiểm \(\vec u\ne\vec0\).

## 7. Các tính chất và tiêu chuẩn cùng phương

\[
k(\vec u+\vec v)=k\vec u+k\vec v,\quad
(k+m)\vec u=k\vec u+m\vec u,\quad
k(m\vec u)=(km)\vec u.
\]

**Vì sao:** Nếu ta phóng to một chuyển động gồm hai chặng theo hệ số k, mỗi chặng cũng được phóng theo k; hai cách tính cùng cho vectơ tổng.

**Tiêu chuẩn dùng đúng điều kiện:** Với \(\vec u,\vec v\) đều **khác không**, chúng cùng phương khi và chỉ khi tồn tại số thực \(t\ne0\) sao cho \(\vec v=t\vec u\). Số t âm cho ngược hướng, dương cho cùng hướng. Nếu một vectơ bằng không, xét riêng theo quy ước KNTT; tuyệt đối không chia cho \(|\vec u|=0\).

**Ví dụ kiểm bẫy:** \(\vec v=-\frac52\vec u\) với \(\vec u\ne\vec0\) thì chúng cùng phương, **ngược hướng**, nhưng độ dài có tỉ số \(|\vec v|/|\vec u|=5/2>0\). Không gọi “độ dài âm”.

## 8. Viết quan hệ hình học bằng hệ số vectơ

M là trung điểm AB khi \(\overrightarrow{AM}=\tfrac12\overrightarrow{AB}\). Nếu M nằm trên AB và \(AM:MB=1:2\), thì \(\overrightarrow{AM}=\tfrac13\overrightarrow{AB}\) trong khi \(\overrightarrow{BM}=-\tfrac23\overrightarrow{AB}\). **Vị trí và hướng** quyết định dấu hệ số.

G là trọng tâm tam giác ABC, M là trung điểm BC thì:

\[
\overrightarrow{AG}=\frac23\overrightarrow{AM}
=\frac13\left(\overrightarrow{AB}+\overrightarrow{AC}\right).
\]

Hệ số \(1/3\) không phải ghi nhớ ngẫu nhiên: công thức trung điểm cho hệ số \(1/2\), trọng tâm chia trung tuyến theo \(2/3\), nên \((2/3)(1/2)=1/3\).

---

## D. D2 — Sáu ví dụ gốc dùng lại, thêm hướng dẫn chọn phương pháp

**Không nhân bản Worked Library:** Đề, đáp án, lời giải chính thức thuộc các `EX-ID` bất biến trên hai source SGK ở mục A. Dưới đây là **lời dẫn sư phạm theo thứ tự Chuyên đề**, không phải “đáp án phiên bản Topic”.

| Thứ tự | Ví dụ canonical | Tự hỏi trước khi xem lời giải | Vì sao chọn cách đó / điểm cần kiểm |
| --- | --- | --- | --- |
| E1 | `EX-G10-B08-01` | Rút gọn chuỗi AB+BC+CD | Dùng quy tắc ba điểm vì đầu–đuôi nối được; kết quả AD, không phải DA |
| E2 | `EX-G10-B08-02` | Cộng AB+AD trong hình bình hành; trừ AC−AB | Dùng đường chéo AC cho hai vectơ cùng gốc; rồi dùng hiệu AC−AB = AD; không nhầm BA |
| E3 | `EX-G10-B08-03` | Hệ thức trung điểm/trọng tâm | Trước tiên xác định **điểm nào** là trung điểm/trọng tâm; mọi vectơ trong tổng phải xuất phát từ đúng điểm |
| E4 | `EX-G10-B09-01` | \(|\vec u|=5\,\mathrm{cm},\,\vec v=-3\vec u\) | Hệ số âm đảo chiều nhưng **độ dài 15 cm**; không lấy \(-15\) cm |
| E5 | `EX-G10-B09-02` | Trung điểm M của AB=12 cm, so AM/MB/MA | Dùng điểm nằm giữa để kiểm dấu; AM và MB cùng hướng AB, MA ngược |
| E6 | `EX-G10-B09-03` | Tính AG của trọng tâm qua AB+AC | Xây quan hệ trung điểm trước rồi nhân \(2/3\); không nhầm AG:AM với AG:GM |

**Các ví dụ là lời dẫn cho cùng 6 ID gốc**, phải mở đúng đối tượng canonical và lời giải đã có. Không phát sinh thêm 6 `item_id` mới từ bảng này.

## E. PED6 — Tự thử **trước Luyện tập**, sau đó tự mở đối chiếu

**Tự thử 1:** `THPT-G10-B08-C01`. Đọc tình huống ba điểm A,B,C và chọn kết quả tổng AB+BC. Học sinh **chọn trước**, khi tự mở mới hiện **A: AC** và lí do điểm B nối đầu–đuôi. Sai thì về §C2 + `HELP-G10-B08-01`.

**Tự thử 2:** `THPT-G10-B09-C01`. Với \(|\vec u|=4\) cm, \(\vec v=-2\vec u\) và \(\vec u\ne\vec0\), hãy tự xác định **độ dài và chiều** trước khi mở. Đối chiếu sau: **B**, độ dài \(8\) cm và ngược hướng. Sai thì về §C6 + `HELP-G10-B09-01`.

**Hành vi chưa triển khai:** Hai `TOPIC_FIRST_TRY` là placement **đề xuất** trên 2 ID công khai SGK; học sinh không được thấy đáp án trước khi chủ động tự mở. File nguồn phục vụ AUTHORING có đáp án để reviewer kiểm; không phải bản website đã hoạt động. Không dùng hai câu đã xem làm chứng cứ Tự kiểm tra độc lập, không Mastery.

---

# F. LUYỆN TẬP — ma trận item–outcome–role (giữ đúng 1 canonical ID)

**Tất cả 18 ID sau đã tồn tại trong các nguồn SGK đã được reviewer xét.** `TOPIC_PRACTICE_*`, `TOPIC_FIRST_TRY`, `TOPIC_WRITTEN` là **nhãn biên soạn đề xuất**, không tuyên bố runtime hỗ trợ các role này ngay.

| ID canonical SGK | Mục tiêu ở Topic | Role gợi ý | Đáp án/đầu ra gốc |
| --- | --- | --- | --- |
| `THPT-G10-B08-C01` | Ghép ba điểm | FIRST_TRY → BASIC | A: AC |
| `THPT-G10-B08-C02` | Quy tắc hình bình hành | BASIC | B: AC |
| `THPT-G10-B08-P01` | Tổng hai vectơ đối | BASIC | \(\vec0\) |
| `THPT-G10-B08-P02` | Hiệu và thứ tự chiều | REASONING | \(\overrightarrow{CB}\) |
| `THPT-G10-B08-P03` | Khép kín đường gấp khúc | REASONING | \(\vec0\) |
| `THPT-G10-B08-P04` | Trung điểm | TRAP | C: MA+MB=0 |
| `THPT-G10-B08-P05` | Trọng tâm | REASONING | \(\vec0\) |
| `THPT-G10-B08-P06` | Hai lực vuông góc | APPLICATION | 5 N |
| `THPT-G10-CHIV-W08-ANCHOR` | Chứng minh trung điểm/trọng tâm trên giấy | WRITTEN_SHARED | Rubric gốc /7 |
| `THPT-G10-B09-C01` | Độ dài và dấu hệ số | FIRST_TRY → BASIC | B: 8 cm/ngược chiều |
| `THPT-G10-B09-C02` | Hệ số bằng 0 | BASIC | C: \(\vec0\) |
| `THPT-G10-B09-P01` | Độ dài nhân số | BASIC | 18 m |
| `THPT-G10-B09-P02` | Phân phối | REASONING | \(\vec a+3\vec b\) |
| `THPT-G10-B09-P03` | Điểm trên đoạn, đúng dấu | REASONING | \(-\tfrac35\overrightarrow{AB}\) |
| `THPT-G10-B09-P04` | Trọng tâm và hệ số 1/3 | TRAP | C |
| `THPT-G10-B09-P05` | Bội vô hướng âm | REASONING | Ngược hướng, 5/2 |
| `THPT-G10-B09-P06` | Hai chặng có chiều ngược | APPLICATION | 3 km về Tây |
| `THPT-G10-CHIV-W09` | Giải thích dấu và điều kiện trung điểm | WRITTEN_SHARED | Rubric gốc /7 |

**Số lượng nguồn thật:** 8 formative B08 + 8 formative B09 = **16 public item**; thêm 2 Written/Anchor = **18 unique câu/bài tham chiếu**. Sáu worked EX cùng nguồn riêng, không cộng vào số 18. Hai FIRST_TRY dùng lại chính ID trong 16 câu, không cộng thêm. **Không tạo item gốc mới ở Phần 2.**

**Gợi ý lộ trình học:** BASIC (C02/P01) → nối chặng/hình (C01/P02/P03) → vận dụng (P06) → trung điểm/trọng tâm (P04/P05, W08) → nhân số và quy luật (B09-C02/P01/P02/P05) → ứng dụng tỉ số (P03/P04/P06/W09). Tự thử trước Core chỉ là thao tác học formative.

### D4 — Written là bài giải có lập luận, không là Mastery tự động

- **Written W08 (một item, nhãn Anchor):** Chứng minh công thức hai vectơ tới B,C từ E qua trung điểm M; rút gọn biểu thức; chứng minh tính chất trọng tâm. Học sinh phải nêu lý do “M là trung điểm” trước khi triệt tiêu hai vectơ. **Giữ nguyên rubric 7 điểm của source**, không chia sẻ một bản rubric khác cho Topic.
- **Written W09 (một item):** Với AB=12 cm, M chia AB tỉ lệ 1:2, tính hai độ dài và biểu diễn AM/BM qua AB; giải thích vì sao tổng AM+BM không bằng 0. **Giữ nguyên rubric 7 điểm**. Đây là bài sâu về dấu/điều kiện trung điểm, không chỉ thay số.
- Học sinh tự làm trên giấy, **chỉ tự đối chiếu sau khi làm**; không hệ thống chấm lập luận tự động hoặc ghi Skill Mastery.

### D5 — Đọc hình và ứng dụng thật

1. **`FIG-G10-B08-01`**: dùng chung SVG SGK về tam giác/hình bình hành, theo `THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg`. Hướng dẫn đọc đã ghi §C2–3, **không clone file ảnh**.
2. **`FIG-G10-B09-01`**: dùng chung SVG SGK về nhân vectơ với số, theo `THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg`. Học sinh đọc hướng và chiều dài trước khi áp \(|k|\); đừng xem mũi tên âm là “độ dài âm”.
3. Bài toán gió/dòng nước/hợp lực là **tình huống để học vì sao**, không tự tuyên bố một mô hình vật lý chính xác khi chưa có hướng lực hoặc góc. Trên bài lực vuông góc B08-P06, Pythagore chỉ dùng được vì **có điều kiện góc vuông**.

### D6 — Khi sai thì trở lại đúng tiền đề/đúng ví dụ

| Thẻ HELP canonical | Dấu hiệu vấp | Hành động sửa cụ thể |
| --- | --- | --- |
| `HELP-G10-B08-01` | Đảo AB thành BA, nhầm cộng/trừ hoặc ghép không đầu–đuôi | Vẽ đường A→B→C, tự kiểm một vòng kín; quay về C01/P02 |
| `HELP-G10-B08-02` | Dùng hình bình hành sai gốc hoặc gọi M/G sai | Khoanh 2 vectơ **cùng bắt đầu ở A** và chỉ đường chéo; vẽ trung điểm, kiểm E3 rồi W08 |
| `HELP-G10-B09-01` | Hệ số âm → ghi độ dài âm hoặc quên trường hợp 0 | Tách hai câu hỏi “độ dài bao nhiêu?” và “hướng nào?”; dùng E4 rồi C01/P05 |
| `HELP-G10-B09-02` | Nhầm AG:GM với AG:AM, đổi chiều BM/MB | Vẽ A–G–M và A–M–B, viết 2/3 và 1/3 từ các đoạn được đánh dấu; trở lại E5/E6 rồi P03/P04 |

---

# G. TỰ KIỂM TRA CỦA TOÀN CHUYÊN ĐỀ — CHƯA LÀM RD1

Chuyên đề 2 sẽ có **một Tự kiểm tra cấp chuyên đề**, bao phủ cả 7 phần, khác hẳn bài Tự kiểm tra cuối Chương IV SGK. Chưa có các câu/đáp án/rubric private RD1 trong GitHub công khai; 18 câu ở phần này là **formative/public**, không được dùng lại như bằng chứng đánh giá độc lập đã giữ kín. Không hint, Tutor, key hoặc feedback trước **Final Submit** trong kiểm tra chính thức. Bản demo tự đối chiếu `CLIENT_SELF_CHECK_NO_MASTERY` không tự tạo bằng chứng thành thạo.

# H. AUTHORING QA trước phản biện độc lập

| Cổng | Tình trạng hiện tại | Phần còn thiếu |
| --- | --- | --- |
| Q01–Q02 / S1 phần này | **Đã tự xem scan SGK/SBT**, đối chiếu trang in/PDF trực tiếp như bảng A | Reviewer kiểm độc lập theo scope Topic; nguồn Part 3–7 còn mở |
| Q03–Q08 (D1–D6) | Có kiến thức WHY/bản chất, 6 ví dụ có suy luận, 18 item dùng lại, Written/FIG/HELP | Chưa kiểm đầy đủ trải nghiệm Topic bằng reviewer, không nhận SGK PASS thay Topic PASS |
| Q09–Q14 (PED1–PED6) | Có tiền đề → bản chất → công thức → đọc hình → lý do phương pháp → hai Tự thử tự mở + D6 | Chưa verdict PED độc lập và hành vi website được QA |
| Q15 một canonical | 18 ID tham chiếu, 0 clone body/key/rubric, 2 FIG và 4 HELP tham chiếu | Placement/role còn đề xuất, cần kiểm schema với RELEASE |
| Q16 / RD1 | Đúng ranh giới, không dữ liệu kín Git công khai | Chưa có ngân hàng Topic Readiness đầy đủ/riêng |
| Q17 hai hành trình | Trang Topic có Knowledge+Practice tự học tại chỗ | Còn 5 phần tiếp theo và Topic Readiness |
| Q18 snapshot/receipt | Source SGK gốc ghi Git blob và PDF S1 SHA; **Part 2 draft** phải khóa blob sau commit | Chưa NotebookLM topic receipt, handoff V2/ready/REGISTER |

**Tình trạng cuối vòng:** `PART2_RD0_DRAFT_PREPARED / S1_DIRECT_CHECK=YES / ACADEMIC_PASS=NO / PED_PASS=NO / CONTENT_READY=NO`. Không sửa SGK canonical, không mở nhánh RELEASE, không làm thay các cổng tích hợp / thiết bị / merge / deploy. Tiếp tục phần 3 sau khi QA nội bộ; mặc định review NotebookLM **trọn chuyên đề** khi học liệu 7/7 đủ và nguồn S1 đầy đủ, chỉ chia batch nếu quá dài.
