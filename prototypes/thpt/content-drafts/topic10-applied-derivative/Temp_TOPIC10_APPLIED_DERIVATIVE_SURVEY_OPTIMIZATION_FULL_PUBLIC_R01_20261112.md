# CĐ10/22 — Ứng dụng đạo hàm: Khảo sát hàm số và Bài toán tối ưu hóa

**TOPIC independent learning path**: three learner pages exactly **Kiến thức / Luyện tập / Tự kiểm tra**, no Topic Core page. Complete concept-first instruction by all 36 outcomes; prior SGK source only for S1/Q01 and canonical references, not mandatory external learner knowledge. TOP10-O01…O36 map to exactly 36 historical SGK G12 ChI outcomes; each has its own NEW canonical Practice P01…P36 and targeted repair route.

## S1 primary provenance and exact boundaries

- **Toán 12 KNTT SGK Tập Một Chương I:** B01 Tính đơn điệu và cực trị p5–14 (PDF1 7–16), B02 Giá trị lớn nhất và nhỏ nhất p15–19 (17–21), B03 Đường tiệm cận p20–25 (22–27), B04 Khảo sát sự biến thiên và vẽ đồ thị p26–32 (28–34), B05 Ứng dụng đạo hàm giải quyết bài toán thực tiễn p33–41 (35–43), cuối ChI p42–44 (44–46). SGK scanned publisher original SHA256 `faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd`. Exact source-locked independent SGK review covers B01–B05 and end.
- **SBT Toán12 KNTT Tập Một:** B01 p4–9 (PDF1 2–7), B02 p10–16 (8–14), B03 p17–20 (15–18), B04 p21–26 (19–24), B05 p27–32 (25–30), end p33–37 (31–35), SBT publisher original SHA256 `db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca`. **These page matches were verified by historical owner primary source scan receipt**, not claimed newly rescanned during this CĐ10 author turn.
- **Exact immutable SGK canonical source:** `prototypes/thpt/content-drafts/G12_SGK_CHI_B01_B05_FULL_CHAPTER_PUBLIC_CANONICAL_R00_SOURCE_CANDIDATE.md`, blob `f0862dcdab21dec136e43969f45c42638e7c7574`. Historical independent NotebookLM v2.1 SGK Academic/PED PASS (36 outcomes,78 public items,24 worked examples,6 SVG,36 D6) composite receipt `prototypes/thpt/review-packets/G12_SGK_CHI_B01_B05_R00_INDEPENDENT_NOTEBOOKLM_ACADEMIC_PED_PASS_SOURCE_RECEIPT_20261102.md`, blob `8fef1c7dbd9b404881ff40cec8147c9ae89ef473`. Original SGK **PASS is only original immutable SGK scope**, not Topic author PASS.
- **Division of concepts:** CĐ09 explains derivative at point and computation rules; here CĐ10 fully restates needed derivative sign meanings and requirements. B01–B05 covers monotonicity, extreme values, asymptotes, graph survey and optimization; do not insert non-S1 new SGK Core. Data applications are explicitly *assumed mathematical models*, not measured facts.

# Kiến thức

## Vì sao cần học CĐ10?

Biết tính f'(x) chưa cho phép tự trả lời 'hàm tăng ở đâu?', 'đỉnh nào cao nhất?', 'đồ thị đi đâu khi x rất lớn?' hay 'làm chiếc hộp thể tích lớn nhất thế nào?'. CĐ10 đi từ so sánh giá trị tới dấu đạo hàm, so cực trị có điều kiện, giới hạn/tiệm cận và bảng biến thiên, rồi dùng cùng một phương pháp tìm lời giải tối ưu trong miền thực tế. Học sinh phải giải thích vì sao các ứng viên hợp lệ, chứ không chỉ tìm nghiệm f'(x)=0.

## TOP10-M01 · Hiểu đồng biến, nghịch biến theo thứ tự đầu vào

**Outcome TOP10-O01:** Học sinh tự giải thích điều kiện và áp dụng đúng hiểu đồng biến, nghịch biến theo thứ tự đầu vào.
**Vì sao cần?** Biết giá trị hàm tại vài điểm có đủ khẳng định nó luôn tăng?
**Tiền đề tại chỗ:** Miền xác định, so sánh x₁<x₂ và giá trị f(x).
**Hình thành bản chất trước công thức:** Trên một khoảng I, f đồng biến khi x₁<x₂ kéo theo f(x₁)<f(x₂); nghịch biến khi f(x₁)>f(x₂). Đây là phát biểu trên MỌI cặp điểm, không phải chỉ hai điểm đầu–cuối. Với miền bị tách rời phải xét riêng từng khoảng; không nối kết kết luận qua chỗ không xác định.
**Ví dụ có suy luận + lý do chọn phương pháp:** f(x)=−2x+5 trên ℝ: nếu x₁<x₂ thì f(x₂)−f(x₁)=−2(x₂−x₁)<0 nên nghịch biến. Ta chọn hiệu hai giá trị để minh chứng bản chất trước dấu đạo hàm.
**Tự thử trước khi mở đối chiếu:** f(x)=3x−1 đồng biến hay nghịch biến trên ℝ?
**Tự mở đối chiếu sau khi hoàn thành:** Đồng biến: f(x₂)−f(x₁)=3(x₂−x₁)>0.
**D6 — đường khắc phục:** Nếu chỉ xem hai điểm, hãy thử nêu điều kiện đúng với mọi x₁<x₂.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P01` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M02 · Liên hệ dấu đạo hàm và chiều biến thiên

**Outcome TOP10-O02:** Học sinh tự giải thích điều kiện và áp dụng đúng liên hệ dấu đạo hàm và chiều biến thiên.
**Vì sao cần?** Tại sao đạo hàm dương báo đồ thị tăng trên một khoảng?
**Tiền đề tại chỗ:** Đạo hàm là độ dốc cục bộ, liên tục trên đoạn con, định lí giá trị trung bình dưới điều kiện phù hợp.
**Hình thành bản chất trước công thức:** Nếu f liên tục trên mọi đoạn con của I và khả vi trong I, f'(x)>0 khắp I suy f tăng nghiêm ngặt; f'<0 suy giảm. Trường hợp f'≥0 (hoặc ≤0) suy không giảm (không tăng); muốn tăng nghiêm ngặt có thể cho phép vài điểm f'=0 nhưng phải kiểm không có đoạn hằng. Không áp bảng dấu xuyên điểm loại miền.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=x² trên (0,+∞): f'=2x>0 nên tăng. Trên (−∞,0), f'<0 nên giảm. Chọn dấu đạo hàm vì hàm trơn trên từng khoảng.
**Tự thử trước khi mở đối chiếu:** f=x³ có f'=3x²≥0, tại0 bằng0; hàm có tăng nghiêm ngặt trên ℝ không?
**Tự mở đối chiếu sau khi hoàn thành:** Có, vì x³ tăng nghiêm ngặt; một điểm f'=0 không tạo đoạn hằng.
**D6 — đường khắc phục:** Nếu gọi f'=0 tại một điểm là cực trị, đọc lại trường hợp x³.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P02` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M03 · Tìm đúng miền và chia khoảng khi khảo sát

**Outcome TOP10-O03:** Học sinh tự giải thích điều kiện và áp dụng đúng tìm đúng miền và chia khoảng khi khảo sát.
**Vì sao cần?** Một điểm hàm không xác định có được đưa vào khoảng đồng biến không?
**Tiền đề tại chỗ:** Điều kiện mẫu khác 0, căn, log; đạo hàm trên miền mở.
**Hình thành bản chất trước công thức:** Miền D của hàm cần tìm TRƯỚC khi giải f'=0. Chia D theo điểm loại, điểm tới hạn và điểm f' không có nhưng f có. Bảng biến thiên tuyệt đối không nối hai nhánh qua tiệm cận đứng, hoặc dùng một khoảng chứa điểm không thuộc D.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=1/(x−2) có D=ℝ\{2}; f'=−1/(x−2)²<0. Nghịch biến trên (−∞,2) và (2,∞) riêng, KHÔNG nói 'nghịch biến trên ℝ\{2}' theo mọi cặp vì qua lỗ có thể f tăng.
**Tự thử trước khi mở đối chiếu:** f(x)=√(x−1) có miền nào?
**Tự mở đối chiếu sau khi hoàn thành:** D=[1,+∞); khả vi nội miền x>1, và tăng trên [1,+∞) theo nghĩa một phía tại biên.
**D6 — đường khắc phục:** Nếu kết luận 'toàn ℝ', hãy giải x−1≥0 trước.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P03` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M04 · Cực trị địa phương qua đổi dấu

**Outcome TOP10-O04:** Học sinh tự giải thích điều kiện và áp dụng đúng cực trị địa phương qua đổi dấu.
**Vì sao cần?** Tại sao đổi dấu đạo hàm quan trọng hơn chỉ giải f'=0?
**Tiền đề tại chỗ:** Dấu f' hai phía, miền và khả vi lân cận.
**Hình thành bản chất trước công thức:** Nếu f' đổi từ dương sang âm khi qua c thuộc D, f có cực đại địa phương ở c; âm sang dương cho cực tiểu. Nếu không đổi dấu, f'=0 có thể là điểm dừng không cực trị. Cực đại địa phương khác giá trị lớn nhất toàn cục.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=x³−3x: f'=3(x−1)(x+1), dương x<−1, âm −1<x<1, dương x>1. Cực đại ở x=−1 giá trị2, cực tiểu ở x=1 giá trị−2.
**Tự thử trước khi mở đối chiếu:** f=x² có cực tiểu ở đâu?
**Tự mở đối chiếu sau khi hoàn thành:** x=0, f' đổi âm→dương, f(0)=0.
**D6 — đường khắc phục:** Nếu chỉ giải f'=0, lập bảng dấu qua nghiệm.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P04` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M05 · Điểm f'=0 không đủ tạo cực trị

