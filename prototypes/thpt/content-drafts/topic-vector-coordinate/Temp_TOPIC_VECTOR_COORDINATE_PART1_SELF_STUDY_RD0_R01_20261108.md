# Chuyên đề 2 — Vectơ và phương pháp tọa độ (lớp 10–12)
## PHẦN 1/7 — Vectơ, độ lớn và hướng · RD0 AUTHORING R01 (BẢN THẢO)

**Vai trò:** AUTHORING DRAFT ONLY — không phải website, không phải gói NotebookLM, chưa Academic/PED PASS, không CONTENT_READY.  
**Chuẩn duy nhất:** `SLM-THPT-QUALITY-ONE / 1.2.0`, Q01–Q18.  
**Phạm vi:** Phần 1 của đúng **một** chuyên đề xuyên lớp; không áp Chương/Bài SGK thành các trang học mới.  
**Kiến trúc người học:** đúng ba mục `Kiến thức / Luyện tập / Tự kiểm tra`; tệp này chuẩn bị **Kiến thức + Luyện tập** và metadata giới hạn Tự kiểm tra, không phải RD1.  
**Trạng thái phần:** RD0 draft đủ khung D1–D6; **đã đối chiếu trực tiếp SGK/SBT S1 và trang in ↔ trang PDF của Bài 7**; chưa NotebookLM Topic, không gán Academic/PED `PASS` cho phần hoặc toàn chuyên đề.

### Nguồn S1 và bảo toàn thành quả đã duyệt

**Phạm vi S1 trực tiếp của phần 1:** SGK Toán 10 KNTT tập 1, Chương IV, **Bài 7 — Các khái niệm mở đầu, trang in 46–50**; SBT Toán 10 KNTT tập 1, **Bài 7, trang in 45–47**. **Đã trực tiếp đối chiếu** hai bản PDF scan nguyên trang từ thư mục Drive `KNTT TOAN 10` của chủ dự án: SGK trang **in 46–50 ↔ PDF trang 47–51 (1-based, index 46–50)**; SBT trang **in 45–47 ↔ PDF trang 46–48 (1-based, index 45–47)**. Hai bản scan đều có lệch **+1 trang PDF** ở phạm vi này. SGK hash SHA256 `3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2`; SBT hash SHA256 `2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1`. Đây là **receipt nguồn trực tiếp của riêng Phần 1**, không phải chứng cứ đã tự đối chiếu SGK/SBT của 6 phần còn lại. Không sử dụng kiến thức Bài 8–11 hay lớp 11–12 như điều kiện bắt buộc của Phần 1. Các phần sau sẽ kiểm trực tiếp S1 theo từng phạm vi.

