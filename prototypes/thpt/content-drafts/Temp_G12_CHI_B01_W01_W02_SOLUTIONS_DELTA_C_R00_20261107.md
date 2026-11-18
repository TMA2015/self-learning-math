# Temp — Toán 12 KNTT Chương I, Bài 1: bổ sung lời giải cho hai Written gốc (TARGETED DELTA C R00)

PACKET_ID: G12-SGK-CHI-B01-W01-W02-SOLUTIONS-DELTA-C-R00-20261107
STANDARD_ID: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
REVIEW_SCOPE: ONLY_THPT-G12-CHI-B01-W01_AND_W02
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
ACADEMIC_VERDICT: PENDING_INDEPENDENT_NOTEBOOKLM_TARGETED_REVIEW
PED_VERDICT: PENDING_INDEPENDENT_NOTEBOOKLM_TARGETED_REVIEW
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PRIVATE_RD1_COUNT: 0
ISSUE: https://github.com/TMA2015/self-learning-math/issues/767

## 1. Nguồn và phạm vi bất biến

- SGK/SBT Kết nối tri thức **Toán 12, Tập Một**, Bài 1, nguồn S1 đã được thẩm định cho gói Chương I: SGK trang in 5–14, SBT trang in 4–13. SGK PDF SHA256: faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd. SBT PDF SHA256: db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca.
- Nguồn đã Academic/PED PASS và đang sử dụng ở RELEASE: prototypes/thpt/content-drafts/G12_SGK_CHI_B01_B05_FULL_CHAPTER_PUBLIC_CANONICAL_R00_SOURCE_CANDIDATE.md, Git blob **f0862dcdab21dec136e43969f45c42638e7c7574**. Biên bản review gốc Git blob **8fef1c7dbd9b404881ff40cec8147c9ae89ef473**; ngân hàng PUBLIC trên main là docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json, Git blob **4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a**.
- Đã kiểm **12/12 Written** ở nguồn nguyên bản Chương I: tất cả rubric đều ghi **/4**. Riêng W01, W02, bốn tiêu chí mỗi tiêu chí 1 điểm là đúng **/4**. Nếu giao diện hiển thị **/5**, đó là sai khác trình bày thuộc **DELTA_A_UI** của RELEASE; **KHÔNG** tự đổi rubric đã duyệt thành /5. Không cần thêm câu hỏi thứ 13.
- **Chỉ đề xuất bổ sung hai trường nội dung có mục đích khác nhau** trong chính hai bản ghi canonical hiện hữu: answer (đáp án tóm tắt) và solution (lời giải diễn giải đầy đủ). **Giữ nguyên** item_id, lesson, outcome, stem, role/placement, rubric nguyên văn, nguồn RD1 và mọi câu khác. Sau khi PASS phải tạo snapshot nguồn đầy đủ mới và bàn giao V2 bằng đúng một canonical nguồn/câu, không ghi chèn vào nguồn cũ đã PASS.

## 2. THPT-G12-CHI-B01-W01 — G12-B01-EXTREMA_SIGN_CHANGE

**Placement/role bất biến:** SGK_WRITTEN / WRITTEN.

**Đề gốc bất biến:** Khảo sát sự đồng biến, nghịch biến và cực trị của f(x)=x³−3x, tự vẽ phác thảo bảng dấu. Trình bày vì sao f′=0 riêng lẻ chưa phải kết luận.

**Rubric gốc nguyên văn — /4:** 1 điểm xác định D=ℝ và f′=3(x²−1); 1 điểm tìm đúng −1,1 và dấu +,−,+; 1 điểm nêu đúng các khoảng tăng/giảm; 1 điểm tính đúng cực đại (−1,2), cực tiểu (1,−2) và giải thích đổi dấu.

### Trường answer đề xuất (chỉ mở sau học sinh tự làm / đối chiếu)