**Outcome TOP10-O05:** Học sinh tự giải thích điều kiện và áp dụng đúng điểm f'=0 không đủ tạo cực trị.
**Vì sao cần?** Mọi tiếp tuyến ngang có phải điểm cao nhất hoặc thấp nhất?
**Tiền đề tại chỗ:** Đạo hàm 0 và đổi dấu.
**Hình thành bản chất trước công thức:** Điều kiện f'(c)=0 chỉ là ứng viên trong nội miền khả vi, không đủ để khẳng định cực trị. f=x³ tại c=0 có đạo hàm0 nhưng vẫn tăng qua0, không cực đại hoặc cực tiểu. Cũng có cực trị không khả vi như |x| tại0; danh sách ứng viên cần xét cả điểm không khả vi trong miền.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=x³: f'=3x²≥0, không đổi dấu qua0 nên không có cực trị. Chọn xét dấu chứ không kết luận từ nghiệm đạo hàm.
**Tự thử trước khi mở đối chiếu:** f=x⁴ có cực tiểu tại0 không?
**Tự mở đối chiếu sau khi hoàn thành:** Có, f'=4x³ đổi âm→dương ở0; f(0)=0.
**D6 — đường khắc phục:** Nếu bỏ điểm gấp khúc |x|, bổ sung điểm f không khả vi nhưng có giá trị.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P05` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M06 · Ý nghĩa dấu đạo hàm trong chuyển động

**Outcome TOP10-O06:** Học sinh tự giải thích điều kiện và áp dụng đúng ý nghĩa dấu đạo hàm trong chuyển động.
**Vì sao cần?** Vận tốc âm có nghĩa vật đang đi chậm dần không?
**Tiền đề tại chỗ:** Tọa độ s(t), v=s', tốc độ |v|.
**Hình thành bản chất trước công thức:** Dấu v=s'(t) cho biết chiều chuyển động trong trục đã chọn; v>0 tọa độ tăng, v<0 tọa độ giảm. Nói tốc độ |v| tăng/giảm phải xem gia tốc a=s'' và dấu v·a khi v khác0. Bảng biến thiên s không tự tương đương bảng biến thiên tốc độ.
**Ví dụ có suy luận + lý do chọn phương pháp:** s(t)=t²−4t, t≥0: v=2t−4, âm t<2, 0 tại2, dương t>2; tọa độ giảm rồi tăng. a=2>0 nhưng trong (0,2), v<0 nên tốc độ giảm.
**Tự thử trước khi mở đối chiếu:** s(t)=t², t>0, tọa độ tăng hay giảm?
**Tự mở đối chiếu sau khi hoàn thành:** v=2t>0 nên tăng.
**D6 — đường khắc phục:** Nếu nhìn s âm hay dương để đo chiều, thay bằng dấu s'.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P06` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M07 · Cực trị địa phương và giá trị lớn nhất/nhỏ nhất toàn cục

**Outcome TOP10-O07:** Học sinh tự giải thích điều kiện và áp dụng đúng cực trị địa phương và giá trị lớn nhất/nhỏ nhất toàn cục.
**Vì sao cần?** Một đỉnh cục bộ có chắc cao nhất trên toàn miền không?
**Tiền đề tại chỗ:** Cực trị qua đổi dấu, miền so sánh.
**Hình thành bản chất trước công thức:** Cực đại địa phương chỉ so các điểm gần c; GTLN/GTNN trên D phải so với MỌI x∈D. Một hàm có thể có nhiều cực trị địa phương, không có max/min toàn cục nếu unbounded hoặc cận không đạt.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=x³−3x trên ℝ có cực đại địa phương 2 tại−1 và cực tiểu−2 tại1, nhưng f→+∞/−∞ khi x→±∞ nên không có GTLN/GTNN trên ℝ.
**Tự thử trước khi mở đối chiếu:** Hàm f=x² trên ℝ có GTNN không, GTLN không?
**Tự mở đối chiếu sau khi hoàn thành:** GTNN0 tại0; không có GTLN vì x²→∞.
**D6 — đường khắc phục:** Nếu nói cực đại 2 là GTLN của hàm bậc ba, thử x=10.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P07` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M08 · Liên tục trên đoạn đóng và tồn tại max/min

**Outcome TOP10-O08:** Học sinh tự giải thích điều kiện và áp dụng đúng liên tục trên đoạn đóng và tồn tại max/min.
**Vì sao cần?** Khi nào chắc chắn có GTLN/GTNN dù chưa tìm được điểm đạt?
**Tiền đề tại chỗ:** Định nghĩa liên tục trên đoạn đóng [a,b].
**Hình thành bản chất trước công thức:** Theo định lí giá trị lớn nhất nhỏ nhất (Weierstrass), hàm liên tục trên đoạn đóng hữu hạn [a,b] chắc chắn đạt GTLN/GTNN. Nếu thiếu 'đóng' hay tính liên tục thì chưa có bảo đảm; vẫn có thể đạt nhưng phải chứng minh riêng. Kết quả chỉ nói tồn tại, chưa cho tọa độ.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=x²−2x trên [0,3] là đa thức liên tục nên tồn tại hai giá trị. Ta còn tính được GTNN−1 tại x=1, GTLN3 tại x=3 sau so ứng viên.
**Tự thử trước khi mở đối chiếu:** f=x² trên [−1,2] có GTLN?
**Tự mở đối chiếu sau khi hoàn thành:** Có, GTLN4 tại2 và GTNN0 tại0.
**D6 — đường khắc phục:** Nếu miền mở, thử xét f=x trên (0,1) không đạt cận1.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P08` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M09 · So điểm tới hạn, điểm không khả vi và hai đầu đoạn

**Outcome TOP10-O09:** Học sinh tự giải thích điều kiện và áp dụng đúng so điểm tới hạn, điểm không khả vi và hai đầu đoạn.
**Vì sao cần?** Vì sao chỉ giải f'=0 có thể bỏ sót GTLN tại đầu mút?
**Tiền đề tại chỗ:** Hàm liên tục trên [a,b], khả vi từng khoảng, giá trị ứng viên.
**Hình thành bản chất trước công thức:** Trên [a,b] liên tục, GTLN/GTNN đạt ở đầu mút hoặc điểm nội miền f'=0 hay không khả vi. Phương pháp: xác định miền, liệt kê đủ ứng viên, tính chính xác f tại mỗi điểm, so sánh cùng đơn vị. Điểm f'=0 ngoài đoạn phải loại.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=x³−3x trên [0,2], f'=3x²−3⇒ x=1 trong đoạn. f(0)=0,f(1)=−2,f(2)=2⇒GTNN−2 tại1,GTLN2 tại2. Chọn kiểm hai đầu vì cực đại không nhất thiết nội miền.
**Tự thử trước khi mở đối chiếu:** f=x²−4x trên [0,3], GTNN?
**Tự mở đối chiếu sau khi hoàn thành:** f'=2x−4=0 tại2: f(0)=0,f(2)=−4,f(3)=−3⇒GTNN−4 tại2.
**D6 — đường khắc phục:** Nếu thấy nghiệm đạo hàm nằm ngoài đoạn, bỏ ứng viên ấy.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P09` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M10 · Cận trên trên miền mở không đồng nghĩa GTLN

**Outcome TOP10-O10:** Học sinh tự giải thích điều kiện và áp dụng đúng cận trên trên miền mở không đồng nghĩa gtln.
**Vì sao cần?** f(x) tiến đến 1 nhưng không bao giờ bằng 1, có gọi GTLN=1 không?
**Tiền đề tại chỗ:** Tập giá trị, cận trên và điều kiện 'đạt'.
**Hình thành bản chất trước công thức:** Cận trên đúng không nhất thiết là maximum. Trên (0,1), f(x)=x có supremum1 nhưng không có GTLN vì x=1 bị loại. Có thể có giá trị lớn nhất trên miền mở nếu hàm có điểm nội miền đạt, phải xét trường hợp cụ thể. Không được suy từ giới hạn ở biên thành giá trị đạt.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=1−(x−2)² trên (0,3) có GTLN1 tại x=2 (nội miền) dù miền mở. Trái lại g=x trên (0,1) không có GTLN, chỉ supremum1.
**Tự thử trước khi mở đối chiếu:** g(x)=−x trên (0,1) có GTLN0 không?
**Tự mở đối chiếu sau khi hoàn thành:** Không, vì g→0 khi x→0⁺ nhưng x=0 bị loại.
**D6 — đường khắc phục:** Nếu ghi GTLN là cận không đạt, hãy hỏi có x∈D sao cho f(x)=cận không.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P10` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M11 · Giá trị lớn nhất trên miền có ràng buộc

