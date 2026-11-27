## CURRENT Q18 — 26/11/2026 · Work #1055 / #1109 A04

Canonical learner blob `71853ed34cb5cb21e312a0a9f9c713b76e5219b4`, source commit `3e79381d6e4626711601fbe83ba588841bb52a13`, PR #890. A1: correct fixed-base decreasing behavior. A2: independent substitution (t=2^x) rejects -1, accepts 4, x=2. A3: negative candidate arises from quadratic product, not squaring. Additional affected observations: O16 explicitly distinguishes positive log arguments from log values; O17 adds threshold practice to existing first try (360>300, 270<300, period 3); preserve D6 routes. X-G.5 equivalent notation in all three pages, no bank edits. Direct source checks: 75 unique Practice IDs all present in exact locked banks (49+26), 18/18 same-ID exact replay stems, identical original marker sequence and all rubric point strings, 12 Written disclosures, 94/94 balanced disclosures, 1215/1215 inline delimiters; residual compound raw notation scan zero; 18 outcomes and five SVG references. Fifteen executed math checks PASS (A2, A3, threshold, B61–63, B65–68, B70–75); B64 covered by A3, B69 inverse identity/domain checked by reasoning. S1 scope inherited from actual owner primary audit receipt c63ca380fe0416b4ed4214f5192197c7e95d20a6, SGK B18–21 printed p4–24, SBT p4–19, solutions p73–85; no new PDF scan. Prior independent verdict remains snapshot-scoped. AUTHOR_SELF_VERIFIED affected delta, no new independent NotebookLM PASS; no UI/AP/runtime/RELEASE/merge/deploy. Historic prose below is evidence for older snapshots only.

---

<!-- TOP04_MASTER974_O17_P21_D6_SELFCHECK_Q18_20261121 -->
## Historical snapshot 21/11/2026 — not current source lock

**CURRENT AUTHORING canonical:** `prototypes/thpt/content-drafts/topic04-powers-exp-log/Temp_TOPIC04_R06_NUMBERING_CONSISTENT_20261116.md` Git blob `4e8238e188204eefc060f18c88ef7a0a3c51a60e` (previous immutable learner `a101ca5e0130ff51fab1a1c867e1b23d642d98b8`). Exact current Topic bank `prototypes/thpt/shared-items/Temp_TOPIC04_POWERS_LOG_NEW26_PUBLIC_CANONICAL_R01_20261112.md`, blob `377de2e2e9fb6771f02270e8d85e950559669895` (previous bank `004692a2d996b5ba955318a087f4d58dcdb2df04`). **One active canonical path per source, one existing Q18 receipt; old R07 candidate is not selected as alternate learner**. Effective sole standard `SLM-THPT-QUALITY-ONE v3.2.0`; Q01 original SGK G11 KNTT tập 2 B18 p4–9/B19 p10–15/B20 p16–19/B21 p20–24, primary scanned page receipt blob `8adc01afd6d4a7ef87d1c9ae7403c61ef0f02a6c` inherited for actual section scope, no fake new full-book scan.

**#977 verified defect `TOP22-20261121-013` math/PED P1 FIXED:** `THPT-TOP04-P21` Bài 73 prompt is a **deterministic recurrence/model** `N(n)=500(0.8)^n` with no random variable, probability distribution or expectation operator. Thus `N(3)=500\cdot(4/5)^3=256` is the exact **model value**, not a probability expectation. Author independently recomputed the power and checked the semantic distinction; corrected original **one item answer** and its unique visible Practice projection to: `N(3)=256 cá thể theo mô hình giảm cố định 20% mỗi chu kỳ; đây là kết quả của công thức đã cho, không phải một kỳ vọng xác suất. Số lượng ngoài thực tế có thể khác khi các giả thiết của mô hình không còn đúng.` Original stem, reasoning `500·64/125=256`, D6 and 74 other item answers are immutable. Changed P21 `ORIGINAL_BLOB` pointer matches new canonical bank. All 26 Topic display-only source markers now point to **the same current bank blob** `377de2e2e9fb6771f02270e8d85e950559669895`, including 25 unchanged originals; the marker-only relock does not alter any student-facing text, 74 unchanged Practice problems or mathematical keys. Delta C for **actual explanation** (not an equivalent wording-only A delta). The existing optional NotebookLM packet `Temp_TOPIC04_O17_P21_AFFECTED_ACADEMIC_PED_REVIEW_20261121.md` remains **PENDING_INDEPENDENT**, never advertised reviewer PASS. `Q18_AUTHOR_SELF_VERIFIED` permitted by v3.2.0 where author can prove math/PED confidently; no second reviewer prerequisite silently invented.

