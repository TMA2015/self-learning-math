# Self-Learning Math THPT — Hợp đồng biên soạn "Hiểu từ đầu, rồi mới dùng công thức" v1

**Ngày:** 2026-11-01 · **Scope:** tác giả học liệu SGK lớp 10–12 và sau này Chuyên đề · **Owner finding:** Issue #691.  
**Trạng thái:** nguyên tắc cốt lõi Self-Learning Math từ khi khởi lập, nay được chuẩn hóa kiểm soát chất lượng trên Draft PR #690; đã ghi quyết định chủ dự án tại GitHub Issue #691 (có hiệu lực ngay với nhánh biên soạn, không phải quyền merge/deploy).  
**Tương thích:** Project Source 08 (hai hành trình học đầy đủ); S1 SGK/SBT làm chuẩn giới hạn Core; 04 D1–D6; 06/07 NotebookLM review/delta; Issue #655 và AP1–AP5 "gọn nhưng không nén"; Issue #675 thứ tự chương và bảo vệ nội dung đã xuất bản.

## 1. Mục đích gốc từ khi bắt đầu dự án: Knowledge ≠ Teaching

**Đây không phải yêu cầu hay mục tiêu mới.** Self-Learning Math từ đầu đã nhằm dẫn dắt học sinh tự học, qua kiến thức, ví dụ, Core, luyện tập nhiều mức, vận dụng, khắc phục lỗi và tự đánh giá. Vấn đề là tác giả chưa biến mục tiêu ấy thành cổng QA sư phạm đủ cụ thể. Hợp đồng này là bước **thực thi nhất quán mục đích đã có**, không thay thế hay phủ nhận các công việc thiết kế/review trước đây.

Một bài có thể đúng định nghĩa, đủ công thức, đủ item nhưng **chưa tự học được** nếu người đọc phải tự đoán:
- *Tại sao* đang học khái niệm này, nó giải quyết vấn đề gì?
- Một từ kỹ thuật mới có nghĩa gì và đối tượng cụ thể là gì?
- Mỗi ký hiệu, giả thiết, điều kiện dùng để làm gì?
- Bằng cách nào người học nhận ra định lý/phương pháp thích hợp?
- Tại sao kết luận đúng, và trường hợp nào không được kết luận?
- Sau khi đọc, học sinh có thể tự thử một bước nhỏ trước khi làm bài tập độc lập hay không?

**Quy tắc:** Giáo án tự học phải đóng vai người giáo viên: kết nối điều đã biết → đặt câu hỏi → đưa trực giác/hình ảnh → cùng hình thành khái niệm → phát biểu chuẩn toán học → diễn giải điều kiện/ký hiệu → làm mẫu một cách có lí do → tự thử → ứng dụng. Không biến học liệu thành bảng công thức kèm ghi chú.

## 2. Trình tự dạy học mỗi mảng kiến thức (tùy độ phức tạp, không ép khung rỗng)

