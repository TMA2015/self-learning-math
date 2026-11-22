# Chuyên đề Hàm số và đồ thị — M6: Thay đổi “ngay lúc này” là gì?

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M6-R01-20261107  
**SOURCE_TYPE:** AUTHORING CANDIDATE; DELTA_C pedagogical material, NOT independently Academic/PED PASS  
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18, one norm; PED is flexible, not a rigid page template  
**PATH:** TOPIC (Kiến thức → Luyện tập → Tự kiểm tra), no separate Core. This is the learner-facing Knowledge draft; source/audit metadata is for author only.  
**DIRECT S1:** Original SGK KNTT Toán 11 Tập 2, printed p81–87 B31, p88–94 B32, p95–96 B33 (PDF 1-based p82–88, p89–95, p96–97). Original SBT KNTT 11 Tập 2, printed p54–57 B31, p58–60 B32, p61–62 B33 (PDF p55–58, p59–61, p62–63), plus end ChIX p63–65. Each relevant page visually inspected.  
**SOURCE ORIGINAL SHA256:** SGK 11 T2 14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491; SBT 11 T2 a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189.  
**G11 EXISTING CANONICAL SOURCE:** prototypes/thpt/content-drafts/G11_CHIX_B31_B33_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md, Git blob 3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0; any identical SGK example/item keeps same source ID and solution. No RD1/private assessment information here.

## M6.1 — Vì sao vận tốc trung bình chưa trả lời câu hỏi “ngay lúc này”?

Nếu đi được 100 m trong 20 s, tốc độ trung bình bằng 5 m/s, nhưng từng giây có thể nhanh, chậm khác nhau. Khi đại lượng s(t) là **vị trí có dấu** trên trục, độ thay đổi trung bình từ thời điểm t đến t+h là

\[
\frac{s(t+h)-s(t)}{h},\qquad h\ne0.
\]

Tử là độ dời có dấu, nên kết quả là **vận tốc trung bình có dấu** (m/s), không nhất thiết là tốc độ trung bình theo tổng quãng đường nếu vật quay đầu.

Hãy xét mô hình s(t)=t²+2t (m) với t≥0 (s). Quanh t=2:

\[
\frac{s(2+h)-s(2)}h
=\frac{(2+h)^2+2(2+h)-8}h
=6+h
\]

với h khác 0 và thời điểm hợp lệ. Khi h ngày càng gần 0, thương tiến tới 6; ta nói vận tốc **tức thời** lúc t=2 là 6 m/s. Đây là lý do cần khái niệm **giới hạn** từ M5. Không thay h=0 vào phân thức gốc: nó chưa xác định ở h=0.

Tổng quát, nếu giới hạn hữu hạn

\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h
\]

tồn tại ở điểm a thuộc **phần trong của miền xác định**, ta gọi đó là đạo hàm tại a và hàm là **khả vi** ở a. Có thể dùng dạng tương đương giới hạn của [f(x)−f(a)]/(x−a) khi x tiến a. Đạo hàm f'(a) là **một số**, còn f'(x) là **một hàm** cho độ dốc tức thời tại các điểm trong miền thích hợp.

**Lưu ý miền:** ở điểm đầu mút chỉ tiếp cận từ một phía, có thể nói về đạo hàm một phía, nhưng không coi là đạo hàm hai phía trên khoảng. f(x)=√x xác định tại 0; thương bên phải [√h−0]/h=1/√h tiến +∞, không có đạo hàm hữu hạn tại 0.

**Tự thử M6-T01.** Tự tính thương sai phân của f(x)=x² tại a=1 rồi giải thích giá trị khi h→0. Vì sao h=0 không phải bước đầu?
<details><summary>Đã thử xong? Mở đối chiếu</summary>
Thương bằng ((1+h)²−1)/h=2+h với h≠0; giới hạn bằng 2. h=0 làm mẫu 0 ở phân thức ban đầu. Nếu còn lẫn, quay lại s(t) ở đầu mục.
</details>

## M6.2 — Từ cát tuyến đến tiếp tuyến, và khi đồ thị có góc nhọn

Trên đồ thị y=f(x), lấy P(a,f(a)) và Q(a+h,f(a+h)). Hệ số góc đường thẳng **cát tuyến** PQ chính là thương sai phân. Nếu độ dốc của các cát tuyến tiến đến một giá trị hữu hạn khi Q tiến sát P, đường thẳng qua P với độ dốc ấy là **tiếp tuyến**. Phương trình:

\[
y-f(a)=f'(a)(x-a).
\]

**Vì sao không viết luôn y=f'(a)x?** Vì tiếp tuyến phải đi qua điểm P đã biết, chứ không nhất thiết đi qua gốc O.

