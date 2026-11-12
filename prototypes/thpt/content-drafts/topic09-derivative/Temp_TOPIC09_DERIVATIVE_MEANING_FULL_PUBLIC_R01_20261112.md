# CĐ09/22 — Đạo hàm và Ý nghĩa vi phân

**LEARNING_PATH: TOPIC.** Ba trang độc lập **Kiến thức / Luyện tập / Tự kiểm tra**; không tạo trang Core chuyên đề. Dạy từ nhu cầu đo tốc độ tức thời/cát tuyến đến đạo hàm theo định nghĩa, đạo hàm hàm sơ cấp, quy tắc tổng/tích/thương/dây chuyền, ý nghĩa tiếp tuyến/vận tốc/gia tốc/vi phân bậc nhất. Đủ nội dung tự học tại đây, không bắt buộc mở SGK để học lý thuyết.

## Nguồn S1 và giới hạn nội dung

- **SGK Toán 11 Kết nối tri thức Tập 2, Chương IX:** B31 Định nghĩa và ý nghĩa đạo hàm trang in **81–87**; B32 Các quy tắc tính đạo hàm **88–94**; B33 Đạo hàm cấp hai **95–96**; cuối ChIX **97–98**. Hoạt động trải nghiệm từ trang 99 thuộc phạm vi SGK khác, không giả vờ nhập vào Core ChIX.
- **SBT KNTT Toán11 Tập 2:** B31 trang in **54–57**, B32 **58–60**, B33 **61–62**, cuối ChIX **63–65**, lời giải ChIX **111–116**. Các trang đã xác minh trực tiếp trong biên nhận source lịch sử từ SGK/SBT scan gốc; với phần đã xem, **chỉ số trang PDF 1-based = trang in+1**. SGK PDF SHA256 `14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491`, SBT PDF SHA256 `a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189`. Lượt này **không quét lại** bản PDF, không phỏng đoán các trang chưa đối chiếu.
- **SGK G11 ChIX source canonical PUBLIC 71 ID**, đã có historical independent Academic+PED PASS đúng snapshot blob `3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0` và composite source receipt `4280a1741ccde038bbd5ae22af5def0d8683c7e8`. Bảo toàn original snapshot và 31 private RD1 gốc chỉ owner giữ. Các item SGK chỉ INDEX/placement, không clone stem/key/rubric.
- **Phạm vi mở rộng có đánh dấu:** `TOP09-O32` giải thích vi phân tuyến tính `dy=f'(a)dx` và độ tăng bậc nhất; KHÔNG tự gọi đây là SGK B31/B32/B33 Core. Tiệm cận/tối ưu/khảo sát thuộc CĐ10; các giới hạn nền thuộc CĐ08, có nhắc lại tại chỗ khi cần. Các công thức lượng giác dùng x đo radian, mẫu/log/căn kiểm miền.

# Kiến thức

## Vì sao phải học đạo hàm?

Thấy một vật đi được 8 mét trong hai giây chưa cho biết nó đi nhanh thế nào tại đúng giây thứ nhất. Tương tự, một đồ thị có thể nghiêng tại một điểm với độ dốc khác độ biến thiên trên cả đoạn; nhiệt độ có thể đang tăng dù giá trị hiện tại không lớn. Đạo hàm hình thành từ **giới hạn tốc độ biến đổi trung bình** khi khoảng đo co về 0. Bản chất này giải thích lựa chọn công thức, điểm không khả vi, tiếp tuyến, vận tốc và vi phân, thay vì chỉ luyện quy tắc máy móc.

## TOP09-M01 · Tốc độ biến đổi trung bình và đơn vị

**Outcome TOP09-O01:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác tốc độ biến đổi trung bình và đơn vị.
**Vì sao cần học?** Một đại lượng có tăng đều giữa hai lần đo không? Tại sao chỉ biết đầu-cuối chưa biết tốc độ ngay tại một thời điểm?
**Tiền đề tại chỗ:** Độ tăng Δy và khoảng thời gian Δx≠0.
**Hình thành bản chất trước công thức:** Tốc độ biến đổi trung bình trên [a,b] là [f(b)−f(a)]/(b−a), đơn vị 'đầu ra/đầu vào'. Với tọa độ theo thời gian, đại lượng có dấu là vận tốc trung bình; không phải tốc độ tức thời. Giữ rõ Δx và miền đo.
**Ví dụ đầy đủ + lý do chọn phương pháp:** s(t)=2t² mét, trong 1→3 giây: Δs=18−2=16 m, Δt=2 s, trung bình=8 m/s. Chọn hiệu chia khoảng thời gian, không lấy tỷ số s(3)/3.
**Tự thử trước khi mở lời giải:** Nếu f(x)=x² trên [0,2], tốc độ biến đổi trung bình là gì?
**Tự mở đối chiếu sau khi thử:** (4−0)/(2−0)=2 đơn vị y / đơn vị x.
**D6 đường khắc phục:** Nếu quên Δx ở mẫu, luôn viết bảng f(a),f(b),b−a.
**Bài luyện canonical mới:** `THPT-TOP09-P01` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M02 · Cát tuyến, thương sai phân và giới hạn

**Outcome TOP09-O02:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác cát tuyến, thương sai phân và giới hạn.
**Vì sao cần học?** Đường thẳng qua hai điểm tiến gần nhau có thể tiết lộ độ nghiêng của đồ thị tại một điểm?
**Tiền đề tại chỗ:** P(a,f(a)), Q(a+h,f(a+h)), giới hạn h→0 từ hai phía.
**Hình thành bản chất trước công thức:** Cát tuyến PQ có hệ số góc [f(a+h)−f(a)]/h với h≠0. Nếu thương có giới hạn hữu hạn khi h→0 từ cả hai phía thuộc miền, ta có độ dốc tiếp tuyến; không thế h=0 trước khi rút. 'Cát tuyến' là qua hai điểm phân biệt, 'tiếp tuyến' là giới hạn vị trí/hệ số góc.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f(x)=x², a=1: thương [(1+h)²−1]/h=2+h, h≠0; khi h→0 thu 2. Chọn khai triển vì thương ban đầu cho 0/0.
**Tự thử trước khi mở lời giải:** f(x)=x²,a=3: hệ số góc cát tuyến theo h là gì?
**Tự mở đối chiếu sau khi thử:** [(3+h)²−9]/h=6+h, h≠0; giới hạn 6.
**D6 đường khắc phục:** Nếu gọi 0/0 là độ dốc, cần biểu diễn h khác 0 và khử nhân tử.
**Bài luyện canonical mới:** `THPT-TOP09-P02` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M03 · Định nghĩa đạo hàm tại điểm bằng thương sai phân hai phía

**Outcome TOP09-O03:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác định nghĩa đạo hàm tại điểm bằng thương sai phân hai phía.
**Vì sao cần học?** Vì sao một đạo hàm là một giới hạn chứ không chỉ là bảng công thức?
**Tiền đề tại chỗ:** Giới hạn hàm số CĐ08 và f(a), f(a+h) thuộc miền.
**Hình thành bản chất trước công thức:** f'(a)=lim_{h→0}[f(a+h)−f(a)]/h nếu giới hạn hữu hạn hai phía tồn tại. Một điểm bên trong miền có lân cận đủ ở hai phía; nếu chỉ biết một phía, chưa có đạo hàm thông thường. Tính bằng định nghĩa giúp kiểm công thức có áp dụng hay không.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=x³ tại a=2: (2+h)³−8=12h+6h²+h³, chia h→12. Chọn khai triển vì yêu cầu định nghĩa, không dùng ngay quy tắc 3x².
**Tự thử trước khi mở lời giải:** Tính f'(0) theo định nghĩa nếu f(x)=x².
**Tự mở đối chiếu sau khi thử:** [h²−0]/h=h→0, nên f'(0)=0.
**D6 đường khắc phục:** Nếu quên 'hai phía', so giới hạn thương khi h>0 và h<0.
**Bài luyện canonical mới:** `THPT-TOP09-P03` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M04 · Có đạo hàm trên khoảng và miền hợp lệ

