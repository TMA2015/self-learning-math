# Chuyên đề 2 — Vectơ và phương pháp tọa độ (lớp 10–12)

**Hành trình:** Kiến thức / Luyện tập / Tự kiểm tra · Một Chuyên đề xuyên lớp · Học độc lập không cần rẽ sang SGK.

**Nguồn AUTHORING:** R03 Student-first, từ R02 reviewer-accepted bất biến (Git blob `29669e6de80cba50a11bb8574220c6a19b4f7138`). **Chuẩn:** `SLM-THPT-QUALITY-ONE v3.0.1`; chỉnh cấu trúc/giọng dẫn, không cấp mới verdict NotebookLM cho R03. **Đối tượng:** nguồn học liệu/giao nhận cho RELEASE; không phải ảnh chụp website đã chạy. **RD1:** 42 câu owner-held, không có nội dung kín ở đây.

Khi học, hãy thử dự đoán trước, quan sát hình/mô hình, tự giải thích vì sao cách làm đúng, rồi mới mở đối chiếu. Các kí hiệu và lời giải trong **bảng nguồn dùng chung** thuộc phần luyện tập; giao diện học sinh chỉ hiển thị đáp án sau thao tác yêu cầu, tuyệt đối không dùng phần tự đối chiếu để ghi Mastery.

<!-- TOPIC_KNOWLEDGE_BEGIN -->
# Kiến thức

Bạn sẽ đi từ mũi tên (vectơ) → phép toán → tọa độ Oxy → hình học phẳng → quan hệ không gian → tọa độ Oxyz → phương trình của các hình trong không gian. Mỗi phần có động cơ, kiến thức nền, ví dụ, tự thử và đường khắc phục; không có trang Core riêng.

=== "Nền tảng vectơ và Oxy"

    === "1 · Vectơ: độ lớn, phương và hướng"

        #### 1. Vectơ: độ lớn, phương và hướng

        **Khám phá.** Hai người cùng đi 5 m nhưng theo hai hướng đối nhau: điều gì giống nhau và điều gì khác nhau? Tự vẽ mũi tên trước khi đọc tên gọi. **Điều cần nhận ra:** vectơ chứa cả độ lớn lẫn hướng, còn độ dài chỉ là số không âm.

        ## Kiến thức — Vì sao học? → bản chất → điều kiện

        Hai người đi 5 m theo hai hướng ngược nhau: **quãng đường bằng nhau** nhưng độ dời không giống nhau. Ta cần một đối tượng chứa **độ lớn và hướng**. Vectơ `AB` biểu diễn một mũi tên từ A tới B; độ dài $|\overrightarrow{AB}|=AB$. Độ dài là số không âm, không phụ thuộc chiều mũi tên; đổi điểm đầu/cuối sẽ đổi vectơ nếu A khác B.

        **Trước khi có công thức:** Vẽ một mũi tên dài 3 ô sang phải, sau đó trượt nguyên mũi tên (không quay, không đổi tỉ lệ). Nó vẫn biểu diễn cùng một vectơ. Một mũi tên quay 180° có cùng độ dài nhưng không bằng vectơ ban đầu. Với các vectơ **khác không**, hai giá song song hoặc trùng nhau thì chúng cùng phương; hai vectơ cùng hướng **và cùng độ dài** mới bằng nhau. Cùng phương không suy cùng hướng, cùng độ dài không suy bằng nhau.

        **Trường hợp đặc biệt S1:** $\vec0=\overrightarrow{AA}$ có độ dài 0. **Theo quy ước SBT KNTT 10 B07 trang in 45, vectơ-không cùng phương và cùng hướng với mọi vectơ.** Vì mũi tên có độ dài 0 không có chiều nhìn thấy, cần phân biệt **quy ước toán trong SGK/SBT** với trực giác vật lý; tuyệt đối không dạy phủ định quy ước này. Mọi vectơ-không bằng nhau.

        **Ba điểm thẳng hàng và nằm giữa:** Với A,B,C đôi một phân biệt, A,B,C thẳng hàng ⇔ $\overrightarrow{AB}$ và $\overrightarrow{AC}$ cùng phương (hai giá đều qua A). Với A,M,B phân biệt, M **nằm giữa** A,B ⇔ $\overrightarrow{MA}$ và $\overrightarrow{MB}$ ngược hướng. Chỉ biết $\overrightarrow{AB},\overrightarrow{AM}$ cùng hướng **chưa đủ** vì M có thể nằm quá B.

        **Hướng dẫn đọc hình:** Đọc đuôi mũi tên → đầu mũi tên trước khi so phương, hướng, độ dài. Trong hình bình hành ABCD theo thứ tự, $\overrightarrow{AB}=\overrightarrow{DC}$ và $\overrightarrow{AD}=\overrightarrow{BC}$; trái lại $\overrightarrow{CD}$ ngược hướng $\overrightarrow{AB}$. Giữa A–M–B trên cùng đường thẳng, hai mũi tên xuất phát từ M hướng về hai phía. Hình nguồn SGK `FIG-G10-B07-01` được tham chiếu **nguyên vẹn**; sơ đồ riêng tại Draft PR #793 chỉ minh họa vị trí nằm giữa, không biến thành câu hỏi kiểm tra kín.

        **Ví dụ có suy luận:** (1) Hai cạnh đối của hình bình hành: xét **cả** độ dài và hướng mới kết luận vectơ bằng nhau. (2) Hai vectơ $\overrightarrow{AA},\overrightarrow{BB}$ đều là $\vec0$, không thể xét theo chiều hình học nhìn thấy. (3) Tàu đi 6 km Đông, 8 km Bắc: quãng đường 14 km, độ dài độ dời 10 km; dùng Pythagore vì hai hướng vuông góc, không cộng 6+8 để tính độ dời. Ba ví dụ dùng chung `EX-G10-B07-01` đến `EX-G10-B07-03` trong nguồn SGK; không clone.

        ### Tự thử trước luyện tập

        1. Với hình bình hành ABCD, vectơ bằng $\overrightarrow{AB}$ là $\overrightarrow{DC}$ hay $\overrightarrow{CD}$?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        DC, vì cùng hướng và độ dài; CD ngược hướng.

        </details>
        2. Cho A–B–M lần lượt trên một tia. AB và AM cùng hướng; M có nằm giữa A và B không?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        Không. M nằm sau B, nên tính cùng hướng chưa đủ.

        </details>
        3. Vectơ-không được quy ước thế nào theo KNTT?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        Cùng phương và cùng hướng với mọi vectơ; độ dài 0.

        </details>


    === "2 · Cộng, trừ và nhân vectơ với số"

        #### 2. Cộng, trừ và nhân vectơ với số

        **Khám phá.** Đi 4 m về phía Đông rồi 3 m về phía Bắc. Hãy vẽ tuyến đường và mũi tên nối điểm đầu với điểm cuối. Vì sao độ dời không dài 7 m? **Điều cần nhận ra:** cộng vectơ là ghép các độ dời, không cộng máy móc độ dài.

        ## Kiến thức — Vì sao học? → bản chất → điều kiện

        Đi 4 m Đông rồi 3 m Bắc: độ dời tổng là vectơ từ **điểm bắt đầu tới điểm kết thúc**, không phải phép cộng 4+3 về độ dài. Trước công thức, học sinh tự vẽ hai mũi tên đầu–đuôi. Với mọi A,B,C: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$. Để cộng hai vectơ **cùng điểm đầu** A của hình bình hành ABCD, trượt một vectơ sang cạnh đối và lấy đường chéo: $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$. Hai quy tắc là hai cách đọc **cùng một phép cộng**, không là mẹo hình độc lập.

        Đi A→B rồi B→A cho tổng $\vec0$. Vectơ đối $-\overrightarrow{AB}=\overrightarrow{BA}$ và hiệu là $\vec a-\vec b=\vec a+(-\vec b)$. Ví dụ: $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$, **không phải BC**. Phép cộng giao hoán/kết hợp, phép trừ nói chung không giao hoán. Vectơ-không là phần tử trung hòa.

        M là trung điểm AB ⇔ $\overrightarrow{MA}+\overrightarrow{MB}=\vec0$. Nếu M trung điểm BC và E tùy ý, $\overrightarrow{EB}+\overrightarrow{EC}=2\overrightarrow{EM}$ vì hai vectơ MB và MC triệt tiêu; không dùng công thức nếu M không phải trung điểm. Với trọng tâm G của tam giác ABC, $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$; điểm G không phải một điểm bất kỳ trên đường trung tuyến.

        **Nhân vectơ với số thực:** hình dung cùng một hướng đi gấp đôi khi k=2 và đi ngược khi k=-2. Với $\vec u\ne\vec0$, nếu k>0 thì $k\vec u$ cùng hướng, k<0 thì ngược hướng; $|k\vec u|=|k||\vec u|$ cho mọi k và mọi vectơ. Nếu k=0 hoặc $\vec u=\vec0$ thì tích bằng $\vec0$, không gán dấu chiều vật lý cho vectơ-không. Tính chất phân phối $k(\vec u+\vec v)=k\vec u+k\vec v$, $(k+m)\vec u=k\vec u+m\vec u$; luật kết hợp $k(m\vec u)=(km)\vec u$; số $t\ne0$ là tỉ số khi hai vectơ **đều khác 0** cùng phương: $\vec v=t\vec u$. Không chia cho 0.

        **Trung điểm/trọng tâm dùng nhân số:** $\overrightarrow{AM}=\tfrac12\overrightarrow{AB}$; $\overrightarrow{AG}=\tfrac23\overrightarrow{AM}=\tfrac13(\overrightarrow{AB}+\overrightarrow{AC})$ với M trung điểm BC, G trọng tâm tam giác ABC. Hệ số 1/3 xuất phát từ $2/3$ × $1/2$, không là công thức phải nhớ vô cớ.

        ### Sáu ví dụ D2 chung SGK và lý do chọn cách

        - `EX-G10-B08-01`: AB+BC+CD → AD; dùng chuỗi đầu–đuôi, kiểm chiều.
        - `EX-G10-B08-02`: AB+AD = AC trong hình bình hành, AC−AB = AD; chọn đường chéo vì hai vectơ chung gốc.
        - `EX-G10-B08-03`: M trung điểm BC ⇒ MB+MC=0; G trọng tâm ⇒ GA+GB+GC=0; không gọi một điểm bất kỳ là trọng tâm.
        - `EX-G10-B09-01`: $\vec v=-3\vec u$ với $|\vec u|=5$ cm ⇒ $|\vec v|=15$ cm và ngược hướng; độ dài không âm.
        - `EX-G10-B09-02`: M trung điểm AB=12 cm, AM/MB cùng hướng AB và đều bằng $\tfrac12 AB$ theo vectơ; MA ngược chiều.
        - `EX-G10-B09-03`: quan hệ G trọng tâm ⇒ AG = (AB+AC)/3 bằng vectơ; giải qua trung tuyến trước.

        **Hình D5** tham chiếu bất biến `FIG-G10-B08-01` (tam giác, hình bình hành) và `FIG-G10-B09-01` (nhân hệ số dương/âm); đọc chiều mũi tên trước khi đọc công thức. Không nhân bản XML nguồn SGK.

        ### Tự thử trước luyện tập

        1. Với A–B–C, kết quả AB+BC là AC hay CA?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        AC; học sinh tự nối hai mũi tên trước, dùng `THPT-G10-B08-C01`.

        </details>
        2. Cho $\vec u\ne0$, độ dài $|\vec u|=4$ cm; $\vec v=-2\vec u$.

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        8 cm và ngược hướng (`THPT-G10-B09-C01`). Không áp “âm” vào độ dài.

        </details>


    === "3 · Tọa độ và tích vô hướng trên Oxy"

        #### 3. Tọa độ và tích vô hướng trên Oxy

        **Khám phá.** Trên lưới tọa độ, A(−2;3) và B(4;−1). Từ A tới B phải dịch bao nhiêu ô theo mỗi trục? Hãy dự đoán rồi tự kiểm bằng $\overrightarrow{AB}=(6;−4)$. **Điều cần nhận ra:** tọa độ vectơ là độ biến thiên, không phải vị trí riêng của B.

        **Nguồn S1:** SGK Toán 10 KNTT tập 1, Bài 10 trang in 60–65/PDF 61–66 và Bài 11 trang in 66–70/PDF 67–71; SBT Bài 10 trang in 55–58/PDF 56–59 và Bài 11 trang in 59–65/PDF 60–66. Bản PDF SGK/SBT đã mở tại các mốc bài; canonical SGK gốc `a9f6fab8...` giữ nguyên. 

        ## Kiến thức: từ hình mũi tên sang con số có nghĩa

        **Vì sao cần học?** Mô tả "mũi tên về bên phải và lên trên" giúp nhìn hình, nhưng không tiện để tính toán. Với trục Oxy có hai vectơ đơn vị vuông góc $\vec i=(1,0),\vec j=(0,1)$, ta biểu diễn duy nhất $\vec u=x\vec i+y\vec j$, ký hiệu $\vec u=(x;y)$. Điều này không phải bản chất khác của vectơ: **tọa độ là cách ghi độ dịch chuyển theo hai phương cố định**.

        **Tiền đề:** Hiểu hướng, độ dài, phép cộng và nhân số (Phần 1–2), hệ trục vuông góc, Pythagore; nếu chưa phân biệt điểm và vectơ, xem ví dụ đầu tiên. Điểm $A(x_A;y_A)$ chỉ *vị trí*, còn vectơ $\overrightarrow{AB}$ chỉ *độ dời* từ A đến B.

        **Tại sao lấy cuối trừ đầu?** Từ A tới B, hoành độ đổi $x_B-x_A$ và tung độ đổi $y_B-y_A$, nên $\overrightarrow{AB}=(x_B-x_A;y_B-y_A)$. Ví dụ A(-2;3), B(4;-1) thì $\overrightarrow{AB}=(6;-4)$, đảo BA được (-6;4). Không lấy tọa độ B làm tọa độ AB trừ khi A=O.

        **Phép toán được suy ra từ dịch chuyển:** $(a;b)+(c;d)=(a+c;b+d)$, $(a;b)-(c;d)=(a-c;b-d)$, $k(a;b)=(ka;kb)$. Tính chất cùng phương: khi $\vec u,\vec v$ khác 0, tồn tại t≠0 thỏa $\vec v=t\vec u$. Điều kiện định thức $a d-b c=0$ với $\vec u=(a;b),\vec v=(c;d)$ là tiêu chuẩn cùng phương, kể cả khi có thành phần 0 (được diễn giải đúng trường hợp vectơ-không riêng theo quy ước KNTT).

        **Độ dài từ Pythagore:** $|\vec u|=\sqrt{x^2+y^2}$ và $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$. Hai điểm A,B có trung điểm $M((x_A+x_B)/2;(y_A+y_B)/2)$. Trọng tâm tam giác ABC có tọa độ trung bình ba tọa độ đỉnh theo từng thành phần. Những công thức này có cơ sở là **cân bằng vị trí** chứ không cộng độ dài.

        **Vì sao tích vô hướng đo được góc?** Hình chiếu có hướng của $\vec v$ lên phương $\vec u$ bằng $|\vec v|\cos\theta$. Nhân với $|\vec u|$ cho $\vec u\cdot\vec v=|\vec u||\vec v|\cos\theta$. Khi biểu diễn trên hai trục vuông góc, cùng đại lượng bằng $ac+bd$. Như vậy tích vô hướng nối góc với tính toán:

        $$\vec u\cdot\vec v=ac+bd,\quad \cos\theta=\frac{\vec u\cdot\vec v}{|\vec u||\vec v|},\qquad \vec u,\vec v\ne\vec0.$$

        **Điều kiện và dấu:** Nếu tích vô hướng dương thì góc nhọn, bằng 0 thì vuông góc (với **cả hai vectơ khác 0**), âm thì góc tù. Góc không xác định khi một vectơ bằng 0; đừng thay tích vô hướng bằng tích hai độ dài. Trong bài thực tế, công của lực không đổi $W=\vec F\cdot\vec s$ và có thể âm, còn độ lớn mỗi vectơ không âm.

        **Đọc hình D5:** Dùng chung `FIG-G10-B10-01` (vectơ tọa độ) và `FIG-G10-B11-01` (hai vectơ tạo góc tù) từ nguồn canonical. Trên hình tọa độ, đi theo hướng x trước rồi y; trên hình góc tù, quan sát góc lớn 90° để giải thích tại sao tích vô hướng âm. Hai hình không thay phép chứng minh, không sao chép XML.

        ### Ví dụ D2 có lý do chọn phương pháp

        1. **Từ điểm sang vectơ.** A(-1;2), B(3;-4): $\overrightarrow{AB}=(4;-6)$. Chọn "cuối trừ đầu" vì câu hỏi là độ dời, không phải tọa độ của B; kiểm lại bằng $A+AB=B$ theo từng thành phần.
        2. **Độ dài và cùng phương.** $\vec u=(3;-4)$ có độ dài 5; $\vec v=(-6;8)=-2\vec u$ nên cùng phương, ngược hướng, độ dài 10. Không lấy tỉ số thành phần nếu mẫu 0.
        3. **Trọng tâm.** Với A(0;0), B(6;0), C(0;9), $G=(2;3)$. Có thể xác minh G nằm trên trung tuyến từ A tới M(3;4,5) và AG=(2/3)AM.
        4. **Vuông góc bằng tích vô hướng.** $\vec u=(3;2)$, $\vec v=(2;-3)$ ⇒ tích $6-6=0$, hai vectơ đều khác 0 ⇒ vuông góc. Không kết luận "góc 90°" với vectơ-không.
        5. **Chọn công thức góc.** $\vec u=(1;0)$, $\vec v=(1;1)$ ⇒ tích 1; độ dài lần lượt 1, $\sqrt2$, nên $\cos\theta=1/\sqrt2$ ⇒ $\theta=45°$. Không lấy cos bằng 1 khi hai vectơ có độ dài khác nhau.
        6. **Bài toán lực.** $\vec F=(4;3)$ N, độ dời $\vec s=(2;-1)$ m ⇒ $W=\vec F\cdot\vec s=8-3=5$ J. Chọn tích vô hướng vì hỏi thành phần lực theo hướng dịch chuyển, không hỏi độ lớn lực tổng hợp.

        ### Hai Tự thử trước luyện tập (tự mở sau khi làm)

        - **Tự thử 3A:** A(2;-3), B(-1;1), AB bằng (-3;4) hay (1;-2)?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        (-3;4), vì cuối trừ đầu; nếu sai, vẽ hai bước ngang/dọc, thử lại.

        </details>
        - **Tự thử 3B:** $\vec u=(2;1)$, $\vec v=(1;-2)$, tích vô hướng bằng 0 hay 4?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        $2\cdot1+1\cdot(-2)=0$; cả hai vectơ khác 0 nên vuông góc.

        </details>


