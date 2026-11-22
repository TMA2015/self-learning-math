# CĐ04 — Lũy thừa, Mũ và Lôgarit

**Hành trình học theo chuyên đề CĐ04/22 — độc lập với hành trình SGK.** Có đúng ba trang **Kiến thức / Luyện tập / Tự kiểm tra**, không sinh Topic Core riêng. Các mục tiêu xây từ ý nghĩa lũy thừa và logarit, liên hệ hàm số và mô hình, không phải thứ tự B18–B21 trong SGK lớp 11.

# Kiến thức

## Câu hỏi lớn: Một đại lượng được nhân lặp lại thì tìm 'bao nhiêu lần' như thế nào?

Cùng một số tiền hoặc số lượng nếu liên tục tăng theo tỉ lệ sẽ thay đổi theo **lũy thừa**. Muốn tìm số kỳ để đạt ngưỡng, ta cần phép **logarit** — thao tác tìm số mũ. Hai hàm mũ và logarit là hai mặt của cùng một quan hệ; đồ thị giải thích tính tăng giảm và vì sao bất phương trình có thể đổi chiều. Trong CĐ04, học sinh tự học từ khái niệm → điều kiện → suy luận → tự thử → luyện tập → tự đối chiếu.

**Cầu nối bắt buộc ngay trong chuyên đề:** số thực ℝ, phép nhân, phân số và số mũ nguyên; căn bậc chẵn không âm; giải phương trình bậc nhất/bậc hai và dấu tích; điểm trên trục tọa độ; phần trăm và đại lượng theo kỳ. Các tiền đề được nhắc và dùng lại ngay ở module liên quan, không bắt người học sang SGK để tiếp tục.

**Điều kiện nền:** Với lũy thừa số mũ thực và logarit trong CĐ04, dùng cơ số a>0; log_a b còn yêu cầu a≠1 và b>0. Riêng biểu thức có phép chia phải bảo đảm mẫu khác 0; phương trình/bất phương trình chứa log còn cần điều kiện từng đối số dương trước khi giải. Không suy rộng quy tắc a^x cho mọi cơ số âm với x thực.

## Sơ đồ mạch tư duy

**Lũy thừa:** số mũ nguyên → căn/số mũ hữu tỉ → số mũ thực → luật biến đổi. **Lôgarit:** tìm số mũ → miền xác định → quy tắc log → đổi cơ số. **Hàm và phương trình:** hàm mũ/log, đơn điệu và hàm ngược → phương trình → bất phương trình → mô hình tăng trưởng/suy giảm và bài tổng hợp. Các phần này tự đủ; các liên kết sang CĐ05 (hàm số tổng quát) và CĐ03 (phương trình nền) chỉ là hỗ trợ.

## TOP04-M01 · Số mũ nguyên, số 0 và số mũ âm

**Outcome `TOP04-O01`:** Giải thích a^0 và a^(−n), phân biệt số âm với số mũ âm.
**Vì sao cần học?** Các số rất lớn hoặc rất nhỏ cần biểu diễn gọn; số mũ âm không có nghĩa là kết quả âm.
**Nhắc tiền đề tại chỗ:** Nhân các số cùng cơ số, phân số và phép chia cho 0.
**Hình thành bản chất trước công thức:** Với a≠0, a^0=1 và a^(−n)=1/a^n (n nguyên dương); a^n với n nguyên dương là tích n thừa số. Vì nghịch đảo không thể có mẫu 0, 0^(−n) vô nghĩa. Kí hiệu khoa học có phần hệ số 1≤|c|<10.
**Ví dụ giải có lý do chọn phương pháp:** (2/3)^(−2)=(3/2)²=9/4, là số dương. 0,0000075=7,5·10^(−6); không được lẫn 75·10^(−7) có cùng giá trị nhưng không là kí hiệu chuẩn.
**Tự thử trước khi mở đối chiếu:** Tính 5^(−2)·25 và nói 0^(−1) có nghĩa không.
**Tự mở đối chiếu sau khi đã thử:** 5^(−2)=1/25, nhân 25 được 1; 0^(−1) không có nghĩa do mẫu 0.
**D6 — nếu còn vướng:** Nếu cho dấu âm trước kết quả, tách −a^n khỏi a^(−n) và viết lại dạng nghịch đảo.
**Họ dạng kỹ năng:** `POWER-INTEGER-ZERO-NEGATIVE`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B18-C01`; `THPT-G11-CHVI-B18-C03`; `THPT-G11-CHVI-B18-P07`; `THPT-TOP04-P01`.

## TOP04-M02 · Căn bậc n và số mũ hữu tỉ

**Outcome `TOP04-O02`:** Phân biệt căn số học và nghiệm phương trình lũy thừa.
**Vì sao cần học?** Một phương trình x⁴=c có thể có hai nghiệm, trong khi ký hiệu căn bậc bốn chỉ cho một giá trị không âm.
**Nhắc tiền đề tại chỗ:** Căn bậc hai số học, nhân lũy thừa số nguyên.
**Hình thành bản chất trước công thức:** Với a>0, a^(m/n)=(ⁿ√a)^m (n nguyên dương), a^(−m/n)=1/a^(m/n). Căn bậc **chẵn** của a≥0 lấy căn không âm; căn bậc lẻ của số âm tồn tại. Với cơ số âm, không áp dụng tùy tiện bộ luật **số mũ thực của cơ số dương** sang mọi phân số.
**Ví dụ giải có lý do chọn phương pháp:** 81^(3/4)=(⁴√81)³=3³=27. Nhưng ⁴√16=2 còn x⁴=16 có x=±2; lý do là ký hiệu căn và tập nghiệm phương trình có vai trò khác nhau.
**Tự thử trước khi mở đối chiếu:** Tính 27^(2/3) và ³√(−27).
**Tự mở đối chiếu sau khi đã thử:** 27^(2/3)=3²=9; ³√(−27)=−3 vì (−3)³=−27.
**D6 — nếu còn vướng:** Nếu chỉ nhận nghiệm dương khi giải x⁴=16, thử số đối; nếu đổi dấu căn bậc chẵn, nhớ căn số học ≥0.
**Họ dạng kỹ năng:** `ROOT-PARITY-RATIONAL`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B18-C02`; `THPT-G11-CHVI-B18-C05`; `THPT-G11-CHVI-B18-P02`; `THPT-G11-CHVI-B18-P03`; `THPT-TOP04-P02`.

## TOP04-M03 · Lũy thừa số mũ thực: hình thành liên tục

