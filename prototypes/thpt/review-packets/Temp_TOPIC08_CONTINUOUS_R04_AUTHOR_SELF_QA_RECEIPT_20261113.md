# CĐ08 — AUTHOR_SELF_QA_RECEIPT · learner R04 · 13/11/2026

One normative `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18, AUTHORING self-verification on exact academic Git blob; not a new independent NotebookLM review or RELEASE QA.

PACKET_ID: THPT-TOPIC08-LIMITS-CONTINUITY-FULL-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic08-limits-continuity/Temp_TOPIC08_CONTINUOUS_KNOWLEDGE_ARCS_R04_REVIEW_CANDIDATE_20261113.md
SOURCE_BLOB: 8fd1c9d223ccab794ae20fc8f0206df32f0671c4
ACADEMIC_SOURCE_BLOB: 8fd1c9d223ccab794ae20fc8f0206df32f0671c4
R03_IMMUTABLE_BLOB: bbb0169bd4809691b08963413abd16d20ae50073
AUTHOR_METADATA_BLOB: 9f91ae34ab1a50da56728be586fa0bff437d2501
ORIGINAL36_INDEX_BLOB: 7ac532a2c6d9368bf4f991c90092d327c07ea842
NEW22_CANONICAL_BLOB: 53351f63ad8dbc7bc18f2f519eb731e773c33a62
SVG_SEQUENCE_BLOB: badbc93b840f2329dc9ceaf63790b15a5aee3a0c
SVG_JUMP_BLOB: e420051bbf2e4db6925924bde454ea267d396418
SVG_IVT_BISECTION_BLOB: 60a389862b5bc221a51447179ec8aab6c03b7ca4
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
P0: 0
P1: 0
P2: 0
AUTHOR_SIGNOFF: CD08_R04_Q18_AUTHOR_SELF_VERIFIED_EXACT_GIT_BLOB_20261113
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PRIVATE_RD1_IMPORTED: 0
RELEASE_AUTHORIZATION: NO

S1_RECEIPT: Original owner-reviewed G11 KNTT Toán tập1 ChV B15 SGK printed104–110, B16 111–118, B17 119–122, end123; original SBT B15 print75–78/PDF76–79, B16 79–83/PDF80–84, B17 84–86/PDF85–87, end87–90/PDF88–91 with PDF source SHA256 fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229. Original SGK ChV source 36 PUBLIC IDs and its previous reviewer receipt source-scoped; **no fresh direct PDF scan** or automatic Topic PASS claimed.
OUTCOME_AUDIT: Eighteen outcomes TOP08-O01..O18, 18 self-controlled First Try and Đối chiếu, coherent four arcs (sequence proximity→one-sided functional limits→continuity→IVT/bisection); 36 original+22 new=58 canonical ID pointers in hidden AUTHORING comment, 18 PUBLIC reuse-only selfcheck placements, only three learner pages.
MATH_VERIFICATION: Checked 22 new bank stems/answers/solution reasoning and 18 outcome passages for epsilon/index condition, convergence of powers and geometric series, one-sided limits, rationalization, sqrt(x²) signs, continuity at endpoints, IVT existence not uniqueness, and iterative bisection. Direct exact case tests: SVG sequence first eight points (n,2+1/n), never equal2; jump left height2 versus right1 at 0 with f(0)=1; IVT g=x²−2 first midpoint1.5 gives +0.25, second1.25 gives -0.4375; independent new problem P18 g=t²+t−3 has first midpoint1.5 positive0.75, second midpoint1.25 negative0.1875, retains [1.25,1.5]; W02 strict tail inequality 8/2^6=1/8 not permitted, n=7 first satisfies <1/8.
PED_VERIFICATION: Learner begins with approaching-but-not-reaching, then one-sided approach/point value, true continuity and only then existence of a root; all 18 First Try have specific D6 correction after opt-in reveal, generic repetitive D6 lead removed. Three SVGs exactly explained next to worked problems; one-sided jump R03 wrong example replaced with actual piecewise x+2 (left), 2x+1 (right) and filled/hollow points.
CANONICAL_Q15: 58 unique canonical public items (36 historical SGK from one immutable bank/index and 22 new, including 4 Written each with one rubric); 18 selfcheck placements only pointers, not duplicated stems/keys/rubrics.
ASSESSMENT_Q16: No private RD1; reused public CLIENT_SELF_CHECK_NO_MASTERY only, not held-out TOPIC_READINESS, no Skill Mastery. RELEASE must enforce no pre-Final Submit correctness/solution/hint/AI Tutor/rubric disclosure on actual UI.

## Outcome-level academic and PED checking

| Outcome | Exact learner concept or justified method inspected | QA |
|---|---|---|
| TOP08-O01 | Ta xét dãy \(u_n=2+1/n\) với \(n\) nguyên dương. Mọi số hạng đều lớn hơn 2, nên không số hạng nào bằng 2. Tuy vậy, khi \(n\) tăng, khoảng cách \(/u_n-2/=1/n\) nhỏ dần và có thể nhỏ hơn **bất kỳ độ sai lệch dương nào** nếu \(n\) đủ lớn. Đó l | AUTHOR_QA_PASS |
| TOP08-O02 | Một dãy không tiến gần số hữu hạn nào có thể tăng ra vô hạn hoặc dao động. Nếu các số hạng không tiến tới một số hữu hạn thì chắc chắn tiến +∞ hoặc −∞? Ta đã biết dấu số, n tăng, dãy chỉ số chẵn/lẻ. Có ba hành vi cần tách: hữu hạn, tiến vô  | AUTHOR_QA_PASS |
| TOP08-O03 | Dãy q^n cho thấy điều kiện về trị tuyệt đối q quyết định giới hạn. Số hạng đổi dấu luân phiên có nhất thiết không hội tụ? Ta sử dụng lũy thừa số thực và trị tuyệt đối. Khi /q/<1, /q^n/=/q/^n→0 nên q^n→0, kể cả q âm. Nếu q=1 thì q^n=1; q=−1  | AUTHOR_QA_PASS |
| TOP08-O04 | Ta tính giới hạn các tổng và tỉ số nhưng mẫu cần được kiểm soát. Tại sao ký hiệu ∞/∞ không giúp tính giới hạn dãy phân thức? Ta bắt đầu từ giới hạn của 1/n, phép cộng/nhân/chia với mẫu giới hạn khác 0. Quy tắc cộng, nhân, chia giới hạn hữu  | AUTHOR_QA_PASS |
| TOP08-O05 | Tổng vô hạn của cấp số nhân chỉ hữu hạn khi điều kiện hội tụ được thỏa. Vô hạn số hạng có thể cộng thành hữu hạn như thế nào mà không mâu thuẫn? Cần nhớ cĐ07 định nghĩa CSN và tổng S_n hữu hạn, giới hạn q^n. Số S=∑_{k=0}^∞ a q^k được định n | AUTHOR_QA_PASS |
| TOP08-O06 | Vì sao một hàm không được định nghĩa tại x=a mà vẫn có giới hạn ở a? Để xác định điều đó, cần xét hàm số và phép biến đổi trên miền xác định. lim(x→a)f(x)=L hỏi giá trị f(x) khi x đủ gần a nhưng x≠a và thuộc miền xác định. Giá trị f(a) có t | AUTHOR_QA_PASS |
| TOP08-O07 | Tiến đến điểm từ trái và phải có thể cho hai kết quả khác nhau. Hàm có thể tiến đến hai giá trị khác nhau khi ta lại gần từ trái và từ phải không? Ta đã biết bất đẳng thức x<a/x>a, hàm xác định từng phần. Giới hạn trái lim(x→a⁻) xét x<a, ph | AUTHOR_QA_PASS |
| TOP08-O08 | Khi hàm tăng không bị chặn gần điểm, ta gặp giới hạn vô cực. Một phân thức có mẫu tiến đến 0 thì luôn tiến +∞ không? Ta sử dụng bảng dấu, 0⁺ và 0⁻, tử khác 0 gần điểm. Khi tử tiến đến một số khác 0 và mẫu tiến 0, giới hạn có thể là +∞ hoặc  | AUTHOR_QA_PASS |
| TOP08-O09 | Ra xa trên trục hoành lại dẫn đến giới hạn ở vô cực. Hai đa thức đều rất lớn thì tỉ số sẽ luôn tiến đến 1? Ta bắt đầu từ quy tắc giới hạn 1/x^k→0 và dấu x âm. Với phân thức đa thức, so bậc tử/mẫu và chia cho lũy thừa x thích hợp. Nếu bậc bằ | AUTHOR_QA_PASS |
| TOP08-O10 | Thế trực tiếp cho dạng 0/0 đòi hỏi biến đổi có thể khử hợp lệ. Làm sao biến một biểu thức 'không xác định ở điểm' thành giới hạn tính được? Cần nhớ hằng đẳng thức và phân thức khác 0 ở lân cận bỏ điểm. 0/0 là dạng vô định khi thế thử, không | AUTHOR_QA_PASS |
| TOP08-O11 | Với căn thức, nhân liên hợp làm lộ nhân tử chung. Khi tử chứa √(x+a)−b, vì sao nhân liên hợp giúp thay dạng 0/0 bằng một phân thức có giới hạn? Để xác định điều đó, cần xét (A−B)(A+B)=A²−B², miền căn. Với phân thức chứa √(x+c)−d và điểm thế | AUTHOR_QA_PASS |
| TOP08-O12 | Dạng vô cực trừ vô cực cần biến đổi mà không được bỏ dấu. Tại sao √(x²) không luôn bằng x? Ta đã biết trị tuyệt đối /x/, nhân liên hợp, giới hạn 1/x. Khi x→+∞, √(x²)=x vì x>0; khi x→−∞, √(x²)=−x. Với √(x²+a x)−x ở +∞, nhân liên hợp để biến  | AUTHOR_QA_PASS |
| TOP08-O13 | Giới hạn có thể tồn tại nhưng hàm vẫn 'đứt' tại đúng điểm không? Ta sử dụng giới hạn hai phía, giá trị hàm và đẳng thức. f liên tục tại a khi a thuộc miền xác định, lim(x→a)f(x) tồn tại hữu hạn và bằng f(a). Chỉ một trong ba điều không đủ.  | AUTHOR_QA_PASS |
| TOP08-O14 | Giới hạn và giá trị tại điểm có thể lệch nhau theo những cách rất khác. Đồ thị 'đứt' có phải lúc nào cũng vá được bằng một điểm mới? Ta bắt đầu từ giới hạn trái/phải và miền xác định. Gián đoạn khử được khi giới hạn hai phía hữu hạn tồn tại | AUTHOR_QA_PASS |
| TOP08-O15 | Trên khoảng và đoạn, tính liên tục phải được xét cả đầu mút. Hàm √x có thiếu 'giới hạn trái' tại x=0 trong miền của nó, vậy có thể liên tục trên [0,9] không? Cần nhớ miền căn không âm, giới hạn một phía. Hàm liên tục trên (a,b) khi liên tục | AUTHOR_QA_PASS |
| TOP08-O16 | Phép toán giữ tính liên tục khi miền và điều kiện phù hợp. Nếu mỗi phép tính trong hàm trông quen thuộc, có thể bỏ qua miền xác định khi kết luận liên tục? Để xác định điều đó, cần xét đa thức, căn, mẫu khác 0, hợp hàm. Đa thức liên tục trê | AUTHOR_QA_PASS |
| TOP08-O17 | Làm sao biết một phương trình có nghiệm dù chưa tìm được công thức nghiệm? Ta đã biết liên tục trên đoạn đóng, dấu âm/dương. Nếu f liên tục trên [a,b] và f(a)f(b)<0 thì theo định lí giá trị trung gian có ít nhất một c∈(a,b) với f(c)=0. Định | AUTHOR_QA_PASS |
| TOP08-O18 | Sau kết luận tồn tại nghiệm, chia đôi giúp khoanh nghiệm bằng phép tính. Sau khi biết có nghiệm, làm thế nào khoanh vùng được nó mà chưa dùng máy tính? Ta sử dụng iVT, giá trị tại trung điểm, dấu trái/phải. Chia đôi đoạn [a,b] có f liên tục | AUTHOR_QA_PASS |

## New canonical item key / condition check

| Item | Outcome | Actual canonical key verified | QA |
|---|---|---|---|
| THPT-TOP08-P01 | TOP08-O01 | lim u_n=5; không số hạng nào bằng 5. | AUTHOR_QA_PASS |
| THPT-TOP08-P02 | TOP08-O02 | Không có giới hạn hữu hạn hay ±∞. | AUTHOR_QA_PASS |
| THPT-TOP08-P03 | TOP08-O03 | Giới hạn bằng 0; luân phiên dấu không ngăn hội tụ. | AUTHOR_QA_PASS |
| THPT-TOP08-P04 | TOP08-O04 | 7/2. | AUTHOR_QA_PASS |
| THPT-TOP08-P05 | TOP08-O05 | 16; công bội q=1/4 thỏa /q/<1. | AUTHOR_QA_PASS |
| THPT-TOP08-P06 | TOP08-O06 | Giới hạn −2; f(2) không cần được định nghĩa. | AUTHOR_QA_PASS |
| THPT-TOP08-P07 | TOP08-O07 | Trái 2, phải 4; không tồn tại giới hạn hai phía hữu hạn. | AUTHOR_QA_PASS |
| THPT-TOP08-P08 | TOP08-O08 | Giới hạn trái −∞, phải +∞; không có giới hạn hai phía hữu hạn. | AUTHOR_QA_PASS |
| THPT-TOP08-P09 | TOP08-O09 | 2. | AUTHOR_QA_PASS |
| THPT-TOP08-P10 | TOP08-O10 | 5. | AUTHOR_QA_PASS |
| THPT-TOP08-P11 | TOP08-O11 | 1/6. | AUTHOR_QA_PASS |
| THPT-TOP08-P12 | TOP08-O12 | 1. | AUTHOR_QA_PASS |
| THPT-TOP08-P13 | TOP08-O13 | k=4. | AUTHOR_QA_PASS |
| THPT-TOP08-P14 | TOP08-O14 | Gián đoạn có thể khử; thay f(1)=−2. | AUTHOR_QA_PASS |
| THPT-TOP08-P15 | TOP08-O15 | Có; f(0)=f(4)=0. | AUTHOR_QA_PASS |
| THPT-TOP08-P16 | TOP08-O16 | D=[1,3)∪(3,+∞); liên tục trên mỗi thành phần theo nghĩa tương đối, tại x=1 liên tục phải. | AUTHOR_QA_PASS |
| THPT-TOP08-P17 | TOP08-O17 | Ít nhất một nghiệm ở (0,1); chưa suy ra duy nhất chỉ từ IVT. | AUTHOR_QA_PASS |
| THPT-TOP08-P18 | TOP08-O18 | Có nghiệm; khoảng [5/4,3/2] sau 2 bước chia đôi. | AUTHOR_QA_PASS |
| THPT-TOP08-W01 | TOP08-O04 | u_n=2−3/(n+2), tăng nghiêm ngặt; 1≤u_n<2, u_1=1; lim=2, không đạt 2. | AUTHOR_QA_PASS |
| THPT-TOP08-W02 | TOP08-O05 | S_n=8[1−(−1/2)^n], S_∞=8; n tối thiểu 7. | AUTHOR_QA_PASS |
| THPT-TOP08-W03 | TOP08-O07 | x<2: f=−(x+2), x>2: f=x+2; trái −4, phải 4, giới hạn hai phía không tồn tại. | AUTHOR_QA_PASS |
| THPT-TOP08-W04 | TOP08-O18 | a=−2, f(0)=2>0, f(2)=−1<0, nghiệm duy nhất x=3/2. | AUTHOR_QA_PASS |

## Visual and Delta_C ledger

Three original SVGs title/desc read from exact blobs. R04 clarifies **eight discrete points** for 2+1/n and never equates being on the limit line with convergence. Old R03 placed the **jump figure with left 2/right 1 at 0** after different function examples (absolute-value sign), risking a false visual reading; R04 now shows exact piecewise `f=x+2` for negative x and `f=2x+1` otherwise, hollow (0,2), solid (0,1). Third IVT/bisection SVG is x²−2 on [1,2], with first midpoint1.5, f=0.25, and R04 reading matches. This affects mathematical examples and explanatory bridges, hence `DELTA_C_ACADEMIC_MATERIAL`, not mere metadata. All original question-bank and SVG blobs immutable; old R01/R03 evidence remains historical.

Q01–Q02 S1/18 outcomes; Q03–Q08 theory, 58 question IDs, 4 Written rubrics, 3 exact figures and D6; Q09–Q14 continuous meaning-first teaching plus 18 controlled tries; Q15–Q17 canonical bank, no official mastery or private items, one independent Topic path; Q18 exact SHA author self-QA, P0=P1=0. `AUTHORING_CONTENT_PASS: YES` for the exact R04 source, but V2 handoff/ready/REGISTER and CI must match its current blob before operational CONTENT_READY. No website integration/merge/deploy.
