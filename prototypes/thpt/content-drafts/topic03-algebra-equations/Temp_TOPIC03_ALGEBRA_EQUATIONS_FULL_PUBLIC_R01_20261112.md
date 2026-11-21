# CĐ03 — Phương trình đại số và Kỹ thuật chuyển đổi dạng

**Đơn vị học độc lập CĐ03/22**. Bố cục *duy nhất*: **Kiến thức / Luyện tập / Tự kiểm tra**. Không tạo Topic Core riêng; không chuyển kiến thức bắt buộc sang nhánh SGK. SGK/SBT KNTT là nguồn **xác định Core và tham chiếu kiểm chứng**, không phải thứ tự bài/chương của học liệu.

# Kiến thức

## Bài toán xuất phát: kết quả giải phương trình có thật sự đúng?

Khi quy về phương trình dễ giải hơn, ta có thể tạo ra **nghiệm ứng viên** không đúng phương trình xuất phát. Việc giải tốt không chỉ là tìm một x làm phương trình sau cùng đúng, mà là giữ được **miền xác định**, biết phép biến đổi nào hai chiều, kiểm dấu khi bình phương, giải thích loại nghiệm và thử nghiệm trong ngữ cảnh. Đường đi: mệnh đề/tập nghiệm → phép biến đổi tương đương → phương trình nền → mẫu và trị tuyệt đối → phương trình chứa căn → đổi ẩn/ứng dụng.

**Tiền đề học ngay ở đây:** ℝ là số thực; S là tập nghiệm; sqrt(u) là căn bậc hai số học chỉ tồn tại với u≥0 và có giá trị không âm; |u|≥0, bằng u khi u≥0 và bằng −u khi u<0; a·b=0 thì a=0 hoặc b=0; với a≠0, ax²+bx+c=0 giải bằng Δ=b²−4ac. Người học chưa biết sẵn có thể tự theo M01–M04; không yêu cầu nhảy sang SGK.

## Ba mạch kỹ thuật cần phân biệt

**A. Bảo toàn tập nghiệm** (M01–M06): các phép biến đổi tương đương, điều kiện mẫu, nghiệm của phương trình tuyến tính/bậc hai/tích/trị tuyệt đối. **B. Phép biến đổi chỉ suy ra** (M07–M10): hai căn, một căn, nghiệm ngoại lai và kiểm dấu. **C. Đổi dạng có điều kiện và mô hình** (M11–M12): đặt t=x² và điều kiện thực tế. Phương trình lượng giác được học trong CĐ06; mũ/logarit CĐ04; bất phương trình và miền nghiệm thuộc CĐ02, không trộn các chuyên đề làm một.

## TOP03-M01 · Phương trình, tập nghiệm và phép tương đương

**Mục tiêu TOP03-O01:** Giữ nguyên tập nghiệm khi biến đổi.
**Vì sao cần học?** Tìm một số x chưa đủ: mỗi bước giải phải giữ nguyên những giá trị thực sự làm phương trình đúng.
**Nhắc tiền đề tại chỗ:** Mệnh đề bằng nhau, tập hợp nghiệm, phép cộng/trừ/chia cho số khác 0.
**Hình thành bản chất trước công thức:** Phương trình P(x)=Q(x) hỏi những x trong **miền xác định chung** làm P=Q. Phép cộng cùng biểu thức đã xác định vào hai vế, hay nhân/chia **số khác 0**, giữ tập nghiệm; bình phương hai vế chỉ có một chiều suy ra nếu không kiểm soát dấu. Phép ‘chia hai vế cho (x−a)’ có nguy cơ loại nghiệm x=a. Kết quả cuối phải thay được vào phương trình đầu.
**Ví dụ có suy luận và lý do chọn cách làm:** x+5=12 ⇔ x=7 do trừ 5 hai vế. Thử 7+5=12. Còn x=3 ⇒ x²=9 nhưng ngược lại sai vì x=−3 cũng thỏa x²=9; đó là lí do không dùng kí hiệu ⇔ tùy tiện.
**Tự thử trước khi mở đối chiếu:** Giải 3x+2=11; mỗi bước có tương đương không?
**Tự mở đối chiếu sau khi đã thử:** 3x=9 ⇒ x=3; trừ 2 và chia 3≠0 đều đảo ngược được.
**Nếu còn vướng — D6:** Nếu bỏ bước thử hoặc dùng ⇔ cho bình phương, thử một nghiệm âm của phương trình mới để thấy sai; luyện ADD01, ADD02.
**Họ dạng:** `TRANSFORMATION-EQUIVALENCE` · **Vai trò nguồn:** `SGK_PREREQUISITE`.
**Câu luyện tập gắn outcome:** `THPT-TOP03-ADD01`; `THPT-TOP03-ADD02`.

## TOP03-M02 · Phương trình bậc nhất và hệ số suy biến

