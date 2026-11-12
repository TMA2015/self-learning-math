# CĐ06/22 — Lượng giác và Phương trình lượng giác

**LEARNING_PATH: TOPIC** — ba trang độc lập **Kiến thức / Luyện tập / Tự kiểm tra**; không có Core Chuyên đề. Bài viết hoàn toàn theo mạch lý luận lượng giác xuyên lớp, không ghép nguyên các chương SGK.

## Nguồn học thuật và ranh giới

- **S1 gốc:** SGK Toán 11 Kết nối tri thức tập 1, Chương I B01 (trang in 5–16), B02 (17–21), B03 (22–30), B04 (31–39), cuối chương (40–41), theo biên bản trực quan lịch sử đã khóa trong Git. SBT tập 1 B01 (4–7), B02 (8–10), B03 (11–18), B04 (19–24) và cuối chương (25–30) theo source receipts lưu tại chương I. Lượt này tham chiếu receipt, **không xác nhận quét lại PDF gốc**; số trang là trang in, không tự suy đoán PDF index.
- **Nguồn canonical SGK chung:** `prototypes/thpt/content-drafts/G11_CHI_B01_B04_CONCEPT_FIRST_PED_R03_SOURCE_CANDIDATE_20261102.md`, Git blob `256ceb5edc5e02aec320e83e99c8e08e035654f3`, có đúng 46 PUBLIC original IDs; chỉ tham chiếu qua index, không nhân stem/key/solution/rubric.
- **Ranh giới Topic:** mạch cơ bản từ góc định hướng đến đồ thị, phương trình và mô hình. Chuyên đề Hàm số/Đồ thị tổng quát thuộc CĐ05; giới hạn, đạo hàm, khảo sát tối ưu không nằm trong CĐ06. Các bài căn hàm sin, mô hình tổng hợp là mở rộng tự chọn, không nâng thành Core SGK.
- **Điều kiện:** mọi nghiệm phương trình có k∈ℤ; tan loại cos=0, cot loại sin=0; nghiệm trên khoảng phải lọc đầu mút; người học có thể đi trọn Chuyên đề mà không cần mở SGK. Toàn bộ số liệu ví dụ là ví dụ tự biên soạn.

# Kiến thức

## Vì sao cần lượng giác?

Một vòng quay được mô tả bằng một góc có hướng. Chiếu điểm quay lên hai trục, ta thu được hai hàm số sin và cos; từ hình học đó xuất hiện công thức, sóng tuần hoàn và những phương trình có nhiều họ nghiệm. Không bắt đầu bằng bảng công thức: mỗi mảng dưới đây gắn tình huống, tiền đề, bản chất, ví dụ giải có lý do, tự thử và đường khắc phục.

## TOP06-M01 · Góc lượng giác và radian

**Outcome TOP06-O01.** Góc lượng giác và radian.
**Vì sao cần học?** Một góc quay có thể vượt 360° hay quay ngược; chỉ số độ không cho thấy trực tiếp chiều dài cung.
**Tiền đề được nhắc tại chỗ:** Độ và radian; một vòng tròn chia 360 phần bằng nhau.
**Hình thành bản chất trước quy tắc:** Góc lượng giác lưu cả chiều quay: dương ngược kim đồng hồ, âm thuận kim đồng hồ. Một vòng là 360°=2π rad; hai góc cùng tia cuối chênh 2kπ, nhưng số vòng thực hiện không nhất thiết bằng nhau.
**Ví dụ có suy luận / lý do chọn cách:** Quay −450°: −450×π/180=−5π/2; cùng tia cuối với −π/2 nhưng đã quay hơn một vòng theo chiều âm. Lựa chọn phép đổi đơn vị trước khi xét vị trí giúp không lẫn −5π/2 với +π/2.
**Tự thử — chưa mở đối chiếu:** −150° bằng bao nhiêu radian?
**Đối chiếu (chỉ tự mở sau khi làm):** −5π/6; dấu âm giữ chiều quay.
**D6 — nếu mắc lỗi:** Vẽ chiều quay; nếu làm mất dấu, thử −90° với +90°. Luyện THPT-G11-B01-C01 và THPT-TOP06-P01.

## TOP06-M02 · Đường tròn lượng giác và dấu các giá trị

