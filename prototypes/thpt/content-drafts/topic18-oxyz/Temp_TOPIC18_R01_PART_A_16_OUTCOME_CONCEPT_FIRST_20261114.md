# CĐ18 · Phương pháp tọa độ trong không gian Oxyz · R01 kiến thức nền G12 ChII · AUTHORING CANDIDATE

> **Chưa CONTENT_READY.** Đây là mạch học viên độc lập phần đầu CĐ18, dựa trên SGK KNTT G12 ChII B06–B08. Còn 24 outcome G12 ChV B14–B17 và vấn đề SBT B14 trang in 25 chưa khép. Chỉ làm nguồn học liệu công khai, không hình thành điểm hoặc Mastery.

**Vì sao học?** Một điểm nhìn trong phòng có thể mô tả bằng “trước–sau, trái–phải, trên–dưới”. Nhưng trong toán học, ta không muốn tranh cãi một vị trí trông ở đâu trên hình phối cảnh. Ta chọn ba trục vuông góc, một gốc và đơn vị chung để chuyển vị trí thành ba số chính xác. Độ dời trở thành vectơ, các phép cộng nối đường đi, và độ dài được tính nhờ Pitago. Khi đã quen với điều đó, mặt phẳng, đường thẳng và mặt cầu ở các bài sau chỉ còn là những quy tắc mô tả *tập hợp điểm*.

**Hướng dẫn tự học:** Đọc ý nghĩa trước ví dụ. Đến **Tự thử**, hãy viết một lời giải ngắn, rồi mới tự mở đối chiếu. Nếu chưa đúng, đọc phần D6 và tự tạo một dữ kiện gần giống. Chỉ có ba phần ngoài Kiến thức / Luyện tập / Tự kiểm tra; không có tab Core riêng và không dùng câu công khai để ghi Mastery.

<!-- AUTHOR_S1_RECEIPT: original G12 ChII SGK locked blob 856a37bd16d2746ffc2e12906de18d1f4338a3b6; G12 ChV SGK locked blob 11eb2834cfdb4a24685157f84666c2bb0767970a; source matrix blob 7cba588cfe60d3675df99d8aa7e4b9275da9690e; SBT B14 printed p25 held separately. -->
<!-- EDITORIAL_NOTEBOOK_GEMINI_REUSE: user Issue #851, old NotebookLM Temp_TOPIC_09_VECTO_VA_PHUONG_PHAP_TOA_DO_TRONG_KHONG_GIAN_O.md is DRAFT_NOT_REVIEWED; use only independently checked intuitive narrative, not old erroneous B06–B07 or B14–B16 scope and SOURCE_PENDING. -->

## 1. Kiến thức — Phần A: từ độ dời đến tọa độ Oxyz

### Chặng A1 — Mũi tên tự do và quy tắc ghép đường đi

#### 1. Nhận diện vectơ không gian, độ dài, hướng, vectơ-không; điều kiện: Đầu/cuối; vectơ-không không có hướng xác định

<!-- LESSON_ID: TOP18-M01; OUTCOME_ID: TOP18-O01; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O01 -->

**Ý nghĩa trước công thức.** Một vectơ biểu diễn độ dời có hướng từ điểm đầu đến điểm cuối. Ta có thể tịnh tiến mũi tên song song mà không đổi vectơ; vì thế vectơ không gắn với vị trí tuyệt đối. Vectơ-không có độ dài 0 và không xác định một hướng riêng, nên không dùng nó để đo góc.

**Ví dụ suy luận.** Nếu A,B,C thẳng hàng và AB,BC cùng hướng thì khi đi A→B rồi B→C, ta thu được độ dời A→C. Khi A trùng B, vectơ AB là vectơ-không dù hai điểm mang cùng vị trí.

**Tự thử trước khi mở lời giải.** A trùng B. Vectơ AB có độ dài và hướng thế nào?

<!-- ITEM_ID: THPT-TOP18-T01; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O01 -->

<details><summary>Tự mở đối chiếu</summary>

Độ dài bằng 0; không có hướng xác định. Không gán góc riêng cho vectơ-không.

**Nếu chưa đúng (D6):** Không suy hướng từ nét vẽ, kiểm điểm đầu/cuối; vectơ-không không được đưa vào công thức góc.

</details>

#### 2. Phân biệt bằng nhau, đối nhau, cùng phương/cùng hướng; điều kiện: Bằng nhau cần cùng hướng và cùng độ dài

<!-- LESSON_ID: TOP18-M02; OUTCOME_ID: TOP18-O02; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O02 -->

**Ý nghĩa trước công thức.** Hai vectơ bằng nhau phải cùng hướng và cùng độ dài; chỉ cùng độ dài chưa đủ. Hai vectơ đối nhau có cùng độ dài nhưng ngược hướng. 'Cùng phương' nói về giá song song hoặc trùng nhau, không tự khẳng định cùng hướng.

