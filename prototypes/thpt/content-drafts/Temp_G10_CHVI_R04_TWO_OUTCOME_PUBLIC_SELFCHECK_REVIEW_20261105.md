# Temp — G10 SGK Chương VI, R04: Bổ sung hai câu Tự kiểm tra theo outcome

PACKET_ID: G10-SGK-CHVI-R04-2OUTCOME-SELFCHECK-20261105
ROLE: AUTHORING_ONLY
STATUS: DELTA_C_NOTEBOOKLM_REVIEW_CANDIDATE
STANDARD_ID: SLM-THPT-QUALITY-ONE
GOVERNANCE_VERSION: 1.2.0
LEARNING_PATH: SGK_CHAPTER
REVIEW_SCOPE: ONLY_B16_OUT_04_AND_B17_OUT_01_NEW_WRITTEN_SELFCHECK_AND_D6
ACADEMIC_VERDICT_NEW: PENDING_INDEPENDENT_NOTEBOOKLM
PED_VERDICT_NEW: PENDING_INDEPENDENT_NOTEBOOKLM
R03_EFFECTIVE_SOURCE_GIT_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
R01_REVIEW_RECEIPT_GIT_BLOB: 23156f35aab6ec28771a6a57d48bad74f3900e9c
PUBLIC_CHVI_SELFCHECK_GIT_BLOB: 0760782256a2d8d91c398814e62d013cf6083eb7
SGK_TAP_HAI_SHA256: ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6
SBT_TAP_HAI_SHA256: 3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7
ITEMS_NEW: THPT-G10-B16-R06,THPT-G10-B17-R05
HELP_NEW: HELP-G10-CHVI-R04-B16-01,HELP-G10-CHVI-R04-B17-01
CLIENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
REVEAL: ONLY_AFTER_FINAL_SUBMIT
PRIVATE_RD1_COUNT: 0
NEW_SVG_COUNT: 0
CURRENT_PUBLIC_ITEM_COUNT_UNCHANGED: 72
PROPOSED_PUBLIC_COUNT_IF_APPROVED_AND_RELEASED: 74
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## I. Ranh giới nguồn S1 và khoảng trống học thuật

SGK/SBT Kết nối tri thức Toán 10 Tập Hai: Bài 16 trang in SGK 11–18, SBT 10–15; Bài 17 SGK 19–24, SBT 16–18. Số trang dựa trên receipt S1 đã khóa, không phải tuyên bố đã đọc lại PDF gốc ở lượt này.

Bản R03 giữ nguyên 19 outcome đã review, 19 vị trí FIRST_TRY (18 câu mới + một item chung với Core), 19 HELP D6, hai SVG mới và 54 item R01. Tất cả 18 câu tự kiểm tra hiện công khai trong CHVI.json có outcome_id còn trống; việc kiểm theo nội dung đề cho thấy:
- B16_OUT_04: B16-R01 hỏi đỉnh/trục, GTNN và tập giá trị nhưng chưa đòi xác định hai khoảng tăng/giảm, đặc biệt trên miền giới hạn.
- B17_OUT_01: B17-R01 và B17-R03 hỏi bất phương trình hoặc nghiệm kép nhưng chưa bắt phân biệt đủ ba trường hợp Δ<0, Δ=0, Δ>0 cùng dấu hệ số a.

Hai câu dưới đây bổ sung **độ sâu cần kiểm tra** trong tự kiểm tra cuối chương (không tạo ngân hàng RD1 bí mật). Đây là **DELTA_C học thuật mới**, bắt buộc NotebookLM phản biện độc lập riêng hai câu này trước khi AUTHORING có thể dùng kết quả. Không suy PASS R01/R03 sang R04.

## II. Ma trận item – outcome – role – Q16

| ITEM_ID canonical | Outcome chính | Outcome phụ chỉ gắn nhãn | Placement | Rubric |
| --- | --- | --- | --- | --- |
| THPT-G10-B16-R06 | B16_OUT_04 | B16_OUT_02 | SGK_CHAPTER_PUBLIC_SELF_CHECK_WRITTEN | 8 điểm |
| THPT-G10-B17-R05 | B17_OUT_01 | B17_OUT_02 | SGK_CHAPTER_PUBLIC_SELF_CHECK_WRITTEN | 10 điểm |

**Chính sách bắt buộc:** Trước Final Submit chỉ hiển thị đề và ô trả lời, không hiện đáp án, đúng/sai, hint, rubric, HELP hay AI Tutor. Sau Final Submit mới cho tự mở đáp án, lời giải, rubric và đường khắc phục. Không ghi Skill Mastery và không dùng lượt tự đối chiếu làm chứng cứ đánh giá độc lập. Lời giải trong nguồn NotebookLM là để REVIEW, không phải để lộ ở UI.