**Outcome TOP10-O11:** Học sinh tự giải thích điều kiện và áp dụng đúng giá trị lớn nhất trên miền có ràng buộc.
**Vì sao cần?** Một đáp số x tối ưu có thể vô nghĩa nếu x vi phạm điều kiện thực tế?
**Tiền đề tại chỗ:** Bất phương trình, khoảng ràng buộc, max/min.
**Hình thành bản chất trước công thức:** Bài toán cực trị có ràng buộc phải lấy miền khả thi từ bối cảnh (độ dài dương, số lượng nguyên, ngân sách, khối lượng, thời gian). Sau tìm cực trị liên tục, kiểm nghiệm tối ưu có trong miền; nếu biến nguyên, so các giá trị nguyên lân cận. Không mở rộng mô hình ra ngoài điều kiện.
**Ví dụ có suy luận + lý do chọn phương pháp:** Lợi ích P(x)=−(x−4)²+10 với x∈[0,3] không đạt đỉnh 10 ở x=4 vì ngoài miền; P tăng trên [0,3], GTLN P(3)=9. Chọn kiểm miền trước khi tuyên bố cực đại.
**Tự thử trước khi mở đối chiếu:** Với f=−(x−5)², x∈[0,2], x tối ưu?
**Tự mở đối chiếu sau khi hoàn thành:** x=2, f(2)=−9; x=5 không hợp lệ.
**D6 — đường khắc phục:** Nếu nghiệm f'=0 ngoài miền, kiểm đầu mút hợp lệ.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P11` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M12 · Thiết lập mô hình tối ưu trước khi lấy đạo hàm

**Outcome TOP10-O12:** Học sinh tự giải thích điều kiện và áp dụng đúng thiết lập mô hình tối ưu trước khi lấy đạo hàm.
**Vì sao cần?** Tại sao một công thức đạo hàm đúng vẫn cho bài toán thực tế sai?
**Tiền đề tại chỗ:** Chọn biến và đơn vị, mối ràng buộc, miền.
**Hình thành bản chất trước công thức:** Quy trình mô hình: chọn đại lượng cần tối ưu, chọn biến và đơn vị, dùng ràng buộc để đưa mục tiêu về một biến, lập miền hợp lệ, đạo hàm và kiểm biên, rồi diễn giải kết quả theo mô hình. Không coi việc giải f'=0 là đủ chứng minh tối ưu.
**Ví dụ có suy luận + lý do chọn phương pháp:** Chu vi hình chữ nhật 20 m, cạnh x∈(0,10), cạnh kia10−x, diện tích A=x(10−x). A'=10−2x=0⇒x=5, diện tích25 m² là lớn nhất vì A=25−(x−5)²≤25, đạt tại x=5.
**Tự thử trước khi mở đối chiếu:** Hình chữ nhật chu vi 12 m, diện tích lớn nhất khi nào?
**Tự mở đối chiếu sau khi hoàn thành:** x=3, cạnh còn lại3, diện tích9 m².
**D6 — đường khắc phục:** Nếu mục tiêu chưa đưa về một biến, quay lại ràng buộc trước khi đạo hàm.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P12` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M13 · Tiệm cận ngang: hành vi khi x→±∞

**Outcome TOP10-O13:** Học sinh tự giải thích điều kiện và áp dụng đúng tiệm cận ngang: hành vi khi x→±∞.
**Vì sao cần?** Một đồ thị có thể tiến gần một đường thẳng dù không bao giờ chạm?
**Tiền đề tại chỗ:** Giới hạn ở vô cực và phân thức.
**Hình thành bản chất trước công thức:** Đường y=L là tiệm cận ngang nếu lim(x→+∞)f(x)=L hoặc lim(x→−∞)f(x)=L hữu hạn. Chỉ cần một trong hai phía; có thể là hai giới hạn khác nhau nếu hàm thích hợp. Việc đồ thị cắt đường y=L tại điểm hữu hạn không làm mất tính tiệm cận.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=(2x+1)/(x+3)→2 khi x→±∞, nên y=2 là tiệm cận ngang; không phải y=0 vì tử và mẫu cùng bậc.
**Tự thử trước khi mở đối chiếu:** f=(3x−2)/(x+4) có TCN?
**Tự mở đối chiếu sau khi hoàn thành:** y=3 khi x→±∞.
**D6 — đường khắc phục:** Nếu lấy hệ số hằng ở tử làm tiệm cận, chia cho x bậc cao nhất.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P13` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M14 · Tiệm cận đứng: kiểm giới hạn một phía

**Outcome TOP10-O14:** Học sinh tự giải thích điều kiện và áp dụng đúng tiệm cận đứng: kiểm giới hạn một phía.
**Vì sao cần?** Điểm x=a không xác định có luôn là tiệm cận đứng?
**Tiền đề tại chỗ:** Định nghĩa giới hạn ±∞ một phía, bảng dấu.
**Hình thành bản chất trước công thức:** x=a là tiệm cận đứng nếu ít nhất một trong các giới hạn một phía khi x→a đạt +∞ hoặc −∞. Chỉ có mẫu bằng0 chưa đủ: nếu tử cùng triệt tiêu có thể là lỗ khử. Cần xác định miền và tính dấu mỗi phía.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=(x+1)/(x−2), tại2 tử→3>0, mẫu âm phía trái/dương phía phải, nên f→−∞ khi x→2⁻, f→+∞ khi x→2⁺, x=2 là TCD.
**Tự thử trước khi mở đối chiếu:** f=1/(x+1) có TCD ở đâu và hai phía?
**Tự mở đối chiếu sau khi hoàn thành:** x=−1; trái −∞, phải+∞.
**D6 — đường khắc phục:** Nếu viết 0/0 rồi gọi đứng, thử phân tích và rút gọn.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P14` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M15 · Tiệm cận xiên từ phần dư →0

**Outcome TOP10-O15:** Học sinh tự giải thích điều kiện và áp dụng đúng tiệm cận xiên từ phần dư →0.
**Vì sao cần?** Nếu hàm tiến sát đường nghiêng thì cần chứng minh gì, thay vì chỉ chia đa thức?
**Tiền đề tại chỗ:** Giới hạn ở ±∞, chia đa thức.
**Hình thành bản chất trước công thức:** Đường y=ax+b (a≠0) là tiệm cận xiên tại một phía vô cực khi lim[f(x)−(ax+b)]=0 phía ấy. Có thể tìm a=lim f(x)/x và b=lim[f(x)−ax] nếu hai giới hạn hữu hạn và a≠0, hoặc chia đa thức trực tiếp. Không phải mọi phép chia ra ax+b đều là tiệm cận nếu phần dư không về0.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=(x²+1)/(x−1)=x+1+2/(x−1); vì 2/(x−1)→0 khi x→±∞ nên y=x+1 là TC xiên. Chọn chia vì mẫu bậc1 và tử bậc2.
**Tự thử trước khi mở đối chiếu:** f=(x²−x+2)/x, x≠0, TC xiên?
**Tự mở đối chiếu sau khi hoàn thành:** f=x−1+2/x⇒y=x−1.
**D6 — đường khắc phục:** Nếu chỉ tính a mà quên b, tiệm cận sẽ dịch sai.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P15` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M16 · Lỗ khử được không phải tiệm cận đứng

**Outcome TOP10-O16:** Học sinh tự giải thích điều kiện và áp dụng đúng lỗ khử được không phải tiệm cận đứng.
**Vì sao cần?** Tại sao một đồ thị có thể bị thiếu đúng một điểm nhưng không lao ra vô cực?
**Tiền đề tại chỗ:** Phân tích tử/mẫu, giới hạn hữu hạn.
**Hình thành bản chất trước công thức:** Nếu tử và mẫu có cùng nhân tử x−a, giản ước trên x≠a cho giới hạn hữu hạn, khi đó đồ thị có lỗ/điểm loại chứ không phải TCD tại a. Phép rút gọn không tự bổ sung f(a) vào miền gốc. Có thể có TCD ở điểm khác.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=(x²−4)/(x−2), x≠2 ⇒ f=x+2 trên miền. Lim tại2 là4 hữu hạn nên không có tiệm cận đứng x=2, chỉ lỗ tại (2,4).
**Tự thử trước khi mở đối chiếu:** f=(x²−9)/(x−3), có TCD x=3?
**Tự mở đối chiếu sau khi hoàn thành:** Không, vì f=x+3 cho x≠3, giới hạn6.
**D6 — đường khắc phục:** Nếu rút gọn nhưng tự gán f(3)=6, đã thay đổi hàm gốc.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P16` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M17 · Miền xác định quyết định từ phía nào lấy giới hạn

**Outcome TOP10-O17:** Học sinh tự giải thích điều kiện và áp dụng đúng miền xác định quyết định từ phía nào lấy giới hạn.
**Vì sao cần?** Có thể lấy giới hạn phía ngoài miền mà hàm không tồn tại?
**Tiền đề tại chỗ:** Đầu mút miền, hàm có mẫu/căn.
**Hình thành bản chất trước công thức:** Giới hạn một phía x→a phải dùng các điểm thuộc miền D gần a ở đúng phía. Ở đầu miền của căn √(x−1), không có lân cận phía trái trong miền thực; không dùng giá trị giả. Ở điểm loại phân thức, nếu D có hai nhánh thì kiểm từng phía. TCD dựa trên đường đi hợp lệ trong miền.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=1/√(x−1) có D=(1,∞); khi x→1⁺, f→+∞ nên x=1 là TCD từ phía phải. Không có giới hạn thực x→1⁻ từ miền.
**Tự thử trước khi mở đối chiếu:** f=1/√x tại x=0, phía nào xét TCD?
**Tự mở đối chiếu sau khi hoàn thành:** Chỉ x→0⁺; giới hạn +∞, x=0 là TCD.
**D6 — đường khắc phục:** Nếu viết giới hạn trái của f không có miền thực, đó là sai điều kiện.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P17` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M18 · Đọc hình và phân biệt tiệm cận ngang/đứng/xiên

