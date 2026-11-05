# Temp — G10 SGK Chương VII B19–B22: bổ sung lộ trình tự học PED1–PED6 (AUTHORING DRAFT)

PACKET_ID: G10-SGK-CHVII-PED-R01-23OUT-20261105
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: PED_BRIDGE_DELTA_C_FOR_EXISTING_FORMATIVE_SOURCE
SOURCE_S1: SGK_TOAN10_KNTT_TAP_HAI_CHVII_PP29_58; SBT_TOAN10_TAP_HAI_PP27_49
S1_EVIDENCE: EXISTING_INDEPENDENT_SOURCE_RECEIPTS_20261028; NOT_NEW_DIRECT_PDF_SCAN
EXISTING_BANK: 32_CORE_PRACTICE_PLUS_4_SHARED_WRITTEN_UNCHANGED
PUBLIC_FIRST_TRY: UNSCORED_NO_MASTERY
PRIVACY: NO_PRIVATE_RD1_STEMS_KEYS_RUBRICS
ACADEMIC_VERDICT_NEW: PENDING_NOTEBOOKLM
PED_VERDICT_NEW: PENDING_NOTEBOOKLM
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## Ý đồ học thuật và phạm vi

Học liệu đã có của ChVII gồm bốn bài kiến thức/ ví dụ/ 32 Core–Practice/Application, bốn Written, ba SVG và tám D6 HELP đã được phản biện trong các snapshot lịch sử. Điểm cần bổ sung là dẫn dắt từ ý nghĩa hình học **trước khi nêu công thức**, gợi lại tiền đề và để học sinh **Tự thử một bước nhỏ trước Core**. Mỗi câu mới dưới đây là formative riêng, không phải kỳ kiểm tra độc lập và không tạo chứng cứ Mastery; câu/đáp án/rubric cũ không thay đổi. Chỉ yêu cầu NotebookLM review khi bản chương đủ 23 outcomes, không gửi từng bài rời rạc. Phạm vi trang in dùng đúng receipt S1 đã có, không tự suy đoán số trang PDF.

## Phần 1 — B19/B20: vì sao cần học → bản chất → Tự thử → đường khắc phục

### G10-B19-NORMAL_DIRECTION — Pháp tuyến và chỉ phương

**PED1 — Vì sao cần học:** Khi mô tả một tuyến đường bằng tọa độ, chỉ biết một điểm chưa đủ: cần biết đường đi hướng nào. Vectơ chỉ phương chỉ hướng chuyển động; vectơ pháp tuyến cho biết hướng vuông góc để lập phương trình.

**PED2 — Kiến thức tiền đề:** Nhắc lại vectơ tọa độ và tích vô hướng: (a,b)·(c,d)=ac+bd; hai vectơ khác 0 vuông góc khi tích vô hướng bằng 0.

**PED3 — Bản chất trước công thức:** Vectơ chỉ phương nằm dọc đường; pháp tuyến vuông góc đường. Cùng một đường thẳng có vô số vectơ cùng phương hoặc pháp tuyến khác nhau bởi bội khác 0.

**PED4 — Hướng dẫn đọc hình:** Hãy tưởng tượng một mũi tên chạy dọc đường thẳng và một mũi tên dựng vuông góc với nó; chỉ ra trên hình cái nào giữ hướng, cái nào đo độ lệch khỏi đường.

**PED5 — Chọn phương pháp và giới hạn:** Muốn đổi giữa hai loại vectơ, xoay tọa độ 90 độ: n=(a,b) khác 0 thì u=(-b,a). Kiểm tra n·u=0, không dùng vectơ (0,0).

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY01`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B19-NORMAL_DIRECTION`): Cho n=(2,3) là pháp tuyến của d. Vectơ u=(-3,2) có phải một chỉ phương của d không? Nêu phép kiểm.

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** Có, vì n·u=2(-3)+3(2)=0 và u≠(0,0).