**Mục tiêu TOP03-O02:** Không được chia cho biểu thức có thể bằng 0.
**Vì sao cần học?** Đôi khi phép chia mất cả một trường hợp vô số nghiệm; hiểu điều kiện chia quan trọng hơn thao tác máy.
**Nhắc tiền đề tại chỗ:** Thu gọn, phân phối, tính chất số 0.
**Hình thành bản chất trước công thức:** Với ax=b: nếu a≠0 có nghiệm duy nhất x=b/a; nếu a=0,b≠0 thì vô nghiệm; nếu a=b=0 thì mọi x∈ℝ đều là nghiệm. Khi a có chứa tham số m, phải xét a=0 trước. Đây là kỹ thuật nền để tự học phép quy về bậc hai.
**Ví dụ có suy luận và lý do chọn cách làm:** Giải m(x−2)=0: m≠0 ⇒ x=2; m=0 ⇒ 0=0 cho mọi x. Không thể chia cả hai vế cho m khi chưa biết m≠0.
**Tự thử trước khi mở đối chiếu:** Giải a(x−1)=0 theo tham số a.
**Tự mở đối chiếu sau khi đã thử:** Nếu a≠0 thì x=1, nếu a=0 thì mọi x∈ℝ.
**Nếu còn vướng — D6:** Nếu quên trường hợp hệ số 0, đặt a=0 và thử x=6; luyện ADD03, ADD04.
**Họ dạng:** `LINEAR-DEGENERACY` · **Vai trò nguồn:** `SGK_PREREQUISITE`.
**Câu luyện tập gắn outcome:** `THPT-TOP03-ADD03`; `THPT-TOP03-ADD04`.

## TOP03-M03 · Tích bằng 0 và phân tích nhân tử

**Mục tiêu TOP03-O03:** Một nghiệm có thể bị mất nếu triệt thừa số.
**Vì sao cần học?** Đưa phương trình về tích làm lộ nhiều nghiệm, nhưng chia cho một nhân tử có thể làm mất nghiệm ngay tại nhân tử ấy.
**Nhắc tiền đề tại chỗ:** Tính chất ab=0 ⇔ a=0 hoặc b=0.
**Hình thành bản chất trước công thức:** Nếu biểu thức đã có nghĩa với x đang xét thì A(x)B(x)=0 ⇔ A=0 hoặc B=0. Nghiệm kép khác với hai nghiệm thực phân biệt. Chia cho A(x) chỉ hợp lệ khi A(x)≠0, nếu không phải tách trường hợp A=0.
**Ví dụ có suy luận và lý do chọn cách làm:** x²−x−6=0 ⇔ (x−3)(x+2)=0 ⇒ x∈{3,−2}. Nếu vội chia cho x−3 sẽ làm mất x=3; vì thế ưu tiên quy tắc tích bằng 0.
**Tự thử trước khi mở đối chiếu:** Giải (x−5)(x+1)=0.
**Tự mở đối chiếu sau khi đã thử:** x=5 hoặc x=−1; thử vào từng thừa số.
**Nếu còn vướng — D6:** Nếu tìm được một nghiệm mà không xét nhân tử còn lại, quay lại ab=0 và luyện ADD05, ADD06.
**Họ dạng:** `ZERO-PRODUCT` · **Vai trò nguồn:** `SGK_PREREQUISITE`.
**Câu luyện tập gắn outcome:** `THPT-TOP03-ADD05`; `THPT-TOP03-ADD06`.

## TOP03-M04 · Phương trình bậc hai và biệt thức

**Mục tiêu TOP03-O04:** Phân biệt hai nghiệm, nghiệm kép và vô nghiệm thực.
**Vì sao cần học?** Bình phương hay khử mẫu thường đưa bài khó về phương trình bậc hai. Kết quả này tạo **ứng viên**, chưa bảo đảm thỏa điều kiện ban đầu.
**Nhắc tiền đề tại chỗ:** Hệ số a,b,c; công thức bình phương của tổng/hiệu.
**Hình thành bản chất trước công thức:** Với ax²+bx+c=0, a≠0, Δ=b²−4ac. Δ>0 có hai nghiệm thực x=(−b±√Δ)/(2a); Δ=0 một nghiệm kép; Δ<0 vô nghiệm trên ℝ. Dùng phân tích nhân tử nếu thấy dễ, dùng Δ khi không rõ nhân tử; phải xét lại miền của phương trình xuất phát nếu có mẫu/căn.
**Ví dụ có suy luận và lý do chọn cách làm:** x²−4x+3=0: Δ=16−12=4>0 ⇒ x=(4±2)/2∈{1,3}; kiểm (x−1)(x−3). Hai cách giải tương đương cho chính phương trình bậc hai này.
**Tự thử trước khi mở đối chiếu:** Giải x²+4x+4=0.
**Tự mở đối chiếu sau khi đã thử:** (x+2)²=0 ⇒ x=−2 (nghiệm kép), không phải hai giá trị khác nhau.
**Nếu còn vướng — D6:** Nếu Δ âm mà cho nghiệm thực, hoàn phương thành tổng số không âm để kiểm; luyện ADD07, ADD08.
**Họ dạng:** `QUADRATIC-ROOT-DELTA` · **Vai trò nguồn:** `SGK_PREREQUISITE`.
**Câu luyện tập gắn outcome:** `THPT-TOP03-ADD07`; `THPT-TOP03-ADD08`.

## TOP03-M05 · Phương trình phân thức và mẫu khác 0

