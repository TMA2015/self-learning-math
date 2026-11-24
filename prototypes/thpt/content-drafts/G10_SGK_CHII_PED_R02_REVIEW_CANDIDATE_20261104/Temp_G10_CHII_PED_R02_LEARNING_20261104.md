# G10 KNTT Toán 10 Tập Một — Chương II (B03/B04) · Delta C PED R02 review candidate

PACKET_ID: G10-SGK-CHII-PED-BRIDGE-R02-20261104
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: PED_DELTA_C_B03_B04_PRE_CORE_ONLY
SOURCE_BASE_R01_GIT_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122
SOURCE_BASE_R01_REVIEW_RECEIPT_BLOB: 47eab8185d431045ab202d58fe4f2fbc3e99628b
ACADEMIC_VERDICT_R02: NOTEBOOKLM_PENDING
PEDAGOGICAL_VERDICT_R02: NOTEBOOKLM_PENDING
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
ASSESSMENT_MODE: PUBLIC_UNSCORED_FIRST_TRY
FIRST_TRY_COUNT: 10
NEW_HELP_COUNT: 0

## Phương pháp sử dụng — học bản chất trước kĩ thuật

Đúng thứ tự cho mỗi outcome: PED1 WHY → PED2 PRE → PED3 MEANING → PED4 cách đọc hình / N/A có lí do → PED5 METHOD → PED6 FIRST_TRY tự làm trước Core, sau đó tự mở lời giải và theo HELP R01. Bản này chỉ bổ sung lớp sư phạm cho nguồn R01 đã được NotebookLM phản biện; không thay đề/đáp án/lời giải/rubric R01 hoặc 14 câu cuối chương công khai. B03-MODELING và B04-INTEGER_MODELS được đánh dấu SUPPORT_ONLY **tạm thời theo phân tầng RD0**, không xóa hoặc làm thiếu kiến thức SGK. Báo cáo học thuật khác dùng nhãn FULL/CORE cho cả 10 outcome; NotebookLM phải đối chiếu S1 để quyết định tier cuối cùng cho hai outcome này (S1_TIER_RECONCILIATION_REQUIRED), không tự khẳng định 8+2 là quyết định học thuật cuối.

## Ma trận nội dung mới theo từng outcome

### 01. G10-B03-LINEAR_INEQUALITY — CORE_KEEP

LESSON_ID: G10-SGK-B03
OUTCOME_ID: G10-B03-LINEAR_INEQUALITY
ITEM_ID: THPT-G10-CHII-TRY01
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY01-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B03-01
REMEDIATION_HELP: HELP-G10-B03-02

**PED1 · WHY — Vì sao cần học:** Hai loại sản phẩm cùng dùng chung một nguồn lực, nên ta cần mô tả đồng thời hai số lượng, không chỉ một số.

**PED2 · PRE — Điều phải nhớ trước:** Em đã biết bất phương trình một ẩn và biểu thức bậc nhất; hệ số có thể bằng 0 nhưng không được đồng thời mất cả hai biến.

**PED3 · MEANING — Hình thành bản chất:** Bất phương trình dạng \(ax+by\le c\) (hoặc <, >, ≥) nói rằng mỗi cặp số \((x,y)\) thỏa một điều kiện; nếu \((a,b)=(0,0)\), đó không còn là bất phương trình bậc nhất hai ẩn.

**PED4 · READING_VISUAL:** PED4 N/A: trước khi vẽ miền, outcome này chỉ nhận diện dạng đại số; sử dụng ví dụ đường thẳng ở outcome BOUNDARY.

**PED5 · METHOD — Vì sao chọn phương pháp:** Kiểm tra biến chỉ ở bậc nhất, không có tích \(xy\) hay bình phương, rồi kiểm \((a,b)\ne(0,0)\). Không loại nhầm trường hợp hệ số của một biến bằng 0.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Trong ba biểu thức (a) \(2x-3y<6\); (b) \(xy\le6\); (c) \(0x+0y\le4\), biểu thức nào là bất phương trình bậc nhất hai ẩn? Vì sao?

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** Chỉ (a).

