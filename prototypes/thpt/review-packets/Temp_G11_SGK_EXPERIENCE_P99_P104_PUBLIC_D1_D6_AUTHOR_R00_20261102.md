# Temp — G11 SGK KNTT Tập Hai p99–104 — Hoạt động thực hành trải nghiệm, author public R00
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
PACKET_ID: G11-SGK-SUPPLEMENT-EXPERIENCE-P99-P104-R00
LEARNING_PATH: SGK_CHAPTER_SUPPLEMENT_NOT_TOPIC
STATE: AUTHOR_REVIEW_CANDIDATE
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
RELEASE_AUTHORIZATION: NO

## S1 SOURCE RECEIPT
Owner original SGK Toán 11 KNTT Tập Hai p99–104 / one-based PDF indices 100–105, SHA256 14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491, 18,642,213 bytes, 114 PDF pages. Actual scanned image pages visually read; original source protected on owner's Google Drive, not copied to public repository. p99 exponential growth/half-life; p100–101 pH, earthquake logarithmic scale, decibel; p102 paper nets and measurement; p103 rod-shadow, line-plane and dihedral; p104 GeoGebra prism construction. SBT KNTT Tập Hai annual review p66–72 supports cross-chapter prerequisites, no separate Chương X or new Chuyên đề. All following teaching tasks are independently authored, not copied textbook questions.

## LESSON_IDS
- G11-SUPP-E01
- G11-SUPP-E02

## OUTCOME_IDS
- G11-E01-EXPONENTIAL_MODEL
- G11-E01-HALF_LIFE
- G11-E01-PH_SCALE
- G11-E01-RICHTER_SCALE
- G11-E01-DECIBEL_SCALE
- G11-E01-MODEL_ASSUMPTIONS
- G11-E02-NET_CONSTRUCTION
- G11-E02-LINE_PLANE_MEASURE
- G11-E02-DIHEDRAL_MEASURE
- G11-E02-VOLUME_MODEL
- G11-E02-GEOGEBRA_REPRESENTATION

## RD0 OUTCOME MATRIX
| OUTCOME_ID | Observable outcome requiring evidence |
|---|---|
| G11-E01-EXPONENTIAL_MODEL | Phân biệt ghép tăng trưởng rời rạc A0(1+r)^n với tốc độ liên tục A0 exp(kt), kiểm đơn vị và giả định. |
| G11-E01-HALF_LIFE | Lập mô hình chu kì bán rã T>0, tìm thời gian ngược bằng log, kiểm điều kiện đại lượng dương. |
| G11-E01-PH_SCALE | Giải thích pH=-log10[H+], điều kiện nồng độ dương và biến đổi 10 lần. |
| G11-E01-RICHTER_SCALE | Đọc tỉ số biên độ I/S qua log thập phân, không nhầm với tỉ số năng lượng. |
| G11-E01-DECIBEL_SCALE | Diễn giải L=10log10(I/I0), đổi cường độ thành chênh dB và nêu giới hạn cảm nhận. |
| G11-E01-MODEL_ASSUMPTIONS | Đánh giá dự báo toán học theo tốc độ không đổi, mốc thời gian, đơn vị và phạm vi ngoại suy. |
| G11-E02-NET_CONSTRUCTION | Tạo khai triển hộp/lăng trụ/chóp và kiểm mặt đáy, cạnh dán ghép đúng. |
| G11-E02-LINE_PLANE_MEASURE | Dựng tam giác cọc/bóng/tia và đo góc đường–mặt phẳng với điều kiện vuông góc. |
| G11-E02-DIHEDRAL_MEASURE | Xác định đúng góc phẳng nhị diện bằng hai đường trong hai mặt cùng vuông góc giao tuyến. |
| G11-E02-VOLUME_MODEL | Phân biệt công thức V của lăng trụ/chóp và chiều cao vuông góc, kiểm đơn vị. |
| G11-E02-GEOGEBRA_REPRESENTATION | Dựng lăng trụ bằng hai đáy và cạnh nối tương ứng; phân biệt hình xiên/đứng và nét khuất. |

## LEARNING FLOW
- E01 p99–101: WHY → prerequisites → growth model essence → units/conditions → log scales → read SGK tables → reasoned examples → self-try before canonical Core/Practice → D6.
- E02 p102–104: WHY physical modeling → prerequisites → net construction → actual projected angle / dihedral → volume → GeoGebra paper alternative → measured evidence and D6.
- No Mastery from viewed solutions or manually compared Written. Do not use actual protected RD1 question bodies/answer keys in a public repository.