**Outcome TOP09-O04:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác có đạo hàm trên khoảng và miền hợp lệ.
**Vì sao cần học?** Một hàm có đạo hàm tại x=2 có nghĩa có đạo hàm tại mọi x?
**Tiền đề tại chỗ:** Phân biệt tại điểm, trên khoảng, một phía ở đầu miền.
**Hình thành bản chất trước công thức:** f có đạo hàm trên (a,b) nếu đạo hàm hữu hạn tại mọi điểm trong khoảng đó. Đạo hàm f' là một hàm mới trên miền các điểm khả vi; nó không bắt buộc có nghĩa tại mọi điểm mà f xác định. Với căn bậc hai chỉ có đạo hàm hữu hạn tại x>0; tại biên x=0 không có đạo hàm hai phía.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f(x)=√x xác định x≥0; với x>0 f'(x)=1/(2√x), suy được bằng nhân liên hợp. Tại x=0, không thể lấy đạo hàm hai phía trên ℝ và thương phải→+∞; không ghi f'(0)=∞ như đạo hàm hữu hạn.
**Tự thử trước khi mở lời giải:** Hàm f(x)=1/x có đạo hàm ở mọi x∈ℝ không?
**Tự mở đối chiếu sau khi thử:** Không; chỉ trên ℝ\{0}, với f'(x)=−1/x².
**D6 đường khắc phục:** Nếu áp công thức ngoài miền, bắt đầu bằng định nghĩa miền xác định.
**Bài luyện canonical mới:** `THPT-TOP09-P04` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M05 · Đạo hàm kéo theo liên tục nhưng chiều đảo sai

**Outcome TOP09-O05:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác đạo hàm kéo theo liên tục nhưng chiều đảo sai.
**Vì sao cần học?** Có thể đồ thị liên tục vẫn có một góc gãy không?
**Tiền đề tại chỗ:** Tiêu chuẩn liên tục tại điểm và giới hạn h→0.
**Hình thành bản chất trước công thức:** Nếu f'(a) hữu hạn tồn tại, f(a+h)−f(a)=h·[(f(a+h)−f(a))/h]→0, nên f liên tục tại a. Chiều ngược sai: |x| liên tục tại0 nhưng thương từ trái −1, phải+1. Không coi mọi đường không đứt đều khả vi.
**Ví dụ đầy đủ + lý do chọn phương pháp:** Xét |x−1| tại1: f liên tục vì |x−1|→0; đạo hàm trái−1, phải+1 nên không khả vi. Chọn xét thương để bác bỏ mệnh đề đảo.
**Tự thử trước khi mở lời giải:** f(x)=|x| có liên tục tại0 không, đạo hàm tại0 không?
**Tự mở đối chiếu sau khi thử:** Liên tục; không có đạo hàm hai phía vì −1 và +1 khác nhau.
**D6 đường khắc phục:** Nếu dùng tính liên tục để suy đạo hàm, đối chiếu phản ví dụ góc nhọn.
**Bài luyện canonical mới:** `THPT-TOP09-P05` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M06 · Góc nhọn, đạo hàm trái và đạo hàm phải

**Outcome TOP09-O06:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác góc nhọn, đạo hàm trái và đạo hàm phải.
**Vì sao cần học?** Một tiếp tuyến duy nhất có độ dốc hữu hạn có hình thành tại điểm gấp khúc?
**Tiền đề tại chỗ:** Hàm trị tuyệt đối và xét dấu h.
**Hình thành bản chất trước công thức:** Để có đạo hàm thông thường tại a, hai giới hạn thương sai phân một phía phải hữu hạn và bằng nhau. Tại góc nhọn |x−a| chúng thường trái dấu. Có thể có đạo hàm một phía nhưng không có đạo hàm hai phía; không gộp hai độ dốc thành 0.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f(x)=|x−3| tại 3: [|h|−0]/h=−1 khi h<0, +1 khi h>0. Chọn xét dấu tuyệt đối trước, nên không có f'(3).
**Tự thử trước khi mở lời giải:** Tại x=0, đạo hàm một phía của |2x| là gì?
**Tự mở đối chiếu sau khi thử:** Trái −2, phải +2, không có đạo hàm hai phía.
**D6 đường khắc phục:** Nếu một bài chỉ cho đồ thị, kiểm bên trái và bên phải tại điểm gãy.
**Bài luyện canonical mới:** `THPT-TOP09-P06` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M07 · Ý nghĩa hình học: f(a) khác f'(a)

**Outcome TOP09-O07:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác ý nghĩa hình học: f(a) khác f'(a).
**Vì sao cần học?** Vì sao biết tọa độ P chưa nói được đường tiếp tuyến nghiêng bao nhiêu?
**Tiền đề tại chỗ:** Định nghĩa hệ số góc đường thẳng và đạo hàm.
**Hình thành bản chất trước công thức:** Đạo hàm f'(a) là hệ số góc của tiếp tuyến nếu tồn tại, còn f(a) là tung độ điểm tiếp xúc. Đây là hai số thường khác nhau, có thể một số 0 còn số kia không. Khi đồ thị tăng tại điểm, tiếp tuyến có độ dốc dương; một độ dốc âm không đồng nghĩa tung độ âm.
**Ví dụ đầy đủ + lý do chọn phương pháp:** y=x²+1 tại x=1: P(1,2) và f'(1)=2. Tiếp tuyến có độ dốc2, tung độ tại điểm2; hai giá trị trùng do bài này ngẫu nhiên, không phải quy tắc. Ở x=0 có f(0)=1 nhưng f'(0)=0.
**Tự thử trước khi mở lời giải:** f(x)=x²+2 tại x=0, độ dốc và tung độ lần lượt bao nhiêu?
**Tự mở đối chiếu sau khi thử:** Độ dốc f'(0)=0; tung độ f(0)=2.
**D6 đường khắc phục:** Nếu nhầm giá trị và độ dốc, ghi riêng P(a,f(a)) và m=f'(a).
**Bài luyện canonical mới:** `THPT-TOP09-P07` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M08 · Phương trình tiếp tuyến tại x=a

**Outcome TOP09-O08:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác phương trình tiếp tuyến tại x=a.
**Vì sao cần học?** Một độ dốc có đủ để viết đường tiếp tuyến không?
**Tiền đề tại chỗ:** Dạng đường thẳng y−y₀=m(x−x₀), giá trị f(a).
**Hình thành bản chất trước công thức:** Tiếp tuyến nếu đạo hàm hữu hạn tại a có phương trình y−f(a)=f'(a)(x−a). Phải lấy đúng cả tọa độ điểm và hệ số góc, không thay f'' hay f(a) làm độ dốc. Nên kiểm đường đã tìm đi qua P.
**Ví dụ đầy đủ + lý do chọn phương pháp:** Với f=x² tại a=2, P(2,4), m=4 ⇒ y−4=4(x−2) ⇒ y=4x−4. Chọn điểm-hệ số góc để tránh sai hằng số.
**Tự thử trước khi mở lời giải:** Tiếp tuyến y=x³ tại x=0 là gì?
**Tự mở đối chiếu sau khi thử:** f(0)=0, f'(0)=0 ⇒ y=0.
**D6 đường khắc phục:** Nếu kết quả không qua (a,f(a)), thế lại x=a để phát hiện.
**Bài luyện canonical mới:** `THPT-TOP09-P08` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M09 · Ý nghĩa vật lý: vận tốc có hướng và tốc độ

