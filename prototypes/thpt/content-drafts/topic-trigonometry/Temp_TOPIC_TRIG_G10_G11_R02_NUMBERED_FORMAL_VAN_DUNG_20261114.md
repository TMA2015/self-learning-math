# Chuyên đề Lượng giác và giải tam giác · R02 biên tập

<!-- ORIGINAL_R01_FROZEN_BLOB:2b5e4c6fb71fdc60c3cfb3ac8b19b2dd9c9e2164; PLAN22-06+PLAN22-12_RESEARCH_ONLY; AUTHORING_R02_NOT_READY -->

<!-- TOPIC_KNOWLEDGE_BEGIN -->
## 1. Kiến thức

Mạch tự học: **hình và góc** → giá trị lượng giác trên đường tròn → phép biến đổi → đồ thị → phương trình và ứng dụng. Trong mỗi mục, tự giải Vận dụng **trước** khi bấm Đối chiếu. Nếu sai, dùng D6 và làm bài canonical cùng outcome. Không cần rời hành trình Topic để đọc kiến thức bắt buộc.

### 1. Hình học và hệ thức lượng

#### 1.1. Đơn vị nửa đường tròn và góc đặc biệt G10


        **Vì sao cần học?** Khi quay một vật quanh tâm, tọa độ điểm cuối thay đổi theo góc. Trên nửa đường tròn đơn vị (0° đến 180°), điểm \(M=(\cos\alpha,\sin\alpha)\) nên **cos là hoành độ**, **sin là tung độ**; sin không âm, cos đổi dấu khi qua 90°. Đây là lý do bảng góc đặc biệt không chỉ là danh sách phải học thuộc.

        **Hình thành bản chất.** Dựng tam giác vuông với bán kính bằng 1 để suy ra ở 30°, 45°, 60° các giá trị 1/2, √2/2, √3/2. Góc \(120^\circ\) nằm phía trái trục Oy nên \(\cos120^\circ=-1/2\), còn \(\sin120^\circ=\sqrt3/2\). **Đọc hình:** hình đường tròn bên dưới có điểm 150° ở phía trên bên trái, hoành độ âm và tung độ dương. Không suy dấu từ giá trị tuyệt đối của góc tham chiếu.