**Outcome TOP06-O02.** Đường tròn lượng giác và dấu các giá trị.
**Vì sao cần học?** Làm sao biết dấu sin, cos trước khi tính giá trị chính xác?
**Tiền đề được nhắc tại chỗ:** Đường tròn đơn vị, tọa độ (x,y).
**Hình thành bản chất trước quy tắc:** Điểm M ứng với góc α trên đường tròn đơn vị có M=(cosα,sinα). Cos là hoành độ, sin là tung độ, nên dấu đến từ góc phần tư; tanα=sinα/cosα chỉ tồn tại khi cosα≠0, cotα khi sinα≠0.
**Ví dụ có suy luận / lý do chọn cách:** Nếu sinα=4/5 và α ở góc phần tư II, cosα âm. Dùng sin²α+cos²α=1 cho cosα=−3/5; tanα=−4/3. Đặt dấu trước rồi mới lấy căn.
**Tự thử — chưa mở đối chiếu:** Sinα=−3/5, α thuộc góc phần tư IV; cosα bằng bao nhiêu?
**Đối chiếu (chỉ tự mở sau khi làm):** +4/5 vì cos dương ở góc IV.
**D6 — nếu mắc lỗi:** Nếu ra −4/5, xem lại trục hoành phía phải; luyện THPT-G11-B01-C02 và THPT-TOP06-P02.

## TOP06-M03 · Cung tròn, góc cùng tia cuối

**Outcome TOP06-O03.** Cung tròn, góc cùng tia cuối.
**Vì sao cần học?** Đo được quãng đường trên một vòng cung từ góc ở tâm bằng cách nào?
**Tiền đề được nhắc tại chỗ:** Định nghĩa radian và chu vi 2πr.
**Hình thành bản chất trước quy tắc:** Độ dài cung hình học s=r|θ| với θ radian, r>0; độ dời có hướng d=rθ giữ dấu. Góc chênh 2kπ có cùng tia cuối nhưng cung quét có thể khác nhiều vòng.
**Ví dụ có suy luận / lý do chọn cách:** Bánh xe bán kính 7 cm quay −120° tức −2π/3: độ dời cung theo chiều quay là −14π/3 cm, độ dài quãng đường là 14π/3 cm. Trước hết đổi radian để đơn vị đúng.
**Tự thử — chưa mở đối chiếu:** Bán kính 3, quay 3π/2 rad: cung dài bao nhiêu?
**Đối chiếu (chỉ tự mở sau khi làm):** 9π/2; góc đã ở radian.
**D6 — nếu mắc lỗi:** Nếu dùng r×góc độ trực tiếp, đổi 270°=3π/2 rồi tính lại. Luyện THPT-G11-B01-P03 và THPT-TOP06-P03.

## TOP06-M04 · Hệ thức lượng giác và điều kiện tan/cot

**Outcome TOP06-O04.** Hệ thức lượng giác và điều kiện tan/cot.
**Vì sao cần học?** Có thể tìm một giá trị lượng giác từ các giá trị còn lại không?
**Tiền đề được nhắc tại chỗ:** Tam giác vuông; cos²+sin²=1 trên đường tròn đơn vị.
**Hình thành bản chất trước quy tắc:** Hệ thức sin²x+cos²x=1 đúng với mọi x thực; 1+tan²x=1/cos²x chỉ khi cosx≠0; 1+cot²x=1/sin²x chỉ khi sinx≠0. Không được chia cho sin hoặc cos tại nghiệm bằng 0.
**Ví dụ có suy luận / lý do chọn cách:** Nếu sinx=3/5 và x ở góc phần tư I: cosx=4/5; tanx=3/4. Nếu sinx=0 thì cotx không xác định, dù các hệ thức không có dấu chia sau biến đổi.
**Tự thử — chưa mở đối chiếu:** Với x=π/2, tanx tồn tại không?
**Đối chiếu (chỉ tự mở sau khi làm):** Không, cos(π/2)=0.
**D6 — nếu mắc lỗi:** Ghi điều kiện trước khi áp dụng đẳng thức phân thức; luyện THPT-G11-B01-P01 và THPT-TOP06-P04.

## TOP06-M05 · Góc liên quan và đối xứng