1. **Tình huống/động cơ (WHY).** Một câu hỏi cụ thể: tại sao cần đưa ra khái niệm này, tri thức hiện có chưa giúp giải quyết điều gì? Không cần giả lập thực tế vô lý cho mọi định lý thuần toán.
2. **Cầu nối tiền đề (BRIDGE).** Nói rõ học sinh cần biết gì đã học ở bài/lớp nào. Nếu thuộc bài trước: nhắc lại 1–2 câu cùng con trỏ thật; không viết lại toàn chương. Nếu chưa xác minh tiền đề, giải thích trực tiếp hoặc đánh dấu cần kiểm S1.
3. **Bản chất khái niệm rồi mới hình dung (WHAT/INTUITION).** Giải thích bằng lời thường nó *là gì*, vì sao được hình thành (đặc biệt: tỉ số, quan hệ, phép toán nào), để làm gì. Dùng số cụ thể, hình/đồ thị SVG hoặc bảng giá trị **có thuyết minh** giúp người học quan sát và suy đoán trước phát biểu tổng quát. Không nhảy thẳng tới dấu, công thức hay ứng dụng của một thuật ngữ mà học sinh còn chưa biết.
4. **Định nghĩa/định lý chuẩn (FORMAL).** Đặt tên sau khi đã có ý niệm, nêu chính xác đối tượng, kí hiệu, phạm vi và điều kiện. Giải thích **ngay tại chỗ** thuật ngữ mới hoặc điều kiện không hiển nhiên.
5. **Giải thích ý nghĩa (WHAT/WHEN/NOT-WHEN).** Tách ý: là gì, hiểu bằng lời thường, dùng để làm gì, vì sao điều kiện cần, một phản ví dụ hoặc tình huống sai phù hợp.
6. **Ví dụ dẫn dắt (MODEL).** Có lý do chọn phương pháp, từng bước tính/chứng minh, cách kiểm tra kết quả và ít nhất một bẫy có khả năng gặp; ví dụ có **cấu trúc khác nhau**, không chỉ đổi số.
7. **Thử ngay (MICRO-CHECK).** Một câu nhận biết/giải thích ngắn, đáp án giải thích **sau khi học sinh tự nghĩ**, thuộc formative; không được ghi Skill Mastery.
8. **Tiếp nối (APPLY/REMEDIATE).** Liên kết bài Core/Practice/Written canonical phù hợp, hỗ trợ D6 và điều kiện quay về bài tiền đề; không lồng một ngân hàng bài tập dài vào trang Kiến thức.

Có thể gộp 1–3 khi cùng ý, sử dụng Adaptive Tabs để tiết kiệm chiều cao; **không được cắt nội dung giải thích chỉ để rút số dòng**.

## 3. Chính sách về "đã học rồi"

Mỗi thuật ngữ chính phải được đánh dấu trong source ledger của chương:
- **NEW:** xuất hiện lần đầu trong tiến trình đang học → có định nghĩa ngôn ngữ thường, ví dụ/ảnh khi cần, sau đó formal. Không đưa ra định nghĩa kiểu "tam giác không suy biến" khi chưa có lời giải thích.
- **PREREQUISITE_CONFIRMED:** học từ bài trước/lớp trước có bằng chứng chương trình → gợi nhớ ngắn và liên kết hợp lệ, nhất là khi định nghĩa mới dựa trên nó.
- **RECALL_ONLY:** học sinh vừa thực hành trong cùng bài → gọi lại ngắn, không lặp lý thuyết.
- **OPTIONAL_ADVANCED:** không biến thành điều kiện học Core; thuật ngữ nâng cao cần gắn rõ "đọc thêm" và nguồn.

Không cần giải thích mọi phép toán cấp dưới. Nhưng một thuật ngữ, điều kiện hoặc kí hiệu mới **cần cho lập luận đang giảng** thì không để học sinh tra cứu bên ngoài một cách bắt buộc.

## 4. Ba mẫu sửa lỗi sư phạm do owner chỉ ra (draft gợi ý, KHÔNG ghi trực tiếp vào trang đã phát hành)

### Mẫu A — Toán 10 Chương III, Bài 5: **sin/cos là gì, tại sao cần chúng?** (chỉ minh họa tiêu chuẩn, không sửa website)

**KHÔNG bắt đầu từ:** dấu của sin/cos, bảng giá trị góc 30°/45°/60°, tọa độ M(x,y) trên đường tròn đơn vị, hoặc công thức tan=sin/cos. Những kết quả đó cần được học **sau khi** học sinh biết sin/cos là gì và vì sao chúng có ích.

**1. Câu hỏi nảy sinh nhu cầu.** Nếu muốn biết chiều cao một cây hoặc chiều rộng một con sông nhưng không thể đo trực tiếp, em có thể đo khoảng cách dễ tiếp cận và một góc rồi suy ra độ dài còn lại không? Muốn vậy cần một công cụ nối **góc** với **tỉ lệ độ dài**. Đây là lý do ta học các tỉ số lượng giác.