> **ĐỊNH NGHĨA — Đơn vị nửa đường tròn và góc đặc biệt G10**
>
> Trên nửa đường tròn đơn vị, \(M=(\cos\alpha,\sin\alpha)\) và \(0^\circ\le\alpha\le180^\circ\).

        **Ví dụ có suy luận.** Nếu điểm M có \(\sin\alpha=1/2\) và \(\alpha\) là góc tù, \(\cos\alpha=-\sqrt3/2\) (không lấy căn dương vì hoành độ phía trái). Từ đó \(M=(-\sqrt3/2,1/2)\).

        **Năng lực cụ thể cần tự đạt:**
        - **G10-B05-UNIT_SEMICIRCLE:** Hoành độ cos, tung độ sin của điểm M trên nửa đường tròn; cần đọc hình thay vì chỉ ghi nhớ góc.
        - **G10-B05-SPECIAL_ANGLES:** Tái dựng sin/cos góc 0,30,45,60,90,120,135,150,180 bằng góc tham chiếu và dấu.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M01-TRY01`):** Trên nửa đường tròn đơn vị, góc α=135°. Hãy xác định sinα, cosα và cho biết vì sao cos âm.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(\sin135^\circ=\sqrt2/2\), \(\cos135^\circ=-\sqrt2/2\); điểm ở góc phần tư II, hoành độ âm.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm vị trí, vẽ hai trục Ox/Oy và đánh dấu hình chiếu điểm M; xác định dấu trước khi thay số. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


![Hình đường tròn lượng giác 150°, sin dương cos âm](assets/Temp_TOPIC_TRIG_UNIT_CIRCLE_R00_20261112.svg)

**Cách đọc:** Điểm M(−√3/2,1/2) ở bên trái trục Oy và phía trên Ox; chính **tọa độ** giải thích dấu, không phải một mẹo học thuộc.

#### 1.2. Dấu, góc bù, miền xác định và hệ thức G10


        **Bản chất.** Mỗi điểm trên đường tròn đơn vị thỏa \(x^2+y^2=1\), nên \(\sin^2\alpha+\cos^2\alpha=1\). Với góc \(180^\circ-\alpha\), điểm đối xứng qua Oy nên sin giữ nguyên và cos đổi dấu. \(\tan\alpha=\sin\alpha/\cos\alpha\) chỉ khi cos khác 0; \(\cot\alpha=\cos\alpha/\sin\alpha\) chỉ khi sin khác 0. Không được viết công thức mà bỏ miền xác định.


> **CÔNG THỨC — Dấu, góc bù, miền xác định và hệ thức G10**
>
> \[\sin^2\alpha+\cos^2\alpha=1,\quad\tan\alpha=\sin\alpha/\cos\alpha\ (\cos\alpha\ne0),\quad\cot\alpha=\cos\alpha/\sin\alpha\ (\sin\alpha\ne0).\]

        **Ví dụ lựa chọn cách giải.** Với \(\alpha\) tù và \(\cos\alpha=-5/13\), tính \(\sin\alpha\) bằng hệ thức căn: \(\sin^2\alpha=1-25/169=144/169\), sin dương nên \(12/13\); từ đó tan = \(-12/5\). Nếu chỉ biết \(\cos^2\alpha\) mà không biết khoảng góc, dấu không xác định duy nhất.

        **Giới hạn.** \(\tan90^\circ\) không tồn tại, \(\cot0^\circ\) không tồn tại; không điền 0 như một đáp án mặc định.

        **Năng lực cụ thể cần tự đạt:**
        - **G10-B05-SIGN_DOMAIN:** Sin/cos dấu theo góc và miền; tan/cot phải xét mẫu cos/sin khác 0.
        - **G10-B05-SUPPLEMENTARY:** Hai góc bù có sin bằng nhau, cos đối nhau; hình học đối xứng qua Oy.
        - **G10-B05-IDENTITIES:** Từ sin²+cos²=1 suy giá trị còn thiếu nhưng phải chọn dấu theo phần tư.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M02-TRY01`):** Góc α tù có cosα=−8/17. Tìm sinα, tanα và nêu điều kiện dùng tan.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(\sin\alpha=\sqrt{1-64/289}=15/17>0\); \(\tan\alpha=-15/8\); dùng được vì \(\cos\alpha\ne0\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu lấy dấu sai, vẽ góc phần tư II và kiểm kết quả bằng sin²+cos²=1; nếu có phân thức, xét mẫu trước. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 1.3. Định lý côsin, diện tích và góc kẹp


        **Vì sao cần học?** Đo được hai khoảng cách từ một điểm đến hai vật và góc giữa hai hướng nhìn, ta có thể tính khoảng cách giữa hai vật mà không cần đi tới đó. Định lý côsin mở rộng định lý Pythagoras: nếu \(b=CA,c=AB,A=\angle BAC\), thì \(a^2=b^2+c^2-2bc\cos A\). Khi \(A=90^\circ\), số hiệu chỉnh bằng 0.

        **Bản chất diện tích.** Chiều cao ứng với một cạnh là cạnh kề nhân \(\sin\) góc kẹp, do đó \(S=\frac12bc\sin A\). Chỉ dùng \(\sin A\) khi hai cạnh đang cho kẹp tại **A**; không chọn góc khác để dễ bấm máy.


> **ĐỊNH LÝ — Định lý côsin, diện tích và góc kẹp**
>
> \[a^2=b^2+c^2-2bc\cos A,\quad S=\frac12bc\sin A.\] Góc A kẹp đúng hai cạnh b,c.

        **Ví dụ có suy luận.** Với b=7,c=9,A=60°, định lý côsin cho \(a^2=49+81-2\cdot7\cdot9\cdot(1/2)=67\), \(a=\sqrt{67}\). Diện tích \(S=(1/2)\cdot7\cdot9\cdot\sin60^\circ=63\sqrt3/4\). Một dữ kiện (góc kẹp) cung cấp cả cạnh thứ ba lẫn diện tích.

        **Năng lực cụ thể cần tự đạt:**
        - **G10-B06-COSINE_RULE:** Biết hai cạnh và góc kẹp: sử dụng định lý côsin; góc nằm đối diện đúng cạnh.
        - **G10-B06-AREA_SIN:** Diện tích với hai cạnh phải dùng sin **góc xen giữa**; kết quả đơn vị diện tích.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M03-TRY01`):** Tam giác ABC có b=6,c=8,A=90°. Tính a và diện tích.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(a=\sqrt{36+64}=10\), \(S=\tfrac12\cdot6\cdot8\cdot1=24\) (đv²).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nhầm cạnh đối diện góc thì gắn a↔A, b↔B, c↔C lên hình; sai đơn vị diện tích thì kiểm bình phương đơn vị. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


![Tam giác vuông 3–4–5 và trường hợp riêng định lý côsin](assets/Temp_TOPIC_TRIG_COSINE_RULE_TRIANGLE_R00_20261112.svg)

**Cách đọc:** a=5 đối diện A=90°, b=4,c=3 kề góc A. (cos90^circ=0) làm định lý côsin rút về (5^2=4^2+3^2); diện tích (S=6) vuông đơn vị.

#### 1.4. Định lý sin, Heron và đo đạc thực tế


        **Vì sao cần học?** Có tình huống biết góc và một cạnh, và tình huống chỉ biết ba cạnh. Cần chọn **phương pháp theo dữ kiện**, không áp công thức theo thói quen.

        **Định lý sin.** Với tam giác không suy biến, \(a/\sin A=b/\sin B=c/\sin C=2R\). Nếu biết một cạnh đối diện một góc và thêm góc thứ hai, tính góc còn lại rồi dùng tỉ số sin để tìm cạnh. Nếu chỉ biết \(A,a,b\) (SSA), phương trình sin có thể cho **hai nghiệm góc**; cần kiểm tổng ba góc và hình học thật.

        **Heron và bán kính.** Ba cạnh dương phải thỏa bất đẳng thức tam giác. Đặt \(p=(a+b+c)/2\), \(S=\sqrt{p(p-a)(p-b)(p-c)}\), \(r=S/p\), \(R=abc/(4S)\). Ví dụ các cạnh 13,14,15 có p=21, \(S=\sqrt{21\cdot8\cdot7\cdot6}=84\), \(r=4\), \(R=13\cdot14\cdot15/(4\cdot84)=65/8\). Không tính r,R khi dữ kiện không tạo tam giác.

        **Đo đạc:** Vẽ tam giác A–B–C từ các vị trí khảo sát, ghi góc và đơn vị thực, sau đó mới suy độ dài từ định lý sin/côsin. Kết quả đo thực tế chịu sai số, không khẳng định chính xác vô hạn.


> **ĐỊNH LÝ — Định lý sin, Heron và đo đạc thực tế**
>
> \[a/\sin A=b/\sin B=c/\sin C=2R.\] Heron \(S=\sqrt{p(p-a)(p-b)(p-c)}\), \(p=(a+b+c)/2\), chỉ khi ba cạnh tạo tam giác.

        **Năng lực cụ thể cần tự đạt:**
        - **G10-B06-SINE_RULE:** Biết một cặp góc/cạnh đối diện cùng góc thứ hai: dùng định lý sin; cảnh giác trường hợp hai nghiệm SSA.
        - **G10-B06-HERON:** Ba cạnh phải thỏa bất đẳng thức tam giác trước khi dùng Heron; tìm r=S/p, R=abc/(4S).
        - **G10-B06-APPLICATION:** Vẽ mô hình đo đạc và kiểm đơn vị/độ chính xác; chọn luật sin hay côsin theo dữ kiện.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M04-TRY01`):** Tam giác ABC có A=30°, B=45°, a=6 cm. Tính góc C, cạnh b và bán kính ngoại tiếp R.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(C=105^\circ\); \(b=6\sin45^\circ/\sin30^\circ=6\sqrt2\) cm; \(2R=a/\sin A=12\) nên \(R=6\) cm.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu sử dụng SSA, kiểm nghiệm góc tù có thể xảy ra; nếu dùng nhầm Heron cho dữ kiện góc, ưu tiên định lý sin. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