**Lý do:** Tích vô hướng bằng 0 chứng minh u vuông góc với pháp tuyến n, tức song song với đường thẳng d; u không phải vectơ không.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY01` bên dưới; quay lại câu canonical cũ `THPT-G10-B19-C01` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY01 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu dùng n làm chỉ phương, em đang nhầm hai vai trò vuông góc.
2. **Quay lại bản chất:** Vectơ chỉ phương nằm dọc đường; pháp tuyến vuông góc đường. Cùng một đường thẳng có vô số vectơ cùng phương hoặc pháp tuyến khác nhau bởi bội khác 0.
3. **Tự sửa:** Vẽ hai mũi tên dọc/vuông góc; tính lại 2(-3)+3(2) trước khi áp dụng.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B19-C01` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B19-GENERAL_POINT — Phương trình tổng quát qua điểm

**PED1 — Vì sao cần học:** Cần một quy tắc để xác định mọi điểm trên đường thẳng, không chỉ liệt kê một vài điểm.

**PED2 — Kiến thức tiền đề:** Ôn quy tắc hai vectơ vuông góc khi tích vô hướng bằng 0; tọa độ của AM là (x-xA,y-yA).

**PED3 — Bản chất trước công thức:** M thuộc đường qua A có pháp tuyến n khi độ dịch chuyển AM không có thành phần theo n: n·AM=0. Đây là nguồn gốc phương trình, không phải một công thức học thuộc.

**PED4 — Hướng dẫn đọc hình:** Hướng dẫn đọc đường qua A: M chạy dọc đường, còn n luôn dựng vuông góc; hình chiếu của AM lên n bằng 0.

**PED5 — Chọn phương pháp và giới hạn:** Từ điểm A(x0,y0), n=(a,b)≠0, viết a(x-x0)+b(y-y0)=0 rồi khai triển. Kiểm lại điểm A và độ dài pháp tuyến khác 0.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY02`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B19-GENERAL_POINT`): Đường thẳng qua A(1,3), pháp tuyến n=(2,-1) có phương trình tổng quát nào?

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** 2(x-1)-(y-3)=0 hay 2x-y+1=0.

**Lý do:** AM=(x-1,y-3), n·AM=2(x-1)-(y-3); thế A được 0. Không tự đảo vai trò n với vectơ chỉ phương.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY02` bên dưới; quay lại câu canonical cũ `THPT-G10-B19-C02` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY02 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu phương trình không đi qua A, em đã mất dấu khi trừ tọa độ gốc.
2. **Quay lại bản chất:** M thuộc đường qua A có pháp tuyến n khi độ dịch chuyển AM không có thành phần theo n: n·AM=0. Đây là nguồn gốc phương trình, không phải một công thức học thuộc.
3. **Tự sửa:** Thay ngay A(1,3) vào phương trình: phải được 0 trước khi luyện tiếp.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B19-C02` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B19-PARAMETRIC — Phương trình tham số

**PED1 — Vì sao cần học:** Khi mô tả chuyển động trên một tuyến đường, có lúc cần biết điểm đến ứng với một bước t cụ thể.

**PED2 — Kiến thức tiền đề:** Ôn phép nhân số thực với vectơ; A+t·u là vị trí dọc hướng u tính từ A.

**PED3 — Bản chất trước công thức:** Điểm trên đường thẳng có dạng M=A+t·u với t thực. Tham số t không nhất thiết là thời gian; nó chỉ là hệ số quét các vị trí.

**PED4 — Hướng dẫn đọc hình:** Tưởng tượng trượt từ A theo mũi tên u: t=0 đứng ở A, t=1 tiến một u, t âm đi ngược chiều.

**PED5 — Chọn phương pháp và giới hạn:** Chọn một điểm A và một vectơ chỉ phương u≠0, đặt x=xA+tux, y=yA+tuy. Kiểm t=0 và t=1, tránh nhầm t là một tọa độ.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY03`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B19-PARAMETRIC`): Viết phương trình tham số đường thẳng qua A(1,-1), chỉ phương u=(-2,3).

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** x=1-2t, y=-1+3t (t∈ℝ).