**Outcome TOP09-O09:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác ý nghĩa vật lý: vận tốc có hướng và tốc độ.
**Vì sao cần học?** Vật có thể có vận tốc −2 m/s mà tốc độ vẫn dương không?
**Tiền đề tại chỗ:** Tọa độ có dấu và đơn vị s(t) theo mét/giây.
**Hình thành bản chất trước công thức:** Khi s(t) là tọa độ theo thời gian t, v(t)=s'(t) là vận tốc tức thời (có dấu), đơn vị m/s. Tốc độ bằng |v(t)| và không âm. s'(t)<0 chỉ cho biết chiều chuyển động, không tự nói vật chậm dần.
**Ví dụ đầy đủ + lý do chọn phương pháp:** s(t)=t²−6t (m), t≥0: v(t)=2t−6; tại t=2, v=−2 m/s, tốc độ2 m/s. Chọn trị tuyệt đối chỉ sau khi xác định vận tốc có hướng.
**Tự thử trước khi mở lời giải:** Với s(t)=−3t (m), tốc độ là bao nhiêu?
**Tự mở đối chiếu sau khi thử:** v=−3 m/s, tốc độ3 m/s.
**D6 đường khắc phục:** Nếu gọi tốc độ âm, kiểm định nghĩa |v|.
**Bài luyện canonical mới:** `THPT-TOP09-P09` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M10 · Đạo hàm như tốc độ biến thiên và thứ nguyên

**Outcome TOP09-O10:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác đạo hàm như tốc độ biến thiên và thứ nguyên.
**Vì sao cần học?** Đạo hàm của nhiệt độ theo phút có phải nhiệt độ hay tốc độ nhiệt độ đang thay đổi?
**Tiền đề tại chỗ:** Đơn vị, tỷ số Δđầu ra/Δđầu vào.
**Hình thành bản chất trước công thức:** f'(a) có đơn vị [f]/[x]. Nhiệt độ T(t) tính °C, t phút ⇒ T'(t) °C/phút; độ cao s(t) mét và t giây ⇒ s' m/s. Có thể nói đạo hàm dương/âm và mức biến thiên tức thời trong phạm vi mô hình, không dùng giá trị hàm thay tốc độ.
**Ví dụ đầy đủ + lý do chọn phương pháp:** T(t)=15+2t−0,5t² °C; T'(t)=2−t, tại t=1 là +1 °C/phút. Chọn tốc độ biến thiên thay vì tính T(1)=16,5 °C.
**Tự thử trước khi mở lời giải:** Nếu giá P(x)=50+3x đồng, x số sản phẩm, P'(x) có đơn vị gì?
**Tự mở đối chiếu sau khi thử:** 3 đồng/sản phẩm (tỉ lệ biến thiên cận biên của mô hình).
**D6 đường khắc phục:** Nếu viết đơn vị đồng, bạn đang trả giá trị P thay vì đạo hàm.
**Bài luyện canonical mới:** `THPT-TOP09-P10` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M11 · Đạo hàm hằng và lũy thừa

**Outcome TOP09-O11:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác đạo hàm hằng và lũy thừa.
**Vì sao cần học?** Có thể tìm đạo hàm của đa thức nhanh mà vẫn hiểu vì sao hệ số n xuất hiện?
**Tiền đề tại chỗ:** Hằng số và phép khai triển (x+h)^n (n nguyên dương).
**Hình thành bản chất trước công thức:** Từ định nghĩa và khai triển, [ (x+h)^n−x^n]/h có hạng đầu n x^{n−1}, các hạng khác chứa h và về0. Do đó (x^n)'=n x^{n−1} (n nguyên dương), (c)'=0. Không áp quy tắc đa thức cho cơ số a^x mà không phân biệt biến nằm ở đâu.
**Ví dụ đầy đủ + lý do chọn phương pháp:** y=3x⁴−2: đạo hàm 3·4x³=12x³ và đạo hàm hằng−2 bằng0. Chọn tính từng hạng sau khi đã hiểu giới hạn khai triển.
**Tự thử trước khi mở lời giải:** (7x³−4)' bằng bao nhiêu?
**Tự mở đối chiếu sau khi thử:** 21x².
**D6 đường khắc phục:** Nếu ra 7x², bạn bỏ hệ số mũ 3.
**Bài luyện canonical mới:** `THPT-TOP09-P11` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M12 · Căn bậc hai: miền xác định và miền đạo hàm

**Outcome TOP09-O12:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác căn bậc hai: miền xác định và miền đạo hàm.
**Vì sao cần học?** Có giá trị √0=0 nhưng vì sao vẫn không có công thức f'(0) hữu hạn?
**Tiền đề tại chỗ:** Căn không âm, nhân liên hợp và giới hạn một phía.
**Hình thành bản chất trước công thức:** √x được định nghĩa trên x≥0. Trên x>0, thương sai phân nhân liên hợp dẫn (√x)'=1/(2√x). Tại 0, thương phải √h/h=1/√h→+∞, nên không có đạo hàm hữu hạn (và thiếu phía trái). Với √(g(x)), chỉ trên nơi g>0 mới được áp chain trơn theo công thức chuẩn.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=√(x+4): miền x≥−4, f'(x)=1/(2√(x+4)) với x>−4. Chọn xét miền trước khi áp bảng vì tại biên mẫu sẽ bằng0.
**Tự thử trước khi mở lời giải:** f(x)=√(x−1), có đạo hàm hữu hạn tại x=1 không?
**Tự mở đối chiếu sau khi thử:** Không; hàm xác định tại1 nhưng thương phải→+∞.
**D6 đường khắc phục:** Nếu chỉ xét x−1≥0, còn phải kiểm mẫu đạo hàm khác0.
**Bài luyện canonical mới:** `THPT-TOP09-P12` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M13 · Quy tắc tổng, hiệu và hệ số hằng

**Outcome TOP09-O13:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác quy tắc tổng, hiệu và hệ số hằng.
**Vì sao cần học?** Đạo hàm của tổng thay đổi thế nào khi từng thành phần thay đổi?
**Tiền đề tại chỗ:** Tính tuyến tính giới hạn, đạo hàm cơ bản.
**Hình thành bản chất trước công thức:** Nếu u,v khả vi, (u±v)'=u'±v' và (c u)'=c u'. Đạo hàm của hằng số bằng0; không giữ hạng hằng. Lý do là thương sai phân của tổng bằng tổng các thương, có thể lấy giới hạn từng phần khi chúng tồn tại.
**Ví dụ đầy đủ + lý do chọn phương pháp:** y=4x³−3x+6 ⇒ y'=12x²−3; hằng6 biến mất. Chọn phân rã vì phép cộng không lồng hàm hay tạo tích cần công thức khác.
**Tự thử trước khi mở lời giải:** (2x²+5x−8)' bằng bao nhiêu?
**Tự mở đối chiếu sau khi thử:** 4x+5.
**D6 đường khắc phục:** Nếu viết −8 ở đạo hàm, xem lại định nghĩa đạo hàm hằng.
**Bài luyện canonical mới:** `THPT-TOP09-P13` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M14 · Quy tắc tích: hai thành phần cùng biến thiên

**Outcome TOP09-O14:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác quy tắc tích: hai thành phần cùng biến thiên.
**Vì sao cần học?** Tại sao (uv)' không phải chỉ bằng u'v'?
**Tiền đề tại chỗ:** Đạo hàm u,v và phép khai triển Δ(uv).
**Hình thành bản chất trước công thức:** Khi u tăng Δu và v tăng Δv, độ tăng tích =vΔu+uΔv+ΔuΔv. Chia cho Δx và lấy giới hạn khi u,v khả vi, hạng bậc hai không đóng góp: (uv)'=u'v+uv'. Hai dải diện tích trong hình chữ nhật giải thích hai hạng. Chỉ dùng khi cả u,v khả vi tại điểm.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=x(x²+3): f'=1·(x²+3)+x·2x=3x²+3. Chọn quy tắc tích vì hai thừa số biến theo x. Kiểm rút gọn trước cũng được x³+3x→3x²+3.
**Tự thử trước khi mở lời giải:** (x sin x)' là gì (radian)?
**Tự mở đối chiếu sau khi thử:** sin x+x cos x.
**D6 đường khắc phục:** Nếu lấy cos x, bạn đã làm mất biến thiên của thừa số x.
**Bài luyện canonical mới:** `THPT-TOP09-P14` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M15 · Quy tắc thương và điểm cấm của mẫu