**#977 defect `TOP22-20261121-014` P1 FIXED (Q04/Q14):** Old O17 First Try used exactly P21 stem data `500,20%,n=3→256` and exposed that solution **before** Practice, impairing transfer. O17 `Vận dụng` and its own existing voluntary `Đối chiếu` now use new data `640,25%,n=2`; independent calculation `640(3/4)^2=360`, sequential values 480→360, not false linear decrease `640−2·160=320`. Bài 73 original math stays independent and distinct; model is explicitly assumed, not actual certain population. O17 Example and other pedagogy unchanged.

**#977 `TOP22-20261121-015` P1 FIXED (Q08/PED6):** Directly audited all **18** learner `Vận dụng→Đối chiếu` against 75 real Practice stems: seven outcomes already had usable Bài numbers; 11 lacked them (`O01/O02/O03/O04/O07/O08/O09/O10/O11/O16/O18`). Inserted 11 **Kiểm lỗi** inside same voluntary disclosures, each gives math misconception, **actual subsection Kiến thức** and exactly existing Practice Bài numbers. Now 18/18 FirstTry outcomes have a specific route to recover; original response logic remains and no bank copied.

**#977 `TOP22-20261121-016` P2 FIXED (Q16/Q17/PED6):** 18 public `PUBLIC_REPLAY_ONLY` selfchecks remain **identical question-only stems** with `NO_MASTERY; NOT_RD1`. Added **one voluntary `<details><summary>Đối chiếu</summary>` AFTER all prompts**, mapping 1→Bài1, 2→2, 3→4, 4→6, 5→19, 6→21, 7→22, 8→26, 9→36, 10→37, 11→38, 12→39, 13→51, 14→52, 15→53, 16→54, 17→65, 18→67. 18/18 actual `item_id` checked between selfcheck and canonical Practice. No duplicate answer/rubric; `CLIENT_SELF_CHECK_NO_MASTERY`, not independent held-out Topic readiness/Final Submit, no private RD1.

**Q03–Q15 exact QA:** learner still 18 full Knowledge arcs, 75 Practice unique item IDs, 49 original SGK frozen bank references and 26 Topic originals with **one changed P21 answer** in existing bank, original 12 Written rubrics and 5 SVG intact. Whole **student-visible Practice** after inverse replacing only the P21 answer matches the old 75 Practice content exactly; 26 non-rendered source-pointer comments were relocked to the new single bank SHA without editing questions/solutions. Selfcheck 18 stems untouched. 94/94 `details` balanced (18 Knowledge +75 Practice +1 selfcheck mapping). One SGK footer at the end; no extra independent assessment or web implementation. Preserves meaningful signed historic snapshots, no full NotebookLM rerun.

**Current Q18/A1–A7:** `AUTHOR_SELF_VERIFIED` for these **precise four verified defects on current source**; P0/P1=0 among those defects, no independent reviewer verdict claimed. Inherited original signed Q18 applies to unchanged 18-outcome mathematics and 74 other Practice records; new math/ped explained above checked directly. AUTHORING remains non-RELEASE, no merge/deploy.

---

# CĐ4 R06 Q18 AUTHOR_SELF_VERIFIED — domain clarity/recap with existing D6+MathJax corrections · 18/11/2026

