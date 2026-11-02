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