**Outcome TOP10-O18:** Học sinh tự giải thích điều kiện và áp dụng đúng đọc hình và phân biệt tiệm cận ngang/đứng/xiên.
**Vì sao cần?** Vì sao tiệm cận không phải đường mà đồ thị tuyệt đối không được chạm?
**Tiền đề tại chỗ:** Đọc trục và giới hạn, đồ thị phân nhánh.
**Hình thành bản chất trước công thức:** Tiệm cận là mô tả khoảng cách/hành vi giới hạn, không phải cấm giao nhau. Đọc TCD x=a qua một nhánh lao ±∞ gần a, ngang y=L qua xu hướng ở vô cực, xiên y=ax+b khi hiệu f−(ax+b)→0. Phải kiểm tính đúng theo mỗi phía vô cực/điểm cấm, không dựa chỉ nét vẽ.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=x+1/x, x≠0: TCD x=0 vì 1/x vô cực, TC xiên y=x vì f−x=1/x→0. Không có TCN, mặc dù x lớn đồ thị gần đường xiên.
**Tự thử trước khi mở đối chiếu:** f=(x+1)/x có TCD và TCN?
**Tự mở đối chiếu sau khi hoàn thành:** TCD x=0, TCN y=1.
**D6 — đường khắc phục:** Nếu đọc đường y=1 như trục hoành, hãy ghi phương trình theo trục.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P18` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M19 · Quy trình khảo sát và vẽ đồ thị có kỷ luật

**Outcome TOP10-O19:** Học sinh tự giải thích điều kiện và áp dụng đúng quy trình khảo sát và vẽ đồ thị có kỷ luật.
**Vì sao cần?** Muốn phác đồ thị đúng thì thứ tự nào ngăn bỏ sót nhánh?
**Tiền đề tại chỗ:** Miền, đạo hàm, giới hạn, điểm đặc biệt.
**Hình thành bản chất trước công thức:** Quy trình: (1) tìm D; (2) giải f'=0 và xét dấu trên từng nhánh D; (3) tính cực trị, giới hạn tại biên/±∞, TCD/TCN/TC xiên nếu có; (4) giao trục/điểm hỗ trợ, đối xứng phù hợp; (5) lập bảng biến thiên và vẽ từng nhánh đúng mối liên hệ. Không nối hai nhánh qua điểm bị loại.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=1/(x−1): D=ℝ\{1}, f'=−1/(x−1)²<0, TCD x=1, TCN y=0; hai nhánh đều giảm nhưng không nối qua x=1. Chọn kiểm miền trước dấu.
**Tự thử trước khi mở đối chiếu:** f=x², thứ tự cơ bản cho hình?
**Tự mở đối chiếu sau khi hoàn thành:** D=ℝ, f'=2x, giảm trước0 tăng sau0, đỉnh(0,0), không TCD/TC ngang, đồ thị parabol.
**D6 — đường khắc phục:** Nếu thiếu nhánh phía trái, bảng dấu f' là nơi tìm lại.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P19` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M20 · Khảo sát đa thức bậc ba bằng bảng dấu

**Outcome TOP10-O20:** Học sinh tự giải thích điều kiện và áp dụng đúng khảo sát đa thức bậc ba bằng bảng dấu.
**Vì sao cần?** Đa thức bậc ba có nhất thiết hai cực trị?
**Tiền đề tại chỗ:** Đạo hàm bậc hai, dấu f', giới hạn ±∞.
**Hình thành bản chất trước công thức:** Với f bậc ba, f' là tam thức bậc hai: có thể có hai nghiệm phân biệt tạo hai cực trị, nghiệm kép không đổi dấu tạo điểm dừng, hoặc không nghiệm tạo đơn điệu. Chỉ tính f'=0 chưa đủ; phải lập bảng dấu/điểm uốn nếu xét thêm, không gán mọi bậc ba hai cực trị.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=x³−3x: f'=3(x−1)(x+1), cực đại ở −1 giá trị2, cực tiểu ở1 giá trị−2; khi x→∞ f→∞, x→−∞ f→−∞. Chọn bảng dấu để xác định hai nhánh.
**Tự thử trước khi mở đối chiếu:** f=x³ có cực trị không?
**Tự mở đối chiếu sau khi hoàn thành:** Không; f'=3x²≥0, không đổi dấu ở0.
**D6 — đường khắc phục:** Nếu vẽ hình có hai đỉnh cho x³, kiểm lại số nghiệm đổi dấu của f'.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P20` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M21 · Khảo sát phân thức hữu tỉ có điểm cấm

**Outcome TOP10-O21:** Học sinh tự giải thích điều kiện và áp dụng đúng khảo sát phân thức hữu tỉ có điểm cấm.
**Vì sao cần?** Tại sao bảng biến thiên của phân thức phải có đường phân cách ở x=a?
**Tiền đề tại chỗ:** Quy tắc đạo hàm thương và giới hạn một phía.
**Hình thành bản chất trước công thức:** Đối với f=(ax+b)/(cx+d) với cx+d≠0, f'=(ad−bc)/(cx+d)² (trong miền), nên dấu không đổi trên mỗi khoảng miền. Tiệm cận đứng thường tại nghiệm mẫu khi tử không đồng thời0; ngang tại y=a/c nếu c≠0. Bảng biến thiên ghi riêng các nhánh, không nối qua TCD.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=(2x+1)/(x−1): D=ℝ\{1}, f'=[2(x−1)−(2x+1)]/(x−1)²=−3/(x−1)²<0; TCD x=1, TCN y=2. Trái gần1→−∞, phải→+∞.
**Tự thử trước khi mở đối chiếu:** f=(x+3)/(x−2), dấu đạo hàm?
**Tự mở đối chiếu sau khi hoàn thành:** f'=−5/(x−2)²<0 trên mỗi nhánh; TCD x=2, TCN y=1.
**D6 — đường khắc phục:** Nếu đọc 'giảm trên toàn ℝ\{2}' theo mọi cặp, lưu ý hai nhánh không tạo một khoảng.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P21` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M22 · Giao trục, giới hạn và điểm đặc biệt của đồ thị

**Outcome TOP10-O22:** Học sinh tự giải thích điều kiện và áp dụng đúng giao trục, giới hạn và điểm đặc biệt của đồ thị.
**Vì sao cần?** Tại sao tìm giao trục không đủ để vẽ đúng đồ thị?
**Tiền đề tại chỗ:** Giải f(x)=0, thế x=0 khi x=0 thuộc miền, dấu và giới hạn.
**Hình thành bản chất trước công thức:** Giao Ox là nghiệm f(x)=0 thuộc D; giao Oy chỉ có khi 0∈D và là (0,f(0)). Với phân thức, nghiệm tử tại điểm mẫu=0 phải loại. Giới hạn ở vô cực và điểm loại mô tả nhánh mà hai giao trục không cho biết.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=(x−2)/(x+1): Ox (2,0), Oy(0,−2), TCD x=−1 và TCN y=1. Ta chọn kiểm mẫu khi giải tử bằng0; x=2 hợp lệ.
**Tự thử trước khi mở đối chiếu:** f=(x−1)/(x−1), x≠1 có giao Ox không?
**Tự mở đối chiếu sau khi hoàn thành:** Không; f=1 trên D nên không có nghiệm f=0, x=1 bị loại.
**D6 — đường khắc phục:** Nếu rút gọn rồi tự điền điểm bị loại, đã đổi đồ thị.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P22` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M23 · Đối xứng tâm của đồ thị phân thức