**Outcome `TOP04-O03`:** Hiểu vì sao 2^(√2) xác định và so sánh khi số mũ không hữu tỉ.
**Vì sao cần học?** Số mũ thực mô tả tăng trưởng theo thời gian không nguyên; không thể chỉ hiểu là ‘nhân số nguyên lần’.
**Nhắc tiền đề tại chỗ:** Lũy thừa hữu tỉ của cơ số dương, ý niệm xấp xỉ số thực.
**Hình thành bản chất trước công thức:** Với a>0 và x vô tỉ, a^x được định nghĩa nhất quán từ các lũy thừa hữu tỉ a^r khi r xấp xỉ x, qua giới hạn. Điều này không có nghĩa nhân a đúng ‘√2 lần’. Tính đơn điệu phụ thuộc cơ số a>1 hay 0<a<1; cơ số âm không mặc nhiên có a^x trên mọi x thực.
**Ví dụ giải có lý do chọn phương pháp:** Vì √2<3/2 và 2>1, 2^(√2)<2^(3/2); còn vì 0<1/2<1, (1/2)^(√2)>(1/2)^(3/2). Cùng số mũ nhưng hai cơ số cho chiều ngược.
**Tự thử trước khi mở đối chiếu:** So sánh (1/3)^(√3) với (1/3)^2.
**Tự mở đối chiếu sau khi đã thử:** √3<2; cơ số 1/3 làm hàm nghịch biến nên (1/3)^(√3)>(1/3)^2.
**D6 — nếu còn vướng:** Nếu đảo dấu sai, dùng x=0 và x=1 để quan sát 1 và cơ số a; quay M10 kiểm tính tăng/giảm.
**Họ dạng kỹ năng:** `REAL-EXPONENT-INTERPOLATION`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B18-C04`; `THPT-TOP04-P03`; `THPT-TOP04-P04`.

## TOP04-M04 · Quy tắc lũy thừa và điều kiện của từng phép

**Outcome `TOP04-O04`:** Rút gọn biểu thức lũy thừa không làm mất điều kiện.
**Vì sao cần học?** Nén nhiều phép nhân/chia bằng quy tắc số mũ rất nhanh, nhưng rút gọn xong không được quên giá trị ban đầu vô nghĩa.
**Nhắc tiền đề tại chỗ:** Cộng/trừ số mũ hữu tỉ, mẫu số khác 0.
**Hình thành bản chất trước công thức:** Với a>0, a^r a^s=a^(r+s), a^r/a^s=a^(r−s), (a^r)^s=a^(rs). Với biểu thức gốc có chia/căn thì kiểm điều kiện trước; không có quy tắc a^r+a^s=a^(r+s).
**Ví dụ giải có lý do chọn phương pháp:** E=a^(3/2)·a^(−1/2)/a=a^(3/2−1/2−1)=a^0=1 khi a>0. Không nhận a=0 dù kết quả rút gọn là 1, vì biểu thức gốc chia cho a.
**Tự thử trước khi mở đối chiếu:** Với a>0, rút gọn a^(3/4)·a^(−1/4)/√a.
**Tự mở đối chiếu sau khi đã thử:** Bằng a^(3/4−1/4−1/2)=1; giữ a>0 để mẫu và mũ hữu tỉ được xác định.
**D6 — nếu còn vướng:** Nếu cộng số mũ cho phép **cộng** hai lũy thừa, thử 2²+2³=12 khác 2⁵=32.
**Họ dạng kỹ năng:** `POWER-LAW-CAVEATS`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B18-P01`; `THPT-G11-CHVI-B18-P04`; `THPT-G11-CHVI-B18-P06`; `THPT-G11-CHVI-B18-W01`; `THPT-TOP04-P05`; `THPT-TOP04-W01`.

## TOP04-M05 · Logarit là tìm số mũ ngược

**Outcome `TOP04-O05`:** Giải thích log_a b như thao tác ngược của a^x.
**Vì sao cần học?** Biết số ban đầu và số cuối, ta muốn biết cần bao nhiêu lần nhân theo tỉ lệ a.
**Nhắc tiền đề tại chỗ:** Hàm mũ cơ số dương, tính đơn ánh của a^x khi a≠1.
**Hình thành bản chất trước công thức:** Với a>0, a≠1 và b>0, log_a b là số y duy nhất sao cho a^y=b. Do đó log_a1=0, log_a a=1; log_a b có thể âm nhưng b **không** thể âm. Đừng học công thức log trước khi hiểu câu hỏi ‘số mũ nào?’.
**Ví dụ giải có lý do chọn phương pháp:** log₂(1/8)=−3 vì 2^(−3)=1/8. Dấu âm nằm ở **số mũ được tìm**, không phải ở đối số 1/8>0.
**Tự thử trước khi mở đối chiếu:** Tính log₄(1/8).
**Tự mở đối chiếu sau khi đã thử:** Vì 4^(−3/2)=1/8 nên log₄(1/8)=−3/2.
**D6 — nếu còn vướng:** Nếu nhầm log_a(−b) với số âm, kiểm log có nghĩa chỉ khi đối số >0; luyện P06 và các câu B19-C01/C02.
**Họ dạng kỹ năng:** `LOG-DEFINITION`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B19-C01`; `THPT-G11-CHVI-B19-C02`; `THPT-G11-CHVI-B19-P03`; `THPT-TOP04-P06`.

## TOP04-M06 · Miền xác định của lôgarit và lỗi tách log tích

**Outcome `TOP04-O06`:** Một tích dương không bảo đảm từng thừa số dương.
**Vì sao cần học?** Nếu biến đổi log tích thành tổng log mà chưa xét miền, có thể đánh mất nghiệm hợp lệ.
**Nhắc tiền đề tại chỗ:** Dấu tích hai nhân tử và bất phương trình bậc hai của tiền đề đã giải thích lại ở đây.
**Hình thành bản chất trước công thức:** Để log_a[F(x)] tồn tại trên ℝ cần a>0, a≠1 và F(x)>0. Quy tắc log_a(uv)=log_a u+log_a v đòi **u>0 và v>0**, mạnh hơn uv>0. Vì vậy với log_a[(x−1)(x−4)], miền x<1 hoặc x>4, nhưng chỉ tách thành tổng log thực trên x>4.
**Ví dụ giải có lý do chọn phương pháp:** Với x=0: (x−1)(x−4)=4>0 nên log₂4 có nghĩa, còn log₂(−1) và log₂(−4) không. Hình dung hai điểm âm nhân lại dương không làm log từng số âm có nghĩa.
**Tự thử trước khi mở đối chiếu:** Tìm miền của log₂(x²−9); tách log₂(x−3)+log₂(x+3) trên mọi miền đó được không?
**Tự mở đối chiếu sau khi đã thử:** Miền x<−3 hoặc x>3, nhưng hai log riêng cùng có nghĩa chỉ khi x>3.
**D6 — nếu còn vướng:** Nếu mắc lỗi ‘log của tích’ trên toàn miền, lấy x=−4 làm phản ví dụ; luyện P07/P08 và câu Written nguồn B19.
**Họ dạng kỹ năng:** `LOG-DOMAIN-AND-SPLITTING`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B19-C03`; `THPT-G11-CHVI-B19-P04`; `THPT-G11-CHVI-B19-W01`; `THPT-TOP04-P07`; `THPT-TOP04-P08`.

## TOP04-M07 · Quy tắc logarit suy ra từ luật số mũ