**Hình D5 dùng chung:** FIG-G11-CHIX-B31-01_R00.svg, Git blob ca0a19f3931983632f88754bf4317d012add6b79. Đọc điểm P(1,1) và Q(1,8;3,24) trên y=x²; độ dốc cát tuyến là 2,8. Khi Q trượt dần đến P, độ dốc tiến 2. Tiếp tuyến tại P là y−1=2(x−1), tức y=2x−1. Không dùng một hình chụp cát tuyến cố định như chứng minh giới hạn.

**Liên tục có đủ để có đạo hàm không?** Không. Hàm y=|x| liên tục tại 0 nhưng thương |h|/h bằng −1 với h<0 và +1 với h>0; hai giới hạn một phía khác nhau. Vì thế không có đạo hàm tại góc nhọn. **Có đạo hàm thì liên tục**, còn chiều đảo lại là sai. Hình D5 FIG-G11-CHIX-B31-02_R00.svg, blob b569565e99675ad5ba56a11fb38cf1f8977ba134: đọc hai nhánh gặp nhau ở O nhưng độ dốc −1 và +1, không gộp chúng thành một tiếp tuyến.

**Ví dụ có suy luận:** f(x)=x²−2x+3 tại a=2. Ta có f(2)=3, f'(x)=2x−2 nên f'(2)=2. Tiếp tuyến đi qua (2,3) và có hệ số góc 2: y−3=2(x−2), hay y=2x−1. Nếu học sinh viết y=2x, kiểm lại khi x=2 sẽ cho y=4, không đi qua (2,3).

**Tự thử M6-T02.** y=|x−2| liên tục tại x=2 không? Hệ số góc trái và phải là gì?
<details><summary>Đã tự làm? Mở đối chiếu</summary>
Hàm liên tục, nhận giá trị 0 tại 2 và tiến về 0 từ hai phía. Thương sai phân tại 2 từ trái bằng −1, từ phải +1, nên không khả vi tại 2. Nếu nhầm, quay lại hình góc nhọn.
</details>

## M6.3 — Tại sao cần bảng đạo hàm? Quy tắc là hệ quả của thay đổi

Tính giới hạn thương sai phân từ đầu cho mọi biểu thức dài rất dễ sai. Các quy tắc sau có ý nghĩa: tổng thay đổi từ hai phần, tích thay đổi vì **cả hai thừa số**, và hàm hợp thay đổi qua **hai tầng**.

Nếu u(x), v(x) khả vi tại điểm đang xét:

\[
(c)'=0,\quad (u\pm v)'=u'\pm v',\quad (cu)'=cu',
\]
\[
(uv)'=u'v+uv',\qquad (u/v)'=\frac{u'v-uv'}{v^2}\quad(v\ne0).
\]

**Bản chất quy tắc tích:** diện tích hình chữ nhật có hai cạnh u và v. Khi chúng đổi thêm Δu, Δv, diện tích tăng vΔu+uΔv+ΔuΔv. Khi chia cho Δx rồi cho Δx→0, nếu u,v khả vi, hạng chéo bậc hai mất đi; còn hai đóng góp vu'+uv'. **Hình D5:** FIG-G11-CHIX-B32-01_R00.svg, blob bc35da6f466cfaac519fe84e483856a3e4e24464, đọc vùng uv cũ, hai dải bổ sung và góc chéo nhỏ.

**Bản chất quy tắc dây chuyền:** f(x)=g(u(x)): trước hết x làm u thay, sau đó u làm g thay. Vì vậy f'=g'(u(x))u'(x) trên những điểm các đạo hàm phù hợp tồn tại. Hình D5 FIG-G11-CHIX-B32-02_R00.svg, blob 6493758f2ebf13f51a81847f91835b2ba1fcdb38, đọc hai mũi tên x→u→g(u), không bỏ đạo hàm tầng trong.

**Ví dụ 1 — tích và hợp:** F(x)=(x²+1)sin(2x). Tầng ngoài là **tích**; bên trong sin lại có **hàm hợp**:

\[
F'=2x\sin(2x)+2(x^2+1)\cos(2x).
\]

Không viết 2x·2cos(2x), vì đó là nhân hai đạo hàm, bỏ qua hai phần của quy tắc tích.

**Ví dụ 2 — thương và miền:** G(x)=x²/(x+1), điều kiện x≠−1. Chọn quy tắc thương:

\[
G'=\frac{2x(x+1)-x^2}{(x+1)^2}
=\frac{x(x+2)}{(x+1)^2}\quad(x\ne-1).
\]

