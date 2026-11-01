# G11 SGK KNTT Chương V B15–B17 — D3 Core / Practice / Application R01 (AUTHOR DRAFT)

**SCOPE:** G11 SGK Chapter V only · **Source:** SGK Toán 11 KNTT Tập 1 B15–B17, index 104–123; original owner S1/SBT PDF receipt still pending. **STATUS:** AUTHORING_ONLY_NOT_NOTEBOOKLM_PASS.  
**Teaching contract:** Issue #691; do not introduce a formula before its meaning and why needed in D1. This D3 file is the graduated independent practice *after* concept-first D1/D2 of the same chapter.  
**CANONICAL:** one item one ID; public formative is not protected RD1, correct practice does not independently prove Mastery. No duplicates with future private RD1.

## Readiness for practice — what the student should be able to explain first

- B15: what a limit describes, why a sequence has no “last term”, and how the ratio condition |q|<1 justifies an infinite geometric sum.
- B16: why “near a point” differs from “at the point”; why one-sided signs and domain matter.
- B17: why continuity needs both value at the point and agreement with the surrounding limit; why a sign change proves existence but not uniqueness.

**Sequence:** begin with C-items (meaning, conditions), then P-items (calculation, explanation and application). Each item has the answer and reasoning for feedback *after formative submission*, never as part of an assessment-before-Final-Submit flow.

## D3 canonical public item bank (30 candidates)

### B15 — Giới hạn dãy số

#### THPT-G11-CHV-B15-C01 · CORE · skill_id=G11-B15-FINITE_SEQUENCE

**Đề:** Với uₙ=7+3/n, số 7 có ý nghĩa gì khi n tăng mãi?

**Đáp án:** Giới hạn của dãy là 7.

**Lời giải và lời giải thích:** Khoảng cách từ uₙ đến 7 bằng 3/n, tiến về 0. Như vậy 7 không cần là một số hạng của dãy.

#### THPT-G11-CHV-B15-C02 · CORE · skill_id=G11-B15-INFINITE_SEQUENCE

**Đề:** Dãy uₙ=−2n có tiến đến −∞ hay không? Giải thích bằng lời.

**Đáp án:** Có, uₙ→−∞.

**Lời giải và lời giải thích:** Với mọi M>0, từ n>M/2 thì −2n<−M; các số hạng ngày càng nhỏ theo chiều âm.

#### THPT-G11-CHV-B15-C03 · CORE · skill_id=G11-B15-GEOMETRIC

**Đề:** Tổng vô hạn 3+3/5+3/25+… có thể dùng công thức cấp số nhân lùi vô hạn không?

**Đáp án:** Có; tổng bằng 15/4.

**Lời giải và lời giải thích:** Số hạng đầu 3, công bội 1/5 có trị tuyệt đối nhỏ hơn 1; tổng 3/(1−1/5)=15/4.

#### THPT-G11-CHV-B15-P01 · PRACTICE · skill_id=G11-B15-LIMIT_ARITHMETIC

**Đề:** Tìm lim(n→∞) (5n²+2)/(2n²+n).

**Đáp án:** 5/2.

**Lời giải và lời giải thích:** Chia tử và mẫu cho n²; các phần 2/n² và 1/n tiến về 0; mẫu giới hạn 2 khác 0.

#### THPT-G11-CHV-B15-P02 · PRACTICE · skill_id=G11-B15-FINITE_SEQUENCE

**Đề:** Với uₙ=−4+9/n, hãy chỉ ra giới hạn và giải thích vì sao không phải −4+9.

**Đáp án:** −4.

**Lời giải và lời giải thích:** Hiệu uₙ−(−4)=9/n→0; số 9 không giữ nguyên mà được chia cho n đang tăng.

#### THPT-G11-CHV-B15-P03 · PRACTICE · skill_id=G11-B15-LIMIT_ARITHMETIC

**Đề:** Tính lim(n→∞) (1−2/n)(4+1/n).

**Đáp án:** 4.

**Lời giải và lời giải thích:** Hai thừa số có giới hạn hữu hạn 1 và 4, nên giới hạn tích là 1×4.

#### THPT-G11-CHV-B15-P04 · PRACTICE · skill_id=G11-B15-LIMIT_ARITHMETIC

**Đề:** Tính lim(n→∞) √(n²+2n)/n với n nguyên dương.

**Đáp án:** 1.

**Lời giải và lời giải thích:** Do n>0, chia trong căn cho n²: √(1+2/n)→1; không nhầm √(n²) với |n| cho n âm.

#### THPT-G11-CHV-B15-P05 · PRACTICE · skill_id=G11-B15-INFINITE_SEQUENCE