### 2. Góc lượng giác và công thức

#### 2.1. Góc có hướng, radian, chu kì và độ dài cung


        **Vì sao cần học?** Một bánh xe có thể quay hơn 360° hoặc quay ngược chiều kim đồng hồ. Góc lượng giác ghi cả hướng và số vòng, không chỉ tia cuối. \(180^\circ=\pi\) rad; đổi độ→rad bằng nhân \(\pi/180\). Hai góc có cùng tia cuối khi chênh \(2k\pi\) rad (\(k\in\mathbb Z\)), nhưng quãng chuyển động vẫn khác nhau.

        **Độ dài cung.** Nếu bán kính R>0 và vật thực sự quay góc \(\alpha\) rad, quãng đường dọc cung \(s=R|\alpha|\). **Không** dùng góc đã rút về một vòng nếu câu hỏi là tổng quãng đường nhiều vòng.


> **CÔNG THỨC — Góc có hướng, radian, chu kì và độ dài cung**
>
> \[180^\circ=\pi\mathrm{rad};\quad s=R|\alpha|\quad(R>0,\alpha\text{ rad}).\] Góc cùng tia cuối chênh \(2k\pi\); không dùng góc rút gọn để tính cả quãng nhiều vòng.

        **Ví dụ chọn cách.** Góc −450° tương ứng −5π/2 rad, tia cuối cùng hướng với 270° nhưng hành trình thực là quay âm 450°. Một bánh xe R=6 cm quay 5π/3 rad đi theo cung \(s=6\cdot5\pi/3=10\pi\) cm. Đổi chế độ rad trước khi dùng công thức cung.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B01-DEG_RAD:** Góc có hướng đổi độ–radian theo π/180, không đồng nhất số vòng quay với tia cuối.
        - **G11-B01-PERIODIC_REDUCTION:** Rút tia cuối góc modulo2π, vẫn giữ góc quay thật nếu tính quãng cung.
        - **G11-B01-ARC_LENGTH:** s=R|α| chỉ khi α theo radian, R>0; không thay góc đã rút nếu hỏi nhiều vòng.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M05-TRY01`):** Bánh xe R=2 cm quay dương 810°. Đổi góc sang rad, tìm tia cuối và độ dài quãng cung đã thực sự đi.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(810^\circ=9\pi/2\) rad; tia cuối như \(90^\circ\), hướng Oy dương. Quãng cung \(s=2\cdot9\pi/2=9\pi\) cm, không phải \(\pi\) cm.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm góc đồng vị thành số vòng, phân biệt 'tia cuối' và 'đường đã đi'; kiểm Radian/Độ. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 2.2. Đường tròn lượng giác, góc liên quan và dấu


        **Bản chất.** Trên đường tròn lượng giác tâm O bán kính 1, điểm cuối của góc α có tọa độ \((\cos\alpha,\sin\alpha)\). Vì vậy tan/cot là tỉ số hoành-tung trên miền xác định, không phải tọa độ mới. Dấu hai tọa độ theo góc phần tư là chìa khóa rút căn và tính các góc liên quan.

        **Đối xứng trước công thức.** \(\sin(-\alpha)=-\sin\alpha\), \(\cos(-\alpha)=\cos\alpha\); \(\sin(\pi-\alpha)=\sin\alpha\), \(\cos(\pi-\alpha)=-\cos\alpha\), \(\sin(\pi+\alpha)=-\sin\alpha\). Từ đối xứng không tự suy tan/cot xác định ở mọi góc.


> **ĐỊNH NGHĨA — Đường tròn lượng giác, góc liên quan và dấu**
>
> \(\cos\alpha\) và \(\sin\alpha\) lần lượt là hoành/tung độ điểm trên đường tròn đơn vị; tan/cot chỉ tồn tại khi mẫu số khác 0.

        **Ví dụ đầy đủ.** \(\alpha=7\pi/6\) ở phần tư III, \(\sin\alpha=-1/2\), \(\cos\alpha=-\sqrt3/2\); \(\tan\alpha=1/\sqrt3\) vì cả tử và mẫu đều âm. Chọn phương pháp góc tham chiếu thay vì bấm máy rad rồi học kết quả.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B01-TRIG_UNIT_CIRCLE:** Điểm cuối trên đường tròn đầy đủ M=(cos,sin), xét bốn góc phần tư và miền tan/cot.
        - **G11-B01-TRIG_IDENTITIES:** Hệ thức sin²+cos²=1, 1+tan²=1/cos² chỉ trên miền cos≠0.
        - **G11-B01-RELATED_ANGLES:** Dấu sin/cos của −α, π−α, π+α từ đối xứng; tan/cot cần xét miền.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M06-TRY01`):** Góc α có sinα=−3/5 và cosα>0. Tính cosα, tanα và cos(π+α).

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(\cos\alpha=4/5\), \(\tan\alpha=-3/4\); \(\cos(\pi+\alpha)=-\cos\alpha=-4/5\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu căn âm sai, kiểm phần tư trước khi tìm căn; nếu tan/cot, kiểm mẫu khác 0. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 2.3. Công thức cộng, hiệu và góc nhân đôi


        **Vì sao cần học?** Giá trị lượng giác của một tổng góc không bằng tổng hai giá trị. Từ phép quay và phép chiếu, ta có \(\sin(u+v)=\sin u\cos v+\cos u\sin v\) và \(\cos(u+v)=\cos u\cos v-\sin u\sin v\). Đổi dấu v cho công thức hiệu; đặt u=v cho \(\sin2u=2\sin u\cos u\), \(\cos2u=\cos^2u-\sin^2u=2\cos^2u-1=1-2\sin^2u\).


> **CÔNG THỨC — Công thức cộng, hiệu và góc nhân đôi**
>
> \[\sin(a+b)=\sin a\cos b+\cos a\sin b;\quad\cos(a+b)=\cos a\cos b-\sin a\sin b.\] Nhân đôi suy từ hai góc bằng nhau.

        **Ví dụ suy luận.** \(\sin75^\circ=\sin(45^\circ+30^\circ)=(\sqrt6+\sqrt2)/4\). Dùng công thức cộng vì 75° không nằm bảng góc đặc biệt nhưng tách được thành 45+30. \(\cos120^\circ=\cos(2\cdot60^\circ)=2(1/2)^2-1=-1/2\). Công thức tan(u+v) chỉ được dùng khi \(\tan u,\tan v\) tồn tại và \(1-\tan u\tan v\ne0\).

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B02-SUM_DIFFERENCE:** Sin(u+v) không bằng sin u+sin v; áp dụng phép cộng/hiệu đúng dấu cos.
        - **G11-B02-DOUBLE_ANGLE:** Công thức 2u suy từ công thức cộng, chọn biểu diễn cos2u theo sin² hoặc cos² theo dữ kiện.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M07-TRY01`):** Tính sin(π/3+π/6) bằng công thức cộng và cos(2π/3) bằng công thức nhân đôi.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(\sin(\pi/2)=1\) vì \(\sin\pi/3\cos\pi/6+\cos\pi/3\sin\pi/6=3/4+1/4\); \(\cos(2\pi/3)=2(1/2)^2-1=-1/2\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu biến sin(u+v) thành sin u+sin v, so với u=v=π/6 để thấy sai; kiểm dấu trừ trong cos cộng. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 2.4. Tích thành tổng và tổng thành tích


        **Bản chất.** Cộng/trừ các công thức cos(u±v), sin(u±v) giúp biến tích thành tổng để tính giá trị hoặc biến tổng thành tích để phân tích nhân tử. Chẳng hạn \(2\sin u\sin v=\cos(u-v)-\cos(u+v)\) và \(\sin u-\sin v=2\cos\frac{u+v}{2}\sin\frac{u-v}{2}\).


> **PHƯƠNG PHÁP — Tích thành tổng và tổng thành tích**
>
> Đổi tích thành tổng hoặc tổng thành tích dựa vào cấu trúc, giữ điều kiện xác định nếu có mẫu số xuất hiện khi biến đổi.

        **Ví dụ lý do chọn.** Muốn tính \(2\sin75^\circ\sin15^\circ\), tích thành tổng cho \(\cos60^\circ-\cos90^\circ=1/2\), tránh nhân hai căn dài. Muốn giải phương trình ở bài sau, tổng thành tích có thể tạo phương trình tích bằng 0; không được áp khi chưa có đúng hai tổng sin/cos tương ứng.

        **Giới hạn.** Với công thức nửa tổng/nửa hiệu, chia cả hai góc cho 2 **sau** khi cộng/trừ, và giữ đơn vị cùng loại (độ hoặc rad).

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B02-PRODUCT_TO_SUM:** Dùng các tổ hợp cộng/trừ để chuyển tích thành tổng, đặc biệt 2sin u sin v.
        - **G11-B02-SUM_TO_PRODUCT:** Đổi tổng thành tích bằng nửa tổng/nửa hiệu; kiểm nhầm sin/cos và dấu.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M08-TRY01`):** Dùng tổng thành tích tính sin75°−sin15° mà không dùng máy.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(2\cos45^\circ\sin30^\circ=2(\sqrt2/2)(1/2)=\sqrt2/2\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu đổi tích/tổng sai chiều, viết công thức tổng quát rồi thay u,v; kiểm giá trị bằng tính gần đúng. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


### 3. Hàm lượng giác và đồ thị

#### 3.1. Miền xác định và tính chẵn lẻ của hàm lượng giác


        **Vì sao cần học?** Một đường biểu diễn không thể có giá trị ở nơi hàm chưa được xác định. Sin/cos xác định với mọi số thực và nhận giá trị trong [−1,1], tan xác định khi cosx≠0, cot xác định khi sinx≠0. Đồ thị tan/cot có tiệm cận đứng ở các điểm mẫu bằng 0; không nối nét qua đó.

        **Tính chẵn lẻ.** Hàm f chẵn khi \(f(-x)=f(x)\), lẻ khi \(f(-x)=-f(x)\), đồng thời miền xác định đối xứng qua 0. Sin là hàm lẻ, cos là hàm chẵn, tan/cot là hàm lẻ trên miền tương ứng. Tổng của sin và cos nhìn chung không chẵn hay lẻ.


> **ĐỊNH NGHĨA — Miền xác định và tính chẵn lẻ của hàm lượng giác**
>
> \(\sin,\cos\) xác định trên R; tan loại \(\pi/2+k\pi\), cot loại \(k\pi\); sin lẻ, cos chẵn, tan/cot lẻ.

        **Ví dụ.** \(f(x)=\sin x+\cos x\) có f(0)=1 nên không lẻ, nhưng f(π/2)=1 khác f(−π/2)=−1 nên không chẵn. Đây là phản ví dụ cụ thể, không chỉ liệt kê loại hàm.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B03-DOMAIN_RANGE:** Định miền sin/cos (R) so với tan/cot (loại các điểm mẫu0), range sin/cos [−1,1].
        - **G11-B03-PARITY:** Chẵn/lẻ phải kiểm f(−x) với miền đối xứng; sin+cos không chẵn hoặc lẻ.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M09-TRY01`):** Hàm y=tan x có miền xác định nào? Hàm chẵn hay lẻ? Nêu một điểm không xác định.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(D=\mathbb R\setminus\{\pi/2+k\pi:k\in\mathbb Z\}\); tan(−x)=−tanx nên lẻ; x=π/2 là điểm không xác định.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu quên loại mẫu bằng 0, vẽ đường tròn và xét cosx; kiểm miền đối xứng trước khi xét chẵn lẻ. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 3.2. Chu kì, đồ thị sin và cos


        **Bản chất.** Khi x tăng một vòng 2π, vị trí cuối trên đường tròn trở lại như cũ, nên sin và cos có chu kì cơ bản 2π. Biên độ của \(A\sin(\omega x+\phi)\) (với \(\omega\ne0\)) là |A|, chu kì dương nhỏ nhất \(T=2\pi/|\omega|\). Dấu A âm làm phản chiếu qua trục ngang; \(\phi\) gây dịch pha, không tự đổi chu kì.


> **TÍNH CHẤT — Chu kì, đồ thị sin và cos**
>
> Sin/cos có chu kỳ cơ bản \(2\pi\); trên một vòng sin đạt 1 ở \(\pi/2\), −1 ở \(3\pi/2\), bằng 0 ở \(0,\pi,2\pi\).

        **Ví dụ có suy luận.** \(y=3\sin2x\) có biên độ 3, chu kì π, cực đại tại x=π/4+kπ vì 2x=π/2+2kπ. Đường cos đồng dạng dịch pha π/2 so với sin: \(\cos x=\sin(x+\pi/2)\). **Đọc hình:** xem điểm 0,π/2,π,3π/2,2π trên đồ thị sin; các điểm cực trị và nghiệm là dữ liệu toán, không phải nét trang trí.

        **Giới hạn:** Không đọc trực tiếp giá trị của \(y=3\sin2x\) từ đồ thị sin chuẩn khi chưa điều chỉnh biên độ và trục ngang.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B03-PERIOD:** Chu kì dương nhỏ nhất của sin(ωx+φ) là 2π/|ω| khi ω≠0; tan/cot dùng π/|ω|.
        - **G11-B03-SIN_GRAPH:** Biên độ, pha, điểm cắt và cực trị đọc từ đồ thị sin chuẩn, có biến đổi tỉ lệ.
        - **G11-B03-COS_GRAPH:** Cos x=sin(x+π/2), đồ thị cos lệch pha; đừng nhầm dịch pha đổi chu kì.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M10-TRY01`):** Với y=−2sin(3x), tìm biên độ, chu kì dương nhỏ nhất và một cực tiểu trong [0,2π).

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        Biên độ 2, chu kì \(2\pi/3\); tại \(x=\pi/6\), \(\sin3x=\sin\pi/2=1\), nên \(y=-2\) (cực tiểu).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm 2π/3 với 6π, giải điều kiện 3(x+T)=3x+2π; nếu nhầm dấu A, thử điểm có sin=1. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