**Lý do:** Khi t=0 thu A; khi t=1 thu A+u=(-1,2). Mọi điểm thuộc đường có độ dời t·u.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY03` bên dưới; quay lại câu canonical cũ `THPT-G10-B19-P01` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY03 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu đảo u thành pháp tuyến hoặc thiếu tham số chung t, hai phương trình không mô tả đúng một đường.
2. **Quay lại bản chất:** Điểm trên đường thẳng có dạng M=A+t·u với t thực. Tham số t không nhất thiết là thời gian; nó chỉ là hệ số quét các vị trí.
3. **Tự sửa:** Thử lại t=0, t=1 và vẽ đường nối hai điểm thu được.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B19-P01` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B19-TWO_POINTS — Đường qua hai điểm phân biệt

**PED1 — Vì sao cần học:** Trên bản đồ, hai địa điểm khác nhau đủ xác định một tuyến đường thẳng duy nhất.

**PED2 — Kiến thức tiền đề:** Ôn vectơ AB=(xB-xA,yB-yA), điều kiện A≠B, và pháp tuyến vuông góc với AB.

**PED3 — Bản chất trước công thức:** Hai điểm phân biệt xác định một hướng AB không bằng 0; từ đó chọn được pháp tuyến và viết được phương trình.

**PED4 — Hướng dẫn đọc hình:** Đặt A và B trên hình; chỉ vectơ AB chạy dọc đường, còn pháp tuyến dựng ngang với nó.

**PED5 — Chọn phương pháp và giới hạn:** Kiểm A≠B, tính AB, chọn n vuông góc, viết n·AM=0 và thử cả A,B. Nếu A=B thì dữ kiện không xác định một đường duy nhất.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY04`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B19-TWO_POINTS`): Cho A(-1,2), B(2,5). Viết một phương trình tổng quát của đường AB.

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** x-y+3=0.

**Lý do:** AB=(3,3)≠0, chọn n=(1,-1). Qua A: (x+1)-(y-2)=0 ⇒ x-y+3=0; thế B: 2-5+3=0.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY04` bên dưới; quay lại câu canonical cũ `THPT-G10-B19-P02` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY04 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu lấy AB làm pháp tuyến, đường mới thường vuông góc với AB thay vì đi qua cả A,B.
2. **Quay lại bản chất:** Hai điểm phân biệt xác định một hướng AB không bằng 0; từ đó chọn được pháp tuyến và viết được phương trình.
3. **Tự sửa:** Vẽ đoạn AB, kiểm n·AB=0 và thế từng điểm vào phương trình.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B19-P02` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B19-MEMBERSHIP — Điểm thuộc đường thẳng

**PED1 — Vì sao cần học:** Muốn biết một vị trí thực tế có nằm trên tuyến đường đã cho không, ta cần phép kiểm nhanh và chắc chắn.

**PED2 — Kiến thức tiền đề:** Ôn thay tọa độ điểm vào biểu thức ax+by+c; điểm trên đường phải làm vế trái bằng 0.

**PED3 — Bản chất trước công thức:** Phương trình đường thẳng là điều kiện ràng buộc tọa độ; 'thuộc' không dựa vào nhìn gần đúng mà là thỏa chính xác điều kiện.

**PED4 — Hướng dẫn đọc hình:** Với hai điểm trên mặt phẳng, thử điểm được đánh dấu trên đường và điểm lệch đường; khoảng cách thị giác chỉ gợi ý, phép thế quyết định.

**PED5 — Chọn phương pháp và giới hạn:** Thế (xM,yM) vào ax+by+c; bằng 0 thì M thuộc, khác 0 thì không. Không chia hay chuyển vế làm mất dấu.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY05`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B19-MEMBERSHIP`): Với d: 2x-3y+1=0, M(1,1) và N(2,1) điểm nào thuộc d?

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** M thuộc d vì 2-3+1=0; N không thuộc vì 4-3+1=2.