=== "Hình học phẳng và tư duy không gian"

    === "4 · Đường thẳng, đường tròn và conic"

        #### 4. Đường thẳng, đường tròn và conic

        **Khám phá.** Một điểm có tọa độ (x;y). Làm sao biết nó có nằm trên con đường thẳng hoặc đường tròn đã cho? Hãy thử thay tọa độ vào phương trình. **Điều cần nhận ra:** phương trình mô tả tập hợp điểm thỏa điều kiện hình học, không phải chỉ là biểu thức để tính.

        **Nguồn S1:** SGK Toán 10 KNTT Tập Hai, Chương VII B19–B22 **trang in 30–56 (PDF #31–57)**, cuối chương 57–59 (PDF #58–60). Các mốc đã xem trực tiếp: B19 bắt đầu trang in 30/PDF31; B21 đường tròn trang in 43/PDF44; B22 ba đường conic trang in 48/PDF49. SBT Toán 10 Tập Hai ChVII được cung cấp nguyên bản; **không gán số trang bài SBT chưa đối chiếu từng tờ**, yêu cầu reviewer S1 kiểm sâu những dạng còn nghi vấn. Các câu dưới đây do tác giả biên soạn, không chép nguyên bài SGK/SBT.

        ## Kiến thức: hình học được diễn tả bằng điều kiện tọa độ

        **Tại sao phải học?** Trên bản đồ, tọa độ điểm cho biết vị trí nhưng chưa nói tất cả vị trí thuộc con đường hay đường tròn. Ta cần **phương trình mô tả tập hợp điểm**. Một phương trình không chỉ là phép tính: nó là điều kiện một điểm phải thỏa để nằm trên đường/hình. Học sinh đã biết vectơ pháp tuyến/chỉ phương và khoảng cách, vì thế có thể giải thích **trước** khi ghi công thức.

        ### Đường thẳng: từ pháp tuyến tới phương trình

        Với đường d qua $M_0(x_0;y_0)$, vectơ pháp tuyến $\vec n=(a;b)\ne\vec0$, điểm M(x;y) thuộc d khi $\vec n\cdot\overrightarrow{M_0M}=0$. Suy ra $a(x-x_0)+b(y-y_0)=0$, hay $ax+by+c=0$ với $(a,b)\ne(0,0)$. Vectơ chỉ phương có thể lấy $\vec u=(-b;a)$; tham số: $(x,y)=(x_0,y_0)+t(u_1,u_2)$. Không dùng hai số a=b=0 để gọi đó là đường thẳng.

        **Quan hệ và khoảng cách:** Hai đường thẳng có pháp tuyến cùng phương thì song song hoặc trùng nhau; cần kiểm thêm hằng số. Góc giữa hai đường được xét qua hai vectơ chỉ phương hoặc pháp tuyến. Khoảng cách từ A(x_A;y_A) tới d là $d(A,d)=|ax_A+by_A+c|/\sqrt{a^2+b^2}$. **Vì sao trị tuyệt đối?** Khoảng cách là độ dài không âm; tử là biểu thức định hướng. Nếu không có mẫu khác 0 (a=b=0), "công thức khoảng cách" không có nghĩa.

        ### Đường tròn: từ khoảng cách cố định tới tập hợp điểm

        Một điểm M thuộc đường tròn tâm I(a;b), bán kính R>0 khi $IM=R$. Bình phương khoảng cách tạo $(x-a)^2+(y-b)^2=R^2$. Nếu khai triển thành $x^2+y^2+Dx+Ey+F=0$, cần điều kiện $R^2=(D^2+E^2)/4-F>0$ mới là đường tròn thật (R=0 chỉ còn điểm, R²<0 vô nghiệm thực). Tiếp tuyến tại điểm T trên đường tròn vuông góc bán kính IT; không đoán từ nét tiếp xúc của hình vẽ.

        ### Ba đường conic: cùng là quỹ tích nhưng định nghĩa khác nhau

        - **Ellipse** chuẩn $x^2/a^2+y^2/b^2=1$, a>b>0. Hai tiêu điểm F1, F2 tại $(\pm c,0)$ với $c^2=a^2-b^2$. Bản chất: tổng khoảng cách tới hai tiêu điểm bằng $2a$. Không hoán đổi a,b mà vẫn giữ tên trục lớn Ox.
        - **Hyperbola** chuẩn $x^2/a^2-y^2/b^2=1$, a,b>0, $c^2=a^2+b^2$. Bản chất: **giá trị tuyệt đối của hiệu** hai khoảng cách tới tiêu điểm bằng $2a$. Không thay dấu trừ bằng dấu cộng.
        - **Parabola** chuẩn $y^2=2px$, p>0. Tiêu điểm $F(p/2;0)$, đường chuẩn $x=-p/2$; mỗi M trên parabol cách đều F và đường chuẩn. Đừng nhầm p với hoành độ tiêu điểm.

        **Ranh giới:** Các đường conic học ở đây là dạng chính tắc với trục song song hệ trục và tham số thỏa điều kiện; không suy rằng mọi phương trình bậc hai hai ẩn đều là ellipse, hyperbola hoặc parabola. Bài toán thực tế phải kiểm ý nghĩa vật lý, miền chấp nhận và đơn vị.

        **Hướng dẫn đọc hình D5:** Đường thẳng: nhận pháp tuyến vuông góc đường, nhìn dấu khoảng cách. Đường tròn: đặt tâm và so bán kính. Conic: đánh dấu tiêu điểm, đỉnh và trục đối xứng, đọc dạng dấu cộng/trừ trong phương trình, không lấy tỷ lệ ảnh làm chứng cứ độ dài thật. Sử dụng figure gốc SGK ChVII sau khi kiểm exact blob; chưa tuyên bố hình đã chạy trên Topic website.

        ### Sáu ví dụ có lựa chọn phương pháp và giới hạn

        1. Qua A(1;2), B(3;6), ta cần đường thẳng từ **hai điểm**. Vectơ chỉ phương AB=(2;4), chọn pháp tuyến (2;-1) ⇒ $2(x-1)-(y-2)=0$ ⇒ $2x-y=0$. Kiểm cả A,B thỏa.
        2. Qua M(1;-2) và pháp tuyến n=(2;-3), dùng tích vô hướng pháp tuyến ⇒ $2(x-1)-3(y+2)=0$, hay $2x-3y-8=0$. **Không** viết $2x-3y+8$ khi chưa thế điểm kiểm.
        3. Khoảng cách P(1;2) đến $3x+4y-10=0$ bằng $|3+8-10|/5=1/5$; chọn công thức pháp tuyến vì cần đoạn vuông góc ngắn nhất.
        4. Đường tròn tâm I(-2;3), R=4 có $(x+2)^2+(y-3)^2=16$. Nếu hỏi tiếp tuyến tại T, phải biết T thuộc đường tròn rồi dùng IT là pháp tuyến.
        5. Ellipse $x^2/9+y^2/4=1$: a=3,b=2,c=$\sqrt5$, F1/F2=(±√5;0), tổng khoảng cách luôn 6. Đây là **định nghĩa quỹ tích**, không chỉ đọc phương trình.
        6. Parabol $y^2=8x$: $2p=8$ nên p=4, F(2;0), đường chuẩn x=-2. Kiểm M(2;4): khoảng cách MF=4, tới đường chuẩn cũng 4; không lấy F=(4;0).

        ### Hai Tự thử trước Luyện tập

        1. Đường thẳng qua M(1;2), pháp tuyến (3;1): $3x+y-5=0$ hay $3x+y+5=0$?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        dấu −5 vì thế (1,2) phải được 0.

        </details>
        2. $y^2=6x$ thì tiêu điểm nằm ở (3;0) hay (1,5;0)?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        p=3, F=(1,5;0), đường chuẩn x=-1,5. Nếu sai, xem lại hệ số 2p.

        </details>


    === "5 · Quan hệ hình học trong không gian"

        #### 5. Quan hệ hình học trong không gian

        **Khám phá.** Hai cạnh vẽ trên tờ giấy có vẻ không cắt nhau; liệu trong không gian chúng có thể chéo nhau? Hãy hình dung một hình tứ diện và xét khả năng đồng phẳng trước khi kết luận. **Điều cần nhận ra:** hình chiếu trên giấy không tự chứng minh quan hệ không gian.

        **S1:** SGK Toán 11 Tập Một Chương IV **70–103** (PDF trang 71–104), SBT Tập Một 53–74 (PDF 54–75), trọng tâm quan hệ điểm–đường–mặt, song song, phép chiếu song song; SGK Toán 11 Tập Hai Chương VII B22–B26 **27–60** (PDF 28–61), bài V thể tích B27 61–63 khi cần hiểu chiều cao; SBT Tập Hai B22–B26 in24–37/PDF25–38, B27 in38–40/PDF39–41. Bản scan đã xem ở các mốc nguồn; bài này là **tiền đề hình học độc lập**, không đưa Oxyz vào trước khi học sinh biết tại sao phải dùng tọa độ.

        ## Kiến thức — Vì sao cần nhìn hình đúng trước khi giải tọa độ?

        Một bản vẽ phẳng có thể làm hai thanh của một cây cầu trông như giao nhau, nhưng ngoài đời chúng nằm ở hai độ sâu khác nhau. Vì vậy để mô tả **đường thẳng, mặt phẳng, góc, khoảng cách trong không gian**, phải phân biệt điều suy được từ giả thiết và điều chỉ là cảm giác do phối cảnh. Vectơ/tọa độ ở phần 6–7 chỉ hữu ích khi ta hiểu đúng hình học cần biểu diễn.

        **Tiền đề:** Đã biết đường thẳng, mặt phẳng hình dung được, song song/vuông góc trong mặt phẳng, vectơ khác không, góc giữa hai vectơ. Khi vẽ, dùng nét liền cho cạnh nhìn thấy, nét đứt cho cạnh khuất; **nét đứt không phải chứng cứ** của quan hệ vuông góc hay giao nhau.

        ### 1. Đường thẳng và mặt phẳng: có nhiều khả năng không giống hình phẳng

        Hai đường phân biệt trong không gian: **cắt nhau**, **song song** (đồng phẳng, không có điểm chung), hoặc **chéo nhau** (không đồng phẳng, không cắt). Một đường so với một mặt phẳng: nằm trong, cắt tại một điểm, hoặc song song (không có điểm chung). Hai mặt phẳng phân biệt: cắt theo đường thẳng hoặc song song. Khi chứng minh quan hệ, phải nêu giả thiết đồng phẳng/không nằm trong trước khi dùng các dấu hiệu quen thuộc.

        **Ví dụ cơ sở:** Trong tứ diện ABCD, AB và CD là **chéo nhau**, vì nếu đồng phẳng thì toàn bộ A,B,C,D đồng phẳng, trái giả thiết tứ diện. Không được kết luận chúng song song chỉ vì nét vẽ không giao.

        ### 2. Góc giữa hai đường (có thể chéo nhau)

        Qua một điểm O chọn các đường song song với hai đường đang xét, rồi đo **góc nhỏ** giữa chúng (từ 0° đến 90°). Hai đường có phương vuông góc vẫn được gọi là vuông góc dù **không giao nhau**; phải phân biệt "vuông góc theo phương" với "cắt nhau tại góc vuông". Thay bằng đường song song giữ phương nên góc không đổi. Chọn góc lớn 120° giữa hai vectơ đối hướng rồi ghi góc đường–đường 120° là sai quy ước này.

        ### 3. Vuông góc đường–mặt phẳng: vì sao chỉ một đường là chưa đủ?

        Đường d vuông góc mặt phẳng (P) khi phương của d vuông góc **mọi đường trong (P)**. Dấu hiệu thực hành quan trọng: nếu d vuông góc **hai đường cắt nhau** a,b cùng nằm trong (P), thì d vuông góc (P). Chỉ biết d vuông góc **một** đường thuộc (P) không đủ: d có thể nằm ngay trong (P) nhưng vuông góc với đường ấy. Với hình chóp S.ABC có SA⊥(ABC), SA vuông góc AB, AC, BC (mọi đường trong đáy).

        ### 4. Hình chiếu vuông góc và góc đường–mặt

        Từ điểm A, hạ AH⊥(P); H là hình chiếu, $d(A,(P))=AH$ là đoạn ngắn nhất từ A tới (P). Nếu AB là đoạn xiên và H là hình chiếu của B lên (P), A thuộc (P), hình chiếu AB trên (P) là AH (trừ trường hợp H=A). Góc giữa AB và (P) là góc nhọn hoặc vuông giữa AB và hình chiếu AH: $\sin\alpha=BH/AB$ trong tam giác vuông ABH. Khi AB nằm trong (P), góc 0°; khi AB⊥(P), góc 90° và hình chiếu là một điểm — không dùng đoạn AH=0 làm đường thẳng để đo góc.

        **Định lí ba đường vuông góc:** Quan hệ giữa một đường trong mặt phẳng với hình chiếu vuông góc của một đường xiên có thể dùng để suy vuông góc; phải dựng và nêu **đúng đường chiếu** trước khi áp dụng, không lấy hình chiếu xiên tuỳ tiện.

        ### 5. Hai mặt phẳng và góc nhị diện

        Hai mặt phẳng có thể vuông góc: có một đường nằm trong mặt thứ nhất và vuông góc với mặt thứ hai là dấu hiệu. **Góc giữa hai mặt phẳng** theo quy ước nằm trong [0°,90°], còn **góc nhị diện có hướng chọn hai nửa mặt phẳng** có thể nằm trong [0°,180°]. Muốn đọc góc giữa hai mặt, chọn một thiết diện **vuông góc giao tuyến** và đo góc phù hợp; hình vẽ nghiêng dễ đánh lừa. Không đo đại góc giữa hai nét trên phối cảnh.

        ### 6. Khoảng cách không gian: luôn hỏi đoạn nào vuông góc?

        - Điểm → đường/mặt: đo đoạn vuông góc ngắn nhất, bằng 0 nếu điểm nằm trên đối tượng.
        - Đường song song mặt phẳng: khoảng cách từ **một điểm bất kỳ trên đường** đến mặt, không phải đoạn nối xiên bất kỳ.
        - Hai mặt phẳng song song: khoảng cách giữa hai điểm chiếu theo phương vuông góc chung.
        - Hai đường chéo nhau: khoảng cách bằng **độ dài đoạn vuông góc chung** nối hai đường (khi tồn tại, là duy nhất); không lấy một cạnh bất kỳ làm khoảng cách nếu chưa chứng minh vuông góc với cả hai.
        - Chiều cao lăng trụ/chóp là khoảng cách vuông góc giữa đáy và đỉnh/mặt đáy, không nhất thiết là cạnh bên xiên. Đây là cầu nối với bài toán thể tích, **không** lập phần thể tích riêng vượt trục của Chuyên đề.

        **D5 đọc hình:** Dùng figure SGK gốc G11 ChIV/ChVII bằng **placement**: tứ diện để chỉ đường chéo nhau, hình chóp có đường cao và mặt phẳng đáy, hình hộp để phân biệt giao nhau/chéo nhau, sơ đồ điểm A và hình chiếu H. Các tọa độ dựng ở Phần 6 chỉ là cách kiểm chứng, không thay đọc hình học không gian. Chưa ghi AP3/browser PASS.

        ### Sáu ví dụ có giải thích chọn phương pháp

        1. Trong tứ diện ABCD, AB và CD là hai đường **chéo nhau**. Chọn chứng minh không đồng phẳng thay vì dựa vào hai nét trên giấy; nếu chúng cùng nằm một mặt thì bốn đỉnh đồng phẳng, mâu thuẫn.
        2. Cho d⊥a, d⊥b, a,b **cắt nhau** và nằm trong (P). Suy ra d⊥(P). Nếu a,b song song không đủ như một dấu hiệu độc lập; cần kiểm điều kiện cắt nhau.
        3. Chóp S.ABC có SA⊥(ABC). Với H nằm trong đáy, SA⊥AH và SA⊥BC. Độ cao từ S tới đáy là SA; không lấy SB nếu SB xiên.
        4. Tam giác vuông ABH với AH nằm trong (P), BH⊥(P), AB=10, BH=6. Góc giữa AB và (P) là $\arcsin(6/10)\approx36,87°$, vì sin đo phần vuông góc; không lấy cos=6/10 khi đó là cạnh đối.
        5. Trong hình hộp chữ nhật có cạnh ba phương dài (a,b,c), AB dọc phương x và CC' dọc z, chúng **chéo nhau** và có góc giữa phương là 90°. Khoảng cách là BC=b vì BC vuông góc cả AB và CC' và nối B thuộc AB đến C thuộc CC'. Không lầm “vuông góc ⇒ cắt nhau”.
        6. Một cột dựng thẳng trên sàn: chỉ kiểm cột vuông góc với một đường kẻ trên sàn là chưa đủ; phải xác nhận hai phương cắt nhau độc lập trên mặt sàn. Đây là lý do tiêu chí hai đường cắt nhau có ích thực tế.

        ### Hai Tự thử (tự chọn rồi tự mở)

        - **5A:** Trong tứ diện ABCD, hai cạnh đối AB, CD không giao; chúng song song hay chéo?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        chéo nhau vì không đồng phẳng.

        </details>
        - **5B:** d vuông góc một đường a thuộc (P). Có suy d⊥(P) ngay được không?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        không; cần thêm điều kiện như vuông góc hai đường cắt nhau của (P).

        </details>


=== "Tọa độ không gian Oxyz"

    === "6 · Vectơ và hệ tọa độ Oxyz"

        #### 6. Vectơ và hệ tọa độ Oxyz

        **Khám phá.** Hai điểm của một drone có cùng hình chiếu trên bản đồ nhưng độ cao khác nhau. Tọa độ (x;y) có đủ không? **Điều cần nhận ra:** trục z bổ sung vị trí theo chiều cao, mọi phép toán vectơ vẫn cùng bản chất.

        **S1:** SGK Toán 12 KNTT Tập Một Chương II B06–B08 **trang in 45–72 ↔ PDF 47–74 (1-based)**; SBT Tập Một **trang in 38–54 ↔ PDF 36–52**, lưu ý **hai PDF có offset khác nhau**. SGK B06 vectơ không gian p45–59, B07 hệ tọa độ p60–66, B08 biểu thức tọa độ p67–72; trích từ nguồn gốc và canonical SGK blob `856a37bd16d2746ffc2e12906de18d1f4338a3b6` (SGK PASS chỉ đúng snapshot SGK). Không nhân bản các câu gốc khi đặt sang Topic.

        ## Kiến thức — khi hai chiều không đủ

        **Vì sao cần học?** Một drone bay trên sân có thể ở cùng vị trí nhìn trên bản đồ Oxy nhưng cao hơn mặt đất một khoảng khác. Hai tọa độ x,y không đủ mô tả độ cao. Ta thêm trục z vuông góc với hai trục cũ và biểu diễn mỗi điểm bằng bộ ba $(x;y;z)$. Đây vẫn là ý tưởng **định vị bằng độ dời theo các phương độc lập**, không phải học ba bảng công thức mới tách rời.

        **Tiền đề:** Phần 1–3: vectơ, cộng/trừ, nhân số, Oxy, tích vô hướng; Phần 5: đọc hình không gian, phân biệt nét thể hiện và góc thật. Nếu chưa biết trục Ox,Oy, hãy đọc lại ví dụ A→B trên mặt phẳng trước khi tăng chiều.

        ### Từ hình hộp đến vectơ trong không gian

        Vectơ trong không gian vẫn có điểm đầu/cuối và có thể tịnh tiến nếu giữ độ dài/hướng; quy tắc ba điểm và hình bình hành vẫn đúng, hình hộp cho quy tắc cộng ba cạnh từ một đỉnh để tới đỉnh đối diện. Góc giữa hai vectơ **khác không** có thể được đo sau khi đưa chúng về chung một gốc; tích vô hướng vẫn là tích hai độ dài với cos góc.

        **Hệ trục Oxyz trực chuẩn:** Gốc O và ba trục vuông góc đôi một, vectơ đơn vị $\vec i,\vec j,\vec k$. Với $A(x_A;y_A;z_A)$, $B(x_B;y_B;z_B)$:

        $$\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A).$$

        **Đọc hình:** Mọi hình chiếu xiên trên giấy đều làm ba trục trông không thật vuông; các **góc thật** giữa Ox,Oy,Oz vẫn 90° theo định nghĩa hệ tọa độ, không đo bằng thước góc trên ảnh. Điểm A và vectơ OA có cùng bộ ba số khi gốc chính là O, nhưng không đồng nhất khái niệm *điểm* với *vectơ*.

        ### Phép toán, tích vô hướng, độ dài

        Với $\vec u=(a;b;c)$, $\vec v=(d;e;f)$:

        - $\vec u\pm\vec v=(a\pm d;b\pm e;c\pm f)$, $t\vec u=(ta;tb;tc)$.
        - $\vec u\cdot\vec v=ad+be+cf$; $|\vec u|=\sqrt{a^2+b^2+c^2}$; $AB=\sqrt{(\Delta x)^2+(\Delta y)^2+(\Delta z)^2}$.
        - **Vuông góc** nếu dot=0 và **hai vectơ đều khác không**; khi tính cos cần chia cho tích hai độ dài khác 0 và giữ kết quả trong [-1,1].
        - **Cùng phương** với hai vectơ khác 0 khi tồn tại t≠0 thỏa $\vec v=t\vec u$; không tự chia theo tọa độ có thể bằng 0, xem trường hợp vectơ-không riêng theo KNTT.
        - **Trung điểm** $M=((x_A+x_B)/2;(y_A+y_B)/2;(z_A+z_B)/2)$; **trọng tâm tam giác** là trung bình tọa độ ba đỉnh. Không nhầm trọng tâm **tứ diện** (nếu đề mở rộng), trong chuẩn cơ bản ở đây xét tam giác.

        ### Liên hệ với thực tế và giới hạn

        Chọn gốc/tọa độ/đơn vị trước khi tính. Một tọa độ âm chỉ vị trí theo **hướng âm của trục**, không phải "độ dài âm". Nếu hình cho đơn vị mét mà đáp án tính km, phải đổi đơn vị. Khi dùng góc/độ dài, nhớ điều kiện vectơ khác không. Không suy tất cả vật thể 3D có thể mô tả đúng chỉ bằng khoảng cách: hướng và tham chiếu cũng cần thiết.

        **D5 đọc hình:** Hình nguồn SGK B06–B08 có quy tắc hình hộp và ba trục; dùng lại bằng `placement`, không sao chép ảnh cũ. Nhận O và hướng dương Ox/Oy/Oz, phân biệt hình chiếu của một điểm theo phương từng trục; kiểm công thức AB bằng B−A thay vì đọc con số trên phối cảnh.

        ### Sáu ví dụ D2 với lựa chọn phương pháp

        1. A(1;−2;3), B(4;0;−1) ⇒ AB=(3;2;−4); thử cộng vectơ AB vào tọa độ A cho đúng B.
        2. Độ dài AB ở ví dụ trên là $\sqrt{3^2+2^2+(-4)^2}=\sqrt{29}$. Kết quả luôn không âm, không cộng đại số 3+2−4.
        3. $\vec u=(1;2;−1),\vec v=(2;−1;0)$ ⇒ dot =2−2+0=0; hai vectơ khác 0 ⇒ vuông góc. Không đòi hình vẽ trông là 90°.
        4. A(0;2;−1),B(4;−2;5), trung điểm M=(2;0;2). Dùng tính chất MA+MB=0 để kiểm mỗi tọa độ.
        5. Tam giác A(0;0;0),B(3;0;0),C(0;6;3), G=(1;2;1); có thể dựng trung tuyến rồi kiểm AG=2/3 AM.
        6. Dời drone từ (2;−1;4) tới (−1;3;6) ⇒ vectơ dời (−3;4;2), độ dài $\sqrt{29}$. Cần chọn vị trí **cuối−đầu**, không nhầm độ cao 6 với độ dời thẳng.

        ### Hai Tự thử trước Luyện tập

        - **6A:** A(−2;1;3), B(1;−1;5) có AB bằng (3;−2;2) hay (−3;2;−2)?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        (3;−2;2), vì B−A.

        </details>
        - **6B:** u=(1;2;−1), v=(2;−1;0) có vuông góc?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        có vì dot=0 và cả hai khác 0. Nếu thay u=0, không gọi góc giữa hai vectơ là 90°.

        </details>


    === "7 · Mặt phẳng, đường thẳng, mặt cầu Oxyz"

        #### 7. Mặt phẳng, đường thẳng, mặt cầu Oxyz

        **Khám phá.** Một đường bay đi qua A(1;2;3) theo hướng (1;1;−1) có cắt mặt phẳng x+2y+2z−9=0 không? Trước khi tính, hãy đặt câu hỏi: đường bay được cho bằng điểm và hướng, mặt phẳng được cho bằng pháp tuyến. **Điều cần nhận ra:** thay tham số vào phương trình để kiểm điều kiện giao.

        **Nguồn S1:** SGK Toán 12 KNTT Tập Hai, Chương V **B14–B17, trang in 29–60 ↔ PDF 31–62**, cuối chương 61–63/PDF 63–65. SBT Tập Hai B14–B17 trang in 22–34 nhưng **thiếu hẳn trang SBT in25** trong scan: in22–24 tương ứng PDF21–23; tiếp theo PDF24 đã là in26, các trang B15–B17 tiếp nối tới in34/PDF32. Reviewer không được tưởng trang 25 đã được quan sát; không dựa vào câu 5.6–5.7 để coi Q01 tự PASS. Nguồn gốc SGK canonical `11eb2834cfdb4a24685157f84666c2bb0767970a`, lịch sử targeted Q01 và rubric đã lưu tại manifest SGK, **không** chuyển tự động PASS sang Topic.

        ## Kiến thức — từ câu hỏi "hình gì?" tới phương trình 3D

        **Vì sao cần học?** Một chiếc máy bay bay thẳng trong không gian, mặt đất là một mặt phẳng, radar đo khoảng cách tới một điểm cố định có dạng mặt cầu. Để kiểm tra máy bay có cắt một mặt phẳng nguy hiểm hay có đi vào vùng hình cầu, ta cần biểu diễn hình bằng **phương trình/toạ độ**. Nhưng chưa có ý nghĩa gì nếu chỉ học mẫu công thức mà không hiểu vectơ chỉ phương/pháp tuyến là gì.

        **Tiền đề:** Phần 5 đã biết đường/mặt/phép chiếu/khoảng cách; Phần 6 biết vectơ, tích vô hướng và ba trục Oxyz. Nếu không diễn tả được "đường vuông góc mặt" bằng hình, quay lại phần 5 trước khi dùng pháp tuyến.

        ### 1. Mặt phẳng: pháp tuyến tạo điều kiện vuông góc

        Mặt phẳng (P) qua $M_0(x_0;y_0;z_0)$ có pháp tuyến $\vec n=(a;b;c)\ne\vec0$ gồm các M thỏa $\vec n\cdot\overrightarrow{M_0M}=0$. Từ đó:

        $$a(x-x_0)+b(y-y_0)+c(z-z_0)=0,$$

        hay $ax+by+cz+d=0$ với $a^2+b^2+c^2>0$. Một mặt phẳng không thể có ba hệ số a=b=c=0. Mặt phẳng có một phương trình nhưng có **vô số vectơ pháp tuyến** là các bội khác 0 của nhau.

        **Tại sao chọn pháp tuyến?** Điều kiện nằm trong mặt có nghĩa độ dời theo phương bất kỳ **nằm trong mặt** vuông góc pháp tuyến. Nếu đề cho ba điểm không thẳng hàng, trước hết tìm hai vectơ cùng trong mặt rồi tìm pháp tuyến vuông góc cả hai (bằng hệ thức tuyến tính/định thức phù hợp), không đoán phương trình từ hình phối cảnh.

        **Khoảng cách điểm–mặt:** $d(A,(P))=|ax_A+by_A+cz_A+d|/\sqrt{a^2+b^2+c^2}$, bằng 0 khi A thuộc mặt. Tử có trị tuyệt đối vì khoảng cách không âm; mẫu là độ dài pháp tuyến và khác 0.

        ### 2. Đường thẳng: điểm đi qua + hướng chuyển động

        Đường d qua $M_0(x_0;y_0;z_0)$, vectơ chỉ phương $\vec u=(u_1;u_2;u_3)\ne\vec0$ gồm các điểm:

        $$(x;y;z)=(x_0;y_0;z_0)+t(u_1;u_2;u_3),\qquad t\in\mathbb R.$$

        Phương trình tham số luôn dùng được dù có một thành phần u_i=0. **Dạng chính tắc chia cho u_i chỉ dùng nếu cả ba thành phần được chia đều khác 0**; nếu u_i=0, biến tọa độ tương ứng là hằng số. Kiểm điểm M thuộc d bằng một **giá trị t chung cho cả ba phương trình**, không lấy ba tham số khác nhau.

        **Vị trí tương đối:** Đường–mặt: thay phương trình tham số đường vào phương trình mặt cho phương trình một ẩn t. Một nghiệm → cắt tại một điểm; vô nghiệm → song song phân biệt; đúng với mọi t → đường nằm trong mặt. Hai mặt có pháp tuyến cùng phương: song song phân biệt hoặc trùng, phải so hệ số tất cả thành phần/hằng số; pháp tuyến không cùng phương → cắt theo đường.

        ### 3. Góc và vuông góc từ các vectơ chỉ phương/pháp tuyến

        - Góc giữa hai đường dùng góc nhỏ giữa hai **vectơ chỉ phương**: $\cos\theta=|\vec u\cdot\vec v|/(|\vec u||\vec v|)$, hai vectơ khác 0.
        - Góc giữa hai mặt phẳng dùng góc nhỏ giữa hai **pháp tuyến**: $\cos\varphi=|\vec n_1\cdot\vec n_2|/(|\vec n_1||\vec n_2|)$.
        - Đường d vuông góc mặt (P) khi vectơ chỉ phương u **cùng phương** pháp tuyến n của (P), không phải khi dot(u,n)=0. Nếu dot(u,n)=0 thì phương của d song song (P); cần thế điểm để phân biệt d nằm trong hay song song phân biệt.
        - Góc đường–mặt bổ sung với góc giữa u và n: $\sin\alpha=|\vec u\cdot\vec n|/(|\vec u||\vec n|)$, với các vectơ khác 0. Không thay sin bằng cos.

        ### 4. Mặt cầu và ứng dụng sau khi đã biết mặt phẳng/đường thẳng

        Tập điểm cách đều I(a;b;c) một khoảng R>0 có phương trình $(x-a)^2+(y-b)^2+(z-c)^2=R^2$. **Không** nhầm mặt cầu (bề mặt) với **khối cầu** (cả bên trong). Một điểm M thuộc mặt cầu khi bình phương khoảng cách đến I bằng R². Với mặt phẳng (P), nếu khoảng cách từ I đến (P) là h: h>R thì không cắt, h=R tiếp xúc, h<R cắt theo đường tròn bán kính $\sqrt{R^2-h^2}$ (nếu h=0 là đường tròn lớn). **Chỉ xem đây là ứng dụng tích hợp sau khi đã học xong B17**, không biến nó thành một outcome bắt buộc của bài mặt phẳng B14 trước B17.

        **Điều kiện và kiểm nghiệm:** Một phương trình đúng có thể tạo ra nghiệm toán học không phù hợp dữ liệu thực tế (chẳng hạn t âm khi t biểu diễn thời gian sau lúc bắt đầu). Luôn nêu hệ trục, đơn vị, phạm vi t và kiểm lại nghiệm vào phương trình gốc.

        **D5:** Dùng nguyên sáu hình PNG đã reviewer xem trong nguồn SGK ChV (ảnh hình học/mặt/cầu/pháp tuyến) qua placement, không tự tuyên bố đã tái bản đúng trên website. Đọc nhãn trục, góc, phương pháp tuyến/chỉ phương; hình nghiêng không quyết định dấu các tích vô hướng. Sơ đồ ví dụ dưới có lời dẫn bằng chữ, học sinh không phải rời sang SGK để nắm công thức bắt buộc.

        ### Sáu ví dụ D2 — suy luận trước công thức

        1. **Mặt phẳng qua A có n:** A(1;2;3), n=(2;−1;1). Từ dot $2(x-1)-(y-2)+(z-3)=0$ suy ra **2x−y+z−3=0**. Thế A:2−2+3−3=0 kiểm đúng.
        2. **Khoảng cách điểm–mặt:** P(1;2;3) tới x+2y+2z−9=0: $|1+4+6-9|/3=2/3$. Không bỏ mẫu norm n=3.
        3. **Đường thẳng khi một hệ số hướng có thể bằng 0:** Qua M(1;0;2), u=(2;−1;3), dạng tham số (1+2t;−t;2+3t); không bắt buộc viết dạng chính tắc.
        4. **Giao điểm:** d:(x;y;z)=(0;0;1)+t(1;1;−1), mặt z=0 ⇒ 1−t=0 ⇒ t=1 ⇒ (1;1;0). Thế vào cả đường và mặt.
        5. **Hai mặt trùng hay song song:** (P):x+2y+3z=1, (Q):2x+4y+6z=4 có pháp tuyến cùng phương, nhưng Q tương đương x+2y+3z=2 ≠ P, nên song song phân biệt. Nếu Q vế phải 2 thì trùng P.
        6. **Mặt cầu cắt mặt phẳng:** $x^2+y^2+z^2=25$ (I=O,R=5) và z=3. Tâm cách mặt 3<5 nên giao tuyến là đường tròn $x^2+y^2=16,z=3$, bán kính 4. **Đây là ứng dụng sau B17**, không được gán như Core B14 ban đầu.

        ### Hai Tự thử trước Luyện tập

        - **7A:** M(1;0;2), n=(2;−1;1), mặt đi qua M có phương trình $2x-y+z-4=0$ hay $2x-y+z+4=0$?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        −4 vì thế (1,0,2) cho 0.

        </details>
        - **7B:** u=(1;0;0), pháp tuyến n=(1;0;0) của (P), đường theo u song song mặt hay vuông góc mặt?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        vuông góc mặt vì u cùng phương n; nếu dot=0 mới là hướng song song mặt.

        </details>