**Ví dụ suy luận.** Trên hình bình hành ABCD, vectơ AB bằng vectơ DC; vectơ AB đối vectơ CD. Cùng hai cạnh nhưng đổi thứ tự đầu–cuối thì đảo chiều, không đổi độ dài.

**Tự thử trước khi mở lời giải.** Trong hình bình hành ABCD, vectơ AB có bằng vectơ CD không?

<!-- ITEM_ID: THPT-TOP18-T02; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O02 -->

<details><summary>Tự mở đối chiếu</summary>

Không. AB và CD đối nhau; AB bằng DC.

**Nếu chưa đúng (D6):** Hãy vẽ mũi tên đầu/cuối thay vì so sánh riêng độ dài.

</details>

#### 3. Dựng và biến đổi tổng, hiệu theo tam giác/hình bình hành/hình hộp; điều kiện: Đọc đường đi và thứ tự mũi tên

<!-- LESSON_ID: TOP18-M03; OUTCOME_ID: TOP18-O03; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O03 -->

**Ý nghĩa trước công thức.** Cộng vectơ là ghép các độ dời, không cộng số đo chiều dài tùy ý. Quy tắc ba điểm AB+BC=AC phản ánh đi liên tiếp; trong hình hộp, tổng ba cạnh kề ở A đưa đến đỉnh đối diện C′.

**Ví dụ suy luận.** Trong hình hộp ABCD.A′B′C′D′, đi A→B, rồi B→C, rồi C→C′ có cùng độ dời với A→C′. Vì AB+AD=AC và AC+AA′=AC′, suy AB+AD+AA′=AC′.

**Tự thử trước khi mở lời giải.** Tính dạng rút gọn của vectơ PQ + vectơ QR.

<!-- ITEM_ID: THPT-TOP18-T03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O03 -->

<details><summary>Tự mở đối chiếu</summary>

Vectơ PR theo quy tắc ba điểm, miễn các điểm được lấy đúng thứ tự.

**Nếu chưa đúng (D6):** Nếu không ghép được đầu của mũi tên thứ hai vào cuối mũi tên thứ nhất, hãy tịnh tiến vectơ rồi mới cộng.

</details>

#### 4. Hiểu và sử dụng phép nhân vectơ với số thực; điều kiện: Độ dài, hướng, k=0 và đường thẳng song song

<!-- LESSON_ID: TOP18-M04; OUTCOME_ID: TOP18-O04; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O04 -->

**Ý nghĩa trước công thức.** Nhân vectơ với số k thay đổi độ dài theo |k|, cùng hướng nếu k>0, ngược hướng nếu k<0 và tạo vectơ-không nếu k=0. Điều này giải thích tại sao nhân 3 biểu thị ba lần độ dời cùng hướng, còn nhân −1 là đảo chiều.

**Ví dụ suy luận.** Nếu vectơ u dài 2 m về hướng Bắc, −3u dài 6 m về hướng Nam. Không viết độ dài −6 m; độ dài luôn không âm.

**Tự thử trước khi mở lời giải.** Vectơ u khác không, 0u có cùng hướng u không?

<!-- ITEM_ID: THPT-TOP18-T04; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O04 -->

<details><summary>Tự mở đối chiếu</summary>

Không. 0u là vectơ-không, không có hướng xác định.

**Nếu chưa đúng (D6):** Nếu lẫn dấu và độ dài, tách riêng: độ dài nhân |k|, chiều quyết định theo dấu k.

</details>

#### 5. Giải thích góc và tích vô hướng của hai vectơ khác không; điều kiện: Góc không định nghĩa nếu một vectơ bằng 0

<!-- LESSON_ID: TOP18-M05; OUTCOME_ID: TOP18-O05; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O05 -->

**Ý nghĩa trước công thức.** Tích vô hướng đo phần 'đi cùng phương' của hai vectơ; nó dương khi góc nhọn, âm khi góc tù và bằng 0 khi vuông góc. Công thức u·v=|u||v|cosφ đúng cho mọi vectơ, nhưng góc φ chỉ được định nghĩa khi hai vectơ khác không.

**Ví dụ suy luận.** Hai lực vuông góc có tích vô hướng 0 không có nghĩa chúng bằng vectơ-không. Chỉ là không có thành phần theo hướng của nhau.

**Tự thử trước khi mở lời giải.** Hai vectơ khác không vuông góc; tích vô hướng bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP18-T05; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O05 -->

<details><summary>Tự mở đối chiếu</summary>

Bằng 0 vì cos90°=0.

**Nếu chưa đúng (D6):** Nếu một vectơ bằng 0, tích vô hướng vẫn bằng 0 nhưng không dùng phép chia cho tích độ dài để tìm cos góc.

</details>

#### 6. Giải quyết bài hình học/lực bằng tổ hợp vectơ và tích vô hướng; điều kiện: Chỉ chọn tích vô hướng khi có góc hoặc hình chiếu