## III. Bài 16 — B16_OUT_04: tăng/giảm, cực trị và tập giá trị khi giới hạn miền

LESSON_ID: G10-SGK-B16
OUTCOME_ID: B16_OUT_04
ITEM_ID: THPT-G10-B16-R06
HELP_ID: HELP-G10-CHVI-R04-B16-01
S1: SGK B16 trang 11–18/SBT trang 10–15.

**PED1 — WHY:** Trong mô hình thực tế, giá trị có nghĩa thường bị giới hạn thời gian hoặc phạm vi giá. Tập giá trị trên toàn trục số không tự động là tập giá trị trên miền mô hình.

**PED2 — PRE:** Nhớ bình phương không âm, dạng đỉnh, hai phía trục đối xứng, ý nghĩa đồng/nghịch biến, cách kiểm tra đầu mút một đoạn.

**PED3 — MEANING:** Hàm \(f(x)=-(x-1)^2+9\) có giá trị lớn nhất ở \(x=1\) vì trừ bình phương; càng rời đỉnh thì f càng nhỏ. Nhưng khi chỉ xét \([-2;5]\), điểm ở xa đỉnh nhất bên phải có thể cho GTNN nhỏ hơn đầu bên trái. Phải kiểm tra chính **hai đầu đoạn**.

**PED4 — READ_VISUAL:** Phác parabol mở xuống, đỉnh I(1;9), trục x=1. Chỉ tô phần từ x=-2 đến x=5. Đi từ trái qua phải: đi lên đến đỉnh rồi đi xuống; điểm biên bên phải thấp hơn biên bên trái.

**PED5 — METHOD & LIMIT:** Chia miền \(D\) theo đỉnh trước khi đọc khoảng biến thiên; xét đỉnh và cả hai đầu mút để tìm min/max. Không dùng máy móc tập giá trị của parabol trên \(\mathbb R\) khi đề đã khóa miền.

### THPT-G10-B16-R06 — TỰ LUẬN (chưa xem đáp án)

Cho \(f(x)=-(x-1)^2+9\), **chỉ xét trên** \(D=[-2;5]\).

a) Xác định tọa độ đỉnh và trục đối xứng của parabol.

b) Trên những đoạn nào trong D, hàm đồng biến và nghịch biến? Giải thích dựa trên dạng bình phương/khoảng cách tới trục, không chỉ thử hai số.

c) Tính \(f(-2)\), \(f(1)\), \(f(5)\); tìm GTLN, GTNN, **tập giá trị \(T_D\)**. Vì sao \(T_D\) khác tập giá trị của hàm nếu xét toàn \(\mathbb R\)?

### Lời giải chuẩn — PHẢI ẨN TRƯỚC FINAL SUBMIT

1. Đỉnh \(I(1;9)\), trục \(x=1\), parabol mở xuống vì \(a=-1<0\).
2. Trên \([-2;1]\), khi x tăng thì khoảng cách \(|x-1|\) giảm, nên \(-(x-1)^2\) tăng: **đồng biến**. Trên \([1;5]\), khi x tăng thì \(|x-1|\) tăng: **nghịch biến**. Không được nói hàm cùng một chiều trên toàn D.
3. \(f(-2)=-(-3)^2+9=0\), \(f(1)=9\), \(f(5)=-(4)^2+9=-7\). Trên D, GTLN \(=9\) tại x=1, GTNN \(=-7\) tại x=5; **tập giá trị \(T_D=[-7;9]\)**. Nếu xét toàn ℝ, tập giá trị là \((-\infty;9]\), khác D đã cho.
4. Kiểm chứng bằng bất đẳng thức: vì \(x\in[-2;5]\) nên \(0\le(x-1)^2\le16\). Do đó \(-7\le f(x)\le9\); hàm liên tục trên D nên nhận tất cả các giá trị trong đoạn này.

**Rubric 8 điểm (chỉ sau Final Submit):** 1đ đỉnh/trục/chiều mở; 2đ hai đoạn tăng/giảm đúng; 2đ giải thích hướng biến thiên chứ không chỉ nêu đáp án; 1đ cả ba giá trị -2,1,5; 2đ GTLN/GTNN, tập giá trị trên D và phân biệt với toàn ℝ.

**Sai lầm cần bắt được:** Cho GTNN bằng 0 vì quên đầu phải; cho T=(-∞;9] vì xét sai miền; suy biến thiên cả D từ hai mẫu.