**Outcome TOP06-O05.** Góc liên quan và đối xứng.
**Vì sao cần học?** Vì sao hai góc khác nhau có thể có sin bằng nhau nhưng cos trái dấu?
**Tiền đề được nhắc tại chỗ:** Phép đối xứng qua trục Oy trên đường tròn.
**Hình thành bản chất trước quy tắc:** Đối xứng của điểm (cosα,sinα) qua Oy biến α thành π−α; do đó sin(π−α)=sinα, cos(π−α)=−cosα. Với −α: cos chẵn, sin lẻ. Lý do hình học đi trước việc học thuộc dấu.
**Ví dụ có suy luận / lý do chọn cách:** α=π/6; góc 5π/6 đối xứng qua Oy nên sin(5π/6)=1/2, cos(5π/6)=−√3/2. Dùng điểm trên đường tròn thay vì nhớ hai bảng dấu.
**Tự thử — chưa mở đối chiếu:** So sánh sin(−π/3) với sin(π/3).
**Đối chiếu (chỉ tự mở sau khi làm):** sin(−π/3)=−√3/2 do sin là hàm lẻ.
**D6 — nếu mắc lỗi:** Vẽ trục Ox và phản xạ trên đường tròn; luyện THPT-G11-B01-P05 và THPT-TOP06-P05.

## TOP06-M06 · Công thức cộng–trừ

**Outcome TOP06-O06.** Công thức cộng–trừ.
**Vì sao cần học?** Sin(u+v) có bằng sin u+sin v không?
**Tiền đề được nhắc tại chỗ:** Đường tròn đơn vị, tích vô hướng của hai vectơ đơn vị.
**Hình thành bản chất trước quy tắc:** Hiệu hai góc chi phối tích vô hướng: cos(u−v)=cosu cosv+sinu sinv. Thay v→−v suy ra cos(u+v)=cosu cosv−sinu sinv; các công thức sin tương ứng: sin(u±v)=sinu cosv±cosu sinv. Không tách sin một tổng bằng tổng các sin.
**Ví dụ có suy luận / lý do chọn cách:** Cos15°=cos(45°−30°)=√6/4+√2/4. Chọn phép trừ vì 15° không có trong bảng cơ bản nhưng 45°,30° thì có.
**Tự thử — chưa mở đối chiếu:** Tính sin75° từ 45°+30°.
**Đối chiếu (chỉ tự mở sau khi làm):** (√6+√2)/4.
**D6 — nếu mắc lỗi:** Nếu ghi sin45°+sin30°, thử u=v=π/2 để tìm phản ví dụ. Luyện THPT-G11-B02-C01 và THPT-TOP06-P06.

## TOP06-M07 · Góc đôi và tích–tổng

**Outcome TOP06-O07.** Góc đôi và tích–tổng.
**Vì sao cần học?** Một tổ hợp sin2x hoặc sinx cosx có thể biến đổi gọn hơn ra sao?
**Tiền đề được nhắc tại chỗ:** Công thức cộng; phân phối biểu thức.
**Hình thành bản chất trước quy tắc:** Lấy u=v=x trong công thức cộng được sin2x=2sinx cosx và cos2x=cos²x−sin²x. Cộng/trừ các công thức cho u±v tạo biến đổi tích–tổng, tổng–tích. Chọn dạng đơn giản hóa theo mục tiêu, luôn giữ biểu thức xác định.
**Ví dụ có suy luận / lý do chọn cách:** sin3x+sinx=2sin2x cosx: đặt A=3x,B=x rồi dùng sinA+sinB=2sin((A+B)/2)cos((A−B)/2). Cách này phù hợp khi muốn đặt nhân tử hoặc xét nghiệm.
**Tự thử — chưa mở đối chiếu:** Viết 2sinx cosx thành hàm của 2x.
**Đối chiếu (chỉ tự mở sau khi làm):** sin2x.
**D6 — nếu mắc lỗi:** Nếu nhầm hệ số 2, thay x=π/4 để kiểm. Luyện THPT-G11-B02-P04/P05 và THPT-TOP06-P07.

## TOP06-M08 · Miền xác định và tập giá trị của hàm lượng giác