## D1 E01 — Mô hình hàm mũ và các thang lôgarit (SGK trang in 99–101)
### PED1 WHY — Vì sao số mũ và log giúp hiểu thế giới?
Khi một số lượng tăng theo tỉ lệ thay vì cộng một phần cố định mỗi năm, sau nhiều năm các biến đổi rất lớn. Log chuyển tỉ số nhân thành chênh lệch để so sánh đại lượng có nhiều bậc độ lớn: nồng độ ion, biên độ địa chấn và cường độ âm. Mục tiêu là giải thích hiện tượng, không chỉ nhập công thức máy tính.
### PED2 Kiến thức tiền đề
Nhắc lũy thừa số thực, tính log của số dương, log10(10^a)=a, ln(e^a)=a; biến thời gian t phải khớp đơn vị của k hoặc chu kì bán rã T. Nồng độ, biên độ và cường độ tham chiếu phải dương.
### PED3 Hình thành bản chất trước công thức
Tăng trưởng 3% mỗi năm là nhân 1,03 mỗi bước; sau n năm số lượng A(n)=A0(1+0,03)^n. Tăng trưởng liên tục với tốc độ tương đối hằng k thì A(t)=A0 exp(kt). Hai giả định KHÔNG đồng nhất nếu đặt cùng số k=r; để trùng tại n nguyên, chọn k=ln(1+r). Nếu vật chất còn một nửa mỗi T năm thì A(t)=A0·2^(-t/T). Muốn tìm t từ A/A0 phải dùng log và kiểm A,A0,T>0.
Với pH=-log10[H+], [H+] là nồng độ ion H+ (mol/L), dương; nồng độ giảm 100 lần làm pH tăng 2. Thang Richter trong mô hình SGK M=log10(I/S) với I/S>0: chênh 1 mức biểu thị tỉ số biên độ 10 (không suy tỉ số năng lượng). Mức dB L=10log10(I/I0), I/I0>0: nếu cường độ tăng 10 lần thì L tăng 10 dB, không nói cảm giác âm 'to gấp 10'.
### PED4 Đọc bảng/hình SGK
Bảng pH trang 100 là dữ liệu ví dụ; đọc đúng nồng độ/đơn vị và lưu ý độ pH của mẫu thực có thể khác. Bảng động đất Richter trang 100 xếp hạng cường độ theo mô hình đã định nghĩa, không suy năng lượng vật lý từ bảng. Bảng decibel trang 101 biểu diễn mức theo thang log, không phải bảng chuyển đổi chính xác cảm giác 'độ to'. Khi vẽ đồ thị A(t), ghi t (năm) và A (người/gam) trên hai trục, xác định mốc A0.
### PED5 Lý do chọn phương pháp và điều kiện
Biết tỉ lệ tăng mỗi năm → dùng công thức lặp nhân; biết bán rã → dùng mũ âm theo chu kì T; tìm thời gian → cô lập t trong mũ rồi log. Với pH/Richter/dB bắt đầu từ tỉ số trong log, kiểm dương, cơ số 10 và hệ số ngoài log. Luôn kiểm kết quả bằng cách thay ngược và ghi nhận mô hình giả định tốc độ không đổi.
### PED6 Tự thử trước Core (không ghi Mastery)
1) Sau hai chu kì bán rã, vật còn mấy phần ban đầu? 2) Nồng độ [H+] giảm 10 lần thì pH biến đổi thế nào, vì sao? 3) Tỉ số biên độ 100 lần cho chênh Richter bao nhiêu? 4) I tăng 100 lần thì L tăng mấy dB? Đề nghị học sinh dự đoán TRƯỚC khi mở đáp án formative; nếu sai dùng D6 rồi tự làm lại.

## D1 E02 — Hình học trải nghiệm và đo đạc (SGK trang in 102–104)
### PED1 WHY — Vì sao cần gấp mô hình và đo thật?
Hình phối cảnh có thể làm lệch nhận thức góc và khoảng cách. Mô hình giấy cho phép kiểm cặp cạnh và mặt khớp nhau; phép đo cọc/bóng biến định nghĩa hình chiếu thành dữ liệu; GeoGebra giúp nhìn cấu trúc nhưng không thay thế chứng minh.
### PED2 Tiền đề cần nhắc
Hai mặt đáy của lăng trụ nằm trên hai mặt phẳng song song, cạnh bên nối đỉnh tương ứng; góc đường với mặt phẳng được xác định từ hình chiếu, không phải góc tùy ý trong bản vẽ. Góc nhị diện đo bằng hai tia trong hai mặt cùng vuông góc giao tuyến ở một điểm. V_lăng trụ = Sđáy·h; V_chóp = (1/3)Sđáy·h, h vuông góc đáy.
### PED3 Tạo hình và bản chất hình chiếu
Với lăng trụ tam giác, cần hai đáy tam giác bằng nhau và ba mặt bên là hình bình hành, nối đỉnh cùng tên. Trước khi cắt giấy, kiểm cạnh nào sẽ dán cùng chiều dài và có thể khép hình. Một cọc thẳng đứng dài h và bóng trên đất phẳng dài l tạo tam giác vuông; ánh sáng tạo cạnh huyền, bóng là hình chiếu, nên tan(góc tia–nền)=h/l. Với nhị diện, chọn mặt cắt vuông góc giao tuyến d; hai tia nằm trong mỗi mặt và cùng vuông góc d tạo góc phẳng đo được.
### PED4 Đọc hình p103 và p104
H.T1: tìm chân cọc, đỉnh cọc, đầu bóng; đánh dấu đối h và kề l, không nhầm với độ dài tia. H.T2: H là hình chiếu chân cọc lên vạch a; góc BHA mới biểu diễn góc nhị diện, với tan BHA=AB/AH. H.T3 minh họa vẽ ABC, sao chép A'B'C', nối các đỉnh tương ứng, đổi nét khuất. H.T4 là lăng trụ đứng khi các cạnh bên vuông góc đáy. Nếu không có GeoGebra, dùng giấy kẻ ô và nhãn đỉnh để đạt cùng outcome.
### PED5 Điều kiện và giới hạn
Cọc phải vuông góc mặt đất và đo bóng cùng thời điểm, nền đủ phẳng; đo góc nhị diện phải theo góc phẳng chứ không đo đường chéo trong ảnh phối cảnh; khi tính thể tích phải dùng chiều cao vuông góc đáy, không tùy ý lấy cạnh bên. Nếu thiết kế bìa, tránh tự ý thêm nắp vào thùng không nắp.
### PED6 Tự thử trước Core
1) Cọc cao 1m và bóng dài 1m: góc tia–mặt đất? 2) Có thể đo nhị diện bằng hai cạnh chéo bất kỳ trên bản vẽ không? 3) Một chóp và lăng trụ có chung đáy/cùng chiều cao, thể tích tỉ lệ thế nào? 4) Vì sao AA' phải nối với A' tương ứng mà không nối nhầm B'? Sau tự thử dùng D6 để sửa chỗ sai.