<!-- LESSON_ID: TOP18-M06; OUTCOME_ID: TOP18-O06; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O06 -->

**Ý nghĩa trước công thức.** Bài lực ba chiều thường hỏi hợp lực, hình chiếu hay công sinh ra bởi một lực. Chọn phép cộng vectơ khi ghép các tác dụng, chọn tích vô hướng khi đo đóng góp của lực dọc theo chuyển dời; không cộng độ lớn nếu các lực khác hướng.

**Ví dụ suy luận.** Hai lực cùng điểm có độ lớn 3 N và 4 N vuông góc thì hợp lực dài 5 N theo Pitago. Nếu cùng hướng, hợp lực 7 N; vì thế phải đọc hướng trước khi tính.

**Tự thử trước khi mở lời giải.** Hai lực 6 N và 8 N vuông góc, độ lớn hợp lực?

<!-- ITEM_ID: THPT-TOP18-T06; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O06 -->

<details><summary>Tự mở đối chiếu</summary>

10 N vì bình phương độ lớn tổng bằng 6²+8².

**Nếu chưa đúng (D6):** D6: phân loại bài hỏi tổng vectơ hay hình chiếu; luôn có sơ đồ phương và đơn vị.

</details>

### Chặng A2 — Ba trục làm nên một vị trí có thể kiểm tra

#### 7. Đọc hệ trục Oxyz, vectơ đơn vị, ba mặt phẳng tọa độ; điều kiện: Không nhầm ba trục với hình chiếu xiên của hình vẽ

<!-- LESSON_ID: TOP18-M07; OUTCOME_ID: TOP18-O07; S1_ORIGINAL_OUTCOME: G12-CHII-B07-O01 -->

**Ý nghĩa trước công thức.** Ba trục Ox,Oy,Oz vuông góc đôi một giúp định vị một điểm trong phòng bằng ba số. Các mặt phẳng tọa độ Oxy, Oyz, Oxz là ba mặt khác nhau: z=0, x=0, y=0. Hình phối cảnh không phải thước để đọc chiều sâu.

**Ví dụ suy luận.** Điểm nằm ở mặt Oxy thì z=0 dù hình vẽ giấy có thể cho cảm giác nó ở cao. Trục Oz có x=y=0, không phải x=z=0.

**Tự thử trước khi mở lời giải.** Điểm M=(2,−1,0) thuộc mặt phẳng tọa độ nào?

<!-- ITEM_ID: THPT-TOP18-T07; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O07 -->

<details><summary>Tự mở đối chiếu</summary>

Thuộc Oxy vì z=0.

**Nếu chưa đúng (D6):** Gắn điều kiện bằng 0 với tên của tọa độ bị thiếu, không suy vị trí chỉ từ hình xiên.

</details>

#### 8. Viết tọa độ điểm/vectơ theo ba vectơ đơn vị; điều kiện: Tọa độ phụ thuộc hệ quy chiếu đã chọn

<!-- LESSON_ID: TOP18-M08; OUTCOME_ID: TOP18-O08; S1_ORIGINAL_OUTCOME: G12-CHII-B07-O02 -->

**Ý nghĩa trước công thức.** Tọa độ của một điểm là ba số xác định vị trí so với gốc O; tọa độ vectơ là ba thành phần dịch chuyển theo cùng trục. Cùng bộ ba số vẫn là hai đối tượng khác nhau, dù vectơ OM có tọa độ trùng tọa độ của điểm M.

**Ví dụ suy luận.** M=(2,−1,3) thì vectơ OM=(2,−1,3). Nhưng chuyển gốc tọa độ sẽ đổi tọa độ điểm M, còn độ dời của một vectơ tự do không đổi trong các trục cùng hướng.

**Tự thử trước khi mở lời giải.** Điểm M(1,2,3), tọa độ vectơ OM?

<!-- ITEM_ID: THPT-TOP18-T08; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O08 -->

<details><summary>Tự mở đối chiếu</summary>

(1,2,3) trong cùng hệ Oxyz.

**Nếu chưa đúng (D6):** Nhắc lại điểm cần gốc, vectơ cần thành phần dịch chuyển; không tự đổi dấu khi đọc thành phần âm.

</details>

#### 9. Mô hình hóa điểm thực tế và kiểm tra dấu tọa độ; điều kiện: Có thể chọn hệ quy chiếu thuận tiện, ghi đơn vị

<!-- LESSON_ID: TOP18-M09; OUTCOME_ID: TOP18-O09; S1_ORIGINAL_OUTCOME: G12-CHII-B07-O03 -->

**Ý nghĩa trước công thức.** Ứng dụng Oxyz bắt đầu bằng chọn gốc, hướng dương và đơn vị. Một tọa độ âm không có nghĩa khoảng cách âm; nó chỉ nằm ở phía đối diện của trục. Bài radar, kho vận hoặc đồ họa đều cần tuyên bố hệ quy chiếu trước.