**Đề:** Dãy vₙ=(−1)ⁿ có giới hạn hữu hạn hoặc ±∞ không?

**Đáp án:** Không có giới hạn theo các loại đã học.

**Lời giải và lời giải thích:** Các số hạng chẵn bằng 1 và lẻ bằng −1, nên không dần về một số hay vô cực có dấu.

#### THPT-G11-CHV-B15-P06 · APPLICATION · skill_id=G11-B15-GEOMETRIC_APPLICATION

**Đề:** Tính tổng lý thuyết 8−4+2−1+…; vì sao tổng vẫn hữu hạn dù có vô hạn số hạng?

**Đáp án:** 16/3.

**Lời giải và lời giải thích:** Đây là cấp số nhân a=8, q=−1/2, |q|<1; tổng bằng 8/(1+1/2)=16/3; số hạng và phần dư tiến về 0.

#### THPT-G11-CHV-B15-P07 · APPLICATION · skill_id=G11-B15-GEOMETRIC_APPLICATION

**Đề:** Bóng rơi từ độ cao 3 m, mỗi lần bật lên cao bằng 1/2 lần trước; mô hình vô hạn. Tổng quãng đường theo phương thẳng đứng là bao nhiêu?

**Đáp án:** 9 m.

**Lời giải và lời giải thích:** Lần đầu đi xuống 3 m. Những lần sau gồm đi lên và xuống ở các độ cao 3/2,3/4,… nên tổng là 3+2×[(3/2)/(1−1/2)]=9 m. Nêu rõ đây là mô hình lí tưởng.

### B16 — Giới hạn hàm số

#### THPT-G11-CHV-B16-C01 · CORE · skill_id=G11-B16-LIMIT_AT_POINT

**Đề:** Hàm f(x)=(x²−9)/(x−3) (x≠3) không xác định ở x=3. Nó có giới hạn khi x→3 không?

**Đáp án:** Có, giới hạn bằng 6.

**Lời giải và lời giải thích:** Với x≠3, f(x)=x+3. Khi x tiến đến 3, f(x) tiến đến 6; giới hạn không yêu cầu f(3) tồn tại.

#### THPT-G11-CHV-B16-C02 · CORE · skill_id=G11-B16-ONE_SIDED

**Đề:** Cho f(x)=x+2 nếu x<0 và f(x)=3−x nếu x≥0. Giới hạn hai phía tại 0 có tồn tại không?

**Đáp án:** Không.

**Lời giải và lời giải thích:** Phía trái tiến đến 2, phía phải tiến đến 3. Hai giới hạn một phía khác nhau nên giới hạn hai phía không tồn tại.

#### THPT-G11-CHV-B16-C03 · CORE · skill_id=G11-B16-INFINITE_LIMIT

**Đề:** Khi x→4⁺ và x→4⁻, f(x)=1/(x−4) có xu hướng như thế nào?

**Đáp án:** +∞ ở bên phải và −∞ ở bên trái.

**Lời giải và lời giải thích:** Khi x>4 mẫu dương rất nhỏ; khi x<4 mẫu âm rất nhỏ. Dấu mẫu quyết định dấu giới hạn vô cực.

#### THPT-G11-CHV-B16-P01 · PRACTICE · skill_id=G11-B16-ALGEBRAIC_TECHNIQUES

**Đề:** Tính lim(x→0) (√(x+4)−2)/x.

**Đáp án:** 1/4.

**Lời giải và lời giải thích:** Với x≠0, nhân liên hợp: (√(x+4)−2)/x=1/(√(x+4)+2), rồi cho x→0.

#### THPT-G11-CHV-B16-P02 · PRACTICE · skill_id=G11-B16-ALGEBRAIC_TECHNIQUES

**Đề:** Tính lim(x→1) (x²−1)/(x²+x−2).

**Đáp án:** 2/3.

**Lời giải và lời giải thích:** Phân tích (x−1)(x+1)/[(x−1)(x+2)] khi x≠1, sau đó thế giới hạn 2/3.

#### THPT-G11-CHV-B16-P03 · PRACTICE · skill_id=G11-B16-ONE_SIDED

**Đề:** f(x)=x² khi x≤2 và f(x)=3x−2 khi x>2. Hai giới hạn một phía ở 2 có bằng nhau không?

**Đáp án:** Có, đều bằng 4.

**Lời giải và lời giải thích:** Từ trái x²→4; từ phải 3x−2→4, nên giới hạn hai phía bằng 4.

#### THPT-G11-CHV-B16-P04 · PRACTICE · skill_id=G11-B16-LIMIT_AT_INFINITY