**Mục tiêu TOP03-O05:** Không biến một điểm không xác định thành nghiệm.
**Vì sao cần học?** Khử mẫu rất nhanh nhưng chỉ đúng trên miền mẫu khác 0; một phép rút gọn có thể ‘lấp’ điểm biểu thức gốc vô nghĩa.
**Nhắc tiền đề tại chỗ:** Phân tích nhân tử, số hữu tỉ và mẫu số.
**Hình thành bản chất trước công thức:** Đầu tiên xét **mọi mẫu số khác 0**. Khi nhân hai vế với mẫu M(x), phép tương đương chỉ đúng **trên miền M(x)≠0**. Giải phương trình kết quả, loại các nghiệm làm mẫu bằng 0 và thay thử. Đây là cầu nối kỹ thuật cho CĐ03, không tự nhận mọi dạng phân thức là Core B18.
**Ví dụ có suy luận và lý do chọn cách làm:** (x+1)/(x−3)=2, x≠3. Nhân x−3 được x+1=2x−6 ⇒ x=7; thử (7+1)/(7−3)=8/4=2. Nếu nghiệm x=3 xuất hiện, phải loại chứ không được chia 0.
**Tự thử trước khi mở đối chiếu:** Giải (x²−9)/(x−3)=0.
**Tự mở đối chiếu sau khi đã thử:** Điều kiện x≠3. Tử (x−3)(x+3)=0 cho 3 hoặc −3; loại 3, nghiệm duy nhất −3.
**Nếu còn vướng — D6:** Nếu rút gọn rồi kết luận nhận x=3, thay x=3 vào mẫu để thấy vô nghĩa; luyện ADD09/ADD10.
**Họ dạng:** `RATIONAL-DOMAIN` · **Vai trò nguồn:** `SGK_PREREQUISITE`.
**Câu luyện tập gắn outcome:** `THPT-TOP03-ADD09`; `THPT-TOP03-ADD10`.

## TOP03-M06 · Phương trình có giá trị tuyệt đối

**Mục tiêu TOP03-O06:** Biến thành các nhánh đúng điều kiện dấu.
**Vì sao cần học?** Giá trị tuyệt đối luôn không âm; bỏ dấu bằng mắt có thể tạo nghiệm không có trong phương trình gốc.
**Nhắc tiền đề tại chỗ:** Giá trị tuyệt đối |u| là khoảng cách đến 0 trên trục số.
**Hình thành bản chất trước công thức:** Nếu |A|=c hằng số: c<0 vô nghiệm; c≥0 giải A=±c (c=0 hai nhánh trùng). Nếu |A(x)|=B(x), cần B(x)≥0 rồi tách A=B hoặc A=−B, **kiểm lại điều kiện trên từng nhánh**. Đây là cầu nối đại số của Topic, không tự nâng thành Core SGK B18.
**Ví dụ có suy luận và lý do chọn cách làm:** |x−1|=3 ⇒ x−1=3 hoặc −3 ⇒ x=4 hoặc −2; thử khoảng cách đến 1 đều là 3. Không thể chỉ lấy nghiệm x=4 vì giá trị tuyệt đối xóa dấu.
**Tự thử trước khi mở đối chiếu:** Giải |x+3|=x+3.
**Tự mở đối chiếu sau khi đã thử:** Vì |u|=u khi u≥0, ta có x+3≥0 ⇒ x≥−3. Thử x=−4 cho |−1|=1 khác −1.
**Nếu còn vướng — D6:** Nếu quên điều kiện B≥0, thử một x làm B âm; luyện ADD11/ADD12.
**Họ dạng:** `ABS-EQUATION` · **Vai trò nguồn:** `TOPIC_SUPPORTING_TECHNIQUE`.
**Câu luyện tập gắn outcome:** `THPT-TOP03-ADD11`; `THPT-TOP03-ADD12`.

## TOP03-M07 · Bình phương: biến đổi một chiều, không tự coi tương đương

**Mục tiêu TOP03-O07:** Nghiệm sau bình phương chỉ là ứng viên.
**Vì sao cần học?** Đây là nguyên nhân chính của nghiệm ngoại lai khi giải phương trình chứa căn.
**Nhắc tiền đề tại chỗ:** Dấu không âm của √A, bình phương hai vế.
**Hình thành bản chất trước công thức:** Từ A=B suy ra A²=B²; chiều đảo không đúng nếu A,B có thể trái dấu. Với √A(x)=B(x), **phải có B≥0**; sau đó A=B² và điều kiện có thể đủ. Nếu chỉ giải A=B² rồi bỏ B≥0 thì đang giải một phương trình rộng hơn. Cần thử từng nghiệm vào gốc.
**Ví dụ có suy luận và lý do chọn cách làm:** √(x+3)=x−1 ⇒ điều kiện x≥1; bình phương x+3=(x−1)² ⇒ x²−3x−2=0 ⇒ x=(3±√17)/2. Chỉ x=(3+√17)/2≥1 thỏa; nghiệm còn lại cho vế phải âm nên ngoại lai.
**Tự thử trước khi mở đối chiếu:** Giải √(x+1)=x.
**Tự mở đối chiếu sau khi đã thử:** Điều kiện x≥0; bình phương x+1=x² ⇒ x=(1±√5)/2. Chỉ x=(1+√5)/2≥0 được nhận.
**Nếu còn vướng — D6:** Nếu hai nghiệm sau bình phương đều được nhận, thử nghiệm âm và so dấu hai vế; luyện ADD13/ADD14.
**Họ dạng:** `SQUARING-ONE-WAY` · **Vai trò nguồn:** `SGK_B18_CORE_BRIDGE`.
**Câu luyện tập gắn outcome:** `THPT-TOP03-ADD13`; `THPT-TOP03-ADD14`.