**Giải thích và kiểm điều kiện:** (a) có \((a,b)=(2,-3)\ne(0,0)\) và các biến bậc nhất. (b) có tích \(xy\), không bậc nhất. (c) cả hai hệ số bằng 0, chỉ còn bất đẳng thức hằng.

**D6 · Tự khắc phục sau khi thử:** Nếu chọn (b), nhớ tích hai biến là phi tuyến; nếu chọn (c), soát lại điều kiện \((a,b)\ne(0,0)\). Xem D1 R01 và ví dụ EX-G10-B03-01.

**Đường trở lại:** Đối chiếu EX-G10-B03-01 và HELP-G10-B03-02 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>


### 02. G10-B03-POINT_TEST — CORE_KEEP

LESSON_ID: G10-SGK-B03
OUTCOME_ID: G10-B03-POINT_TEST
ITEM_ID: THPT-G10-CHII-TRY02
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY02-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B03-01
REMEDIATION_HELP: HELP-G10-B03-01

**PED1 · WHY — Vì sao cần học:** Một phương án đã đề xuất chỉ có ích nếu ta kiểm được nó thật sự thỏa điều kiện, kể cả trường hợp vừa đúng mức giới hạn.

**PED2 · PRE — Điều phải nhớ trước:** Biết thay cặp số vào biểu thức hai biến và so sánh số thực; phân biệt \(\le\) với \(<\).

**PED3 · MEANING — Hình thành bản chất:** Một cặp \((x_0,y_0)\) là nghiệm đúng khi bất đẳng thức trở thành mệnh đề đúng sau phép thế; không thể chỉ nhìn hình hoặc xét một tọa độ.

**PED4 · READING_VISUAL:** PED4: Khi đọc hình miền nghiệm, ghép mỗi điểm \((x,y)\) với phép thay tọa độ thực tế vào bất phương trình; điểm trên đường biên phải được xét dấu bằng.

**PED5 · METHOD — Vì sao chọn phương pháp:** Thế đầy đủ cả x và y, tính vế trái rồi so dấu. Với dấu không nghiêm ngặt, kết quả đúng bằng ngưỡng vẫn là nghiệm.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Xét \(x+2y\le6\). Trong \(A(2,2), B(3,2), C(0,0)\), những điểm nào là nghiệm? Điểm nào ở trên biên?

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** A và C là nghiệm; A nằm trên biên, B không là nghiệm.

**Giải thích và kiểm điều kiện:** Tại A: \(2+2\cdot2=6\le6\). Tại B: \(3+2\cdot2=7>6\). Tại C: \(0\le6\). Đường biên là \(x+2y=6\), đi qua A.

**D6 · Tự khắc phục sau khi thử:** Nếu loại A, em đã quên dấu bằng của \(\le\); tự kiểm lại bằng một điểm ngoài biên rồi xem HELP-G10-B03-01.

**Đường trở lại:** Đối chiếu EX-G10-B03-01 và HELP-G10-B03-01 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>


### 03. G10-B03-BOUNDARY — CORE_KEEP

LESSON_ID: G10-SGK-B03
OUTCOME_ID: G10-B03-BOUNDARY
ITEM_ID: THPT-G10-CHII-TRY03
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY03-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B03-02
REMEDIATION_HELP: HELP-G10-B03-02

**PED1 · WHY — Vì sao cần học:** Một kế hoạch "ít hơn 6" khác "không quá 6" đúng ở những trường hợp bằng 6; đường biên quyết định chuyện có nhận giới hạn hay không.

**PED2 · PRE — Điều phải nhớ trước:** Biết vẽ đường thẳng từ phương trình bậc nhất hai ẩn và hiểu dấu bằng.