**Outcome TOP06-O08.** Miền xác định và tập giá trị của hàm lượng giác.
**Vì sao cần học?** Vì sao không phải mọi hàm lượng giác đều có miền xác định ℝ?
**Tiền đề được nhắc tại chỗ:** Khái niệm hàm số và mẫu số khác 0.
**Hình thành bản chất trước quy tắc:** Sin, cos xác định trên ℝ, nhận giá trị trong [−1,1]. Tanx không xác định tại x=π/2+kπ; cotx không xác định tại x=kπ. Với biểu thức ghép như √(2sinx−1), thêm điều kiện trong căn ≥0; đây là mở rộng bài toán theo mô hình, không mạo nhận Core của B03.
**Ví dụ có suy luận / lý do chọn cách:** Tìm D của f(x)=√(2sinx−1): cần sinx≥1/2, nên x∈[π/6+2kπ,5π/6+2kπ], k∈ℤ. Chọn hình đường tròn hoặc đồ thị sin để xác định các cung đủ điều kiện.
**Tự thử — chưa mở đối chiếu:** Tập giá trị của y=2cosx−3 là gì?
**Đối chiếu (chỉ tự mở sau khi làm):** [−5,−1] do cosx∈[−1,1].
**D6 — nếu mắc lỗi:** Nếu bỏ mất miền xác định của tan, đặt cosx=0 làm thử phản ví dụ. Luyện THPT-G11-B03-C01 và THPT-TOP06-P08.

## TOP06-M09 · Chu kỳ, chẵn–lẻ và đối xứng

**Outcome TOP06-O09.** Chu kỳ, chẵn–lẻ và đối xứng.
**Vì sao cần học?** Làm thế nào dự đoán khi nào một dạng sóng lặp lại?
**Tiền đề được nhắc tại chỗ:** Hàm số trên miền xác định; giá trị sin,cos trên vòng tròn.
**Hình thành bản chất trước quy tắc:** f có chu kỳ T>0 khi x±T đều thuộc miền nếu x thuộc miền và f(x+T)=f(x) với mọi x. Sin,cos có chu kỳ cơ bản 2π; tan,cot có chu kỳ π. Sin lẻ, cos chẵn; đổi biến và nhân hệ số có thể làm chu kỳ khác. Tránh kết luận chu kỳ chỉ nhờ vài điểm trùng nhau.
**Ví dụ có suy luận / lý do chọn cách:** y=sin(3x) có chu kỳ cơ bản 2π/3 vì tăng x lên 2π/3 làm góc tăng 2π. y=cos2x+sin3x có chu kỳ 2π; hai thành phần có tần số khác nhau và chu kỳ chung phù hợp.
**Tự thử — chưa mở đối chiếu:** Chu kỳ cơ bản của y=cos(4x) là gì?
**Đối chiếu (chỉ tự mở sau khi làm):** π/2.
**D6 — nếu mắc lỗi:** Nếu đo chu kỳ bằng cách nhìn một đỉnh, kiểm đỉnh tiếp theo và điều kiện trên mọi x. Luyện THPT-G11-B03-C03 và THPT-TOP06-P09.

## TOP06-M10 · Đồ thị sin, cos và phép đổi pha

**Outcome TOP06-O10.** Đồ thị sin, cos và phép đổi pha.
**Vì sao cần học?** Đồ thị giúp đọc điều gì ngoài một bảng giá trị?
**Tiền đề được nhắc tại chỗ:** Mỗi điểm đồ thị là (x,f(x)); chuyển dịch ngang/đứng.
**Hình thành bản chất trước quy tắc:** y=A sin(ωx+φ)+d (A,ω≠0) có biên độ |A|, chu kỳ 2π/|ω|, trục giữa y=d và tập giá trị [d−|A|,d+|A|]. Pha dịch ngang −φ/ω; không nhầm chiều dấu. Nếu ω=0, hàm hằng và không có chu kỳ cơ bản.
**Ví dụ có suy luận / lý do chọn cách:** y=−2sin(3x−π/2)+1 có biên độ 2, T=2π/3, trục giữa 1, tập giá trị [−1,3], dịch pha sang phải π/6 trước khi phản xạ Ox/co giãn rồi dời trục. Đổi dấu ngoài và trong hàm có ý nghĩa khác nhau.
**Tự thử — chưa mở đối chiếu:** y=3cos(2x)+4 có giá trị lớn nhất, nhỏ nhất là bao nhiêu?
**Đối chiếu (chỉ tự mở sau khi làm):** 7 và 1.
**D6 — nếu mắc lỗi:** Đánh dấu trục giữa/điểm cực trị; nếu nhầm tịnh tiến ngang, giải 3x−π/2=0. Luyện THPT-G11-B03-P02/P04/P05 và THPT-TOP06-P10.

## TOP06-M11 · Đồ thị tan, cot và tiệm cận đứng