**Đề:** Tính lim(x→−∞) √(x²+4)/x.

**Đáp án:** −1.

**Lời giải và lời giải thích:** Vì x âm đủ lớn, √(x²)=|x|=−x; biểu thức bằng −√(1+4/x²)→−1.

#### THPT-G11-CHV-B16-P05 · PRACTICE · skill_id=G11-B16-LIMIT_AT_INFINITY

**Đề:** Tính lim(x→+∞) (3x²−x)/(x²+2).

**Đáp án:** 3.

**Lời giải và lời giải thích:** Chia cả tử và mẫu cho x²; tử→3 và mẫu→1.

#### THPT-G11-CHV-B16-P06 · PRACTICE · skill_id=G11-B16-INFINITE_LIMIT

**Đề:** Tính lim(x→2⁻) (x+1)/(2−x).

**Đáp án:** +∞.

**Lời giải và lời giải thích:** Tử tiến tới 3>0, mẫu dương và tiến đến 0 khi x<2.

#### THPT-G11-CHV-B16-P07 · APPLICATION · skill_id=G11-B16-REAL_CONTEXT

**Đề:** Mô hình hiệu suất H(t)=100t/(t+5) với t≥0. Khi t tăng vô hạn, H(t) tiến đến mức nào? Điều đó có nghĩa gì?

**Đáp án:** 100 (đơn vị hiệu suất của mô hình).

**Lời giải và lời giải thích:** Chia tử mẫu cho t: H(t)=100/(1+5/t)→100. Mô hình dự báo mức bão hòa, không khẳng định giá trị 100 đạt được ở thời gian hữu hạn.

### B17 — Hàm số liên tục

#### THPT-G11-CHV-B17-C01 · CORE · skill_id=G11-B17-CONTINUITY_POINT

**Đề:** Cho f(x)=(x²−1)/(x−1) khi x≠1 và f(1)=2. Hàm có liên tục ở 1 không?

**Đáp án:** Có.

**Lời giải và lời giải thích:** Giới hạn khi x→1 bằng lim(x+1)=2, khớp với giá trị f(1)=2.

#### THPT-G11-CHV-B17-C02 · CORE · skill_id=G11-B17-CONTINUITY_POINT

**Đề:** Cùng biểu thức (x²−1)/(x−1) khi x≠1 nhưng đặt f(1)=0. Hàm có liên tục ở 1 không?

**Đáp án:** Không.

**Lời giải và lời giải thích:** Giới hạn bằng 2 nhưng giá trị ở điểm lại bằng 0. Thiếu điều kiện giới hạn bằng giá trị hàm.

#### THPT-G11-CHV-B17-C03 · CORE · skill_id=G11-B17-ELEMENTARY_CONTINUITY

**Đề:** Hàm h(x)=√(x+2) có liên tục tại đầu mút x=−2 trên miền xác định không?

**Đáp án:** Có, liên tục từ bên phải tại −2.

**Lời giải và lời giải thích:** Hàm xác định với x≥−2; lim(x→−2⁺)√(x+2)=0=h(−2). Không kiểm tra từ phía trái ngoài miền xác định.

#### THPT-G11-CHV-B17-P01 · PRACTICE · skill_id=G11-B17-CONTINUITY_OPERATIONS

**Đề:** Hàm g(x)=(x+2)/(x−1) liên tục trên những khoảng nào?

**Đáp án:** (−∞,1) và (1,+∞).

**Lời giải và lời giải thích:** Tử và mẫu là đa thức liên tục, thương liên tục khi mẫu khác 0; phải loại x=1.

#### THPT-G11-CHV-B17-P02 · PRACTICE · skill_id=G11-B17-CONTINUITY_POINT

**Đề:** Cho f(x)=ax+1 nếu x<2, và f(x)=x²−1 nếu x≥2. Tìm a để liên tục tại 2.

**Đáp án:** a=1.

**Lời giải và lời giải thích:** Giới hạn trái 2a+1; giới hạn phải và f(2) đều bằng 3. Điều kiện khớp 2a+1=3.

#### THPT-G11-CHV-B17-P03 · PRACTICE · skill_id=G11-B17-ZERO_EXISTENCE

**Đề:** Chứng minh f(x)=x²−2 có ít nhất một nghiệm trong (1,2).

**Đáp án:** Có ít nhất một nghiệm.

**Lời giải và lời giải thích:** Đa thức liên tục trên [1,2], f(1)=−1<0, f(2)=2>0. Theo định lí giá trị trung gian, tồn tại c∈(1,2) với f(c)=0.

#### THPT-G11-CHV-B17-P04 · PRACTICE · skill_id=G11-B17-CONTINUITY_POINT