![Đồ thị sin trên một chu kì](assets/Temp_TOPIC_TRIG_SIN_GRAPH_R00_20261112.svg)

**Cách đọc:** Trục x ghi 0,π/2,π,3π/2,2π. Sin đạt 1 ở π/2, −1 ở 3π/2, bằng 0 tại 0,π,2π. Chu kì là 2π; đồ thị tan/cot **không có** cùng tính liên tục/chu kì này.

#### 3.3. Đồ thị tan, cot và mô hình dao động


        **Đọc đồ thị tan/cot.** Tan có chu kì π, tăng trên từng khoảng \((-\pi/2+k\pi,\pi/2+k\pi)\), không xác định tại x=π/2+kπ. Cot có chu kì π, giảm trên từng khoảng \((k\pi,(k+1)\pi)\), không xác định tại x=kπ. Các tiệm cận đứng là giới hạn của giá trị hàm, không phải điểm thuộc đồ thị.


> **TÍNH CHẤT — Đồ thị tan, cot và mô hình dao động**
>
> Tan/cot có chu kỳ cơ bản \(\pi\) và tiệm cận đứng ở những giá trị mà mẫu số trong định nghĩa bằng 0.

        **Ví dụ có suy luận.** Trên \((-\pi/2,\pi/2)\), tan từ âm vô hạn qua (0,0) tới dương vô hạn; trên \((0,\pi)\), cot từ dương vô hạn qua (π/2,0) tới âm vô hạn. Mô hình \(h(t)=5+2\sin(\pi t/4)\) có đường trung bình 5, biên độ 2, chu kì \(8\); cực đại 7 tại t=2, cực tiểu 3 tại t=6 trong một chu kì. Mô hình chỉ mang ý nghĩa theo miền t và đơn vị bài toán khai báo.

        **Giới hạn:** Không đi qua đường tiệm cận hay lấy một chu kì cộng thêm kπ của tan để biến thành chu kì sin. Không gán phương trình mô hình như một dự báo chắc chắn ngoài khoảng dữ liệu.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B03-TAN_GRAPH:** Tan tăng trên từng nhánh, có các đường x=π/2+kπ bị loại; chu kì π.
        - **G11-B03-COT_GRAPH:** Cot giảm trên từng nhánh (kπ,(k+1)π) và không xác định tại kπ.
        - **G11-B03-MODELING:** Biên độ, đường trung bình, pha và chu kì của mô hình sóng chỉ có ý nghĩa trong miền thời gian/đơn vị đã cho.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M11-TRY01`):** Mực nước h(t)=5+2sin(πt/4) (m), 0≤t≤8 (giờ). Tìm mức lớn nhất/nhỏ nhất và thời điểm đạt đầu tiên.

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        Mức lớn nhất 7 m tại t=2 giờ; mức nhỏ nhất 3 m tại t=6 giờ. Chu kì 8 giờ.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm đường trung bình với biên độ, viết h=mid+A·sin; tìm thời điểm bằng góc đại diện, kiểm giới hạn t. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.


### 4. Phương trình lượng giác

#### 4.1. Phương trình sin và cos cơ bản


        **Vì sao học?** Ta đã học giá trị của sin/cos khi biết góc; phương trình lượng giác đi theo chiều ngược: biết giá trị, tìm **tất cả** góc. Trên đường tròn, một giá trị sin trong (−1,1) thường ứng với hai tia cuối mỗi vòng; sinh họ nghiệm có bội \(2k\pi\), \(k\in\mathbb Z\).


> **CÔNG THỨC — Phương trình sin và cos cơ bản**
>
> \[\sin x=\sin a\iff x=a+2k\pi\text{ hoặc }x=\pi-a+2k\pi;\quad\cos x=\cos a\iff x=\pm a+2k\pi.\]

        **Ví dụ có suy luận.** \(\sin x=1/2\) trên [0,2π) có nghiệm \(x=\pi/6,5\pi/6\); \(\cos x=-1/2\) cho \(x=2\pi/3,4\pi/3\). Để giải toàn trục, thêm \(2k\pi\) vào các nghiệm cơ bản. Với \(\cos(2x)=0\), phải giải theo đối số t=2x rồi **chia toàn bộ** họ nghiệm cho 2.

        **Giới hạn.** Nếu \(|a|>1\), phương trình \(\sin x=a\) hoặc \(\cos x=a\) vô nghiệm thực; không bấm arcsin rồi tạo nghiệm ảo.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B04-SIN_EQ:** Phương trình sin x=a có hai họ nghiệm trong trường hợp |a|<1; kiểm khoảng.
        - **G11-B04-COS_EQ:** Phương trình cos x=a nhìn theo hoành độ hai điểm trên đường tròn; có điều kiện |a|≤1.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M12-TRY01`):** Giải cos x=√2/2 trên [0,2π).

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        \(x=\pi/4\) hoặc \(x=7\pi/4\). Hai nghiệm thuộc phần tư I,IV.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu quên họ nghiệm đối xứng, đánh dấu hai điểm có cùng hoành/tung trên đường tròn, rồi lọc khoảng. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 4.2. Phương trình tan, cot và biến đổi biểu thức


        **Bản chất.** Tan/cot có chu kì cơ bản π nên phương trình \(\tan x=a\) có họ \(x=\arctan a+k\pi\) khi xác định; \(\cot x=a\) cũng một nghiệm đại diện rồi cộng kπ, nhớ loại sin x=0. Khi đối số là 2x hoặc biểu thức tuyến tính khác, phải chia **toàn bộ phương trình** sau khi thêm kπ.