**2. Bắt đầu từ định nghĩa đã học ở góc nhọn.** Trong một tam giác vuông và một góc nhọn α, xác định rõ đâu là **cạnh huyền** (đối diện góc vuông), **cạnh đối** (đối diện α), **cạnh kề** (nằm cạnh α nhưng không phải cạnh huyền). **sin α** là *tỉ số độ dài cạnh đối chia cạnh huyền*, **cos α** là *tỉ số cạnh kề chia cạnh huyền*; không phải "độ dài" của riêng một cạnh. Vì hai tam giác vuông có cùng góc nhọn đồng dạng, các tỉ số này **không đổi khi phóng to hoặc thu nhỏ tam giác**. Vì vậy chúng gắn với góc và giúp tìm độ dài cạnh chưa biết.

**3. Minh họa vì sao công cụ hữu ích.** Hai tam giác vuông khác kích thước nhưng cùng α có các cặp cạnh tương ứng tỉ lệ với nhau. Nếu biết góc và một cạnh, dùng tỉ số ấy để xác định cạnh chưa biết. Hình cần chỉ bằng mũi tên góc α, cạnh đối/kề/huyền và nêu rõ điều gì giữ nguyên, không chỉ vẽ để trang trí.

**4. Mục đích của bài mới.** Cách hiểu bằng tam giác vuông nói trên giải quyết **góc nhọn**. Nhưng cần làm việc cả với góc 0°, 90° hay 120°. Làm cách nào giữ nguyên ý nghĩa lượng giác và mở rộng định nghĩa đến góc từ 0° đến 180°? **Lúc này** mới chuyển sang nửa đường tròn đơn vị, điểm M, tọa độ ngang/dọc làm sin/cos (đối chiếu rằng với góc nhọn, tọa độ ấy khớp các tỉ số cạnh vừa hiểu).

**5. Sau cùng mới suy ra tính chất.** Khi α lớn hơn 90°, điểm M nằm bên trái trục Oy nên cos α âm, trong khi sin α vẫn không âm trên nửa đường tròn phía trên; rồi học bảng giá trị, tan/cot và trường hợp mẫu bằng 0. Đến đây học sinh đã biết **đó là gì → vì sao cần → định nghĩa hình thành thế nào → dùng ra sao**, nên dấu âm/dương trở thành kết quả có lý do, không phải điều phải thuộc lòng.

**Thử ngay:** Em giải thích bằng lời vì sao sin/cos với góc nhọn không thay đổi nếu phóng to tam giác vuông, trước khi tính bất kỳ giá trị nào.

**Tiền đề:** nếu lớp đã học tỉ số lượng giác góc nhọn, nhắc ngắn và dẫn liên kết tiền đề; nếu tài liệu triển khai thực tế chưa bảo đảm, phải giải thích đủ để không buộc học sinh tự tra cứu bên ngoài.

### Mẫu B — Toán 10 ChIII Bài 6: "tam giác không suy biến"

**Giải thích trước công thức:** Tam giác ABC được tạo bởi ba đỉnh A,B,C **không nằm trên cùng một đường thẳng**. Đây là *tam giác không suy biến*: hình có diện tích dương, ba góc đều lớn hơn 0° và nhỏ hơn 180°. Với độ dài ba cạnh a,b,c, mỗi cạnh phải **nhỏ hơn tổng hai cạnh còn lại**. Ví dụ 3–4–5 tạo thành tam giác; 2–3–5 không tạo tam giác có diện tích dương vì 2+3=5, chỉ nằm thẳng hàng. Hỏi học sinh: tại sao không được áp dụng máy móc công thức lượng giác của tam giác khi 3 đỉnh thẳng hàng?

**Đặt vấn đề:** Nếu biết hai cạnh và góc xen giữa của một tam giác, làm cách nào tìm cạnh còn lại mà không cần đo trực tiếp? → Định lý cosin là công cụ. Sau đó mới hiển thị a²=b²+c²−2bc cos A và diễn giải "A là góc **giữa** hai cạnh b,c; a đối diện A". Cho sơ đồ nhãn rõ, ví dụ 3–4 với góc 90° để nối Pitago, rồi ví dụ góc tù để thấy dấu cos âm và cạnh đối diện dài hơn.