Việc có công thức đơn giản không làm G hay G' nhận thêm giá trị ở x=−1.

**Tự thử M6-T03.** Lấy đạo hàm f(x)=x(x²+1) theo tích, rồi khai triển và lấy đạo hàm để kiểm.
<details><summary>Đã tính? Mở đối chiếu</summary>
f'=1·(x²+1)+x·2x=3x²+1. Khai triển f=x³+x cũng được 3x²+1. Nếu chỉ có 2x, em đã nhầm (uv)' với u'v'.
</details>

## M6.4 — Bảng công cụ chỉ dùng sau khi đã kiểm điều kiện

| Họ hàm | Công thức trên miền hợp lệ |
|---|---|
| c, x^n | (c)'=0; (x^n)'=n x^(n−1), khi hàm và quy tắc được định nghĩa; n nguyên là trường hợp cơ bản |
| √x | (√x)'=1/(2√x) chỉ khi x>0; √0 có nghĩa nhưng đạo hàm hữu hạn tại 0 không có |
| sin x, cos x | (sin x)'=cos x, (cos x)'=−sin x trên R |
| tan x, cot x | (tan x)'=1/cos²x khi cos x≠0; (cot x)'=−1/sin²x khi sin x≠0 |
| e^x, a^x | (e^x)'=e^x; (a^x)'=a^x ln a với a>0, a≠1 |
| ln x, log_a x | (ln x)'=1/x và (log_a x)'=1/(x ln a) với x>0, a>0, a≠1 |
| u(x) hợp | (sin u)'=u' cos u; (e^u)'=u'e^u; (ln u)'=u'/u với u>0; (√u)'=u'/(2√u) với u>0 |

**Nhắc tiền đề ở ngay Topic:** ln x là logarit cơ số e, với e>1; log_a x hỏi “phải nâng cơ số a lên mũ nào để được x”, nên đối số x phải dương. Tan x=sin x/cos x nên cos x khác 0; cot x=cos x/sin x nên sin x khác 0. Đạo hàm của hàm hợp không thể “bỏ tầng trong”.

**Cách chọn phép tính:** (1) ghi tập xác định gốc; (2) nhìn cấu trúc ngoài: tổng, tích, thương, hay hợp; (3) tính đạo hàm từng thành phần và tầng trong; (4) kiểm lại miền, dấu, mẫu; (5) nếu tại một điểm đặc biệt công thức không hợp lệ, quay về **định nghĩa thương sai phân**. Không tự suy đạo hàm tồn tại tại đầu mút của căn hay điểm loại của log/tan.

**Ví dụ 3 — căn:** H(x)=√(9−x²) xác định trên [−3,3], nhưng

\[
H'(x)=-x/\sqrt{9-x^2}\quad\text{chỉ trên }(-3,3).
\]

Tại ±3, căn bằng 0, mẫu đạo hàm không hợp lệ; không mở rộng đạo hàm sang hai đầu mút.

**Ví dụ 4 — tan hợp:** T(x)=tan(2x), miền x≠π/4+kπ/2 (k nguyên). T'(x)=2/cos²(2x) trên mỗi khoảng xác định. Dấu đạo hàm dương không có nghĩa T là một hàm đồng biến trên **toàn R**, vì miền bị chia nhánh.

**Ví dụ 5 — log hợp:** L(x)=ln(x²+1) có miền R; L'(x)=2x/(x²+1). Đạo hàm của x²+1 là 2x, không phải 1.

**Ví dụ 6 — mũ cơ số khác e:** N(x)=2^(−x) cho mọi x thực; N'=−2^(−x)ln2 <0. Dấu âm từ đạo hàm −x giải thích hàm giảm.

**Tự thử M6-T04.** Tìm miền và đạo hàm f(x)=ln(3x−1). Tại sao lời giải 1/(3x−1) thiếu một bước?
<details><summary>Đã thử? Mở đối chiếu</summary>
Miền x>1/3; f'=3/(3x−1) trên miền. Cần nhân đạo hàm tầng trong 3x−1 bằng 3.
</details>

## M6.5 — Đạo hàm cấp hai: vận tốc cũng thay đổi

Nếu s(t) là vị trí (m), v(t)=s'(t) là vận tốc có dấu (m/s), a(t)=v'(t)=s''(t) là gia tốc có dấu (m/s²). Ta lấy đạo hàm lần hai vì **muốn biết chính vận tốc đang đổi thế nào**, không vì một công thức thuộc lòng.

