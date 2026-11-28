# G10-CHIV-B11 · ONE CURRENT CANONICAL LESSON MANUSCRIPT · Toán 10 KNTT

**LESSON_ID:** G10-CHIV-B11 · **STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18 · **WORKSTREAM:** active SGK 79-lesson lane #795 · **SOURCE_ROLE:** single current B11 complete manuscript (Knowledge and source-exact historical eight Core/Practice items, shared original W11 Anchor). The older multi-lesson R01 packet is immutable history and is NOT another current lesson manuscript. The public JS bank is the unchanged implementation of the eight legacy canonical records.

**SOURCE_SCOPE:** SGK Toán 10 Kết nối tri thức, Tập 1, Bài 11, printed pages **66–70**, main headings: (1) Góc giữa hai vectơ, (2) Tích vô hướng của hai vectơ, (3) Biểu thức tọa độ và tính chất của tích vô hướng. SBT B11 is referenced as a supplementary exercise source; exact original publisher PDF page-index pairing and original SBT scan have NOT been independently authenticated in this release. The existing audit #862 sampled the corresponding learner-facing pages; local academic comparison uses a published PDF reproduction of the SGK excerpt with matching printed page labels, not a new notebook permanent source. Do not call this official publisher custody verification.

**FROZEN BASELINE:** Owner B01–B10 P2 PASS, B10 R02 published. B11 original Knowledge blob 2a1381689f66d1f8c752bdbf1c29a9ef49a4e073. Historical academic R01 chapter packet blob a9f6fab820559a8da98a5a42cd9902dbf9891f34, original eight public item bank blob 713e6a97b95c2c807c8b76045b324bdddf1a6737, original B09–B11 public Written page blob cedf2a952624095d9135e04a84dc469e22ec53e5. Existing B11 SVGs: THPT_G10_B11_DOT_PRODUCT_OBTUSE_D5_R01.svg and THPT_G10_CHIV_FORCE_TRANSFER_D5_R01_CORRECTED.svg, both preserved. No new question identifiers, answer versions, rubrics, hidden RD1, Q16 Final Submit, Firebase or Skill Mastery.

**FINDINGS FIXED IN CANDIDATE:** CHIV-11-A (misplaced force worked example and raw TeX/code/visible EX ID in Tab4), CHIV-11-B (force graphic 8N/15N unrelated to coordinate example and inconsistent with 6N/6N worked dataset), original nonsemantic "five-step D6" and learner-facing admin/assessment metadata. New source has 4 Golden sections with meaningful 1.x/2.x/3.x/4.x semantics, S1 three 2.x major headings unchanged, four fully reasoned worked examples including force in Tab3, 5 distinct original first-try IDs all in Tab1 (four existing + force), 3 canonical HELP IDs attached to actual wrong-step diagnoses in Tab4, two original SVGs with exact-dataset caption, non-code MathJax, 3+1 semantic role styling isolated to B11.

**AUTHOR SELF-CHECK of mathematical content:** Geometric dot product is real with sign cos(angle); vector-zero convention is explicitly distinguished from a uniquely determined right angle; coordinate dot (a;b)·(c;d)=ac+bd, distributivity/square formulas and denominator guards; force-6N/6N at 120° resultant 6N and third force opposite; force-4N/4N at 60° resultant 4√3N; dot-example (4,3,120°)=-6; (2,-1)·(1,2)=0; A(1,1), B(4,1), C(1,5) right area 6; work at 10N/3m/120°=-15 J. All numeric checks follow standard formulas. This is **SELF_QA only, NOT an independent NotebookLM Academic/PED PASS**.

**Q15 canonical outcome mapping:** GEOMETRIC_DOT (TRY21, B11-P01, force TRY, Example 1/4), COORDINATE_DOT (TRY22, C01/P02/P03/P04), PERPENDICULAR (TRY23, C02/P06), APPLICATION (TRY24, P05, original one W11 Anchor). Additional force-transfer public Written source is an external shared already-existing canonical item and is referenced without cloning its stem/answer/rubric here. Anchor is a label on an existing Written item, not a second item.

**Q16/RD1:** Knowledge "Vận dụng" answers are disclosed only by learner-driven opening; no automatic mastery and no protected end-of-chapter answer/hint exposure. Original public items use their historical answer/hint in formative roles. Chapter held-out Final Submit remains unchanged.

**REVIEW STATE:** ACADEMIC/PED INDEPENDENT_REVIEW_PENDING. Q18 source/receipt and mechanical QA may pass while release is **HOLD** until required independent review of the affected pedagogy and verified academic source receipt. Do not self-issue NotebookLM PASS or claim production/owner P2. Evidence must be reviewed against the five authorized v2.1 Permanent Sources, not a sixth source.

## A. Single authored learner-facing Knowledge source

<!-- BEGIN_B11_KNOWLEDGE_MARKDOWN -->
# Bài 11. Tích vô hướng của hai vectơ

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG IV · KIẾN THỨC SGK KNTT</p><p class="thpt-r4-lead">Hiểu bản chất của tích vô hướng qua góc, hình và tọa độ; vận dụng trước khi mở đối chiếu.</p></div>

