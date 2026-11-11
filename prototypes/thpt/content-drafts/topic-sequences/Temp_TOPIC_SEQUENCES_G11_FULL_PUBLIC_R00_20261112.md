# Dãy số – Cấp số cộng – Cấp số nhân (Toán 11) · FULL PUBLIC TOPIC R00

**AUTHORING DRAFT:** Chưa CONTENT_READY trước khi source-locked Q18 review; là gói thứ sáu theo thứ tự biên soạn, không gán mã TOPIC_ID official và không quyết định PLAN22-07 chính thức. Hành trình đầy đủ độc lập Toán 11 KNTT Chương II B05–B07.

**S1:** G11 KNTT T1 SGK B05 42–47, B06 48–51, B07 52–55, cuối chương 56–57; SBT B05 31–34, B06 35–36, B07 37–39, cuối chương 40–43 theo nguồn R03 SBT PDF. Nguồn 42 câu gốc có Academic/PED verdict theo SGK source snapshot, không tự suy là Topic PASS; thêm đúng 2 public câu cho outcome so sánh chưa có primary question.

<!-- TOPIC_KNOWLEDGE_BEGIN -->
# Kiến thức

Hành trình gồm 9 mô-đun: định nghĩa dãy số, truy hồi/đơn điệu/chặn, công sai/số hạng/tổng, công bội/số hạng/tổng, lãi kép có điều kiện và phân biệt mô hình. Tự thử rồi mới tự mở Đối chiếu. Các kiến thức bắt buộc nằm ngay trong Topic, không phải nhảy sang SGK.