**Đề:** Đặt f(x)=(x²−16)/(x−4) khi x≠4 và f(4)=m. Tìm m để liên tục ở 4.

**Đáp án:** m=8.

**Lời giải và lời giải thích:** Với x≠4 rút gọn thành x+4; giới hạn khi x→4 bằng 8, nên cần f(4)=8.

#### THPT-G11-CHV-B17-P05 · PRACTICE · skill_id=G11-B17-CONTINUITY_INTERVAL

**Đề:** Hàm f(x)=√(9−x²) có liên tục trên đoạn [−3,3] không?

**Đáp án:** Có.

**Lời giải và lời giải thích:** Miền xác định là [−3,3]. Hàm liên tục ở bên trong và có giới hạn một phía tại hai đầu mút bằng giá trị hàm.

#### THPT-G11-CHV-B17-P06 · PRACTICE · skill_id=G11-B17-CONTINUITY_INTERVAL

**Đề:** f(x)=x+1 với x<0, f(x)=x²+1 với x≥0. Liên tục tại 0 không?

**Đáp án:** Có.

**Lời giải và lời giải thích:** Giới hạn trái và phải cùng bằng 1, giá trị f(0)=1.

#### THPT-G11-CHV-B17-P07 · APPLICATION · skill_id=G11-B17-ZERO_EXISTENCE

**Đề:** f(x)=x³−5 liên tục trên [1,2]; f(1) và f(2) trái dấu. Kết luận nào chắc chắn đúng, và có được suy ngay nghiệm duy nhất không?

**Đáp án:** Có ít nhất một nghiệm trong (1,2); chưa thể suy duy nhất chỉ từ định lí đổi dấu.

**Lời giải và lời giải thích:** f(1)=−4<0, f(2)=3>0. Định lí cho sự tồn tại, còn tính duy nhất cần luận cứ khác.

## Outcome coverage and author QA checkpoint

- `G11-B15-FINITE_SEQUENCE`: THPT-G11-CHV-B15-C01, THPT-G11-CHV-B15-P02
- `G11-B15-INFINITE_SEQUENCE`: THPT-G11-CHV-B15-C02, THPT-G11-CHV-B15-P05
- `G11-B15-GEOMETRIC`: THPT-G11-CHV-B15-C03
- `G11-B15-LIMIT_ARITHMETIC`: THPT-G11-CHV-B15-P01, THPT-G11-CHV-B15-P03, THPT-G11-CHV-B15-P04
- `G11-B15-GEOMETRIC_APPLICATION`: THPT-G11-CHV-B15-P06, THPT-G11-CHV-B15-P07
- `G11-B16-LIMIT_AT_POINT`: THPT-G11-CHV-B16-C01
- `G11-B16-ONE_SIDED`: THPT-G11-CHV-B16-C02, THPT-G11-CHV-B16-P03
- `G11-B16-INFINITE_LIMIT`: THPT-G11-CHV-B16-C03, THPT-G11-CHV-B16-P06
- `G11-B16-ALGEBRAIC_TECHNIQUES`: THPT-G11-CHV-B16-P01, THPT-G11-CHV-B16-P02
- `G11-B16-LIMIT_AT_INFINITY`: THPT-G11-CHV-B16-P04, THPT-G11-CHV-B16-P05
- `G11-B16-REAL_CONTEXT`: THPT-G11-CHV-B16-P07
- `G11-B17-CONTINUITY_POINT`: THPT-G11-CHV-B17-C01, THPT-G11-CHV-B17-C02, THPT-G11-CHV-B17-P02, THPT-G11-CHV-B17-P04
- `G11-B17-ELEMENTARY_CONTINUITY`: THPT-G11-CHV-B17-C03
- `G11-B17-CONTINUITY_OPERATIONS`: THPT-G11-CHV-B17-P01
- `G11-B17-ZERO_EXISTENCE`: THPT-G11-CHV-B17-P03, THPT-G11-CHV-B17-P07
- `G11-B17-CONTINUITY_INTERVAL`: THPT-G11-CHV-B17-P05, THPT-G11-CHV-B17-P06

**Integrated outcome `G11-CHV-INTEGRATED`:** addressed by multi-part Written/Anchor and eventually a separate PRIVATE RD1, not by cloning these public items.

**Author QA:** 30/30 distinct item IDs, B15/B16/B17 counts 10/10/10; 16 of 17 RD0 lesson outcomes represented here; integrated outcome to D4/RD1. Check all arithmetic, domains, one-sided signs and pedagogical progression in full-chapter review. This is **not** NotebookLM PASS.