**Outcome TOP09-O15:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác quy tắc thương và điểm cấm của mẫu.
**Vì sao cần học?** Tại sao tử và mẫu đều có đạo hàm nhưng hàm thương vẫn có điểm bị loại?
**Tiền đề tại chỗ:** Mẫu số phải khác0, u/v trên miền chung.
**Hình thành bản chất trước công thức:** (u/v)'=(u'v−uv')/v² khi u,v khả vi và v≠0. Dấu trừ bắt nguồn từ đạo hàm 1/v=−v'/v². Mọi kết quả đạo hàm phải ghi miền nguyên gốc; phép rút gọn không tự nối lỗ hổng ở mẫu.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=(x+1)/(x−2) có miền x≠2, f'=[1(x−2)−(x+1)·1]/(x−2)²=−3/(x−2)². Chọn quy tắc thương trước khi đơn giản hóa.
**Tự thử trước khi mở lời giải:** (x/(x+1))' là gì, trên miền nào?
**Tự mở đối chiếu sau khi thử:** 1/(x+1)², với x≠−1.
**D6 đường khắc phục:** Nếu cho x=−1 hợp lệ vì kết quả nhìn đơn giản, quay lại mẫu gốc.
**Bài luyện canonical mới:** `THPT-TOP09-P15` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M16 · Quy tắc dây chuyền cho hàm hợp

**Outcome TOP09-O16:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác quy tắc dây chuyền cho hàm hợp.
**Vì sao cần học?** Vì sao đạo hàm của (2x+1)^5 phải thêm nhân 2?
**Tiền đề tại chỗ:** Phân biệt biến trong u=g(x) và hàm ngoài f(u).
**Hình thành bản chất trước công thức:** Nếu y=F(g(x)) với g khả vi tại x và F khả vi tại g(x), y'=F'(g(x))g'(x). Đạo hàm biến thiên của đầu ra theo đầu vào bên trong rồi nhân tốc độ thay đổi của đầu vào bên trong; không chỉ đạo hàm lớp ngoài.
**Ví dụ đầy đủ + lý do chọn phương pháp:** y=(2x+1)^5: u=2x+1, u'=2, F'(u)=5u⁴ ⇒ y'=10(2x+1)^4. Chọn tách lớp để không quên nhân 2.
**Tự thử trước khi mở lời giải:** (x²+1)^3 có đạo hàm gì?
**Tự mở đối chiếu sau khi thử:** 6x(x²+1)².
**D6 đường khắc phục:** Nếu ra 3(x²+1)², thiếu u'=2x.
**Bài luyện canonical mới:** `THPT-TOP09-P16` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M17 · Sin và cos với biến radian

**Outcome TOP09-O17:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác sin và cos với biến radian.
**Vì sao cần học?** Vì sao trong công thức đạo hàm lượng giác lại phải biết đơn vị góc?
**Tiền đề tại chỗ:** Hàm sin/cos liên tục và giới hạn sin h / h khi h đo radian.
**Hình thành bản chất trước công thức:** Với x đo **radian**, (sin x)'=cos x, (cos x)'=−sin x. Nếu tham số nhập độ thì đạo hàm có thêm π/180, không thể dùng công thức radian trực tiếp. Điều kiện về radian là một phần nội dung toán, không phải chi tiết trình bày.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=3sin x+cos x (radian): f'=3cos x−sin x. Dấu âm của cos xuất hiện từ giới hạn sai phân trig.
**Tự thử trước khi mở lời giải:** (4cos x−sin x)' là gì?
**Tự mở đối chiếu sau khi thử:** −4sin x−cos x.
**D6 đường khắc phục:** Nếu ra +4sin x, kiểm đạo hàm cos âm.
**Bài luyện canonical mới:** `THPT-TOP09-P17` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M18 · Tan và cot: quy tắc và miền cấm

**Outcome TOP09-O18:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác tan và cot: quy tắc và miền cấm.
**Vì sao cần học?** Vì sao tan/cot có chỗ không thể lấy đạo hàm dù sin/cos trơn?
**Tiền đề tại chỗ:** tan x=sin x/cos x, cot x=cos x/sin x.
**Hình thành bản chất trước công thức:** Với x radian, (tan x)'=1/cos²x khi cos x≠0, (cot x)'=−1/sin²x khi sin x≠0. Dấu và điều kiện theo quy tắc thương; khi mẫu bằng0 hàm gốc không xác định, đạo hàm không thể được báo ở đó.
**Ví dụ đầy đủ + lý do chọn phương pháp:** tan x ở x=π/2 không xác định vì cos π/2=0. Ở x=0: (tan x)'=1 và (cot x)' không có do sin0=0. Chọn phân biệt miền cho từng hàm.
**Tự thử trước khi mở lời giải:** (cot x)' và miền là gì?
**Tự mở đối chiếu sau khi thử:** −1/sin²x, x≠kπ với k nguyên.
**D6 đường khắc phục:** Nếu thiếu dấu trừ, dùng quy tắc thương cos/sin để tự tái lập.
**Bài luyện canonical mới:** `THPT-TOP09-P18` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M19 · Lượng giác hàm hợp

**Outcome TOP09-O19:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác lượng giác hàm hợp.
**Vì sao cần học?** Một góc u(x)=3x² thay đổi nhanh hơn x, vậy đạo hàm sin u khác gì?
**Tiền đề tại chỗ:** Dây chuyền và biến góc radian.
**Hình thành bản chất trước công thức:** Nếu u(x) khả vi, [sin u]'=u' cos u, [cos u]'=−u' sin u; tan u, cot u theo công thức cộng u' và điều kiện cos u hoặc sin u khác0. Quy tắc dây chuyền cho cả hàm ngoài và góc trong; không quên miền trig.
**Ví dụ đầy đủ + lý do chọn phương pháp:** y=cos(3x²) ⇒ u=3x², u'=6x, y'=−6x sin(3x²). Chọn xác định hàm ngoài cos và trong đa thức trước.
**Tự thử trước khi mở lời giải:** [sin(5x)]' là gì?
**Tự mở đối chiếu sau khi thử:** 5cos(5x) trong radian.
**D6 đường khắc phục:** Nếu ra cos(5x), đạo hàm trong 5x chưa được nhân.
**Bài luyện canonical mới:** `THPT-TOP09-P19` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M20 · Hàm mũ e^x và a^x

**Outcome TOP09-O20:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác hàm mũ e^x và a^x.
**Vì sao cần học?** Tại sao e^x tự là đạo hàm của nó mà 2^x cần thêm ln2?
**Tiền đề tại chỗ:** Lũy thừa x^n khác hàm mũ a^x, log tự nhiên.
**Hình thành bản chất trước công thức:** Với cơ số a>0 và a≠1, (a^x)'=a^x ln a; riêng e^x vì ln e=1 nên đạo hàm bằng chính e^x. Đây không phải (x^n)'=n x^{n−1}, vì biến đứng ở số mũ. Với cơ số a=1, hàm hằng bằng1 và đạo hàm0, xử lý riêng.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=5^x tại x=0: f'(x)=5^x ln5, f'(0)=ln5. Chọn công thức mũ vì x là số mũ, không phải cơ số.
**Tự thử trước khi mở lời giải:** (e^{3x})' bằng gì?
**Tự mở đối chiếu sau khi thử:** 3e^{3x}.
**D6 đường khắc phục:** Nếu thiếu hệ số3, kết hợp quy tắc mũ với dây chuyền.
**Bài luyện canonical mới:** `THPT-TOP09-P20` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M21 · Logarit tự nhiên và cơ số bất kỳ