**PED3 · MEANING — Hình thành bản chất:** Đường biên \(ax+by=c\) là tập điểm đạt đúng ngưỡng. Miền nghiêm ngặt \(<,>\) không nhận biên; miền \(\le,\ge\) nhận biên.

**PED4 · READING_VISUAL:** PED4: Đường thẳng \(3x+y=6\) chia mặt phẳng thành hai phía; dấu \(<\) loại chính đường thẳng này. Trên FIG-G10-B03-01 hãy phân biệt đường biên với phần tô.

**PED5 · METHOD — Vì sao chọn phương pháp:** Thay dấu bất phương trình bằng dấu bằng để tìm biên, kiểm dấu nghiêm ngặt để chọn nét đứt và một điểm kiểm tra xác định phía.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Với \(3x+y<6\), đường biên là đường nào? Vẽ nét liền hay đứt? Điểm \((2,0)\) có được tính là nghiệm không?

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** Biên \(3x+y=6\), vẽ nét đứt; \((2,0)\) không là nghiệm.

**Giải thích và kiểm điều kiện:** Tại \((2,0)\), \(3\cdot2+0=6\), không thỏa \(<6\). Vì bất phương trình nghiêm ngặt nên không nhận điểm nằm trên biên.

**D6 · Tự khắc phục sau khi thử:** Nếu chọn nét liền, em đã nhầm dấu nghiêm ngặt với dấu có bằng; xem HELP-G10-B03-02 và FIG-G10-B03-01.

**Đường trở lại:** Đối chiếu EX-G10-B03-02 và HELP-G10-B03-02 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>


### 04. G10-B03-HALFPLANE — CORE_KEEP

LESSON_ID: G10-SGK-B03
OUTCOME_ID: G10-B03-HALFPLANE
ITEM_ID: THPT-G10-CHII-TRY04
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY04-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B03-02
REMEDIATION_HELP: HELP-G10-B03-02

**PED1 · WHY — Vì sao cần học:** Chỉ tìm được đường biên chưa đủ để chọn khu vực nghiệm: một đường thẳng có hai phía, nhưng điều kiện chỉ nhận một phía.

**PED2 · PRE — Điều phải nhớ trước:** Biết phép biến đổi bất phương trình một ẩn và khi chia cho số âm phải đổi chiều.

**PED3 · MEANING — Hình thành bản chất:** Mỗi phía đường biên cho một dấu của \(ax+by-c\). Một điểm không nằm trên biên giúp xác định phía nào là nghiệm.

**PED4 · READING_VISUAL:** PED4: Tưởng tượng đường \(y=3x-3\) là ranh giới; điểm \((0,0)\) nằm phía trên đường. Đường đứt vì dấu \(>\). Đối chiếu FIG-G10-B03-01.

**PED5 · METHOD — Vì sao chọn phương pháp:** Có thể đổi về \(y>mx+b\) để nhìn phía, nhưng phải đảo dấu khi nhân/chia số âm; luôn thế lại một điểm để kiểm.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Biến đổi \(3x-y<3\) về điều kiện theo y. Đường biên có lấy hay không? \(O(0,0)\) thuộc phía nghiệm chứ?

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** \(y>3x-3\); không lấy biên; O là nghiệm.

**Giải thích và kiểm điều kiện:** \(3x-y<3\iff-y<3-3x\iff y>3x-3\). Thế O: \(0<3\) đúng, O ở phía nghiệm. Biên \(3x-y=3\) không được lấy.

**D6 · Tự khắc phục sau khi thử:** Nếu nhận \(y<3x-3\), em đã không đảo dấu khi chia -1. Xem HELP-G10-B03-02.

**Đường trở lại:** Đối chiếu EX-G10-B03-02 và HELP-G10-B03-02 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>


### 05. G10-B03-MODELING — SUPPORT_ONLY

LESSON_ID: G10-SGK-B03
OUTCOME_ID: G10-B03-MODELING
ITEM_ID: THPT-G10-CHII-TRY05
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY05-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B03-03
REMEDIATION_HELP: HELP-G10-B03-01