## TOP03-M08 · Hai căn bằng nhau

**Mục tiêu TOP03-O08:** Đặt điều kiện cho cả hai căn.
**Vì sao cần học?** Một căn không xác định có thể tạo nghiệm ảo tưởng sau phép bình phương.
**Nhắc tiền đề tại chỗ:** Điều kiện √u xác định khi u≥0.
**Hình thành bản chất trước công thức:** Với √A(x)=√B(x) trên ℝ, tương đương với **A=B và A≥0** (khi A=B, B≥0 tự theo). Có thể ghi riêng A≥0, B≥0 để dễ kiểm. Tìm nghiệm ứng viên từ A=B, lọc miền trước khi thế. Không suy ra |A|=|B|.
**Ví dụ có suy luận và lý do chọn cách làm:** √(x+5)=√(3x+1): điều kiện x≥−1/3; bình phương x+5=3x+1 ⇒ x=2. Thử hai vế đều √7, đạt. Chọn dạng A=B vì hai vế căn số học cùng không âm.
**Tự thử trước khi mở đối chiếu:** Giải √(x²+5)=√(4x+2).
**Tự mở đối chiếu sau khi đã thử:** Miền x≥−1/2. Bình phương x²+5=4x+2 ⇒ (x−1)(x−3)=0, x=1 hoặc 3; cả hai hợp miền, thử được √6 và √14 tương ứng ở mỗi vế.
**Nếu còn vướng — D6:** Nếu quên một miền căn, thay nghiệm âm khiến radicand âm để tự bác; luyện ADD15 và C02/W18-01.
**Họ dạng:** `TWO-RADICAL-DOMAIN` · **Vai trò nguồn:** `SGK_B18_OUT01`.
**Câu luyện tập gắn outcome:** `THPT-G10-B18-C02`; `HPT-G10-CHVI-WRI-18-01`; `THPT-TOP03-ADD15`.

## TOP03-M09 · Một căn bằng một biểu thức thường

**Mục tiêu TOP03-O09:** Đặt dấu vế phải trước khi bình phương.
**Vì sao cần học?** Căn số học không âm, nên không thể bằng số âm dù phương trình sau bình phương thỏa.
**Nhắc tiền đề tại chỗ:** Căn √u không âm và công thức giải PT bậc hai.
**Hình thành bản chất trước công thức:** √A=B tương đương với **B≥0 và A=B²** trên ℝ; khi A=B²≥0 thì căn cũng xác định. Có thể ghi thêm A≥0 để học sinh kiểm, nhưng đó không phải điều kiện độc lập mới. Giải ứng viên từ A=B² rồi lọc dấu B và thử gốc.
**Ví dụ có suy luận và lý do chọn cách làm:** √(3x+1)=x−1: x≥1. Bình phương 3x+1=(x−1)² ⇒ x²−5x=0 ⇒ x=0 hoặc 5. Loại 0, nhận 5 vì √16=4=5−1.
**Tự thử trước khi mở đối chiếu:** Giải √(2x+7)=x+1.
**Tự mở đối chiếu sau khi đã thử:** Cần x≥−1. Bình phương x²−6=0 ⇒ x=±√6; chỉ +√6≥−1 đạt, âm bị loại. Thử căn bằng √6+1.
**Nếu còn vướng — D6:** Nếu chỉ dùng điều kiện A≥0 rồi giữ nghiệm B âm, thử gốc sẽ sai; luyện ADD16,C01,P01,P02.
**Họ dạng:** `ONE-RADICAL-SIGN` · **Vai trò nguồn:** `SGK_B18_OUT02`.
**Câu luyện tập gắn outcome:** `THPT-G10-B18-C01`; `THPT-G10-B18-P01`; `THPT-G10-B18-P02`; `THPT-TOP03-ADD16`.

## TOP03-M10 · Phân biệt nghiệm thật, ngoại lai và phương trình vô nghiệm