**Outcome TOP09-O21:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác logarit tự nhiên và cơ số bất kỳ.
**Vì sao cần học?** Khi lấy đạo hàm ln x, tại sao phải giữ x>0 ngay cả khi 1/x có nghĩa với x<0?
**Tiền đề tại chỗ:** Miền của logarit và đạo hàm 1/x.
**Hình thành bản chất trước công thức:** (ln x)'=1/x với x>0; [log_a x]'=1/(x ln a) với a>0,a≠1 và x>0. Công thức đạo hàm không mở rộng miền logarit gốc sang x<0. Với ln|x| có miền x≠0 và derivative1/x nhưng đó là hàm khác (không tự đồng nhất với ln x).
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=log₂ x, x>0: f'=1/(x ln2). Đơn vị ln2 là hằng dương, không là biến.
**Tự thử trước khi mở lời giải:** [ln(4x)]' trên x>0 là gì?
**Tự mở đối chiếu sau khi thử:** (4)/(4x)=1/x; miền x>0.
**D6 đường khắc phục:** Nếu tính với x<0, ln(4x) không có nghĩa trong số thực.
**Bài luyện canonical mới:** `THPT-TOP09-P21` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M22 · Hàm mũ/log hợp và điều kiện hàm trong

**Outcome TOP09-O22:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác hàm mũ/log hợp và điều kiện hàm trong.
**Vì sao cần học?** Vì sao ln(g(x)) chỉ lấy đạo hàm tại nơi g(x)>0?
**Tiền đề tại chỗ:** Dây chuyền và miền ln, cơ số a>0.
**Hình thành bản chất trước công thức:** [ln g]'=g'/g trên g>0; [a^{g}]'=a^{g} ln a ·g' với a>0,a≠1; [log_a g]'=g'/(g ln a) trên g>0. Cần kiểm g khả vi và miền của hàm ngoài. Không dùng công thức ở g≤0 dù biểu thức g'/g có vẻ tồn tại.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=ln(x²+1) xác định mọi x, f'=2x/(x²+1). Chọn chain vì đối số là x²+1; đối số dương mọi x nên không phải loại điểm.
**Tự thử trước khi mở lời giải:** [ln(3x−2)]' là gì và miền?
**Tự mở đối chiếu sau khi thử:** 3/(3x−2), x>2/3.
**D6 đường khắc phục:** Nếu chỉ ghi mẫu≠0 mà cho x<2/3, điều kiện log phải dương bị vi phạm.
**Bài luyện canonical mới:** `THPT-TOP09-P22` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M23 · Kiểm tra miền trước và sau khi lấy đạo hàm

**Outcome TOP09-O23:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác kiểm tra miền trước và sau khi lấy đạo hàm.
**Vì sao cần học?** Công thức đạo hàm có thể làm mình 'quên' một điểm hàm gốc không xác định không?
**Tiền đề tại chỗ:** Điều kiện căn, mẫu, log và mẫu trig.
**Hình thành bản chất trước công thức:** Bước 1 giải miền xác định của biểu thức gốc. Bước 2 chọn công thức đạo hàm trên các khoảng nội điểm miền có thể lấy đạo hàm. Bước 3 so miền đạo hàm và miền gốc, đặc biệt đầu mút căn và điểm loại mẫu. Một biểu thức đại số sau rút không được tự dùng ở điểm gốc cấm.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=√(x−3)/(x−4) có miền x≥3, x≠4. Công thức derivative theo tích/thương chỉ áp ở x>3, x≠4. Tại x=3 hàm có giá trị0 nhưng không có đạo hàm hữu hạn hai phía.
**Tự thử trước khi mở lời giải:** [ln x/(x−2)] xác định ở những x nào?
**Tự mở đối chiếu sau khi thử:** x>0 và x≠2.
**D6 đường khắc phục:** Nếu chỉ đặt x≠2, quên điều kiện ln x và đạo hàm được ở x≤0 sai.
**Bài luyện canonical mới:** `THPT-TOP09-P23` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M24 · Chọn thứ tự quy tắc theo cấu trúc hàm

**Outcome TOP09-O24:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác chọn thứ tự quy tắc theo cấu trúc hàm.
**Vì sao cần học?** Một biểu thức có tích và hàm hợp nên khai triển hay lấy đạo hàm trực tiếp?
**Tiền đề tại chỗ:** Tích, hợp, tổng, thương.
**Hình thành bản chất trước công thức:** Nhìn cấu trúc ngoài cùng của biểu thức trước: tổng thì tách; tích thì 2 hạng; thương thì dấu trừ/mẫu bình phương; hàm hợp thì đạo hàm ngoài nhân đạo hàm trong; thường phải kết hợp nhiều quy tắc theo thứ tự. Không có 'đạo hàm của tích = tích đạo hàm'.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=x e^{2x}: ngoài cùng tích, f'=e^{2x}+x·2e^{2x}=e^{2x}(1+2x). Chọn tích trước, sau đó chain cho thừa số mũ.
**Tự thử trước khi mở lời giải:** [(x²+1)sin x]' là gì?
**Tự mở đối chiếu sau khi thử:** 2x sin x+(x²+1)cos x.
**D6 đường khắc phục:** Nếu thử nhân hai đạo hàm, so lại với ví dụ f=x·x=x² cho thấy lỗi.
**Bài luyện canonical mới:** `THPT-TOP09-P24` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M25 · Ứng dụng đạo hàm vào vận tốc theo thời gian

**Outcome TOP09-O25:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác ứng dụng đạo hàm vào vận tốc theo thời gian.
**Vì sao cần học?** Từ s(t) làm sao biết chiều chuyển động tại thời điểm t?
**Tiền đề tại chỗ:** Miền thời gian t≥0, quy tắc đạo hàm và dấu.
**Hình thành bản chất trước công thức:** Vận tốc có hướng v(t)=s'(t), speed=|v(t)|. Dùng đạo hàm trong miền mô hình, không kéo mô hình toán ra thời gian âm nếu không được định nghĩa. v=0 là đứng yên tức thời nhưng chưa tự nói dừng mãi, v đổi dấu thì có đổi chiều.
**Ví dụ đầy đủ + lý do chọn phương pháp:** s(t)=t²−4t, t≥0: v=2t−4; t=1 vận tốc−2 m/s, t=3 +2 m/s, chỉ hướng chuyển động ngược nhau. Chọn dấu của v thay vì dấu của tọa độ s.
**Tự thử trước khi mở lời giải:** Nếu s(t)=t³−3t, v(1) bằng?
**Tự mở đối chiếu sau khi thử:** v=3t²−3, v(1)=0 m/s.
**D6 đường khắc phục:** Nếu dùng s(1)=−2 thay v(1), phân biệt vị trí với đạo hàm.
**Bài luyện canonical mới:** `THPT-TOP09-P25` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M26 · Đạo hàm cấp hai là đạo hàm của f'

**Outcome TOP09-O26:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác đạo hàm cấp hai là đạo hàm của f'.
**Vì sao cần học?** Một tốc độ biến đổi có thể chính nó biến thiên không?
**Tiền đề tại chỗ:** f' tồn tại trên khoảng và có thể tiếp tục lấy đạo hàm.
**Hình thành bản chất trước công thức:** Nếu f' khả vi, f''=(f')'. Đây là phép lấy đạo hàm **hai lần**, không phải bình phương (f')². Nếu f' chỉ tồn tại tại một điểm nhưng không tồn tại trong lân cận, cần xem định nghĩa f'' cẩn thận. f'' có thể là 0 với hàm bậc nhất.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=x³: f'=3x², f''=6x. Chọn lấy đạo hàm lại vì ta muốn tốc độ biến thiên của độ dốc.
**Tự thử trước khi mở lời giải:** f=x²+3x thì f'' bằng?
**Tự mở đối chiếu sau khi thử:** f'=2x+3, f''=2.
**D6 đường khắc phục:** Nếu ra (2x+3)², bạn đã bình phương f'.
**Bài luyện canonical mới:** `THPT-TOP09-P26` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M27 · Đạo hàm cấp hai của đa thức