**Outcome TOP10-O23:** Học sinh tự giải thích điều kiện và áp dụng đúng đối xứng tâm của đồ thị phân thức.
**Vì sao cần?** Hình hai nhánh cong đối nhau có tâm nào và phải chứng minh ra sao?
**Tiền đề tại chỗ:** Tịnh tiến tọa độ X=x−a,Y=y−b, đối xứng tâm.
**Hình thành bản chất trước công thức:** Đồ thị y=b+k/(x−a), a,k≠? với k≠0, có TCD x=a, TCN y=b, tâm đối xứng tại giao (a,b), vì f(a+h)+f(a−h)=2b khi h≠0. Không kết luận mọi phân thức đều đối xứng tâm chỉ từ nét nhìn; kiểm phép tịnh tiến hoặc tính chất đối xứng.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=(2x+1)/(x−1)=2+3/(x−1) nên tâm I(1,2); TCD x=1, TCN y=2. Chọn phép tách vì chứng minh được đối xứng chứ không chỉ đo bằng mắt.
**Tự thử trước khi mở đối chiếu:** f=(x+1)/(x−2) có tâm đối xứng nào?
**Tự mở đối chiếu sau khi hoàn thành:** f=1+3/(x−2) nên I(2,1).
**D6 — đường khắc phục:** Nếu lấy tâm tại giao trục, nhầm với giao tiệm cận.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P23` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M24 · Đọc bảng biến thiên để suy tính chất

**Outcome TOP10-O24:** Học sinh tự giải thích điều kiện và áp dụng đúng đọc bảng biến thiên để suy tính chất.
**Vì sao cần?** Một bảng mũi tên lên/xuống có thể cho biết GTLN, cực trị và khoảng tăng không?
**Tiền đề tại chỗ:** Ý nghĩa mũi tên, điểm tách miền, giới hạn ở biên.
**Hình thành bản chất trước công thức:** Bảng biến thiên chứa điểm phân chia, dấu f', giá trị tại điểm và giới hạn. Mũi tên giảm→tăng tại c∈D gợi cực tiểu, nhưng muốn GTNN toàn miền phải so mọi nhánh và biên. Điểm đứng đôi biểu diễn loại khỏi miền không phải nơi đạt cực trị.
**Ví dụ có suy luận + lý do chọn phương pháp:** Nếu f' âm trên (−∞,1), dương trên (1,∞) và f(1)=−3, f liên tục trong ℝ, thì f có cực tiểu ở (1,−3). Nếu f' không có trên nhánh bị loại, không gắn nhãn cực tiểu ở đó.
**Tự thử trước khi mở đối chiếu:** Bảng f' dấu + trước2, − sau2 với f(2)=5: loại cực trị?
**Tự mở đối chiếu sau khi hoàn thành:** Cực đại địa phương tại (2,5), miễn f đủ liên tục/khả vi phù hợp.
**D6 — đường khắc phục:** Nếu tưởng min, nhớ +→− là đi lên rồi đi xuống.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P24` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M25 · Không nối các nhánh đồ thị qua điểm ngoài miền

**Outcome TOP10-O25:** Học sinh tự giải thích điều kiện và áp dụng đúng không nối các nhánh đồ thị qua điểm ngoài miền.
**Vì sao cần?** Hai nhánh giảm có thể tạo một hàm giảm trên toàn tập miền rời?
**Tiền đề tại chỗ:** Khoảng và so cặp trên cùng một tập, điểm cấm.
**Hình thành bản chất trước công thức:** Với miền gồm nhiều khoảng rời, dấu f'<0 trên mỗi thành phần chỉ chứng minh hàm giảm trên từng khoảng, không cho giảm khi so một điểm ở nhánh trái với một điểm nhánh phải. Cách ghi đúng tên các khoảng, giữ tiệm cận/điểm loại trong bảng.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=1/x, D=ℝ\{0}, f'=−1/x²<0 trên từng nhánh. Nhưng −1<1 mà f(−1)=−1<f(1)=1, ngược bất đẳng thức nghịch biến, nên không được nói f nghịch biến trên D theo mọi cặp.
**Tự thử trước khi mở đối chiếu:** f=1/(x−1) giảm ở đâu?
**Tự mở đối chiếu sau khi hoàn thành:** Trên từng khoảng (−∞,1) và (1,∞); không trên cả tập gộp theo mọi cặp.
**D6 — đường khắc phục:** Nếu gộp, thử một cặp điểm ở hai nhánh.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P25` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M26 · Đạo hàm là tốc độ biến đổi cục bộ trong ứng dụng

**Outcome TOP10-O26:** Học sinh tự giải thích điều kiện và áp dụng đúng đạo hàm là tốc độ biến đổi cục bộ trong ứng dụng.
**Vì sao cần?** Tại sao tổng chi phí cao không đồng nghĩa tốc độ tăng chi phí cao?
**Tiền đề tại chỗ:** Đạo hàm f' so với f, đơn vị.
**Hình thành bản chất trước công thức:** Trong mô hình thực tế f(x), f'(x) mô tả thay đổi tức thời theo một đơn vị x, có đơn vị [f]/[x]. Giá trị f(x) là mức hiện tại, f' có thể âm dù f dương. Để đọc kết quả phải nói rõ x đơn vị gì và phạm vi mô hình.
**Ví dụ có suy luận + lý do chọn phương pháp:** C(q)=100+2q+0,1q² (nghìn đồng) với q≥0 sản phẩm, C'(q)=2+0,2q nghìn đồng/sản phẩm; tại q=5 là3, không phải C(5)=112,5. Chọn đạo hàm khi hỏi chi phí cận biên.
**Tự thử trước khi mở đối chiếu:** C(q)=50+3q (nghìn đồng), C'(q) là bao nhiêu?
**Tự mở đối chiếu sau khi hoàn thành:** 3 nghìn đồng/sản phẩm.
**D6 — đường khắc phục:** Nếu trả 50+3q, bạn đang nêu mức chi phí chứ không tốc độ.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P26` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M27 · Vận tốc có hướng, tốc độ và gia tốc

**Outcome TOP10-O27:** Học sinh tự giải thích điều kiện và áp dụng đúng vận tốc có hướng, tốc độ và gia tốc.
**Vì sao cần?** Gia tốc âm có thể đi cùng tốc độ đang tăng không?
**Tiền đề tại chỗ:** CĐ09 v=s',a=s''; dấu v·a khi v≠0.
**Hình thành bản chất trước công thức:** Với tọa độ s(t), vận tốc có hướng v=s', tốc độ |v|, gia tốc a=s''. Khi v·a>0 thì tốc độ đang tăng; khi v·a<0 thì giảm, nếu v=0 phải xét riêng. Tốc độ không âm; gia tốc âm không đủ chứng minh chậm dần.
**Ví dụ có suy luận + lý do chọn phương pháp:** s(t)=−t², t>0: v=−2t<0, a=−2<0 cùng dấu nên |v|=2t tăng. Chọn dấu tích v·a thay vì chỉ nhìn a.
**Tự thử trước khi mở đối chiếu:** Cho v=−4 m/s,a=−1 m/s², tốc độ biến thiên thế nào?
**Tự mở đối chiếu sau khi hoàn thành:** Đang tăng tại lúc xét vì v·a>0.
**D6 — đường khắc phục:** Nếu viết 'a âm nên chậm', kiểm chiều v.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P27` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M28 · Chi phí cận biên và quyết định kinh tế

**Outcome TOP10-O28:** Học sinh tự giải thích điều kiện và áp dụng đúng chi phí cận biên và quyết định kinh tế.
**Vì sao cần?** Chi phí sản xuất thêm một đơn vị có giống chính xác đạo hàm tại q không?
**Tiền đề tại chỗ:** Đơn vị biến q, đạo hàm và xấp xỉ vi phân.
**Hình thành bản chất trước công thức:** Chi phí cận biên C'(q) là tốc độ biến thiên tức thời theo sản lượng; với số lượng nguyên, chi phí tăng thêm C(q+1)−C(q) không nhất thiết bằng chính xác C'(q). Dùng đạo hàm làm xấp xỉ khi bước nhỏ so với thang mô hình, kiểm đơn vị và tính thực tế.
**Ví dụ có suy luận + lý do chọn phương pháp:** C(q)=q²+5q+100 (nghìn đồng)⇒C'(q)=2q+5. Tại q=10, C'=25 (nghìn đồng/sản phẩm), nhưng C(11)−C(10)=26, chênh1. Ta chọn so với độ tăng thật để tránh xem đạo hàm là hóa đơn chính xác.
**Tự thử trước khi mở đối chiếu:** C(q)=q²+2q, C'(3) và C(4)−C(3) là gì?
**Tự mở đối chiếu sau khi hoàn thành:** C'(3)=8, còn 4²+8−(9+6)=9, không bằng nhau.
**D6 — đường khắc phục:** Không tuyên bố đạo hàm luôn bằng tăng một sản phẩm.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P28` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M29 · Xác định miền của mô hình tối ưu thực tế