=== "I · Dãy số và công sai"

    === "01. Dãy số, miền chỉ số và công thức tường minh"

        #### M01 · Dãy số, miền chỉ số và công thức tường minh

        **WHY – Bài toán:** Số lượt truy cập trong ngày thứ n được biểu diễn bằng \(u_n\). Khác với một đoạn đường liên tục, dãy số cho mỗi *chỉ số nguyên* một giá trị; chỉ số phải được hiểu trước khi thay công thức.

        **PRE & MEANING:** Dãy số là một hàm trên \(\mathbb N^*=\{1,2,\ldots\}\) hoặc \(\{1,\ldots,N\}\) với dãy hữu hạn. Có thể cho bằng bảng, công thức \(u_n=f(n)\) hay truy hồi với giá trị khởi đầu. Dãy vô hạn không được khẳng định quy luật chỉ từ ba số đầu.

        **WORKED EXAMPLE / WHY THIS METHOD:** Cho \(u_n=n^2-2n\). Ta tính trực tiếp \(u_1=-1,u_2=0,u_3=3,u_5=15\). Vì có công thức số hạng tổng quát nên không cần liệt kê mọi số hạng trung gian. \(n=0\) không thuộc miền đang xét nên không thể tự đặt “số hạng đầu” là \(u_0\).

        **LIMIT:** Phân biệt chỉ số n, giá trị \(u_n\) và số lượng số hạng; nếu đề là một tập chỉ số hữu hạn thì không ngoại suy tới n lớn hơn N.

        **Outcome chi tiết:**

        - **G11-B05-SEQUENCE-DEFINITION:** Nêu định nghĩa và miền áp dụng, không phỏng đoán từ vài dữ kiện.

        - **G11-B05-EXPLICIT-TERM:** Chọn biểu thức tường minh/hiệu liên tiếp theo dữ kiện, giữ n−1 bước.

        **Tự thử trước Core (M01-TRY01, không tạo item_id):** Cho (u_n=3n-4) với n≥1. Viết u₁,u₂,u₃ và u₈. Có thể lấy n=0 làm số hạng đầu không?

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        (u_1=-1,u_2=2,u_3=5,u_8=20). Không; miền chỉ số đã bắt đầu từ n=1.

        </details>

        **D6:** Viết bảng n=1,2,3 dưới các số hạng và thay trực tiếp vào công thức để sửa lỗi lệch chỉ số. Sau đó làm bài canonical tương ứng, không ghi Mastery.

    === "02. Truy hồi, tăng giảm và tính bị chặn"

        #### M02 · Truy hồi, tăng giảm và tính bị chặn

        **WHY:** Một hiện tượng có thể được mô tả chỉ bằng quy tắc “ngày sau tính từ ngày trước”, nên cần phương pháp truy hồi. Nhưng một truy hồi không có \(u_1\) thì chưa định nghĩa duy nhất dãy.

        **MEANING BEFORE FORMULA:** \(u_1=3,u_{n+1}=u_n+5\) cho 3,8,13,18,... Dãy tăng khi \(u_{n+1}>u_n\) mọi n hợp lệ; xét hiệu để chứng minh, không chỉ nhìn vài số đầu. Bị chặn trên nghĩa là tồn tại M sao cho \(u_n\le M\) mọi n; bị chặn dưới tương tự.

        **WORKED EXAMPLE / PROOF:** \(u_n=n/(n+1)\). Lấy hiệu \(u_{n+1}-u_n=1/[(n+1)(n+2)]>0\) nên tăng. Đồng thời \(0<u_n<1\), chứng minh bị chặn. Dãy tăng có thể vẫn bị chặn, không mâu thuẫn. Ngược lại \(u_n=(-1)^n\) bị chặn nhưng không tăng/giảm đơn điệu.

        **READ FIGURE:** Ở sơ đồ truy hồi 3→8→13→18→23, bốn mũi tên +5 là bốn bước, không phải năm. Đường mũi tên không tạo hàm liên tục giữa các số nguyên.

        **Outcome chi tiết:**

        - **G11-B05-RECURRENCE:** Dùng đúng giá trị khởi đầu và chỉ số để dựng dãy.

        - **G11-B05-MONOTONICITY:** Kiểm dấu hiệu liên tiếp với mọi n.

        - **G11-B05-BOUNDS:** Chứng minh bất đẳng thức chặn mọi n thay vì nhìn đồ thị ngắn.

        **Tự thử trước Core (M02-TRY01, không tạo item_id):** Cho u₁=2, uₙ₊₁=uₙ+4. Tính u₄; chứng minh dãy tăng và xét có bị chặn trên không.

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        u₂=6,u₃=10,u₄=14; mọi hiệu bằng 4>0 nên tăng. (u_n=2+4(n-1)) tăng không giới hạn, không bị chặn trên.

        </details>

        **D6:** Nếu chỉ thấy bốn số đầu hữu hạn mà kết luận bị chặn, thử tìm M áp dụng cho **mọi** n. Sau đó làm bài canonical tương ứng, không ghi Mastery.

    === "03. Công sai và số hạng tổng quát của cấp số cộng"

        #### M03 · Công sai và số hạng tổng quát của cấp số cộng

        **WHY:** Trong sơ đồ xếp ghế, mỗi hàng *thêm đúng ba chiếc*; đó là sự thay đổi theo hiệu, không phải theo tỉ số.

        **MEANING:** CSC thỏa \(u_{n+1}-u_n=d\) cố định mọi n. Để từ \(u_1\) đến \(u_n\), thực hiện n−1 bước cộng d nên \(u_n=u_1+(n-1)d\). d có thể âm, dương hoặc bằng 0. CSC với d âm là dãy giảm.

        **WORKED EXAMPLES / METHOD:** \(10,7,4,1,\ldots\) có d=−3 nên \(u_6=10+5(-3)=-5\). Nếu \(u_4=13,u_9=28\), chênh lệch năm bước là \(15=5d\) ⇒ d=3 và u₁=4. Chọn lấy hiệu giữa hai số hạng đã biết vì nhanh và tránh tính từng số trung gian.

        **LIMIT:** Việc 3 số đầu trông như CSC không đủ để chứng minh cả dãy vô hạn theo đúng quy tắc.

        **Outcome chi tiết:**

        - **G11-B06-AP-DEFINITION:** Nêu định nghĩa và miền áp dụng, không phỏng đoán từ vài dữ kiện.

        - **G11-B06-AP-NTH:** Chọn biểu thức tường minh/hiệu liên tiếp theo dữ kiện, giữ n−1 bước.

        **Tự thử trước Core (M03-TRY01, không tạo item_id):** CSC có u₂=7, u₆=23. Tìm d,u₁,u₁₀.

        <details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

        (d=(23-7)/(6-2)=4), (u_1=7-4=3); (u_{10}=3+9cdot4=39).

        </details>

        **D6:** Hãy ghi dãy chỉ số 2→3→4→5→6 để thấy chỉ có bốn bước, không phải sáu. Sau đó làm bài canonical tương ứng, không ghi Mastery.