**Outcome `TOP04-O07`:** Dùng đúng log của tích, thương, lũy thừa.
**Vì sao cần học?** Làm việc với những số rất lớn sẽ dễ hơn khi tích biến thành tổng, nhưng phép biến đổi có điều kiện.
**Nhắc tiền đề tại chỗ:** Tính chất a^r·a^s=a^(r+s), b>0.
**Hình thành bản chất trước công thức:** Với a>0,a≠1,x>0,y>0: log_a(xy)=log_a x+log_a y, log_a(x/y)=log_a x−log_a y, log_a(x^r)=r log_a x (x>0). Chúng đúng vì lấy log hai vế của các tích lũy thừa dương, không phải công thức thuộc lòng không điều kiện.
**Ví dụ giải có lý do chọn phương pháp:** log₃81−log₃3=log₃(81/3)=log₃27=3. Trừ hai log là log **thương**, không phải log(81−3).
**Tự thử trước khi mở đối chiếu:** Tính log₂24−log₂3.
**Tự mở đối chiếu sau khi đã thử:** log₂(24/3)=log₂8=3 vì hai đối số dương và 2³=8.
**D6 — nếu còn vướng:** Nếu viết log(x+y)=log x+log y, thử x=y=1: log2≠0; phân biệt tổng với tích.
**Họ dạng kỹ năng:** `LOG-ALGEBRA-RULES`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B19-P01`; `THPT-G11-CHVI-B19-P02`; `THPT-G11-CHVI-B19-W02-ANCHOR`; `THPT-TOP04-P09`.

## TOP04-M08 · Đổi cơ số và đọc log cơ số nhỏ hơn 1

**Outcome `TOP04-O08`:** Chuyển một log lạ về cơ số quen mà không sai dấu.
**Vì sao cần học?** Máy tính thường chỉ có log thập phân hoặc ln; cần biết phép đổi cơ số và điều kiện.
**Nhắc tiền đề tại chỗ:** Định nghĩa log, cơ số a>0,a≠1, đối số b>0.
**Hình thành bản chất trước công thức:** Đặt t=log_a b thì a^t=b. Lấy ln hai vế: t ln a=ln b ⇒ log_a b=(ln b)/(ln a); ln a≠0 do a≠1. Khi 0<a<1, ln a âm; log_a b vẫn có nghĩa với b>0 và có thể dương hoặc âm.
**Ví dụ giải có lý do chọn phương pháp:** log₄8=ln8/ln4=3/2; log_(1/9)3=−1/2 vì (1/9)^(−1/2)=3. Điều kiện từng cơ số và đối số đều đúng.
**Tự thử trước khi mở đối chiếu:** Tính log₈2 bằng đổi cơ số.
**Tự mở đối chiếu sau khi đã thử:** ln2/ln8=1/3 (hoặc 8^(1/3)=2).
**D6 — nếu còn vướng:** Nếu tính log_(1/9)3=+1/2, kiểm cơ số nhỏ 1 và thử lũy thừa.
**Họ dạng kỹ năng:** `BASE-CHANGE`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B19-P05`; `THPT-TOP04-P10`; `THPT-TOP04-P11`; `THPT-TOP04-W02`.

## TOP04-M09 · Hàm số mũ là mô hình ‘nhân theo thời gian’

**Outcome `TOP04-O09`:** Đọc tập xác định, giá trị, điểm, tiệm cận qua ý nghĩa lũy thừa.
**Vì sao cần học?** Số lượng thay đổi theo tỉ lệ không đổi khác với tăng thêm số lượng tuyệt đối mỗi kỳ.
**Nhắc tiền đề tại chỗ:** Số mũ thực cơ số dương và vị trí các điểm trên mặt phẳng tọa độ.
**Hình thành bản chất trước công thức:** Với a>0,a≠1, f(x)=a^x có miền ℝ và giá trị (0,+∞), qua (0,1), (1,a), luôn dương. Khi a>1, f(x)→0 khi x→−∞; khi 0<a<1, f(x)→0 khi x→+∞. Trục Ox là tiệm cận ngang; hàm không cắt Ox.
**Ví dụ giải có lý do chọn phương pháp:** f(x)=(1/3)^x: f(−1)=3, f(0)=1, f(1)=1/3; các điểm giảm khi x tăng. Chọn bảng ba điểm vì nó nối được đồ thị và mô hình giảm theo tỉ lệ.
**Tự thử trước khi mở đối chiếu:** Cho f(x)=2^x, có x thực nào để f(x)=0 không?
**Tự mở đối chiếu sau khi đã thử:** Không: 2^x>0 mọi x∈ℝ, chỉ tiến dần về 0 khi x→−∞.
**D6 — nếu còn vướng:** Nếu nhầm số rất nhỏ với 0, thử x=−10 và viết 2^(−10)=1/1024>0.
**Họ dạng kỹ năng:** `EXP-DOMAIN-RANGE-GRAPH`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B20-C01`; `THPT-TOP04-P12`; `THPT-TOP04-P13`.

## TOP04-M10 · Cơ số quyết định tính đơn điệu của hàm mũ

**Outcome `TOP04-O10`:** So sánh số mũ và giải thích khi nào đảo chiều.
**Vì sao cần học?** Đưa bất phương trình về so số mũ chỉ đúng nếu biết hàm tăng hay giảm.
**Nhắc tiền đề tại chỗ:** Các giá trị a^0=1,a^1=a và khái niệm hàm đơn điệu.
**Hình thành bản chất trước công thức:** Với a>1, a^x tăng nghiêm ngặt; với 0<a<1, a^x giảm nghiêm ngặt. Nếu a^u>a^v thì u>v khi a>1, nhưng u<v khi 0<a<1. Bản chất: tăng một đơn vị số mũ sẽ nhân giá trị với a; nhân số >1 làm lớn, nhân số nằm (0,1) làm nhỏ.
**Ví dụ giải có lý do chọn phương pháp:** Vì (1/4)^0=1 và (1/4)^1=1/4 nên cơ số 1/4 giảm theo số mũ. Do −1<2, (1/4)^(−1)=4>(1/4)^2=1/16.
**Tự thử trước khi mở đối chiếu:** So (1/5)^(−1) và (1/5)^2.
**Tự mở đối chiếu sau khi đã thử:** 5>1/25; số mũ −1 nhỏ hơn 2 nhưng cơ số giảm làm giá trị lớn hơn.
**D6 — nếu còn vướng:** Nếu luôn giữ dấu so sánh khi bỏ mũ, vẽ hai điểm 0,1 trên đồ thị để sửa.
**Họ dạng kỹ năng:** `EXP-MONOTONIC`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B20-C02`; `THPT-G11-CHVI-B20-P02`; `THPT-TOP04-P14`.

## TOP04-M11 · Hàm số logarit là mô hình ‘tìm số mũ’