Tập xác định $\mathbb R$. $f'(x)=3(x-1)(x+1)$, bằng 0 tại $-1$ và $1$; dấu đạo hàm là $+,-,+$ lần lượt trên $(-\infty,-1)$, $(-1,1)$ và $(1,+\infty)$. Hàm số tăng trên $(-\infty,-1)$ và $(1,+\infty)$, giảm trên $(-1,1)$. Cực đại địa phương ở $x=-1$ với $f(-1)=2$; cực tiểu địa phương ở $x=1$ với $f(1)=-2$. Cần xét **dấu đổi chiều** của $f'$ tại điểm tới hạn, không kết luận cực trị chỉ vì $f'=0$.

### Trường solution đề xuất (lời giải đầy đủ; chỉ mở sau học sinh tự làm / đối chiếu)

**Bước 1 — Xét điều kiện.** $f(x)=x^3-3x$ là đa thức nên xác định trên $D=\mathbb R$ và khả vi với mọi $x\in\mathbb R$.

**Bước 2 — Đạo hàm và các điểm cần kiểm tra.**
\[
f'(x)=3x^2-3=3(x-1)(x+1).
\]
Phương trình $f'(x)=0$ cho hai nghiệm $x=-1$ và $x=1$, chia trục số thành ba khoảng.

**Bước 3 — Xét dấu, không bỏ qua bước này.**
- Nếu $x<-1$: hai thừa số $(x-1)$ và $(x+1)$ đều âm, nên $f'(x)>0$.
- Nếu $-1<x<1$: một âm, một dương, nên $f'(x)<0$.
- Nếu $x>1$: cả hai dương, nên $f'(x)>0$.

Bảng biến thiên có hàng dấu đạo hàm **$+\;|\;0\;|\;-\;|\;0\;|\;+$** qua các mốc $-1$ và $1$. Hàng giá trị hàm: tăng đến $f(-1)=2$, giảm đến $f(1)=-2$, rồi lại tăng.

**Bước 4 — Kết luận đồng biến/nghịch biến và cực trị.** Hàm đồng biến trên $(-\infty,-1)$ và $(1,+\infty)$; nghịch biến trên $(-1,1)$. Tại $x=-1$, $f'$ đổi dấu **dương → âm**, nên $x=-1$ là điểm cực đại, giá trị cực đại địa phương $2$ (điểm trên đồ thị $(-1,2)$). Tại $x=1$, $f'$ đổi dấu **âm → dương**, nên $x=1$ là điểm cực tiểu, giá trị cực tiểu địa phương $-2$ (điểm $(1,-2)$).

**Bước 5 — Vì sao $f'(x_0)=0$ chưa đủ?** Đây mới là dấu hiệu của một **ứng viên điểm cực trị** đối với hàm khả vi trong khoảng đang xét. Phải kiểm tra sự đổi chiều đơn điệu, chẳng hạn xét dấu đạo hàm hai bên. Phản ví dụ $g(x)=x^3$ có $g'(0)=0$ nhưng $g$ đồng biến trên cả hai phía của 0, nên $x=0$ không là cực trị. Lưu ý hàm $f$ không có giá trị lớn nhất/nhỏ nhất toàn cục trên $\mathbb R$; các cực trị ở trên là **cực trị địa phương**, không phải cực trị toàn miền.

**D6 sau đối chiếu:** Nếu sai đạo hàm, trở về kiến thức $f'$; nếu tìm đúng $f'=0$ mà kết luận sai, làm lại bảng dấu và giải thích đổi dấu; nếu nhầm cực trị với GTLN/GTNN, đối chiếu định nghĩa cực trị địa phương và ứng dụng giới hạn miền ở Bài 2. Học sinh không tự cấp Mastery.

## 3. THPT-G12-CHI-B01-W02 — G12-B01-DOMAIN_INTERVALS

**Placement/role bất biến:** SGK_WRITTEN / ANCHOR_TAG. **Anchor là nhãn của đúng một item_id W02, không nhân bản câu.**

