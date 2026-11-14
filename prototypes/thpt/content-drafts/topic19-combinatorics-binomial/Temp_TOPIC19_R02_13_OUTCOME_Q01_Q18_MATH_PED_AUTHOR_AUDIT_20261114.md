# TOP19 R02 · Q01–Q18 AUTHOR MATH/PED 13-OUTCOME / 54-ID SOURCE AUDIT · 14/11/2026

**Source-locked author academic/PED evidence**, not NotebookLM independent review or a RELEASE/browser QA. One standard `SLM-THPT-QUALITY-ONE v3.1.0`. This author check has reopened the 13 real `LESSON_ID` blocks and their 29 unique item definitions in the academic source, validated 54 Q15 rows against original SGK public canonical references, and directly re-inspected both G10 KNTT T2 original PDFs. **No source S1 has been silently reconstructed from external websites.**

STATE: AUTHOR_Q18_ACADEMIC_PED_MATH_AUDIT_COMPLETE_ON_LOCKED_R02_SOURCE
PACKET_ID: THPT-TOPIC19-COMBINATORICS-BINOMIAL-R02
SOURCE_BLOB: 9f05f9bfc91cad6edf4049baea7ea7dd03eb0c8a
CANONICAL_Q15_MATRIX_BLOB: 3da1e41f8f93533b84a4fb4097558c77ed7e5d60
DIRECT_ORIGINAL_S1_RECEIPT_BLOB: 850dd241e60de58ccf032e48e1e13530988436e3
INTERACTIVE_MODEL_BLOB: f4a078d0a7b4111f6cac483cca6cca65f05c111c
STANDARD_VERSION: 3.1.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED_SOURCE_EVIDENCE_ONLY
PRIVATE_RD1_COUNT: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## Per-outcome actual content / problem-family / math check

On the **exact** academic blob `9f05f9bfc91cad6edf4049baea7ea7dd03eb0c8a`, each of all 13 outcomes has its own WHY, MEANING_BEFORE_FORMULA, explicit method condition/exception, genuinely reasoned worked example, a canonical Txx FirstTry **before** opt-in solution, targeted item D6 and an independently defined Pxx Practice with worked key and D6. The actual learner order is `O01→…→O10→O13→O11→O12`: original SGK B25 p75 mandatory two-term estimation taught **before** optional SBT negative power and coefficient-sum extensions. All 3 Written W01–W03 have 4 one-point analytic criteria and misconception-specific D6. No fragment of SGK Core is required to complete the Topic independently.