=== "II · Cấp số cộng và bước sang cấp số nhân"

    === "04. Ba số hạng liền nhau và tổng cấp số cộng"

        #### M04 · Ba số hạng liền nhau và tổng cấp số cộng

        **WHY:** Nếu có hàng trăm hàng ghế, cộng từng hàng rất mất công; vì sao có thể ghép cặp hai đầu để tính tổng nhanh?

        **MEANING / DERIVATION BEFORE FORMULA:** Ba số CSC liền nhau \(a,b,c\) thỏa \(b-a=c-b\), nên \(2b=a+c\). Viết tổng \(S_n=u_1+\cdots+u_n\) từ đầu và lại từ cuối: mỗi cột có \(u_1+u_n\). Do đó \(2S_n=n(u_1+u_n)\) và \(S_n=n(u_1+u_n)/2=\frac n2[2u_1+(n-1)d]\).

        **WORKED EXAMPLE:** CSC u₁=5,d=3. u₈=5+7·3=26, S₈=8(5+26)/2=124. Ghép (5,26),(8,23),(11,20),(14,17) cho bốn cặp có tổng 31, tổng đúng bằng 124. **Hướng dẫn đọc SVG Gauss:** các cặp đầu-cuối cộng bằng nhau, không phải đồ họa trang trí.

        **LIMIT:** Công thức tổng CSC không dùng cho dãy có tỉ số cố định nhưng hiệu thay đổi; n phải là số số hạng đang cộng.

        **Hướng dẫn cho từng outcome:**

        - **G11-B06-AP-THREE-TERMS:** Ba số hạng liên tiếp thỏa 2b=a+c, phải là ba chỉ số liền nhau.

        - **G11-B06-AP-SUM:** S_n=n(u₁+u_n)/2 suy từ hai lượt ghép cặp, không là tổng CSN.

        **Tự thử trước Core (M04-TRY01):** Ba số x−2,x,x+2 có là ba số hạng liên tiếp của một CSC không? Với u₁=1,d=2 tính S₆.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự giải</summary>

        Hai hiệu bằng 2 nên tạo 3 số liên tiếp CSC. u₆=11; S₆=6(1+11)/2=36.

        </details>

        **D6:** Nếu quên chia 2, viết lại hai tổng tiến/ngược để thấy mỗi số bị đếm hai lần. Tự quay lại bài canonical cùng outcome, không ghi Mastery.

    === "05. Ứng dụng cấp số cộng theo hàng hoặc tầng"

        #### M05 · Ứng dụng cấp số cộng theo hàng hoặc tầng

        **WHY:** Để tính tổng sức chứa hoặc số sản phẩm trên các tầng, không thể lấy số ở tầng cuối nhân số tầng.

        **MODEL / METHOD:** Hàng đầu 12 ghế, mỗi hàng thêm 3. Số ghế hàng n là \(u_n=12+3(n-1)\). Có 8 hàng thì \(u_8=33\), \(S_8=8(12+33)/2=180\) ghế. Mô hình phù hợp vì **hiệu giữa hai hàng liên tiếp không đổi**.

        **LIMIT & UNIT:** Số hàng là n nguyên dương. Nếu hàng thứ 6 đổi quy luật thêm ghế, cần tách giai đoạn; không áp một d cho toàn bộ. Số cuối có đơn vị ghế/hàng, tổng có đơn vị ghế.

        **Hướng dẫn cho từng outcome:**

        - **G11-B06-AP-APPLICATION:** Chọn mô hình có hiệu không đổi và giải thích đơn vị cùng điều kiện ngoại suy.

        **Tự thử trước Core (M05-TRY01):** Tầng 1 có 10 sản phẩm; mỗi tầng trên thêm 4; tất cả 6 tầng. Số sản phẩm ở tầng cuối và tổng bao nhiêu?

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự giải</summary>

        u₆=10+5·4=30 sản phẩm; S₆=6(10+30)/2=120 sản phẩm.

        </details>

        **D6:** Liệt kê 10,14,18,22,26,30 để thấy phép lấy 6·30 sẽ đếm sai các tầng đầu. Tự quay lại bài canonical cùng outcome, không ghi Mastery.

    === "06. Công bội và số hạng tổng quát của cấp số nhân"

        #### M06 · Công bội và số hạng tổng quát của cấp số nhân

        **WHY:** Một quá trình sau mỗi chu kỳ gấp đôi cần dùng phép *nhân cùng tỉ lệ*, không phải cộng một lượng.

        **MEANING:** CSN được định nghĩa bởi \(u_{n+1}=q u_n\) cho cùng q mọi n. Khi \(u_n\ne0\), tỉ số \(u_{n+1}/u_n=q\); không chia cho 0. Từ số thứ nhất đến thứ n có n−1 lần nhân nên \(u_n=u_1q^{n-1}\). q có thể âm và dãy sẽ đổi dấu. q=1 là dãy hằng; q=0 thì từ số thứ hai bằng 0, phải xem \(u_1\) riêng để tránh hiểu sai 0⁰.

        **WORKED EXAMPLE:** u₁=3,q=−2: các số 3,−6,12,−24,48,...; u₅=3(−2)⁴=48. Ta **không** coi hiệu giữa 3 và −6 là công sai vì hiệu kế tiếp khác.

        **LIMIT:** CSN q âm không nhất thiết tăng/giảm và không nhất thiết có tất cả số hạng dương.

        **Hướng dẫn cho từng outcome:**

        - **G11-B07-GP-DEFINITION:** Chọn truy hồi nhân q cố định, không lấy tỉ số khi số trước bằng 0.

        - **G11-B07-GP-NTH:** u_n=u₁q^(n−1), n−1 bước; q âm đổi dấu, q=0 xét khởi đầu.

        **Tự thử trước Core (M06-TRY01):** CSN u₁=2, q=−3. Tìm u₂,u₃,u₄; dãy có tăng không?

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự giải</summary>

        u₂=−6,u₃=18,u₄=−54. Dãy không tăng/giảm đơn điệu vì đổi dấu.

        </details>

        **D6:** Viết từng phép nhân q âm và kiểm (u_2>u_1) rồi (u_3>u_2); đừng dựa vào chữ “cấp số nhân” để đoán tăng. Tự quay lại bài canonical cùng outcome, không ghi Mastery.