**Outcome `TOP04-O11`:** Đọc miền, tập giá trị, đồ thị và tính tăng giảm của log.
**Vì sao cần học?** Nếu hàm mũ biến thời gian thành lượng, logarit giúp biến lượng thành thời gian cần thiết.
**Nhắc tiền đề tại chỗ:** Định nghĩa log, cơ số a>0,a≠1 và đường thẳng x=0.
**Hình thành bản chất trước công thức:** Với a>0,a≠1, g(x)=log_a x có miền (0,+∞), giá trị ℝ, qua (1,0) và (a,1); x=0 là tiệm cận đứng. Hàm tăng nếu a>1, giảm nếu 0<a<1. Không có điểm đồ thị với x≤0.
**Ví dụ giải có lý do chọn phương pháp:** g(x)=log_(1/2)x: g(1/4)=2, g(4)=−2; từ x=1/4 sang x=4 giá trị giảm, phản ánh cơ số nhỏ hơn 1.
**Tự thử trước khi mở đối chiếu:** Với y=log₂x, giá trị tại x=1/8 và x=8 là gì?
**Tự mở đối chiếu sau khi đã thử:** log₂(1/8)=−3, log₂8=3, hàm tăng vì cơ số 2>1.
**D6 — nếu còn vướng:** Nếu đặt điểm x=0 lên đồ thị log, hỏi cơ số nào lũy thừa ra 0 (không có).
**Họ dạng kỹ năng:** `LOG-FUNCTION-MONOTONIC`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B20-C03`; `THPT-G11-CHVI-B20-P01`; `THPT-G11-CHVI-B20-P03`; `THPT-TOP04-P15`.

## TOP04-M12 · Hai hàm mũ và logarit ngược nhau

**Outcome `TOP04-O12`:** Đọc đồ thị đối xứng qua y=x, không nhầm hoán đổi miền.
**Vì sao cần học?** Liên kết hai khái niệm thành một thao tác thuận và thao tác ngược để giải phương trình.
**Nhắc tiền đề tại chỗ:** Khái niệm hàm ngược, tọa độ điểm (x,y).
**Hình thành bản chất trước công thức:** Với a>0,a≠1, f(x)=a^x là một-một từ ℝ đến (0,+∞), g(x)=log_a x là hàm ngược từ (0,+∞) về ℝ. Nếu (u,v) trên f thì (v,u) trên g; đồ thị đối xứng qua y=x. g(f(x))=x với mọi x thực, còn f(g(x))=x chỉ với x>0.
**Ví dụ giải có lý do chọn phương pháp:** 2^(−1)=1/2, nên f có (−1,1/2), g có (1/2,−1). Đây là hoán đổi chỗ input/output, không phải phép đổi dấu.
**Tự thử trước khi mở đối chiếu:** Cho f(x)=3^x. Điểm (1,3) trên f tương ứng điểm nào trên log₃x?
**Tự mở đối chiếu sau khi đã thử:** (3,1) vì log₃3=1.
**D6 — nếu còn vướng:** Nếu dùng log₃(−3) để đảo hàm, kiểm miền log phải dương; luyện P16 và các Written cũ B20.
**Họ dạng kỹ năng:** `INVERSE-GRAPH`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B20-C04`; `THPT-G11-CHVI-B20-P04`; `THPT-G11-CHVI-B20-W01`; `THPT-G11-CHVI-B20-W02-ANCHOR`; `THPT-TOP04-P16`.

## TOP04-M13 · Phương trình mũ: một-một và đặt ẩn có điều kiện

**Outcome `TOP04-O13`:** Giải bằng đưa về cùng cơ số, nêu giới hạn của đặt t=a^x.
**Vì sao cần học?** Muốn tìm thời gian hoặc giá trị x khi lượng a^x đạt ngưỡng, cần giải phương trình mũ chứ không phỏng đoán.
**Nhắc tiền đề tại chỗ:** a>0,a≠1, hàm mũ đơn ánh, giải phương trình bậc hai.
**Hình thành bản chất trước công thức:** a^u=a^v ⇔ u=v với a>0,a≠1. Nếu phải đặt t=a^x, luôn ghi t>0; nghiệm t≤0 phải loại trước khi quay lại x. Đưa về cùng cơ số là phương pháp cơ bản SGK B21; đặt ẩn phụ là **mở rộng có điều kiện của CĐ04**, không gán cho bản SGK review cũ.
**Ví dụ giải có lý do chọn phương pháp:** 4^x=2^(x+3) ⇒ 2^(2x)=2^(x+3) ⇒ 2x=x+3 ⇒ x=3. Nếu có 9^x−4·3^x+3=0, t=3^x>0 cho t=1,3 ⇒ x=0,1.
**Tự thử trước khi mở đối chiếu:** Giải 2^(2x)=8·2^x.
**Tự mở đối chiếu sau khi đã thử:** 2^(2x)=2^(x+3) ⇒ x=3; 2^x>0 nên có thể chia cho 2^x nếu muốn.
**D6 — nếu còn vướng:** Nếu đặt t=3^x mà nhận t âm, kiểm t>0; luyện P17 và bài SGK B21-C01.
**Họ dạng kỹ năng:** `EXP-EQUATIONS`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B21-C01`; `THPT-G11-CHVI-B21-P01`; `THPT-G11-CHVI-B21-P07`; `THPT-TOP04-P17`.

## TOP04-M14 · Phương trình logarit: xác định trước, biến đổi sau

**Outcome `TOP04-O14`:** Loại nghiệm đại số không thuộc miền log.
**Vì sao cần học?** Một phương trình đa thức sau gộp log có thể sinh nghiệm âm, nhưng log không có đối số âm.
**Nhắc tiền đề tại chỗ:** Miền F(x)>0 và tính đơn ánh log_a.
**Hình thành bản chất trước công thức:** log_a U=log_a V ⇔ U=V **trong miền U>0,V>0**, a>0,a≠1. Khi cộng các log, chỉ gộp nếu từng đối số dương. Giải phương trình đại số thu được ứng viên, kiểm vào miền/đề gốc, đặc biệt khi bình phương hay đưa về tích.
**Ví dụ giải có lý do chọn phương pháp:** log₂(x−1)+log₂(x+1)=3: miền x>1. (x−1)(x+1)=8 ⇒ x=±3, chỉ x=3 thỏa. Kiểm log₂2+log₂4=1+2=3.
**Tự thử trước khi mở đối chiếu:** Giải log₂(x−2)+log₂(x+2)=3.
**Tự mở đối chiếu sau khi đã thử:** Điều kiện x>2. x²−4=8 ⇒ x=±2√3, chỉ +2√3 thỏa vì >2.
**D6 — nếu còn vướng:** Nếu dùng x âm từ phương trình bình phương, thay vào từng đối số; luyện P18/W03 và Written nguồn B19.
**Họ dạng kỹ năng:** `LOG-EQUATIONS-DOMAIN`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B21-C02`; `THPT-G11-CHVI-B21-P02`; `THPT-TOP04-P18`; `THPT-TOP04-W03`.

## TOP04-M15 · Bất phương trình mũ với hai loại cơ số