## D2 — REASONED WORKED EXAMPLES (rationale, assumptions, checked results)
### EX-G11-SUPP-E01-01 | skill_id=G11-E01-EXPONENTIAL_MODEL
Một quần thể 500 cá thể tăng 2% hằng năm. Sau 3 năm mô hình rời rạc N=500·(1,02)^3≈530,60. Mỗi năm phải nhân trên số năm trước, không cộng 10 cố định. Nếu mô hình liên tục với k=0,02 thì N=500 exp(0,02t), số gần nhau nhưng không bằng đúng khi t=3; muốn trùng tại năm nguyên phải dùng k=ln(1,02).

### EX-G11-SUPP-E01-02 | skill_id=G11-E01-HALF_LIFE
Chu kì bán rã T=6 năm, lượng đầu A0=80g: sau 18 năm A=80·2^(-18/6)=10g. Nếu còn 20g thì 2^(-t/6)=1/4=2^(-2), t=12. Vì sao dùng log hoặc so sánh lũy thừa: thời gian nằm ở số mũ, không cộng trừ khối lượng mỗi năm.

### EX-G11-SUPP-E01-03 | skill_id=G11-E01-PH_SCALE
Nồng độ [H+]=10^(-5) mol/L → pH=5. Nếu giảm [H+] 100 lần → 10^(-7), pH=7. Giải thích dấu: pH=-log10[H+], khi [H+] nhỏ đi thì -log tăng. Không tính pH của [H+]=0 bằng công thức này.

### EX-G11-SUPP-E01-04 | skill_id=G11-E01-RICHTER_SCALE
Đại lượng có tỉ số biên độ I/S=1000 thì M=log10(1000)=3. Hai biên độ hơn kém 100 lần sẽ có chênh 2 đơn vị M; đây là so biên độ theo định nghĩa mô hình, không khẳng định năng lượng lớn hơn đúng 100 lần.

### EX-G11-SUPP-E01-05 | skill_id=G11-E01-DECIBEL_SCALE
I0=10^(-12) W/m², I=10^(-8) W/m² ⇒ L=10·log10(10^4)=40 dB. Nếu cường độ tăng 100 lần thì mức tăng thêm 20 dB, không viết 40×100 dB hay 'nghe to gấp 100'.

### EX-G11-SUPP-E01-06 | skill_id=G11-E01-MODEL_ASSUMPTIONS
Dự báo dân số với r=2% cố định trong 15 năm chỉ là mô hình có giả định điều kiện tăng không đổi. Nếu tỉ lệ sinh/di cư thay đổi, kết quả có thể sai đáng kể. Bài giải phải kèm đơn vị, mốc gốc, phép thay số, độ làm tròn và một giới hạn mô hình.

### EX-G11-SUPP-E02-01 | skill_id=G11-E02-NET_CONSTRUCTION
Lăng trụ tam giác có hai đáy là hai tam giác bằng nhau và ba mặt bên hình bình hành; lăng trụ đứng có mặt bên chữ nhật. Trước khi dán, ghép cặp cạnh cùng chiều dài và không chồng lên nhau. Nếu quên đáy thứ hai hoặc ghép nhầm cạnh không thể khép khối.

### EX-G11-SUPP-E02-02 | skill_id=G11-E02-LINE_PLANE_MEASURE
Cọc 1,5m thẳng đứng, bóng trên đất phẳng dài 2m: tanθ=1,5/2=0,75, θ≈36,87°. Tại sao tan chứ không sin: dữ liệu cho cạnh đối và kề, chưa cho cạnh huyền; góc là giữa tia và hình chiếu xuống đất.