PACKET_ID: THPT-TOPIC04-POWERS-EXP-LOG-FULL-R01
CONTENT_REVISION: R06
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
LEARNING_PATH: TOPIC
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic04-powers-exp-log/Temp_TOPIC04_R06_NUMBERING_CONSISTENT_20261116.md
SOURCE_BLOB: 71853ed34cb5cb21e312a0a9f9c713b76e5219b4
ACADEMIC_SOURCE_BLOB: 71853ed34cb5cb21e312a0a9f9c713b76e5219b4
PREVIOUS_SOURCE_PATH: prototypes/thpt/content-drafts/topic04-powers-exp-log/Temp_TOPIC04_R05_STUDENT_FIRST_75_CANONICAL_VISIBLE_20261115.md
PREVIOUS_SOURCE_BLOB: c948ad9957bbcd55b416ea7ddce96a6dcdf0d799
PREVIOUS_Q18_RECEIPT_PATH: prototypes/thpt/review-packets/Temp_TOPIC04_R05_AUTHOR_SELF_QA_RECEIPT_20261115.md
PREVIOUS_Q18_RECEIPT_BLOB: 436084332b4acc642db3a2a8523d91d980cf566d
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
AUTHOR_QA_H2_H3_SEQ: PASS
AUTHOR_QA_OUTCOMES: 18/18
AUTHOR_QA_CANONICAL: 75_UNIQUE_IDS_SOURCE_MEMBERSHIP_VERIFIED_EQUIVALENT_NOTATION_12_RUBRIC_WEIGHTS_PRESERVED
AUTHOR_QA_SELFCHECK: 18/18 EXACT_CURRENT_PRACTICE_STEMS_SAME_IDS
AUTHOR_QA_REVEAL_CONTENT: 94_VALID_VOLUNTARY_DISCLOSURES_18_KNOWLEDGE_75_PRACTICE_1_PUBLIC_SELFCHECK_MAP
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
P0: 0
P1: 0
AUTHOR_SIGNOFF: TOP04_WORK_A04_XG5_20261126_71853ed34cb5cb21e312a0a9f9c713b76e5219b4
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PRIVATE_RD1_IMPORTED: 0
OFFICIAL_TOPIC_READINESS: NOT_CLAIMED
RELEASE_AUTHORIZATION: NO

S1_RECEIPT: Historical owner's G11 Toán KNTT tập 2 source-locked printed-to-PDF-page review (blob above): SGK ChVI B18 p4–9/B19 p10–15/B20 p16–19/B21 p20–24; SBT B18 p4–7/B19 p8–10/B20 p11–15/B21 p16–19 and solution p73–85. No newly asserted PDF direct rescan. Prior independent Academic/PED PASS applies to original G11 ChVI reviewer snapshot only, not novel Topic teaching or 26 new items.
OUTCOME_AUDIT: 18/18 outcomes have meaning-first prose, 18 newly written standalone Ví dụ/Đề bài/Lời giải, 18 adjacent Vận dụng/Đối chiếu and D6; 75/75 learner-visible original canonical Practice stem/key/solution projections with 12 rubrics, and 18 public selfcheck question stems; 5 correctly placed SVG.
MATH_VERIFICATION: 26 direct calculations/domain/inequality/discrete-period assertions PASS on R05; 75/75 original stem, key, worked solution and rubric exact-source projection parity PASS; five SVG text/desc checked. No inherited R04 signoff for new example pedagogy.
PED_VERIFICATION: 5 natural learning arcs, 18 discovery prompts before calculations and formula conditions, 18 self-contained solved examples, 18 near-outcome first tries and opt-in comparisons; real Practice and Self Check; no technical policy wording to students; B21 figure moved to M15.
CANONICAL_Q15: 49 historic original G11 canonical IDs and 26 Topic extension IDs, unchanged source, 75 display-only projections not a second bank; 12 original Written rubrics exactly preserved (8x4 points +4x7 points), Anchor remains role not ID; 18 public selfcheck placements reuse IDs.
ASSESSMENT_Q16: 18 PUBLIC reuse selfcheck questions, not hidden independent Readiness. No key/solution/hint/rubric inside Self Check, no private RD1, no official Mastery. Manual comparison after complete attempt, Final Submit runtime and privacy subject to RELEASE.

## Evidence and limits

- Existing R05 source `c948ad9957bbcd55b416ea7ddce96a6dcdf0d799` was checked for item/comment identity, all solution/rubric/D6 lines and complete `<details>` blocks against `58e6f13113c7a042418560d1efe896b8a43de735`. **Exact** content equality aside from heading/promoted numbering and practice item labels. Academic numeric/mathematical PASS belongs to immutable predecessor and is preserved by source-equivalence; no independent NotebookLM new Topic verdict or new arithmetic execution claimed.
- Three independent learner pages now H1; conceptual H2 1..N and lessons H3 1.1..N.M; Practice H2 scoped groups 1..N and labels **Bài 1.** etc, not deep H4. No orphan (b)/(2), no mixed sibling styles found in heading-tree scan.
- SOURCE receipt and V2 on this revision must be relocked to new Git SHA. AUTHORING only; RELEASE separately checks Golden UI/MathJax/DOM/anchor/mobile/Final Submit/owner permission. No merge/deploy.


