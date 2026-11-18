# Two new PUBLIC canonical items — G11 Sequence/AP/GP structural comparison · R00

These are original authoring Practice items; **not** owner-held Topic or Chapter RD1, not independent evidence after exposure, no Mastery. Only source for their item stem, key, solution and manual rubric; other uses reference ID+SHA. `ANCHOR` is only a label on historical 6 original Written IDs.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.1
PUBLIC_NEW_COUNT: 2
PRIVATE_RD1_COUNT: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## ITEM_OUTCOME_MATRIX

| item_id | outcome_id | role | version |
|---|---|---|---|
| `THPT-G11-TOPSEQ-ADD01` | `G11-CHII-STRUCTURAL-COMPARISON` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPSEQ-ADD02` | `G11-CHII-STRUCTURAL-COMPARISON` | TOPIC_PRACTICE | 1 |

### THPT-G11-TOPSEQ-ADD01

**OUTCOME:** `G11-CHII-STRUCTURAL-COMPARISON`
**Cấp độ:** Vận dụng tổng hợp, nhận diện quy tắc và so sánh tổng hữu hạn.
**Đề:** Hai quy luật tạo dãy số với n thuộc N*: A có a₁=4 và mỗi số sau hơn số trước 3; B có b₁=4 và mỗi số sau gấp đôi số trước. (a) Viết công thức aₙ,bₙ và gọi đúng loại cấp số. (b) Tìm số hạng thứ năm và tổng năm số hạng đầu của từng dãy. (c) Giải thích bằng câu chữ vì sao không thể dùng một công sai chung để mô tả dãy B.
**Đáp án chuẩn:** A là cấp số cộng d=3, aₙ=4+3(n−1); a₅=16 và S₅(A)=5(4+16)/2=50. B là cấp số nhân q=2, bₙ=4·2^(n−1); b₅=64, S₅(B)=4(2⁵−1)/(2−1)=124. Dãy B có hiệu liên tiếp lần lượt 4,8,16,32,... không cố định, nên không phải cấp số cộng.
**Lời giải có suy luận:** Ở A, sự thay đổi theo bước là *cộng* 3; công thức cho số hạng chỉ cần n−1 lần cộng 3. Ở B, mỗi bước *nhân* 2, nên công thức dùng lũy thừa 2^(n−1). Với n=1..5, A=(4,7,10,13,16) nên tổng 50; B=(4,8,16,32,64) nên tổng 124. Trước khi sử dụng tổng, phải nhận diện hai mô hình khác nhau theo hiệu và tỉ số liên tiếp.
**D6:** Nếu tính S₅(B) bằng công thức CSC, viết ra hai hiệu đầu: 8−4=4 và 16−8=8 khác nhau. Nếu nhầm số mũ n, kiểm b₁=4×2⁰=4. Nếu nhầm n số hạng với n bước, nhớ từ số hạng đầu đến thứ năm có bốn bước.
**Manual rubric /6:** đúng hai loại quy luật và d/q (1); đúng aₙ/bₙ (1); đúng a₅/b₅ (1); đúng S₅(A) (1); đúng S₅(B) (1); giải thích vì sao B không CSC (1). Tự luận chỉ tự đối chiếu thủ công, không ghi Mastery.

### THPT-G11-TOPSEQ-ADD02

**OUTCOME:** `G11-CHII-STRUCTURAL-COMPARISON`
**Cấp độ:** Phản ví dụ, điều kiện và phân biệt chuỗi hằng với dãy dao động.
**Đề:** Với mọi n≥1, xét hai dãy cₙ=5 và dₙ=3(−1)^(n−1). (a) Dãy nào là cấp số cộng? Dãy nào là cấp số nhân? Ghi công sai/công bội phù hợp. (b) Chỉ ra vì sao “tăng theo tỉ lệ” không đồng nghĩa với “mọi số hạng đều dương hoặc đều tăng”. (c) Nếu chỉ nhìn ba số hạng đầu tiên mà không có quy tắc tổng quát, có thể khẳng định toàn bộ dãy vô hạn thuộc loại nào không?
**Đáp án chuẩn:** cₙ=5 là cả cấp số cộng công sai d=0 và cấp số nhân công bội q=1. dₙ=3(−1)^(n−1) là cấp số nhân công bội q=−1 nhưng không là cấp số cộng vì hiệu lần lượt −6,+6,−6,... không cố định. CSN công bội âm đổi dấu nên không nhất thiết dương hoặc tăng. Chỉ ba số hạng đầu mà không có quy tắc/giả thiết xác định cả dãy thì không đủ suy toàn bộ dãy là CSC/CSN.
**Lời giải có suy luận:** cₙ₊₁−cₙ=0 và cₙ₊₁/cₙ=1 (cₙ≠0) nên thỏa đồng thời hai định nghĩa. Với dₙ, các số hạng 3,−3,3,−3,... cho dₙ₊₁/dₙ=−1 với mọi n, nhưng d₂−d₁=−6 và d₃−d₂=6, bác bỏ điều kiện hiệu không đổi của CSC. Quy tắc tổng quát cho mọi n mới là chứng cứ; mẫu ba số bất kỳ có thể được kéo dài theo nhiều cách.
**D6:** Nếu mặc định cấp số nhân luôn tăng, thử q=−1; nếu cho rằng dãy hằng chỉ là CSC, kiểm uₙ₊₁=1·uₙ; nếu chỉ có vài số hạng rời, đừng tự suy chắc quy luật mọi n.
**Manual rubric /6:** phân loại cₙ là cả hai (1); d=0,q=1 (1); phân loại dₙ là CSN q=−1 (1); bác CSC bằng hai hiệu khác nhau (1); giải thích CSN âm có đổi dấu (1); nhắc dữ liệu hữu hạn không chứng minh toàn quy luật vô hạn (1). Không có chấm tự luận tự động hoặc Mastery.

## Q18 scoped author arithmetic checks

- ADD01 a5=4+3×4=16; S5=5(4+16)/2=50. b5=4×2⁴=64; S5=4(2⁵−1)=124; b differences 4 and 8, not constant.
- ADD02 c(n+1)-c(n)=0 and c(n+1)/c(n)=1. d(n+1)/d(n)=−1, d2−d1=−6 and d3−d2=6. No zero term for these divisions; every statement applies to all n by explicit formula.
- Do not use these two publicly shown questions to assert independent official `TOPIC_READINESS` or write Skill Mastery.