### EX-G11-SUPP-E02-03 | skill_id=G11-E02-DIHEDRAL_MEASURE
Hai mặt (P),(Q) giao đường d. Chọn H∈d, trong mỗi mặt dựng một tia vuông góc d tại H. Góc giữa hai tia là góc phẳng nhị diện. Không lấy góc giữa hai cạnh tùy ý trên hình phối cảnh vì chúng có thể không vuông góc d.

### EX-G11-SUPP-E02-04 | skill_id=G11-E02-VOLUME_MODEL
Lăng trụ đứng đáy tam giác vuông cạnh 3cm,4cm, cao 5cm: Sđáy=6cm², V=30cm³. Chóp có cùng đáy/cao: V=10cm³. Hệ số 1/3 là quan hệ thể tích chóp, không dùng khi tính lăng trụ.

### EX-G11-SUPP-E02-05 | skill_id=G11-E02-GEOGEBRA_REPRESENTATION
Vẽ tam giác ABC, sao chép cùng dạng thành A'B'C' trên một mặt phẳng song song, nối AA',BB',CC'. Kiểm ba cạnh tương ứng song song; nếu tùy ý dịch bản sao làm cạnh bên xiên, không được gọi lăng trụ đứng. Cạnh khuất trong biểu diễn 2D dùng nét đứt và gắn nhãn.

### EX-G11-SUPP-E02-06 | skill_id=G11-E02-LINE_PLANE_MEASURE
Để xác định góc nhị diện tạo bởi vạch a trên đất và một tấm dựng qua cọc AB, hạ H là hình chiếu vuông góc của chân A trên a. Tam giác ABH vuông tại A nên tan∠BHA=AB/AH. Chỉ lấy AB/độ dài vạch a là nhầm đoạn không thuộc tam giác đo.


## D3 — 21 public canonical Core/Practice/Application; answer revealed only after learner's formative Submit
These are original author tasks derived from SGK learning goals, NOT the publisher's verbatim exercises. Practice viewing solutions never grants chapter Readiness/Mastery.

### THPT-G11-SUPP-E01-C01 | skill_id=G11-E01-EXPONENTIAL_MODEL | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Số lượng ban đầu 200, tăng 5% mỗi năm, sau hai năm theo ghép lãi là bao nhiêu?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 200·1,05²=220,5; nếu là số cá thể thật cần quy ước làm tròn.

### THPT-G11-SUPP-E01-P01 | skill_id=G11-E01-EXPONENTIAL_MODEL | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Hai công thức A0(1+r)^t và A0e^(rt) có luôn bằng nhau khi cùng r? Giải thích.
**Đáp án và lí do (chỉ tự mở sau khi làm):** Không. Công thức đầu ghép theo bước, thứ hai liên tục. Để khớp năm nguyên cần k=ln(1+r), không đặt k=r tùy tiện.

### THPT-G11-SUPP-E01-C02 | skill_id=G11-E01-HALF_LIFE | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Sau mấy chu kì bán rã vật còn 1/8 khối lượng đầu?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 3 chu kì do (1/2)^3=1/8.

### THPT-G11-SUPP-E01-P02 | skill_id=G11-E01-HALF_LIFE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Chu kì bán rã 10 năm; sau 15 năm còn tỉ lệ khối lượng nào?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 2^(-1,5)=1/(2√2)≈0,3536; chu kì có thể là 1,5, không chỉ số nguyên.

### THPT-G11-SUPP-E01-C03 | skill_id=G11-E01-PH_SCALE | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** [H+]=10^(-6) mol/L, theo công thức pH=-log10[H+] có pH bao nhiêu?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 6, giả thiết nồng độ dương.

### THPT-G11-SUPP-E01-P03 | skill_id=G11-E01-PH_SCALE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** pH tăng từ 4 lên 6 thì nồng độ ion H+ giảm bao nhiêu lần?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 100 lần; 10^-4 / 10^-6=10².

### THPT-G11-SUPP-E01-C04 | skill_id=G11-E01-RICHTER_SCALE | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Mô hình M=log10(I/S), tỉ số I/S=10^5. Tìm M.
**Đáp án và lí do (chỉ tự mở sau khi làm):** 5.

### THPT-G11-SUPP-E01-P04 | skill_id=G11-E01-RICHTER_SCALE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Hai biên độ chênh nhau hệ số 10^0,7 thì chênh số đo M?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 0,7. Không suy kết luận về tỉ số năng lượng từ công thức biên độ.

### THPT-G11-SUPP-E01-C05 | skill_id=G11-E01-DECIBEL_SCALE | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** I/I0=100, mức L=10log10(I/I0) bằng bao nhiêu?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 20 dB vì 10·2=20.

### THPT-G11-SUPP-E01-P05 | skill_id=G11-E01-DECIBEL_SCALE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Mức âm tăng 30 dB; tỉ số cường độ mới/cũ bằng bao nhiêu?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 1000, vì log10(k)=30/10=3.