## 18/11/2026 · Targeted Q03/Q09–Q14 domain and formula clarity

- Current one active learner source `8608179c09dee12c6088c219721f095aa9406147` replaces the earlier source-scoped R06 numbering receipt SHA `58e6f13113c7a042418560d1efe896b8a43de735`; immediately preceding effective editor draft was `5f1d29bfb17c14206d3c02e5130d308dd6ced21a` (existing #890 D6, condition wording, 16 MathJax fixes retained).
- TOP04-O01: for a≠0 and n positive integer, a^0=1 and a^(−n)=1/a^n; no 0^(−1). Verified example (3/4)^(−2)*(9/16)=1.
- TOP04-O05: log_a b exists only with a>0, a≠1, b>0, as unique real y satisfying a^y=b. A logarithm may be negative but its argument must remain positive. Verified log₂(1/8)=−3.
- TOP04-O06: identity log_a(uv)=log_a u+log_a v requires each u>0 and v>0 in reals; merely uv>0 is insufficient. Verified x=0 in (x−1)(x−4): log₂4 exists, individual logs of −1 and −4 do not.
- Summary checks exponential monotonicity a>1 vs 0<a<1, condition t=a^x>0, and integer-period threshold testing; existing conditions and remedies still in the body.
- Byte-exact comparison of complete Practice and Selfcheck sections versus effective draft `5f1d29bfb17c14206d3c02e5130d308dd6ced21a`: all 75 public canonical question placements, answers, solutions, Written rubrics and D6 unchanged; 18 question-only selfchecks unchanged; all source SVG paths and reveal counts unchanged. This edit adds three genuine formal knowledge blocks and one recall, not 18 artificial cards.
- Signed **AUTHOR_SELF_VERIFIED** on the changed learning explanation only under owner-effective Q18. No new independent NotebookLM full Topic acceptance, website AP QA, private RD1, official Mastery, merge or deploy asserted.


<!-- TOP04_OWNER_EDITORIAL_DELTA_A_20261119 -->
Owner ΔA 19/11: 15 phát biểu mũ/logarit/hàm số đã có trong văn xuôi được gắn nhãn loại phát biểu dễ nhận biết; 3 khối formal cũ giữ nguyên; bỏ 5 dòng `Khám phá kiến thức` lặp ở phần Knowledge. Learner `bb4da8a9c17c4b5051043043d76682144e5414c3` → `8608179c09dee12c6088c219721f095aa9406147`. Kiểm đảo ngược các prefix và 5 nhãn chỉ ra nội dung toán, công thức, điều kiện, 18 Ví dụ/Đề/Lời giải, 18 Vận dụng/Đối chiếu, mọi item/figure/selfcheck/rubric không đổi. Đây là `DELTA_A_UI`, không bổ sung phát biểu học thuật mới; source CONTENT_READY vẫn hợp lệ theo owner, không full NotebookLM review hoặc RELEASE.


<!-- TOP04_S1_G11_T2_B19_LOG10_LN_E_DELTA_C_20261120 -->
### 20/11/2026 · S1 Q01/Q03/Q10/Q11 mandatory concepts · G11 Tập 2 B19 trang in 12–13

**S1 trực tiếp:** SGK KNTT Toán 11 Tập hai B19 pp12–13 có mục riêng **Lôgarit thập phân**, **Lôgarit tự nhiên** và giới hạn xác định **số e**. https://thuvienhoclieu.com/wp-content/uploads/2026/05/thuvienhoclieu.com-SGK-Toan-11-tu-nam-2026-Tap-2.pdf . Learner trước `8608179c09dee12c6088c219721f095aa9406147` dùng `ln` trong đổi cơ số mà chưa có định nghĩa `ln x`, `log x`, `e`; đã bổ sung trên chính learner `2444022a5fec0f6b94de4002d8f08363e3b82453` tại TOP04-M08/O08 trước công thức đổi cơ số và Ví dụ cũ, với `e=lim_(t→∞)(1+1/t)^t≈2.71828`, `log M=log_10 M`, `ln M=log_e M`, M>0, `ln e=log 10=1`; kèm mô hình lãi kép liên tục để giải thích nguồn gốc cơ số e. Không thay bất cứ canonical item/answer/solution/rubric/SVG.

**Q18 affected author math/PED 7/7 PASS:** e>1, giá trị e≈2.71828, tính log100=2 và ln(e²)=2, đổi cơ số ln8/ln4=3/2, đặt kiến thức mới trước công thức/VD, cân bằng MathJax, ID giữ nguyên và đảo ngược khối mới khôi phục nguyên văn source trước. `DELTA_C_ACADEMIC_MATERIAL`; không giả định independent NotebookLM PASS, giữ source CONTENT_READY theo owner, không site/release.


## 20/11/2026 · owner formal-label ΔA TOP04 knowledge
- New learner blob `e9294c7e564d7af96df58a99d0b85ed0023ff859`, former `2444022a5fec0f6b94de4002d8f08363e3b82453` is historical. Reclassified exactly four statement-label prefixes: two exponent/log laws are TÍNH CHẤT (not vague QUY TẮC); logarithm real-domain restrictions are KIẾN THỨC CẦN GHI NHỚ; the defining positive constant e is ĐỊNH NGHĨA (not vague KHÁI NIỆM). Same mathematical content/conditions/examples and 75 canonical item stems/keys/rubrics, 18 selfchecks unchanged.
- Targeted Q03/PED source-only ΔA self QA passed; no fresh independent NotebookLM PASS, no full S1 or RELEASE acceptance.


## 20/11/2026 — Kiến thức CĐ04 hoàn thiện theo S1 G11 T2 B18–B21
- Bài 18 (trang in 4–9): kiểm số mũ nguyên/âm/0, lũy thừa hữu tỉ/thực, tính gần đúng bằng máy tính, căn bậc n và 5 đẳng thức căn (tích, thương, lũy thừa, căn lồng, căn của lũy thừa chẵn/lẻ). Đã bổ sung định nghĩa thật của căn bậc n và số mũ thực, nêu rõ |a| trong căn bậc chẵn, điều kiện cơ số âm và ví dụ.
- Bài 19 (trang in 10–15): định nghĩa lôgarit, hai phép đảo a^(log_a M)=M và log_a(a^x)=x, tính chất log, đổi cơ số, số e, log/ln và cơ số hợp lệ. Đã bổ sung hai công thức đảo.
- Bài 20 (trang in 16–19): hàm mũ/log, miền, tập giá trị, đồ thị, tính đơn điệu, tiệm cận, hai hàm ngược và đối xứng: đã kiểm trong O09–O12, không sửa vì đã đủ.
- Bài 21 (trang in 20–24): bổ sung phương trình mũ a^x=b với b>0/b≤0; phương trình log log_a x=b; bất phương trình mũ với b≤0, b>0 và bất phương trình log cơ bản theo hai miền cơ số. Giữ ví dụ ứng dụng, giải và điều kiện tự mở.
- Kiểm toán học 18/18 Vận dụng/Đối chiếu trong trang Kiến thức. Phát hiện và sửa 1 lỗi phản hồi O16: học liệu cũ bảo x=5 bị loại vì log(0), nhưng mẫu số log(6−x) ở x=5 bằng log1 nên **x=5 thuộc miền xác định**; đầu mút ngoài miền thực sự là x=−2 và x=6. Phản hồi đã sửa, cùng cách phân biệt x=3 là biên dấu nghiêm của câu Vận dụng. Kiểm số 3^√2≈4.7288, 400·0.9^3=291.6 và giao miền log.
- Tổng cộng 14 chỉnh sửa theo 3 lần cập nhật trên **cùng một nguồn learner hiện hành**. Bài 1.1–5.2 và 18 Outcome giữ nguyên; 93/93 khối Đối chiếu cân bằng; toàn văn Luyện tập, Tự kiểm tra giữ nguyên. Không viết lại các bài đã tốt. Tự kiểm tác giả cho phần ảnh hưởng, không tuyên bố NotebookLM độc lập hay release.
- LEARNER_CURRENT_BLOB: a101ca5e0130ff51fab1a1c867e1b23d642d98b8; prior e9294c7e564d7af96df58a99d0b85ed0023ff859 historical.
