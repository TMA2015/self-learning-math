# CĐ11 — AUTHOR_SELF_QA_RECEIPT · continuous integral R04 · 13/11/2026

AUTHORING-only mathematical and pedagogical verification on exact Git SHA with one normative `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18. Does not constitute independent NotebookLM R04 review or owner/browser RELEASE authorization.

PACKET_ID: THPT-TOPIC11-ANTIDERIVATIVE-INTEGRAL-GEOMETRY-FULL-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic11-integrals/Temp_TOPIC11_CONTINUOUS_KNOWLEDGE_ARCS_R04_REVIEW_CANDIDATE_20261113.md
SOURCE_BLOB: 3b998d76120485502e33c5d5d131210d1f7ef444
ACADEMIC_SOURCE_BLOB: 3b998d76120485502e33c5d5d131210d1f7ef444
R03_IMMUTABLE_BLOB: 6c78b455f9d95e85c713108292908bf6f922d2f1
AUTHOR_METADATA_BLOB: d66cb082d9217b5c2458efa0815e6945d9c892a8
ORIGINAL88_INDEX_BLOB: 672fdce0c02ebf4f6ae6b37b331ca59e259d9b5c
ORIGINAL_NEW28_R01_BLOB: 1d1de4a1dd2ed07954db7b5dde4b86a9f894ddfe
R02_REPAIR_CANDIDATE_BLOB: 430a419fa95752d5ec4bdd9a7baf4875f3b57d2b
ACTIVE_NEW28_R04_BLOB: d288679011cf1e21cb4594764f0046eaa1637615
SVG_SIGNED_INTEGRAL_BLOB: 9a4b0b56c9613711d60c623e349df2415f4dbb4d
SVG_TWO_CURVES_BLOB: bbfb83ef7fcbd3f39f46848856f7d96f8233d50d
SVG_CROSS_SECTION_BLOB: f20c2cdb2e24115a051dc1d8f197e4945d35a2e5
SVG_WASHER_BLOB: e24c8d91fd5421e6b20ab5c4215db0b2d51342c2
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
P0: 0
P1: 0
P2: 0
AUTHOR_SIGNOFF: CD11_R04_20261113_AUTHOR_SELF_Q18_EXACT_SOURCE_AND_BANK
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
RELEASE_AUTHORIZATION: NO

S1_RECEIPT: Historical owner-checked Toán12 KNTT T2 SGK ChIV B11 p4–11/PDF1 6–13, B12 p12–18/PDF1 14–20, B13 p19–26/PDF1 21–28, end p27–28/PDF1 29–30, SGK first-party SHA256 3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb. SBT B11 printed3–8/PDF1 2–7, B12 9–13/PDF1 8–12, B13 14–18/PDF1 13–17, end19–21/PDF1 18–20, SBT SHA256 823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1. Original G12 ChIV 88 public IDs in immutable SGK source 45722cd386a498f3e0e96a09928c85565af56d1b, original independent NotebookLM SGK-only receipt feabeeeef262e7f6b28c898cdf77e6aa4194da24. Neither reviewer result nor original media title implies this new Topic R04 independently reviewed; **no fresh PDF scan claimed**. Old SGK NotebookLM figures were PNG, four Topic SVGs are new authoring media, not falsely described as original reviewed SVG.
OUTCOME_AUDIT: 22 learner outcomes TOP11-O01..O22 explained in connected inverse-derivative→net accumulation→positive geometric area→slice/washer volume arcs, 22 voluntary First Try/Đối chiếu, 88 original SGK+28 new=116 unique canonical public item IDs, 22 reuse-only public selfcheck placements and six new Written with one rubric each. Technical IDs hidden in comments, only three learner pages.
MATH_VERIFICATION: Checked all 28 current new canonical question keys/solutions and all 22 explanations/conditions: primitive constants on connected domains, use of ln absolute value, limits, endpoint substitution, signed integrals versus geometric area, splitting between curves, positive section area and washer difference of squares. Exact four figure checks: signed y=x over [-1,2] gives ∫=−1/2+2=3/2 vs geometric area1/2+2=5/2; y=x and y=x² on [0,2] split at x1 yields1/6+5/6=1, not |∫(x−x²)|=2/3; section square side1 area1, circle radius1 areaπ; washer region x≤y≤2 on x in[0,2] gives R2,r=x, π∫(4−x²)=16π/3. **Material key correction P22:** rotating 0≤y≤√x over 0≤x≤2 about Ox gives disk area πx and volume π∫₀² x dx=2π, **not** 8π in immutable R01 bank. Same canonical ID, corrected NEW28 R04 source, source/solution/rubric kept one current version.
PED_VERIFICATION: Conceptual progression from rates to primitives, sum as limit to integral, why signed area differs geometric area, why shape of cross-section drives volume formula; diagrams adjacent to their actual numerical problems; 22 opt-in self-tries, task-specific D6 and no scattered PED cards or technical bank paths in learner prose. Draws important distinctions of square/round/washer and bound/dimension before formulas.
CANONICAL_Q15: 88 original SGK unique public IDs in one source/index, 28 NEW28 R04 active source (22 Practice+6 Written), each one answer/solution/rubric. R01 bank and R02 repair candidate immutable history, no stem duplication by roles. Public 22 selfcheck placements reuse existing IDs; 26 original SGK private RD1 remain owner-held.
ASSESSMENT_Q16: Zero private RD1 copied into public repo, `CLIENT_SELF_CHECK_NO_MASTERY` only, not official TOPIC_READINESS, no Skill Mastery from practice. RELEASE must independently test safe Final Submit and no pre-submit hint/key/answer/AI Tutor/rubric/correctness.

## Outcome-specific learner-text math/PED self-audit

| Outcome | Actual source explanation/mathematical condition | Verdict |
|---|---|---|
| TOP11-O01 | Giả sử ta biết một đại lượng thay đổi nhanh thế nào, nhưng lại muốn tìm quy luật của chính đại lượng ấy. Đó là lúc ta đi ngược từ đạo hàm về **nguyên hàm**. Nếu hàm \(F\) có đạo hàm \(F'(x)=f(x)\) trên một khoảng, thì \(F\) là nguyên hàm của \(f\) trên khoảng  | AUTHOR_QA_PASS |
| TOP11-O02 | Các nguyên hàm khác nhau bởi hằng số; điều kiện đầu chọn một hàm. Nếu hai hàm có cùng đạo hàm, số liệu ban đầu có chọn ra đúng một hàm không? Ta đã biết viết F₀(x)+C, biết a thuộc khoảng và F(a)=b. Nếu f liên tục trên một khoảng, mọi nguyên hàm khác nhau một h | AUTHOR_QA_PASS |
| TOP11-O03 | Từ định nghĩa, ta suy ra nguyên hàm lũy thừa và tổng. Vì sao n=−1 là trường hợp đặc biệt, còn các lũy thừa khác chia được cho n+1? Ta sử dụng đạo hàm của x^{n+1} và tính tuyến tính, miền x^n. Từ (x^{n+1})'=(n+1)x^n, khi n≠−1 ta có ∫x^n dx=x^{n+1}/(n+1)+C trên  | AUTHOR_QA_PASS |
| TOP11-O04 | Nguyên hàm 1/x đặc biệt vì số mũ −1 làm mẫu công thức bằng 0. Tại sao ln/x/ xuất hiện, và có thể dùng một C qua x=0 không? Ta bắt đầu từ logarit thực, (ln/x/)'=1/x khi x khác0, miền liên thông. Đạo hàm ln/x/ bằng1/x với x≠0; vì vậy ∫dx/x=ln/x/+C trên từng khoả | AUTHOR_QA_PASS |
| TOP11-O05 | Hàm mũ đòi hỏi hệ số bù theo đạo hàm của biểu thức trong. Nếu e^{2x} thay đổi nhanh gấp đôi lớp ngoài, phải sửa nguyên hàm bằng cách nào? Cần nhớ dây chuyền (e^{kx})'=k e^{kx}, (a^x)'=a^x ln a. Với k≠0, nguyên hàm e^{kx} là e^{kx}/k+C; với a>0,a≠1, nguyên hàm  | AUTHOR_QA_PASS |
| TOP11-O06 | Với lượng giác, kiểm dấu và đơn vị radian. Nguyên hàm sin và cos có luôn giữ nguyên dấu không? Để xác định điều đó, cần xét (sin x)'=cos x và (cos x)'=−sin x với x radian. ∫cos(kx)dx=sin(kx)/k+C, ∫sin(kx)dx=−cos(kx)/k+C khi k≠0 và góc radian. Dấu trừ của nguyê | AUTHOR_QA_PASS |
| TOP11-O07 | Khi nguyên hàm là vị trí, điều kiện đầu mang nghĩa vật lý. Một đồ thị v(t) mô tả vận tốc, có xác định duy nhất vị trí s(t) chưa? Ta đã biết v=s'(t), nguyên hàm và điều kiện vị trí đầu s(t₀). Vận tốc có hướng v(t)=s'(t) giúp dựng lại vị trí s(t)=F(t)+C, nhưng C | AUTHOR_QA_PASS |
| TOP11-O08 | Vì sao cùng nguyên hàm khác nhau C nhưng tích phân có cận vẫn là một số? Ta sử dụng f'=f trên đoạn chứa [a,b], f liên tục/khả tích và Newton–Leibniz. Định lý Newton–Leibniz cho ∫_a^b f(x)dx=F(b)−F(a) nếu F'=f và giả thiết thích hợp. C bị triệt trong hiệu. Khác | AUTHOR_QA_PASS |
| TOP11-O09 | Tính tuyến tính cho phép gộp những tích phân có cận phù hợp. Vì sao có thể tách một biểu thức dài thành vài tích phân nhỏ? Ta bắt đầu từ phép cộng, hằng số và cùng cận [a,b]. ∫_a^b(αf+βg)=α∫_a^b f+β∫_a^b g khi các thành phần khả tích; tất cả dùng cùng cận. Tín | AUTHOR_QA_PASS |
| TOP11-O10 | Chiều lấy cận quyết định dấu tích phân. Đi ngược chiều tích lũy làm thay đổi dấu nhưng có làm diện tích âm không? Cần nhớ f(b)−F(a), hiệu khi đảo a,b. ∫_b^a f=−∫_a^b f, ∫_a^a f=0; nếu a≤c≤b, ∫_a^b f=∫_a^c f+∫_c^b f. Đây là **tích phân có hướng**, không đồng nh | AUTHOR_QA_PASS |
| TOP11-O11 | Diện tích dưới đồ thị bằng tích phân khi hàm không âm. Tại sao tổng các hình chữ nhật rất mỏng mô phỏng đúng diện tích cong? Để xác định điều đó, cần xét đồ thị liên tục và không âm, dải đứng rộng dx. Nếu f(x)≥0 liên tục trên [a,b], diện tích vùng giữa đồ thị, | AUTHOR_QA_PASS |
| TOP11-O12 | Độ dời khác quãng đường vì tích phân có dấu có thể triệt tiêu. Một vận tốc đổi dấu có thể cho độ dời bằng0 nhưng quãng đường khác0? Ta đã biết dấu f, nghiệm f=0, ∫f và ∫/f/. Tích phân ∫f là phần có dấu; ∫/f/ là tổng độ lớn không âm. Diện tích hình học giữa Ox  | AUTHOR_QA_PASS |
| TOP11-O13 | Sin, cos và mũ dùng cùng nguyên tắc thế cận sau nguyên hàm. Một biểu thức lượng giác hoặc hàm mũ vẫn tính bằng F(b)−F(a) được không? Ta sử dụng hàm e^x, sin/cos liên tục trên đoạn, góc radian. Nếu f liên tục, quy tắc Newton–Leibniz không phụ thuộc biểu thức có | AUTHOR_QA_PASS |
| TOP11-O14 | Tích phân từ tốc độ cho lại lượng tích lũy. Biết tốc độ cuối khoảng có suy được lượng tích lũy bằng 'tốc độ cuối×thời gian'? Ta bắt đầu từ tốc độ biến thiên r(t) và tích phân của r. Nếu Q'(t)=r(t), lượng biến đổi ròng Q(b)−Q(a)=∫_a^b r(t)dt. Khi r không hằng,  | AUTHOR_QA_PASS |
| TOP11-O15 | Diện tích dưới √x tính khác hình chữ nhật vì chiều cao thay đổi thế nào? Cần nhớ hàm căn trên x≥0, f≥0 và nguyên hàm x^{1/2}. Nếu y=√x trên [a,b] với 0≤a<b, f liên tục, không âm, S=∫_a^b√x dx= (2/3)[x^{3/2}]_a^b. Không lấy cận âm để làm phép nguyên hàm trên số | AUTHOR_QA_PASS |
| TOP11-O16 | Khi đồ thị cắt trục, cần chia miền và cộng diện tích. Khi đường cong chạy qua trục Ox, những mảnh phía dưới có phải trừ khỏi diện tích? Để xác định điều đó, cần xét nghiệm của f(x)=0, dấu f trên mỗi khoảng và ∫/f/. Diện tích vùng giữa đồ thị y=f(x) và Ox trên  | AUTHOR_QA_PASS |
| TOP11-O17 | Giữa hai đường, phải xét đường trên trước. Lấy 'trên−dưới' vì sao cho diện tích dải đứng không âm? Ta đã biết đồ thị liên tục f,g trên [a,b] và dấu f−g. Nếu f(x)≥g(x) trên cả đoạn, dải đứng có chiều cao f−g≥0; diện tích S=∫_a^b(f−g)dx. Kiểm bằng một điểm thử t | AUTHOR_QA_PASS |
| TOP11-O18 | Khi hai đường giao, thứ tự có thể đổi trong đoạn. Một giao điểm nằm trong [a,b] có thể đổi thứ tự hai đường ra sao? Ta sử dụng phương trình f=g, dấu f−g, tích phân trị tuyệt đối. Tính diện tích giữa hai đường trên [a,b] bằng ∫_a^b/f−g/dx; giải điểm giao, chia  | AUTHOR_QA_PASS |
| TOP11-O19 | Mô hình diện tích cần đúng giao điểm, cận và đơn vị. Vì sao phải tìm đường biên và giao điểm trước khi bấm nguyên hàm? Ta bắt đầu từ hình phẳng bị chặn, giải f=g và kiểm miền các nhánh. Lập mô hình: xác định ranh giới và trục, chọn biến theo chiều lát cắt, giả | AUTHOR_QA_PASS |
| TOP11-O20 | Nếu mỗi lát mỏng đã biết diện tích, tổng lát cho thể tích như thế nào? Cần nhớ tiết diện A(x)≥0 có đơn vị diện tích, độ dày dx. Với khối được xác định trên [a,b], diện tích thiết diện vuông góc Ox tại x là A(x), V=∫_a^bA(x)dx (nếu A khả tích). Chọn công thức A | AUTHOR_QA_PASS |
| TOP11-O21 | Thiết diện tròn dùng diện tích đĩa πr². Nếu lát cắt tròn, công thức phải sửa như thế nào so với tiết diện vuông? Để xác định điều đó, cần xét diện tích đĩa tròn πr², r≥0 theo x. Đối với khối có mặt cắt vuông góc Ox hình tròn bán kính r(x)≥0 trên [a,b], A(x)=πr | AUTHOR_QA_PASS |
| TOP11-O22 | Khối xoay cho tiết diện đĩa hoặc vành khăn tùy vùng. Vì sao thể tích quay một vùng giữa hai đồ thị có thể phải trừ hai đĩa? Ta đã biết bán kính là khoảng cách từ đồ thị đến Ox, miền f≥g≥0. Nếu quay vùng 0≤y≤f(x) quanh Ox, lát cắt đĩa bán kính f, thể tích V=π∫f | AUTHOR_QA_PASS |

## All 28 current canonical question answer checks

| Item | Outcome | Exact canonical answer and domain checked | Verdict |
|---|---|---|---|
| THPT-TOP11-P01 | TOP11-O01 | F(x)=3x²−4x+C trên ℝ. | AUTHOR_QA_PASS |
| THPT-TOP11-P02 | TOP11-O02 | F=x³+C, C=9−8=1; F=x³+1. | AUTHOR_QA_PASS |
| THPT-TOP11-P03 | TOP11-O03 | x³+2x²−2x+C. | AUTHOR_QA_PASS |
| THPT-TOP11-P04 | TOP11-O04 | F=2ln(−x)+3 trên x<0. | AUTHOR_QA_PASS |
| THPT-TOP11-P05 | TOP11-O05 | e^{2x}+3^x/ln3+C. | AUTHOR_QA_PASS |
| THPT-TOP11-P06 | TOP11-O06 | 2sin x+3cos x+C (x radian). | AUTHOR_QA_PASS |
| THPT-TOP11-P07 | TOP11-O07 | s(2)=12−8+3=7m. | AUTHOR_QA_PASS |
| THPT-TOP11-P08 | TOP11-O08 | [x³+x]₀²=8+2=10. | AUTHOR_QA_PASS |
| THPT-TOP11-P09 | TOP11-O09 | ∫₁³(x+1)dx=[x²/2+x]₁³=(9/2+3)−(1/2+1)=6. | AUTHOR_QA_PASS |
| THPT-TOP11-P10 | TOP11-O10 | −26/3. | AUTHOR_QA_PASS |
| THPT-TOP11-P11 | TOP11-O11 | S=8/3 đơn vị diện tích. | AUTHOR_QA_PASS |
| THPT-TOP11-P12 | TOP11-O12 | ∫−₂¹x dx=(1−4)/2=−3/2; diện tích 2+1/2=5/2. | AUTHOR_QA_PASS |
| THPT-TOP11-P13 | TOP11-O13 | [−2cos x]₀^π=2−(−2)=4. | AUTHOR_QA_PASS |
| THPT-TOP11-P14 | TOP11-O14 | s(2)=5+8=13m. | AUTHOR_QA_PASS |
| THPT-TOP11-P15 | TOP11-O15 | 16/3 đơn vị². | AUTHOR_QA_PASS |
| THPT-TOP11-P16 | TOP11-O16 | S=1/2+2=5/2. | AUTHOR_QA_PASS |
| THPT-TOP11-P17 | TOP11-O17 | Vì x+2−x²=(2−x)(x+1)≥0, S=∫₀²(x+2−x²)dx=10/3. | AUTHOR_QA_PASS |
| THPT-TOP11-P18 | TOP11-O18 | 1 đơn vị² (giao 0,1 và chia tại1). | AUTHOR_QA_PASS |
| THPT-TOP11-P19 | TOP11-O19 | 4/3 đơn vị². | AUTHOR_QA_PASS |
| THPT-TOP11-P20 | TOP11-O20 | V=7/3 đơn vị³. | AUTHOR_QA_PASS |
| THPT-TOP11-P21 | TOP11-O21 | V=8π/3 đơn vị³. | AUTHOR_QA_PASS |
| THPT-TOP11-P22 | TOP11-O22 | 2π đơn vị³. | AUTHOR_QA_PASS |
| THPT-TOP11-W01 | TOP11-O02 | F=x³−2x²+x+2; F(2)=8−8+2+2=4; C=2. | AUTHOR_QA_PASS |
| THPT-TOP11-W02 | TOP11-O04 | F(x)=2ln(−x)+sin x+4+sin1 (x<0). | AUTHOR_QA_PASS |
| THPT-TOP11-W03 | TOP11-O12 | Độ dời=0 m, đổi chiều ở t=1 s, quãng đường=1 m. | AUTHOR_QA_PASS |
| THPT-TOP11-W04 | TOP11-O18 | Giao x=0,1. S=∫₀¹(x−x²)+∫₁²(x²−x)=1. Tích phân đại số ∫₀²(x−x²)=−2/3, không phải diện tích. | AUTHOR_QA_PASS |
| THPT-TOP11-W05 | TOP11-O20 | A=(x+1)² cm², V=∫₀²(x+1)² dx=26/3 cm³; không nhân π. | AUTHOR_QA_PASS |
| THPT-TOP11-W06 | TOP11-O22 | R=2, r=x; V=π∫₀²(4−x²)dx=16π/3 đơn vị³. | AUTHOR_QA_PASS |

## Actual DELTA_C and Q01–Q18 boundary

R03 example beside signed integral SVG was v=t−1 over [0,2], which gives net0 and path1, while graphic depicts y=x from −1 to2 giving net1.5 and area2.5. R04 explicitly computes exact graphic before distinguishing other velocity example. Cross-section SVG has square side1 and circle radius1, not original adjacent square-side2x computed volume4/3; R04 explains the true graphic. Curves and washer SVGs already had matching overall formula, R04 deepens the numeric figure explanation (split areas1/6 and5/6, washer slice at x1 area3π). R02 repair candidate corrected P22 from 8π to 2π and expanded solutions; R04 promotes it into a new active bank without touching original R01 source. All changes are `DELTA_C_ACADEMIC_MATERIAL` with exact source+bank Q18 author self-verification. Q01–Q02 source/22 outcomes; Q03–Q08 theory/116 unique questions/6 Written/4 math figures/remediation; Q09–Q14 meaning-first continuity/22 optional comparisons; Q15–Q17 one bank/no Mastery/standalone three pages; Q18 source SHA+receipt. **AUTHORING_CONTENT_PASS: YES** for exact source; V2, ready, REGISTER and CI must lock exact files before CONTENT_READY is operational. No merge/deploy.