### THPT-G11-SUPP-E01-P06 | skill_id=G11-E01-MODEL_ASSUMPTIONS | placement=SGK_APPLICATION | role=SGK_APPLICATION
**Câu hỏi:** Ngoại suy quần thể tăng 2% mỗi năm suốt 100 năm: nêu 2 giả định cần kiểm.
**Đáp án và lí do (chỉ tự mở sau khi làm):** Tốc độ tăng bất biến và môi trường/nguồn lực không ràng buộc; thời gian, di cư, dịch bệnh và sai số có thể làm kết quả thực tế khác mô hình.

### THPT-G11-SUPP-E02-C01 | skill_id=G11-E02-NET_CONSTRUCTION | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Lăng trụ tam giác có bao nhiêu mặt đáy và bao nhiêu mặt bên?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 2 đáy tam giác bằng nhau và 3 mặt bên hình bình hành.

### THPT-G11-SUPP-E02-P01 | skill_id=G11-E02-NET_CONSTRUCTION | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Làm thùng không nắp từ bìa, điều kiện nào cần kiểm trước khi cắt/dán?
**Đáp án và lí do (chỉ tự mở sau khi làm):** Không tạo nắp, cặp cạnh ghép đúng chiều dài/vị trí, các mặt có thể khép mà không chồng sai.

### THPT-G11-SUPP-E02-C02 | skill_id=G11-E02-LINE_PLANE_MEASURE | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Cọc thẳng cao 2m, bóng dài 2m trên nền phẳng, góc tia với mặt đất?
**Đáp án và lí do (chỉ tự mở sau khi làm):** 45° vì tanθ=2/2=1; điều kiện cọc vuông góc đất.

### THPT-G11-SUPP-E02-P02 | skill_id=G11-E02-LINE_PLANE_MEASURE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Cọc cao 1m bóng 3m, học sinh ghi sinθ=1/3. Sửa và giải thích.
**Đáp án và lí do (chỉ tự mở sau khi làm):** Sai vì 3m là cạnh kề chứ không phải huyền: tanθ=1/3, sinθ=1/√10.

### THPT-G11-SUPP-E02-C03 | skill_id=G11-E02-DIHEDRAL_MEASURE | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Hai tia đo góc phẳng nhị diện phải quan hệ với giao tuyến d thế nào?
**Đáp án và lí do (chỉ tự mở sau khi làm):** Mỗi tia nằm trong một mặt, cùng vuông góc với d tại điểm H trên d.

### THPT-G11-SUPP-E02-P03 | skill_id=G11-E02-DIHEDRAL_MEASURE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Có thể lấy góc giữa hai đường chéo nhìn thấy trên hình phối cảnh để gọi là góc nhị diện?
**Đáp án và lí do (chỉ tự mở sau khi làm):** Không. Chúng có thể không vuông góc giao tuyến, góc phối cảnh cũng không bảo toàn.

### THPT-G11-SUPP-E02-C04 | skill_id=G11-E02-VOLUME_MODEL | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Chóp có diện tích đáy 18cm², chiều cao 4cm; thể tích?
**Đáp án và lí do (chỉ tự mở sau khi làm):** (1/3)·18·4=24cm³.

### THPT-G11-SUPP-E02-P04 | skill_id=G11-E02-VOLUME_MODEL | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Lăng trụ có Sđáy=12cm², V=60cm³ thì chiều cao?
**Đáp án và lí do (chỉ tự mở sau khi làm):** h=V/Sđáy=5cm; không lấy 1/3.

### THPT-G11-SUPP-E02-C05 | skill_id=G11-E02-GEOGEBRA_REPRESENTATION | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Vì sao nối A với A', B với B', C với C' khi dựng lăng trụ ABC.A'B'C'?
**Đáp án và lí do (chỉ tự mở sau khi làm):** Đó là các đỉnh tương ứng của hai đáy và tạo các cạnh bên song song.

### THPT-G11-SUPP-E02-P05 | skill_id=G11-E02-GEOGEBRA_REPRESENTATION | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Khi vẽ lăng trụ trên giấy, cạnh bị che khuất thường nên dùng nét nào?
**Đáp án và lí do (chỉ tự mở sau khi làm):** Nét đứt, kết hợp nhãn rõ. Đừng kết luận vuông góc chỉ từ phối cảnh.


## D4 — one shared public Written and Anchor library; no duplicate IDs
Original human-readable solutions below are for learner-controlled self-compare after completing formative task; **not** independent RD1 scoring and never counted as Mastery.
### THPT-G11-SUPP-E01-W01 | skill_id=G11-E01-HALF_LIFE | placement=SGK_WRITTEN | role=ANCHOR_TAG
**Đề tự luận:** Một mẫu A0=120g với chu kì bán rã 8 năm. (a) Lập A(t). (b) Tính A(16). (c) Tìm t để A(t)=15g. (d) Nêu giả định mô hình.
**Đáp án tự mở sau tự làm:** A(t)=120·2^(-t/8); A(16)=30g; A(t)=15g ⇒ 2^(-t/8)=1/8 ⇒ t=24 năm; chu kì bán rã 8 năm giả định ổn định.
**Rubric /4:** 1 điểm lập mô hình/điều kiện; 1 điểm thao tác toán đúng; 1 điểm kết quả/đơn vị; 1 điểm giải thích tại sao và giới hạn phương pháp.