**Outcome TOP10-O29:** Học sinh tự giải thích điều kiện và áp dụng đúng xác định miền của mô hình tối ưu thực tế.
**Vì sao cần?** Vì sao nghiệm phương trình đạo hàm có thể là kích thước âm vô nghĩa?
**Tiền đề tại chỗ:** Độ dài, thời gian, lượng sản phẩm, ràng buộc tổng.
**Hình thành bản chất trước công thức:** Bài toán thực tế cần miền khả thi từ dữ kiện: kích thước dương, thể tích không âm, thời gian trong giai đoạn khảo sát, lượng người/sản phẩm có thể là số nguyên. Miền phải ghi trước khi tối ưu và dùng để loại ứng viên ngoài miền. Lời giải chỉ có nghĩa trong mô hình và giả thiết cho trước.
**Ví dụ có suy luận + lý do chọn phương pháp:** Hình chữ nhật có tổng hai cạnh bằng10 m, x>0 và 10−x>0 ⇒ 0<x<10. Diện tích A=x(10−x), điểm x=5 hợp lệ; x=−5 dù có thể nằm trong phép tính đại số bị loại.
**Tự thử trước khi mở đối chiếu:** Với hộp xăng theo mô hình V=x(8−2x)², kích thước đáy sau cắt phải dương, x nằm đâu?
**Tự mở đối chiếu sau khi hoàn thành:** 0<x<4 để cạnh 8−2x>0.
**D6 — đường khắc phục:** Nếu xét x=5, đáy có cạnh âm, không có hộp.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P29` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M30 · Đạo hàm để tìm tối ưu trong miền

**Outcome TOP10-O30:** Học sinh tự giải thích điều kiện và áp dụng đúng đạo hàm để tìm tối ưu trong miền.
**Vì sao cần?** Có thể biết hàm đạt cực đại nhờ đạo hàm mà không kiểm giá trị biên?
**Tiền đề tại chỗ:** Bảng dấu f', điểm khả thi, mục tiêu.
**Hình thành bản chất trước công thức:** Khi tối ưu f trên miền [a,b] hoặc (a,b), lấy f' trong nội miền để tìm ứng viên; so giá trị ở ứng viên hợp lệ và hai đầu nếu thuộc miền, thêm điểm không khả vi. Với miền mở, kiểm giới hạn biên và việc cận đạt. Không tuyên bố f'=0 luôn cho GTLN.
**Ví dụ có suy luận + lý do chọn phương pháp:** A(x)=x(12−x) trên 0<x<12, A'=12−2x; đổi dương→âm tại x=6, max A=36 đạt tại6. Đầu miền cho A→0 không đạt nhưng không ảnh hưởng max.
**Tự thử trước khi mở đối chiếu:** A=x(8−x), 0<x<8: x tối ưu và diện tích?
**Tự mở đối chiếu sau khi hoàn thành:** x=4,A=16.
**D6 — đường khắc phục:** Nếu x>0 nhưng nghiệm ngoài miền, phải loại.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P30` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M31 · Kiểm đầu mút, khả thi và đạt cực trị

**Outcome TOP10-O31:** Học sinh tự giải thích điều kiện và áp dụng đúng kiểm đầu mút, khả thi và đạt cực trị.
**Vì sao cần?** Hai biên có thể làm thay đổi kết luận tối ưu như thế nào?
**Tiền đề tại chỗ:** Đoạn đóng/mở và điểm dừng.
**Hình thành bản chất trước công thức:** Điểm biên thuộc miền có thể là nơi đạt max/min, kể cả đạo hàm trong lòng chưa bằng0. Nếu điểm biên bị loại, chỉ có thể là giới hạn/cận không đạt. Với biến nguyên, ứng viên phải làm tròn so hai giá trị khả thi lân cận; không dùng nghiệm thực phân số như số sản phẩm.
**Ví dụ có suy luận + lý do chọn phương pháp:** P(x)=−(x−5)²+20 trên x∈[0,4]: P tăng đến x=4 nên GTLN16 tại biên4; không lấy P(5)=20 ngoài miền. Chọn kiểm điểm biên vì f'(x)>0 trên toàn khoảng.
**Tự thử trước khi mở đối chiếu:** g=x trên [0,1], GTLN/GTNN?
**Tự mở đối chiếu sau khi hoàn thành:** GTLN1 tại1, GTNN0 tại0.
**D6 — đường khắc phục:** Nếu miền (0,1) kết quả KHÔNG đạt, đọc kí hiệu ngoặc.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P31` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M32 · Kiểm đơn vị, giả thiết và sai số của mô hình

**Outcome TOP10-O32:** Học sinh tự giải thích điều kiện và áp dụng đúng kiểm đơn vị, giả thiết và sai số của mô hình.
**Vì sao cần?** Kết quả tối ưu chính xác về đại số đã đủ là kết luận thực tế chưa?
**Tiền đề tại chỗ:** Đơn vị, số nguyên, miền khả thi và định nghĩa mục tiêu.
**Hình thành bản chất trước công thức:** Mọi kết luận mô hình cần ghi giả thiết và đơn vị. Dùng cực trị liên tục có thể phải chuyển thành quyết định số nguyên, so các nguyên lân cận (đặc biệt sản lượng). Nếu hàm chi phí hay doanh thu do mô hình giả định, đừng khẳng định thực tế đã đo như vậy. Dữ kiện đến từ giả định phải được dán nhãn mô hình.
**Ví dụ có suy luận + lý do chọn phương pháp:** Giả sử lợi nhuận P(q)=−(q−2,4)²+10 (triệu đồng) với q là số máy nguyên ≥0. Cực đại liên tục ở2,4 không khả thi; so q=2 (9,84) với q=3 (9,64), quyết định q=2 trong mô hình. Cần nói giả thiết doanh thu/chi phí là mô hình, không phải thống kê thực.
**Tự thử trước khi mở đối chiếu:** Nếu P(q)=−(q−3,6)²+20, q nguyên, nên so những q nào?
**Tự mở đối chiếu sau khi hoàn thành:** q=3 và4; P(3)=19,64, P(4)=19,84 nên q=4.
**D6 — đường khắc phục:** Đừng dùng q=3,6 sản phẩm trong câu trả lời số nguyên.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P32` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M33 · Tổng hợp chiều biến thiên và cực trị

**Outcome TOP10-O33:** Học sinh tự giải thích điều kiện và áp dụng đúng tổng hợp chiều biến thiên và cực trị.
**Vì sao cần?** Đạo hàm có thể chứng minh cực trị địa phương nhưng không chứng minh toàn cục khi miền ℝ không bị chặn?
**Tiền đề tại chỗ:** Dấu f', giới hạn ở vô cực và giá trị so sánh.
**Hình thành bản chất trước công thức:** Quy trình tổng hợp: tìm D, nghiệm f'=0, điểm f' không có trong D, lập dấu, ghi cực trị địa phương, kiểm giới hạn và biên để quyết định max/min toàn miền. Cùng một f có thể có hai cực trị nhưng không có cực trị toàn cục.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=x³−3x: cực đại địa phương2 ở−1,cực tiểu−2 ở1 nhưng không có GTLN/GTNN toàn ℝ vì f không bị chặn. Để chứng minh điều này cần giới hạn ±∞, không chỉ bảng dấu.
**Tự thử trước khi mở đối chiếu:** f=x²−4x trên ℝ có GTNN gì, GTLN?
**Tự mở đối chiếu sau khi hoàn thành:** GTNN−4 tại2, không có GTLN.
**D6 — đường khắc phục:** Nếu nhầm cực đại địa phương với toàn cục, so f khi x rất lớn.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P33` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M34 · Tổng hợp tiệm cận và đọc đồ thị hữu tỉ

**Outcome TOP10-O34:** Học sinh tự giải thích điều kiện và áp dụng đúng tổng hợp tiệm cận và đọc đồ thị hữu tỉ.
**Vì sao cần?** Một biểu thức có thể vừa có TCD vừa có TCN hoặc TC xiên không?
**Tiền đề tại chỗ:** Chia đa thức, giới hạn một phía và miền.
**Hình thành bản chất trước công thức:** Đồ thị phân thức có thể có TCD tại x=a nơi giá trị vô cực, và TCN/TC xiên tại x→∞ tùy bậc đa thức. Điểm khử được là lỗ, không TCD. Muốn vẽ chính xác cả hai nhánh phải tính f' và dấu cùng tiệm cận, không kết luận chỉ bằng nhìn phân thức.
**Ví dụ có suy luận + lý do chọn phương pháp:** f=(x²+1)/(x−1)=x+1+2/(x−1) ⇒ TCD x=1, TC xiên y=x+1. f'= [(2x)(x−1)−(x²+1)]/(x−1)²=(x²−2x−1)/(x−1)², có hai nghiệm 1±√2; một ở mỗi nhánh.
**Tự thử trước khi mở đối chiếu:** f=(x+2)/(x−1), TCD và TCN?
**Tự mở đối chiếu sau khi hoàn thành:** x=1,y=1, do tử tại1 bằng3 khác0.
**D6 — đường khắc phục:** Nếu nói y=x, kiểm bậc tử/mẫu trước.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P34` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M35 · Kết hợp vận tốc/chi phí và bài toán tối ưu