> **CÔNG THỨC — Phương trình tan, cot và biến đổi biểu thức**
>
> \[\tan x=\tan a\iff x=a+k\pi;\qquad\cot x=\cot a\iff x=a+k\pi.\] Phải thỏa miền xác định.

        **Ví dụ chọn phương pháp.** \(\tan(2x)=1\) → \(2x=\pi/4+k\pi\) → \(x=\pi/8+k\pi/2\). Trong [0,π), giữ x=π/8 và 5π/8. Nếu phương trình ban đầu chứa phân thức tan, điều kiện cos(2x)≠0 phải được kiểm (ở các nghiệm đúng).

        **Biến đổi.** Khi \(\sin x+\sin3x=0\), đổi tổng thành tích \(2\sin2x\cos x=0\). Nghiệm từ hai nhánh nhưng phải **hợp** lại loại trùng và kiểm miền xác định đề gốc.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B04-TAN_EQ:** Giải tan theo họ kπ, chỉ trong miền cosx≠0.
        - **G11-B04-COT_EQ:** Giải cot theo họ kπ, chỉ trong miền sinx≠0.
        - **G11-B04-TRANSFORM:** Đổi biểu thức bằng công thức lượng giác trước khi nhân/tách; ghi điều kiện mẫu gốc.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M13-TRY01`):** Giải cot x=√3 trên [0,2π).

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        Cot dương với góc tham chiếu \(\pi/6\), họ \(x=\pi/6+k\pi\); trên [0,2π) có \(x=\pi/6,7\pi/6\).

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu nhầm chu kì 2π với π, so hai nghiệm trong một vòng; đừng bỏ điều kiện mẫu sinx≠0. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.

#### 4.3. Lọc nghiệm, nghiệm ngoại lai và bài toán ứng dụng


        **Vì sao cần học?** Một họ nghiệm trên toàn trục không tự là danh sách nghiệm đúng trong một khoảng thời gian hoặc góc vật lý. Phải bắt đầu từ miền xác định, giải theo công thức, lọc nghiệm vào khoảng **đúng dấu ngoặc** và thử lại phương trình gốc.


> **GHI NHỚ — Lọc nghiệm, nghiệm ngoại lai và bài toán ứng dụng**
>
> Nghiệm thu được sau chia/bình phương/thế biến cần thử lại trong phương trình gốc và miền xác định, không dùng nghiệm ngoại lai.

        **Ví dụ.** Với \(\sin x/(1+\cos x)=0\) trên [0,2π), điều kiện \(1+\cos x\ne0\) loại x=π; tử bằng 0 tại x=0,π nhưng chỉ x=0 hợp lệ. Một phép nhân chéo thiếu điều kiện sẽ tạo nghiệm ngoại lai. Với \(h(t)=2+\sin(\pi t/6)\) trên 0≤t≤12, cực đại 3 tại t=3, cực tiểu 1 tại t=9; hãy nêu đơn vị m/giờ và giới hạn mô hình.

        **Giới hạn:** Không tự bật AI Tutor/gợi ý/đúng-sai trong Final Submit của phần Tự kiểm tra. Bài Practice đã xem không được coi là đề held-out độc lập.

        **Năng lực cụ thể cần tự đạt:**
        - **G11-B04-INTERVAL:** Lọc k vào khoảng, giữ dấu ngoặc [) đúng; nghiệm biên được kiểm riêng.
        - **G11-B04-EXTRANEOUS:** Nghiệm tử bằng0 chưa đủ; phải kiểm mẫu và thế vào phương trình gốc.
        - **G11-B04-APPLICATION:** Mô hình sin/cos cho thời điểm/giá trị thực, nhưng không suy chính xác ngoài dữ kiện đầu vào.

        **Vận dụng trước khi xem lời giải (`TOPIC-TRIG-M14-TRY01`):** Giải (2cos x−1)/sin x=0 trên [0,2π). Có nghiệm nào phải loại vì mẫu bằng 0?

        <details markdown="1"><summary>Đối chiếu — chỉ mở sau khi tự thử</summary>

        Điều kiện \(\sin x\ne0\). Tử bằng 0 ⇒ \(\cos x=1/2\), cho \(x=\pi/3,5\pi/3\). Tại hai góc này sin khác 0, không loại nghiệm nào.

        </details>

        **D6 – Khắc phục ngay tại đây:** Nếu bỏ qua nghiệm ở phần tư IV, vẽ đường tròn; nếu quên mẫu, lập điều kiện trước khi xử lý tử. Sau đó luyện câu mới ở bộ PUBLIC; không suy Mastery từ lượt tự mở.



<!-- TOPIC_KNOWLEDGE_END -->

<!-- TOPIC_PRACTICE_BEGIN -->
## 2. Luyện tập

**Một thư viện canonical cho cả SGK/Topic:** Sổ nguồn `prototypes/thpt/shared-items/Temp_TOPIC_TRIG_G10_G11_CANONICAL_SOURCE_INDEX_R00_20261112.md` (blob `ab53adbb38f988e2478d98d4f888f2ba1b2d9e0e`) trỏ tới **64 bài gốc** đã review theo đúng hai snapshot; không tạo bản sao đề/key/rubric. File mới `prototypes/thpt/shared-items/Temp_TOPIC_TRIG_G10_G11_PUBLIC_EXTENSION_16ITEM_R00_20261112.md` (blob `526d98d427e165d86a8f21e3ed0701d2ed6d1094`) có **16 câu bổ sung đúng các outcome trước chỉ có một câu**, mỗi câu chỉ có một lời giải và rubric. Tổng **80 canonical public item IDs** cho 36 outcomes; sáu Written gốc/Anchor dùng chung.

| Chặng | Mô-đun | Luyện kỹ năng theo độ sâu |
|---|---|---|
| G10 · giá trị và tam giác | M01–M04 | Đọc dấu từ hình, chứng minh miền xác định, phân biệt định lý sin/côsin/Heron, đo đạc có đơn vị và góc |
| G11 · phép quay & công thức | M05–M08 | Radian và cung thực, công thức cộng/trừ, góc đôi, tích→tổng và tổng→tích |
| G11 · đồ thị | M09–M11 | Miền/xác định, chẵn lẻ, biên độ và pha, đường tiệm cận tan/cot, mô hình định kì |
| G11 · phương trình | M12–M14 | Tập nghiệm tổng quát, lọc vào khoảng, điều kiện mẫu và nghiệm ngoại lai, bài toán thời gian |

**Cách tự luyện:** Giải câu nguồn theo outcome, giải thích *vì sao chọn công cụ*, tự kiểm miền và đơn vị trước khi mở lời giải; nếu tự luận, chỉ đối chiếu với rubric thủ công đã kiểm, không tự chấm điểm mastery. Có thể trở về đúng mảng Kiến thức theo ID, nhưng không phải nhảy sang SGK để học phần bắt buộc.

<!-- TOPIC_PRACTICE_END -->

<!-- TOPIC_SELF_CHECK_BEGIN -->
## 3. Tự kiểm tra

**Chỉ là Tự kiểm tra công khai** `CLIENT_SELF_CHECK_NO_MASTERY`. Chọn 12 placement của các item public đã dùng ở Practice để tự đối chiếu; **không** phải held-out Topic Readiness. Học sinh chỉ được xem gợi ý, đáp án, đúng/sai hoặc AI Tutor **sau thao tác Final Submit cho toàn lượt** (phải được RELEASE chứng minh trong browser). Không ghi Skill Mastery từ Practice, giải thích AI hoặc phần tự luận tự chấm.

| Mảng | Public canonical ID dùng lại, không clone | Ôn khi sai |
|---|---|---|
| Góc nửa đường tròn / dấu | `THPT-G10-B05-P01` · `THPT-G10-B05-P02` | M01–M02 |
| Giải tam giác / đo đạc | `THPT-G10-B06-P01` · `THPT-G10-B06-P05` | M03–M04 |
| Radian / phép biến đổi | `THPT-G11-B01-P02` · `THPT-G11-B02-P04` · `THPT-G11-B02-P05` | M05–M08 |
| Đồ thị / mô hình | `THPT-G11-B03-P03` · `THPT-G11-B03-P06` | M09–M11 |
| Phương trình / điều kiện | `THPT-G11-B04-P06` · `THPT-G11-B04-P08` · `THPT-G11-B04-P09` | M12–M14 |

**Q16:** 12 câu public đã xem không trở thành chứng cứ đo năng lực độc lập. Không có private RD1 được đưa lên GitHub, JavaScript hoặc trong gói này; giữ nguyên 20 private RD1 Chương I lớp 11 ngoài phạm vi.

<!-- TOPIC_SELF_CHECK_END -->


### Nguồn tài liệu (cuối học liệu)

- **SGK Toán 10 KNTT, Tập Một:** Bài 5 trang in 33–37; Bài 6 trang in 38–43.
- **SGK Toán 11 KNTT, Tập Một:** Bài 1 trang in 5–16; Bài 2 trang 17–21; Bài 3 trang 22–30; Bài 4 trang 31–39.
- **SBT tham khảo:** Toán 10 Tập Một B05 29–33/B06 34–39; Toán 11 Tập Một B01 4–7/B02 8–10/B03 11–18/B04 19–24.

<!-- AUTHORING_ONLY: original R01 80 canonical remain source-of-truth; R02 needs new Q18 math/formula verification; no private RD1/merge/deploy. -->