**PED1 · WHY — Vì sao cần học:** Muốn biết một lịch sản xuất khả thi không, ta phải chuyển ngôn ngữ "giới hạn thời gian" thành một điều kiện tính toán được.

**PED2 · PRE — Điều phải nhớ trước:** Biết tổng thời gian của nhiều công việc, bất đẳng thức \(\le\), và hiểu số sản phẩm là số nguyên không âm khi đếm chiếc.

**PED3 · MEANING — Hình thành bản chất:** Biến x,y đại diện số lượng, mỗi hệ số mang đơn vị phút/sản phẩm; tổng thời gian không vượt thời lượng, nên dấu \(\le\) mô tả đúng.

**PED4 · READING_VISUAL:** PED4 N/A ở bước lập biến; bảng đơn vị và thử cặp số thay cho hình phẳng. Nếu vẽ, phải nêu hai trục đại diện số lượng A/B.

**PED5 · METHOD — Vì sao chọn phương pháp:** Đặt biến và đơn vị trước khi lập công thức; viết rõ \(x,y\in\mathbb Z_{\ge0}\) **chỉ khi** thực tế là số sản phẩm rời rạc. Khi là đại lượng liên tục, không ép điều kiện nguyên.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Hai công việc A và B cần tương ứng 4 phút và 6 phút mỗi sản phẩm, tổng thời gian không quá 120 phút. Gọi x,y là số sản phẩm. Viết điều kiện và kiểm cặp \((10,10)\).

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** \(4x+6y\le120\), \(x,y\in\mathbb Z_{\ge0}\); cặp (10,10) hợp lệ.

**Giải thích và kiểm điều kiện:** Tổng thời gian là \(4x+6y\) phút. \(4\cdot10+6\cdot10=100\le120\). x,y nguyên không âm vì đếm sản phẩm.

**D6 · Tự khắc phục sau khi thử:** Nếu viết \(4x+6y=120\), em đã biến "không quá" thành "bằng đúng". Đọc lại đơn vị và soát phép thế; liên hệ ví dụ EX-G10-B03-03.

**Đường trở lại:** Đối chiếu EX-G10-B03-03 và HELP-G10-B03-01 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>


### 06. G10-B04-SYSTEM — CORE_KEEP

LESSON_ID: G10-SGK-B04
OUTCOME_ID: G10-B04-SYSTEM
ITEM_ID: THPT-G10-CHII-TRY06
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY06-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B04-01
REMEDIATION_HELP: HELP-G10-B04-01

**PED1 · WHY — Vì sao cần học:** Một phương án có thể đạt ngân sách nhưng vi phạm diện tích hoặc giờ làm; "đạt một điều kiện" không có nghĩa "đạt kế hoạch".

**PED2 · PRE — Điều phải nhớ trước:** Đã học kiểm một điểm với một bất phương trình và phép giao tập hợp ở Chương I.

**PED3 · MEANING — Hình thành bản chất:** Hệ bất phương trình đặt nhiều điều kiện đồng thời. Tập nghiệm hệ là **giao** các tập nghiệm từng điều kiện, không phải hợp.

**PED4 · READING_VISUAL:** PED4: Khi nhiều điều kiện biểu diễn bằng các nửa mặt phẳng, chỉ phần nằm đồng thời trong tất cả các miền mới là nghiệm hệ; hình dùng chung FIG-G10-B04-01.

**PED5 · METHOD — Vì sao chọn phương pháp:** Thế tọa độ vào từng bất phương trình, chỉ giữ cặp làm tất cả đúng. Không dừng ở hàng đầu tiên đúng.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Xét hệ \(x\ge1,\ y\ge0,\ x+y\le5\). \((2,3)\) và \((0,4)\) có là nghiệm hệ không? Vì sao?

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** (2,3) là nghiệm; (0,4) không.