### D6 — HELP-G10-CHVI-R04-B16-01 (chỉ mở sau Final Submit)

1. **Nhận diện:** Em có kết luận tăng/giảm cả D, quên đầu x=5 hoặc dùng tập giá trị toàn ℝ?
2. **Tự chẩn đoán:** Khoanh lỗi đầu tiên trong ba bước: đọc đỉnh x=1, chia miền bởi đỉnh, so hai biên.
3. **Kiến thức gốc:** Parabol a<0 đi lên bên trái đỉnh, đi xuống bên phải; tập giá trị phải tính trên miền của **đề**, không trên toàn ℝ.
4. **Tự sửa:** Đánh dấu [-2;1], [1;5], tính lại f(-2), f(1), f(5), ghi khoảng biến thiên rồi tự rút tập giá trị.
5. **Luyện lại:** Xem SGK B16 §2, R03 B16_OUT_04, FIRST_TRY THPT-G10-CHVI-TRY09 và HELP-G10-CHVI-TRY09. Chỉ luyện tập tự đối chiếu, không tính Mastery từ câu đã xem đáp án.

## IV. Bài 17 — B17_OUT_01: kết hợp dấu a với cả ba trường hợp Δ

LESSON_ID: G10-SGK-B17
OUTCOME_ID: B17_OUT_01
ITEM_ID: THPT-G10-B17-R05
HELP_ID: HELP-G10-CHVI-R04-B17-01
S1: SGK B17 trang 19–24/SBT trang 16–18.

**PED1 — WHY:** Không thể thay vài giá trị x để kết luận dấu của tam thức trên toàn ℝ; cần biết hình parabol cắt/chạm/không cắt Ox.

**PED2 — PRE:** Hệ số a khác 0; \(\Delta=b^2-4ac\); nghiệm kép; parabol trên/dưới Ox và quy tắc xét dấu tích.

**PED3 — MEANING:** Δ<0: giữ dấu a trên toàn ℝ. Δ=0: chạm Ox tại nghiệm kép, giữ dấu a **trừ điểm bằng 0**. Δ>0: cùng dấu a ngoài hai nghiệm và trái dấu a bên trong. Nếu a âm, không thể máy móc ghi “ngoài dương, trong âm”.

**PED4 — READ_VISUAL:** Tưởng tượng/đọc ba hình: P mở lên không cắt Ox, Q mở xuống chạm Ox tại -1, R mở xuống cắt Ox tại 1 và 4. Dùng bảng xét dấu sẵn có trong SGK B17 §2, không cần tạo SVG mới.

**PED5 — METHOD & LIMIT:** Rút gọn từng tam thức, kiểm a trước Δ; ghi 0 tại nghiệm thực, sau đó điền dấu khoảng. Định lí này dùng cho tam thức có a≠0, không áp dụng nguyên xi khi hệ số bậc hai bằng 0 hoặc cho phân thức.

### THPT-G10-B17-R05 — TỰ LUẬN (chưa xem đáp án)

Xét trên \(\mathbb R\) ba tam thức:
\[
P(x)=2x^2+4x+5,\qquad Q(x)=-(x+1)^2,\qquad R(x)=-2(x-1)(x-4).
\]

a) Với mỗi tam thức, tính Δ, nêu dấu a và phân loại Δ<0, =0 hay >0.

b) Với mỗi tam thức, xác định **đầy đủ** khoảng có giá trị dương, âm và các điểm bằng 0; giải thích qua vị trí parabol so với Ox.

c) Giải thích 2–3 câu vì sao dấu của Δ **không đủ** nếu chưa xét dấu a.

### Lời giải chuẩn — PHẢI ẨN TRƯỚC FINAL SUBMIT

- **P:** a=2>0, b=4, c=5, \(\Delta=4^2-4\cdot2\cdot5=-24<0\). Không có nghiệm thực, **P(x)>0 mọi x∈ℝ**; không có điểm bằng 0 hoặc miền âm. Cách kiểm: \(P(x)=2(x+1)^2+3>0\).
- **Q:** \(Q=-x^2-2x-1\), a=-1<0, \(\Delta=(-2)^2-4(-1)(-1)=0\); nghiệm kép **x=-1**. Q=0 tại -1; **Q<0** trên \((-\infty;-1)\cup(-1;+\infty)\); không có miền dương. Đồ thị chạm Ox chứ không đổi dấu.
- **R:** \(R=-2x^2+10x-8\), a=-2<0, \(\Delta=100-4(-2)(-8)=36>0\). Hai nghiệm **1, 4**. R<0 trên \((-\infty;1)\cup(4;+\infty)\); R>0 trên \((1;4)\); R=0 tại x=1,4.
- **Tổng kết:** Δ quyết định số giao/chạm Ox; a quyết định hướng mở và dấu ở các khoảng ngoài nghiệm. Muốn xét dấu đúng phải dùng **cả a và Δ**, đồng thời điền 0 tại nghiệm.