**Ví dụ suy luận.** Chọn O ở góc nhà, Ox hướng Đông, Oy hướng Bắc, Oz hướng lên. Một đèn ở (2,−1,3) m nằm lệch 1 m về Nam và cao 3 m; không phải thấp hơn sàn.

**Tự thử trước khi mở lời giải.** Trong hệ Ox Đông, Oy Bắc, Oz lên, N=(−4,3,2) m nằm về phía nào của O?

<!-- ITEM_ID: THPT-TOP18-T09; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O09 -->

<details><summary>Tự mở đối chiếu</summary>

4 m về Tây, 3 m về Bắc, cao 2 m.

**Nếu chưa đúng (D6):** Nếu quên quy ước dấu, vẽ ba trục và ghi rõ đơn vị trước khi giải.

</details>

#### 10. Tính tọa độ vectơ khi biết tọa độ hai đầu mút; điều kiện: Lấy cuối trừ đầu, không đảo chiều

<!-- LESSON_ID: TOP18-M10; OUTCOME_ID: TOP18-O10; S1_ORIGINAL_OUTCOME: G12-CHII-B07-O04 -->

**Ý nghĩa trước công thức.** Vectơ từ A đến B được tính bằng cuối trừ đầu theo từng trục: AB=(xB−xA,yB−yA,zB−zA). Công thức là bản dịch đại số của việc bắt đầu ở A rồi di chuyển tới B; đổi AB thành BA thì toàn bộ dấu đảo.

**Ví dụ suy luận.** A=(1,2,−1), B=(4,−2,3) cho AB=(3,−4,4). Kiểm bằng A+AB=B theo từng thành phần.

**Tự thử trước khi mở lời giải.** A=(2,0,−1), B=(5,−2,3). Tính vectơ AB.

<!-- ITEM_ID: THPT-TOP18-T10; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O10 -->

<details><summary>Tự mở đối chiếu</summary>

(3,−2,4).

**Nếu chưa đúng (D6):** Thường xuyên thử lấy tọa độ A cộng kết quả AB để xem có trở về B không.

</details>

### Chặng A3 — Phép toán tọa độ và độ dài

#### 11. Cộng, trừ, nhân số các vectơ theo từng tọa độ; điều kiện: Không trộn quy tắc tọa độ với công thức khoảng cách

<!-- LESSON_ID: TOP18-M11; OUTCOME_ID: TOP18-O11; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O01 -->

**Ý nghĩa trước công thức.** Phép cộng, trừ và nhân số trên vectơ trong ba trục vuông góc thực hiện theo từng thành phần. Đây là phép cộng độ dời độc lập trên Ox,Oy,Oz chứ không cộng ba độ dài của vectơ.

**Ví dụ suy luận.** u=(1,2,−1), v=(−2,0,3) thì u+v=(−1,2,2); 2u−v=(4,4,−5).

**Tự thử trước khi mở lời giải.** u=(1,−2,3), v=(2,0,−1); u+v?

<!-- ITEM_ID: THPT-TOP18-T11; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O11 -->

<details><summary>Tự mở đối chiếu</summary>

(3,−2,2).

**Nếu chưa đúng (D6):** Không nhân chéo tọa độ khi cộng; làm theo từng trục và kiểm dấu số âm.

</details>

#### 12. Kiểm tra cùng phương qua bội số và nhận diện trường hợp zero; điều kiện: Cùng phương nếu a=k b hoặc b=k a; không chia tọa độ bằng 0

<!-- LESSON_ID: TOP18-M12; OUTCOME_ID: TOP18-O12; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O02 -->

**Ý nghĩa trước công thức.** Hai vectơ khác không cùng phương nếu một vectơ là bội của vectơ kia. Đừng chia các tọa độ tùy tiện khi có thành phần bằng 0; cách chắc chắn là thử k sao cho u=kv ở *tất cả* ba vị trí. Vectơ-không cần xử lí theo định nghĩa quy ước chứ không chia để tìm tỉ số.

**Ví dụ suy luận.** u=(2,−4,0),v=(−1,2,0), ta có u=−2v nên cùng phương ngược hướng. Nếu v=(−1,2,1), quan hệ vỡ ở tọa độ thứ ba.

**Tự thử trước khi mở lời giải.** u=(3,6,0), v=(1,2,0) có cùng phương không?

<!-- ITEM_ID: THPT-TOP18-T12; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O12 -->

<details><summary>Tự mở đối chiếu</summary>

Có, u=3v và đều khác không.

**Nếu chưa đúng (D6):** Không chia cho 0; kiểm cả ba thành phần, nếu một vectơ là vectơ-không thì nói rõ trường hợp riêng.

</details>

#### 13. Tính trung điểm, trọng tâm tam giác bằng tọa độ; điều kiện: Trung bình theo từng thành phần, không cộng độ dài