**Mục tiêu TOP03-O10:** Lọc bằng miền và bằng phép thử thật.
**Vì sao cần học?** Một phương trình bình phương có nghiệm không có nghĩa phương trình gốc có nghiệm.
**Nhắc tiền đề tại chỗ:** Quy trình √A=√B và √A=B, ĐKXĐ.
**Hình thành bản chất trước công thức:** Lập **bảng ứng viên**: nghiệm của phương trình biến đổi → điều kiện miền → điều kiện dấu của vế phải → thay thử gốc. Đặc biệt với hai căn, ứng viên có thể nằm ngoài miền xác định; với một căn bằng biểu thức, có thể sai do dấu. Phương trình vẫn có thể vô nghiệm sau khi lọc.
**Ví dụ có suy luận và lý do chọn cách làm:** √(x+6)=x−2: điều kiện x≥2. Bình phương x+6=(x−2)² ⇒ x²−5x−2=0, nghiệm (5±√33)/2. Chỉ nghiệm dương lớn hơn 2 hợp lệ; nghiệm âm là ngoại lai do vế phải âm. Kiểm x=(5+√33)/2 làm hai vế bằng nhau.
**Tự thử trước khi mở đối chiếu:** Giải √(x²+5)=x−2 trong ℝ.
**Tự mở đối chiếu sau khi đã thử:** Điều kiện x≥2. Bình phương x²+5=x²−4x+4 ⇒ x=−1/4, trái miền. Vậy S=∅, không nhận ứng viên.
**Nếu còn vướng — D6:** Nếu kết luận nghiệm chỉ bằng giải phương trình sau bình phương, hãy lập bảng ‘ứng viên→miền→dấu→gốc’; luyện ADD17,ADD18 và W01.
**Họ dạng:** `CANDIDATE-FILTER` · **Vai trò nguồn:** `SGK_B18_OUT03`.
**Câu luyện tập gắn outcome:** `THPT-G10-B18-P03`; `THPT-TOP03-ADD17`; `THPT-TOP03-ADD18`; `THPT-TOP03-W01`.

## TOP03-M11 · Đặt ẩn phụ có điều kiện cho phương trình trùng phương

**Mục tiêu TOP03-O11:** Từ t=x² chỉ được nhận t≥0.
**Vì sao cần học?** Một phương trình bậc bốn đôi khi trở thành bậc hai nhưng nghiệm ẩn phụ âm không có nghĩa trên ℝ.
**Nhắc tiền đề tại chỗ:** Bình phương ≥0 và nghiệm PT bậc hai.
**Hình thành bản chất trước công thức:** Với x⁴+px²+q=0, đặt t=x²≥0. Giải t²+pt+q=0, **lọc t≥0**, rồi giải x²=t: t=0 cho x=0, t>0 cho x=±√t. Đây là *luyện tập mở rộng tự chọn* để hiểu kỹ thuật đổi dạng, không coi là Core bắt buộc của SGK B18.
**Ví dụ có suy luận và lý do chọn cách làm:** x⁴−10x²+9=0 ⇒ t²−10t+9=(t−1)(t−9)=0 ⇒ t=1 hoặc 9, x=±1 hoặc ±3. Không nhận t âm.
**Tự thử trước khi mở đối chiếu:** Giải x⁴−2x²−3=0.
**Tự mở đối chiếu sau khi đã thử:** t=x²≥0; t²−2t−3=(t−3)(t+1)=0. Chỉ t=3 hợp lệ ⇒ x=±√3.
**Nếu còn vướng — D6:** Nếu suy x²=−1 có nghiệm thực, kiểm tính không âm của bình phương; luyện ADD19,ADD20.
**Họ dạng:** `SUBSTITUTION-NONNEGATIVE` · **Vai trò nguồn:** `TOPIC_OPTIONAL_EXTENSION`.
**Câu luyện tập gắn outcome:** `THPT-TOP03-ADD19`; `THPT-TOP03-ADD20`.

## TOP03-M12 · Mô hình thực tế và kiểm nghiệm bằng đơn vị

**Mục tiêu TOP03-O12:** Đặt biến, điều kiện, phương trình và thử tình huống.
**Vì sao cần học?** Trong hình học và chuyển động, một nghiệm âm hay thời gian vô nghĩa không thể dùng làm đáp án.
**Nhắc tiền đề tại chỗ:** Pythagore, quãng đường/vận tốc=thời gian, đơn vị đo.
**Hình thành bản chất trước công thức:** Ghi biến, đơn vị và điều kiện **trước** phương trình. Chọn mô hình căn độ dài nếu cạnh huyền, phân thức nếu thời gian; giải thành phương trình đại số, lọc điều kiện, kiểm tính đúng của cả số lẫn đơn vị. Dạng mô hình xe là tự biên soạn bổ trợ, không nói là bài SGK B18 bắt buộc.
**Ví dụ có suy luận và lý do chọn cách làm:** Tam giác vuông có hai cạnh góc vuông x>0 và x+7 mét, cạnh huyền 13 mét: √[x²+(x+7)²]=13. Bình phương 2x²+14x+49=169 ⇒ x²+7x−60=0 ⇒ (x+12)(x−5)=0. Nhận x=5, loại −12; ba cạnh 5,12,13 m, thử 25+144=169.
**Tự thử trước khi mở đối chiếu:** Một xe đi 90 km với tốc độ v>0; nếu tăng 15 km/h thì nhanh hơn 1 giờ. Tìm v.
**Tự mở đối chiếu sau khi đã thử:** 90/v−90/(v+15)=1 ⇒ v²+15v−1350=0 ⇒ (v−30)(v+45)=0. Lọc v>0 ⇒ v=30 km/h; thời gian 3 giờ và 2 giờ.
**Nếu còn vướng — D6:** Nếu quên miền vật lý hoặc mẫu v(v+15)≠0, đặt biến/đơn vị lại rồi thử số; luyện ADD21,P04,W18-02,W02.
**Họ dạng:** `REAL-WORLD-MODEL` · **Vai trò nguồn:** `SGK_B18_OUT04`.
**Câu luyện tập gắn outcome:** `THPT-G10-B18-P04`; `HPT-G10-CHVI-WRI-18-02`; `THPT-TOP03-ADD21`; `THPT-TOP03-W02`.