**Rubric 10 điểm (chỉ sau Final Submit):** 3đ P (a, Δ=-24, dấu mọi x); 3đ Q (a âm, Δ=0, nghiệm kép và không đổi dấu); 3đ R (a âm, Δ=36, nghiệm/ba khoảng dấu); 1đ giải thích đúng vai trò kết hợp dấu a với Δ.

**Sai lầm cần bắt được:** Q đổi dấu qua nghiệm kép; R bị ghi “ngoài dương trong âm” dù a âm; quên không có nghiệm thực khi Δ<0.

### D6 — HELP-G10-CHVI-R04-B17-01 (chỉ mở sau Final Submit)

1. **Nhận diện:** Em có cho Q đổi dấu qua -1 hoặc cho R dương ở hai khoảng ngoài?
2. **Tự chẩn đoán:** Với P/Q/R, viết rõ a và Δ; khoanh bước đầu tiên em suy dấu nhưng không giải thích được.
3. **Kiến thức gốc:** Δ<0 giữ dấu a; Δ=0 giữ dấu a trừ nghiệm kép bằng 0; Δ>0 cùng dấu a ngoài hai nghiệm, trái dấu a ở giữa.
4. **Tự sửa:** Vẽ ba phác họa parabol (mở lên không cắt, mở xuống chạm, mở xuống cắt hai điểm), điền 0 tại nghiệm rồi xét khoảng.
5. **Luyện lại:** Trở về SGK B17 §2, R03 B17_OUT_01, FIRST_TRY THPT-G10-CHVI-TRY11 và HELP-G10-CHVI-TRY11; có thể làm Core THPT-G10-B17-C01/C02. Không biến bài đã xem lời giải thành điểm Mastery.

## V. QA tác giả / giới hạn nghiệm thu

- **Q01–Q02:** đúng hai outcome khóa của SGK B16/B17 và nguồn S1 Tập Hai.
- **Q03–Q08:** khái niệm trước kết luận, hai Written nhiều bước, đáp án/rubric, không thêm SVG không cần thiết, D6 đúng năm bước.
- **Q09–Q14:** đủ WHY/PRE/MEANING/READ_VISUAL/METHOD, điều kiện và tự đối chiếu; khác bài First Try ở thời điểm **chỉ có đáp án sau Final Submit**.
- **Q15:** hai item ID mới, có outcome phụ nhưng không nhân bản câu; chỉ 2 question IDs dù nhiều bước con.
- **Q16:** hai câu công khai, không phải RD1 kín; giữ Final Submit/không Mastery, không ghi điểm chính thức từ tự luận.
- **Q17:** chỉ thuộc hành trình SGK; Topic vẫn độc lập.
- **Q18:** AUTHORING sẽ khóa đúng blob nguồn mới và receipt; không giao NotebookLM đối chiếu Git/SHA, không suy PASS của R01/R03 sang nội dung mới. Chưa giải quyết Q18 lịch sử của R02.

**Cổng:** Đây là ứng viên **DELTA_C** của hai câu và hai HELP, chưa có PASS độc lập; không đưa vào CHVI.json hoặc website, không tạo ready/ manifest/REGISTER, không tự cấp CONTENT_READY, merge/deploy/Mastery.

## VI. Prompt review NotebookLM (4 câu)

Hãy phản biện độc lập đúng file Temp_G10_CHVI_R04_TWO_OUTCOME_PUBLIC_SELFCHECK_REVIEW_20261105.md theo duy nhất SLM-THPT-QUALITY-ONE v1.2.0 (Q01–Q18), với đúng năm Permanent Sources THPT v2.1 và SGK/SBT KNTT Toán 10 Tập Hai.
Chỉ kiểm toán hai câu THPT-G10-B16-R06, THPT-G10-B17-R05 và hai HELP liên quan: toán/điều kiện, độ sâu theo outcome, lời giải/rubric, khả năng học độc lập và an toàn Final Submit không Mastery.
Bảo toàn PASS lịch sử của 54 item R01 và học liệu R03, không review lại 19 First Try/2 SVG bất biến, không kiểm tra hash/Git/byte.
Trả Academic/PED verdict theo item/outcome, P0/P1/P2 và MINIMAL_DELTA; chỉ đề xuất delta thực chất nếu có lỗi, không tự cấp CONTENT_READY hay quyền phát hành.