=== "III · Tổng CSN, ứng dụng và so sánh"

    === "07. Ba số hạng và tổng hữu hạn cấp số nhân"

        #### M07 · Ba số hạng và tổng hữu hạn cấp số nhân

        **WHY:** Dãy tăng theo tỉ lệ không có hiệu không đổi, vì vậy công thức tổng CSC không phù hợp.

        **MEANING:** Ba số hạng CSN liên tiếp \(a,b,c\) thỏa \(b=qa,c=qb\), nên \(b^2=ac\). Tuy nhiên đây là điều kiện cần; vẫn phải kiểm \(u_{n+1}=qu_n\), nhất là khi có số 0.

        **DERIVATION:** \(S_n=u_1(1+q+\cdots+q^{n-1})\). Nhân q rồi trừ: \((1-q)S_n=u_1(1-q^n)\). Với \(q\ne1\), \(S_n=u_1(1-q^n)/(1-q)\); **riêng q=1**, \(S_n=nu_1\). Nếu q âm, giữ dấu của từng lũy thừa; n là số số hạng đầu.

        **WORKED EXAMPLE:** u₁=3,q=−2 cho 3,−6,12,−24. Tổng bốn số bằng −15. Công thức \(3[1-(-2)^4]/[1-(-2)]=-15\), phù hợp cộng trực tiếp.

        **WHEN NOT:** Không chia cho 1−q tại q=1; không áp tổng vô hạn nếu không có điều kiện hội tụ.

        **Hướng dẫn riêng theo outcome:**

        - **G11-B07-GP-THREE-TERMS:** b²=ac là hệ quả, chưa đủ khi chưa kiểm định nghĩa và số 0.

        - **G11-B07-GP-SUM:** q≠1 dùng công thức hữu hạn; q=1 dùng n u₁; dấu q âm phải giữ.

        **Tự thử trước khi đối chiếu M07-TRY01:** Với CSN u₁=5,q=2, tìm u₄,S₄. Nếu cùng u₁ nhưng q=1 thì S₄ bằng bao nhiêu?

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        u₄=5×2³=40; S₄=5(2⁴−1)/(2−1)=75. Với q=1, S₄=4×5=20.

        </details>

        **D6:** Liệt kê 5,10,20,40 để sửa sai lệch số mũ và dùng nhánh riêng q=1. Luyện thêm một câu canonical đúng outcome; xem lời giải không ghi Mastery.

    === "08. Lãi kép và giới hạn của mô hình nhân"

        #### M08 · Lãi kép và giới hạn của mô hình nhân

        **WHY:** Khi lãi được nhập vào gốc, số tiền kỳ sau nhân với cùng một hệ số nếu lãi suất không đổi.

        **MODEL:** Với khoản tiền ban đầu P tại thời điểm 0, r là lãi suất mỗi kỳ, không nộp/rút thêm, phí hoặc thuế: \(A_0=P,\ A_{n+1}=(1+r)A_n\), nên sau n kỳ \(A_n=P(1+r)^n\). Đếm đúng n **số kỳ**; không nhầm chỉ số \(A_0\) với số hạng \(u_1\) của các bài trước.

        **WORKED EXAMPLE:** P=10.000.000 đồng, r=1%/tháng; 3 tháng: \(A_3=10\,000\,000(1.01)^3=10\,303\,010\) đồng, vì mỗi tháng nhân 1.01.

        **WHEN NOT:** Nếu cuối mỗi kỳ thêm D, \(A_{n+1}=(1+r)A_n+D\) không là CSN thuần nữa. Nếu r thay đổi, không dùng một q cố định. Mô hình không là cam kết thị trường.

        **Hướng dẫn riêng theo outcome:**

        - **G11-B07-GP-APPLICATION:** Lãi kép theo kỳ chỉ là CSN thuần khi không có khoản nộp/rút và r cố định.

        **Tự thử trước khi đối chiếu M08-TRY01:** 2.000.000 đồng tăng 5% mỗi kỳ không nộp/rút. Sau 2 kỳ là bao nhiêu? Nếu nộp thêm 100.000 cuối mỗi kỳ còn dùng công thức cũ không?

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        A₂=2.000.000×1.05²=2.205.000 đồng. Có khoản nộp thêm thì truy hồi Aₙ₊₁=1.05Aₙ+100.000; không dùng công thức CSN thuần ban đầu.

        </details>

        **D6:** Viết A₀,A₁,A₂ để đếm đúng kỳ; có khoản thêm cần mô hình truy hồi mới. Luyện thêm một câu canonical đúng outcome; xem lời giải không ghi Mastery.

    === "09. So sánh bản chất CSC và CSN"

        #### M09 · So sánh bản chất CSC và CSN

        **WHY:** Hai dãy có số đầu giống nhau có thể khác biệt rất lớn; chọn công thức từ bản chất hiệu không đổi hay tỉ số không đổi.

        **MEANING:** CSC có \(u_{n+1}-u_n=d\) cố định; CSN thỏa \(u_{n+1}=qu_n\) với q cố định, phép chia tỉ số chỉ khi \(u_n\ne0\). Dãy hằng \(u_n\equiv5\) vừa CSC d=0 vừa CSN q=1. Dãy \(3,-3,3,-3,\ldots\) là CSN q=−1 nhưng không CSC; với dãy toàn 0, phép chia 0/0 không xác định.

        **WORKED EXAMPLE:** A từ 4 cộng 3: 4,7,10,13,16, tổng 50. B từ 4 nhân 2: 4,8,16,32,64, tổng 124. Các điểm trên SVG là rời rạc tại n nguyên, không gán giá trị cho n=2.5. ADD01 kiểm quy luật và tổng; ADD02 kiểm ngoại lệ hằng và q âm.

        **LIMIT:** Ba số đầu tình cờ giống một CSC/CSN không đủ để chứng minh toàn dãy vô hạn thuộc loại đó khi không có giả thiết mọi n.

        **Hướng dẫn riêng theo outcome:**

        - **G11-CHII-STRUCTURAL-COMPARISON:** Chọn hiệu hoặc tỉ số, nhận diện ngoại lệ dãy hằng và công bội âm.

        **Tự thử trước khi đối chiếu M09-TRY01:** A bắt đầu 3, mỗi bước cộng 3; B bắt đầu 3, mỗi bước nhân 3. Tìm số thứ tư và giải thích vì sao B không CSC.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        A: 3,6,9,12 ⇒ a₄=12; B: 3,9,27,81 ⇒ b₄=81. Hiệu B là 6,18,54 không cố định.

        </details>

        **D6:** Nếu nhầm cả hai là CSC vì đều tăng, lập bảng hiệu/tỉ số. Nếu là dãy hằng, kiểm cả d=0 và q=1. Luyện thêm một câu canonical đúng outcome; xem lời giải không ghi Mastery.