### THPT-G11-SUPP-E01-W02 | skill_id=G11-E01-DECIBEL_SCALE | placement=SGK_WRITTEN | role=WRITTEN
**Đề tự luận:** Cường độ nguồn âm đo được L=50dB với I0=10^-12 W/m². (a) Tìm I/I0. (b) Tìm I. (c) I tăng 10 lần thì mức mới? (d) Không suy cảm giác âm từ tỉ số nào?
**Đáp án tự mở sau tự làm:** I/I0=10^5; I=10^-7 W/m²; mức mới 60dB. Không được suy độ to cảm giác người nghe gấp 10 từ cường độ vật lý gấp 10.
**Rubric /4:** 1 điểm lập mô hình/điều kiện; 1 điểm thao tác toán đúng; 1 điểm kết quả/đơn vị; 1 điểm giải thích tại sao và giới hạn phương pháp.

### THPT-G11-SUPP-E01-W03 | skill_id=G11-E01-MODEL_ASSUMPTIONS | placement=SGK_WRITTEN | role=ANCHOR_TAG
**Đề tự luận:** Ban đầu 800 cá thể tăng 4%/năm. (a) Lập mô hình năm rời rạc. (b) Tìm k liên tục tương đương tại năm nguyên. (c) Tính N(3). (d) Nêu giới hạn.
**Đáp án tự mở sau tự làm:** N(n)=800·1,04^n; k=ln(1,04)≈0,0392207; N(3)≈899,89; tỉ lệ và môi trường không chắc bất biến.
**Rubric /4:** 1 điểm lập mô hình/điều kiện; 1 điểm thao tác toán đúng; 1 điểm kết quả/đơn vị; 1 điểm giải thích tại sao và giới hạn phương pháp.

### THPT-G11-SUPP-E02-W01 | skill_id=G11-E02-LINE_PLANE_MEASURE | placement=SGK_WRITTEN | role=WRITTEN
**Đề tự luận:** Cọc 1,8m thẳng đứng, bóng 2,4m. (a) Vẽ tam giác vuông, gắn nhãn. (b) Nêu hình chiếu tia sáng. (c) Tính góc tia–đất. (d) Nêu điều kiện đo.
**Đáp án tự mở sau tự làm:** Cạnh đối 1,8m/cạnh kề 2,4m; tanθ=0,75; θ≈36,87°. Nền phẳng, cọc vuông góc, bóng đo cùng thời điểm.
**Rubric /4:** 1 điểm lập mô hình/điều kiện; 1 điểm thao tác toán đúng; 1 điểm kết quả/đơn vị; 1 điểm giải thích tại sao và giới hạn phương pháp.

### THPT-G11-SUPP-E02-W02 | skill_id=G11-E02-VOLUME_MODEL | placement=SGK_WRITTEN | role=ANCHOR_TAG
**Đề tự luận:** Một lăng trụ đứng có đáy tam giác vuông hai cạnh góc vuông 6cm,8cm, cao 5cm. (a) Tìm Sđáy. (b) Tìm V lăng trụ. (c) V chóp cùng đáy và cao? (d) Lý do hệ số 1/3?
**Đáp án tự mở sau tự làm:** Sđáy=24cm²; Vlăng trụ=120cm³; Vchóp=40cm³; chóp một phần ba lăng trụ cùng diện tích đáy/chiều cao.
**Rubric /4:** 1 điểm lập mô hình/điều kiện; 1 điểm thao tác toán đúng; 1 điểm kết quả/đơn vị; 1 điểm giải thích tại sao và giới hạn phương pháp.

### THPT-G11-SUPP-E02-W03 | skill_id=G11-E02-GEOGEBRA_REPRESENTATION | placement=SGK_WRITTEN | role=WRITTEN
**Đề tự luận:** Thiết kế giấy/GeoGebra một lăng trụ ABC.A'B'C': (a) hai đáy; (b) nối cạnh bên; (c) đánh dấu cạnh khuất; (d) điều kiện để lăng trụ đứng.
**Đáp án tự mở sau tự làm:** Đáy tam giác bằng nhau ở hai mặt song song; nối đỉnh tương ứng; nét khuất đứt; cạnh bên vuông góc hai đáy mới là lăng trụ đứng.
**Rubric /4:** 1 điểm lập mô hình/điều kiện; 1 điểm thao tác toán đúng; 1 điểm kết quả/đơn vị; 1 điểm giải thích tại sao và giới hạn phương pháp.