<!-- LESSON_ID: TOP18-M13; OUTCOME_ID: TOP18-O13; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O03 -->

**Ý nghĩa trước công thức.** Trung điểm và trọng tâm của tam giác là trung bình *tọa độ*, không phải trung bình khoảng cách tới gốc. Vì mỗi trục độc lập, trung điểm M=(A+B)/2; trọng tâm G=(A+B+C)/3 theo từng thành phần.

**Ví dụ suy luận.** A=(0,2,4),B=(2,0,0) có M=(1,1,2). Không lấy trung bình độ dài OA và OB.

**Tự thử trước khi mở lời giải.** Trung điểm A=(0,0,2), B=(2,4,0)?

<!-- ITEM_ID: THPT-TOP18-T13; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O13 -->

<details><summary>Tự mở đối chiếu</summary>

M=(1,2,1).

**Nếu chưa đúng (D6):** Nếu kết quả bất ngờ, lấy 2M−A phải thu B; với trọng tâm G, 3G=A+B+C.

</details>

#### 14. Tính tích vô hướng, kiểm tra vuông góc và góc giữa vectơ; điều kiện: Cos chỉ dùng khi hai vectơ khác không, cắt ngưỡng [-1,1] nếu làm tròn

<!-- LESSON_ID: TOP18-M14; OUTCOME_ID: TOP18-O14; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O04 -->

**Ý nghĩa trước công thức.** Tích vô hướng trong hệ trực chuẩn Oxyz là u·v=uxvx+uyvy+uzvz; chia cho |u||v| chỉ khi hai vectơ khác không mới suy góc. Vuông góc nghĩa tích bằng 0; góc giữa các vectơ có thể tù, khác góc không tù giữa hai đường thẳng.

**Ví dụ suy luận.** u=(1,2,0),v=(2,−1,0), tích 1·2+2·(−1)+0=0, nên hai vectơ khác không vuông góc.

**Tự thử trước khi mở lời giải.** u=(1,1,0),v=(1,−1,0). Góc giữa chúng?

<!-- ITEM_ID: THPT-TOP18-T14; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O14 -->

<details><summary>Tự mở đối chiếu</summary>

90° vì tích vô hướng 1−1=0 và cả hai khác không.

**Nếu chưa đúng (D6):** Khi tìm cos, kiểm |u|,|v|>0; nếu làm tròn dữ liệu máy, cos chỉ nằm trong [−1,1].

</details>

#### 15. Tính độ dài vectơ và khoảng cách hai điểm; điều kiện: Căn tổng bình phương hiệu, giá trị không âm

<!-- LESSON_ID: TOP18-M15; OUTCOME_ID: TOP18-O15; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O05 -->

**Ý nghĩa trước công thức.** Độ dài vectơ dùng căn tổng bình phương ba thành phần; khoảng cách AB là độ dài vectơ AB. Điều này nối Pitago phẳng thành ba phương vuông góc, kết quả luôn không âm.

**Ví dụ suy luận.** A=(1,2,3),B=(4,6,3) có AB=(3,4,0) nên AB=√(9+16)=5.

**Tự thử trước khi mở lời giải.** Độ dài vectơ u=(2,−1,2)?

<!-- ITEM_ID: THPT-TOP18-T15; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O15 -->

<details><summary>Tự mở đối chiếu</summary>

√(4+1+4)=3.

**Nếu chưa đúng (D6):** Nếu căn ra số âm hoặc thiếu tọa độ z, quay lại định lí Pitago ba chiều.

</details>

#### 16. Lập mô hình chuyển động / bố trí không gian với tọa độ; điều kiện: Nêu gốc, trục, đơn vị, kiểm tra nghiệm vật lý

<!-- LESSON_ID: TOP18-M16; OUTCOME_ID: TOP18-O16; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O06 -->

**Ý nghĩa trước công thức.** Mô hình chuyển động thẳng đều có vị trí M(t)=M0+t·v, ba tọa độ thay đổi độc lập theo tốc độ trên từng trục. Đơn vị tốc độ và thời gian phải tương thích; kiểm t≥0 nếu bài chỉ nói chuyển động sau khi xuất phát.

**Ví dụ suy luận.** Drone xuất phát A=(0,0,5) m, v=(2,−1,0) m/s. Sau 3 s, ở (6,−3,5) m: cao độ không đổi.

**Tự thử trước khi mở lời giải.** M0=(1,0,2), v=(0,3,−1), t=2. Tọa độ M(2)?

<!-- ITEM_ID: THPT-TOP18-T16; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O16 -->

<details><summary>Tự mở đối chiếu</summary>

(1,6,0).

**Nếu chưa đúng (D6):** Nếu thấy độ cao âm mà vật không được dưới mặt đất, kiểm mốc t hoặc chiều dương và giới hạn vật lí.