### Mẫu C — Toán 10 ChII: Hệ bất phương trình hai ẩn, miền nghiệm chung

**Mở đầu:** Mỗi bất phương trình là một *điều kiện lựa chọn*. Chẳng hạn số lượng hai vật x,y không âm và phải thỏa **đồng thời** 2x+y≤6, x+2y≤6. Một lựa chọn đáp ứng điều kiện thứ nhất nhưng vi phạm điều kiện thứ hai vẫn **không hợp lệ**.

**Định nghĩa bằng lời:** Một **hệ** là nhóm nhiều bất phương trình buộc đúng cùng lúc; một **nghiệm chung** là cặp (x,y) làm đúng tất cả; **miền nghiệm chung** là tập các điểm đại diện cho mọi cặp như vậy. Tô vùng mỗi điều kiện riêng trên cùng hệ trục; phần **giao nhau** là miền còn lại sau khi áp dụng toàn bộ ràng buộc.

**Kiểm tra điểm:** (2,2) thỏa cả hai bất phương trình, (4,0) vi phạm điều kiện thứ nhất vì 2·4+0>6. Học sinh thấy trực tiếp "đúng một điều kiện chưa đủ". Sau đó mới nói bài toán tìm giá trị lớn nhất/nhỏ nhất của hàm mục tiêu trên miền khả thi là một ứng dụng, không bắt đầu bằng định lý cực trị khi chưa hiểu miền.

## 5. Minh chứng áp dụng ngay cho Chương V Toán 11 (Issue #691, Draft #690)

**B15 Giới hạn của dãy số** trước khi dùng ký hiệu ε:
- Ví dụ u_n=1/n: 1; 1/2; 1/3; 1/4; ... càng về sau càng gần 0, mặc dù mỗi số hạng vẫn dương.
- Hỏi "gần 0" nghĩa là gì: chọn khoảng sai số như 0,01, liệu từ một lúc nào đó mọi số hạng sau đều ở trong khoảng ấy không? Với n>100 thì 1/n<0,01. Chọn sai số nhỏ hơn, chọn n đủ lớn tương ứng.
- **Rồi mới** diễn đạt bằng ngôn ngữ chặt chẽ: với mọi ε>0 tồn tại N để n≥N thì |u_n−0|<ε. Giải thích từng ký hiệu và làm rõ "từ N trở đi tất cả", không phải chỉ vài số hạng rời rạc.
- Đối chiếu v_n=(-1)^n: dù có vô hạn số hạng, v_n cứ nhảy giữa +1 và −1, nên không tiến gần duy nhất một số. Không biến dấu vô cực thành "một số rất lớn".
- Kết thúc bằng một câu tự thử và ví dụ tổng cấp số nhân, rồi mới nâng đến quy tắc lim các phép toán.

**B16 Giới hạn hàm số:** khởi đầu bằng bảng giá trị gần x=2 cho (x²−4)/(x−2), nói "tại x=2 không xác định nhưng giá trị hai bên tiến đến 4", tách riêng **giới hạn** với **giá trị hàm tại điểm**, rồi mới giải bằng phân tích nhân tử.

**B17 Hàm số liên tục:** minh họa một đồ thị không đứt đoạn so với có lỗ/nhảy; trước khi đọc điều kiện lim f(x)=f(a), học sinh phải nhận ra vì sao giá trị ở a phải "khớp" với xu hướng khi x tiến gần a. Nhắc rõ đồ thị chỉ là trực giác; điều kiện và miền xác định quyết định tính đúng.

Mẫu này đặt yêu cầu triển khai cho source ChV; D1 của bản R00 đã được viết lại trên Draft PR #690 theo hướng khái niệm-trước-công thức, nhưng vẫn cần PED1–PED6 thực chất, hoàn thiện D3–D6/RD1 và review toàn chương trước khi công nhận hoàn tất.