**Lý do:** Điểm thuộc là nghiệm của phương trình theo cặp tọa độ. Đây là phép thử hai lần độc lập.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY05` bên dưới; quay lại câu canonical cũ `THPT-G10-B19-P03` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY05 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu chỉ nhìn số hạng đầu hoặc bỏ dấu âm của 3y, phép thử có thể sai.
2. **Quay lại bản chất:** Phương trình đường thẳng là điều kiện ràng buộc tọa độ; 'thuộc' không dựa vào nhìn gần đúng mà là thỏa chính xác điều kiện.
3. **Tự sửa:** Lập hai dòng thay tọa độ từng điểm, so với 0 trước khi kết luận.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B19-P03` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B19-MULTISTEP — Giao điểm và quan hệ vuông góc

**PED1 — Vì sao cần học:** Khi hai tuyến đường cắt nhau, cần biết điểm gặp nhau và góc giữa chúng; hai yêu cầu phải được kiểm bằng hai cách khác nhau.

**PED2 — Kiến thức tiền đề:** Ôn giải hệ hai phương trình bậc nhất và tích vô hướng của hai pháp tuyến.

**PED3 — Bản chất trước công thức:** Giao điểm phải thỏa đồng thời hai phương trình; vuông góc là quan hệ hướng, không phụ thuộc vị trí giao.

**PED4 — Hướng dẫn đọc hình:** Vẽ hai đường cắt nhau và đánh dấu giao điểm; phân biệt tính giao điểm và kiểm góc vuông của hai hướng.

**PED5 — Chọn phương pháp và giới hạn:** Giải hệ trước để có tọa độ giao; kiểm bằng cách thế lại cả hai. Sau đó dùng tích vô hướng hai pháp tuyến để kết luận vuông góc.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY06`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B19-MULTISTEP`): Hai đường d1: x+y=4, d2: x-y=2 gặp nhau ở đâu và có vuông góc không?

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** Giao I(3,1); hai đường vuông góc.

**Lý do:** Cộng hai phương trình được 2x=6 ⇒ x=3, y=1. Pháp tuyến (1,1) và (1,-1) có tích vô hướng 1-1=0.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY06` bên dưới; quay lại câu canonical cũ `THPT-G10-B19-P06` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY06 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu chỉ giải được giao điểm mà suy ra vuông góc, em đã đánh đồng vị trí với góc.
2. **Quay lại bản chất:** Giao điểm phải thỏa đồng thời hai phương trình; vuông góc là quan hệ hướng, không phụ thuộc vị trí giao.
3. **Tự sửa:** Tách làm hai cột: 'I thỏa hai phương trình' và 'n1·n2=0' rồi kiểm riêng.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B19-P06` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B19-LINEAR_MODEL — Mô hình tuyến tính từ dữ liệu

**PED1 — Vì sao cần học:** Hai quan sát có thể giúp ước lượng một xu hướng tuyến tính đơn giản, chẳng hạn giá trị tăng đều theo thời gian.

**PED2 — Kiến thức tiền đề:** Nhắc lại đường thẳng qua hai điểm và hệ số góc là mức thay đổi Δy/Δx khi Δx≠0.

**PED3 — Bản chất trước công thức:** Một quan hệ y=mx+b mô tả mỗi khi x tăng một đơn vị, y tăng m đơn vị; b là giá trị tại x=0. Mô hình chỉ đáng tin trong miền dữ liệu phù hợp.

**PED4 — Hướng dẫn đọc hình:** Trên hệ trục có hai chấm dữ liệu, giải thích m là 'độ tăng đứng / độ tăng ngang'; cần ghi đơn vị trên cả hai trục.