## Cách đọc sơ đồ — không học thuộc hình thay lập luận

- [Biến đổi tương đương ⇔ và chỉ suy ra ⇒](../../visuals/THPT_TOPIC03_EQUIVALENCE_VS_SQUARING_R01.svg): Git blob `abb748c7b13dadc1786ea0de5f489a09dd2fe676`. Đọc mũi tên hai chiều ở phép trừ cùng lượng; mũi tên một chiều khi bình phương, thử x=−2 để phát hiện chiều đảo không đúng.
- [Miền xác định và hai nghiệm ứng viên](../../visuals/THPT_TOPIC03_RADICAL_DOMAIN_NUMBERLINE_R01.svg): Git blob `7ee7acd819d9f6d8eb66bcc4ac8abebfd7d4521b`. Với √(x²+7x+11)=√(x+3), hai ứng viên −4,−2; điều kiện x≥−3 loại −4, nhận −2. Mốc −3 là **biên miền**, không phải nghiệm.
- [Sơ đồ giải hai dạng phương trình căn](https://github.com/TMA2015/self-learning-math/blob/main/docs/assets/images/thpt/THPT_G10_CHVI_B18_RADICAL_FLOW_D5_R03.svg): Git blob `57dc5868ca6b726c4936b2b5e5a3419112752930`. Đọc nhánh √A=√B và √A=B, theo mũi tên điều kiện→giải ứng viên→thử lại. Đây là SVG nguồn gốc, trong gói mới chỉ **tái sử dụng**, không sửa.

## Hai mô hình tương tác cần xây dựng (đặc tả, không giả nhận đã chạy)

- `TOP03_EQUIVALENCE_LAB_SPEC_ONLY`: học sinh chọn phép nhân/chia, bình phương, khử mẫu, hiện trước–sau tập nghiệm và cảnh báo khi phép không hai chiều; cho thử trường hợp nhân với 0, chia cho x−a, x và −x khi bình phương. Yêu cầu keyboard/touch/text alternative; **chưa có code runtime**.
- `TOP03_ROOT_FILTER_LAB_SPEC_ONLY`: từ √A=√B hoặc √A=B cho học sinh đánh dấu miền trên trục, xét dấu B, bấm xem nghiệm ứng viên, tự loại và thử vào gốc; hiển thị nguyên nhân loại “căn âm”/“vế phải âm”. Mọi đáp án học liệu ở đây là public Practice; mô hình chưa tích hợp website.

# Luyện tập

**Ngân hàng PUBLIC canonical độc nhất: 31 ID** gồm **8 ID G10 B18 nguồn gốc review** (6 câu Practice, 2 Written, rubric gốc lần lượt 5 và 6 điểm) cùng **23 ID CĐ03 tự biên soạn** (21 Practice, 2 Written rubric 7 điểm). Mỗi item ID chỉ có một stem/key/solution/rubric trong nguồn canonical; trang này chỉ đặt `placement_id`, **không nhân bản**. Anchor là nhãn của Written, không phải thư viện thứ hai. Số lượng không thay QA theo outcome và độ sâu suy luận.

| Mô-đun/outcome | Họ dạng/câu hỏi phải biết tự giải | Câu PUBLIC canonical một nguồn |
|---|---|---|
| `TOP03-M01` / `TOP03-O01` | Giữ nguyên tập nghiệm khi biến đổi; `TRANSFORMATION-EQUIVALENCE` | `THPT-TOP03-ADD01`; `THPT-TOP03-ADD02` |
| `TOP03-M02` / `TOP03-O02` | Không được chia cho biểu thức có thể bằng 0; `LINEAR-DEGENERACY` | `THPT-TOP03-ADD03`; `THPT-TOP03-ADD04` |
| `TOP03-M03` / `TOP03-O03` | Một nghiệm có thể bị mất nếu triệt thừa số; `ZERO-PRODUCT` | `THPT-TOP03-ADD05`; `THPT-TOP03-ADD06` |
| `TOP03-M04` / `TOP03-O04` | Phân biệt hai nghiệm, nghiệm kép và vô nghiệm thực; `QUADRATIC-ROOT-DELTA` | `THPT-TOP03-ADD07`; `THPT-TOP03-ADD08` |
| `TOP03-M05` / `TOP03-O05` | Không biến một điểm không xác định thành nghiệm; `RATIONAL-DOMAIN` | `THPT-TOP03-ADD09`; `THPT-TOP03-ADD10` |
| `TOP03-M06` / `TOP03-O06` | Biến thành các nhánh đúng điều kiện dấu; `ABS-EQUATION` | `THPT-TOP03-ADD11`; `THPT-TOP03-ADD12` |
| `TOP03-M07` / `TOP03-O07` | Nghiệm sau bình phương chỉ là ứng viên; `SQUARING-ONE-WAY` | `THPT-TOP03-ADD13`; `THPT-TOP03-ADD14` |
| `TOP03-M08` / `TOP03-O08` | Đặt điều kiện cho cả hai căn; `TWO-RADICAL-DOMAIN` | `THPT-G10-B18-C02`; `HPT-G10-CHVI-WRI-18-01`; `THPT-TOP03-ADD15` |
| `TOP03-M09` / `TOP03-O09` | Đặt dấu vế phải trước khi bình phương; `ONE-RADICAL-SIGN` | `THPT-G10-B18-C01`; `THPT-G10-B18-P01`; `THPT-G10-B18-P02`; `THPT-TOP03-ADD16` |
| `TOP03-M10` / `TOP03-O10` | Lọc bằng miền và bằng phép thử thật; `CANDIDATE-FILTER` | `THPT-G10-B18-P03`; `THPT-TOP03-ADD17`; `THPT-TOP03-ADD18`; `THPT-TOP03-W01` |
| `TOP03-M11` / `TOP03-O11` | Từ t=x² chỉ được nhận t≥0; `SUBSTITUTION-NONNEGATIVE` | `THPT-TOP03-ADD19`; `THPT-TOP03-ADD20` |
| `TOP03-M12` / `TOP03-O12` | Đặt biến, điều kiện, phương trình và thử tình huống; `REAL-WORLD-MODEL` | `THPT-G10-B18-P04`; `HPT-G10-CHVI-WRI-18-02`; `THPT-TOP03-ADD21`; `THPT-TOP03-W02` |

**Tự luận (4 ID):** Hai câu nguyên gốc `HPT-G10-CHVI-WRI-18-01` có rubric **5 điểm** và `HPT-G10-CHVI-WRI-18-02` là Written gắn Anchor rubric **6 điểm**; hai câu mới `THPT-TOP03-W01` so nghiệm của √(x+7)=x−1 và √(x+7)=|x−1|, `THPT-TOP03-W02` mô hình vận tốc hai chặng, mỗi câu có rubric **7 điểm**. Chỉ tự đối chiếu, không máy chấm chính thức hoặc Mastery.

**Chọn đúng phương pháp:** mệnh đề/điều kiện tương đương M01; tuyến tính/suy biến M02; phân tích thành tích M03; Δ M04; khử mẫu **sau khi giữ miền** M05; phân nhánh trị tuyệt đối M06; bình phương có điều kiện M07–M10; t=x²≥0 M11 mở rộng; mô hình đặt biến, đơn vị và lọc nghiệm M12. Không coi nhãn bài SGK là bố cục của chuyên đề.

# Tự kiểm tra

**12 lượt công khai reuse-only** — mỗi outcome dùng một canonical ID đã gặp trong Luyện tập. Chế độ **`CLIENT_SELF_CHECK_NO_MASTERY`**, không tự nhận `TOPIC_READINESS` độc lập hoặc ghi Skill Mastery; ngân hàng câu RD1 kín không được đưa lên GitHub. Nếu sau này có đề chính thức, đề/đáp án/rubric phải độc lập, owner-held, có Final Submit bảo vệ.

**Trình tự yêu cầu RELEASE kiểm thật:** Trước **Final Submit**, không hiện hint, AI Tutor, lời giải, đáp án hay thông tin đúng/sai. Học sinh làm đủ lượt rồi nộp, sau đó mới tự đối chiếu và mở đường D6. Markdown này không phải website engine hay chứng cứ runtime đã khóa an toàn.

| Lượt | Outcome | PUBLIC item reuse | Trở lại nếu sai |
|---:|---|---|---|
| 1 | `TOP03-O01` | `THPT-TOP03-ADD01` | `TOP03-M01` |
| 2 | `TOP03-O02` | `THPT-TOP03-ADD03` | `TOP03-M02` |
| 3 | `TOP03-O03` | `THPT-TOP03-ADD05` | `TOP03-M03` |
| 4 | `TOP03-O04` | `THPT-TOP03-ADD07` | `TOP03-M04` |
| 5 | `TOP03-O05` | `THPT-TOP03-ADD09` | `TOP03-M05` |
| 6 | `TOP03-O06` | `THPT-TOP03-ADD11` | `TOP03-M06` |
| 7 | `TOP03-O07` | `THPT-TOP03-ADD13` | `TOP03-M07` |
| 8 | `TOP03-O08` | `THPT-G10-B18-C02` | `TOP03-M08` |
| 9 | `TOP03-O09` | `THPT-G10-B18-C01` | `TOP03-M09` |
| 10 | `TOP03-O10` | `THPT-G10-B18-P03` | `TOP03-M10` |
| 11 | `TOP03-O11` | `THPT-TOP03-ADD19` | `TOP03-M11` |
| 12 | `TOP03-O12` | `THPT-G10-B18-P04` | `TOP03-M12` |

**Sau nộp:** phân lỗi thành ‘điều kiện mẫu’, ‘điều kiện căn’, ‘nhân/chia làm mất nghiệm’, ‘bình phương tạo ngoại lai’, ‘trị tuyệt đối’, ‘phương trình bậc hai’, ‘đơn vị thực tế’. Tự quay về module và dùng câu canonical **khác** để luyện; không sử dụng câu đã hiện lời giải làm bằng chứng đánh giá độc lập.

## Phụ lục AUTHORING — không hiển thị trên giao diện học sinh

PACKET_ID: THPT-TOPIC03-ALGEBRA-EQUATIONS-FULL-R01
CATALOG_TOPIC_ID: CD03
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.1
LEARNING_PATH: TOPIC
OUTER_PAGES: KIEN_THUC / LUYEN_TAP / TU_KIEM_TRA
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
SGK_SOURCE_ROLE: S1_REFERENCE_ONLY
SGK_G10_T2_B18: KNTT printed pages SGK 25–27, SBT 19–21, verified historical reviewer receipt, not a newly opened PDF
ORIGINAL_INDEX_PATH: prototypes/thpt/shared-items/Temp_TOPIC03_EQUATION_ORIGINAL08_CANONICAL_INDEX_R01_20261112.md
ORIGINAL_INDEX_BLOB: b2e79a6cda5fdcc82dbd281e4273577ca637895e
NEW_PUBLIC_EXTENSION_PATH: prototypes/thpt/shared-items/Temp_TOPIC03_EQUATION_NEW23_PUBLIC_CANONICAL_R01_20261112.md
NEW_PUBLIC_EXTENSION_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65
VISUAL_OLD_FLOW_BLOB: 57dc5868ca6b726c4936b2b5e5a3419112752930
VISUAL_EQUIVALENCE_BLOB: abb748c7b13dadc1786ea0de5f489a09dd2fe676
VISUAL_DOMAIN_BLOB: 7ee7acd819d9f6d8eb66bcc4ac8abebfd7d4521b
TOPIC_OUTCOMES: 12
KNOWLEDGE_MODULES: 12
FIRST_TRY_REVEAL_D6: 12_EACH
CANONICAL_UNIQUE_PUBLIC_IDS: 31
PUBLIC_OLD_REUSE: 8
PUBLIC_NEW_ORIGINAL: 23
PUBLIC_WRITTEN: 4
PUBLIC_SELF_CHECK_REUSE: 12
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_TOPIC_READINESS: NOT_CLAIMED
PRIVATE_RD1_IMPORTED: 0
INTERACTION_MODELS_IMPLEMENTED: NO
RELEASE_AUTHORIZATION: NO

| canonical item_id | primary Topic outcome | role | one source blob |
|---|---|---|---|
| `THPT-G10-B18-C01` | `TOP03-O09` | TOPIC_PRACTICE | `1223d4c2b574433479c5d222dbeff363718ee4bb` |
| `THPT-G10-B18-C02` | `TOP03-O08` | TOPIC_PRACTICE | `1223d4c2b574433479c5d222dbeff363718ee4bb` |
| `THPT-G10-B18-P01` | `TOP03-O09` | TOPIC_PRACTICE | `1223d4c2b574433479c5d222dbeff363718ee4bb` |
| `THPT-G10-B18-P02` | `TOP03-O09` | TOPIC_PRACTICE | `1223d4c2b574433479c5d222dbeff363718ee4bb` |
| `THPT-G10-B18-P03` | `TOP03-O10` | TOPIC_PRACTICE | `1223d4c2b574433479c5d222dbeff363718ee4bb` |
| `THPT-G10-B18-P04` | `TOP03-O12` | TOPIC_PRACTICE | `1223d4c2b574433479c5d222dbeff363718ee4bb` |
| `HPT-G10-CHVI-WRI-18-01` | `TOP03-O08` | TOPIC_WRITTEN | `4da918f36d30c9b7110099e81fc88943e5b7705b` |
| `HPT-G10-CHVI-WRI-18-02` | `TOP03-O12` | TOPIC_WRITTEN | `4da918f36d30c9b7110099e81fc88943e5b7705b` |
| `THPT-TOP03-ADD01` | `TOP03-O01` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD02` | `TOP03-O01` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD03` | `TOP03-O02` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD04` | `TOP03-O02` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD05` | `TOP03-O03` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD06` | `TOP03-O03` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD07` | `TOP03-O04` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD08` | `TOP03-O04` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD09` | `TOP03-O05` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD10` | `TOP03-O05` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD11` | `TOP03-O06` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD12` | `TOP03-O06` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD13` | `TOP03-O07` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD14` | `TOP03-O07` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD15` | `TOP03-O08` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD16` | `TOP03-O09` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD17` | `TOP03-O10` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD18` | `TOP03-O10` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD19` | `TOP03-O11` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD20` | `TOP03-O11` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-ADD21` | `TOP03-O12` | TOPIC_PRACTICE | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-W01` | `TOP03-O10` | TOPIC_WRITTEN | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |
| `THPT-TOP03-W02` | `TOP03-O12` | TOPIC_WRITTEN | `fd85d7056f3b934f4599727f8c6da173cf05cd65` |

**Giới hạn Academic/Q18:** Nguồn G10 B18 công khai có 6 câu và 2 Written thuộc phạm vi review NotebookLM 28/10/2026; receipt gốc khóa snapshot 5 Temp_ SHA256, **không suy các tệp public đã qua merge byte-identical với Temp_**. Tác giả kiểm lại nội dung và giới hạn từng câu trên blob mới. CĐ03 mới là DELTA_C, kiểm tự thân theo `AUTHOR_SELF_VERIFIED` chủ dự án cho phép v3.0.1; không mạo nhận NotebookLM đã review CĐ03, không sửa SGK.