**Một nguồn canonical SGK đã PASS (chỉ đúng snapshot SGK):**
- `prototypes/thpt/content-drafts/THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `42b206e31421b33860a1bf697d2d04b7aba992cf`.
- `prototypes/thpt/content-drafts/THPT_G10_CHIV_B07_B08_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md`, nguồn reviewer độc lập của **SGK B07/B08**, không phải Academic/PED PASS mới cho Chuyên đề 2.
- `prototypes/thpt/release-queue/ready/G10-SGK-CHIV.md`: ghi nhận S1 trang in 46–50/45–47 và hai D5 SVG.  
**Kỉ luật nguồn:** Toàn bộ câu Core/Practice/Written/Worked dưới đây được **tham chiếu** cùng một ID gốc SGK; không tạo item/đáp án/rubric thứ hai. Muốn NotebookLM review Chuyên đề 2, phải xuất snapshot đủ **nội dung thật** từ các ref này vào file Temp review và kiểm item 1:1; không chỉ gửi danh sách ID.

**Điểm sửa học thuật quan trọng so với RD0 R00:** KNTT **quy ước vectơ-không cùng phương và cùng hướng với mọi vectơ** (SBT Bài 7 trang in 45; receipt nguồn SGK đã được NotebookLM chấp nhận). Trong trực giác hình học, mũi tên dài 0 không có chiều quan sát được; nhưng tuyệt đối **không dạy rằng vectơ-không không cùng hướng với vectơ nào**. Khi giải bài theo KNTT phải áp dụng đúng quy ước.

---

# I. KIẾN THỨC — Một mạch học hoàn chỉnh của Phần 1

## 1. Vì sao lại cần vectơ?

Nếu dự báo nói “gió 18 km/h”, ta biết mức độ nhanh nhưng chưa biết gió thổi về phía nào. Hai cơn gió **cùng tốc độ** mà hướng khác nhau có thể tác động khác nhau lên một cánh buồm. Vì vậy, chỉ một con số chưa đủ; ta cần biểu diễn **độ lớn** và **hướng** trong cùng một đối tượng. Vectơ giúp biểu diễn vận tốc, lực hoặc độ dời.

**Tự quan sát:** Một người di chuyển 3 m về phía Đông, người khác 3 m về phía Tây. Độ dài chuyển động như nhau, nhưng điểm đến không giống nhau. Chúng ta không được xem hai độ dời là cùng một vectơ.

## 2. Cần biết gì trước khi học?

Nhớ lại điểm A, B; đoạn thẳng AB và độ dài AB; các đường thẳng song song; hướng nhìn của mũi tên. Không cần biết tọa độ, tích vô hướng, quy tắc cộng hay công thức lượng giác. Nếu chưa phân biệt được **độ dài** với **chiều** mũi tên, hãy thực hiện thao tác sau trước khi đọc tiếp.

**Hình dung:** Vẽ một mũi tên dài 4 ô từ A đến B sang phải. Dời nguyên mũi tên sang một vị trí khác mà vẫn hướng sang phải và dài 4 ô. Hai mũi tên biểu diễn cùng một vectơ, dù điểm đặt khác nhau. Quay một mũi tên sang trái: độ dài giữ nguyên nhưng vectơ đã thay đổi.

## 3. Từ hình dung đến định nghĩa

- **Vectơ** là một đoạn thẳng có hướng. \(\overrightarrow{AB}\) có **điểm đầu A**, **điểm cuối B**; mũi tên hướng từ A đến B. Khi không cần gọi điểm đầu/cuối, có thể dùng \(\vec a,\vec b\).
- **Độ dài** \( |\overrightarrow{AB}|=AB \ge 0 \) là khoảng cách giữa A và B; đảo \(AB\) thành \(BA\) không làm đổi độ dài. Độ dài không được mang dấu âm.
- Với vectơ **khác không**, đường thẳng qua hai đầu mút là **giá**. Hai vectơ **cùng phương** nếu giá của chúng song song hoặc trùng nhau. Khi đã cùng phương, chúng có thể **cùng hướng** hoặc **ngược hướng**.
- Hai vectơ **khác không** bằng nhau nếu **cùng hướng và cùng độ dài**; chúng không buộc có chung điểm đầu. Hai vectơ cùng phương hoặc cùng độ dài thôi **chưa chắc bằng nhau**.
- \(\overrightarrow{AA}=\overrightarrow{BB}=\vec0\) với mọi điểm A, B; \( |\vec0|=0\). **Theo quy ước của SGK/SBT KNTT, \(\vec0\) cùng phương và cùng hướng với mọi vectơ.** Đây là quy ước xử lý trường hợp độ dài bằng 0, không phải khẳng định rằng một mũi tên độ dài 0 có chiều vật lí quan sát được.
- Hai vectơ khác không cùng độ dài, ngược hướng có thể được gọi là hai vectơ đối nhau khi học **Phần 2** (phép cộng/trừ). Ở Phần 1, chỉ cần phân biệt chiều mũi tên, tránh dạy phép trừ trước khi đã hình thành bản chất.

**Bảng phân biệt khi làm bài:**

| Nhận xét | Đủ kết luận “hai vectơ bằng nhau”? | Vì sao? |
| --- | --- | --- |
| Cùng độ dài | **Chưa đủ** | Có thể khác phương hoặc ngược hướng |
| Cùng phương | **Chưa đủ** | Có thể ngược hướng và khác độ dài |
| Cùng hướng (khác không) | **Chưa đủ** | Có thể khác độ dài |
| Cùng hướng **và** cùng độ dài | **Đủ** | Đúng định nghĩa bằng nhau |
| Hai vectơ-không bất kỳ | **Bằng nhau** | Cùng là vectơ-không |

## 4. Hướng dẫn đọc hình (D5) — dùng chung, không nhân bản

**Nguồn hình canonical đã được duyệt SGK:** `FIG-G10-B07-01` — `THPT_G10_B07_PARALLELOGRAM_EQUAL_OPPOSITE_D5_R01.svg`, XML nguyên gốc nằm trong phần D5 của snapshot SGK Git blob `42b206e31421b33860a1bf697d2d04b7aba992cf`. **Không tạo một SVG bản sao** chỉ để chuyển từ SGK sang Chuyên đề; đề xuất placement `TOPIC_KNOWLEDGE / PART_1 / FIG-G10-B07-01`. RELEASE kiểm việc tham chiếu thành ảnh thật trên website khi đến lượt tích hợp.

**Học sinh đọc hình theo thứ tự:**
1. Tìm đuôi và đầu mũi tên: \(A\to B\), \(D\to C\), \(C\to D\).
2. Xét các **giá**: AB và DC nằm trên hai cạnh song song, nên cùng phương; DC và CD cùng giá nhưng chiều ngược nhau.
3. So hai mũi tên từ A sang B và D sang C: **cùng hướng, cùng độ dài** nên \(\overrightarrow{AB}=\overrightarrow{DC}\).
4. Đừng kết luận \(\overrightarrow{AB}=\overrightarrow{CD}\), dù \(AB=CD\) theo nghĩa đoạn thẳng.
5. Đọc đường chéo và điểm O: nếu O là giao hai đường chéo của hình bình hành, thì \(\overrightarrow{AO}=\overrightarrow{OC}\) vì hai đoạn cùng nằm trên AC, cùng chiều và dài bằng nhau.

**Lời dẫn truy cập:** Nếu hình không tải được, các kết luận trên vẫn hiểu từ tính chất hình bình hành; không yêu cầu người học đo mũi tên bằng mắt.

## 5. Ví dụ đã có một nguồn gốc, dùng lại với cách dẫn dắt của Chuyên đề

### Ví dụ A — Vì sao phải kiểm cả chiều lẫn độ dài?
**Canonical worked ID:** `EX-G10-B07-01` (tham chiếu SGK; không sinh EX mới).

**Bài toán gốc:** Với hình bình hành ABCD, so sánh \(\overrightarrow{AB}\) với \(\overrightarrow{DC}\), và \(\overrightarrow{AB}\) với \(\overrightarrow{CD}\).

**Chọn phương pháp:** Không thể chỉ dùng tính chất “cạnh đối bằng nhau”: cần kiểm thêm **chiều** của hai mũi tên. Cặp AB và DC cùng hướng, cùng độ dài nên bằng nhau. Cặp AB và CD có độ dài bằng nhau nhưng ngược hướng nên **không bằng nhau**.

**Nếu gặp bế tắc:** Đặt ngón tay tại A, di chuyển đến B; sau đó đặt tại D, di chuyển đến C. Đó là cùng chiều. Đổi đường đi thành C đến D sẽ đổi chiều.

### Ví dụ B — Đoạn mũi tên dài bằng 0 thì sao?
**Canonical worked ID:** `EX-G10-B07-02`.

**Bài toán gốc:** A, B là hai điểm, so sánh \(\overrightarrow{AA}\) với \(\overrightarrow{BB}\) và nêu độ dài.

**Chọn phương pháp:** Ở đây điểm đầu trùng điểm cuối nên không dùng việc quan sát chiều mũi tên thông thường; nhận ra ngay cả hai là \(\vec0\). Vì vậy hai vectơ bằng nhau và cùng có độ dài 0. Với một vectơ khác 0, dùng **quy ước KNTT về cùng phương/cùng hướng** để trả lời câu hỏi tương ứng.

### Ví dụ C — Quãng đường có phải độ dài vectơ độ dời?
**Canonical worked ID:** `EX-G10-B07-03`.

**Bài toán gốc:** Tàu đi 6 km về Đông rồi 8 km về Bắc. Tính quãng đường và độ dài vectơ độ dời từ đầu đến cuối.

**Chọn phương pháp:** Quãng đường là tổng độ dài hai chặng, \(6+8=14\) km. Độ dài vectơ độ dời là khoảng cách thẳng giữa vị trí đầu và cuối. Hai chặng vuông góc, nên theo Pythagore: \(\sqrt{6^2+8^2}=10\) km.

**Giới hạn phương pháp:** Không lấy \(6+8\) làm độ lớn vectơ độ dời; cũng không áp dụng Pythagore nếu hai chặng không vuông góc mà chưa có dữ kiện góc phù hợp.

## 6. Tự thử trước khi luyện tập — tự mở đối chiếu, không chấm Mastery

Tự thử ở đây dùng **đúng các canonical public IDs đã có**, thay vì tạo biến thể gần trùng:

1. `THPT-G10-B07-C02` — Kiểm tra tiêu chuẩn hai vectơ bằng nhau. **Học sinh chọn trước; mở đối chiếu sau:** Đáp án `C`, cùng hướng và cùng độ dài; cùng phương hoặc cùng độ dài riêng lẻ không đủ.
2. `THPT-G10-B07-P04` — Kiểm tra vectơ-không theo KNTT. **Chọn trước; mở đối chiếu sau:** Đáp án `D`, độ dài 0, quy ước cùng hướng với mọi vectơ.

**Kiến trúc:** đây là hai `TOPIC_FIRST_TRY` placements trên những ID công khai có sẵn; không tăng tổng unique item ID; khi chuyển xuống Luyện tập vẫn là **một item** trên engine. Tự thử là formative, không phải `TOPIC_READINESS`. File Markdown trình bày cả câu trả lời để review, nhưng bản người học phải **ẩn lời giải cho tới khi học sinh tự mở**; RELEASE đảm bảo điều này khi render.

**Nếu làm sai:** đọc lại bảng phân biệt ở mục 3, mở HELP tương ứng trong mục II.2, sau đó thực hành một câu khác. Không tự ghi Skill Mastery.

---


## 7. Ba điểm thẳng hàng và điểm nằm giữa — hoàn thiện phạm vi S1 Bài 7

SGK Bài 7 trang **in 49** (PDF trang 50) dùng tính chất **cùng phương** để nhận biết ba điểm thẳng hàng; SGK cũng yêu cầu nhận biết một điểm có nằm giữa hai điểm khác không.

**Kiến thức và điều kiện:**
- Nếu A, B, C **đôi một phân biệt**, thì A, B, C thẳng hàng **khi và chỉ khi** \(\overrightarrow{AB}\) và \(\overrightarrow{AC}\) cùng phương. Hai giá cùng đi qua A; nếu song song thì thực tế chúng trùng nhau.
- Nếu A, B, M **đôi một phân biệt**, M nằm **giữa** A và B **khi và chỉ khi** \(\overrightarrow{MA}\) và \(\overrightarrow{MB}\) **ngược hướng**.
- \(\overrightarrow{AB}\) và \(\overrightarrow{AM}\) cùng hướng chỉ cho biết M nằm trên tia AB; **chưa đủ** kết luận M ở trong đoạn AB, vì M có thể nằm ngoài B.
- Không dùng quy ước vectơ-không để suy ra quan hệ nằm giữa tại các **đầu mút**: tính “nằm giữa” nghiêm ngặt yêu cầu ba điểm phân biệt.

**Vì sao dùng vectơ?** Độ dài không tự nói một điểm có nằm giữa hai điểm khác hay không. Nhìn hai mũi tên từ M về A và B, ta thấy A, B nằm hai phía của M hay cùng phía.

**Hình mới D5, CHƯA THẨM ĐỊNH:** `FIG-THPT-TOPIC-VECTOR-P1-01` tại `Temp_TOPIC_VECTOR_PART1_BETWEENNESS_D5_R01.svg` là hình gốc mới có `title/desc` mô tả cả hai trường hợp. Không nhân bản hình bình hành `FIG-G10-B07-01` của SGK. Cần QA hình học, SVG và reviewer đối với hình mới trước khi dùng trên website.

**Đọc hình bằng lời:** Đặt A, M, B lần lượt từ trái sang phải trên một đường thẳng. Hai mũi tên M→A và M→B ngược hướng. Nếu xếp A, B, M theo thứ tự, hai mũi tên bắt đầu tại M cùng quay về phía trái, không thể kết luận M ở giữa. Học sinh cần đọc chữ đầu–cuối trước khi đánh giá chiều.

### Hai câu bổ sung mới — ID đề xuất, chưa đăng ký canonical

**Câu T01, đề xuất ID THPT-TOPIC-VECTOR-P1-R01-T01 (TOPIC_FIRST_TRY/TRAP).** Ba điểm A, M, B đôi một phân biệt. Điều kiện nào **cần và đủ** để M nằm giữa A và B?

A. \(\overrightarrow{AB}\) và \(\overrightarrow{AM}\) cùng hướng.  
B. \(\overrightarrow{MA}\) và \(\overrightarrow{MB}\) ngược hướng.  
C. \(AM=BM\).  
D. \(\overrightarrow{MA}=\overrightarrow{MB}\).

**Đáp án dự kiến B.** Hai vectơ xuất phát từ M, có giá trùng nhau và ngược hướng nên A, B nằm ở hai phía M. A chỉ đảm bảo M nằm trên tia AB, có thể vượt quá B; C có thể xảy ra nếu M nằm trên đường trung trực AB, không nằm trên AB; D vô lí do A khác B. **Tự thử:** học sinh chọn trước, tự mở sau, không Mastery.

**Câu P01, đề xuất ID THPT-TOPIC-VECTOR-P1-R01-P01 (TOPIC_PRACTICE/SHORT_REASONING).** Cho A, B, C đôi một phân biệt. Hai vectơ \(\overrightarrow{AB}\) và \(\overrightarrow{AC}\) cùng phương. Giải thích vì sao A, B, C thẳng hàng. Từ đây có thể kết luận C nằm giữa A và B không?

**Lời giải dự kiến:** Hai giá đều qua A; cùng phương nên trùng nhau. Do đó B và C thuộc một đường thẳng qua A: A, B, C thẳng hàng. Nhưng chưa thể kết luận C nằm giữa A và B vì chưa biết thứ tự điểm; C có thể ở ngoài B hoặc phía đối diện B. **Rubric tự đối chiếu /3, không Mastery:** 1 điểm nêu hai giá đi qua A; 1 điểm suy giá trùng nhau và thẳng hàng; 1 điểm phủ định kết luận nằm giữa kèm phản ví dụ hợp lệ. Viết “vì cùng phương” mà không lí giải trùng giá chưa đủ lập luận.

**D6:** Nếu chọn A trong T01, vẽ A–B–M thẳng hàng; AB và AM vẫn cùng hướng nhưng M nằm ngoài AB. Nếu chọn C, lấy ba đỉnh tam giác cân với MA=MB mà M không thuộc AB. Nếu kẹt P01, thử vẽ hai đường thẳng cùng qua A và song song nhưng phân biệt: không thể.

**Delta:** Hai câu có nội dung mới, thuộc DELTA_C_ACADEMIC_MATERIAL. Cả hai chỉ là đề xuất trong một bản thảo nguồn, **chưa đăng ký item canonical**, chưa có verdict độc lập, không phát hành hoặc ghi điểm.


# II. LUYỆN TẬP — Đúng ngân hàng canonical, không sao chép câu hỏi

## 1. Bảng item–outcome–role để sử dụng từ nguồn SGK đã duyệt

| ID canonical gốc | Outcome chính | Vai trò Chuyên đề (đề xuất) | Đáp án gốc bất biến | Vị trí |
| --- | --- | --- | --- | --- |
| `THPT-G10-B07-C01` | Vectơ/đầu–cuối | `TOPIC_PRACTICE_BASIC` | B | Luyện tập |
| `THPT-G10-B07-C02` | Hai vectơ bằng nhau | `TOPIC_FIRST_TRY`, sau đó Practice | C | Tự thử / Luyện tập |
| `THPT-G10-B07-P01` | Độ dài vectơ | `TOPIC_PRACTICE_BASIC` | 7 cm | Luyện tập |
| `THPT-G10-B07-P02` | Bằng nhau trong hình bình hành | `TOPIC_PRACTICE_REASONING` | A | Luyện tập |
| `THPT-G10-B07-P03` | Ngược hướng | `TOPIC_PRACTICE_REASONING` | \(\overrightarrow{CD}\) | Luyện tập |
| `THPT-G10-B07-P04` | Vectơ-không | `TOPIC_FIRST_TRY`, sau đó Practice | D | Tự thử / Luyện tập |
| `THPT-G10-B07-P05` | Cùng hướng nhưng khác độ dài | `TOPIC_PRACTICE_TRAP` | B | Luyện tập |
| `THPT-G10-B07-P06` | Độ dời và quãng đường | `TOPIC_PRACTICE_APPLY` | 5 km | Luyện tập |
| `THPT-G10-CHIV-W07` | Bằng nhau/hình bình hành | `TOPIC_WRITTEN` | Rubric gốc /7 | Written chung |

**Hướng dẫn học:** Làm P01 và C01 trước; tiếp P02/P03/P05 để phân biệt hướng; làm P04 khi đã đọc quy ước vectơ-không; cuối cùng P06 và W07 để chuyển từ nhận biết sang vận dụng. Nếu đã tự thử C02/P04 thì kết quả đó là **formative đã xem**, không được tính là kiểm tra độc lập.

**Không nhân bản:** Tất cả câu, đáp án, lời giải, distractor và rubric nằm tại SGK canonical source; bảng là `placement manifest DRAFT`, không phải dữ liệu runtime đã được tích hợp. `TOPIC_FIRST_TRY` và các vai trò là nhãn đề xuất; cần so với schema thực tế trong RELEASE trước khi triển khai, không tuyên bố engine hỗ trợ ngay.

## 2. D6 — Khi sai thì học lại chỗ nào?

**`HELP-G10-B07-01` (nguồn dùng chung):** Nhầm điểm đầu/cuối, hay đảo chiều AB và BA. Hãy đọc mũi tên từ chữ đầu đến chữ sau; vẽ cả \(\overrightarrow{AB}\) và \(\overrightarrow{BA}\) trên một đoạn; thử lại P03 rồi C02.

**`HELP-G10-B07-02` (nguồn dùng chung):** Nhầm cùng phương/cùng hướng/bằng nhau hoặc bỏ quên quy ước vectơ-không. So sánh theo thứ tự **phương → hướng → độ dài** với vectơ khác không; nếu là \(\vec0\) dùng quy ước KNTT và độ dài 0. Thử P05 trước, P04 sau.

**Với câu độ dời P06:** Vẽ hai chặng vuông góc và đoạn nối điểm đầu–cuối; phân biệt quãng đường \(4+3=7\) km với độ dài độ dời 5 km. Đối chiếu Ví dụ C; đây là hướng dẫn bổ sung **D6 tại chỗ**, không phải item mới.

## 3. Written — một thư viện, rubric gốc, không tự cho điểm hệ thống

**Canonical:** `THPT-G10-CHIV-W07`. Bài gốc yêu cầu giải thích vectơ bằng nhau trong hình bình hành, chỉ vectơ ngược hướng, dùng giao hai đường chéo O và tính độ dài. Khi làm, học sinh vẽ hình và ghi từng lí do, không chỉ kết quả.

**Tự đối chiếu:** Sau khi hoàn tất bài trên giấy, mở lời giải/rubric đúng **bản SGK đã duyệt**, tổng **7,0 điểm**. Chấm tay là tự học, **không tạo Mastery, Readiness hoặc điểm chính thức**. Không tạo thêm Written/Anchor ID.

## 4. Phân hóa và chuyển giao

- **Nền tảng:** ký hiệu/độ dài/đầu-cuối — C01, P01.
- **Phân biệt bản chất:** cùng phương, hướng và bằng nhau; vectơ-không — C02, P02–P05.
- **Vận dụng:** quãng đường và độ dài độ dời — P06; hình học đầy đủ — W07.
- **Nối sang Phần 2 (không bắt buộc để hoàn thành phần này):** sau khi hiểu chiều và độ dài, học sinh mới học tổng/hiệu vectơ; không đưa công thức cộng vào Core Phần 1.

---

# III. TỰ KIỂM TRA — Giới hạn an toàn tại RD0

Phần 1 **không tạo ngân hàng Readiness riêng**; Chuyên đề 2 về sau cần **một Tự kiểm tra cấp chuyên đề** phủ đủ 7 phần. `TOPIC_READINESS` độc lập khác `SGK_CHAPTER_READINESS`. Không dùng lại các câu công khai đã luyện rồi tuyên bố đó là chứng cứ đánh giá độc lập. Không chứa câu hỏi/đáp án/rubric private RD1 trong kho công khai. `CLIENT_SELF_CHECK_NO_MASTERY` nếu dùng demo thì không là kiểm tra chính thức. Quy tắc Final Submit, không hint/Tutor/đúng-sai trước nộp thuộc RELEASE và không được suy hoàn thành từ tệp học liệu này.

---

# IV. MA TRẬN 5 OUTCOME — Chứng cứ một phần, không thay verdict độc lập

| Outcome gốc SGK được ánh xạ Chuyên đề | D1/D2 | D3 item | D4 | D5 | D6/PED | Tình trạng |
| --- | --- | --- | --- | --- | --- | --- |
| `G10-B07-DEFINITION` | §I.1–3; EX-01 | C01 | W07 (hỗ trợ ký hiệu) | FIG-B07-01 | HELP-01; WHY/tiền đề/đọc mũi tên | DRAFT |
| `G10-B07-LENGTH` | §I.3; EX-03 | P01,P06 | W07/độ dài | FIG-B07-01 | P06 remediation, giải thích quãng đường | DRAFT |
| `G10-B07-DIRECTION` | §I.3–5; EX-01 | P03,P05 | W07/hướng | FIG-B07-01 | HELP-01/02; quan sát chiều | DRAFT |
| `G10-B07-EQUALITY` | §I.3–5; EX-01 | C02,P02 | W07/chứng minh | FIG-B07-01 | HELP-02; First Try C02 | DRAFT |
| `G10-B07-ZERO` | §I.3–5; EX-02 | P04 | NOT_APPLICABLE (B07 Written không có phần riêng về zero) | Mô tả bằng văn bản, không gán hướng vật lí | HELP-02; First Try P04 | DRAFT |
| `TOPIC-VECTOR-P1-COLLINEAR-BETWEEN` (ID outcome đề xuất) | §I.7, SGK B07 p49 | **T01/P01 mới, chưa đăng ký** | P01 rubric tự đối chiếu /3, không Mastery | FIG-THPT-TOPIC-VECTOR-P1-01 **mới, chưa review** | Phản ví dụ tia/đoạn và đường trung trực; Tự thử T01 | DRAFT / DELTA_C |

**PED1–PED6:** WHY = §I.1; prerequisites = §I.2; concept before formal = §I.2–3; guide to figure = §I.4; reasoned methods/limits = §I.5; first try/open/remediation = §I.6 và II.2. Các chỉ dẫn đã **được biên soạn**, nhưng tính tự học và độ sâu của **Chuyên đề** chưa được NotebookLM kết luận.

### Cổng còn mở

| Gate | Trạng thái và điều kiện đóng |
| --- | --- |
| Q01–Q02/S1 | **Đã tự đối chiếu** Toán 10 SGK B07 trang in 46–50 ↔ PDF 47–51; SBT B07 trang in 45–47 ↔ PDF 46–48 và khớp quy ước vectơ-không. **S1 của 6 phần còn lại chưa được đối chiếu**, vì vậy không suy Q01/Q02 PASS cho toàn chuyên đề. |
| Q03–Q08 | D1–D6 ánh xạ tới item/EX/FIG/Written SGK có thật; bổ sung O06 thẳng hàng/điểm giữa với 2 item và 1 SVG mới **đang DRAFT**. Chưa QA hình/render, cần review chuyên đề, không suy SGK PASS. |
| Q09–Q14 | Có trình tự PED + first try; cần review độc lập nội dung Topic mới |
| Q15 | 8 public formative + 1 Written = **9 câu/bài SGK tham chiếu nguyên ID** và **2 câu mới có ID đề xuất** cho thẳng hàng/điểm giữa; **0 item clone**, 3 EX dùng lại bằng ID gốc; hai ID mới chưa đăng ký |
| Q16 | Tự kiểm tra Chuyên đề 2 chưa có private RD1 candidate; tuyệt đối không công khai đề/khoá kín, không Mastery |
| Q17 | Chưa đủ 7 phần, không tuyên bố Chuyên đề hoàn chỉnh |
| Q18 | Chưa có reviewer receipt riêng cho Topic Chuyên đề 2, chưa handoff V2 |
| RELEASE | Chưa website/QA/merge/deploy; Issue #790 là blocker **intake kỹ thuật** của Chuyên đề 1, không tự sửa gate trong AUTHORING |

**Đầu ra tiếp theo:** Kiểm hai câu mới T01/P01 không trùng ngân hàng thực, sau đó biên soạn Phần 2–7 với S1 theo từng mục, kiểm math/figure/canonical item mapping; khi **trọn Chuyên đề 2** có source full mới chuẩn bị batch review Markdown/TXT `Temp_` thật + prompt ngắn 3–6 câu, đúng 5 Permanent Sources v2.1. Không tự tạo biên bản Academic/PED PASS.