**Giải thích và kiểm điều kiện:** (2,3) có \(2\ge1,3\ge0,2+3=5\le5\), tất cả đúng. (0,4) vi phạm \(x\ge1\), dù hai điều kiện còn lại đúng.

**D6 · Tự khắc phục sau khi thử:** Nếu giữ (0,4), em đã lấy "hoặc" thay cho "và". Xem HELP-G10-B04-01.

**Đường trở lại:** Đối chiếu EX-G10-B04-01 và HELP-G10-B04-01 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>


### 07. G10-B04-REGION_INTERSECTION — CORE_KEEP

LESSON_ID: G10-SGK-B04
OUTCOME_ID: G10-B04-REGION_INTERSECTION
ITEM_ID: THPT-G10-CHII-TRY07
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY07-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B04-01
REMEDIATION_HELP: HELP-G10-B04-01

**PED1 · WHY — Vì sao cần học:** Khi cả ba giới hạn cùng tác động, cần nhìn được tập hợp toàn bộ phương án hợp lệ, không chỉ thử từng phương án.

**PED2 · PRE — Điều phải nhớ trước:** Biết trục tọa độ, phương trình đường thẳng, nửa mặt phẳng nghiệm và giao của các tập hợp.

**PED3 · MEANING — Hình thành bản chất:** Giao của \(x\ge0, y\ge0, x+2y\le6\) là một tam giác kín trong góc phần tư thứ nhất; các đỉnh được tạo từ giao điểm của các đường biên.

**PED4 · READING_VISUAL:** PED4: Trên FIG-G10-B04-01 xác định từng đường biên, các giao điểm đỉnh, rồi chỉ giữ phần cùng nằm trong ba nửa mặt phẳng. Phân biệt hình tam giác kín với các miền riêng.

**PED5 · METHOD — Vì sao chọn phương pháp:** Vẽ ba đường biên, quyết định phía đúng cho mỗi bất phương trình, tìm giao và đỉnh bằng giải hệ hai phương trình. Đừng mặc định miền nào cũng là đa giác bị chặn.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Hệ \(x\ge0,\ y\ge0,\ x+2y\le6\) có các đỉnh miền nghiệm nào? Có nhận các cạnh không?

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** \((0,0),(6,0),(0,3)\); các cạnh đều thuộc miền nghiệm.

**Giải thích và kiểm điều kiện:** Giao \(x=0,y=0\) cho (0,0); \(y=0,x+2y=6\) cho (6,0); \(x=0,x+2y=6\) cho (0,3). Dấu \(\ge,\le\) đều có bằng.

**D6 · Tự khắc phục sau khi thử:** Nếu thấy hình có cả phần bên ngoài, em đã lấy hợp thay giao. Nếu bỏ cạnh, em đã bỏ mất dấu bằng. Xem HELP-G10-B04-01 và FIG-G10-B04-01.

**Đường trở lại:** Đối chiếu EX-G10-B04-01 và HELP-G10-B04-01 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>


### 08. G10-B04-FEASIBILITY — CORE_KEEP

LESSON_ID: G10-SGK-B04
OUTCOME_ID: G10-B04-FEASIBILITY
ITEM_ID: THPT-G10-CHII-TRY08
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY08-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B04-02
REMEDIATION_HELP: HELP-G10-B04-01

**PED1 · WHY — Vì sao cần học:** Trước khi tìm phương án tối ưu phải biết có phương án nào thỏa tất cả điều kiện hay không.

**PED2 · PRE — Điều phải nhớ trước:** Biết so sánh \(x+y\) với x khi \(y\ge0\); biết nghiệm hệ là giao các điều kiện.

**PED3 · MEANING — Hình thành bản chất:** Miền khả thi rỗng khi các ràng buộc mâu thuẫn, dù từng bất phương trình riêng lẻ có nhiều nghiệm. Miền không rỗng có thể bị chặn hoặc không bị chặn.