**Outcome `TOP04-O15`:** Chọn chiều của bất phương trình dựa trên cơ số.
**Vì sao cần học?** Giải một bất phương trình mũ có thể nhanh bằng so số mũ, nhưng dấu so sánh sai làm đổi toàn bộ tập nghiệm.
**Nhắc tiền đề tại chỗ:** Tính đơn điệu a^x, chuyển vế bất phương trình bậc nhất.
**Hình thành bản chất trước công thức:** Với a>1, a^u≤a^v ⇔ u≤v; với 0<a<1, a^u≤a^v ⇔ u≥v. Không thể so trực tiếp hai số mũ nếu cơ số khác nhau mà chưa quy về cùng cơ số một cách hợp lệ.
**Ví dụ giải có lý do chọn phương pháp:** (1/2)^(x−2)<(1/2)^1 ⇔ x−2>1 (đảo chiều vì cơ số nhỏ hơn 1) ⇔ x>3. Thử x=4: (1/2)^2=1/4<1/2 đúng.
**Tự thử trước khi mở đối chiếu:** Giải (1/3)^(2x−1)≥(1/3)^(x+2).
**Tự mở đối chiếu sau khi đã thử:** Nghịch biến nên 2x−1≤x+2 ⇒ x≤3, lấy dấu bằng tại x=3.
**D6 — nếu còn vướng:** Nếu giữ chiều khi cơ số nhỏ hơn 1, kiểm x=4; luyện P19 và 2 câu gốc B21 bất phương trình mũ.
**Họ dạng kỹ năng:** `EXP-INEQUALITIES`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B21-C03`; `THPT-G11-CHVI-B21-P03`; `THPT-TOP04-P19`.

## TOP04-M16 · Bất phương trình logarit: dấu và miền phải đi cùng nhau

**Outcome `TOP04-O16`:** Giải đủ tập giao của điều kiện log và phép so đối số.
**Vì sao cần học?** Dù đã đảo chiều bất phương trình đúng, vẫn có thể nhận điểm ngoài miền log nếu không giao tập nghiệm.
**Nhắc tiền đề tại chỗ:** Điều kiện log U, log V dương; tính tăng/giảm log.
**Hình thành bản chất trước công thức:** Với a>1: log_a U≤log_a V ⇔ U≤V khi U,V>0. Với 0<a<1: log_a U≤log_a V ⇔ U≥V khi U,V>0. Kết luận là giao với điều kiện; các mốc khiến đối số bằng 0 luôn **loại**.
**Ví dụ giải có lý do chọn phương pháp:** log_(1/2)(x−1)≤log_(1/2)(5−x): miền 1<x<5; nghịch biến ⇒ x−1≥5−x ⇒ x≥3; giao được [3,5), không nhận 5.
**Tự thử trước khi mở đối chiếu:** Giải log_(1/3)(x+1)>log_(1/3)4.
**Tự mở đối chiếu sau khi đã thử:** Miền x>−1; log giảm nên x+1<4 ⇒ x<3; S=(−1,3).
**D6 — nếu còn vướng:** Nếu không loại 5 trong ví dụ, kiểm log(0) vô nghĩa; xem SVG miền mới và luyện P20.
**Họ dạng kỹ năng:** `LOG-INEQUALITIES`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B21-C04`; `THPT-G11-CHVI-B21-P04`; `THPT-TOP04-P20`.

## TOP04-M17 · Mô hình nhân theo chu kỳ và tìm ngưỡng thời gian