![Dãy số truy hồi từng bước](assets/Temp_TOPIC_SEQ_RECURSION_R00_20261112.svg)

**Hướng dẫn đọc:** tại n=1,2,3,4,5 các giá trị là 3,8,13,18,23. Mỗi mũi tên cộng 5. Các ô là số hạng rời rạc, không phải đồ thị thời gian liên tục.

![Ghép cặp Gauss cho tổng cấp số cộng](assets/Temp_TOPIC_SEQ_AP_GAUSS_PAIRING_R00_20261112.svg)

**Hướng dẫn đọc:** cặp 1+8, 2+7, 3+6, 4+5 đều là 9 nên S_8=4×9=36; làm rõ vì sao tổng CSC n số hạng bằng n lần trung bình hai đầu.

![Điểm rời rạc CSC và CSN](assets/Temp_TOPIC_SEQ_AP_GP_DISCRETE_POINTS_R00_20261112.svg)

**Hướng dẫn đọc:** A có 4,7,10,13,16 và B có 4,8,16,32,64; tới chỉ số 5 hai dãy khác biệt 16 và 64; đường nét đứt không là nội suy giá trị giữa các chỉ số.

<!-- TOPIC_KNOWLEDGE_END -->

<!-- TOPIC_PRACTICE_BEGIN -->
# Luyện tập