**PED4 · READING_VISUAL:** PED4: Một miền rỗng không có điểm giao; nếu vẽ x≥3 trong góc phần tư thứ nhất và x+y≤2, hai miền không chồng nhau.

**PED5 · METHOD — Vì sao chọn phương pháp:** Tìm mâu thuẫn ngắn gọn trong các điều kiện trước khi vẽ hay tối ưu; không mặc định cứ có các đường thẳng là có đa giác nghiệm.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Hệ \(x\ge3,\ y\ge0,\ x+y\le2\) có nghiệm không? Giải thích mà không cần vẽ đồ thị.

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** Không có nghiệm.

**Giải thích và kiểm điều kiện:** Từ \(x\ge3\) và \(y\ge0\) suy \(x+y\ge3\); điều này mâu thuẫn với \(x+y\le2\).

**D6 · Tự khắc phục sau khi thử:** Nếu nghĩ có nghiệm, thử dùng một cặp x≥3,y≥0 sẽ thấy tổng luôn ≥3; đọc HELP-G10-B04-01.

**Đường trở lại:** Đối chiếu EX-G10-B04-02 và HELP-G10-B04-01 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>


### 09. G10-B04-LINEAR_OBJECTIVE — CORE_KEEP

LESSON_ID: G10-SGK-B04
OUTCOME_ID: G10-B04-LINEAR_OBJECTIVE
ITEM_ID: THPT-G10-CHII-TRY09
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY09-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B04-02
REMEDIATION_HELP: HELP-G10-B04-02

**PED1 · WHY — Vì sao cần học:** Có nhiều phương án thỏa ràng buộc, nhưng nếu cần kết quả cao nhất ta phải chọn trong **miền hợp lệ**, không chọn giá trị lớn tùy ý.

**PED2 · PRE — Điều phải nhớ trước:** Biết tính biểu thức \(F(x,y)\) tại một điểm và đọc đỉnh đa giác khả thi.

**PED3 · MEANING — Hình thành bản chất:** Trên một đa giác kín, bị chặn, không rỗng, hàm mục tiêu tuyến tính đạt giá trị lớn/nhỏ ở ít nhất một đỉnh; đôi khi cả một cạnh cùng tối ưu.

**PED4 · READING_VISUAL:** PED4: Tam giác \(x\ge0,y\ge0,2x+y\le6\) có các đỉnh \((0,0),(3,0),(0,6)\); đánh dấu từng đỉnh trước khi so hàm mục tiêu.

**PED5 · METHOD — Vì sao chọn phương pháp:** Trước hết xác nhận miền là đa giác kín bị chặn; tính F tại **mọi** đỉnh rồi so. Với miền rỗng/không bị chặn phải xét riêng, không áp máy móc quy tắc đỉnh.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Tam giác nghiệm của \(x\ge0,y\ge0,2x+y\le6\) có các đỉnh \((0,0),(3,0),(0,6)\). Tính \(F=x+2y\) tại các đỉnh và chọn giá trị lớn nhất.

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** \(F_{\max}=12\) tại (0,6).

**Giải thích và kiểm điều kiện:** \(F(0,0)=0; F(3,0)=3; F(0,6)=12\). Đỉnh (0,6) thỏa điều kiện biên \(2\cdot0+6=6\).

**D6 · Tự khắc phục sau khi thử:** Nếu chọn (3,0), em đã so vị trí trên trục x thay vì giá trị F; xem HELP-G10-B04-02.

**Đường trở lại:** Đối chiếu EX-G10-B04-02 và HELP-G10-B04-02 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>


### 10. G10-B04-INTEGER_MODELS — SUPPORT_ONLY

LESSON_ID: G10-SGK-B04
OUTCOME_ID: G10-B04-INTEGER_MODELS
ITEM_ID: THPT-G10-CHII-TRY10
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHII-TRY10-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REUSE_EXAMPLE: EX-G10-B04-03
REMEDIATION_HELP: HELP-G10-B04-02