**Outcome TOP09-O27:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác đạo hàm cấp hai của đa thức.
**Vì sao cần học?** Vì sao bậc của đa thức giảm sau mỗi lượt đạo hàm?
**Tiền đề tại chỗ:** (x^n)'=n x^{n−1} và đạo hàm tổng.
**Hình thành bản chất trước công thức:** Lấy đạo hàm bậc nhất từng hạng rồi áp lần thứ hai; với đa thức n≥2, (x^n)''=n(n−1)x^{n−2}. Hằng và hạng tuyến tính có đạo hàm cấp hai bằng0. Kiểm cả kết quả f' lẫn f'' thay vì nhảy thẳng dễ thiếu hệ số.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=3x⁴−2x²+1: f'=12x³−4x, f''=36x²−4. Chọn hai bước để không bỏ hệ số.
**Tự thử trước khi mở lời giải:** f=x⁵: f''=?
**Tự mở đối chiếu sau khi thử:** 20x³.
**D6 đường khắc phục:** Nếu ra 5x³, thiếu nhân n−1.
**Bài luyện canonical mới:** `THPT-TOP09-P27` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M28 · Đạo hàm cấp hai hàm mũ và lượng giác

**Outcome TOP09-O28:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác đạo hàm cấp hai hàm mũ và lượng giác.
**Vì sao cần học?** Tại sao đạo hàm lần hai của sin(2x) lại xuất hiện bình phương hệ số 2?
**Tiền đề tại chỗ:** Chain rule và sin/cos radian, hàm mũ.
**Hình thành bản chất trước công thức:** Nếu f=sin(kx) thì f'=k cos(kx), f''=−k² sin(kx); nếu f=e^{kx}, f'=k e^{kx}, f''=k² e^{kx}. Hệ số k nhân mỗi lần do dây chuyền, không phải do bình phương f'. Giữ đúng dấu đạo hàm cos.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=cos(3x): f'=−3sin(3x), f''=−9cos(3x). Chọn đạo hàm hai lần với chain ở cả hai.
**Tự thử trước khi mở lời giải:** f=e^{2x}, f'' là gì?
**Tự mở đối chiếu sau khi thử:** 4e^{2x}.
**D6 đường khắc phục:** Nếu ra 2e^{2x}, bạn chỉ lấy đạo hàm một lần.
**Bài luyện canonical mới:** `THPT-TOP09-P28` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M29 · Gia tốc là đạo hàm vận tốc

**Outcome TOP09-O29:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác gia tốc là đạo hàm vận tốc.
**Vì sao cần học?** Vật có thể đang chuyển động nhưng gia tốc bằng 0 đúng lúc đó không?
**Tiền đề tại chỗ:** Vận tốc v=s' và đơn vị m/s, thời gian s.
**Hình thành bản chất trước công thức:** Từ tọa độ s(t), v(t)=s'(t), a(t)=v'(t)=s''(t). Đơn vị a là m/s²; dấu của a cho biết **vận tốc có hướng** đang tăng hay giảm, không phải trực tiếp tốc độ |v|. Muốn nói nhanh/chậm cần kết hợp dấu v và a.
**Ví dụ đầy đủ + lý do chọn phương pháp:** s(t)=t³−3t²+2t: v=3t²−6t+2, a=6t−6; tại t=1, a=0 nhưng v=−1 m/s. Chọn lấy đạo hàm lần hai thay vì kết luận từ s(t).
**Tự thử trước khi mở lời giải:** s(t)=5t² (m), a(t) bằng?
**Tự mở đối chiếu sau khi thử:** v=10t m/s, a=10 m/s².
**D6 đường khắc phục:** Nếu nhầm đơn vị m/s, đó là vận tốc chứ không phải gia tốc.
**Bài luyện canonical mới:** `THPT-TOP09-P29` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M30 · Dấu của vận tốc và gia tốc khi xét tốc độ

**Outcome TOP09-O30:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác dấu của vận tốc và gia tốc khi xét tốc độ.
**Vì sao cần học?** Gia tốc âm có nhất thiết khiến vật chậm đi?
**Tiền đề tại chỗ:** Tốc độ |v| và dấu của hai hàm v,a.
**Hình thành bản chất trước công thức:** Khi v≠0, đạo hàm tốc độ |v| bằng sign(v)·a: v,a cùng dấu → tốc độ tăng; trái dấu → giảm. Nếu v=0 phải xét riêng; a âm chỉ nói v có hướng đang giảm. Đây là ý nghĩa cơ học, không phải bài tối ưu CĐ10.
**Ví dụ đầy đủ + lý do chọn phương pháp:** s(t)=−t², t>0: v=−2t<0, a=−2<0. Vì cùng dấu, |v|=2t đang tăng dù gia tốc âm. Chọn xét tích v·a để không suy từ dấu gia tốc riêng.
**Tự thử trước khi mở lời giải:** Nếu v=−3 m/s và a=−2 m/s², tốc độ đang tăng hay giảm?
**Tự mở đối chiếu sau khi thử:** Đang tăng tại thời điểm xét (v,a cùng dấu).
**D6 đường khắc phục:** Nếu viết gia tốc âm = giảm tốc độ, hãy thử v âm xem điều gì xảy ra với |v|.
**Bài luyện canonical mới:** `THPT-TOP09-P30` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M31 · Tích hợp quy tắc, tiếp tuyến và gia tốc

**Outcome TOP09-O31:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác tích hợp quy tắc, tiếp tuyến và gia tốc.
**Vì sao cần học?** Một đề có f, f', f'' yêu cầu những thông tin khác nhau như thế nào?
**Tiền đề tại chỗ:** Tích, chain, giá trị tại điểm, phương trình tiếp tuyến.
**Hình thành bản chất trước công thức:** Đối chiếu yêu cầu: f(a) là tung độ, f'(a) là độ dốc/tốc độ thay đổi, f''(a) là tốc độ thay đổi của độ dốc. Tính đạo hàm đúng với miền rồi dùng f'(a) chứ không dùng f''(a) để lập tiếp tuyến. Đây là bước tổng hợp, không chuyển sang khảo sát cực trị CĐ10.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=x e^x: f'=e^x(1+x), f''=e^x(2+x); tại x=0 f=0, f'=1, f''=2, tiếp tuyến y=x. Chọn khai triển từng bước và kiểm qua (0,0).
**Tự thử trước khi mở lời giải:** f=x²+1 tại x=0, tiếp tuyến y=?
**Tự mở đối chiếu sau khi thử:** f(0)=1, f'(0)=0 ⇒ y=1; f''=2 không phải độ dốc.
**D6 đường khắc phục:** Nếu đặt f'' vào phương trình tiếp tuyến, quay lại ý nghĩa hình học O07–O08.
**Bài luyện canonical mới:** `THPT-TOP09-P31` (PUBLIC, sau khi tự làm mới mở đáp án).

## TOP09-M32 · Vi phân tuyến tính và xấp xỉ bậc nhất (TOPIC mở rộng)

**Outcome TOP09-O32:** Học sinh tự giải thích, xác định điều kiện, lựa chọn phương pháp và thực hiện chính xác vi phân tuyến tính và xấp xỉ bậc nhất (topic mở rộng).
**Vì sao cần học?** Khi đầu vào đổi rất nhỏ, có cần tính lại toàn bộ giá trị hàm mới để dự đoán đầu ra không?
**Tiền đề tại chỗ:** Giới hạn đạo hàm f'(a), ký hiệu Δx, đại số bình phương.
**Hình thành bản chất trước công thức:** Nếu f khả vi tại a, f(a+Δx)−f(a)=f'(a)Δx+o(Δx) khi Δx→0. Phần tuyến tính dy=f'(a)dx với dx=Δx gọi là **vi phân**; với bước đủ nhỏ, Δy≈dy, KHÔNG luôn bằng nhau. Vi phân là công cụ xấp xỉ cục bộ, không nên gọi là toàn bộ 'độ tăng'. Đây là **mở rộng Topic CĐ09**, không gán là định nghĩa/bài SGK ChIX Core.
**Ví dụ đầy đủ + lý do chọn phương pháp:** f=x²,a=3,dx=0,02: f'(3)=6 nên dy=0,12; Δy=(3,02)²−9=0,1204, sai lệch0,0004=(dx)². Chọn vi phân để ước lượng nhanh và định lượng phần dư, không hứa chính xác cho bước lớn.
**Tự thử trước khi mở lời giải:** f=x²,a=1,dx=0,1: dy và Δy lần lượt bằng?
**Tự mở đối chiếu sau khi thử:** dy=2·0,1=0,2; Δy=1,1²−1=0,21; sai lệch0,01.
**D6 đường khắc phục:** Nếu nói dy=Δy chính xác, khai triển bình phương để thấy thêm dx².
**Bài luyện canonical mới:** `THPT-TOP09-P32` (PUBLIC, sau khi tự làm mới mở đáp án).