**Một ngân hàng canonical, nhiều placement:** 42 câu SGK public gốc tại prototypes/thpt/shared-items/Temp_TOPIC_SEQUENCES_G11_CANONICAL_SOURCE_INDEX_R00_20261112.md (Git blob 19415049b78891955ce13ce3c10ea7279eceb2c7), 2 câu bổ sung công khai tại prototypes/thpt/shared-items/Temp_TOPIC_SEQUENCES_G11_PUBLIC_EXTENSION_02ITEM_R00_20261112.md (Git blob e64d7addbc5659618fc1a2c6296f075d62ee96bd), 44 unique IDs toàn Topic. Sáu câu Written/Anchor gốc dùng rubric một nguồn, không clone sang Topic.

| Mảng | Chọn phương pháp |
|---|---|
| M01–M02 | Miền n, dãy tường minh và truy hồi, dấu hiệu tăng/bị chặn có chứng minh mọi n |
| M03–M05 | Hiệu không đổi, CSC: số hạng thứ n, tính chất 3 số, tổng n số và mô hình hàng ghế |
| M06–M08 | Tỉ số/truy hồi q, CSN gồm q âm/q=1, tổng hữu hạn, lãi kép có điều kiện |
| M09 | Hai câu ADD01/ADD02: chọn CSC/CSN theo bản chất, dãy hằng và phản ví dụ |