**PED5 — Chọn phương pháp và giới hạn:** Tính m=(y2-y1)/(x2-x1) khi x2≠x1; thay một điểm để tìm b, sau đó kiểm điểm còn lại và ghi miền ứng dụng.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY07`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B19-LINEAR_MODEL`): Giá trị V theo thời gian t (t≥0) đi qua (0,5) và (2,9), giả sử tuyến tính. Lập V(t) và tính V(3).

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** V(t)=2t+5, V(3)=11.

**Lý do:** Hệ số góc (9-5)/(2-0)=2, giá trị tại t=0 là 5. Đây là phép ngoại suy t=3, chỉ hợp lý nếu giả thiết tăng đều vẫn đúng.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY07` bên dưới; quay lại câu canonical cũ `THPT-G10-B19-P04` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY07 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu viết V=5t+2, em đã nhầm hệ số góc với giá trị ban đầu.
2. **Quay lại bản chất:** Một quan hệ y=mx+b mô tả mỗi khi x tăng một đơn vị, y tăng m đơn vị; b là giá trị tại x=0. Mô hình chỉ đáng tin trong miền dữ liệu phù hợp.
3. **Tự sửa:** Kiểm cả V(0)=5 và V(2)=9 trước khi tính V(3).
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B19-P04` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B20-RELATIVE_POSITION — Song song, trùng, cắt

**PED1 — Vì sao cần học:** Hai con đường có cùng hướng chưa chắc là cùng một đường; xác định vị trí tương đối cần xét cả nơi chúng đi qua.

**PED2 — Kiến thức tiền đề:** Ôn pháp tuyến của ax+by+c=0; khi hai cặp pháp tuyến tỉ lệ, hai đường có cùng hướng.

**PED3 — Bản chất trước công thức:** Định thức a1b2-a2b1 khác 0 thì hai đường cắt nhau. Bằng 0 chỉ nói cùng hướng: xét thêm c để phân biệt song song khác nhau và trùng nhau.

**PED4 — Hướng dẫn đọc hình:** Đặt cạnh nhau ba hình cắt, song song phân biệt, trùng; hai hình sau có cùng hướng nhưng khác vị trí.

**PED5 — Chọn phương pháp và giới hạn:** Kiểm pháp tuyến khác 0; kiểm định thức; nếu bằng 0, so sánh đủ bộ ba hệ số, tránh chia cho hệ số 0.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY08`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B20-RELATIVE_POSITION`): d1: 2x-y+1=0, d2: 4x-2y+3=0 là song song phân biệt hay trùng nhau?

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** Song song phân biệt.

**Lý do:** Hai pháp tuyến (2,-1) và (4,-2) tỉ lệ 2 lần, nhưng nhân toàn phương trình d1 với 2 cho hằng số 2, không phải 3 của d2.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY08` bên dưới; quay lại câu canonical cũ `THPT-G10-B20-C01` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY08 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu kết luận trùng ngay khi pháp tuyến tỉ lệ, em đã bỏ quên hệ số tự do.
2. **Quay lại bản chất:** Định thức a1b2-a2b1 khác 0 thì hai đường cắt nhau. Bằng 0 chỉ nói cùng hướng: xét thêm c để phân biệt song song khác nhau và trùng nhau.
3. **Tự sửa:** Nhân hẳn d1 với hệ số 2 rồi đối chiếu cả ba hệ số của d2.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B20-C01` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B20-PERPENDICULAR — Đường thẳng vuông góc qua điểm

**PED1 — Vì sao cần học:** Khi dựng một lối đi cắt tuyến đường cũ theo góc vuông, ta phải kiểm cả hướng lẫn vị trí đi qua điểm đã cho.

**PED2 — Kiến thức tiền đề:** Ôn pháp tuyến của đường thẳng và điều kiện hai pháp tuyến vuông góc khi tích vô hướng bằng 0.

**PED3 — Bản chất trước công thức:** Nếu hai đường vuông góc thì hai pháp tuyến của chúng cũng vuông góc (đều bị quay cùng 90 độ so với đường). Điểm quyết định tịnh tiến đường mới.