## D5 — Hướng dẫn đọc hình và tính toán

- **SVG01** `prototypes/thpt/visuals/THPT_TOPIC09_SECANT_TANGENT_R01.svg`: đồ thị y=x², P(1,1), Q(1+h,(1+h)²) với h=1 (hoặc nhỏ dần); hệ số góc cát tuyến 2+h, giới hạn 2. Đường tiếp tuyến qua P có y=2x−1; phân biệt h≠0 khi tính cát tuyến và h→0 khi lấy giới hạn.
- **SVG02** `prototypes/thpt/visuals/THPT_TOPIC09_PRODUCT_RULE_AREA_R01.svg`: một hình chữ nhật có hai cạnh u,v đều tăng; hình tăng thêm gồm vΔu và uΔv, cộng góc ΔuΔv. Sau chia Δx và lấy giới hạn khi u,v khả vi, góc ΔuΔv/Δx→0, vì vậy có hai hạng u'v và uv'.
- **SVG03** `prototypes/thpt/visuals/THPT_TOPIC09_VELOCITY_ACCELERATION_R01.svg`: theo t=0…4 với s=t³−6t²+9t, v(t)=3(t−1)(t−3), a(t)=6(t−2); đánh dấu t=1,2,3, bảng dấu theo các khoảng và sự khác biệt giữa dấu a với tăng/giảm tốc độ.
- **SVG04** `prototypes/thpt/visuals/THPT_TOPIC09_LINEAR_DIFFERENTIAL_R01.svg`: tại a=2 với f=x², Δx=0,1, tuyến tính dự đoán dy=0,4 trong khi thực Δy=0,41, sai số0,01. Hai độ tăng không đồng nhất; xấp xỉ chỉ là cục bộ khi bước nhỏ, phần mở rộng Topic.

## Đặc tả mô hình tương tác (SPEC_ONLY, chưa có runtime)

1. **Cát tuyến tiến tới tiếp tuyến:** điều chỉnh h>0 rồi h<0 trong khoảng không chạm 0, hiển thị P,Q, thương sai phân và m=f'(a) khi có đạo hàm hai phía. Với |x| tại0 phải cảnh báo trái/phải không bằng nhau. Đây là đặc tả, không phải widget đã chạy trên website.
2. **Quy tắc tích qua diện tích:** chọn u,v có giá trị dương, Δu,Δv để nhìn hai dải và góc nhỏ; số hạng góc sau chia Δx tiến0 trong giả thiết khả vi. Với các giá trị âm, minh họa hình học diện tích chỉ là mô hình trực quan; công thức đạo hàm vẫn đúng đại số khi u,v khả vi.
3. **Chuyển động:** hiện tọa độ, v=s', a=s'', tốc độ |v| và dấu v·a theo t; kiểm tại v=0 và a=0 không gán kết luận tăng/giảm một cách máy móc. SPEC_ONLY, chưa kiểm Safari.

# Luyện tập

**Một thư viện canonical mới duy nhất:** `prototypes/thpt/shared-items/Temp_TOPIC09_DERIVATIVE_NEW36_PUBLIC_CANONICAL_R01_20261112.md` chứa 32 Practice P01–P32 và 5 Written W01–W05 (mỗi rubric 7 điểm). **71 PUBLIC SGK original references** ở `prototypes/thpt/shared-items/Temp_TOPIC09_DERIVATIVE_ORIGINAL71_SGK_CANONICAL_INDEX_R01_20261112.md`, không clone đề, lời giải hay rubric. Có cả chứng minh từ định nghĩa, góc gãy, miền của căn/log/tan/cot, chain và hỗn hợp, vận tốc/gia tốc, vi phân xấp xỉ; có câu xử lý điều kiện bên cạnh bài tính.

| outcome | mạch kiến thức | item Practice | Written có rubric |
|---|---|---|---|
| TOP09-O01 | Tốc độ biến đổi trung bình và đơn vị | THPT-TOP09-P01 | — |
| TOP09-O02 | Cát tuyến, thương sai phân và giới hạn | THPT-TOP09-P02 | — |
| TOP09-O03 | Định nghĩa đạo hàm tại điểm bằng thương sai phân hai phía | THPT-TOP09-P03 | — |
| TOP09-O04 | Có đạo hàm trên khoảng và miền hợp lệ | THPT-TOP09-P04 | — |
| TOP09-O05 | Đạo hàm kéo theo liên tục nhưng chiều đảo sai | THPT-TOP09-P05 | — |
| TOP09-O06 | Góc nhọn, đạo hàm trái và đạo hàm phải | THPT-TOP09-P06 | THPT-TOP09-W01 |
| TOP09-O07 | Ý nghĩa hình học: f(a) khác f'(a) | THPT-TOP09-P07 | — |
| TOP09-O08 | Phương trình tiếp tuyến tại x=a | THPT-TOP09-P08 | — |
| TOP09-O09 | Ý nghĩa vật lý: vận tốc có hướng và tốc độ | THPT-TOP09-P09 | THPT-TOP09-W02 |
| TOP09-O10 | Đạo hàm như tốc độ biến thiên và thứ nguyên | THPT-TOP09-P10 | — |
| TOP09-O11 | Đạo hàm hằng và lũy thừa | THPT-TOP09-P11 | — |
| TOP09-O12 | Căn bậc hai: miền xác định và miền đạo hàm | THPT-TOP09-P12 | — |
| TOP09-O13 | Quy tắc tổng, hiệu và hệ số hằng | THPT-TOP09-P13 | — |
| TOP09-O14 | Quy tắc tích: hai thành phần cùng biến thiên | THPT-TOP09-P14 | — |
| TOP09-O15 | Quy tắc thương và điểm cấm của mẫu | THPT-TOP09-P15 | THPT-TOP09-W03 |
| TOP09-O16 | Quy tắc dây chuyền cho hàm hợp | THPT-TOP09-P16 | — |
| TOP09-O17 | Sin và cos với biến radian | THPT-TOP09-P17 | — |
| TOP09-O18 | Tan và cot: quy tắc và miền cấm | THPT-TOP09-P18 | — |
| TOP09-O19 | Lượng giác hàm hợp | THPT-TOP09-P19 | — |
| TOP09-O20 | Hàm mũ e^x và a^x | THPT-TOP09-P20 | — |
| TOP09-O21 | Logarit tự nhiên và cơ số bất kỳ | THPT-TOP09-P21 | — |
| TOP09-O22 | Hàm mũ/log hợp và điều kiện hàm trong | THPT-TOP09-P22 | THPT-TOP09-W04 |
| TOP09-O23 | Kiểm tra miền trước và sau khi lấy đạo hàm | THPT-TOP09-P23 | — |
| TOP09-O24 | Chọn thứ tự quy tắc theo cấu trúc hàm | THPT-TOP09-P24 | — |
| TOP09-O25 | Ứng dụng đạo hàm vào vận tốc theo thời gian | THPT-TOP09-P25 | — |
| TOP09-O26 | Đạo hàm cấp hai là đạo hàm của f' | THPT-TOP09-P26 | — |
| TOP09-O27 | Đạo hàm cấp hai của đa thức | THPT-TOP09-P27 | — |
| TOP09-O28 | Đạo hàm cấp hai hàm mũ và lượng giác | THPT-TOP09-P28 | — |
| TOP09-O29 | Gia tốc là đạo hàm vận tốc | THPT-TOP09-P29 | — |
| TOP09-O30 | Dấu của vận tốc và gia tốc khi xét tốc độ | THPT-TOP09-P30 | THPT-TOP09-W05 |
| TOP09-O31 | Tích hợp quy tắc, tiếp tuyến và gia tốc | THPT-TOP09-P31 | — |
| TOP09-O32 | Vi phân tuyến tính và xấp xỉ bậc nhất (TOPIC mở rộng) | THPT-TOP09-P32 | — |