## 6. Checklist theo outcome: TEACHABILITY — sử dụng trong A5 và review học thuật

| Check | Hỏi khi đọc như học sinh lần đầu | Fail nếu |
|---|---|---|
| PED1 Motivation | Có biết **vì sao cần khái niệm này và nó xuất hiện để giải quyết điều gì**? | Chưa có lời giải thích mục đích đã đi thẳng vào công thức/bảng dấu |
| PED2 Prior knowledge | Điều kiện và thuật ngữ nào phải biết trước? | Yêu cầu "đã biết" nhưng không có kiểm chứng/nhắc lại |
| PED3 Concept meaning | Học sinh trả lời được **nó là gì, vì sao tạo ra nó, dùng để làm gì** trước khi tính dấu/giá trị? | Chỉ có kí hiệu, hình hoặc định nghĩa trừu tượng nhưng chưa có bản chất |
| PED4 Visual reasoning | Hình/bảng giúp hiểu bước nào và đọc thế nào? | Hình chỉ có tiêu đề, không có diễn giải hoặc sai giả thiết |
| PED5 Worked thinking | Ví dụ giải thích vì sao dùng quy tắc, khi nào không? | Chỉ đưa phép tính và đáp số |
| PED6 First independent step | Có câu thử ngắn/đường về tiền đề trước Practice? | Học sinh phải chuyển trực tiếp sang đề luyện phức tạp |

**Tại cổng A5:** đánh giá PED1–PED6 theo bài và outcome; chưa đủ thì **AUTHORING_HOLD_FOR_PEDAGOGY**, dù D1–D6 đã đủ về số lượng và toán chính xác. QA không được tự nâng Academic PASS cũ thành "self-learning ready". Sau sửa toán/đáp án/rubric/coverage phải áp Delta_C; sửa UI không ảnh hưởng toán là Delta_A; thêm/đổi cách giải thích có ý nghĩa toán học mới phải phân tích đúng mức ảnh hưởng. NotebookLM cần nhận toàn bộ snapshot và trả verdict **PEDAGOGICAL_SELF_LEARNING_READY** riêng, ngoài correctness/coverage.

**Quyết định điều phối mới nhất:** KHÔNG quay lại rà soát hay sửa ngay ba bài lớp 10 được nêu làm ví dụ. Trước hết hoàn thành phát triển chương trình theo kế hoạch SGK 10→11→12, từng chương và các giai đoạn tiếp theo đã duyệt. **Chỉ sau khi toàn bộ việc phát triển chương trình theo kế hoạch đã hoàn tất**, mới kiểm toán hồi tố toàn bộ nội dung lớp 10 và một số chương/bài lớp 11 đã đưa lên website trước thời điểm này. Tài liệu đã phát hành vẫn đóng băng theo Issue #675; không tự sửa main/runtime, lập đề xuất batch, phân loại delta, release lane và owner kiểm soát. Ba ví dụ G10 ở mục 4 chỉ là mẫu giải thích nguyên tắc.

## 7. Thao tác hợp lệ của tác giả

Tác giả có thể cập nhật trực tiếp **bản thảo chưa review/đang soạn** để làm rõ khái niệm. Với nguồn đã được NotebookLM PASS ở snapshot cũ, phải giữ nguyên biên bản, phân loại delta và xin review lại phạm vi nội dung bị thay đổi thực chất; tránh làm mất tính đối chiếu của câu/đáp án. Bất kể thế nào, không có quyền tự merge/deploy hay bật mastery.

**Kết luận:** Không xếp hạng một bài là hoàn chỉnh chỉ vì đã có định nghĩa, hình, công thức và 20 câu hỏi. Chất lượng tự học được kiểm chứng bằng khả năng người học bước từ *chưa hiểu* đến *tự giải thích và tự làm bước đầu* mà không cần giáo viên điền phần còn thiếu.