**Luyện có chiều sâu:** mỗi kết quả phải có giải thích điều kiện, miền chỉ số và lý do dùng phương pháp. Đáp án, lời giải và rubric mở từ **cùng item_id** gốc. Practice và tự đối chiếu không ghi Mastery.

<!-- TOPIC_PRACTICE_END -->

<!-- TOPIC_SELF_CHECK_BEGIN -->
# Tự kiểm tra

**Chỉ tự đối chiếu công khai** `CLIENT_SELF_CHECK_NO_MASTERY`. 9 câu công khai đã luyện được tái sử dụng làm placement, không phải held-out TOPIC_READINESS. Trong sản phẩm website RELEASE phải khóa đáp án, gợi ý, đúng/sai và Tutor tới **sau Final Submit** toàn lượt, không có ghi Mastery.

| Mảng | Item IDs reused | Trở về |
|---|---|---|
| Dãy số và truy hồi | `THPT-G11-B05-P01`, `THPT-G11-B05-P02` | M01–M02 |
| Tính chất dãy số | `THPT-G11-B05-P03` | M02 |
| CSC | `THPT-G11-B06-P01`, `THPT-G11-B06-P03` | M03–M05 |
| CSN | `THPT-G11-B07-P02`, `THPT-G11-B07-P04`, `THPT-G11-B07-P06` | M06–M08 |
| So sánh quy luật | `THPT-G11-TOPSEQ-ADD01` | M09 |

**Private RD1:** 19 câu Chương II gốc owner-held không nhập source Git. Public placement đã xem không thể dùng như đánh giá độc lập hay Mastery.

<!-- TOPIC_SELF_CHECK_END -->

<!-- AUTHOR_ONLY_METADATA_BEGIN -->
# Phụ lục tác giả — không render trên website học sinh

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.1
LEARNING_PATH: TOPIC
RELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH
CONTENT_STATE: CANDIDATE_UNDER_AUTHOR_SELF_QA
TOPIC_ID: UNASSIGNED_OWNER_DECISION
SOURCE_INDEX_PATH: prototypes/thpt/shared-items/Temp_TOPIC_SEQUENCES_G11_CANONICAL_SOURCE_INDEX_R00_20261112.md
SOURCE_INDEX_BLOB: 19415049b78891955ce13ce3c10ea7279eceb2c7
PUBLIC_EXTENSION_PATH: prototypes/thpt/shared-items/Temp_TOPIC_SEQUENCES_G11_PUBLIC_EXTENSION_02ITEM_R00_20261112.md
PUBLIC_EXTENSION_BLOB: e64d7addbc5659618fc1a2c6296f075d62ee96bd
PUBLIC_ITEM_COUNT: 44
OUTCOMES: 16
KNOWLEDGE_MODULES: 9
FIRST_TRIES: 9
ORIGINAL_WRITTEN_COUNT: 6
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## ITEM_OUTCOME_MATRIX