## D5 — five original authored SVG sources; independent mathematical and visual QA pending
FIG-G11-SUPP-E01-01: time-versus-quantity axes, discrete dot model and continuous model with k=ln(1+r) if synchronized at integer years. Avoid pretending k=r gives identical graphs.
FIG-G11-SUPP-E01-02: three independent logarithmic scales pH/Richter/dB, each showing base and unit/coefficients and one ×10 comparison; no false cross-scale equivalence.
FIG-G11-SUPP-E02-01: rod–shadow–light triangle with right angle, projected beam and tanθ=h/l as SGK H.T1 concept re-authored diagram.
FIG-G11-SUPP-E02-02: two planes sharing intersection d, correct normal section with two rays perpendicular to d at common H; mark relevant flat dihedral angle.
FIG-G11-SUPP-E02-03: four steps prism ABC.A'B'C' (base, parallel copy, matching edges, dashed hidden edges) and note skew vs right prism.
Five actual source SVGs have been authored and linked below; their rendering and educational correctness await independent NotebookLM Q07/PED4 and later RELEASE AP3.

## D6 — 7 five-step HELP/return-item remediation
### HELP-G11-SUPP-E01-01 | skill_id=G11-E01-EXPONENTIAL_MODEL | return_item=THPT-G11-SUPP-E01-P01
1. Chẩn đoán: Cộng số tăng cố định thay vì nhân 1+r?
2. Bản chất: Mỗi năm nhân trên tổng năm trước.
3. Gỡ lỗi: Liệt kê N0,N1,N2 rồi rút ra (1+r)^n.
4. Tự thử độc lập: 100 tăng 10% hai năm cho 121.
5. Quay lại: Quay lại P01 và giải thích k=ln(1+r).

### HELP-G11-SUPP-E01-02 | skill_id=G11-E01-HALF_LIFE | return_item=THPT-G11-SUPP-E01-P02
1. Chẩn đoán: Chỉ đếm chu kì bán rã nguyên?
2. Bản chất: A/A0=2^(-t/T), t/T có thể là số thực.
3. Gỡ lỗi: Kiểm đơn vị năm của t và T rồi chia.
4. Tự thử độc lập: Sau T/2 còn 1/√2.
5. Quay lại: Quay lại P02, giữ 15/10=1,5 chu kì.

### HELP-G11-SUPP-E01-03 | skill_id=G11-E01-PH_SCALE | return_item=THPT-G11-SUPP-E01-P03
1. Chẩn đoán: Quên dấu trừ trước log?
2. Bản chất: pH=-log10[H+], giảm nồng độ làm tăng pH.
3. Gỡ lỗi: Viết hai nồng độ ở dạng 10^(-pH).
4. Tự thử độc lập: 10^-2 xuống 10^-3 làm pH 2→3.
5. Quay lại: Quay lại P03 và so 10^-4/10^-6.

### HELP-G11-SUPP-E01-04 | skill_id=G11-E01-DECIBEL_SCALE | return_item=THPT-G11-SUPP-E01-P05
1. Chẩn đoán: Quên hệ số 10 bên ngoài log?
2. Bản chất: Chênh L=10log10(I2/I1).
3. Gỡ lỗi: Cô lập log10(k)=ΔL/10 trước khi lấy 10 mũ.
4. Tự thử độc lập: Tăng 20dB nghĩa là I gấp 100.
5. Quay lại: Quay lại P05, không đồng nhất dB và cảm giác.

### HELP-G11-SUPP-E02-01 | skill_id=G11-E02-LINE_PLANE_MEASURE | return_item=THPT-G11-SUPP-E02-P02
1. Chẩn đoán: Dùng sin khi mẫu số là cạnh kề?
2. Bản chất: Dựng tam giác vuông có cao đối, bóng kề.
3. Gỡ lỗi: Tan=h/bóng, cạnh huyền phải tính riêng.
4. Tự thử độc lập: h=bóng ⇒ góc 45°.
5. Quay lại: Quay lại P02, kiểm sin bằng cạnh huyền.

### HELP-G11-SUPP-E02-02 | skill_id=G11-E02-DIHEDRAL_MEASURE | return_item=THPT-G11-SUPP-E02-P03
1. Chẩn đoán: Đọc góc trên phối cảnh thay góc phẳng?
2. Bản chất: Hai tia đo trong hai mặt cùng vuông góc d tại H.
3. Gỡ lỗi: Dựng mặt phẳng cắt vuông góc giao tuyến d.
4. Tự thử độc lập: Hai mặt vuông góc thì góc phẳng 90°.
5. Quay lại: Quay lại P03 và bỏ đường chéo tùy tiện.

### HELP-G11-SUPP-E02-03 | skill_id=G11-E02-VOLUME_MODEL | return_item=THPT-G11-SUPP-E02-P04
1. Chẩn đoán: Áp dụng 1/3 cho lăng trụ?
2. Bản chất: V lăng trụ=Sđáy·h; V chóp=Sđáy·h/3.
3. Gỡ lỗi: Kiểm đơn vị cm²×cm=cm³.
4. Tự thử độc lập: S=10,h=2 thì lăng trụ V=20.
5. Quay lại: Quay lại P04, h=V/Sđáy.