| Outcome | original source area | math/problem family | independently checked worked/T/P/W result | necessary method condition | targeted mistake to remedy | SOURCE_QA |
|---|---|---|---|---|---|---|
| TOP19-O01 | G10-B23 | COUNT_ADDITION | 7 worked / 7 T / 10 P | Mutually exclusive option sets, no overlapped results | đếm riêng từng lựa chọn, tránh nhân cặp | AUTHOR_SOURCE_VERIFIED |
| TOP19-O02 | G10-B23 | COUNT_PRODUCT_TREE | 6 worked / 12 T / 24 P | All stages required for each complete outcome; branch dependency | nếu một kết quả chỉ có một món, không nhân | AUTHOR_SOURCE_VERIFIED |
| TOP19-O03 | G10-B23 | COUNT_CODE_VS_NUMBER | 18 worked / 16 T / 48 P / 160 new code illustration | 0 forbidden as first digit in number; allowed in code digit and later positions | cấm 0 chỉ ở hàng trăm, kiểm lặp | AUTHOR_SOURCE_VERIFIED |
| TOP19-O04 | G10-B23 | COUNT_DISJOINT_CASES | 30 worked / 5 T / 52 P / W01 18 | Even/odd units split into disjoint last-digit sets, 0 changes available hundreds | chia trường hợp đuôi 0 trước | AUTHOR_SOURCE_VERIFIED |
| TOP19-O05 | G10-B24 | PERMUTATION | 24 worked / 120 T / 720 P | All distinct persons, every ordered position used once | không dùng tổ hợp cho xếp hàng | AUTHOR_SOURCE_VERIFIED |
| TOP19-O06 | G10-B24 | ARRANGEMENT_ROLE | 60 worked / 30 T / 210 P | No repeat; roles ordered; 0≤k≤n | phân vai và chọn nhóm không cùng kết quả | AUTHOR_SOURCE_VERIFIED |
| TOP19-O07 | G10-B24 | COMBINATION | 10 worked / 20 T / 35 P | Unordered k-subset, divide order duplicates by k! | không nhân A(n,k) khi chỉ cần nhóm | AUTHOR_SOURCE_VERIFIED |
| TOP19-O08 | G10-B24 | GROUP_CONSTRAINTS_ROLES | 40 worked / 18 T / 150 P / W02 240 | Exactly category counts, no role unless specified; role multiplicative after group choice | nếu ra 60 mà hỏi nhóm có trưởng, còn thiếu ×4 | AUTHOR_SOURCE_VERIFIED |
| TOP19-O09 | G10-B25 | NEWTON_N4_N5 | 6 worked / 4 T / 24 P | C(n,k) counts positions of b; n=4 or 5 mandatory; avoid generic high-n Core expansion | hệ số cần nhân phần hằng 2^k | AUTHOR_SOURCE_VERIFIED |
| TOP19-O10 | G10-B25 | BINOMIAL_SIGN_AND_EXPONENT | 80 worked / 24 T / −810 P / W03 −80 and P(1)=−1 | k controls exponent and (−1)^k sign; k integer in [0,n] | giải phương trình số mũ trước khi thế dấu | AUTHOR_SOURCE_VERIFIED |
| TOP19-O13 | G10-B25 p75 | BINOMIAL_APPROX_TWO_TERMS | N=1000 r=0.02 exact 1104.08 versus approx 1100 / T13 5250 / P13 2200 vs 2208.16 | Only estimate for |r| small; for r>0 omitted terms positive; fixed time five periods | không gọi ước lượng là chính xác; kiểm bước r² | AUTHOR_SOURCE_VERIFIED |
| TOP19-O11 | SBT-G10-B25 p57 | BINOMIAL_CONSTANT_TERM_OPTIONAL | 24 worked / 6 T / 24 P | x≠0, exponent 4−2k=0 with k integer; SBT reference optional only | giải số mũ x=0, không chọn k bằng cảm tính | AUTHOR_SOURCE_VERIFIED |
| TOP19-O12 | TOPIC-TRANSFER-B25 | POLYNOMIAL_COEFFICIENT_SUM_OPTIONAL | 1 worked / 243 T / 81 P | P(x) polynomial and defined at x=1; optional transfer, not mandatory SGK Core | thay x=1 vào cả biểu thức trước khi tính | AUTHOR_SOURCE_VERIFIED |

## Independent numeric and enumerative math checks

Performed **34 independently calculated assertions** in local Python using `itertools.permutations`, `math.comb`, `math.perm`, `factorial`, polynomial coefficient identities and `round(2000×1.02^5,2)`. All 34 PASS. Key named representative checks:
- Enumerated actual distinct digits: T03=16, P03=48, O04 worked even=30, T04 even=5, P04 even=52, W01 odd=18; every number prohibits leading 0 and avoids repeated digits.
- Permutations/arrangements/combinations: P05 6!=720; T06 A(6,2)=30, P06 A(7,3)=210; T07 C(6,3)=20, P07 C(7,4)=35; W02 correctly distinguishes 60 unordered teams versus 240 teams with a leader.
- Exact polynomial keys: P09 `C(4,2)·2²=24`, worked O10 `C(5,2)·2³=80`, P10 `C(5,1)·3⁴·(−2)=−810`, W03 `C(5,3)·(−2)³=−80` and total coefficient P(1)=−1, all checked.
- Optional negative powers require x≠0 and 4−2k=0, giving worked/T/P 24/6/24; SBT original scanned printed57 exercise 8.16 supports **optional** source family, NOT mandatory SGK Core.
- Original SGK print75 mandatory applied two-term binomial approximation: model N1000 at 2% 5 years gives approx 1100 and exact 1104.08; T13 5000 at 1% gives approx 5250; P13 2000 at 2% gives 2200 approx and exact 2208.16. Distinguishes `≈` from `=`, notes omitted positive r² terms.
- Source-level arithmetic for B23 addition and multiplication, T01 5+2=7, P01 6+4=10, T02 4×3=12 and P02 2×3×4=24 checked by independent direct arithmetic. W02 240 and W03 −80 had explicit distinct worked and rubric proofs.