<!-- TOPIC_KNOWLEDGE_END -->

<!-- TOPIC_PRACTICE_BEGIN -->
# Luyện tập

**Cách luyện:** Ở mỗi phần, làm câu nền tảng trước, sau đó tự chọn phương pháp cho câu vận dụng và bài tự luận. Bài gốc được tải qua **một thư viện item canonical**, không tạo bản sao đề, đáp án hoặc rubric. Sau khi nộp câu luyện tập mới mở đáp án/lời giải, đọc lỗi thường gặp và làm câu tương đương. Luyện tập không tự tạo chứng cứ Mastery.

## 1. Vectơ: độ lớn, phương và hướng

**Bộ câu canonical trong mảng này:** `THPT-G10-B07-C01` · `THPT-G10-B07-C02` · `THPT-G10-B07-P01` · `THPT-G10-B07-P02` · `THPT-G10-B07-P03` · `THPT-G10-B07-P04` · `THPT-G10-B07-P05` · `THPT-G10-B07-P06` · `THPT-G10-CHIV-W07` · `THPT-TOPIC-VECTOR-P1-R01-T01` · `THPT-TOPIC-VECTOR-P1-R01-P01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Bài tập và ngân hàng dùng chung

| ID canonical SGK (giữ một câu/đáp án/lời giải) | Mục tiêu chính | Đầu ra/lời giải bắt buộc |
|---|---|---|
| `THPT-G10-B07-C01` | điểm đầu/cuối | B: đầu A, cuối B |
| `THPT-G10-B07-C02` | hai vectơ bằng nhau | C: cùng hướng và độ dài |
| `THPT-G10-B07-P01` | độ dài | 7 cm kể cả BA đảo hướng |
| `THPT-G10-B07-P02` | hình bình hành | A: DC bằng AB |
| `THPT-G10-B07-P03` | vectơ ngược | CD ngược AB |
| `THPT-G10-B07-P04` | quy ước vectơ-không | D: độ dài 0, cùng hướng theo quy ước |
| `THPT-G10-B07-P05` | cùng hướng ≠ bằng | B: AC và CB dài khác nhau nhưng cùng hướng nếu A,C,B theo thứ tự |
| `THPT-G10-B07-P06` | độ dài độ dời | 5 km vì $\sqrt{4^2+3^2}=5$; quãng đường 7 km |
| `THPT-G10-CHIV-W07` | lập luận tự luận hình bình hành | Rubric một nguồn SGK gốc, **7 điểm**, mở đối chiếu sau khi giải, không Mastery |

**Câu mới cần review (không nhân bản SGK):** `THPT-TOPIC-VECTOR-P1-R01-T01`: A,M,B khác nhau, M nằm giữa A,B ⇔ hai vectơ MA, MB ngược hướng. `THPT-TOPIC-VECTOR-P1-R01-P01`: A,B,C phân biệt và AB,AC cùng phương ⇒ ba điểm thẳng hàng (vì hai giá chung A phải trùng nhau); **không** suy C nằm giữa AB. Rubric tự đối chiếu P01 /3: 1 điểm hai giá qua A, 1 điểm chúng trùng, 1 điểm bác kết luận nằm giữa có phản ví dụ. Nội dung/ID mới là DELTA_C, reviewer kiểm toán riêng.

### Khắc phục (D6)

- **Nhầm AB/BA:** Vẽ đuôi mũi tên ở chữ đầu và đầu mũi tên ở chữ sau; quay lại `HELP-G10-B07-01` rồi thử `P03`.
- **Nhầm cùng phương/cùng hướng/bằng nhau:** So độ dài **sau** khi xác định hướng; với $\vec0$ dùng đúng quy ước KNTT, tham chiếu `HELP-G10-B07-02`.
- **Nhầm tia và đoạn:** Lấy thứ tự A–B–M; AB và AM cùng hướng nhưng M không giữa; tự kiểm bằng hướng MA và MB.

</details>

## 2. Cộng, trừ và nhân vectơ với số

**Bộ câu canonical trong mảng này:** `THPT-G10-B08-C01` · `THPT-G10-B08-C02` · `THPT-G10-B08-P01` · `THPT-G10-B08-P02` · `THPT-G10-B08-P03` · `THPT-G10-B08-P04` · `THPT-G10-B08-P05` · `THPT-G10-B08-P06` · `THPT-G10-B09-C01` · `THPT-G10-B09-C02` · `THPT-G10-B09-P01` · `THPT-G10-B09-P02` · `THPT-G10-B09-P03` · `THPT-G10-B09-P04` · `THPT-G10-B09-P05` · `THPT-G10-B09-P06` · `THPT-G10-CHIV-W08-ANCHOR` · `THPT-G10-CHIV-W09`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Canonical item–role: 16 public formative + hai Written, không nhân bản

| ID gốc | Mục tiêu | Đáp án đúng + mấu chốt |
|---|---|---|
| `THPT-G10-B08-C01` | cộng 3 điểm | A: AC |
| `THPT-G10-B08-C02` | hình bình hành | B: AC |
| `THPT-G10-B08-P01` | vectơ đối | 0 |
| `THPT-G10-B08-P02` | hiệu | CB |
| `THPT-G10-B08-P03` | vòng kín | 0 |
| `THPT-G10-B08-P04` | trung điểm | C: MA+MB=0 |
| `THPT-G10-B08-P05` | trọng tâm | 0 |
| `THPT-G10-B08-P06` | hai lực vuông góc | 5 N cho 3 N và 4 N |
| `THPT-G10-B09-C01` | hệ số âm và độ dài | B: 8 cm, ngược hướng |
| `THPT-G10-B09-C02` | số k=0 | C: 0 |
| `THPT-G10-B09-P01` | độ dài tích số | 18 m cho $|\vec a|=6$ m và $k=3$ |
| `THPT-G10-B09-P02` | phân phối | $\vec a+3\vec b$ từ $3(\vec a+\vec b)-2\vec a$ |
| `THPT-G10-B09-P03` | dấu hệ số | $-\frac35\overrightarrow{AB}$ cho MA nếu M chia 3/5 AB |
| `THPT-G10-B09-P04` | trọng tâm | C: $(AB+AC)/3$ theo vectơ |
| `THPT-G10-B09-P05` | tỉ lệ âm | ngược hướng, $5/2$ |
| `THPT-G10-B09-P06` | độ dời tổng | 3 km Tây khi đi $\vec u$ 3 km Đông rồi $-2\vec u$ |
| `THPT-G10-CHIV-W08-ANCHOR` | tự luận chứng minh trung điểm/trọng tâm | Giữ rubric /7 nguồn gốc SGK, tự đối chiếu, không Mastery |
| `THPT-G10-CHIV-W09` | tự luận tỉ số đoạn thẳng | Giữ rubric /7 nguồn gốc SGK, không câu/rubric khác |

**Luồng Luyện tập:** C01/P01 (cộng, đối) → C02/P02/P03 (quy tắc/trừ/khép kín) → P04/P05/W08 (trung điểm/trọng tâm) → B09-C02/P01/P02 (nhân số) → P03/P04/P05/P06/W09 (ứng dụng). Học sinh phải trả lời **vì sao chọn công thức**, không chỉ điền số.

**D6:** `HELP-G10-B08-01` ghép sai đầu–đuôi → vẽ A→B→C rồi thử lại; `HELP-G10-B08-02` nhầm trung điểm/trọng tâm → đánh dấu M/G và dùng đúng hệ thức; `HELP-G10-B09-01` ghi độ dài âm → tách dấu hệ số/hướng với $|k|$; `HELP-G10-B09-02` nhầm tỷ số AG:GM và AG:AM → vẽ trung tuyến và ghi 2:1 trước khi dùng công thức.

</details>

## 3. Tọa độ và tích vô hướng trên Oxy

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P03-` · `THPT-TOPIC-VEC-P03-C01` · `THPT-TOPIC-VEC-P03-P01` · `THPT-TOPIC-VEC-P03-C02` · `THPT-TOPIC-VEC-P03-P02` · `THPT-TOPIC-VEC-P03-C03` · `THPT-TOPIC-VEC-P03-P03` · `THPT-TOPIC-VEC-P03-C04` · `THPT-TOPIC-VEC-P03-P04` · `THPT-TOPIC-VEC-P03-C05` · `THPT-TOPIC-VEC-P03-P05` · `THPT-TOPIC-VEC-P03-C06` · `THPT-TOPIC-VEC-P03-P06` · `THPT-TOPIC-VEC-P03-C07` · `THPT-TOPIC-VEC-P03-P07` · `THPT-TOPIC-VEC-P03-C08` · `THPT-TOPIC-VEC-P03-P08` · `THPT-TOPIC-VEC-P03-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome/Item/Role — câu mới có một ID canonical ứng viên

| OUTCOME_ID | Nội dung cần đạt | Bằng chứng | D6 |
|---|---|---|---|
| `TOPIC-VEC-P03-O01` | Đọc trục và vectơ tọa độ | P03-C01, P03-P01 | phân biệt vị trí và độ dời |
| `TOPIC-VEC-P03-O02` | Phép toán tọa độ | P03-C02, P03-P02 | cộng thành phần, không cộng độ dài |
| `TOPIC-VEC-P03-O03` | Độ dài/khoảng cách | P03-C03, P03-P03 | dùng bình phương thành phần |
| `TOPIC-VEC-P03-O04` | Cùng phương và ngoại lệ 0 | P03-C04, P03-P04 | dùng tỉ số đúng điều kiện |
| `TOPIC-VEC-P03-O05` | Trung điểm và trọng tâm | P03-C05, P03-P05 | tọa độ trung bình, kiểm điểm |
| `TOPIC-VEC-P03-O06` | Tích vô hướng và dấu | P03-C06, P03-P06 | phân biệt dot với norm product |
| `TOPIC-VEC-P03-O07` | Góc và vuông góc | P03-C07, P03-P07 | hai vectơ khác 0 |
| `TOPIC-VEC-P03-O08` | Ứng dụng lực/công/chọn phương pháp | P03-C08, P03-P08, W03 | chọn dot theo hình chiếu |

Các `ITEM_ID` hoàn chỉnh tương ứng có tiền tố `THPT-TOPIC-VEC-P03-` và hậu tố C01–C08/P01–P08/W01; một `item_id` có một câu/đáp án/lời giải/rubric. Đây là **các ứng viên mới**, chưa nhập website hoặc thư viện đánh giá; không trùng tên ID SGK.

| ITEM_ID | Đề bài (PUBLIC formative; Tự thử mới mở lời giải) | Đáp án + lời giải |
|---|---|---|
| `THPT-TOPIC-VEC-P03-C01` | Cho A(-2;3), B(4;-1). Tính AB theo tọa độ vectơ. | (6;-4) vì B−A=(4+2;-1−3). |
| `THPT-TOPIC-VEC-P03-P01` | Cho A(2;-3), B(-1;1). Tìm BA và AB; kiểm chúng đối nhau. | AB=(-3;4), BA=(3;-4)=-AB. |
| `THPT-TOPIC-VEC-P03-C02` | $\vec u=(2;1),\vec v=(-3;4)$, tính $2\vec u+\vec v$. | (1;6), vì (4;2)+(-3;4). |
| `THPT-TOPIC-VEC-P03-P02` | $\vec u=(1;-2),\vec v=(3;1)$, rút gọn $3(\vec u+\vec v)-2\vec u$. | $\vec u+3\vec v=(10;1)$; khai triển và cộng thành phần. |
| `THPT-TOPIC-VEC-P03-C03` | Tính độ dài $\vec u=(3;-4)$. | 5 do $\sqrt{9+16}$. |
| `THPT-TOPIC-VEC-P03-P03` | A(1;2), B(4;6). Tính AB. | 5 do $\sqrt{3^2+4^2}$. |
| `THPT-TOPIC-VEC-P03-C04` | $\vec u=(2;3),\vec v=(4;6)$ có cùng phương không? | Có, $\vec v=2\vec u$, cả hai khác 0. |
| `THPT-TOPIC-VEC-P03-P04` | Hai vectơ $(2;k)$ và (4;6) cùng phương. Tìm k. | k=3 từ 2·6−4k=0; không chia tùy tiện nếu thành phần 0. |
| `THPT-TOPIC-VEC-P03-C05` | Trung điểm của A(-1;4),B(5;-2)? | M(2;1) theo trung bình hai tọa độ. |
| `THPT-TOPIC-VEC-P03-P05` | Trọng tâm tam giác A(0;0),B(6;0),C(0;9)? | G(2;3), lấy trung bình tọa độ ba đỉnh. |
| `THPT-TOPIC-VEC-P03-C06` | $(2;-1)\cdot(3;4)$ bằng bao nhiêu? | 2 vì 6−4. |
| `THPT-TOPIC-VEC-P03-P06` | $\vec u=(1;0),\vec v=(-2;1)$. Góc giữa chúng là nhọn hay tù? | Tù vì dot=-2<0, cả hai khác 0. |
| `THPT-TOPIC-VEC-P03-C07` | Hai vectơ (3;2) và (2;-3) có vuông góc? | Có: dot=0, khác 0. |
| `THPT-TOPIC-VEC-P03-P07` | Góc giữa (1;0) và (1;1) bằng bao nhiêu? | 45° vì cos=1/√2. |
| `THPT-TOPIC-VEC-P03-C08` | F=(4;3) N và s=(2;-1) m, công bằng bao nhiêu? | 5 J, vì dot=8−3. |
| `THPT-TOPIC-VEC-P03-P08` | F=(2;-3) N, s=(-1;2) m. Dấu công? Tính công. | −8 J, vì dot=−2−6<0; lực cản theo hướng độ dời. |

**Written/Anchor dùng một thư viện:** `THPT-TOPIC-VEC-P03-W01` (PUBLIC tự luận, tự đối chiếu /5). Cho A(-2;1),B(4;3),C(0;7). (a) Tính AB, AC. (b) Chứng minh tam giác ABC vuông hay không tại A. (c) Tính độ dài cạnh BC. **Lời giải:** AB=(6;2), AC=(2;6), dot=12+12=24≠0 nên **không vuông tại A**; BC=(-4;4), $BC=4\sqrt2$. **Rubric /5:** (a) 2 điểm hai hiệu tọa độ; (b) 1,5 điểm dot và kết luận có điều kiện; (c) 1,5 điểm BC, căn tổng bình phương. Học sinh trình bày lập luận, không máy chấm Mastery.

**D6 đường quay lại:** (i) lấy nhầm tọa độ B làm AB ⇒ thử A=O xem khi nào công thức trùng; (ii) dấu sai của tọa độ ⇒ vẽ lưới Oxy, kiểm B=A+AB; (iii) lạm dụng dot=0 với vectơ-không ⇒ đọc lại điều kiện góc; (iv) sai trung điểm/trọng tâm ⇒ giải thích vì sao chia 2 hay 3 trước khi tính. Sau sửa làm lại câu khác cùng outcome, không dùng đáp án vừa xem làm RD1.

</details>

## 4. Đường thẳng, đường tròn và conic

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P04-C01` · `THPT-TOPIC-VEC-P04-P01` · `THPT-TOPIC-VEC-P04-C02` · `THPT-TOPIC-VEC-P04-P02` · `THPT-TOPIC-VEC-P04-C03` · `THPT-TOPIC-VEC-P04-P03` · `THPT-TOPIC-VEC-P04-C04` · `THPT-TOPIC-VEC-P04-P04` · `THPT-TOPIC-VEC-P04-C05` · `THPT-TOPIC-VEC-P04-P05` · `THPT-TOPIC-VEC-P04-C06` · `THPT-TOPIC-VEC-P04-P06` · `THPT-TOPIC-VEC-P04-C07` · `THPT-TOPIC-VEC-P04-P07` · `THPT-TOPIC-VEC-P04-C08` · `THPT-TOPIC-VEC-P04-P08` · `THPT-TOPIC-VEC-P04-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome matrix

| OUTCOME_ID | Năng lực | Câu chính | D6/điều kiện |
|---|---|---|---|
| `TOPIC-VEC-P04-O01` | Vectơ chỉ phương/pháp tuyến | C01,P01 | pháp tuyến phải khác 0 |
| `TOPIC-VEC-P04-O02` | Phương trình đường thẳng và thế kiểm | C02,P02 | thay điểm trở lại |
| `TOPIC-VEC-P04-O03` | Quan hệ hai đường/góc | C03,P03 | phân biệt song song/trùng |
| `TOPIC-VEC-P04-O04` | Khoảng cách điểm–đường | C04,P04 | trị tuyệt đối, mẫu khác 0 |
| `TOPIC-VEC-P04-O05` | Đường tròn, tâm/bán kính | C05,P05 | R>0, thế điểm |
| `TOPIC-VEC-P04-O06` | Tiếp tuyến đường tròn | C06,P06 | điểm tiếp xúc thuộc tròn |
| `TOPIC-VEC-P04-O07` | Ellipse/hyperbola và tiêu điểm | C07,P07 | điều kiện a,b,c, dấu |
| `TOPIC-VEC-P04-O08` | Parabola, quỹ tích và ứng dụng | C08,P08,W01 | tiêu điểm p/2, hình thật |

| ITEM_ID mới — PUBLIC | Đề bài cụ thể | Đáp án + chứng minh ngắn |
|---|---|---|
| `THPT-TOPIC-VEC-P04-C01` | Pháp tuyến n=(2;-3), vectơ chỉ phương có thể là gì? | u=(3;2), dot=6-6=0. |
| `THPT-TOPIC-VEC-P04-P01` | Đường thẳng d: 2x−3y+1=0, cho một vectơ chỉ phương. | u=(3;2), khác 0 và vuông góc pháp tuyến (2;-3). |
| `THPT-TOPIC-VEC-P04-C02` | Đường qua A(1;2),B(3;6): viết phương trình. | $2x-y=0$, kiểm cả hai điểm. |
| `THPT-TOPIC-VEC-P04-P02` | Qua M(1;-2), pháp tuyến (2;-3), phương trình? | $2x-3y-8=0$. |
| `THPT-TOPIC-VEC-P04-C03` | d1: x+2y=1; d2:2x+4y=4, có quan hệ gì? | Song song phân biệt: pháp tuyến tỉ lệ, vế hằng không cùng tỷ lệ. |
| `THPT-TOPIC-VEC-P04-P03` | d1: x+y−2=0; d2: 2x+2y−4=0, quan hệ gì? | Trùng nhau vì phương trình thứ hai bằng 2 lần phương trình thứ nhất. |
| `THPT-TOPIC-VEC-P04-C04` | Khoảng cách P(1;2) đến d:3x+4y−10=0. | 1/5 vì $|3+8-10|/5$. |
| `THPT-TOPIC-VEC-P04-P04` | A(−1;3), d:5x−12y+6=0; tính khoảng cách. | $|-5-36+6|/13=35/13$. |
| `THPT-TOPIC-VEC-P04-C05` | Tròn tâm (−2;3), bán kính 4? | $(x+2)^2+(y-3)^2=16$. |
| `THPT-TOPIC-VEC-P04-P05` | $x^2+y^2−4x+6y−3=0$ có tâm/bán kính gì? | $(x-2)^2+(y+3)^2=16$ ⇒ I(2;−3), R=4. |
| `THPT-TOPIC-VEC-P04-C06` | Tiếp tuyến của $x^2+y^2=25$ tại T(3;4)? | $3x+4y=25$, vì bán kính OT là pháp tuyến tại T. |
| `THPT-TOPIC-VEC-P04-P06` | Tròn $(x-1)^2+(y+2)^2=9$; điểm T(4;−2), tiếp tuyến? | x=4 vì bán kính IT=(3;0), T thuộc tròn. |
| `THPT-TOPIC-VEC-P04-C07` | Ellipse $x^2/9+y^2/4=1$, tiêu điểm? | $(\pm\sqrt5;0)$ vì c²=9−4=5. |
| `THPT-TOPIC-VEC-P04-P07` | Hyperbola $x^2/9−y^2/16=1$, tiêu điểm? | $(\pm5;0)$ vì c²=9+16=25. |
| `THPT-TOPIC-VEC-P04-C08` | Parabola $y^2=8x$ tiêu điểm và đường chuẩn? | F(2;0), x=−2 vì p=4. |
| `THPT-TOPIC-VEC-P04-P08` | Cho $y^2=6x$. M(1,5;3) có nằm trên parabol? | Có vì $3^2=9=6\cdot1,5$; tiêu điểm (1,5;0) là một điểm khác. |

**Written D4 `THPT-TOPIC-VEC-P04-W01`, formative /5:** Đường tròn tâm I(1;−1), bán kính 5 và đường thẳng d:y=2. (a) Chứng minh d cắt đường tròn tại hai điểm. (b) Tìm tọa độ hai giao điểm. (c) Giải thích vì sao có đúng hai giao điểm, không dựa vào hình đo. **Lời giải:** $d(I,d)=|-1-2|=3<5$ ⇒ hai giao điểm. Thế y=2: $(x-1)^2+(2+1)^2=25$ ⇒ $(x-1)^2=16$ ⇒ x=−3 hoặc 5; P(−3;2),Q(5;2). **Rubric:** 1 điểm lập được phương trình tròn; 1 điểm khoảng cách tâm–đường và điều kiện <R; 2 điểm giải hệ và hai tọa độ; 1 điểm giải thích đúng hai nghiệm phân biệt. Không chấm Mastery.

**D6 theo lỗi:** (1) pháp tuyến và chỉ phương nhầm nhau ⇒ chấm dot bằng 0, tự dựng; (2) sai c trong đường thẳng ⇒ thế điểm gốc vào phương trình; (3) khoảng cách âm ⇒ đặt trị tuyệt đối; (4) đường tròn không có R>0 ⇒ hoàn thành bình phương và kiểm; (5) parabola sai tiêu điểm ⇒ giải thích p vs p/2 bằng khoảng cách đến đường chuẩn. Sai conic phải vẽ lại tiêu điểm/trục và thử một điểm, không thay bằng thao tác nhớ mẹo.

</details>

## 5. Quan hệ hình học trong không gian

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P05-C01` · `THPT-TOPIC-VEC-P05-P01` · `THPT-TOPIC-VEC-P05-C02` · `THPT-TOPIC-VEC-P05-P02` · `THPT-TOPIC-VEC-P05-C03` · `THPT-TOPIC-VEC-P05-P03` · `THPT-TOPIC-VEC-P05-C04` · `THPT-TOPIC-VEC-P05-P04` · `THPT-TOPIC-VEC-P05-C05` · `THPT-TOPIC-VEC-P05-P05` · `THPT-TOPIC-VEC-P05-C06` · `THPT-TOPIC-VEC-P05-P06` · `THPT-TOPIC-VEC-P05-C07` · `THPT-TOPIC-VEC-P05-P07` · `THPT-TOPIC-VEC-P05-C08` · `THPT-TOPIC-VEC-P05-P08` · `THPT-TOPIC-VEC-P05-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome matrix

| OUTCOME_ID | Năng lực | Câu PUBLIC | D6 |
|---|---|---|---|
| `TOPIC-VEC-P05-O01` | Điểm, đường, mặt, đồng phẳng | C01,P01 | xác định giả thiết đồng phẳng |
| `TOPIC-VEC-P05-O02` | Hai đường song song, cắt, chéo | C02,P02 | nhìn hình phối cảnh đúng |
| `TOPIC-VEC-P05-O03` | Góc giữa hai đường theo phương | C03,P03 | góc nhỏ, không cần giao nhau |
| `TOPIC-VEC-P05-O04` | Đường vuông góc mặt | C04,P04 | hai đường cắt nhau trong mặt |
| `TOPIC-VEC-P05-O05` | Hình chiếu, góc đường–mặt | C05,P05 | đủ điều kiện hình chiếu |
| `TOPIC-VEC-P05-O06` | Góc hai mặt/nhị diện | C06,P06 | phân biệt góc nhị diện |
| `TOPIC-VEC-P05-O07` | Khoảng cách vuông góc | C07,P07 | đoạn ngắn nhất |
| `TOPIC-VEC-P05-O08` | Đường chéo nhau và ứng dụng chiều cao | C08,P08,W01 | đoạn vuông góc chung |

| ITEM_ID mới — PUBLIC | Đề bài | Đáp án/lời giải ngắn |
|---|---|---|
| `THPT-TOPIC-VEC-P05-C01` | Trong tứ diện ABCD, ba điểm A,B,C có xác định một mặt phẳng không? | Có, ba điểm không thẳng hàng xác định mặt phẳng (ABC). |
| `THPT-TOPIC-VEC-P05-P01` | Trong tứ diện ABCD, D có thuộc (ABC) không? | Không, nếu thuộc thì bốn điểm đồng phẳng, không còn tứ diện. |
| `THPT-TOPIC-VEC-P05-C02` | Hai cạnh đối AB và CD của tứ diện có quan hệ gì? | Chéo nhau do không đồng phẳng, không cắt và không song song. |
| `THPT-TOPIC-VEC-P05-P02` | Hai đường phân biệt trong không gian không cắt nhau, chắc chắn song song? | Không: có thể chéo nhau; cần biết đồng phẳng. |
| `THPT-TOPIC-VEC-P05-C03` | Hai đường có phương lần lượt song song trục x và y vuông góc: góc giữa chúng? | 90° theo phương dù có thể chéo. |
| `THPT-TOPIC-VEC-P05-P03` | Góc giữa hai đường có hai vectơ chỉ phương tạo góc 120° bằng bao nhiêu? | 60° theo quy ước lấy góc nhỏ của hai đường. |
| `THPT-TOPIC-VEC-P05-C04` | d⊥a,d⊥b, a,b cắt nhau trong (P). d⊥(P)? | Có, dấu hiệu vuông góc đường–mặt với hai phương cắt nhau. |
| `THPT-TOPIC-VEC-P05-P04` | d vuông góc a thuộc (P), chưa biết đường thứ hai. d⊥(P)? | Không được suy vì d có thể nằm trong (P). |
| `THPT-TOPIC-VEC-P05-C05` | AB xiên với (P), BH⊥(P), A,H thuộc (P). Hình chiếu của AB là đoạn nào? | AH; B chiếu xuống H, A chiếu lên chính A. |
| `THPT-TOPIC-VEC-P05-P05` | Trong tam giác ABH vuông tại H với AB=10, BH=6, góc giữa AB và đáy (AH) xấp xỉ? | arcsin(0,6)≈36,87°, do sin=BH/AB. |
| `THPT-TOPIC-VEC-P05-C06` | Góc giữa hai mặt phẳng có thể là 130° không? | Không theo quy ước góc giữa hai mặt thuộc [0°,90°]; một góc nhị diện có thể 130°. |
| `THPT-TOPIC-VEC-P05-P06` | Hai mặt (P),(Q) cắt nhau theo d, muốn dựng góc phẳng của nhị diện phải chọn thiết diện thế nào? | Chọn mặt phẳng vuông góc d và hai tia ở hai nửa mặt phẳng phù hợp. |
| `THPT-TOPIC-VEC-P05-C07` | A nằm trong (P): $d(A,(P))$ bằng bao nhiêu? | 0, hình chiếu chính là A. |
| `THPT-TOPIC-VEC-P05-P07` | Chóp S.ABC có SA⊥(ABC), SA=7 cm. Khoảng cách S đến đáy? | 7 cm, vì SA là đoạn vuông góc ngắn nhất. |
| `THPT-TOPIC-VEC-P05-C08` | Trong hình hộp, AB và CC' có thể vuông góc về phương dù không gặp nhau? | Có: chúng chéo nhau và góc giữa phương bằng 90°. |
| `THPT-TOPIC-VEC-P05-P08` | Hình hộp chữ nhật có AB=4, BC=3, CC'=5. Khoảng cách AB đến CC'? | 3, đoạn BC nối hai đường và vuông góc cả AB lẫn CC'. |

**Written `THPT-TOPIC-VEC-P05-W01` /5:** Cho hình chóp S.ABC có SA⊥(ABC), AB=3 cm, BC=4 cm, góc ABC vuông, SA=12 cm. (a) Giải thích vì sao SA⊥BC. (b) Tính SB. (c) Nếu H là hình chiếu S lên (ABC), H là điểm nào? (d) Giải thích SB không bằng khoảng cách S đến đáy. **Đáp án:** (a) SA⊥mọi đường trong (ABC), kể cả BC; (b) trong tam giác vuông SAB, $SB=\sqrt{12^2+3^2}=3\sqrt{17}$ cm; (c) H=A; (d) khoảng cách bằng SA=12, SB xiên dài hơn. **Rubric /5:** 1 điểm (a) điều kiện; 1,5 điểm (b) vẽ tam giác và dùng Pitago; 1 điểm (c); 1,5 điểm (d) định nghĩa khoảng cách/so sánh; không Mastery.

**D6:** (1) Chéo nhau ≠ song song ⇒ xác nhận đồng phẳng; (2) hai đường vuông góc về phương có thể không giao ⇒ dựng đường song song qua điểm chung; (3) đường–mặt chỉ từ một phương ⇒ lập phản ví dụ d nằm trong mặt; (4) góc đường–mặt ⇒ tự dựng chân chiếu rồi đọc cạnh đối/cạnh huyền; (5) khoảng cách ⇒ đánh dấu đoạn ngắn nhất vuông góc cả hai đối tượng. Trở lại ví dụ liên quan và luyện câu khác, không xem trước lời giải RD1.

</details>

## 6. Vectơ và hệ tọa độ Oxyz

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P06-C01` · `THPT-TOPIC-VEC-P06-P01` · `THPT-TOPIC-VEC-P06-C02` · `THPT-TOPIC-VEC-P06-P02` · `THPT-TOPIC-VEC-P06-C03` · `THPT-TOPIC-VEC-P06-P03` · `THPT-TOPIC-VEC-P06-C04` · `THPT-TOPIC-VEC-P06-P04` · `THPT-TOPIC-VEC-P06-C05` · `THPT-TOPIC-VEC-P06-P05` · `THPT-TOPIC-VEC-P06-C06` · `THPT-TOPIC-VEC-P06-P06` · `THPT-TOPIC-VEC-P06-C07` · `THPT-TOPIC-VEC-P06-P07` · `THPT-TOPIC-VEC-P06-C08` · `THPT-TOPIC-VEC-P06-P08` · `THPT-TOPIC-VEC-P06-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome matrix

| OUTCOME_ID | Kĩ năng cần đạt | PUBLIC items | D6 |
|---|---|---|---|
| `TOPIC-VEC-P06-O01` | Đọc hình hộp/vectơ 3D | C01,P01 | phân biệt hình vẽ với tọa độ |
| `TOPIC-VEC-P06-O02` | Tọa độ điểm và AB | C02,P02 | cuối trừ đầu |
| `TOPIC-VEC-P06-O03` | Cộng/trừ/nhân hệ số | C03,P03 | làm từng thành phần |
| `TOPIC-VEC-P06-O04` | Độ dài/khoảng cách | C04,P04 | căn tổng ba bình phương |
| `TOPIC-VEC-P06-O05` | Tích vô hướng và góc | C05,P05 | khác không khi chia norm |
| `TOPIC-VEC-P06-O06` | Cùng phương/vuông góc | C06,P06 | trường hợp tọa độ bằng 0 |
| `TOPIC-VEC-P06-O07` | Trung điểm/trọng tâm | C07,P07 | trung bình từng tọa độ |
| `TOPIC-VEC-P06-O08` | Mô hình 3D thực tế | C08,P08,W01 | chọn gốc, trục, đơn vị |

| ITEM_ID mới — PUBLIC formative | Đề bài | Đáp án và lý do |
|---|---|---|
| `THPT-TOPIC-VEC-P06-C01` | Với hình hộp, ba cạnh xuất phát tại A có tổng vectơ là gì? | Đường chéo từ A tới đỉnh đối diện, theo quy tắc tổng ba dịch chuyển. |
| `THPT-TOPIC-VEC-P06-P01` | Điểm A(2;−1;5), vectơ OA là gì? | OA=(2;−1;5) vì O=(0;0;0). |
| `THPT-TOPIC-VEC-P06-C02` | A(1;−2;3),B(4;0;−1), tìm AB. | (3;2;−4) do B−A. |
| `THPT-TOPIC-VEC-P06-P02` | A(−2;1;3),B(1;−1;5). Tìm BA. | BA=(−3;2;−2), ngược AB=(3;−2;2). |
| `THPT-TOPIC-VEC-P06-C03` | u=(1;2;−1),v=(2;−1;0), tính u+v. | (3;1;−1), cộng từng trục. |
| `THPT-TOPIC-VEC-P06-P03` | u=(1;0;2),v=(−2;3;1), tính 2u−v. | (4;−3;3) vì 2u=(2;0;4). |
| `THPT-TOPIC-VEC-P06-C04` | Độ dài u=(2;−3;6)? | 7 vì $\sqrt{4+9+36}=7$. |
| `THPT-TOPIC-VEC-P06-P04` | Khoảng cách A(1;2;2) tới O? | 3 vì $\sqrt{1+4+4}=3$. |
| `THPT-TOPIC-VEC-P06-C05` | u=(1;2;−1),v=(2;−1;0), dot? | 0; vì 2−2+0. |
| `THPT-TOPIC-VEC-P06-P05` | u=(1;0;0),v=(1;1;1). Cos góc giữa chúng? | $1/\sqrt3$, hai vectơ khác 0. |
| `THPT-TOPIC-VEC-P06-C06` | u=(1;2;−1),v=(−2;−4;2), có cùng phương? | Có vì v=−2u; ngược hướng. |
| `THPT-TOPIC-VEC-P06-P06` | u=(1;0;−1),v=(1;2;1), vuông góc? | Có: dot=1+0−1=0, cả hai khác 0. |
| `THPT-TOPIC-VEC-P06-C07` | Trung điểm A(0;2;−1),B(4;−2;5)? | M(2;0;2) theo trung bình từng tọa độ. |
| `THPT-TOPIC-VEC-P06-P07` | Trọng tâm A(0;0;0),B(3;0;0),C(0;6;3)? | G(1;2;1). |
| `THPT-TOPIC-VEC-P06-C08` | Drone từ P(2;−1;4) tới Q(−1;3;6); độ dời? | PQ=(−3;4;2), dài $\sqrt{29}$ theo mét nếu trục tính bằng m. |
| `THPT-TOPIC-VEC-P06-P08` | Drone P(1;−2;3) tới Q(4;2;3), quãng độ dời? | PQ=(3;4;0), dài 5; không có đổi độ cao. |

**Written `THPT-TOPIC-VEC-P06-W01`, formative /5:** A(−1;2;0), B(3;−2;4), C(1;4;2). (a) Tính AB, AC. (b) Kiểm tra AB vuông góc AC không. (c) Tìm M trung điểm BC. (d) Nêu điều kiện vì sao được suy góc từ dot. **Đáp án:** AB=(4;−4;4), AC=(2;2;2), dot=8−8+8=8≠0 ⇒ không vuông; M=(2;1;3). Hai vectơ khác 0 nên định nghĩa góc có nghĩa. **Rubric /5:** (a) 2 điểm, (b) 1 điểm tính dot và 0,5 điểm kết luận, (c) 1 điểm, (d) 0,5 điểm. Tự đối chiếu, không Mastery.

**D6:** Nếu nhầm OA và điểm A, kiểm O=(0;0;0); nếu đảo cuối−đầu, lấy BA và xác nhận AB+BA=0; nếu bỏ tọa độ z, dựng hộp và kiểm chênh cao; nếu dot=0 với vectơ-không, đọc lại điều kiện góc; nếu sai trung điểm, tìm M bằng MA+MB=0 rồi đối chiếu. Mỗi lỗi có thao tác sửa trước khi quay lại câu tương tự.

</details>

## 7. Mặt phẳng, đường thẳng, mặt cầu Oxyz

**Bộ câu canonical trong mảng này:** `THPT-TOPIC-VEC-P07-C01` · `THPT-TOPIC-VEC-P07-P01` · `THPT-TOPIC-VEC-P07-C02` · `THPT-TOPIC-VEC-P07-P02` · `THPT-TOPIC-VEC-P07-C03` · `THPT-TOPIC-VEC-P07-P03` · `THPT-TOPIC-VEC-P07-C04` · `THPT-TOPIC-VEC-P07-P04` · `THPT-TOPIC-VEC-P07-C05` · `THPT-TOPIC-VEC-P07-P05` · `THPT-TOPIC-VEC-P07-C06` · `THPT-TOPIC-VEC-P07-P06` · `THPT-TOPIC-VEC-P07-C07` · `THPT-TOPIC-VEC-P07-P07` · `THPT-TOPIC-VEC-P07-C08` · `THPT-TOPIC-VEC-P07-P08` · `THPT-TOPIC-VEC-P07-W01`.

**Cách sử dụng:** Chọn câu trong bộ dùng chung theo mạch kiến thức, làm vào giấy hoặc trình phát câu hỏi, tự giải thích lựa chọn phương pháp. Phần dưới là tài liệu đối chiếu của tác giả, không được lộ đáp án cho học sinh trước khi các em chủ động mở.

<details markdown="1"><summary>Đối chiếu cấu trúc bài tập, lời giải, rubric và đường khắc phục</summary>

### Outcome matrix

| OUTCOME_ID | Năng lực | PUBLIC item | D6/giới hạn |
|---|---|---|---|
| `TOPIC-VEC-P07-O01` | Pháp tuyến và phương trình mặt | C01,P01 | n khác 0, thế điểm |
| `TOPIC-VEC-P07-O02` | Khoảng cách điểm–mặt | C02,P02 | trị tuyệt đối, norm n |
| `TOPIC-VEC-P07-O03` | Đường tham số và vectơ chỉ phương | C03,P03 | u≠0, t chung |
| `TOPIC-VEC-P07-O04` | Giao tuyến đường–mặt | C04,P04 | 0,1,vô hạn nghiệm t |
| `TOPIC-VEC-P07-O05` | Quan hệ mặt–mặt | C05,P05 | cùng phương pháp tuyến chưa đủ trùng |
| `TOPIC-VEC-P07-O06` | Góc đường–mặt và mặt–mặt | C06,P06 | sin/cos/abs khác nhau |
| `TOPIC-VEC-P07-O07` | Mặt cầu từ tâm/bán kính | C07,P07 | mặt cầu ≠ khối cầu, R>0 |
| `TOPIC-VEC-P07-O08` | Vị trí mặt cầu–mặt/phân tích ứng dụng | C08,P08,W01 | chỉ sau B17; kiểm điều kiện |

| ITEM_ID mới — PUBLIC formative | Đề bài | Đáp án và giải thích |
|---|---|---|
| `THPT-TOPIC-VEC-P07-C01` | Mặt qua A(1;2;3), pháp tuyến (2;−1;1)? | 2x−y+z−3=0 do dot(n,AM)=0. |
| `THPT-TOPIC-VEC-P07-P01` | Mặt qua O pháp tuyến (1;−2;2)? | x−2y+2z=0, không có hằng số khác 0. |
| `THPT-TOPIC-VEC-P07-C02` | Khoảng cách P(1;2;3) đến x+2y+2z−9=0? | 2/3 vì tử 2, mẫu 3. |
| `THPT-TOPIC-VEC-P07-P02` | Khoảng cách A(1;−2;3) đến 2x−y+2z−6=0? | $|2+2+6-6|/3=4/3$. |
| `THPT-TOPIC-VEC-P07-C03` | Đường qua (1;0;2), chỉ phương (2;−1;3): viết tham số. | x=1+2t,y=−t,z=2+3t, t thực. |
| `THPT-TOPIC-VEC-P07-P03` | Đường qua (0;1;2), chỉ phương (1;0;−2), viết tham số. | x=t,y=1,z=2−2t; thành phần y không đổi, không chia cho 0. |
| `THPT-TOPIC-VEC-P07-C04` | d:(x;y;z)=(0;0;1)+t(1;1;−1); cắt z=0 ở đâu? | t=1 ⇒ (1;1;0), kiểm lại. |
| `THPT-TOPIC-VEC-P07-P04` | d:(x;y;z)=(1+t;2−t;3), xét quan hệ với (P):x+y+z=6. | d nằm **trong** P vì 1+t+2−t+3=6 với mọi t. |
| `THPT-TOPIC-VEC-P07-C05` | P:x+2y+3z=1,Q:2x+4y+6z=4, quan hệ? | Song song phân biệt, chia Q/2 được vế phải 2 ≠1. |
| `THPT-TOPIC-VEC-P07-P05` | P:x+y+z=1,Q:2x+2y+2z=2, quan hệ? | Trùng nhau, Q là 2×P cả hằng số. |
| `THPT-TOPIC-VEC-P07-C06` | Hai mặt pháp tuyến n1=(1;0;0),n2=(1;1;0), góc nhỏ giữa hai mặt? | 45°, cos=1/√2. |
| `THPT-TOPIC-VEC-P07-P06` | Đường hướng u=(1;0;0), mặt pháp tuyến n=(1;0;0), góc đường–mặt? | 90° vì u cùng phương n; sin=1. |
| `THPT-TOPIC-VEC-P07-C07` | Mặt cầu I(1;−2;3), R=4: phương trình? | $(x-1)^2+(y+2)^2+(z-3)^2=16$. |
| `THPT-TOPIC-VEC-P07-P07` | Mặt cầu $x^2+y^2+z^2−2x+4y−6z−2=0$: tâm/bán kính? | I(1;−2;3), $R=4$ vì hoàn bình phương cho RHS=16. |
| `THPT-TOPIC-VEC-P07-C08` | Mặt cầu x²+y²+z²=25 và mặt z=3, bán kính giao tròn? | 4, vì $r=\sqrt{25-9}$. Chỉ làm sau khi đã học mặt cầu. |
| `THPT-TOPIC-VEC-P07-P08` | Mặt cầu x²+y²+z²=9 và mặt z=4 có giao điểm thực không? | Không, khoảng cách tâm O tới z=4 là 4>R=3. |

**Written `THPT-TOPIC-VEC-P07-W01`, formative /5:** Cho A(1;2;3), mặt (P):x+2y+2z−9=0, đường d qua A theo chỉ phương u=(1;1;−1). (a) Tính khoảng cách A tới (P). (b) Tìm giao điểm d với (P), nếu có. (c) Giải thích vì sao không dùng điều kiện u·n=0 để suy d vuông góc (P). **Lời giải:** (a) $2/3$; (b) d:(1+t;2+t;3−t), thế vào P: $(1+t)+2(2+t)+2(3-t)-9=2+t=0$ ⇒ t=−2 ⇒ M(−1;0;5). (c) pháp tuyến n=(1;2;2), u·n=1+2−2=1≠0; muốn d⊥P phải có u song song n, không phải dot=0. **Rubric /5:** 1,5 điểm khoảng cách, 2 điểm lập/giải t và tọa độ, 1,5 điểm giải thích hướng–pháp tuyến và kiểm điều kiện. Không chấm lập luận tự động/Mastery.

**D6:** (1) Sai mặt phẳng vì hằng số ⇒ thay điểm đã cho; (2) nhầm pháp tuyến với chỉ phương ⇒ dựng u,n và hỏi đường có cắt mặt không; (3) viết chính tắc chia cho 0 ⇒ chuyển sang tham số; (4) nhầm trùng với song song ⇒ chuẩn hóa cả hằng số; (5) tưởng mọi mặt cắt mặt cầu đều là đường tròn ⇒ so h với R trước; (6) nhầm B14–B17 ⇒ không dùng kết quả mặt cầu trước khi học B17. Học sinh thử bài mới sau khi đọc lại tiền đề, không tái dùng câu đã xem làm kiểm tra độc lập.

</details>

<!-- TOPIC_PRACTICE_END -->

<!-- TOPIC_SELF_CHECK_BEGIN -->
# Tự kiểm tra

Đây là **bài tự đối chiếu công khai**, không phải kiểm tra độc lập chấm Mastery. Hãy hoàn thành các câu trước khi nhấn **Nộp bài cuối cùng (Final Submit)**. Trong lúc làm: không có gợi ý, đáp án, kết quả đúng/sai, AI Tutor hoặc bảng lời giải. Sau Final Submit, học sinh mới được mở phần đối chiếu và đường ôn lại. Nếu đã từng làm các câu này, kết quả chỉ cho biết mức độ tự ôn, **không** phải chứng cứ năng lực độc lập.

| Mảng kiến thức | Hai câu được chọn từ đúng ngân hàng canonical (không nhân bản) | Khi sai nên quay lại |
|---|---|---|
| 1. Vectơ: độ lớn, phương và hướng | `THPT-G10-B07-P02` · `THPT-G10-B07-P06` | Kiến thức 1, Tự thử, Luyện tập cùng dạng và D6 |
| 2. Cộng, trừ và nhân vectơ với số | `THPT-G10-B08-P02` · `THPT-G10-B09-P04` | Kiến thức 2, Tự thử, Luyện tập cùng dạng và D6 |
| 3. Tọa độ và tích vô hướng trên Oxy | `THPT-TOPIC-VEC-P03-C02` · `THPT-TOPIC-VEC-P03-P05` | Kiến thức 3, Tự thử, Luyện tập cùng dạng và D6 |
| 4. Đường thẳng, đường tròn và conic | `THPT-TOPIC-VEC-P04-C01` · `THPT-TOPIC-VEC-P04-P04` | Kiến thức 4, Tự thử, Luyện tập cùng dạng và D6 |
| 5. Quan hệ hình học trong không gian | `THPT-TOPIC-VEC-P05-C02` · `THPT-TOPIC-VEC-P05-P05` | Kiến thức 5, Tự thử, Luyện tập cùng dạng và D6 |
| 6. Vectơ và hệ tọa độ Oxyz | `THPT-TOPIC-VEC-P06-C02` · `THPT-TOPIC-VEC-P06-P05` | Kiến thức 6, Tự thử, Luyện tập cùng dạng và D6 |
| 7. Mặt phẳng, đường thẳng, mặt cầu Oxyz | `THPT-TOPIC-VEC-P07-C02` · `THPT-TOPIC-VEC-P07-P05` | Kiến thức 7, Tự thử, Luyện tập cùng dạng và D6 |

**Chế độ:** `CLIENT_SELF_CHECK_NO_MASTERY`. Hai câu/mảng là một lượt tự kiểm tra minh họa xuyên suốt 7 phần, không thay bộ `TOPIC_READINESS` độc lập. Bộ RD1 chính thức **42 câu** vẫn chỉ có count/SHA, owner-held ngoài GitHub; không bật chức năng hoặc công bố lời giải/rubric RD1. RELEASE chịu trách nhiệm khoá thời điểm lộ đáp án và kiểm thử Final Submit trên UI thật.

<!-- TOPIC_SELF_CHECK_END -->

<!-- AUTHORING_METADATA_BEGIN : KHÔNG RENDER TRÊN UI HỌC SINH -->
# Hồ sơ tác giả và kiểm toán (không phải trang thứ tư)

- `STANDARD_ID=SLM-THPT-QUALITY-ONE` · `STANDARD_VERSION=3.0.1` · `LEARNING_PATH=TOPIC` · `RELEASE_SCOPE=FULL_TOPIC_LEARNING_PATH`.
- R02 reviewed baseline: `prototypes/thpt/content-drafts/topic-vector-coordinate/Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R02_20261108.md`, blob `29669e6de80cba50a11bb8574220c6a19b4f7138`; một reviewer-accepted Academic/PED PASS 7/7 trên chính R02, 42 private RD1 PASS, nguồn mới R03 cần tự QA Q18 riêng, không gán reviewer PASS R02 cho delta.
- Giữ 7 phần / 56 outcome / 114 public IDs từ R02; mọi canonically reused key/solution/rubric thuộc thư viện dùng chung theo placement. Lời giải hiện ở các khối đối chiếu phải được RELEASE ẩn đến đúng thời điểm trong browser; source Markdown không thay engine đánh giá.
- S1: SGK/SBT KNTT 10–12, tham chiếu trang in/PDF và nguồn SBT 12 tập 2 thiếu trang in 25 được khóa trong R02; không tạo nội dung từ trang bị thiếu.
- Những câu hỏi 14 ID ở Tự kiểm tra là **placement khác của cùng 14 canonical ID**, không cộng thêm 14 vào số câu duy nhất. Không dùng điểm self-check làm `Skill Mastery`.
- AUTHORING chỉ cung cấp nội dung và hợp đồng thể hiện. AP1–AP5, R1–R5, render MathJax/SVG, keyboard/390–820–1440, Final Submit, P1/P2 và quyền merge/deploy thuộc RELEASE.

## Ma trận nguồn, provenance và bộ ID gốc (R02 đóng băng)


**PACKET_ID:** THPT-TOPIC-VECTOR-COORDINATE-G10-G12-FULL-R02-20261108  
**LANE:** AUTHORING ONLY  
**HISTORICAL_STATUS:** R02 trước review, đã được owner nhận PASS đúng snapshot; không mang verdict sang R03.
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0, Q01–Q18 (một chuẩn duy nhất).  
**Hành trình:** Một **chuyên đề xuyên lớp**, đúng ba mục **Kiến thức / Luyện tập / Tự kiểm tra**; bảy phần trong nội dung Kiến thức không phải bảy chuyên đề hay bảy trang/chương SGK.  
**Snapshot:** R02 là tổng hợp để NotebookLM đánh giá; R00/R01 Phần 1, Phần 2 trên Draft GitHub PR #793 là tiền thân. Nội dung ở đây được biên tập lại để reviewer đọc liên tục và bao trùm toàn bộ chuyên đề; chưa được reviewer khóa. Hai nguồn ngân hàng SGK gốc vẫn là canonical; các câu hỏi mới có ID riêng, không sao chép item gốc.

## Tóm tắt nguồn thẩm quyền và địa chỉ kiểm chứng

- SGK/SBT **Kết nối tri thức với cuộc sống S1** Toán 10–12, bản PDF nguyên gốc chủ dự án đã cung cấp qua thư mục Drive; các PDF scan chỉ có trang ảnh nên đã mở hình từng mốc thay vì suy từ text layer. Bảng tiếp theo phân biệt **số trang in** và **số trang PDF đếm từ 1**. Cần để NotebookLM đối chiếu cả nội dung, nguồn và phạm vi, không giả định tất cả giáo trình có cùng offset.
- **Đúng 5 Permanent Sources THPT v2.1** thay thế; tuyệt đối không trộn v2.0 hoặc thêm Permanent Source thứ sáu. File này là *Batch Source*, không phải Permanent Source.
- Mọi bài SGK gốc đã có trong GitHub giữ nguyên một phiên bản câu/đáp án/lời giải/rubric và `item_id`. Các tham chiếu có tiền tố `THPT-G10-*`, `THPT-G11-*`, `THPT-G12-*` là **placement**, không phải item mới.
- Đây là **nguồn ứng viên review**, không phải nguồn đã được độc lập duyệt. Không ghi bất kỳ câu/chìa khóa/rubric **private RD1** nào vào GitHub công khai; file private đi kèm chỉ giao cho chủ dự án gửi NotebookLM.

| Phần trong 01 chuyên đề | SGK KNTT — trang **in** | PDF SGK **1-based** | SBT KNTT — trang in | PDF SBT **1-based** | Kiểm tra bản gốc |
|---|---|---|---|---|---|
| 1. Vectơ: độ lớn và hướng | 10 T1 B07, 46–50 | 47–51 | 10 T1 B07, 45–47 | 46–48 | trực tiếp |
| 2. Cộng, trừ, nhân vectơ với số | 10 T1 B08–B09, 51–59 | 52–60 | 10 T1 B08–B09, 48–54 | 49–55 | trực tiếp |
| 3. Tọa độ và tích vô hướng trên Oxy | 10 T1 B10–B11, 60–70 | 61–71 | 10 T1 B10–B11, 55–65 | 56–66 | trực tiếp, đối chiếu nguồn canonical SGK |
| 4. Đường thẳng, đường tròn, conic trên Oxy | 10 T2 B19–B22, 30–56; cuối ChVII 57–59 | 31–57; 58–60 | 10 T2, chương VII; đối chiếu từng bài theo sách | Chưa chốt tất cả cặp trang in/PDF SBT | Có PDF gốc, không bịa các trang SBT chưa chốt |
| 5. Quan hệ hình học trong không gian | 11 T1 ChIV 70–103 và 11 T2 ChVII 27–65 | T1 71–104; T2 28–66 | 11 T1 ChIV 53–74; 11 T2 ChVII 24–43 | T1 54–75; T2 25–44 | trực tiếp, nguồn SGK canonical |
| 6. Vectơ và hệ tọa độ Oxyz | 12 T1 ChII B06–B08, 45–72 | 47–74 | 12 T1 ChII 38–54 | 36–52 | trực tiếp, lệch trang SGK và SBT khác nhau |
| 7. Mặt phẳng, đường thẳng, mặt cầu Oxyz | 12 T2 ChV B14–B17, 29–60 | 31–62 | 12 T2 ChV 22–34 | 21–32, **thiếu SBT trang in 25** | Chỉ dùng S1 nguyên bản thực có, không dựng lại p25 |

**Source caveat thực chất:** SBT Toán 12 Tập Hai bản quét bị mất **trang in 25** (hai bài 5.6–5.7 ở B14); điều này đã được lưu trong receipt SGK ChV và kiểm bằng trang scan chuyển từ in24 sang in26. Reviewer hãy nhận xét tác động lên riêng phần học B14/Phần 7; không tự gán PASS cho trang không hiện hữu. Phần mới của Chuyên đề này không sao chép hoặc dựng lại hai bài chưa có nguồn ấy.

**Nguồn GitHub tham chiếu đã reviewer xét trong phạm vi SGK:**

- B07/B08 Toán 10: `prototypes/thpt/content-drafts/THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `42b206e31421b33860a1bf697d2d04b7aba992cf`.
- B09–B11 Toán 10: `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `a9f6fab820559a8da98a5a42cd9902dbf9891f34`.
- G11 song song: `prototypes/thpt/content-drafts/G11_CHIV_B10_B14_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md`, blob `e945ccdd434689a5c6d8d7bfd44ba26d287a7b9b`.
- G11 vuông góc: `prototypes/thpt/content-drafts/G11_CHVII_B22_B27_PUBLIC_CANONICAL_R01_SOURCE_LOCK.md`, blob `afc8ec039213b87b4930f2d34d48c28d1fc6277f`.
- G12 vectơ Oxyz: `prototypes/thpt/content-drafts/G12_SGK_CHII_B06_B08_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md`, blob `856a37bd16d2746ffc2e12906de18d1f4338a3b6`.
- G12 tọa độ không gian: `prototypes/thpt/content-drafts/G12_SGK_CHV_B14_B17_PUBLIC_CANONICAL_R01_SOURCE_LOCK.md`, blob `11eb2834cfdb4a24685157f84666c2bb0767970a`.

**Nội dung mới Chuyên đề phải được review độc lập toàn bộ: SGK PASS không suy rộng thành Topic PASS.** Mỗi đề PUBLIC trong tệp này chỉ được dùng để học/ôn và tự đối chiếu sau khi tự thử; bản thân nó không phải đánh giá độc lập hay Skill Mastery. Các ID gốc được ghi ở từng phần, không yêu cầu tạo bank sao.

---



# Hồ sơ R02 lịch sử (phần review cũ, không phải trạng thái R03)

## Outcome 56 mục tiêu — phân bố và ID canonical

- Phần 1: **6 outcome ứng viên Topic** `TOPIC-VEC-P01-O01`–`O06` bao gồm (O01) định nghĩa/vectơ và điểm đầu–cuối; (O02) bằng nhau/đối hướng; (O03) phương/hướng/độ dài; (O04) vectơ-không theo KNTT; (O05) thẳng hàng/nằm giữa; (O06) ứng dụng độ dời. Các outcome này trỏ tới 8 câu SGK B07, 1 Written SGK, 2 câu ứng viên Topic mới và D6 tại chỗ.
- Phần 2: **10 outcome gốc không nhân bản** theo đúng thứ tự từ SGK B08/B09: `G10-B08-TRIANGLE`, `G10-B08-PARALLELOGRAM`, `G10-B08-OPPOSITE-SUBTRACTION`, `G10-B08-MIDPOINT`, `G10-B08-CENTROID`, `G10-B09-SCALAR_DEFINITION`, `G10-B09-LENGTH_DIRECTION`, `G10-B09-DISTRIBUTION`, `G10-B09-COLLINEAR`, `G10-B09-MIDPOINT_CENTROID`. Map vào 16 formative + 2 Written hiện hữu, 6 EX, 2 FIG và 4 HELP; đây là hai placement của cùng một nguồn SGK, không nhân bản học liệu gốc.
- Phần 3: `TOPIC-VEC-P03-O01`–`O08` (8 outcome mới).
- Phần 4: `TOPIC-VEC-P04-O01`–`O08` (8 outcome mới).
- Phần 5: `TOPIC-VEC-P05-O01`–`O08` (8 outcome mới).
- Phần 6: `TOPIC-VEC-P06-O01`–`O08` (8 outcome mới).
- Phần 7: `TOPIC-VEC-P07-O01`–`O08` (8 outcome mới).

**Tổng: 6 + 10 + 5×8 = 56 outcome của 01 Chuyên đề.** Đếm theo mục tiêu, không đếm hai placement là hai câu. Những ID ứng viên chưa được đăng ký runtime/skill registry; NotebookLM kiểm chất lượng, AUTHORING làm bước đăng ký sau verdict theo hợp đồng V2 khi cổng Topic tương thích.

## Bảng mapping ID mới / Canonical / Privacy

| Vị trí | Unique PUBLIC item IDs | Có thể đã thấy trước khi tự kiểm tra? | Cách quản lý |
|---|---:|---|---|
| Phần 1 | 8 formative SGK B07 + 1 Written SGK + 2 Topic mới = **11** | Có | một canonical cho SGK reuse; 2 Topic ID ứng viên |
| Phần 2 | 16 formative SGK B08/B09 + 2 Written SGK = **18** | Có | giữ source/answer/rubric gốc, Topic placement |
| Phần 3 | 16 formative + 1 Written Topic mới = **17** | Có | 17 ID ứng viên có duy nhất một stem/key/rubric |
| Phần 4 | 16 formative + 1 Written Topic mới = **17** | Có | như trên |
| Phần 5 | 16 formative + 1 Written Topic mới = **17** | Có | như trên |
| Phần 6 | 16 formative + 1 Written Topic mới = **17** | Có | như trên |
| Phần 7 | 16 formative + 1 Written Topic mới = **17** | Có | như trên |
| **Tổng cộng** | **114 unique PUBLIC câu/bài** | Tất cả là formative/được phép tự xem | KHÔNG tuyên bố độc lập |
| Tự kiểm tra Chuyên đề (file PRIVATE) | **42 unique private RD1 item IDs** | Phải chưa từng lộ cho học viên | không lên GitHub/JS/Firebase; gated Final Submit |

**Worked examples:** Phần 1 có 3 ví dụ dùng chung; Phần 2 có 6 SGK EX IDs; Phần 3–7 mỗi phần có 6 ví dụ suy luận trong bản thảo = **39 ví dụ**. Sáu ví dụ theo một phần có thể bao gồm một đoạn giải trong nội dung Kiến thức và không được đếm thêm thành câu hỏi canonical nếu không có ID thực. Đủ số câu **chưa chứng minh** độ sâu; reviewer phải xem ít nhất hai bài/ví dụ mỗi outcome và cả đường hồi phục D6.

## D5 — Bản đồ hình dùng chung và ứng viên mới

- Phần 1: `FIG-G10-B07-01` và **FIG-THPT-TOPIC-VECTOR-P1-01**: trường hợp A–M–B và A–B–M; hình mới có trong Draft PR #793 `Temp_TOPIC_VECTOR_PART1_BETWEENNESS_D5_R01.svg`. Ảnh nguồn mới cần reviewer kiểm hướng mũi tên/điều kiện “đôi một phân biệt”.
- Phần 2: `FIG-G10-B08-01`, `FIG-G10-B09-01` — dùng hình SGK gốc, không tạo bản sao.
- Phần 3: `FIG-G10-B10-01`, `FIG-G10-B11-01` — đọc trục/tích vô hướng; dùng hình SGK gốc.
- Phần 4: hình minh họa SGK ChVII về đường thẳng, đường tròn, ellipse/hyperbola/parabola; reviewer xác minh cần thêm D5 gốc cho đoạn chuyển khái niệm nếu mô tả bằng lời chưa đủ; **chưa tuyên bố một hình mới đã QA**.
- Phần 5: hình tứ diện, hình hộp, hình chiếu từ SGK G11 ChIV/ChVII dùng đúng nguồn đã có; reviewer kiểm câu nào cần hình vẽ thêm trước khi học sinh tự học.
- Phần 6: figure Oxyz và vectơ trong hình hộp từ SGK G12 ChII, hình scan nguồn đã đọc; reviewer kiểm tên trục/hướng chiếu.
- Phần 7: sáu hình PNG G12 ChV đã gắn receipt trong nguồn SGK cũ, reviewer kiểm placement và thứ tự điều kiện. Không nhân bản câu hỏi hay hình.

**Các figure trên là kế hoạch tái dùng nguồn canonical và thuyết minh đọc hình**, chưa phải bằng chứng đã render đúng trên website. Nếu reviewer cho rằng một figure bắt buộc để học sinh không gặp lỗ hổng, đánh dấu P1 `Q07/PED4 + outcome` trước khi AUTHORING chuyển `CONTENT_READY`.

## Kiểm nội bộ Q01–Q18 — phải để NotebookLM ra verdict cuối

| Q | Chứng cứ nộp reviewer | Trạng thái tự kiểm |
|---|---|---|
| Q01 | S1 lớp 10–12, trang in/PDF; có cảnh báo thiếu trang SBT12 p25 | **S1_PARTIAL_GAP_DOCUMENTED**, không tự PASS toàn bộ |
| Q02 | 56 outcome chia theo 7 phần; bảng đầy đủ theo phần | QA số lượng/mapping, cần reviewer đánh giá độ sâu |
| Q03 | Mỗi phần có định nghĩa/điều kiện và trường hợp ngoại lệ | DRAFT, phải kiểm điều kiện zero/nonzero |
| Q04 | 39 ví dụ WHY–METHOD–CHECK/LIMIT | DRAFT, reviewer kiểm suy luận và tính chính xác |
| Q05 | 114 PUBLIC item placements, có phân hóa và đáp án | DRAFT; không dùng đếm thay độ sâu |
| Q06 | 8 bài Written ứng viên/giữ rubric SGK, một thư viện | DRAFT; reviewer phải kiểm rubric /5 hoặc /7 |
| Q07 | Figure source map + đọc hình trong bảy phần | **VISUAL_QA_PENDING**; reviewer phản biện cụ thể |
| Q08 | D6 nêu lỗi, nguyên lý sửa và quay lại ví dụ/câu khác | DRAFT, reviewer kiểm đường khắc phục thật |
| Q09 | Mở bài WHY/mô hình vấn đề ở mỗi phần | DRAFT |
| Q10 | Tiền đề theo phần (vectơ → Oxy → không gian → Oxyz) | DRAFT |
| Q11 | Giải thích bản chất trước công thức | DRAFT |
| Q12 | Hướng dẫn đọc hình, trục, chiều, đơn vị | DRAFT / cần đánh giá hình nguồn |
| Q13 | Có giải thích vì sao chọn phương pháp, giới hạn và phản ví dụ | DRAFT |
| Q14 | Hai Tự thử từng phần trước Practice, tự mở sau, D6 | Mới là **hướng dẫn nội dung**, chưa là UI chạy thật |
| Q15 | 114 unique PUBLIC và 42 PRIVATE IDs, có role/placement | Chưa đăng ký runtime; reviewer phải kiểm trùng ý trong PRIVATE |
| Q16 | 42 RD1 nằm tệp riêng, không public Git, Final Submit không leak | **CODE_RUNTIME_NOT_TESTED**, chỉ đánh giá nguồn/học thuật |
| Q17 | Hai hành trình SGK/Chuyên đề, Topic đủ ba trang tại mức nội dung | DRAFT, reviewer quyết định tự học độc lập thật |
| Q18 | Source SHA256, Git source refs và gói review rõ phạm vi | Giữ bản R02 bất biến khi gửi review; chưa reviewer receipt |

## Yêu cầu phản biện độc lập có thể đóng bằng MINIMAL_DELTA

1. Kiểm theo **từng phần và outcome**, không chỉ đếm mục: bảy phần có thực sự tự học độc lập, giải thích WHY → tiền đề → ý nghĩa → formal → ví dụ → Tự thử → luyện tập/khắc phục không? Đánh dấu P0/P1/P2 có chứng cứ cụ thể, không tự thêm chuẩn thứ hai.
2. Kiểm **từng PUBLIC item mới và mọi bộ đáp án/rubric**; đối chiếu những ID SGK tái sử dụng với nguồn canonical gốc, không tạo hai phiên bản; nếu thấy cùng nội dung với bank SGK thì đề nghị reuse ID gốc thay vì clone.
3. Kiểm **42 private RD1** riêng: toán, độ độc lập so với 114 PUBLIC, đủ outcome/độ sâu, key, lời giải và rubric; **không** đòi public upload các đề kín hoặc coi private reviewer upload thành code release.
4. Kiểm chính xác hình học D5 và vấn đề **SBT12 Tập Hai thiếu trang in25**, xác định có ảnh hưởng cụ thể nào tới Phần 7/Outcome nào; tránh HOLD toàn đề nếu chỉ một tài liệu phụ có gap không làm sai lý thuyết SGK chính.
5. Trả `SOURCE_RECEIPT` xác nhận **nội dung chính file đã nhận**, số phần/outcome/item thực review; `ACADEMIC` và `PED` verdict, P0/P1/P2, `MINIMAL_DELTA` theo từng phần/ID. Reviewer không tự cấp CONTENT_READY/Release/Skill Mastery.

**CHECKPOINT R02 lịch sử:** đã được phản biện và owner chấp thuận trên đúng snapshot R02; R03 không nhận PASS độc lập từ đoạn này.
**Sau NotebookLM:** chỉ xử lý học thuật cụ thể bị reviewer đánh dấu, khóa snapshot/receipt theo kết quả; AUTHORING dừng trước tích hợp website, không merge/deploy.


<!-- AUTHORING_METADATA_END -->