**PED4 — Hướng dẫn đọc hình:** Vẽ đường d và đường qua P vuông góc với d; chỉ ra vì sao đường qua P có thể di chuyển song song mà vẫn vuông góc.

**PED5 — Chọn phương pháp và giới hạn:** Chọn n' vuông góc với n của d, rồi dùng n'·PM=0; kiểm P thuộc đường mới và n·n'=0.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY09`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B20-PERPENDICULAR`): Qua P(1,-2) viết đường vuông góc với d: x+2y-5=0.

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** 2x-y-4=0.

**Lý do:** n=(1,2) của d, chọn n'=(2,-1) có tích vô hướng 0. Qua P: 2(x-1)-(y+2)=0 ⇒ 2x-y-4=0.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY09` bên dưới; quay lại câu canonical cũ `THPT-G10-B20-C02` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY09 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu chỉ lấy lại n=(1,2), em sẽ viết đường song song với d chứ không vuông góc.
2. **Quay lại bản chất:** Nếu hai đường vuông góc thì hai pháp tuyến của chúng cũng vuông góc (đều bị quay cùng 90 độ so với đường). Điểm quyết định tịnh tiến đường mới.
3. **Tự sửa:** Thử n·n'=0 và thay P vào phương trình vừa viết.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B20-C02` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B20-INTERSECTION — Tọa độ giao hai đường

**PED1 — Vì sao cần học:** Tìm chỗ hai tuyến đường gặp nhau tương đương tìm một cặp tọa độ thỏa đồng thời hai điều kiện.

**PED2 — Kiến thức tiền đề:** Nhắc giải hệ hai phương trình bậc nhất và phép thế kiểm nghiệm.

**PED3 — Bản chất trước công thức:** Một giao điểm là nghiệm chung của hai phương trình; giải từng phương trình riêng không đủ.

**PED4 — Hướng dẫn đọc hình:** Vẽ hai đường giao nhau; đánh dấu giao và thử nhận xét vì sao một điểm nằm riêng trên d1 chưa chắc thuộc d2.

**PED5 — Chọn phương pháp và giới hạn:** Lập hệ đúng hai phương trình, giải bằng thế/khử, kiểm tọa độ cuối ở cả hai. Nếu hệ vô nghiệm, không được bịa giao điểm.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY10`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B20-INTERSECTION`): Tìm giao điểm của x+2y=8 và 2x-y=1.

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** I(2,3).

**Lý do:** Từ 2x-y=1 ⇒ y=2x-1. Thế vào x+2(2x-1)=8 ⇒ x=2, y=3; kiểm 2+6=8, 4-3=1.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY10` bên dưới; quay lại câu canonical cũ `THPT-G10-B20-P01` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY10 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu ra một điểm chỉ thỏa một đường, em đã dừng trước bước thử.
2. **Quay lại bản chất:** Một giao điểm là nghiệm chung của hai phương trình; giải từng phương trình riêng không đủ.
3. **Tự sửa:** Ghi thành hai dòng kiểm thế tọa độ vào từng phương trình.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B20-P01` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B20-DISTANCE — Khoảng cách điểm đến đường

**PED1 — Vì sao cần học:** Khoảng cách ngắn nhất từ một vị trí đến con đường là độ dài đoạn vuông góc, không phải độ dài đến một điểm tùy ý trên đường.

**PED2 — Kiến thức tiền đề:** Ôn độ dài vectơ pháp tuyến (a,b) và giá trị tuyệt đối của số thực.

**PED3 — Bản chất trước công thức:** Biểu thức axM+byM+c đo độ lệch có dấu theo pháp tuyến chưa chuẩn hóa; chia √(a²+b²) đổi thành độ dài thật và lấy trị tuyệt đối.

**PED4 — Hướng dẫn đọc hình:** Chỉ đoạn vuông góc ngắn nhất từ M tới d, phân biệt với đoạn xiên đến một điểm khác trên d; dấu của biểu thức đổi khi M ở hai phía.