**Outcome TOP06-O11.** Đồ thị tan, cot và tiệm cận đứng.
**Vì sao cần học?** Tại sao đồ thị tan không nối liền qua x=π/2?
**Tiền đề được nhắc tại chỗ:** Tan là sin/cos, cot là cos/sin.
**Hình thành bản chất trước quy tắc:** Tan có miền ℝ trừ π/2+kπ, chu kỳ π và tiệm cận đứng ở điểm loại. Cot có miền ℝ trừ kπ, chu kỳ π. Đồ thị chia nhánh, không được nối đường qua tiệm cận; tính tăng/giảm chỉ xét trên mỗi khoảng liên thông miền.
**Ví dụ có suy luận / lý do chọn cách:** y=tan(2x) không xác định khi 2x=π/2+kπ ⇒ x=π/4+kπ/2; chu kỳ cơ bản π/2. Chọn giải điều kiện mẫu trước khi vẽ nhánh.
**Tự thử — chưa mở đối chiếu:** Tanx xác định tại x=π không?
**Đối chiếu (chỉ tự mở sau khi làm):** Có, tanπ=0; cotπ mới không xác định.
**D6 — nếu mắc lỗi:** Ghi bảng điểm loại trước khi nối hình; luyện THPT-G11-B03-P06/P07 và THPT-TOP06-P11.

## TOP06-M12 · Phương trình sin và cos cơ bản

**Outcome TOP06-O12.** Phương trình sin và cos cơ bản.
**Vì sao cần học?** Giải sinx=a khác giải đa thức chỗ nào?
**Tiền đề được nhắc tại chỗ:** Đường tròn đơn vị, nghiệm cùng vị trí theo chu kỳ.
**Hình thành bản chất trước quy tắc:** Sinx=a có nghiệm thực khi |a|≤1; nếu sinα=a thì x=α+2kπ hoặc x=π−α+2kπ. Cosx=a có x=±arccos(a)+2kπ khi |a|≤1. Trong công thức này arccos(a)∈[0,π], còn α phải là góc đã biết thỏa sinα=a.
**Ví dụ có suy luận / lý do chọn cách:** Sin(2x)=√3/2: 2x=π/3+2kπ hoặc 2π/3+2kπ ⇒ x=π/6+kπ hoặc π/3+kπ, k∈ℤ. Có hai họ vì đường ngang cắt đường tròn tại hai điểm.
**Tự thử — chưa mở đối chiếu:** Giải cosx=0 trên ℝ.
**Đối chiếu (chỉ tự mở sau khi làm):** x=π/2+kπ (k∈ℤ).
**D6 — nếu mắc lỗi:** Nếu chỉ viết một nghiệm, quay thêm chu kỳ; nếu |a|>1 thì vô nghiệm. Luyện THPT-G11-B04-C01/C02 và THPT-TOP06-P12.

## TOP06-M13 · Phương trình tan và cot cơ bản

**Outcome TOP06-O13.** Phương trình tan và cot cơ bản.
**Vì sao cần học?** Tại sao tanx=a chỉ cần một họ nghiệm?
**Tiền đề được nhắc tại chỗ:** Tan xác định khi cosx≠0; tính chu kỳ π.
**Hình thành bản chất trước quy tắc:** Tan là tỉ số với cos không bằng 0; tanx=a ⇔ x=arctan(a)+kπ, k∈ℤ. Cotx=a ⇔ x=arccot(a)+kπ với arccot chọn trong (0,π), k∈ℤ; cách viết khác phải định rõ nhánh arccot. Luôn xét điều kiện ban đầu khi có biểu thức ghép.
**Ví dụ có suy luận / lý do chọn cách:** Tan(x+π/4)=−1 ⇒ x+π/4=−π/4+kπ ⇒ x=−π/2+kπ. Thế lại: góc tan bằng −π/4+kπ, không chạm điểm loại.
**Tự thử — chưa mở đối chiếu:** Giải tan(2x)=0.
**Đối chiếu (chỉ tự mở sau khi làm):** x=kπ/2, k∈ℤ; mọi nghiệm nằm trong miền tan.
**D6 — nếu mắc lỗi:** Không nhân chéo cho cos=0; luyện THPT-G11-B04-C03/C04 và THPT-TOP06-P13.

## TOP06-M14 · Biến đổi phương trình và nghiệm ngoại lai