</details>

## 2. Luyện tập — Phần A: tự giải và tự mở đối chiếu

Hãy nêu lí do chọn phép toán (cộng vectơ, nhân số, tích vô hướng hay độ dài) trước khi xem đáp án. Đọc lại đúng outcome nếu chưa hiểu.

### Luyện tập 1 · Nhận diện vectơ không gian, độ dài, hướng, vectơ-không; điều kiện: Đầu/cuối; vectơ-không không có hướng xác định

<!-- ITEM_ID: THPT-TOP18-P01; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O01 -->

Cho ba điểm P,Q,R với PQ=3 cm và QR=2 cm cùng trên một tia. Độ dài PR? Nếu P=Q, vectơ PQ có được xem là vectơ đơn vị không?

<details><summary>Tự mở lời giải</summary>

PR=5 cm nhờ cùng hướng; vectơ PQ là vectơ-không nên không có độ dài 1, không phải vectơ đơn vị.

**D6:** Không suy hướng từ nét vẽ, kiểm điểm đầu/cuối; vectơ-không không được đưa vào công thức góc.

</details>

### Luyện tập 2 · Phân biệt bằng nhau, đối nhau, cùng phương/cùng hướng; điều kiện: Bằng nhau cần cùng hướng và cùng độ dài

<!-- ITEM_ID: THPT-TOP18-P02; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O02 -->

Một con đường đi 4 km về phía Đông, một đường khác dài 4 km về Tây. Hai vectơ độ dời bằng nhau hay đối nhau?

<details><summary>Tự mở lời giải</summary>

Đối nhau: độ dài bằng nhau nhưng hai hướng ngược nhau. Vị trí đặt mũi tên không làm đổi kết luận.

**D6:** Hãy vẽ mũi tên đầu/cuối thay vì so sánh riêng độ dài.

</details>

### Luyện tập 3 · Dựng và biến đổi tổng, hiệu theo tam giác/hình bình hành/hình hộp; điều kiện: Đọc đường đi và thứ tự mũi tên

<!-- ITEM_ID: THPT-TOP18-P03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O03 -->

Trong tam giác ABC, viết vectơ AB + vectơ BC − vectơ AC dưới dạng đơn giản.

<details><summary>Tự mở lời giải</summary>

Bằng vectơ-không vì AB+BC=AC, nên hiệu với AC bằng 0.

**D6:** Nếu không ghép được đầu của mũi tên thứ hai vào cuối mũi tên thứ nhất, hãy tịnh tiến vectơ rồi mới cộng.

</details>

### Luyện tập 4 · Hiểu và sử dụng phép nhân vectơ với số thực; điều kiện: Độ dài, hướng, k=0 và đường thẳng song song

<!-- ITEM_ID: THPT-TOP18-P04; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O04 -->

Cho độ dời u có độ dài 5 cm và k=−2. Tính độ dài ku và so sánh hướng với u.

<details><summary>Tự mở lời giải</summary>

Độ dài |−2|·5=10 cm; vì k âm nên ngược hướng u.

**D6:** Nếu lẫn dấu và độ dài, tách riêng: độ dài nhân |k|, chiều quyết định theo dấu k.

</details>

### Luyện tập 5 · Giải thích góc và tích vô hướng của hai vectơ khác không; điều kiện: Góc không định nghĩa nếu một vectơ bằng 0

<!-- ITEM_ID: THPT-TOP18-P05; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O05 -->

Hai vectơ độ dài 3 và 4, góc giữa chúng 60°. Tính tích vô hướng.

<details><summary>Tự mở lời giải</summary>

3·4·cos60°=6. Cần biết cả độ dài và góc; không nhân 3·4 trực tiếp.

**D6:** Nếu một vectơ bằng 0, tích vô hướng vẫn bằng 0 nhưng không dùng phép chia cho tích độ dài để tìm cos góc.

</details>

### Luyện tập 6 · Giải quyết bài hình học/lực bằng tổ hợp vectơ và tích vô hướng; điều kiện: Chỉ chọn tích vô hướng khi có góc hoặc hình chiếu

<!-- ITEM_ID: THPT-TOP18-P06; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O06 -->

Một lực 10 N tạo góc 60° với độ dời dài 2 m. Công của lực theo hướng độ dời?

<details><summary>Tự mở lời giải</summary>

W=10·2·cos60°=10 J, vì chỉ thành phần lực dọc chuyển dời sinh công.

**D6:** D6: phân loại bài hỏi tổng vectơ hay hình chiếu; luôn có sơ đồ phương và đơn vị.

</details>

### Luyện tập 7 · Đọc hệ trục Oxyz, vectơ đơn vị, ba mặt phẳng tọa độ; điều kiện: Không nhầm ba trục với hình chiếu xiên của hình vẽ

<!-- ITEM_ID: THPT-TOP18-P07; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O07 -->