**Outcome TOP10-O35:** Học sinh tự giải thích điều kiện và áp dụng đúng kết hợp vận tốc/chi phí và bài toán tối ưu.
**Vì sao cần?** Một mô hình chi phí có tốc độ cận biên không có nghĩa điểm tối ưu cứ tại C'=0?
**Tiền đề tại chỗ:** Phân biệt giá trị, tốc độ, lợi nhuận, domain.
**Hình thành bản chất trước công thức:** Chi phí C'(q) giúp biết mức thay đổi chi phí, còn cực đại lợi nhuận cần hàm P=doanh thu R−chi phí C và giải P'=0 (kèm kiểm biên/đơn vị). Nếu đối tượng tối ưu là chi phí thấp nhất thì dùng C, nhưng không tráo với tối ưu doanh thu. Đọc đúng mục tiêu/giả thiết trước đạo hàm.
**Ví dụ có suy luận + lý do chọn phương pháp:** Giả sử R(q)=12q và C(q)=q²+2q+5 (nghìn đồng), q∈[0,8]. P=−q²+10q−5, P'=10−2q=0 tạiq=5; P(5)=20, P(0)=−5, P(8)=11 nên lợi nhuận lớn nhất20 (nghìn đồng) tạiq=5. C'(5)=12 không phải nghiệm tối ưu.
**Tự thử trước khi mở đối chiếu:** Với R=10q,C=q²+2q+1, q∈[0,6], q tối ưu lợi nhuận?
**Tự mở đối chiếu sau khi hoàn thành:** P=−q²+8q−1; P'=−2q+8=0⇒q=4; P(4)=15, biên P(0)=−1,P(6)=11.
**D6 — đường khắc phục:** Phải thiết lập P=R−C thay vì tối ưu trực tiếp C.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P35` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## TOP10-M36 · Tự phát hiện bẫy: miền, dấu, biên, giới hạn và đơn vị

**Outcome TOP10-O36:** Học sinh tự giải thích điều kiện và áp dụng đúng tự phát hiện bẫy: miền, dấu, biên, giới hạn và đơn vị.
**Vì sao cần?** Khi nhìn một lời giải 'đúng công thức', cần kiểm những sai sót nào?
**Tiền đề tại chỗ:** S1 B01–B05: domain, f', giới hạn, max/min, mô hình.
**Hình thành bản chất trước công thức:** Kiểm danh sách: D có đủ? bảng dấu bị nối qua điểm cấm không? f'=0 có đổi dấu không? giá trị biên có thuộc D không? TCD đã xét một phía chưa? lỗ khử có gọi nhầm đứng không? mục tiêu tối ưu có đúng/đơn vị? Biện luận rõ sẽ tránh các kết luận hấp dẫn nhưng sai.
**Ví dụ có suy luận + lý do chọn phương pháp:** Với f=1/x trên D=ℝ\{0}, f'<0 ở hai nhánh. Lời giải 'f nghịch biến trên D' là sai theo định nghĩa so mọi cặp: x₁=−1<x₂=1 nhưng f(x₁)=−1<f(x₂)=1. Sửa: nghịch biến trên từng khoảng (−∞,0),(0,∞).
**Tự thử trước khi mở đối chiếu:** f=(x²−1)/(x−1), x≠1, có TCD tại x=1 không?
**Tự mở đối chiếu sau khi hoàn thành:** Không, vì lim f=2 hữu hạn (lỗ).
**D6 — đường khắc phục:** Nếu chỉ nhìn mẫu bằng0, cần rút nhân tử trên miền bỏ điểm.
**Luyện tiếp đúng outcome:** `THPT-TOP10-P36` trong thư viện canonical PUBLIC; giải trước khi xem key/solution.

## D5 — bốn hình toán học gốc có hướng dẫn đọc

- **SVG01 `prototypes/thpt/visuals/THPT_TOPIC10_DERIVATIVE_SIGN_VARIATION_R01.svg`:** y=x³−3x, điểm cực đại (−1,2), cực tiểu (1,−2); bảng dấu f' từ dương→âm→dương; nét đồ thị phải phù hợp với bảng dấu, f' tại ±1 bằng0.
- **SVG02 `prototypes/thpt/visuals/THPT_TOPIC10_CLOSED_INTERVAL_EXTREMA_R01.svg`:** f=x²−2x trên [0,3], so f(0)=0, f(1)=−1, f(3)=3; min−1 nội miền, max3 tại đầu mút, không bỏ các đầu đoạn.
- **SVG03 `prototypes/thpt/visuals/THPT_TOPIC10_RATIONAL_ASYMPTOTES_R01.svg`:** y=(2x+1)/(x−1)=2+3/(x−1) với hai nhánh hai phía x=1; TCD x=1, TCN y=2; trục tung, miền và hướng ±∞ phải đúng dấu.
- **SVG04 `prototypes/thpt/visuals/THPT_TOPIC10_BOX_VOLUME_OPT_R01.svg`:** hộp từ tấm bìa 12×12 cm, x là kích thước vuông cắt, đáy(12−2x)², V=x(12−2x)², 0<x<6; chỉ x=2 cho thể tích lớn nhất128 cm³, x=6 là biên không hợp lệ.

## Mô hình tương tác học tập — `SPEC_ONLY`, không runtime

1. **Dấu đạo hàm và bảng biến thiên:** điều chỉnh hệ số trong đa thức bậc ba, chỉ hiện khoảng tăng/giảm sau khi học sinh đoán và nêu D. Các nghiệm f'=0 không nhất thiết là cực trị; kiểm đổi dấu. Đây chỉ là đặc tả tương tác tương lai.
2. **Đồ thị và tiệm cận:** thay các hệ số f=(ax+b)/(cx+d), tô hai nhánh miền, kiểm biểu thức khử được trước khi vẽ TCD; hiển thị giới hạn một phía, TCN; không nối qua điểm cấm.
3. **Hộp tối ưu:** thay x∈(0,6), mô tả kích thước đáy và thể tích, cho so V(x) và V(2), chặn biên vật lý, không gọi điều kiện x=6 là chiếc hộp hợp lệ.

# Luyện tập

Ngân hàng **42 PUBLIC canonical NEW** ở `prototypes/thpt/shared-items/Temp_TOPIC10_APPLIED_DERIVATIVE_NEW42_PUBLIC_CANONICAL_R01_20261112.md`: 36 Practice P01–P36, 6 Written W01–W06 (rubric /7); canonical chỉ một lần mỗi stem/key/solution/rubric. Bổ sung **78 canonical SGK PUBLIC references** ở `prototypes/thpt/shared-items/Temp_TOPIC10_APPLIED_DERIVATIVE_ORIGINAL78_SGK_CANONICAL_INDEX_R01_20261112.md`, không nhân bản nội dung, không chuyển nhãn SGK Core thành Core Topic. Mỗi trong 36 outcome có ít nhất một câu mới, các câu Written yêu cầu lập luận nhiều bước và xét điều kiện/bảng dấu/biên/đơn vị.

| Topic outcome | Học liệu độc lập | NEW practice | NEW Written |
|---|---|---|---|
| TOP10-O01 | Hiểu đồng biến, nghịch biến theo thứ tự đầu vào | THPT-TOP10-P01 | — |
| TOP10-O02 | Liên hệ dấu đạo hàm và chiều biến thiên | THPT-TOP10-P02 | — |
| TOP10-O03 | Tìm đúng miền và chia khoảng khi khảo sát | THPT-TOP10-P03 | — |
| TOP10-O04 | Cực trị địa phương qua đổi dấu | THPT-TOP10-P04 | THPT-TOP10-W01 |
| TOP10-O05 | Điểm f'=0 không đủ tạo cực trị | THPT-TOP10-P05 | — |
| TOP10-O06 | Ý nghĩa dấu đạo hàm trong chuyển động | THPT-TOP10-P06 | — |
| TOP10-O07 | Cực trị địa phương và giá trị lớn nhất/nhỏ nhất toàn cục | THPT-TOP10-P07 | — |
| TOP10-O08 | Liên tục trên đoạn đóng và tồn tại max/min | THPT-TOP10-P08 | — |
| TOP10-O09 | So điểm tới hạn, điểm không khả vi và hai đầu đoạn | THPT-TOP10-P09 | THPT-TOP10-W02 |
| TOP10-O10 | Cận trên trên miền mở không đồng nghĩa GTLN | THPT-TOP10-P10 | — |
| TOP10-O11 | Giá trị lớn nhất trên miền có ràng buộc | THPT-TOP10-P11 | — |
| TOP10-O12 | Thiết lập mô hình tối ưu trước khi lấy đạo hàm | THPT-TOP10-P12 | — |
| TOP10-O13 | Tiệm cận ngang: hành vi khi x→±∞ | THPT-TOP10-P13 | — |
| TOP10-O14 | Tiệm cận đứng: kiểm giới hạn một phía | THPT-TOP10-P14 | — |
| TOP10-O15 | Tiệm cận xiên từ phần dư →0 | THPT-TOP10-P15 | THPT-TOP10-W03 |
| TOP10-O16 | Lỗ khử được không phải tiệm cận đứng | THPT-TOP10-P16 | — |
| TOP10-O17 | Miền xác định quyết định từ phía nào lấy giới hạn | THPT-TOP10-P17 | — |
| TOP10-O18 | Đọc hình và phân biệt tiệm cận ngang/đứng/xiên | THPT-TOP10-P18 | — |
| TOP10-O19 | Quy trình khảo sát và vẽ đồ thị có kỷ luật | THPT-TOP10-P19 | — |
| TOP10-O20 | Khảo sát đa thức bậc ba bằng bảng dấu | THPT-TOP10-P20 | THPT-TOP10-W04 |
| TOP10-O21 | Khảo sát phân thức hữu tỉ có điểm cấm | THPT-TOP10-P21 | — |
| TOP10-O22 | Giao trục, giới hạn và điểm đặc biệt của đồ thị | THPT-TOP10-P22 | — |
| TOP10-O23 | Đối xứng tâm của đồ thị phân thức | THPT-TOP10-P23 | — |
| TOP10-O24 | Đọc bảng biến thiên để suy tính chất | THPT-TOP10-P24 | — |
| TOP10-O25 | Không nối các nhánh đồ thị qua điểm ngoài miền | THPT-TOP10-P25 | — |
| TOP10-O26 | Đạo hàm là tốc độ biến đổi cục bộ trong ứng dụng | THPT-TOP10-P26 | — |
| TOP10-O27 | Vận tốc có hướng, tốc độ và gia tốc | THPT-TOP10-P27 | — |
| TOP10-O28 | Chi phí cận biên và quyết định kinh tế | THPT-TOP10-P28 | — |
| TOP10-O29 | Xác định miền của mô hình tối ưu thực tế | THPT-TOP10-P29 | — |
| TOP10-O30 | Đạo hàm để tìm tối ưu trong miền | THPT-TOP10-P30 | THPT-TOP10-W05 |
| TOP10-O31 | Kiểm đầu mút, khả thi và đạt cực trị | THPT-TOP10-P31 | — |
| TOP10-O32 | Kiểm đơn vị, giả thiết và sai số của mô hình | THPT-TOP10-P32 | — |
| TOP10-O33 | Tổng hợp chiều biến thiên và cực trị | THPT-TOP10-P33 | — |
| TOP10-O34 | Tổng hợp tiệm cận và đọc đồ thị hữu tỉ | THPT-TOP10-P34 | — |
| TOP10-O35 | Kết hợp vận tốc/chi phí và bài toán tối ưu | THPT-TOP10-P35 | THPT-TOP10-W06 |
| TOP10-O36 | Tự phát hiện bẫy: miền, dấu, biên, giới hạn và đơn vị | THPT-TOP10-P36 | — |

**Lộ trình:** tự thử rồi luyện bài đúng outcome → tự mở đối chiếu và rubric khi đã làm → D6 sửa lỗi theo bản chất → làm bài khác cùng family, không lấy chỉ số lượng câu thay độ sâu. Tự luận Written/Anchor chỉ có một rubric dù đặt nhiều vị trí.

# Tự kiểm tra

**36 PUBLIC Self Check placements** tham chiếu lại chính 36 canonical `THPT-TOP10-P01` … `THPT-TOP10-P36` đã có ở Luyện tập, không tạo 36 item_id mới. Vì đáp án public có thể đã được xem, mode đúng là `CLIENT_SELF_CHECK_NO_MASTERY`, không phải `TOPIC_READINESS` độc lập, không cấp điểm chính thức và không ghi Skill Mastery.

**Đặc tả an toàn cho RELEASE:** trước **Final Submit**, không lộ đúng/sai, hint, đáp án, lời giải, rubric có key hoặc AI Tutor. Chỉ sau Submit người học mới được tự mở đối chiếu, xem D6; không cho kết quả tự đối chiếu ghi Mastery hay làm chứng cứ đánh giá độc lập. Đây là nội dung hợp đồng, không phải tuyên bố website đã thực hiện.

## Phụ lục AUTHORING — metadata không xuất cho học sinh

PACKET_ID: THPT-TOPIC10-APPLIED-DERIVATIVE-SURVEY-OPTIMIZATION-FULL-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
LEARNING_PATH: TOPIC
LESSON_IDS: TOP10-M01..TOP10-M36
OUTCOME_IDS: TOP10-O01..TOP10-O36
ORIGINAL_SGK_PUBLIC_CANONICAL: 78
ORIGINAL_SGK_OUTCOMES: 36
TOPIC_NEW_PRACTICE: 36
TOPIC_NEW_WRITTEN: 6
TOPIC_NEW_PUBLIC_CANONICAL: 42
TOTAL_PUBLIC_UNIQUE_CANONICAL: 120
PUBLIC_SELF_CHECK_REUSE_PLACEMENTS: 36
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_READINESS: NOT_CLAIMED
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
ORIGINAL78_INDEX_BLOB: ffaba90bddc47a1d86dd905535e37c07d22173d9
NEW42_BANK_BLOB: f8a8491f60168e07ccd77b5eea59d2f67198b05a

### Original 78 SGK public item_id — reference only
- THPT-G12-CHI-B01-C01
- THPT-G12-CHI-B01-C02
- THPT-G12-CHI-B01-C03
- THPT-G12-CHI-B01-C04
- THPT-G12-CHI-B01-P01
- THPT-G12-CHI-B01-P02
- THPT-G12-CHI-B01-P03
- THPT-G12-CHI-B01-P04
- THPT-G12-CHI-B01-A01
- THPT-G12-CHI-B01-W01
- THPT-G12-CHI-B01-W02
- THPT-G12-CHI-B02-C01
- THPT-G12-CHI-B02-C02
- THPT-G12-CHI-B02-C03
- THPT-G12-CHI-B02-C04
- THPT-G12-CHI-B02-P01
- THPT-G12-CHI-B02-P02
- THPT-G12-CHI-B02-P03
- THPT-G12-CHI-B02-P04
- THPT-G12-CHI-B02-P05
- THPT-G12-CHI-B02-A01
- THPT-G12-CHI-B02-W01
- THPT-G12-CHI-B02-W02
- THPT-G12-CHI-B03-C01
- THPT-G12-CHI-B03-C02
- THPT-G12-CHI-B03-C03
- THPT-G12-CHI-B03-C04
- THPT-G12-CHI-B03-P01
- THPT-G12-CHI-B03-P02
- THPT-G12-CHI-B03-P03
- THPT-G12-CHI-B03-P04
- THPT-G12-CHI-B03-P05
- THPT-G12-CHI-B03-P06
- THPT-G12-CHI-B03-P07
- THPT-G12-CHI-B03-A01
- THPT-G12-CHI-B03-W01
- THPT-G12-CHI-B03-W02
- THPT-G12-CHI-B04-C01
- THPT-G12-CHI-B04-C02
- THPT-G12-CHI-B04-C03
- THPT-G12-CHI-B04-C04
- THPT-G12-CHI-B04-P01
- THPT-G12-CHI-B04-P02
- THPT-G12-CHI-B04-P03
- THPT-G12-CHI-B04-P04
- THPT-G12-CHI-B04-P05
- THPT-G12-CHI-B04-P06
- THPT-G12-CHI-B04-A01
- THPT-G12-CHI-B04-A02
- THPT-G12-CHI-B04-W01
- THPT-G12-CHI-B04-W02
- THPT-G12-CHI-B05-C01
- THPT-G12-CHI-B05-C02
- THPT-G12-CHI-B05-C03
- THPT-G12-CHI-B05-C04
- THPT-G12-CHI-B05-P01
- THPT-G12-CHI-B05-P02
- THPT-G12-CHI-B05-P03
- THPT-G12-CHI-B05-P04
- THPT-G12-CHI-B05-P05
- THPT-G12-CHI-B05-P06
- THPT-G12-CHI-B05-A01
- THPT-G12-CHI-B05-A02
- THPT-G12-CHI-B05-A03
- THPT-G12-CHI-B05-W01
- THPT-G12-CHI-B05-W02
- THPT-G12-CHI-END-C01
- THPT-G12-CHI-END-C02
- THPT-G12-CHI-END-C03
- THPT-G12-CHI-END-C04
- THPT-G12-CHI-END-P01
- THPT-G12-CHI-END-P02
- THPT-G12-CHI-END-P03
- THPT-G12-CHI-END-P04
- THPT-G12-CHI-END-A01
- THPT-G12-CHI-END-A02
- THPT-G12-CHI-END-W01
- THPT-G12-CHI-END-W02

### NEW42 Topic public canonical item_id
- THPT-TOP10-P01
- THPT-TOP10-P02
- THPT-TOP10-P03
- THPT-TOP10-P04
- THPT-TOP10-P05
- THPT-TOP10-P06
- THPT-TOP10-P07
- THPT-TOP10-P08
- THPT-TOP10-P09
- THPT-TOP10-P10
- THPT-TOP10-P11
- THPT-TOP10-P12
- THPT-TOP10-P13
- THPT-TOP10-P14
- THPT-TOP10-P15
- THPT-TOP10-P16
- THPT-TOP10-P17
- THPT-TOP10-P18
- THPT-TOP10-P19
- THPT-TOP10-P20
- THPT-TOP10-P21
- THPT-TOP10-P22
- THPT-TOP10-P23
- THPT-TOP10-P24
- THPT-TOP10-P25
- THPT-TOP10-P26
- THPT-TOP10-P27
- THPT-TOP10-P28
- THPT-TOP10-P29
- THPT-TOP10-P30
- THPT-TOP10-P31
- THPT-TOP10-P32
- THPT-TOP10-P33
- THPT-TOP10-P34
- THPT-TOP10-P35
- THPT-TOP10-P36
- THPT-TOP10-W01
- THPT-TOP10-W02
- THPT-TOP10-W03
- THPT-TOP10-W04
- THPT-TOP10-W05
- THPT-TOP10-W06

END_AUTHOR_SOURCE: SOURCE_LOCKED_R01