**PED5 — Chọn phương pháp và giới hạn:** Kiểm (a,b)≠(0,0), tính |axM+byM+c|/√(a²+b²). Kết quả phải ≥0; nếu M nằm trên d thì khoảng cách 0.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY11`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B20-DISTANCE`): Tính khoảng cách từ M(1,2) đến d: 3x+4y-1=0.

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** d(M,d)=2.

**Lý do:** Tử |3·1+4·2−1|=10, mẫu √(3²+4²)=5, nên khoảng cách bằng 10/5=2.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY11` bên dưới; quay lại câu canonical cũ `THPT-G10-B20-P02` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY11 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu cho kết quả 10 hoặc -2, em đã quên chuẩn hóa pháp tuyến hoặc trị tuyệt đối.
2. **Quay lại bản chất:** Biểu thức axM+byM+c đo độ lệch có dấu theo pháp tuyến chưa chuẩn hóa; chia √(a²+b²) đổi thành độ dài thật và lấy trị tuyệt đối.
3. **Tự sửa:** Tách tính tử và mẫu, kiểm mẫu khác 0, kết luận độ dài không âm.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B20-P02` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


### G10-B20-ANGLE — Góc nhỏ giữa hai đường

**PED1 — Vì sao cần học:** Hai tuyến đường không vuông góc vẫn cần một thước đo góc độc lập với việc chúng ta chọn mũi tên hướng nào.

**PED2 — Kiến thức tiền đề:** Ôn tích vô hướng, độ dài vectơ và cosin góc giữa hai vectơ khác 0.

**PED3 — Bản chất trước công thức:** Góc nhỏ giữa hai đường nằm từ 0 đến 90 độ; đổi hướng một pháp tuyến không làm đổi góc nhỏ nên lấy trị tuyệt đối tích vô hướng.

**PED4 — Hướng dẫn đọc hình:** So sánh góc nhọn với góc tù bù nhau do đảo chiều mũi tên; góc giữa đường là góc nhỏ nên không phụ thuộc chiều vectơ.

**PED5 — Chọn phương pháp và giới hạn:** Dùng |n1·n2|/(||n1||||n2||) và kiểm 0≤cosφ≤1. Đừng nhầm góc tù giữa hai vectơ với góc nhỏ giữa hai đường.

**PED6 — Tự thử trước Core** (`THPT-G10-CHVII-TRY12`, `SGK_PRE_CORE_FIRST_TRY`, unscored; outcome `G10-B20-ANGLE`): Góc nhỏ giữa d1: x=0 và d2: x-y=0 bằng bao nhiêu?

<details>
<summary>Tự mở đáp án sau khi đã tự làm</summary>

**Đáp án:** 45°.

**Lý do:** Pháp tuyến n1=(1,0), n2=(1,-1). cosφ=|1|/(1·√2)=1/√2 nên φ=45°.

**Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY12` bên dưới; quay lại câu canonical cũ `THPT-G10-B20-P03` khi đã hiểu kiến thức.

</details>

#### D6 — HELP-G10-CHVII-TRY12 (không tính Mastery)

1. **Nhận diện lỗi:** Nếu kết luận 135°, em đã lấy góc tù theo hướng pháp tuyến thay vì góc nhỏ giữa hai đường.
2. **Quay lại bản chất:** Góc nhỏ giữa hai đường nằm từ 0 đến 90 độ; đổi hướng một pháp tuyến không làm đổi góc nhỏ nên lấy trị tuyệt đối tích vô hướng.
3. **Tự sửa:** Lấy trị tuyệt đối tích vô hướng, kiểm φ không vượt 90°.
4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.
5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B20-P03` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.


## Phần 2 — B21/B22

<!-- Tiếp tục bổ sung 11 outcomes còn lại trước khi gửi NotebookLM. Bản draft chưa phải gói review đầy đủ. -->