Điểm A=(0,4,−3) thuộc mặt phẳng Oyz không? Vì sao?

<details><summary>Tự mở lời giải</summary>

Có, vì x=0. Không bắt buộc y,z dương để thuộc mặt tọa độ.

**D6:** Gắn điều kiện bằng 0 với tên của tọa độ bị thiếu, không suy vị trí chỉ từ hình xiên.

</details>

### Luyện tập 8 · Viết tọa độ điểm/vectơ theo ba vectơ đơn vị; điều kiện: Tọa độ phụ thuộc hệ quy chiếu đã chọn

<!-- ITEM_ID: THPT-TOP18-P08; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O08 -->

Vectơ u=−2i+3j+k. Viết bộ ba tọa độ của u và của điểm N sao cho ON=u.

<details><summary>Tự mở lời giải</summary>

u=(−2,3,1) và N(−2,3,1) khi gốc là O và ba trục chuẩn.

**D6:** Nhắc lại điểm cần gốc, vectơ cần thành phần dịch chuyển; không tự đổi dấu khi đọc thành phần âm.

</details>

### Luyện tập 9 · Mô hình hóa điểm thực tế và kiểm tra dấu tọa độ; điều kiện: Có thể chọn hệ quy chiếu thuận tiện, ghi đơn vị

<!-- ITEM_ID: THPT-TOP18-P09; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O09 -->

Drone ở A=(1,−2,5) m; chuyển sang B=(1,2,5) m. Sự thay đổi theo Oy là bao nhiêu, theo chiều nào?

<details><summary>Tự mở lời giải</summary>

Tăng 4 m về Bắc; chiều cao z không đổi.

**D6:** Nếu quên quy ước dấu, vẽ ba trục và ghi rõ đơn vị trước khi giải.

</details>

### Luyện tập 10 · Tính tọa độ vectơ khi biết tọa độ hai đầu mút; điều kiện: Lấy cuối trừ đầu, không đảo chiều

<!-- ITEM_ID: THPT-TOP18-P10; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O10 -->

Cho C=(−1,3,2), D=(2,3,−2). Tính CD và DC; có đối nhau không?

<details><summary>Tự mở lời giải</summary>

CD=(3,0,−4), DC=(−3,0,4)=−CD.

**D6:** Thường xuyên thử lấy tọa độ A cộng kết quả AB để xem có trở về B không.

</details>

### Luyện tập 11 · Cộng, trừ, nhân số các vectơ theo từng tọa độ; điều kiện: Không trộn quy tắc tọa độ với công thức khoảng cách

<!-- ITEM_ID: THPT-TOP18-P11; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O11 -->

Cho u=(−1,2,4), v=(3,−2,1). Tính 2u−v.

<details><summary>Tự mở lời giải</summary>

2u−v=(−2,4,8)−(3,−2,1)=(−5,6,7).

**D6:** Không nhân chéo tọa độ khi cộng; làm theo từng trục và kiểm dấu số âm.

</details>

### Luyện tập 12 · Kiểm tra cùng phương qua bội số và nhận diện trường hợp zero; điều kiện: Cùng phương nếu a=k b hoặc b=k a; không chia tọa độ bằng 0

<!-- ITEM_ID: THPT-TOP18-P12; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O12 -->

Kiểm tra cùng phương của u=(2,4,1) và v=(1,2,0).

<details><summary>Tự mở lời giải</summary>

Không: từ hai thành phần đầu k=2 nhưng thành phần z yêu cầu 1=2·0 sai.

**D6:** Không chia cho 0; kiểm cả ba thành phần, nếu một vectơ là vectơ-không thì nói rõ trường hợp riêng.

</details>

### Luyện tập 13 · Tính trung điểm, trọng tâm tam giác bằng tọa độ; điều kiện: Trung bình theo từng thành phần, không cộng độ dài

<!-- ITEM_ID: THPT-TOP18-P13; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O13 -->

Tìm trọng tâm tam giác A=(0,0,0), B=(3,0,3), C=(0,6,0).

<details><summary>Tự mở lời giải</summary>

G=(1,2,1) vì cộng ba tọa độ từng trục rồi chia 3.

**D6:** Nếu kết quả bất ngờ, lấy 2M−A phải thu B; với trọng tâm G, 3G=A+B+C.

</details>

### Luyện tập 14 · Tính tích vô hướng, kiểm tra vuông góc và góc giữa vectơ; điều kiện: Cos chỉ dùng khi hai vectơ khác không, cắt ngưỡng [-1,1] nếu làm tròn

<!-- ITEM_ID: THPT-TOP18-P14; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O14 -->

u=(1,0,0),v=(1,1,0). Tính cos góc giữa hai vectơ.

<details><summary>Tự mở lời giải</summary>

cos=1/(1·√2)=1/√2 nên góc 45°.

**D6:** Khi tìm cos, kiểm |u|,|v|>0; nếu làm tròn dữ liệu máy, cos chỉ nằm trong [−1,1].