**Outcome TOP06-O14.** Biến đổi phương trình và nghiệm ngoại lai.
**Vì sao cần học?** Rút gọn có thể vô tình tạo nghiệm mới như thế nào?
**Tiền đề được nhắc tại chỗ:** Hệ thức cơ bản và quy tắc biến đổi tương đương.
**Hình thành bản chất trước quy tắc:** Phân tích thành tích chỉ tương đương nếu không chia cho biểu thức có thể bằng 0. Nếu khử mẫu/biến đổi căn cần giữ điều kiện ban đầu rồi thử lại. Một tích bằng 0 cho hợp các họ nghiệm của từng thừa số; không vứt một nhánh.
**Ví dụ có suy luận / lý do chọn cách:** Sinx(2cosx−1)=0 ⇒ sinx=0 hoặc cosx=1/2, nên x=kπ hoặc x=±π/3+2kπ. Không được chia cả hai vế cho sinx vì mất x=kπ.
**Tự thử — chưa mở đối chiếu:** Giải 2sinx cosx=0.
**Đối chiếu (chỉ tự mở sau khi làm):** x=kπ/2, k∈ℤ; hoặc sinx=0 (kπ) hoặc cosx=0 (π/2+kπ).
**D6 — nếu mắc lỗi:** Nếu đang muốn chia cho sinx, tách trường hợp sinx=0 trước. Luyện THPT-G11-B04-P01/P02/P08 và THPT-TOP06-P14.

## TOP06-M15 · Nghiệm trên khoảng và đếm nghiệm

**Outcome TOP06-O15.** Nghiệm trên khoảng và đếm nghiệm.
**Vì sao cần học?** Một họ nghiệm có vô hạn số nguyên k, nhưng bài toán chỉ chọn khoảng nhất định.
**Tiền đề được nhắc tại chỗ:** Bất đẳng thức, khoảng mở/đóng và hàm lượng giác.
**Hình thành bản chất trước quy tắc:** Giải trên ℝ trước, sau đó lọc k theo khoảng hoặc xét trực tiếp các góc trên đường tròn trong [a,b]. Với [a,b) chỉ lấy a nếu thỏa, loại b; tránh đếm hai góc 0 và 2π là hai nghiệm khác nhau khi khoảng nửa mở.
**Ví dụ có suy luận / lý do chọn cách:** 2sin²x−3sinx+1=0 ⇒ (2sinx−1)(sinx−1)=0. Với [0,2π): x=π/6,5π/6,π/2, tổng 3 nghiệm. Không thêm 2π vì không thuộc khoảng.
**Tự thử — chưa mở đối chiếu:** Giải sinx=0 trên [0,2π).
**Đối chiếu (chỉ tự mở sau khi làm):** x=0,π; loại 2π.
**D6 — nếu mắc lỗi:** Vẽ dãy nghiệm trên trục số và đánh dấu đầu mút; luyện THPT-G11-B04-P06/P07 và THPT-TOP06-P15.

## TOP06-M16 · Mô hình tuần hoàn và điều kiện thực tế

**Outcome TOP06-O16.** Mô hình tuần hoàn và điều kiện thực tế.
**Vì sao cần học?** Sóng, thủy triều và nhiệt độ thay đổi trong thời gian hữu hạn có thể mô tả bằng công thức nào?
**Tiền đề được nhắc tại chỗ:** Đồ thị sin/cos, chu kỳ, đơn vị thời gian.
**Hình thành bản chất trước quy tắc:** Mô hình h(t)=d+Acos(ωt+φ) có điều kiện miền t thực tế, mức nền d, biên độ |A|, chu kỳ 2π/|ω| khi ω≠0. Dữ liệu thực không nhất thiết đúng sinus lý tưởng; phải phân biệt mô hình giả định với kết luận về thế giới.
**Ví dụ có suy luận / lý do chọn cách:** Mực nước giả định h(t)=3+1,2cos(πt/6) (m), 0≤t≤24 h. Chu kỳ 12 h; h(0)=4,2 m; h(6)=1,8 m; lần đầu đạt mức nền h=3 m khi t=3 h. Đây chỉ là mô hình luyện toán, không phải dự báo thật.
**Tự thử — chưa mở đối chiếu:** Trong mô hình đó, h(12) bằng bao nhiêu?
**Đối chiếu (chỉ tự mở sau khi làm):** 4,2 m, vì cos2π=1.
**D6 — nếu mắc lỗi:** Nếu đếm chu kỳ sai, so pha ở t=0 và t=12; nếu viết t<0 ngoài phạm vi thì đọc miền. Luyện THPT-G11-B03-P08, THPT-G11-B04-P09 và THPT-TOP06-P16.