**PED1 · WHY — Vì sao cần học:** Máy móc làm tròn 2,33 sản phẩm lên 2 hoặc 3 có thể làm phương án vi phạm ngân sách; bài toán đếm phải kiểm điều kiện nguyên.

**PED2 · PRE — Điều phải nhớ trước:** Biết phân số và số nguyên không âm; biết thay cặp điểm vào hai bất phương trình.

**PED3 · MEANING — Hình thành bản chất:** Đỉnh tối ưu liên tục có thể có tọa độ phân số, nhưng phương án sản xuất chỉ khả thi khi \(x,y\in\mathbb Z_{\ge0}\); không được xem nghiệm liên tục là lời giải bài toán nguyên.

**PED4 · READING_VISUAL:** PED4: Miền liên tục gồm các điểm trên mặt phẳng, còn bài toán đếm sản phẩm chỉ nhận điểm lưới có cả hai tọa độ nguyên; không suy đáp án từ một điểm lẻ trên cạnh.

**PED5 · METHOD — Vì sao chọn phương pháp:** Kiểm điều kiện nguyên **trước** khi tính mục tiêu; liệt kê một số điểm nguyên hợp lệ và so F. Không kết luận cực trị toàn cục chỉ từ hai điểm nếu chưa chứng minh.

**PED6 · FIRST_TRY — Tự làm trước Core (đừng mở đáp án ngay):** Cho \(x+2y\le7, 2x+y\le7, x,y\in\mathbb Z_{\ge0}\), xét \(F=3x+2y\). Điểm \((7/3,7/3)\) có là phương án hợp lệ không? So F tại hai điểm (2,2) và (3,1).

<details><summary>Tôi đã tự thử — mở đáp án và suy luận để đối chiếu</summary>

**Đáp án canonical:** \((7/3,7/3)\) không hợp lệ vì không nguyên; (2,2) và (3,1) đều hợp lệ, F tương ứng 10 và 11 nên (3,1) tốt hơn trong hai điểm.

**Giải thích và kiểm điều kiện:** \(7/3+2(7/3)=7\) và \(2(7/3)+7/3=7\), nhưng \(7/3\notin\mathbb Z\). Với (2,2): ràng buộc bằng 6 và 6, F=10. Với (3,1): ràng buộc bằng 5 và 7, F=11. Chưa khẳng định đây là tối ưu toàn cục.

**D6 · Tự khắc phục sau khi thử:** Nếu nhận (7/3,7/3), em chỉ kiểm bất phương trình mà quên điều kiện nguyên; nếu kết luận (3,1) tối ưu toàn cục từ hai điểm, hãy xem lại HELP-G10-B04-02.

**Đường trở lại:** Đối chiếu EX-G10-B04-03 và HELP-G10-B04-02 trong R01 đã khóa, rồi mới làm Core/Practice.

</details>

## Giới hạn học liệu và Q15/Q16/Q18

- 10 câu Tự thử mới, 10 item_id mới, một bản đáp án/lời giải trong cùng learning source; không dùng các câu R01 hoặc 14 câu tự kiểm tra cuối chương làm thử nghiệm "độc lập".
- Không thêm nguồn RD1 riêng tư, không tự chấm, không lưu Skill Mastery, không lộ đề kín. Nội dung FIRST_TRY có đáp án chủ động mở sau khi người học thử; đây là Practice/Diagnostic, không phải Final Submit độc lập.
- Về hình: sử dụng hình nguồn R01 FIG-G10-B03-01 và FIG-G10-B04-01, giải thích phương pháp đọc; không nhân bản SVG hay thay đổi tọa độ nguồn.
- R02 là thay đổi đáng kể về tiến trình sư phạm (DELTA_C_ACADEMIC_MATERIAL), cần NotebookLM Academic/PED phản biện độc lập đúng phần ảnh hưởng. Không tự nâng PASS R01 thành PASS R02; khi review xong mới xét nguồn hợp nhất ChII và handoff V2.