</details>

### Luyện tập 15 · Tính độ dài vectơ và khoảng cách hai điểm; điều kiện: Căn tổng bình phương hiệu, giá trị không âm

<!-- ITEM_ID: THPT-TOP18-P15; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O15 -->

Khoảng cách giữa A=(0,1,−2) và B=(2,−2,4)?

<details><summary>Tự mở lời giải</summary>

AB=(2,−3,6), nên khoảng cách √(4+9+36)=7.

**D6:** Nếu căn ra số âm hoặc thiếu tọa độ z, quay lại định lí Pitago ba chiều.

</details>

### Luyện tập 16 · Lập mô hình chuyển động / bố trí không gian với tọa độ; điều kiện: Nêu gốc, trục, đơn vị, kiểm tra nghiệm vật lý

<!-- ITEM_ID: THPT-TOP18-P16; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O16 -->

Máy bay mô hình M0=(2,−1,4) km, v=(1,2,−1) km/h. Sau 2 h ở đâu?

<details><summary>Tự mở lời giải</summary>

M=(2,−1,4)+2(1,2,−1)=(4,3,2) km.

**D6:** Nếu thấy độ cao âm mà vật không được dưới mặt đất, kiểm mốc t hoặc chiều dương và giới hạn vật lí.

</details>

## 3. Tự kiểm tra công khai — Phần A

Đây là **luyện tự kiểm theo các câu đã học**, không phải kiểm tra độc lập. Tám vị trí dưới đây tham chiếu lại canonical Practice ID, không tạo thêm đề/đáp án. Nếu dùng phiên bản website, RELEASE phải ẩn đúng/sai, gợi ý, đáp án, rubric và AI Tutor trước Final Submit. Bản nguồn Markdown này chỉ là tự đối chiếu, **không ghi Mastery**.

- Vị trí 1: `THPT-TOP18-P01` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`.
- Vị trí 2: `THPT-TOP18-P03` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`.
- Vị trí 3: `THPT-TOP18-P05` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`.
- Vị trí 4: `THPT-TOP18-P07` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`.
- Vị trí 5: `THPT-TOP18-P09` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`.
- Vị trí 6: `THPT-TOP18-P10` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`.
- Vị trí 7: `THPT-TOP18-P14` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`.
- Vị trí 8: `THPT-TOP18-P16` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`.

<!-- AUTHOR_ONLY_SOURCE_G12_CHII_64_PUBLIC_SGK_POINTERS: THPT-G12-B06-C01, THPT-G12-B06-P01, THPT-G12-B06-P02, THPT-G12-B06-W01, THPT-G12-B06-C02, THPT-G12-B06-P03, THPT-G12-B06-P04, THPT-G12-B06-W02, THPT-G12-B06-C03, THPT-G12-B06-P05, THPT-G12-B06-P06, THPT-G12-B06-W03, THPT-G12-B06-C04, THPT-G12-B06-P07, THPT-G12-B06-P08, THPT-G12-B06-W04, THPT-G12-B06-C05, THPT-G12-B06-P09, THPT-G12-B06-P10, THPT-G12-B06-W05, THPT-G12-B06-C06, THPT-G12-B06-P11, THPT-G12-B06-P12, THPT-G12-B06-W06, THPT-G12-B07-C01, THPT-G12-B07-P01, THPT-G12-B07-P02, THPT-G12-B07-W01, THPT-G12-B07-C02, THPT-G12-B07-P03, THPT-G12-B07-P04, THPT-G12-B07-W02, THPT-G12-B07-C03, THPT-G12-B07-P05, THPT-G12-B07-P06, THPT-G12-B07-W03, THPT-G12-B07-C04, THPT-G12-B07-P07, THPT-G12-B07-P08, THPT-G12-B07-W04, THPT-G12-B08-C01, THPT-G12-B08-P01, THPT-G12-B08-P02, THPT-G12-B08-W01, THPT-G12-B08-C02, THPT-G12-B08-P03, THPT-G12-B08-P04, THPT-G12-B08-W02, THPT-G12-B08-C03, THPT-G12-B08-P05, THPT-G12-B08-P06, THPT-G12-B08-W03, THPT-G12-B08-C04, THPT-G12-B08-P07, THPT-G12-B08-P08, THPT-G12-B08-W04, THPT-G12-B08-C05, THPT-G12-B08-P09, THPT-G12-B08-P10, THPT-G12-B08-W05, THPT-G12-B08-C06, THPT-G12-B08-P11, THPT-G12-B08-P12, THPT-G12-B08-W06 -->

**Giới hạn trạng thái:** Phần A gồm 16/40 outcome thuộc ChII. Chưa chuyển `CONTENT_READY`, chưa có Q18 ký trên toàn CĐ18, chưa bàn giao V2 hay đưa vào RELEASE.