## Hình học trực quan — hướng dẫn đọc

- **SVG 01 — vòng tròn đơn vị:** `prototypes/thpt/visuals/THPT_TOPIC06_UNIT_CIRCLE_QUADRANTS_R01.svg`. Học sinh đọc từ tọa độ M tới cosα/sinα; chú ý điểm phần tư II cho cos âm, sin dương. Không suy ngược dấu từ trị tuyệt đối.
- **SVG 02 — đồ thị sin và chu kỳ:** `prototypes/thpt/visuals/THPT_TOPIC06_SINE_PERIOD_R01.svg`. Theo trục x từ 0 tới 2π: 0→1→0→−1→0 tại các mốc π/2. Một chu kỳ mới quay về toàn bộ hình, không chỉ một điểm.
- **SVG 03 — tiệm cận tan:** `prototypes/thpt/visuals/THPT_TOPIC06_TAN_ASYMPTOTES_R01.svg`. Quan sát đường gạch đứng x=±π/2 là nơi cos=0, **không thuộc đồ thị**; các nhánh không được nối qua đường gạch.

## Mô hình tương tác gợi ý (SPEC_ONLY)

1. **Góc quay ↔ tọa độ ↔ cung có hướng:** kéo một góc với bàn phím/chạm; mô hình hiển thị tia cuối, sin, cos, chiều quay và giá trị cung; giới hạn/đối sánh gần số 0 phải kiểm soát độ chính xác. Chỉ là **đặc tả**, không có runtime, không nhận QA browser.
2. **Dịch pha và lọc nghiệm theo khoảng:** thanh trượt biên độ/pha/chu kỳ, tô giao điểm với mức y=a, đánh dấu đúng miền. Không ghi Mastery hoặc đánh giá độc lập. Cần kiểm trường hợp A=0, ω=0 và endpoints.

# Luyện tập

Mỗi outcome trỏ tới các câu ORIGINAL SGK trong index liên kết, cùng một nguồn answer/rubric được khóa; các câu mới `THPT-TOP06-P01…P16` và Written `THPT-TOP06-W01…W04` nằm duy nhất ở `prototypes/thpt/shared-items/Temp_TOPIC06_TRIGONOMETRY_NEW20_PUBLIC_CANONICAL_R01_20261112.md`. Các câu tự biên soạn là phần luyện tập công khai, không gắn lại SGK Core.

Người học làm bài trên giấy hoặc tương tác luyện tập, tự mở lời giải theo nhu cầu, đối chiếu chỗ sai và trở về mục Kiến thức tương ứng. Hình và ví dụ hỗ trợ riêng cho từng outcome; không cần đi sang đường học SGK.

# Tự kiểm tra

**Tự kiểm tra công khai:** dùng lại 16 `THPT-TOP06-P01…P16`, mỗi outcome một placement, không tạo `item_id` thứ hai. Toàn bộ đề phải được hiển thị và người học bấm **Final Submit** trước khi có đúng/sai, đáp án, gợi ý hoặc lời giải; sự bảo vệ thật sự trên website thuộc RELEASE. Tự kiểm tra này có `ASSESSMENT_MODE=CLIENT_SELF_CHECK_NO_MASTERY`, không phải held-out `TOPIC_READINESS`, không cấp Skill Mastery, không dùng RD1 riêng tư.

Sau Submit: người học tự so lời giải và rubric, xác định outcome mắc lỗi, quay lại mục kiến thức/D6 và làm câu khác. Không suy ra một điểm kiểm tra độc lập từ các câu đã có thể xem trong Practice.

## Phụ lục AUTHORING — không đưa vào giao diện học sinh

PACKET_ID: THPT-TOPIC06-TRIGONOMETRY-FULL-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
CATALOG_TOPIC_ID: CD06
LESSON_IDS: TOP06-M01..TOP06-M16
OUTCOME_IDS: TOP06-O01..TOP06-O16
PUBLIC_ORIGINAL_SGK_IDS: 46 (tham chiếu, xem index riêng)
PUBLIC_NEW_CANONICAL_IDS: 20 (16 Practice, 4 Written)
PUBLIC_SELF_CHECK_REUSE_PLACEMENTS: 16
PRIVATE_RD1_IMPORTED: 0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED (pending exact source QA receipt/handoff)
RELEASE_AUTHORIZATION: NO
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