=== "Khám phá kiến thức"

    ### 1.1. Vì sao cần tích vô hướng?

    Hai lực có cùng độ lớn chưa chắc tác động như nhau. Khi lực kéo tạo với hướng di chuyển một góc nhọn, nó hỗ trợ chuyển động; khi góc tù, một phần lực có tác dụng cản lại. Ta cần một phép toán có thể biến thông tin **độ lớn và góc giữa hai vectơ** thành một con số có dấu. Phép toán đó là **tích vô hướng**.

    Với hai vectơ khác không, tích vô hướng bằng tích độ dài của chúng rồi nhân với \(\cos\) góc xen giữa. Từ cách định nghĩa ấy, em có thể dự đoán dấu mà chưa tính: góc nhọn cho kết quả dương, góc vuông cho 0, góc tù cho âm. Đây không phải một quy tắc dấu phải học thuộc riêng; nó xuất phát từ dấu của \(\cos\) đã học ở Bài 5.

    Khi đưa vectơ lên hệ trục, tích vô hướng còn tính được bằng tổng tích hai thành phần tương ứng. Điều này giúp kiểm vuông góc bằng phép tính thay vì chỉ quan sát hình, đồng thời là cơ sở để tính công của lực.

    ### 1.2. Khám phá và vận dụng qua hình

    <span id="thpt-g10-chiv-try21" data-thpt-first-try-id="THPT-G10-CHIV-TRY21" data-outcome-id="G10-B11-GEOMETRIC_DOT" data-thpt-help-ref="HELP-G10-B11-02"></span>

    #### Tích vô hướng mô tả mức độ cùng hướng

    **Cách đọc hình.** Quan sát góc tù giữa hai vectơ trong hình: cos âm nên tích vô hướng âm, dù độ dài hai vectơ đều dương.

    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_B11_DOT_PRODUCT_OBTUSE_D5_R01.svg" loading="lazy" alt="Tích vô hướng khi góc giữa hai vectơ là 120 độ"><figcaption>Tích vô hướng khi góc giữa hai vectơ là 120 độ.</figcaption></figure>


    Một lực tác dụng dọc hướng di chuyển có ích hơn lực kéo vuông góc; lực ngược chiều chuyển động có thể gây công âm.

    Nhớ độ dài vectơ, góc giữa hai vectơ khác không thuộc 0°–180° và cos góc nhọn/vuông/tù. 

    Tích vô hướng đo tích hai độ lớn có xét thành phần cùng hướng bằng cos: \(\vec u\cdot\vec v=|\vec u||\vec v|\cos\theta\). Nếu vuông góc tích 0, nếu ngược hướng tích âm; góc được xác định duy nhất khi cả hai vectơ khác \(\vec0\); với vectơ-không SGK quy ước góc có thể tùy ý trong \([0^\circ,180^\circ]\) và coi \(\vec0\) vuông góc với mọi vectơ.


    Chọn định nghĩa hình học nếu biết hai độ dài và góc giữa vectơ; nếu một vectơ bằng 0, tích là 0 theo đại số nhưng không gán góc thường.

    **Em vận dụng.** Cho \(|\vec u|=2\), \(|\vec v|=3\), góc giữa hai vectơ là 120°. Tích vô hướng âm hay dương, bằng bao nhiêu?

    ??? question "Em tự mở đối chiếu sau khi đã thử làm"

        **Kết quả:** \(\vec u\cdot\vec v=2\cdot3\cdot\cos120^\circ=-3\).

        **Vì sao:** Cos120°=−1/2 nên tích âm; không thể dùng cos60° vì đây là góc giữa hai vectơ đang hướng xa nhau.



    <a id="HELP-G10-B11-02" aria-hidden="true"></a>
    <span id="help-g10-b11-02" data-thpt-help-id="HELP-G10-B11-02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Tự nhận diện:** Em đang làm sai dấu của công lực?

        **Cách làm sai:** Lực \(10\,\mathrm N\) tạo góc \(120^\circ\) với độ dời \(3\,\mathrm m\) nhưng thay \(\cos60^\circ\), thu được công \(+15\,\mathrm J\).

        **Vì sao sai:** Góc giữa hai vectơ **đúng theo hướng mũi tên** là \(120^\circ\), nên cos âm. Tích vô hướng có dấu; lấy góc nhọn bù với góc tù đã cho hoặc lấy giá trị tuyệt đối sẽ làm mất ý nghĩa tác dụng cản chuyển động.

        **Tự sửa:** \(W=10\cdot3\cos120^\circ=-15\,\mathrm J\). Kiểm lại: góc tù ⇒ công âm; góc vuông ⇒ công bằng 0.

        **Luyện lại:** Tự đổi góc thành \(90^\circ\) rồi \(60^\circ\) và dự đoán dấu trước khi tính lại.
    <span id="thpt-g10-chiv-try22" data-thpt-first-try-id="THPT-G10-CHIV-TRY22" data-outcome-id="G10-B11-COORDINATE_DOT" data-thpt-help-ref="HELP-G10-B11-01"></span>

    #### Tại sao tích vô hướng có thể tính bằng hai cặp số?

    **Liên hệ với tọa độ.** Trên hai trục vuông góc, mỗi vectơ được phân tích thành hai thành phần. Tích vô hướng bằng tổng hai tích thành phần cùng trục, không phải tích chéo. Hình hợp lực sẽ được giải thích tại Ví dụ 4, với bộ số liệu riêng.

    Trong bản đồ Oxy, biết hai tọa độ vectơ có thể suy mức độ cùng hướng mà không cần đo góc.

    Đã biết vectơ đơn vị \(\vec i,\vec j\) vuông góc, \(\vec u=u_x\vec i+u_y\vec j\) và tính chất phân phối. 

    Vì \(\vec i\cdot\vec i=1\), \(\vec j\cdot\vec j=1\), \(\vec i\cdot\vec j=0\), khi nhân phân phối chỉ còn \(u_xv_x+u_yv_y\). Đây là công thức tọa độ của cùng tích vô hướng hình học.


    Khi có tọa độ, nhân các thành phần cùng trục rồi cộng; không nhân nhầm ux với vy hoặc lấy tích độ dài thay cho dấu.

    **Em vận dụng.** Cho \(\vec u=(2;-1)\), \(\vec v=(3;4)\). Tính \(\vec u\cdot\vec v\).

    ??? question "Em tự mở đối chiếu sau khi đã thử làm"

        **Kết quả:** \(2\cdot3+(-1)\cdot4=2\).

        **Vì sao:** Thành phần theo Ox cho 6, theo Oy cho −4, cộng là 2. Tích vô hướng là một số, không phải vectơ.



    **Kiểm lỗi dùng chung:** [Xem hướng dẫn tự sửa liên quan](#HELP-G10-B11-01).
    <span id="thpt-g10-chiv-try23" data-thpt-first-try-id="THPT-G10-CHIV-TRY23" data-outcome-id="G10-B11-PERPENDICULAR" data-thpt-help-ref="HELP-G10-B11-01"></span>

    #### Vuông góc có thể kiểm bằng số

    Thay vì đo góc trên hình vẽ không chuẩn tỉ lệ, ta có thể dùng tích vô hướng bằng 0 để nhận biết hai vectơ vuông góc.

    Biết cos90°=0 và công thức tọa độ tích vô hướng, cùng điều kiện cả hai vectơ khác không. 

    Nếu hai vectơ khác không có tích vô hướng 0 thì cos góc giữa chúng là 0, vì tích độ dài dương; góc bằng 90°. Chiều ngược lại cũng đúng.


    Kiểm tra hai vectơ khác không trước, sau đó tính tích vô hướng; \(\vec0\cdot\vec v=0\) nhưng không suy ra một góc duy nhất bằng 90°; vectơ-không vuông góc với mọi vectơ theo quy ước SGK.

    **Em vận dụng.** \(\vec u=(2;3)\), \(\vec v=(3;-2)\). Chúng có vuông góc không? Vì sao điều kiện khác 0 quan trọng?

    ??? question "Em tự mở đối chiếu sau khi đã thử làm"

        **Kết quả:** Có, vì \(\vec u\cdot\vec v=2\cdot3+3\cdot(-2)=0\), và cả hai khác \(\vec0\).

        **Vì sao:** Nếu một vectơ bằng 0 thì tích vẫn bằng 0 nhưng góc giữa chúng có thể nhận giá trị tùy ý từ 0° đến 180°; vectơ-không vuông góc với mọi vectơ theo quy ước SGK.



    <a id="HELP-G10-B11-01" aria-hidden="true"></a>
    <span id="help-g10-b11-01" data-thpt-help-id="HELP-G10-B11-01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Tự nhận diện:** Em đã chia cho độ dài của vectơ-không?

        **Cách làm sai:** Với \(\vec u=\vec0\), \(\vec v=(2;3)\), tính \(\cos(\vec u,\vec v)=\frac{0}{0\cdot\sqrt{13}}=0\), rồi kết luận góc duy nhất bằng \(90^\circ\).

        **Vì sao sai:** Mẫu số bằng \(0\) nên phép chia vô nghĩa. SGK chỉ quy ước góc với \(\vec0\) có thể tùy ý, đồng thời coi \(\vec0\) vuông góc với mọi vectơ; điều đó **không** tạo ra một số đo góc duy nhất.

        **Tự sửa:** Tính \(\vec u\cdot\vec v=0\); phát biểu vuông góc **theo quy ước SGK**, không tính cos từ mẫu bằng 0. Với hai vectơ khác không, mới áp dụng công thức cos để suy góc.

        **Luyện lại:** Chọn hai vectơ khác không và thử tính tích bằng 0 trong phần Luyện tập, sau đó quay lại tự giải một trường hợp có vectơ-không.
    <span id="thpt-g10-chiv-try24" data-thpt-first-try-id="THPT-G10-CHIV-TRY24" data-outcome-id="G10-B11-APPLICATION" data-thpt-help-ref="HELP-G10-B11-02"></span>

    #### Công của lực: độ lớn không đủ

    Đẩy một vật 3 m cùng chiều lực khác với kéo vật theo chiều ngược hoặc vuông góc lực, dù độ lớn lực và quãng dịch chuyển giống nhau.

    Biết lực \(\vec F\) đo N, độ dời \(\vec s\) đo m, góc giữa hai vectơ khác không và tích vô hướng. 

    Với lực không đổi, công được xác định bởi thành phần lực theo hướng độ dời: \(W=\vec F\cdot\vec s=|\vec F||\vec s|\cos\theta\); cùng chiều cho dương, ngược chiều cho âm, vuông góc cho 0.


    Xác định hướng tương đối của lực và độ dời trước, kiểm đơn vị N·m=J; không lấy giá trị tuyệt đối khi bài hỏi công có dấu.

    **Em vận dụng.** Một lực 10 N hướng Đông, vật dịch chuyển 3 m hướng Tây. Công của lực là bao nhiêu J? Nếu dịch chuyển vuông góc lực thì sao?

    ??? question "Em tự mở đối chiếu sau khi đã thử làm"

        **Kết quả:** Cùng phương ngược hướng: \(W=10\cdot3\cos180^\circ=-30\) J; vuông góc: \(W=0\) J.

        **Vì sao:** Cos180°=−1, cos90°=0. Công là vô hướng có dấu, khác với độ lớn lực hay quãng đường.


    **Kiểm lỗi dùng chung:** [Xem hướng dẫn tự sửa liên quan](#HELP-G10-B11-02).
    ### 1.3. Vận dụng — hợp lực và lực giữ cân bằng

    Để giữ một vòng móc đứng yên khi hai dây đang kéo, lực thứ ba phải **đối** với hợp lực của hai lực đầu. Theo Bài 8, hợp lực là tổng **vectơ** chứ không phải tổng hai độ lớn; theo Bài 11, tích vô hướng giúp tính độ lớn hợp lực khi biết góc giữa hai lực.

    <span id="thpt-g10-chiv-try-force-tr01" data-thpt-first-try-id="THPT-G10-CHIV-TRY-FORCE-TR01" data-outcome-id="G10-B11-GEOMETRIC_DOT" data-thpt-help-ref="HELP-G10-CHIV-FORCE-TR01"></span>

    **Em vận dụng.** Hai lực bằng nhau, mỗi lực \(4\,\mathrm N\), tạo góc \(60^\circ\). Muốn vòng móc cân bằng, lực thứ ba phải có **độ lớn và chiều** như thế nào? Hãy dự đoán hướng trước khi tính.

    ??? question "Tự mở đối chiếu sau khi đã làm"

        **Kết quả:** Đặt \(\vec R=\vec F_1+\vec F_2\), ta có \(|\vec R|^2=4^2+4^2+2\cdot4\cdot4\cos60^\circ=48\). Vì vậy \(|\vec F_3|=4\sqrt3\,\mathrm N\), và \(\vec F_3=-\vec R\), tức lực thứ ba **ngược chiều hợp lực**.

        **Vì sao:** Góc \(60^\circ\) không phải góc vuông; dùng tổng vectơ và tính chất tích vô hướng, không cộng \(4+4\) thành độ lớn hợp lực. Nếu nhầm, tự mở khung Kiểm lỗi ngay dưới câu Vận dụng này.



    <a id="HELP-G10-CHIV-FORCE-TR01" aria-hidden="true"></a>
    <span id="help-g10-chiv-force-tr01" data-thpt-help-id="HELP-G10-CHIV-FORCE-TR01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Tự nhận diện:** Em lấy tổng độ lớn hai lực 4 N + 4 N thành 8 N?

        **Cách làm sai:** Vì mỗi lực có độ lớn \(4\,\mathrm N\), kết luận hợp lực luôn \(8\,\mathrm N\), rồi đặt lực cân bằng cùng chiều với hợp lực.

        **Vì sao sai:** Hai lực tạo góc \(60^\circ\), không cùng hướng. Phải **cộng vectơ**, không cộng độ lớn, và lực cân bằng phải **ngược chiều** hợp lực.

        **Tự sửa:** Vẽ hai mũi tên cùng gốc, xác định đúng góc \(60^\circ\). Áp dụng \(|\vec F_1+\vec F_2|^2=4^2+4^2+2\cdot4\cdot4\cos60^\circ=48\), suy ra hợp lực \(4\sqrt3\,\mathrm N\). Vectơ lực thứ ba là \(-(\vec F_1+\vec F_2)\).

        **Luyện lại:** Tự trở lại bài vận dụng hai lực \(4\,\mathrm N\), góc \(60^\circ\) trong tab Khám phá; hãy tự tính trước khi mở đối chiếu. Nếu đã xem đáp án thì chọn bộ số liệu khác để kiểm tra độc lập.
    ### 1.4. Thuật ngữ, kiến thức và kỹ năng

    **Thuật ngữ:** Tích vô hướng, góc giữa hai vectơ, dấu của cos góc nhọn/tù, vuông góc, tích vô hướng theo tọa độ, công của lực.

    **Sau bài học, em cần làm được:** Chọn đúng góc giữa hai vectơ; tính tích vô hướng theo hình học hoặc tọa độ; suy góc vuông từ tích bằng 0 với vectơ khác không; giải thích ý nghĩa dấu trong ứng dụng.

=== "Kiến thức SGK"

    ### 2.1. Góc giữa hai vectơ

    Trước khi tính tích vô hướng, cần biết **góc giữa hai hướng có thể đặt tại cùng một gốc**. Hãy tịnh tiến hai vectơ sao cho các mũi tên có chung điểm đầu; giữ nguyên hướng và độ dài nên giá trị góc không thay đổi.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Góc giữa hai vectơ (SGK trang 66):</strong> Với \(\vec u,\vec v\) đều khác \(\vec0\), lấy điểm \(A\) bất kì, dựng \(\overrightarrow{AB}=\vec u\) và \(\overrightarrow{AC}=\vec v\). Góc \(\widehat{BAC}\) được gọi là góc giữa \(\vec u,\vec v\), kí hiệu \((\vec u,\vec v)\), có số đo từ \(0^\circ\) đến \(180^\circ\).</div>

    **Đọc góc đúng hướng:** Hai vectơ cùng hướng cho \(0^\circ\), ngược hướng cho \(180^\circ\); trong tam giác, \((\overrightarrow{AB},\overrightarrow{BC})\) không nhất thiết bằng \(\angle ABC\) vì \(\overrightarrow{AB}\) hướng ngược \(\overrightarrow{BA}\).

    **Chú ý về vectơ-không (SGK trang 66):** Góc giữa \(\vec u\) và \(\vec0\) có thể nhận một giá trị **tùy ý** từ \(0^\circ\) đến \(180^\circ\), không xác định duy nhất. Theo **quy ước SGK**, \(\vec0\) được coi là vuông góc với mọi vectơ. Không sử dụng phép chia cho \(|\vec0|=0\) để tính cos góc.

    ### 2.2. Tích vô hướng của hai vectơ

    Công của một lực không đổi phụ thuộc vào thành phần lực cùng hướng chuyển dời. Nhân hai độ lớn luôn cho số không âm nên chưa thể phản ánh tác dụng hỗ trợ hoặc cản chuyển động; hệ số \(\cos\theta\) bổ sung dấu và mức độ cùng hướng.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Tích vô hướng (SGK trang 67):</strong> Với \(\vec u,\vec v\) đều khác \(\vec0\), tích vô hướng là một <strong>số thực</strong>:
    <div class="arithmatex">\(\displaystyle \vec u\cdot\vec v=|\vec u|\,|\vec v|\cos(\vec u,\vec v).\)</div>
    Nếu một vectơ bằng \(\vec0\), tích vô hướng bằng \(0\) theo định nghĩa mở rộng; không cần chọn một góc duy nhất.</div>

    **Nhìn dấu trước khi tính:** Với hai vectơ khác không, góc nhọn → tích dương; góc vuông → \(0\); góc tù → tích âm. Đặc biệt \(\vec u\cdot\vec u=|\vec u|^2\ge0\).

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất vuông góc:</strong> Theo quy ước SGK, \(\vec u\perp\vec v\) khi và chỉ khi \(\vec u\cdot\vec v=0\), kể cả trường hợp có vectơ-không. Khi muốn suy ra <em>góc bằng \(90^\circ\) duy nhất</em> thì phải có hai vectơ khác không.</div>

    **Vận dụng trong Vật lí:** Với lực \(\vec F\) (N) và độ dời \(\vec s\) (m), công \(W=\vec F\cdot\vec s\) có đơn vị J (N·m). Góc lực–độ dời nhọn làm công dương, tù làm công âm, vuông góc làm công bằng 0; với lực hoặc độ dời bằng 0 thì công bằng 0.

    ### 2.3. Biểu thức tọa độ và tính chất của tích vô hướng

    Trong hệ trục vuông góc \(Oxy\), hai vectơ đơn vị \(\vec i,\vec j\) thỏa \(\vec i\cdot\vec i=\vec j\cdot\vec j=1\) và \(\vec i\cdot\vec j=0\). Viết \(\vec u=a\vec i+b\vec j\), \(\vec v=c\vec i+d\vec j\) rồi phân phối: các tích chéo giữa hai trục triệt tiêu, chỉ còn hai tích cùng trục.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Biểu thức tọa độ (SGK trang 68):</strong> Với \(\vec u=(a;b)\), \(\vec v=(c;d)\),
    <div class="arithmatex">\(\displaystyle \vec u\cdot\vec v=ac+bd.\)</div>
    Đây là cùng phép tích vô hướng hình học, không phải một phép nhân mới. Kết quả là <strong>số</strong>, không phải vectơ.</div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất (SGK trang 69):</strong> Với các vectơ \(\vec u,\vec v,\vec w\) và \(t\in\mathbb R\),
    <div class="arithmatex">\(\displaystyle \vec u\cdot\vec v=\vec v\cdot\vec u,\quad \vec u\cdot(\vec v+\vec w)=\vec u\cdot\vec v+\vec u\cdot\vec w.\)</div>
    <div class="arithmatex">\(\displaystyle (t\vec u)\cdot\vec v=t(\vec u\cdot\vec v)=\vec u\cdot(t\vec v).\)</div>
    Suy ra \(|\vec u\pm\vec v|^2=|\vec u|^2+|\vec v|^2\pm2\vec u\cdot\vec v\).</div>

    **Vì sao có công thức tổng bình phương?** Khai triển \((\vec u+\vec v)\cdot(\vec u+\vec v)\) bằng tính phân phối; hai tích chéo bằng nhau, nên thành \(2\vec u\cdot\vec v\). Khi cần tìm độ lớn hợp lực với góc đã biết, kết hợp công thức này với định nghĩa hình học.

    <div class="thpt-r4-key-formula" role="note"><strong>Công thức trọng tâm — Góc giữa hai vectơ khác không:</strong> Khi \(\vec u=(a;b)\ne\vec0\) và \(\vec v=(c;d)\ne\vec0\),
    <div class="arithmatex">\(\displaystyle \cos(\vec u,\vec v)=\frac{ac+bd}{\sqrt{a^2+b^2}\sqrt{c^2+d^2}}.\)</div>
    **Giới hạn:** Mẫu số phải dương; không thế \(\vec0\) vào công thức này. Muốn kiểm vuông góc thì tính \(ac+bd\) trực tiếp, không cần chia.</div>

    <div class="thpt-r4-knowledge-conclusion" role="note"><strong>Kiến thức cần nhớ — Bài 11:</strong> Đặt hai vectơ chung gốc để đọc góc; tích vô hướng là <strong>một số có dấu</strong>; chọn định nghĩa độ dài–góc khi biết góc, chọn công thức tọa độ khi biết thành phần; kiểm vuông góc qua tích bằng 0 theo quy ước SGK; phân biệt quy ước vectơ-không với điều kiện mẫu số của công thức cos. Công của lực là ứng dụng, không phải tổng độ lớn hai lực.</div>

=== "Ví dụ"

    Trước khi đọc lời giải, hãy xác định **dữ kiện → chọn phương pháp → kiểm điều kiện và dấu**. Một ví dụ đã mở lời giải không trở thành chứng cứ đánh giá độc lập cho Tự kiểm tra cuối chương.

    ### 3.1. Ví dụ 1 — Dấu tích vô hướng ở góc tù

    **Đề:** Cho \(|\vec u|=4\), \(|\vec v|=3\) và góc giữa chúng là \(120^\circ\). Tính \(\vec u\cdot\vec v\).

    **Phân tích:** Đề cho hai độ dài và góc, không cho tọa độ, nên dùng định nghĩa hình học. Dự đoán kết quả âm vì góc tù.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ">
    <p><strong>Giải:</strong> \(\vec u\cdot\vec v=4\cdot3\cos120^\circ=12\cdot(-\tfrac12)=-6\).</p>
    </div>

    **Kiểm lại:** Độ lớn mỗi vectơ dương, \(\cos120^\circ<0\), nên dấu âm là hợp lý; kết quả không có đơn vị nếu vectơ chỉ là đối tượng hình học.

    ### 3.2. Ví dụ 2 — Vuông góc bằng tọa độ

    **Đề:** Cho \(\vec u=(2;-1)\), \(\vec v=(1;2)\). Kiểm tra hai vectơ vuông góc.

    **Phân tích:** Biết tọa độ, tính \(ac+bd\) nhanh và chính xác hơn đo góc từ hình vẽ.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ">
    <p><strong>Giải:</strong> \(\vec u\cdot\vec v=2\cdot1+(-1)\cdot2=0\). Hai vectơ đều khác \(\vec0\), nên góc giữa chúng xác định và bằng \(90^\circ\).</p>
    </div>

    **Kiểm lại:** \(|\vec u|=|\vec v|=\sqrt5>0\), vì thế công thức cos cho \(\cos\theta=0\), phù hợp \(90^\circ\).

    ### 3.3. Ví dụ 3 — Tam giác vuông và diện tích

    **Đề:** Cho \(A(1;1)\), \(B(4;1)\), \(C(1;5)\). Xác định góc tại \(A\) và diện tích tam giác.

    **Phân tích:** Góc tại \(A\) được tạo bởi \(\overrightarrow{AB}\) và \(\overrightarrow{AC}\); phải chọn hai vectơ **chung gốc A** trước khi tính.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ">
    <p><strong>Giải:</strong> \(\overrightarrow{AB}=(3;0)\), \(\overrightarrow{AC}=(0;4)\). Vì \(\overrightarrow{AB}\cdot\overrightarrow{AC}=3\cdot0+0\cdot4=0\) và chúng khác \(\vec0\), nên \(\angle BAC=90^\circ\). Do đó \(S_{ABC}=\tfrac12\cdot AB\cdot AC=\tfrac12\cdot3\cdot4=6\).</p>
    </div>

    **Kiểm lại:** Hai cạnh dọc theo hai trục vuông góc, độ dài \(3\) và \(4\), nên kết quả có ý nghĩa hình học.

    ### 3.4. Ví dụ 4 — Hợp lực và lực thứ ba giữ cân bằng

    **Đọc hình:** Hình bên dưới minh họa **bộ lực khác** \(8\,\mathrm N\) về Đông và \(15\,\mathrm N\) lệch \(120^\circ\), cho hợp lực \(13\,\mathrm N\); đây là tình huống trong thư viện tự luận. **Ví dụ đang giải bên dưới dùng hai lực \(6\,\mathrm N\)**. Không tráo số liệu giữa hình minh họa và đề.

    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_CHIV_FORCE_TRANSFER_D5_R01_CORRECTED.svg" alt="Hai lực 8 N về Đông và 15 N tạo góc 120 độ; hợp lực có độ lớn 13 N, lực giữ cân bằng ngược chiều hợp lực" loading="lazy"><figcaption>Đọc chiều mũi tên và góc giữa lực trước; hình dùng dữ kiện 8 N/15 N/120° khác đề ví dụ 6 N/6 N/120°.</figcaption></figure>

    **Đề:** Hai dây kéo vòng móc với hai lực có độ lớn \(6\,\mathrm N\) và \(6\,\mathrm N\), tạo góc \(120^\circ\). Tìm **độ lớn và chiều** lực thứ ba để vòng móc đứng yên.

    **Phân tích:** Điều kiện cân bằng là \(\vec F_1+\vec F_2+\vec F_3=\vec0\). Đặt \(\vec R=\vec F_1+\vec F_2\), khi đó \(\vec F_3=-\vec R\). Không cộng \(6+6\) vì hai lực không cùng hướng.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ">
    <p><strong>Giải:</strong> Từ tính chất bình phương tổng vectơ và góc giữa hai lực,</p>
    <div class="arithmatex">\(\displaystyle |\vec R|^2=6^2+6^2+2\cdot6\cdot6\cos120^\circ=72-36=36.\)</div>
    <p>Vậy \(|\vec F_3|=|\vec R|=6\,\mathrm N\) và \(\vec F_3=-\vec R\), ngược chiều đường chéo hình bình hành tạo bởi \(\vec F_1,\vec F_2\); không phải ngược riêng một trong hai dây.</p>
    </div>

    **Kiểm lại:** \(0\le|\vec R|\le 6+6=12\,\mathrm N\), phù hợp bất đẳng thức tam giác; tổng ba vectơ bằng \(\vec0\). Biết độ lớn và góc giúp tìm độ lớn hợp lực; muốn xác định góc hướng chính xác trong trục tọa độ phải xét các thành phần.

=== "Lỗi thường gặp"

    **Kiểm lỗi:** Các lỗi thường gặp được giải thích ngay sau từng hoạt động ở tab Khám phá kiến thức. Chọn mục tương ứng để xem lại: [Kiểm lỗi 1](#HELP-G10-B11-02) · [Kiểm lỗi 2](#HELP-G10-B11-01) · [Kiểm lỗi 3](#HELP-G10-CHIV-FORCE-TR01).

    **Học tiếp:** [Core và Luyện tập](luyen-tap.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn học liệu: SGK Toán 10 Kết nối tri thức và thư viện SLM hiện hành. Các tình huống tự học bổ sung dùng dữ kiện minh họa riêng, không thay thế bài tập SGK/SBT.</p>

<!-- END_B11_KNOWLEDGE_MARKDOWN -->

## B. Exactly eight original B11 Core/Practice canonical records (source-exact R01; do not edit)

<!-- BEGIN_B11_R01_CORE_PRACTICE -->
### `THPT-G10-B11-C01` — B11 | `SGK_CORE` | `G10-B11-COORDINATE_DOT` | `SHORT` | `BASIC` | `content_version=1`
**Câu hỏi:** Cho $\vec u=(3;-2),\vec v=(1;4)$. Tính $\vec u\cdot\vec v$.
**Đáp án:** -5  
**Hint chỉ dùng sau/ngoài kiểm tra:** $\vec u\cdot\vec v=u_xv_x+u_yv_y$.  
**Lời giải:** $3\cdot1+(-2)\cdot4=3-8=-5$.

### `THPT-G10-B11-C02` — B11 | `SGK_CORE` | `G10-B11-PERPENDICULAR` | `MCQ` | `BASIC` | `content_version=1`
**Câu hỏi:** Trong các cặp sau, cặp nào gồm hai vectơ đều khác vectơ-không và vuông góc với nhau?
**Lựa chọn:** A. $(1;2)$ và $(2;-1)$; B. $(1;1)$ và $(1;1)$; C. $(2;0)$ và $(1;0)$; D. $(1;-1)$ và $(2;-2)$.
**Đáp án:** A  
**Hint chỉ dùng sau/ngoài kiểm tra:** Hai vectơ khác không vuông góc nếu tích vô hướng bằng 0.  
**Lời giải:** A: $1\cdot2+2\cdot(-1)=0$. Các cặp B,C,D có tích khác 0 nên không vuông góc.

### `THPT-G10-B11-P01` — B11 | `SGK_PRACTICE` | `G10-B11-GEOMETRIC_DOT` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Cho $|\vec u|=5$, $|\vec v|=4$ và góc giữa chúng $60^\circ$. Tính $\vec u\cdot\vec v$.
**Đáp án:** 10  
**Hint chỉ dùng sau/ngoài kiểm tra:** Nhớ $\cos60^\circ=1/2$.  
**Lời giải:** $5\cdot4\cos60^\circ=20/2=10$.

### `THPT-G10-B11-P02` — B11 | `SGK_PRACTICE` | `G10-B11-COORDINATE_DOT` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Với $\vec u=(k;2)$, $\vec v=(3;-6)$, tìm $k$ để $\vec u\perp\vec v$.
**Đáp án:** $k=4$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Giải phương trình tích vô hướng bằng 0.  
**Lời giải:** $\vec v\ne\vec0$, $\vec u$ không thể là vectơ-không vì tung độ bằng 2. $3k+2(-6)=0\implies 3k=12\implies k=4$.

### `THPT-G10-B11-P03` — B11 | `SGK_PRACTICE` | `G10-B11-COORDINATE_DOT` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Cho $\vec u=(1;3),\vec v=(-1;1)$. Tính $\cos\theta$ với $\theta$ là góc giữa hai vectơ.
**Đáp án:** $1/\sqrt5$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Cos bằng tích vô hướng chia cho tích độ dài (khác 0).  
**Lời giải:** $\vec u\cdot\vec v=-1+3=2$, $|\vec u|=\sqrt{10}$, $|\vec v|=\sqrt2$. Vậy $\cos\theta=2/\sqrt{20}=1/\sqrt5$.

### `THPT-G10-B11-P04` — B11 | `SGK_PRACTICE` | `G10-B11-COORDINATE_DOT` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Cho $A(0;0),B(4;1),C(2;3)$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$.
**Đáp án:** 11  
**Hint chỉ dùng sau/ngoài kiểm tra:** Hai vectơ cùng xuất phát từ A.  
**Lời giải:** $\overrightarrow{AB}=(4;1)$, $\overrightarrow{AC}=(2;3)$, tích bằng $4\cdot2+1\cdot3=11$.

### `THPT-G10-B11-P05` — B11 | `SGK_PRACTICE` | `G10-B11-APPLICATION` | `SHORT` | `APPLICATION` | `content_version=1`
**Câu hỏi:** Một lực không đổi $\vec F=(10;0)$ N tác dụng lên vật dịch chuyển $\vec s=(3;4)$ m. Tính công $W=\vec F\cdot\vec s$.
**Đáp án:** 30 J  
**Hint chỉ dùng sau/ngoài kiểm tra:** Tích vô hướng có đơn vị N·m = J.  
**Lời giải:** $W=10\cdot3+0\cdot4=30$ J. Không dùng $|F|\,|s|=50$ vì lực không cùng hướng với độ dời.

### `THPT-G10-B11-P06` — B11 | `SGK_PRACTICE` | `G10-B11-PERPENDICULAR` | `SHORT` | `APPLICATION` | `content_version=1`
**Câu hỏi:** Cho $A(0;0),B(3;1),C(-1;3)$. Chứng minh tam giác ABC vuông ở A và tính diện tích.
**Đáp án:** Vuông ở A; diện tích 5 (đv²)  
**Hint chỉ dùng sau/ngoài kiểm tra:** Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$ và độ dài hai cạnh.  
**Lời giải:** $\overrightarrow{AB}=(3;1),\overrightarrow{AC}=(-1;3)$, tích $-3+3=0$, hai vectơ khác không. $AB=AC=\sqrt{10}$, nên diện tích $S=\tfrac12\cdot\sqrt{10}\cdot\sqrt{10}=5$.

<!-- END_B11_R01_CORE_PRACTICE -->

## C. One original Written W11-ANCHOR canonical record (source-exact R01; not a new item)

<!-- BEGIN_B11_R01_WRITTEN -->
### `THPT-G10-CHIV-W11-ANCHOR` · B11 | `WRITTEN_ANCHOR` | `G10-B11-APPLICATION` | `APPLICATION` | `content_version=1`
**Đề:** Một lực không đổi trên mặt phẳng có thành phần $\vec F=(8;6)$ N. Vật dịch chuyển $\vec s=(3;4)$ m. a) Tính độ lớn lực và độ dời. b) Tính công $W$. c) Tính $\cos\theta$ giữa lực và độ dời, giải thích dấu của công.  
**Đáp án/kết quả cần đạt:** a) $|F|=10$ N và $|s|=5$ m. b) $W=8\cdot3+6\cdot4=48$ J. c) $\cos\theta=48/(10\cdot5)=24/25>0$, $\theta$ nhọn nên công dương.  
**Gợi ý tự học:** Nhớ $W=F\cdot s$ là tích vô hướng, không phải lúc nào là tích hai độ lớn.  
**Lời giải/luận chứng:** Lực và độ dời đều không bằng vectơ không, nên được phép tính cos từ tích vô hướng.
**Rubric 7 điểm (chấm theo lập luận, không chỉ kết quả):**
- 2 điểm — Tính đúng $|F|=10$ N và $|s|=5$ m.
- 2 điểm — Tính công đúng 48 J, đầy đủ đơn vị.
- 2 điểm — Tính $\cos\theta=24/25$ với điều kiện độ dài khác 0.
- 1 điểm — Giải thích công dương và góc nhọn.
**Tự kiểm:** Bài tự luận là formative public; không ghi điểm chính thức hoặc bằng chứng thành thạo khi học sinh tự chấm.