## SOURCE-LOCKED NOTEBOOKLM REVIEW GATE — AUTHOR CANDIDATE ONLY
Exactly 11 RD0 outcomes, 12 D2 guided examples, 21 D3 unique Core/Practice/Application, 6 D4 Written with 3 Anchor tags, 5 D5 original SVG files authored (independent reviewer verdict pending), 7 D6 HELP. One item ID per question, primary outcome in heading, protected RD1 absent from this public source. All items are original, not copies of source S1 text.
Academic/PED independent PASS has **not been obtained** for this new SGK experiential supplement; must review using the five permanent THPT v2.1 sources and owner SGK/SBT originals. Q07/PED4 `ORIGINAL_SVG_CREATED_REVIEW_PENDING`, Q18 `NOTEBOOKLM_VERDICT_PENDING` prevent CONTENT_READY. SGK cross-chapter supplement scope does not create Chapter X nor replace independently tested SGK/Topic readiness. Release authorization NO.


## D5 SOURCE FILE COMPLETION — 5 actual original SVG files committed, structural QA still pending
- `prototypes/thpt/review-packets/Temp_FIG-G11-SUPP-E01-01_R00.svg` — original authored figure, review against lesson teaching claims and visual labels required.
- `prototypes/thpt/review-packets/Temp_FIG-G11-SUPP-E01-02_R00.svg` — original authored figure, review against lesson teaching claims and visual labels required.
- `prototypes/thpt/review-packets/Temp_FIG-G11-SUPP-E02-01_R00.svg` — original authored figure, review against lesson teaching claims and visual labels required.
- `prototypes/thpt/review-packets/Temp_FIG-G11-SUPP-E02-02_R00.svg` — original authored figure, review against lesson teaching claims and visual labels required.
- `prototypes/thpt/review-packets/Temp_FIG-G11-SUPP-E02-03_R00.svg` — original authored figure, review against lesson teaching claims and visual labels required.
These are real SVG sources, **not merely specifications**, but authoring structural render validation and independent NotebookLM Q07/PED4 are still required before Academic/PED CONTENT_READY. RELEASE AP3 later checks the exact HTML/rasterized figure on devices.


## D6 OUTCOME-COVERAGE ADDENDUM — actual recovery support for previously uncovered RD0 outcomes
### HELP-G11-SUPP-E01-05 | skill_id=G11-E01-RICHTER_SCALE | return_item=THPT-G11-SUPP-E01-P04
1. Chẩn đoán: Nhầm mức M với năng lượng động đất.
2. Bản chất: M=log10(I/S) ở đây chỉ mô tả **biên độ** theo tỉ số.
3. Gỡ lỗi và giới hạn: ΔM=log10(I1/I2), kiểm I1,I2>0.
4. Tự thử khác câu gốc: I1/I2=100 ⇒ ΔM=2.
5. Quay lại câu canonical: Quay lại P04, không suy năng lượng từ hệ số biên độ.

### HELP-G11-SUPP-E01-06 | skill_id=G11-E01-MODEL_ASSUMPTIONS | return_item=THPT-G11-SUPP-E01-P06
1. Chẩn đoán: Ngoại suy mà không ghi tốc độ không đổi.
2. Bản chất: Lũy thừa là dự báo có giả định dữ liệu và tốc độ thay đổi theo một quy tắc.
3. Gỡ lỗi và giới hạn: Viết mốc A0, đơn vị t, miền dự báo và điều kiện môi trường.
4. Tự thử khác câu gốc: Nếu r năm sau khác năm trước, A0(1+r)^n không còn đúng với r cố định.
5. Quay lại câu canonical: Quay lại P06 và nêu ít nhất hai giới hạn.

### HELP-G11-SUPP-E02-04 | skill_id=G11-E02-NET_CONSTRUCTION | return_item=THPT-G11-SUPP-E02-P01
1. Chẩn đoán: Không kiểm cặp mép trước khi gấp giấy.
2. Bản chất: Đáy/mặt bên phải cùng kích thước tại mép dán; hộp không nắp thiếu một mặt.
3. Gỡ lỗi và giới hạn: Đánh số cặp cạnh cùng chiều dài và đánh dấu mặt cần bỏ.
4. Tự thử khác câu gốc: Hộp vuông không nắp có 5 mặt, không phải 6.
5. Quay lại câu canonical: Quay lại P01, giải thích điều kiện có thể khép.

### HELP-G11-SUPP-E02-05 | skill_id=G11-E02-GEOGEBRA_REPRESENTATION | return_item=THPT-G11-SUPP-E02-P05
1. Chẩn đoán: Vẽ cạnh khuất nét liền và nối nhầm đỉnh.
2. Bản chất: Hai đáy song song, các đỉnh tương ứng tạo cạnh bên song song; cạnh khuất dùng nét đứt.
3. Gỡ lỗi và giới hạn: Đánh nhãn A↔A', B↔B', C↔C', kiểm sự song song.
4. Tự thử khác câu gốc: Vẽ hai tam giác bằng nhau rồi nối đúng ba cặp đỉnh.
5. Quay lại câu canonical: Quay lại P05, tách điều đã chứng minh với điều chỉ nhìn thấy trên hình.