**Đề gốc bất biến:** Xét f(x)=1/(x−2). Chứng minh f nghịch biến trên mỗi thành phần khoảng của miền xác định; nêu một cặp x1<x2 ở hai phía x=2 cho thấy không thể gộp các khoảng vào một phát biểu "nghịch biến trên D".

**Rubric gốc nguyên văn — /4:** 1 điểm D=ℝ\{2}; 1 điểm f′=−1/(x−2)²<0; 1 điểm hai khoảng (−∞,2),(2,+∞); 1 điểm phản ví dụ f(1)=−1, f(3)=1 với 1<3 nhưng f(1)<f(3), nên không nghịch biến trên D theo định nghĩa toàn miền.

### Trường answer đề xuất (chỉ mở sau học sinh tự làm / đối chiếu)

$D=\mathbb R\setminus\{2\}$. $f'(x)=-1/(x-2)^2<0$ với mọi $x\in D$, nên $f$ nghịch biến trên **từng khoảng** $(-\infty,2)$ và $(2,+\infty)$. Nhưng $1<3$ đều thuộc $D$, trong khi $f(1)=-1<f(3)=1$; điều này trái với yêu cầu $f(x_1)>f(x_2)$ của một hàm nghịch biến khi lấy hai điểm bất kỳ $x_1<x_2$ trên toàn $D$. Không được gộp hai khoảng qua điểm $x=2$ bị loại.

### Trường solution đề xuất (lời giải đầy đủ; chỉ mở sau học sinh tự làm / đối chiếu)

**Bước 1 — Miền xác định là bước không thể bỏ qua.** Mẫu $x-2\ne0$, do đó $D=\mathbb R\setminus\{2\}=(-\infty,2)\cup(2,+\infty)$. Hai khoảng này rời nhau, **không** tạo thành một khoảng liên thông chứa $x=2$.

**Bước 2 — Đạo hàm trên từng thành phần miền xác định.**
\[
f'(x)=\left(\frac{1}{x-2}\right)'=-\frac{1}{(x-2)^2}.
\]
Với mọi $x\in D$, $(x-2)^2>0$, nên $f'(x)<0$.

**Bước 3 — Áp dụng đúng phạm vi của định lí dấu đạo hàm.** Trên mỗi khoảng $(-\infty,2)$ và $(2,+\infty)$, hàm xác định, liên tục và khả vi; đạo hàm luôn âm. Vì vậy theo tiêu chuẩn đơn điệu, hàm **nghịch biến trên từng khoảng** này.

**Bước 4 — Bác bỏ phát biểu gộp thành "nghịch biến trên D".** Chọn $x_1=1$ và $x_2=3$. Có $1<3$, cả hai thuộc $D$, nhưng
\[
f(1)=\frac1{1-2}=-1 < 1=\frac1{3-2}=f(3).
\]
Một hàm nghịch biến trên toàn tập xét theo so sánh mọi cặp $x_1<x_2$ phải cho $f(x_1)>f(x_2)$; cặp trên cho bất đẳng thức **ngược lại**. Vậy không thể kết luận hàm nghịch biến trên cả $D$ theo nghĩa toàn tập.

**Bước 5 — Chỉ ra lỗi tư duy cần tránh.** Mệnh đề "$f'(x)<0$ trên miền xác định" chỉ bảo đảm nghịch biến **trên từng khoảng nằm trọn trong miền xác định**. Không được áp dụng định lí trên đoạn $[1,3]$, vì tại $x=2$ hàm **không xác định**. Không thể đi xuyên qua điểm gián đoạn để nối hai bảng biến thiên thành một khoảng đơn điệu chung.

**D6 sau đối chiếu:** Nếu sai $D$, kiểm tra mẫu số trước khi đạo hàm; nếu nhầm "$f'<0$" thành "giảm trên mọi hợp khoảng", quay về điều kiện áp dụng trên **một khoảng**; nếu chưa hiểu phản ví dụ, so sánh trực tiếp $f(1)=-1$ với $f(3)=1$. Không ghi Mastery.