<!-- END_B11_R01_WRITTEN -->

## D. External shared public Written and implementation references

Existing force Written THPT-G10-CHIV-W08-FORCE-TR01 belongs to the already public shared Written library, not to a duplicate B11 item. The 8N/15N/120° SVG is its source-accurate figure; B11 Example 4 uses a distinct illustrative 6N/6N/120° scenario and must clearly distinguish datasets. The existing B11 W11-ANCHOR is independently referenced by its canonical ID in the public library. Original docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js and original shared Written library are immutable on this candidate branch. A reviewer must compare source/answers at the item/outcome/role level, not only count IDs.

**DERIVATION CONTRACT:** Published Knowledge Markdown must be byte-for-byte equal to Section A; original eight items in Section B and one Written in Section C must equal the immutable R01 packet; B01–B10 source and published HTML unchanged; Q18 commit and receipt SHA lock must match the exact candidate. This is a proposed DELTA_C_ACADEMIC_MATERIAL (because the didactic sequence/remediation is materially revised) in addition to AP-only MathJax/CSS. It requires affected-scope independent Academic/PED review rather than a purported grandfathered PASS.

**CURRENT STATE:** B11_EDITED_ON_DRAFT / Q18_QA_PENDING / INDEPENDENT_NOTEBOOKLM_REVIEW_PENDING / NO_MERGE_NO_DEPLOY / OWNER_P2_PENDING.