**Outcome `TOP04-O17`:** Lập A(n)=A₀q^n, phân biệt tăng, giảm và nghiệm nguyên.
**Vì sao cần học?** Bài toán lãi kép, giá trị giảm dần hay số lượng quần thể đều liên quan nhân theo tỉ lệ, không cộng lượng cố định.
**Nhắc tiền đề tại chỗ:** Phần trăm, lũy thừa, logarit và n nguyên không âm cho số kỳ.
**Hình thành bản chất trước công thức:** Nếu mỗi kỳ nhân q>0 và ban đầu A₀>0 thì A(n)=A₀q^n, n nguyên≥0; q>1 tăng, 0<q<1 giảm. Để tìm kỳ đầu tiên đạt ngưỡng dùng log với đúng dấu của ln q, sau đó kiểm các kỳ nguyên kề nhau. Mô hình giả định q không đổi và n nguyên, không tự chứng minh thực tế sẽ tuân chính xác.
**Ví dụ giải có lý do chọn phương pháp:** 200 triệu đồng lãi gộp 5%/năm, sau 2 năm có 200·1,05²=220,5 triệu. Nếu 100 triệu tăng 8%/năm và muốn vượt 125 triệu: n>ln1,25/ln1,08≈2,8994, nên năm nguyên nhỏ nhất n=3.
**Tự thử trước khi mở đối chiếu:** Với số lượng 500 giảm 20% mỗi kỳ, tính sau 3 kỳ theo mô hình.
**Tự mở đối chiếu sau khi đã thử:** N(3)=500·0,8³=256. Giảm 20% trên số còn lại mỗi kỳ, không trừ 100 cố định mỗi lần.
**D6 — nếu còn vướng:** Nếu tăng/giảm tuyến tính theo số cộng, kiểm tỷ lệ thực mỗi năm; luyện P21/W04 và câu SGK B18-P05.
**Họ dạng kỹ năng:** `EXP-LOG-MODELS`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B18-P05`; `THPT-G11-CHVI-B19-P06`; `THPT-G11-CHVI-B21-P06`; `THPT-G11-CHVI-B18-W02-ANCHOR`; `THPT-G11-CHVI-B21-W02-ANCHOR`; `THPT-TOP04-P21`; `THPT-TOP04-W04`.

## TOP04-M18 · Kỹ thuật tích hợp: điều kiện trước phép biến đổi

**Outcome `TOP04-O18`:** Chọn đúng phương pháp theo dấu/miền và đánh giá nghiệm.
**Vì sao cần học?** Đề tổng hợp không nói sẵn dùng luật nào; học sinh cần tự phát hiện miền, biến đổi và kiểm nghiệm.
**Nhắc tiền đề tại chỗ:** Quy tắc lũy thừa, log domain, so số mũ và giải bậc hai.
**Hình thành bản chất trước công thức:** Đọc bài theo chuỗi: xác định a>0,a≠1; từng log đối số>0; chọn quy tắc/hàm đơn ánh; giải ứng viên; giao mọi miền; thử nghiệm. Không trộn điều kiện của mô hình lãi kép với điều kiện log, hoặc cho rằng tự kiểm tra công khai thay cho Readiness độc lập.
**Ví dụ giải có lý do chọn phương pháp:** log₂(x²−1)=log₂(3x+3): miền x²−1>0 và 3x+3>0 ⇒ x>1. Đồng nhất đối số cho x²−3x−4=0 ⇒ x=4 hoặc −1; x=−1 sai miền. Nghiệm x=4, thử hai đối số bằng 15.
**Tự thử trước khi mở đối chiếu:** Giải log₂(x−2)+log₂(x+2)=3 và kiểm miền.
**Tự mở đối chiếu sau khi đã thử:** Miền x>2, bình phương cho x=±2√3; chỉ nhận x=2√3. Thử tích (x−2)(x+2)=8.
**D6 — nếu còn vướng:** Nếu mắc lỗi gộp log tích không có điều kiện, quay M06; nếu đảo dấu sai, quay M10/M16; dùng câu P22 khác để luyện.
**Họ dạng kỹ năng:** `INTEGRATED-CONDITION-CHECK`.
**Câu luyện tập được nối theo outcome (một source canonical/câu):** `THPT-G11-CHVI-B21-P05`; `THPT-G11-CHVI-B21-P08`; `THPT-G11-CHVI-B21-W01`; `THPT-TOP04-P22`.

## Hình và cách đọc đúng (5 SVG thật, không thay chứng minh)

- [Số mũ chuyển từ âm qua 0 sang dương](../../content-drafts/svg/FIG-G11-CHVI-B18-01_R00.svg) — Git blob `79528bcd2c87eb40b1b54f18c697b0ae3458e642`. Đọc 2^x ở các mốc x=−2,−1,0,1,2; thấy x tăng và đồ thị tăng, 2^x luôn dương; điểm x=1/2 cho √2.
- [Logarit là phép tìm ngược số mũ](../../content-drafts/svg/FIG-G11-CHVI-B19-01_R00.svg) — Git blob `fe2895ac101dcc4cf4046d57428181ad0f448dc8`. Theo hai chiều 2³=8 ↔ log₂8=3; ghi điều kiện a>0, a≠1, b>0 trước khi áp dụng.
- [Hai đồ thị hàm ngược](../../content-drafts/svg/FIG-G11-CHVI-B20-01_R00.svg) — Git blob `64bcb465bd6d809095a4ca2b910555e314badb69`. Hoán đổi tọa độ điểm (x,y)↔(y,x), đối xứng qua y=x; không bỏ miền x>0 của log.
- [Hàm mũ tăng và giảm khi đổi cơ số](../../content-drafts/svg/FIG-G11-CHVI-B21-01_R00.svg) — Git blob `6d43f842d096b974eb70af21e6751f1ec70eea00`. Đọc đường 2^x và (1/2)^x, thử hai mốc 0,1; giải thích quy tắc đổi chiều khi so số mũ.
- [Miền log và nghiệm của bất phương trình](../../visuals/THPT_TOPIC04_LOG_DOMAIN_AND_DECREASING_INEQUALITY_R01.svg) — Git blob `7fe8a2d2faf325f3ee9b0876929402b733138f96`. Trước tiên đánh dấu 1<x<5, rồi chọn x≥3 do cơ số 1/2 làm log giảm; nhận [3,5), **không** lấy 5 vì log 0 vô nghĩa.

## Mô hình tương tác — đặc tả cần xây dựng, KHÔNG phải tính năng đang chạy

- `TOP04_EXP_BASE_SLIDER_SPEC_ONLY`: thanh chọn cơ số a>0,a≠1 và số mũ x, hiển thị các điểm (x,a^x), sự thay đổi khi a vượt qua 1 và điều kiện không cắt trục hoành; có bảng điểm và văn bản thay đồ thị cho bàn phím/screen reader. **Chưa triển khai/kiểm thử trình duyệt**.
- `TOP04_LOG_DOMAIN_INVERSE_LAB_SPEC_ONLY`: nhập U(x), chọn a, tự thử miền U>0 rồi so log_a U với phép mũ đảo; khi a<1 bắt buộc học sinh tự chọn chiều bất phương trình trước khi xem minh họa. **Chưa triển khai/kiểm thử trình duyệt**.

# Luyện tập

**75 câu canonical PUBLIC duy nhất = 49 câu nguồn gốc KNTT đã review theo snapshot (41 Practice/Core/Application +8 Written/Anchor) và 26 câu tự biên soạn (22 Practice +4 Written).** Mỗi ID có đúng **một** stem/key/solution/rubric ở nguồn canonical; bảng dưới đây chỉ đặt placement cho chuyên đề, không sao chép câu cũ. **12 bài Written** gồm 8 gốc có rubric 4 điểm và 4 mới có rubric 7 điểm; Anchor chỉ là nhãn, không sinh ID khác. Không lấy tổng số câu thay cho độ sâu từng outcome; 18 outcome đều có nhiều câu khác họ dạng và lý do chọn cách làm.

| Mục tiêu chuyên đề | Phương pháp / họ dạng | Câu canonical PUBLIC |
|---|---|---|
| `TOP04-O01` | Giải thích a^0 và a^(−n), phân biệt số âm với số mũ âm · `POWER-INTEGER-ZERO-NEGATIVE` | `THPT-G11-CHVI-B18-C01`; `THPT-G11-CHVI-B18-C03`; `THPT-G11-CHVI-B18-P07`; `THPT-TOP04-P01` |
| `TOP04-O02` | Phân biệt căn số học và nghiệm phương trình lũy thừa · `ROOT-PARITY-RATIONAL` | `THPT-G11-CHVI-B18-C02`; `THPT-G11-CHVI-B18-C05`; `THPT-G11-CHVI-B18-P02`; `THPT-G11-CHVI-B18-P03`; `THPT-TOP04-P02` |
| `TOP04-O03` | Hiểu vì sao 2^(√2) xác định và so sánh khi số mũ không hữu tỉ · `REAL-EXPONENT-INTERPOLATION` | `THPT-G11-CHVI-B18-C04`; `THPT-TOP04-P03`; `THPT-TOP04-P04` |
| `TOP04-O04` | Rút gọn biểu thức lũy thừa không làm mất điều kiện · `POWER-LAW-CAVEATS` | `THPT-G11-CHVI-B18-P01`; `THPT-G11-CHVI-B18-P04`; `THPT-G11-CHVI-B18-P06`; `THPT-G11-CHVI-B18-W01`; `THPT-TOP04-P05`; `THPT-TOP04-W01` |
| `TOP04-O05` | Giải thích log_a b như thao tác ngược của a^x · `LOG-DEFINITION` | `THPT-G11-CHVI-B19-C01`; `THPT-G11-CHVI-B19-C02`; `THPT-G11-CHVI-B19-P03`; `THPT-TOP04-P06` |
| `TOP04-O06` | Một tích dương không bảo đảm từng thừa số dương · `LOG-DOMAIN-AND-SPLITTING` | `THPT-G11-CHVI-B19-C03`; `THPT-G11-CHVI-B19-P04`; `THPT-G11-CHVI-B19-W01`; `THPT-TOP04-P07`; `THPT-TOP04-P08` |
| `TOP04-O07` | Dùng đúng log của tích, thương, lũy thừa · `LOG-ALGEBRA-RULES` | `THPT-G11-CHVI-B19-P01`; `THPT-G11-CHVI-B19-P02`; `THPT-G11-CHVI-B19-W02-ANCHOR`; `THPT-TOP04-P09` |
| `TOP04-O08` | Chuyển một log lạ về cơ số quen mà không sai dấu · `BASE-CHANGE` | `THPT-G11-CHVI-B19-P05`; `THPT-TOP04-P10`; `THPT-TOP04-P11`; `THPT-TOP04-W02` |
| `TOP04-O09` | Đọc tập xác định, giá trị, điểm, tiệm cận qua ý nghĩa lũy thừa · `EXP-DOMAIN-RANGE-GRAPH` | `THPT-G11-CHVI-B20-C01`; `THPT-TOP04-P12`; `THPT-TOP04-P13` |
| `TOP04-O10` | So sánh số mũ và giải thích khi nào đảo chiều · `EXP-MONOTONIC` | `THPT-G11-CHVI-B20-C02`; `THPT-G11-CHVI-B20-P02`; `THPT-TOP04-P14` |
| `TOP04-O11` | Đọc miền, tập giá trị, đồ thị và tính tăng giảm của log · `LOG-FUNCTION-MONOTONIC` | `THPT-G11-CHVI-B20-C03`; `THPT-G11-CHVI-B20-P01`; `THPT-G11-CHVI-B20-P03`; `THPT-TOP04-P15` |
| `TOP04-O12` | Đọc đồ thị đối xứng qua y=x, không nhầm hoán đổi miền · `INVERSE-GRAPH` | `THPT-G11-CHVI-B20-C04`; `THPT-G11-CHVI-B20-P04`; `THPT-G11-CHVI-B20-W01`; `THPT-G11-CHVI-B20-W02-ANCHOR`; `THPT-TOP04-P16` |
| `TOP04-O13` | Giải bằng đưa về cùng cơ số, nêu giới hạn của đặt t=a^x · `EXP-EQUATIONS` | `THPT-G11-CHVI-B21-C01`; `THPT-G11-CHVI-B21-P01`; `THPT-G11-CHVI-B21-P07`; `THPT-TOP04-P17` |
| `TOP04-O14` | Loại nghiệm đại số không thuộc miền log · `LOG-EQUATIONS-DOMAIN` | `THPT-G11-CHVI-B21-C02`; `THPT-G11-CHVI-B21-P02`; `THPT-TOP04-P18`; `THPT-TOP04-W03` |
| `TOP04-O15` | Chọn chiều của bất phương trình dựa trên cơ số · `EXP-INEQUALITIES` | `THPT-G11-CHVI-B21-C03`; `THPT-G11-CHVI-B21-P03`; `THPT-TOP04-P19` |
| `TOP04-O16` | Giải đủ tập giao của điều kiện log và phép so đối số · `LOG-INEQUALITIES` | `THPT-G11-CHVI-B21-C04`; `THPT-G11-CHVI-B21-P04`; `THPT-TOP04-P20` |
| `TOP04-O17` | Lập A(n)=A₀q^n, phân biệt tăng, giảm và nghiệm nguyên · `EXP-LOG-MODELS` | `THPT-G11-CHVI-B18-P05`; `THPT-G11-CHVI-B19-P06`; `THPT-G11-CHVI-B21-P06`; `THPT-G11-CHVI-B18-W02-ANCHOR`; `THPT-G11-CHVI-B21-W02-ANCHOR`; `THPT-TOP04-P21`; `THPT-TOP04-W04` |
| `TOP04-O18` | Chọn đúng phương pháp theo dấu/miền và đánh giá nghiệm · `INTEGRATED-CONDITION-CHECK` | `THPT-G11-CHVI-B21-P05`; `THPT-G11-CHVI-B21-P08`; `THPT-G11-CHVI-B21-W01`; `THPT-TOP04-P22` |

**Phân tầng:** Câu nhận biết về số mũ, định nghĩa và miền log; câu thông hiểu về vì sao không tách log tích, vì sao đồ thị ngược/đảo dấu; câu vận dụng về đổi cơ số, phương trình và bất phương trình; bài tự luận tích hợp về điều kiện, biến đổi và mô hình năm nguyên. P17 đặt t=3^x>0 là **vận dụng mở rộng tự chọn**; không đánh tráo thành Core bắt buộc SGK đã được review.

**Một thư viện Written:** 8 câu nguồn đã có rubric 4 điểm, lưu nguyên ở nguồn SGK canonical. 4 câu mới `THPT-TOP04-W01` (lũy thừa+khoa học), `W02` (đổi cơ số và điều kiện), `W03` (phương trình log), `W04` (ngưỡng lãi kép) với rubric 7 điểm trong extension. Không để nhãn Anchor tự biến thành bản sao hoặc bài tự luận chấm Mastery máy.

# Tự kiểm tra

**18 placement PUBLIC reuse-only — một outcome một câu đã có trong Luyện tập.** Đây là `CLIENT_SELF_CHECK_NO_MASTERY`, chỉ để học sinh tự đối chiếu sau khi nộp; **không** là `TOPIC_READINESS` độc lập, không ghi Skill Mastery. 22 private RD1 của SGK tuyệt đối **không** sao chép sang Topic; không đặt câu/chìa khóa/đáp án kín lên GitHub.

**Hợp đồng thực thi Q16 cho nhánh RELEASE:** Trước **Final Submit** phải khóa gợi ý, AI Tutor, key, lời giải, phản hồi đúng/sai và rubric. Chỉ sau Final Submit mới hiển thị đối chiếu/đường sửa D6. Việc mô tả trong Markdown **không** chứng minh website hiện đã khóa, đã có đánh giá chính thức hoặc có model tương tác chạy.

| Lượt | Outcome | PUBLIC item_id tái sử dụng | Khi sai quay lại |
|---:|---|---|---|
| 1 | `TOP04-O01` | `THPT-G11-CHVI-B18-C01` | `TOP04-M01` |
| 2 | `TOP04-O02` | `THPT-G11-CHVI-B18-C02` | `TOP04-M02` |
| 3 | `TOP04-O03` | `THPT-G11-CHVI-B18-C04` | `TOP04-M03` |
| 4 | `TOP04-O04` | `THPT-G11-CHVI-B18-P01` | `TOP04-M04` |
| 5 | `TOP04-O05` | `THPT-G11-CHVI-B19-C01` | `TOP04-M05` |
| 6 | `TOP04-O06` | `THPT-G11-CHVI-B19-C03` | `TOP04-M06` |
| 7 | `TOP04-O07` | `THPT-G11-CHVI-B19-P01` | `TOP04-M07` |
| 8 | `TOP04-O08` | `THPT-G11-CHVI-B19-P05` | `TOP04-M08` |
| 9 | `TOP04-O09` | `THPT-G11-CHVI-B20-C01` | `TOP04-M09` |
| 10 | `TOP04-O10` | `THPT-G11-CHVI-B20-C02` | `TOP04-M10` |
| 11 | `TOP04-O11` | `THPT-G11-CHVI-B20-C03` | `TOP04-M11` |
| 12 | `TOP04-O12` | `THPT-G11-CHVI-B20-C04` | `TOP04-M12` |
| 13 | `TOP04-O13` | `THPT-G11-CHVI-B21-C01` | `TOP04-M13` |
| 14 | `TOP04-O14` | `THPT-G11-CHVI-B21-C02` | `TOP04-M14` |
| 15 | `TOP04-O15` | `THPT-G11-CHVI-B21-C03` | `TOP04-M15` |
| 16 | `TOP04-O16` | `THPT-G11-CHVI-B21-C04` | `TOP04-M16` |
| 17 | `TOP04-O17` | `THPT-G11-CHVI-B18-P05` | `TOP04-M17` |
| 18 | `TOP04-O18` | `THPT-G11-CHVI-B21-P05` | `TOP04-M18` |

**Phân loại lỗi sau nộp:** nhầm số mũ âm/căn bậc chẵn; thiếu điều kiện cơ số và đối số; tách log tích trên phần miền sai; đổi cơ số sai; đọc đồ thị ngược; đảo chiều khi cơ số nhỏ hơn 1; lấy nghiệm ngoài miền; làm tròn/nhận năm không nguyên. Dẫn về module tương ứng và luyện một ID khác đã có nguồn.

## Phụ lục AUTHORING — không hiển thị cho học sinh

PACKET_ID: THPT-TOPIC04-POWERS-EXP-LOG-FULL-R01
CATALOG_TOPIC_ID: CD04
LEARNING_PATH: TOPIC
OUTER_PAGES: KIEN_THUC / LUYEN_TAP / TU_KIEM_TRA
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.1
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
SGK_SOURCE_ROLE: S1_REFERENCE_ONLY_NOT_SGK_CHAPTER_ROUTE
SGK_G11_T2_KNTT: B18 printed4–9/PDF5–10; B19 printed10–15/PDF11–16; B20 printed16–19/PDF17–20; B21 printed20–24/PDF21–25; chapter-end printed25–26/PDF26–27
SBT_G11_T2_KNTT: B18 printed4–7/PDF5–8; B19 printed8–10/PDF9–11; B20 printed11–15/PDF12–16; B21 printed16–19/PDF17–20; chapter-end printed20–23/PDF21–24; SBT ChVI solutions printed73–85/PDF74–86
S1_PAGINATION_AUDIT: historic owner visual PDF receipt with original private source SHA; this authoring turn independently reads citation receipt, not original scanned page image
ORIGINAL_G11_CHVI_PUBLIC_SOURCE_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872
ORIGINAL_49_INDEX_PATH: prototypes/thpt/shared-items/Temp_TOPIC04_POWERS_LOG_ORIGINAL49_INDEX_R01_20261112.md
ORIGINAL_49_INDEX_BLOB: 7d257edda0a2d29ba063987a51c61980558dbab6
NEW_26_BANK_PATH: prototypes/thpt/shared-items/Temp_TOPIC04_POWERS_LOG_NEW26_PUBLIC_CANONICAL_R01_20261112.md
NEW_26_BANK_BLOB: 004692a2d996b5ba955318a087f4d58dcdb2df04
SVG_B18_ORIGINAL_BLOB: 79528bcd2c87eb40b1b54f18c697b0ae3458e642
SVG_B19_ORIGINAL_BLOB: fe2895ac101dcc4cf4046d57428181ad0f448dc8
SVG_B20_ORIGINAL_BLOB: 64bcb465bd6d809095a4ca2b910555e314badb69
SVG_B21_ORIGINAL_BLOB: 6d43f842d096b974eb70af21e6751f1ec70eea00
SVG_TOPIC_NEW_BLOB: 7fe8a2d2faf325f3ee9b0876929402b733138f96
TOPIC_OUTCOMES: 18
KNOWLEDGE_MODULES: 18
FIRST_TRY_REVEAL_D6: 18_EACH
PUBLIC_CANONICAL_IDS: 75
PUBLIC_REUSE_ORIGINAL: 49
PUBLIC_NEW_ORIGINAL: 26
PUBLIC_WRITTEN_IDS: 12
PUBLIC_SELF_CHECK_REUSE: 18
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_TOPIC_READINESS: NOT_CLAIMED
PRIVATE_RD1_IMPORTED: 0
INTERACTION_MODELS_IMPLEMENTED: NO
RELEASE_AUTHORIZATION: NO

| canonical item_id | primary Topic outcome | role | one source Git blob |
|---|---|---|---|
| `THPT-G11-CHVI-B18-C01` | `TOP04-O01` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-C02` | `TOP04-O02` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-C03` | `TOP04-O01` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-C04` | `TOP04-O03` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-C05` | `TOP04-O02` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P01` | `TOP04-O04` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P02` | `TOP04-O02` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P03` | `TOP04-O02` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P04` | `TOP04-O04` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P05` | `TOP04-O17` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P06` | `TOP04-O04` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P07` | `TOP04-O01` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-C01` | `TOP04-O05` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-C02` | `TOP04-O05` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-C03` | `TOP04-O06` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P01` | `TOP04-O07` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P02` | `TOP04-O07` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P03` | `TOP04-O05` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P04` | `TOP04-O06` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P05` | `TOP04-O08` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P06` | `TOP04-O17` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-C01` | `TOP04-O09` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-C02` | `TOP04-O10` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-C03` | `TOP04-O11` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-C04` | `TOP04-O12` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-P01` | `TOP04-O11` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-P02` | `TOP04-O10` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-P03` | `TOP04-O11` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-P04` | `TOP04-O12` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-C01` | `TOP04-O13` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-C02` | `TOP04-O14` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-C03` | `TOP04-O15` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-C04` | `TOP04-O16` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P01` | `TOP04-O13` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P02` | `TOP04-O14` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P03` | `TOP04-O15` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P04` | `TOP04-O16` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P05` | `TOP04-O18` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P06` | `TOP04-O17` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P07` | `TOP04-O13` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P08` | `TOP04-O18` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-W01` | `TOP04-O04` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-W02-ANCHOR` | `TOP04-O17` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-W01` | `TOP04-O06` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-W02-ANCHOR` | `TOP04-O07` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-W01` | `TOP04-O12` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-W02-ANCHOR` | `TOP04-O12` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-W01` | `TOP04-O18` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-W02-ANCHOR` | `TOP04-O17` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-TOP04-P01` | `TOP04-O01` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P02` | `TOP04-O02` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P03` | `TOP04-O03` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P04` | `TOP04-O03` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P05` | `TOP04-O04` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P06` | `TOP04-O05` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P07` | `TOP04-O06` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P08` | `TOP04-O06` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P09` | `TOP04-O07` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P10` | `TOP04-O08` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P11` | `TOP04-O08` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P12` | `TOP04-O09` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P13` | `TOP04-O09` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P14` | `TOP04-O10` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P15` | `TOP04-O11` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P16` | `TOP04-O12` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P17` | `TOP04-O13` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P18` | `TOP04-O14` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P19` | `TOP04-O15` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P20` | `TOP04-O16` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P21` | `TOP04-O17` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P22` | `TOP04-O18` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-W01` | `TOP04-O04` | TOPIC_WRITTEN | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-W02` | `TOP04-O08` | TOPIC_WRITTEN | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-W03` | `TOP04-O14` | TOPIC_WRITTEN | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-W04` | `TOP04-O17` | TOPIC_WRITTEN | `004692a2d996b5ba955318a087f4d58dcdb2df04` |

**Review boundary:** 49 câu nguồn lấy từ snapshot SGK đã có độc lập Academic/PED PASS và chứng cứ DELTA_B cho hai số thập phân; không sao chép câu/đáp án/rubric. Bộ CĐ04 với 18 module, 26 bài mới, SVG mới là `DELTA_C_ACADEMIC_MATERIAL` tự kiểm tra `Q18_AUTHOR_SELF_VERIFIED` theo owner v3.0.1. Không gán NotebookLM PASS cũ sang CĐ04, không giả model tương tác đã chạy, không tuyên bố assessment chính thức.