Với s(t)=12t−3t² (m) trên 0≤t≤4 (s), ở các thời điểm trong khoảng:
\[
v(t)=12-6t,\qquad a(t)=-6\ {\rm m/s^2}.
\]
Tại t=1, v=+6 và a=−6, trái dấu: tốc độ |v| đang giảm. Tại t=3, v=−6 và a=−6, cùng dấu: vật chuyển động theo chiều âm nhưng tốc độ |v| đang tăng. Tại t=2, v=0, xét hai khoảng lân cận thay vì gọi “nhanh/chậm” bằng quy tắc dấu đúng tại điểm dừng.

**Hình D5:** FIG-G11-CHIX-B33-01_R00.svg, blob 58fcb5ce261fe35d93d8eacd2af584c7b93dc1a9, có chuỗi quan hệ vị trí→vận tốc→gia tốc. Hướng dẫn đọc: xem tên đại lượng và đơn vị trên từng trục, rồi đối chiếu dấu v,a theo từng khoảng.

**Ví dụ 7 — tính hai lần:** f(x)=x³−3x²+2x có f'=3x²−6x+2, f''=6x−6. Tại x=1, f''=0; trong trường hợp này f'' đổi dấu qua 1, nên đồ thị đổi chiều lõm tại đó. Nhưng **chỉ riêng f''(a)=0 chưa chứng minh điểm uốn**. Phản ví dụ f(x)=x⁴: f''(x)=12x²≥0 cả hai phía của 0, f''(0)=0 nhưng không đổi chiều lõm.

**Cảnh báo không được nhầm:** f'(a)=0 là tiếp tuyến ngang, chưa đủ chứng minh cực trị; f''(a)>0 không đồng nghĩa f tăng tại a; gia tốc âm không đồng nghĩa vật luôn chậm dần. Việc khảo sát biến thiên/tối ưu cần dấu đạo hàm trên **các khoảng**, đó là mạch M7 tiếp theo.

**Tự thử M6-T05.** Với s(t)=t³−3t, tính vận tốc và gia tốc tại t=2, kể đơn vị nếu s (m), t (s).
<details><summary>Đã làm? Mở đối chiếu</summary>
v(t)=3t²−3, a(t)=6t; v(2)=9 m/s, a(2)=12 m/s². Nếu em ghi đơn vị gia tốc m/s, hãy nhớ gia tốc là vận tốc thay đổi theo thời gian.
</details>

**Tự thử M6-T06.** f(x)=x⁴ có f''(0)=0. Có được kết luận x=0 là điểm uốn không?
<details><summary>Đã giải thích? Mở đối chiếu</summary>
Không. f''(x)=12x² dương ở cả hai phía của 0, nên không có đổi chiều lõm. Cần thêm điều kiện/kiểm tra, không chỉ thế x=0.
</details>

## M6.6 — Khi em sai, nên quay lại đâu? (đường D6 tại Topic)

| Lỗi cụ thể | Bản chất bị bỏ quên | Cách sửa ngay tại Topic |
|---|---|---|
| Thế h=0 trước khi rút gọn | Thương sai phân chỉ định nghĩa khi h khác 0 | Quay lại M6.1 và TRY T01; khai triển rồi lấy giới hạn |
| Nói mọi hàm liên tục đều khả vi | Góc nhọn có hai độ dốc khác nhau | Quay lại hình B31-02 và TRY T02 |
| Viết y=f'(a)x | Tiếp tuyến còn phải qua (a,f(a)) | Dùng công thức y−f(a)=f'(a)(x−a) ở M6.2 |
| (uv)'=u'v' | Hai thừa số cùng tạo thay đổi | M6.3, hình hai dải diện tích, TRY T03 |
| Quên đạo hàm tầng trong | Hàm hợp thay qua hai tầng | M6.3–4, hình B32-02, TRY T04 |
| Công thức hợp lệ nhưng vượt miền | Mẫu/log/căn loại điểm đầu vào | M6.4, viết miền trước công thức |
| Gia tốc âm luôn chậm dần | Cần cả dấu vận tốc và gia tốc | M6.5, so t=1 và t=3 |
| f''(a)=0 suy ngay điểm uốn | Không đủ chứng cứ đổi chiều lõm | M6.5, x⁴ và TRY T06 |

**Ghi chú AUTHORING, không hiển thị nguyên văn:** Nội dung mới M6 là nguồn candidate, không phải lời giải SGK canonical thứ hai. Mỗi First Try mở đáp án tự nguyện chỉ là formative, không phải Topic Readiness/Final Submit và không ghi Mastery. Đồ thị SVG dùng lại source canonical qua placement; khi tích hợp Topic phải hiển thị hình ngay đây, không buộc học sinh mở SGK. Review NotebookLM mới theo đúng năm Permanent Sources v2.1 + S1, với SHA exact source. Không merge/deploy.