**Depth limitation honesty:** This is mathematical validity for the actual authored question cases and source-visible pedagogical completeness. It is **NOT** evidence that a separate independent NotebookLM model reviewed this Topic, that every advanced generalization is mandatory SGK, or that learner-facing runtime accessibility/Final Submit has passed website QA.

## S1 source receipt and S1 conflict resolution

Original G10 KNTT Tập Hai SGK PDF SHA256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`, 102 pages; SBT PDF SHA256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7`, 143 pages. Both original source PDFs are scan-only (no text layer); direct selected page images inspected and SHA independently recalculated. SGK B23 printed60–65, B24 66–71, B25 72–75, end76; SBT B23 51–53, B24 54–55, B25 56–57, end58–60, all **1-based PDF page = printed+1**. This direct receipt is higher authority for these exact bytes than historical `main` receipt p59/p65/p78; historical source is preserved for audit, not silently amended.

Original SGK B25 printed72 explicitly limits learner outcomes to n=4 or 5 and printed75 contains mandatory application 8.15 and 8.16 (approximation from first two terms). R01 failed to include its application family; **R02 deliberately added O13/T13/P13**, documented Delta C. B23 SGK printed60 explicitly includes tree-counting and password-context; original white author counting tree now accompanies theory. Original SGK B24 printed66 begins with distinction between different orderings of four people. No probability Chapter IX content imported.

## PED1–PED6 / Q03–Q14 specific checks

- PED1/Q09: connected 3-stage school fair story, not 13 independent formula blocks. Choice of 1 club vs pair, ordered group vs unordered, and choice-of-b-position explains Newton.
- PED2/Q10: prerequisite counting sets, ordinary plus/multiply, distinguish code versus 3-digit number, group vs roles, exponent algebra, all explained locally without mandatory links to other Topic/SGK pages.
- PED3/Q11: outcome source reasons through concrete complete results and branch lists **before** addition/multiplication, factorial, A(n,k), C(n,k), Pascal and polynomial coefficients.
- PED4/Q07/Q12: **four** white mathematically faithful SVGs with complete alt and reader guidance (3 source-equivalent white adaptations of existing G10 SVGs plus one original 2×3 tree with all six leaves); standalone white adaptive three-scene model for count/roles/Pascal, 11/11 DOM math and reset checks, no CDN. No random unverified slide PNG inserted, no visual claim about actual production Safari.
- PED5/Q13: each outcome explains method choice and restrictions: disjointness, stage independence/dependence, leading zero and no repeat, roles ordered, n,k constraints, x≠0 in optional negative power, sign from selected −2 exponent, polynomial-only P(1), approximate small r.
- PED6/Q08/Q14: source has exactly 13 opt-in T solutions/D6, 13 distinct Practice solutions/D6, and 3 Written /4 rubrics with targeted errors: W01 leading zero/odd digit; W02 group vs group+leader; W03 exponent/sign/P(1). Seven public self-check replay placements route to original T/P by outcome and explicitly NO_MASTERY.

## Q15 / Q16 / Q17 / Q18 custody and RELEASE boundary

Exactly **54** distinct public canonical IDs =25 previously source-locked SGK FORMATIVE refs (original `docs/assets/javascripts/thpt-chviii-reviewed-formative-v1.js` unchanged SHA `2ae62fada28913ec336b3507684408a1e05a3232`) +29 genuinely new Topic canonical definitions (13T/13P/3W) in one R02 Markdown source. No copied old SGK item stem/key/solution/rubric and no new Anchor copies. **7** selfcheck placements reuse original `Pxx` IDs; these do not form an independent protected Topic test. `TOPIC_READINESS=NOT_CLAIMED`, `PRIVATE_RD1_IMPORTED=0`; Q16 Final Submit must not reveal any answers/hints/rubric/correctness/AI before official submission, and Practice/reveal/self-graded Written must never write learner Mastery.

Two distinct SGK / Topic complete independent pathways preserved: this Topic has exactly **Kiến thức / Luyện tập / Tự kiểm tra**, no Topic Core. Original SGK source/readiness unchanged and cannot become Topic PASS automatically. This evidence is **source-scoped author math/PED audit** under Q18, not a website QA or merge/deploy permission.