**Lộ trình luyện:** trước hết tự giải Tự thử → câu P cùng outcome → tự mở lời giải → nếu sai, đọc D6 và quay lại ví dụ → sau đó dùng Written/Anchor tổng hợp. Bài luyện PUBLIC có thể xem đối chiếu tùy ý nhưng không ghi Mastery.

# Tự kiểm tra

**PUBLIC Self Check 32 placements:** tham chiếu lại đúng 32 câu P01–P32 của thư viện luyện tập, **không tạo thêm item_id**; đây là bộ tự đối chiếu formative, dùng `CLIENT_SELF_CHECK_NO_MASTERY`, **không phải TOPIC_READINESS độc lập** vì câu/đáp án đã có thể xem. Không nhập bất kỳ câu RD1 private SGK hay Topic lên GitHub.

**Hợp đồng hiển thị thuộc RELEASE:** trước **Final Submit**, không hint, AI Tutor, đúng/sai, đáp án, lời giải hoặc rubric đáp án; sau Submit có thể cho tự đối chiếu và đường D6. Không ghi Skill Mastery hay báo đỗ Official Readiness từ kết quả public replay. Bản Markdown AUTHORING chưa thực hiện kiểm thử browser; không tự tuyên bố runtime an toàn.

## Phụ lục AUTHORING (ẩn khỏi giao diện học sinh)

PACKET_ID: THPT-TOPIC09-DERIVATIVE-MEANING-FULL-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
LEARNING_PATH: TOPIC
LESSON_IDS: TOP09-M01..TOP09-M32
OUTCOME_IDS: TOP09-O01..TOP09-O32
SGK_ORIGINAL_PUBLIC_CANONICAL_COUNT: 71
SGK_ORIGINAL_OUTCOME_COUNT: 31
NEW_TOPIC_PRACTICE_COUNT: 32
NEW_TOPIC_WRITTEN_COUNT: 5
PUBLIC_NEW_UNIQUE_COUNT: 37
PUBLIC_CANONICAL_TOTAL_UNIQUE: 108
PUBLIC_SELF_CHECK_REUSE_COUNT: 32
PRIVATE_RD1_IMPORTED_COUNT: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_READINESS: NOT_CLAIMED
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
ORIGINAL71_INDEX_BLOB: 3c025ce2dfb8e16743873ac2b3f35bfb37c27ef8
NEW37_BANK_BLOB: 32f0bac609e388e5fe4fd26eea383d63d62bb81f

### Reference-only original 71 SGK item IDs
- THPT-G11-CHIX-B31-C01
- THPT-G11-CHIX-B31-P01
- THPT-G11-CHIX-B31-C02
- THPT-G11-CHIX-B31-P02
- THPT-G11-CHIX-B31-C03
- THPT-G11-CHIX-B31-P03
- THPT-G11-CHIX-B31-C04
- THPT-G11-CHIX-B31-P04
- THPT-G11-CHIX-B31-C05
- THPT-G11-CHIX-B31-P05
- THPT-G11-CHIX-B31-C06
- THPT-G11-CHIX-B31-P06
- THPT-G11-CHIX-B31-C07
- THPT-G11-CHIX-B31-P07
- THPT-G11-CHIX-B31-C08
- THPT-G11-CHIX-B31-P08
- THPT-G11-CHIX-B31-C09
- THPT-G11-CHIX-B31-P09
- THPT-G11-CHIX-B31-C10
- THPT-G11-CHIX-B31-P10
- THPT-G11-CHIX-B32-C01
- THPT-G11-CHIX-B32-P01
- THPT-G11-CHIX-B32-C02
- THPT-G11-CHIX-B32-P02
- THPT-G11-CHIX-B32-C03
- THPT-G11-CHIX-B32-P03
- THPT-G11-CHIX-B32-C04
- THPT-G11-CHIX-B32-P04
- THPT-G11-CHIX-B32-C05
- THPT-G11-CHIX-B32-P05
- THPT-G11-CHIX-B32-C06
- THPT-G11-CHIX-B32-P06
- THPT-G11-CHIX-B32-C07
- THPT-G11-CHIX-B32-P07
- THPT-G11-CHIX-B32-C08
- THPT-G11-CHIX-B32-P08
- THPT-G11-CHIX-B32-C09
- THPT-G11-CHIX-B32-P09
- THPT-G11-CHIX-B32-C10
- THPT-G11-CHIX-B32-P10
- THPT-G11-CHIX-B32-C11
- THPT-G11-CHIX-B32-P11
- THPT-G11-CHIX-B32-C12
- THPT-G11-CHIX-B32-P12
- THPT-G11-CHIX-B32-C13
- THPT-G11-CHIX-B32-P13
- THPT-G11-CHIX-B32-C14
- THPT-G11-CHIX-B32-P14
- THPT-G11-CHIX-B32-C15
- THPT-G11-CHIX-B32-P15
- THPT-G11-CHIX-B33-C01
- THPT-G11-CHIX-B33-P01
- THPT-G11-CHIX-B33-C02
- THPT-G11-CHIX-B33-P02
- THPT-G11-CHIX-B33-C03
- THPT-G11-CHIX-B33-P03
- THPT-G11-CHIX-B33-C04
- THPT-G11-CHIX-B33-P04
- THPT-G11-CHIX-B33-C05
- THPT-G11-CHIX-B33-P05
- THPT-G11-CHIX-CHIX-C01
- THPT-G11-CHIX-CHIX-P01
- THPT-G11-CHIX-B31-W01
- THPT-G11-CHIX-B31-W02
- THPT-G11-CHIX-B31-W03
- THPT-G11-CHIX-B32-W01
- THPT-G11-CHIX-B32-W02
- THPT-G11-CHIX-B32-W03
- THPT-G11-CHIX-B33-W01
- THPT-G11-CHIX-B33-W02
- THPT-G11-CHIX-B33-W03

### New 37 canonical Topic item IDs
- THPT-TOP09-P01
- THPT-TOP09-P02
- THPT-TOP09-P03
- THPT-TOP09-P04
- THPT-TOP09-P05
- THPT-TOP09-P06
- THPT-TOP09-P07
- THPT-TOP09-P08
- THPT-TOP09-P09
- THPT-TOP09-P10
- THPT-TOP09-P11
- THPT-TOP09-P12
- THPT-TOP09-P13
- THPT-TOP09-P14
- THPT-TOP09-P15
- THPT-TOP09-P16
- THPT-TOP09-P17
- THPT-TOP09-P18
- THPT-TOP09-P19
- THPT-TOP09-P20
- THPT-TOP09-P21
- THPT-TOP09-P22
- THPT-TOP09-P23
- THPT-TOP09-P24
- THPT-TOP09-P25
- THPT-TOP09-P26
- THPT-TOP09-P27
- THPT-TOP09-P28
- THPT-TOP09-P29
- THPT-TOP09-P30
- THPT-TOP09-P31
- THPT-TOP09-W01
- THPT-TOP09-W02
- THPT-TOP09-W03
- THPT-TOP09-W04
- THPT-TOP09-W05
- THPT-TOP09-P32

END_AUTHOR_SOURCE: SOURCE_LOCKED_R01