## 4. Ma trận hai câu gốc — giữ nguyên mọi khóa và rubric

| Canonical item_id | Lesson | Primary outcome | Role/placement | Sửa đổi duy nhất đề nghị |
| --- | --- | --- | --- | --- |
| THPT-G12-CHI-B01-W01 | G12-B01 | G12-B01-EXTREMA_SIGN_CHANGE | WRITTEN / SGK_WRITTEN | Thêm answer và solution riêng theo §§2; rubric nguyên /4 |
| THPT-G12-CHI-B01-W02 | G12-B01 | G12-B01-DOMAIN_INTERVALS | ANCHOR_TAG / SGK_WRITTEN | Thêm answer và solution riêng theo §§3; rubric nguyên /4; Anchor không nhân bản |

**Không phát sinh item_id mới**. Phần thêm mới là hai chuỗi đáp án tóm tắt, hai chuỗi lời giải đầy đủ và hai đường D6 trỏ về kiến thức gốc (không tạo điểm/câu mới). D1/D2/EX/Core/Practice và các Written khác giữ nguyên.

## 5. Cổng phản biện NotebookLM có mục tiêu — chỉ hai câu

**Q01–Q02:** Phạm vi B01 của SGK/SBT gốc có đúng định nghĩa đơn điệu trên khoảng, dấu đạo hàm và phân biệt cực trị địa phương hay không.

**Q04/Q06 (D2/D4):** Kiểm tra độc lập từng đạo hàm, bảng dấu, khoảng đơn điệu, cực đại/cực tiểu, phản ví dụ và lời giải từng bước; lời giải có đủ để tự học mà không giới thiệu quy tắc thiếu điều kiện hay không; rubric /4 cũ có hợp lí, đủ 4 tiêu chí hay cần sửa toán thật sự.

**PED3/PED5/PED6:** Ý nghĩa trước công thức, tại sao dùng định lí dấu đạo hàm **trên mỗi khoảng**, tại sao $f'=0$ chưa chứng minh cực trị, cách chỉ điểm sai thường gặp và đường khắc phục.

**Q15:** Hai item_id gốc duy nhất, W02 Anchor là nhãn chứ không phải câu chấm thêm.

**Q16:** answer/solution/rubric chỉ xuất hiện **sau Final Submit hoặc hành động tự đối chiếu cho phép** ở vùng public; không tính Mastery, không ghép RD1.

**Q18:** Xác nhận chỉ bổ sung lời giải cho hai câu đã có và giữ bất biến các Git blob lịch sử. Kết quả reviewer cần SOURCE_RECEIPT và P0/P1/P2, MINIMAL_DELTA ở cấp hai item. Không tự cấp PASS.

## 6. Phân ranh AUTHORING và RELEASE khi đóng Issue #767

- **AUTHORING DELTA C (đang review):** lời giải mới cho hai câu W01/W02; không đổi gốc /4 hoặc nguồn cũ. Sau Academic+PED PASS phần ảnh hưởng, mới tạo một nguồn canonical version mới + receipt SHA + targeted V2 handoff.
- **RELEASE DELTA A (tách riêng):** nếu UI đang ghi "/5" thì hiển thị **/4 đúng nguồn đã duyệt**, hoặc diễn đạt "4 tiêu chí, tối đa 4 điểm" theo Golden UI; không làm lại toán, không sửa ngân hàng câu hỏi khi chưa có review. UI có thể hiển thị rubric hiện có như **"Tiêu chí tự đối chiếu; nguồn chưa có lời giải riêng"** cho đến khi SOURCE_DELTA_C_CONTENT_READY.
- **STATUS:** REVIEW_PENDING cho lời giải hai câu, không đóng Issue #767 và không tuyên bố RELEASE được bỏ HOLD chỉ nhờ tạo bản đề xuất.