| item_id | outcome_id | role | source_type | exact_source_blob |
|---|---|---|---|---|
| `THPT-G11-B05-C01` | `G11-B05-SEQUENCE-DEFINITION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-C02` | `G11-B05-EXPLICIT-TERM` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-C03` | `G11-B05-RECURRENCE` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-C04` | `G11-B05-MONOTONICITY` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-P01` | `G11-B05-EXPLICIT-TERM` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-P02` | `G11-B05-RECURRENCE` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-P03` | `G11-B05-MONOTONICITY` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-P04` | `G11-B05-BOUNDS` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-P05` | `G11-B05-SEQUENCE-DEFINITION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-P06` | `G11-B05-EXPLICIT-TERM` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-P07` | `G11-B05-RECURRENCE` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B05-P08` | `G11-B05-BOUNDS` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-C01` | `G11-B06-AP-DEFINITION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-C02` | `G11-B06-AP-NTH` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-C03` | `G11-B06-AP-SUM` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-C04` | `G11-B06-AP-THREE-TERMS` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-P01` | `G11-B06-AP-NTH` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-P02` | `G11-B06-AP-DEFINITION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-P03` | `G11-B06-AP-SUM` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-P04` | `G11-B06-AP-NTH` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-P05` | `G11-B06-AP-THREE-TERMS` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-P06` | `G11-B06-AP-APPLICATION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-P07` | `G11-B06-AP-SUM` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B06-P08` | `G11-B06-AP-APPLICATION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-C01` | `G11-B07-GP-DEFINITION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-C02` | `G11-B07-GP-NTH` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-C03` | `G11-B07-GP-SUM` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-C04` | `G11-B07-GP-THREE-TERMS` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-P01` | `G11-B07-GP-DEFINITION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-P02` | `G11-B07-GP-NTH` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-P03` | `G11-B07-GP-SUM` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-P04` | `G11-B07-GP-SUM` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-P05` | `G11-B07-GP-THREE-TERMS` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-P06` | `G11-B07-GP-APPLICATION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-P07` | `G11-B07-GP-DEFINITION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-B07-P08` | `G11-B07-GP-APPLICATION` | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-CHII-W05-01` | `G11-B05-MONOTONICITY` | TOPIC_WRITTEN | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-CHII-W05-02-ANCHOR` | `G11-B05-RECURRENCE` | TOPIC_WRITTEN | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-CHII-W06-01` | `G11-B06-AP-SUM` | TOPIC_WRITTEN | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-CHII-W06-02-ANCHOR` | `G11-B06-AP-APPLICATION` | TOPIC_WRITTEN | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-CHII-W07-01` | `G11-B07-GP-SUM` | TOPIC_WRITTEN | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-CHII-W07-02-ANCHOR` | `G11-B07-GP-APPLICATION` | TOPIC_WRITTEN | SGK_CANONICAL_REUSE | `2101e2a248e0cf53ee11847b913b937cebcd0806` |
| `THPT-G11-TOPSEQ-ADD01` | `G11-CHII-STRUCTURAL-COMPARISON` | TOPIC_PRACTICE | TOPIC_NEW_CANDIDATE | `e64d7addbc5659618fc1a2c6296f075d62ee96bd` |
| `THPT-G11-TOPSEQ-ADD02` | `G11-CHII-STRUCTURAL-COMPARISON` | TOPIC_PRACTICE | TOPIC_NEW_CANDIDATE | `e64d7addbc5659618fc1a2c6296f075d62ee96bd` |

## AUTHOR_PRE_SIGNOFF
Q01–Q02 S1 and 16 outcomes; Q03–Q08 D1–D6 and SVG/Written; Q09–Q14 PED first try/D6; Q15 one canonical item_id, Q16 public no Mastery/private 0, Q17 three Topic pages/no separate Core, Q18 author receipt/source lock required before CONTENT_READY.
<!-- AUTHOR_ONLY_METADATA_END -->