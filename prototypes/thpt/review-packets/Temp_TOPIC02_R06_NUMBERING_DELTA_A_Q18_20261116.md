<!-- MASTER974_TOPIC02_D6_SELFCHK_PED_AFFECTED_20261121 -->
## CĐ02 · Chất lượng tự học sau sửa O04/O06: D6 16 outcome, tự đối chiếu cuối Topic và một nguồn SGK

**Nguồn hiện hành duy nhất:** `prototypes/thpt/content-drafts/topic02-ineq-quad-region/Temp_TOPIC02_R06_NUMBERING_CONSISTENT_20261116.md`, Git blob `d2f1ac8d5526e28cb9cf4e4c56b005ebea51dbb5`, previous learner snapshot `3161436a92a450e17aaf5c6b53736f70d9d5bfa0`. **Không** nhân bản bản thảo R07 hay reviewer receipt; tiếp tục biên tập đúng R06 và đúng Q18 receipt hiện hữu.

**Q01–Q02/Q08/Q14/PED6 affected evidence:** Trực tiếp đọc 16/16 đoạn `Vận dụng→Đối chiếu`, đối chiếu các Practice hiện hữu. Trước sửa **15/16 không dẫn tới một bài luyện cụ thể** (chỉ O07 có đề cập Bài 17); nay cả **16/16** có `Kiểm lỗi` tự mở, nêu lỗ hổng toán và chỉ chính xác tới mục `Kiến thức 1.1–4.2` và một hoặc hai bài hiện hữu. Thử riêng đổi chiều khi chia số âm (O01), Δ và nghiệm kép (O02–O04), dấu nghiêm/không nghiêm và mốc nghiệm (O05–O07), thời gian/chiều dài (O08), hệ số zero trong hai ẩn và điểm thử không nằm trên biên (O09–O11), đơn vị/nguyên và giao của hệ (O12–O13), miền rỗng vs không bị chặn (O14), cực đại trên cả một cạnh (O15), nguyên khác liên tục (O16). Phép toán O04 “không đổi dấu qua nghiệm kép” và O06 “tại x=1,3 thì f=0” từ bước trước giữ nguyên và đã tự kiểm.

**Q17/Q16:** 16 public selfcheck `PUBLIC_REPLAY_ONLY` câu hỏi vẫn nguyên văn; một `<details><summary>Đối chiếu</summary>` ở cuối tự mở sau học sinh tự làm dẫn từng câu 1–16 đến Bài `1,3,5,7,9,11,13,15,18,19,20,23,26,29,33,35`, tất cả item_id public trùng đúng nguồn Practice hiện hữu. Không nhân bản câu/đáp án/rubric, không chấm độc lập, không Mastery/Final Submit. Hiện có **55/55 disclosure cân bằng** =16 Knowledge +38 Practice +1 tự kiểm. 38 Practice canonical, 4 Written rubric, 3 SVG giữ nguyên từng byte đoạn/source asset.

**Q03/#864 mục 12:** bỏ duy nhất cách dẫn nguồn giữa Kiến thức “**SGK còn dùng biệt thức thu gọn**” bằng lời giảng trực tiếp “ta có thể dùng biệt thức thu gọn”; **chỉ một dòng nguồn SGK còn lại ở cuối toàn Chuyên đề**, không phá nội dung về \(b'=b/2\), \(\Delta'=b'^2-ac\) hoặc điều kiện \(a≠0\).

**Kết quả tác giả tự kiểm:** kiểm exact source readback `16/16` nhãn Kiểm lỗi trong chính disclosure, `16/16` Knowledge targets và Practice mapping thật, `38` Practice items; (55) thẻ tự mở đóng/mở đủ; original equations/keys/rubric không thay; 1 source footer. `DELTA_C_ACADEMIC_MATERIAL` chỉ ảnh hưởng giải thích D6/PED6 và nav tự kiểm, `DELTA_A_UI` cho bỏ dẫn nguồn thừa. **Q18_AUTHOR_SELF_VERIFIED affected scope theo Q01–Q18 v3.2.0, P0/P1=0 với các lỗi đã sửa**, không giả reviewer/NotebookLM độc lập và không cấp toàn CĐ02 full audit PASS khi chưa kiểm hết toán/SGK/outcome.

---

<!-- TOP02_MASTER974_O04_O06_CURRENT_AUTHORING_Q18_20261121 -->
## CĐ02 — Targeted Q18 tác giả tự xác minh sau sửa lỗi toán O04 / PED O06 (21/11/2026)

**Một canonical learner duy nhất** `prototypes/thpt/content-drafts/topic02-ineq-quad-region/Temp_TOPIC02_R06_NUMBERING_CONSISTENT_20261116.md`; new blob `3161436a92a450e17aaf5c6b53736f70d9d5bfa0`, previous verified baseline `6c975c6f19c11193fad7546cebccb27a9bcbcd2b`. Xác nhận diff chính xác **hai đoạn**, và byte content sau sửa khớp candidate lưu như bằng chứng `Temp_TOPIC02_R07_O04_O06_SIGN_AND_D6_CANDIDATE_20261121.md` blob `3161436a92a450e17aaf5c6b53736f70d9d5bfa0`. Candidate **không** được chọn làm learner path thứ hai. Chỉ sửa nội dung trên R06 hiện hành. Nội dung trước sửa lưu lịch sử ở Git và packet review cũ.

**Lỗi #977 đã xác minh, kiểm toán bằng toán:** `TOP02-O04`: khi `Δ=0`, tam thức `f(x)=a(x−x₀)²`, `a≠0`; với `x≠x₀`, `(x−x₀)²>0` nên f cùng dấu a **trên cả hai phía**, `f(x₀)=0`; đồ thị chạm trục hoành **không đổi dấu**. Kiểm x=1,2,3 với `3(x−2)²`: 3,0,3; `−3(x−2)²`: −3,0,−3. Đã bỏ câu mâu thuẫn “quy tắc dấu thay đổi” và thay bằng phát biểu có chứng minh bản chất. `TOP02-O06`: `−x²+4x−3=−(x−1)(x−3)`; nghiệm `>0` là `(1,3)`; tại x=1 và x=3 bằng 0 nên **loại**; tại x=2 bằng 1 là điểm **trong** khoảng, không phải thử đầu mút. D6 giờ chỉ rõ vì sao dấu `≥0` mới nhận biên. Hai sửa tác động đúng **Q03/Q08/Q11/Q13/Q14/PED3/PED5–6**, không phải chỉnh metadata để làm đẹp.

**Bảo toàn học sinh:** Giữ 16/16 Knowledge unit (chỉ hai đoạn nêu trên được đổi), **38/38 original canonical Practice item stems/keys/solutions/rubrics**, 4 Written rubrics, 16/16 public question-only selfchecks, 54/54 voluntary disclosure blocks, 3 original SVG paths, một dòng nguồn SGK cuối toàn Topic. Không nhập private RD1, không cấp điểm/Final Submit/Mastery mới. S1 primary original G10 Toán 10 KNTT T1 B03 pp22–25/B04 pp26–30 và T2 B17 pp19–24 được đối chiếu theo **receipt đã có** `53ecd902154118ba7ea9ab2a96e57f523feb8fd4`; không giả có lần đọc mới nguyên trang.

**Chế độ Q18:** `AUTHOR_SELF_VERIFIED` cho **affected math/PED DELTA_C** dưới chuẩn Q01–Q18 v3.2.0; không tuyên bố NotebookLM độc lập đã review (packet trước ghi PENDING là trạng thái theo candidate cũ, không phải cổng cố định). Tự QA hai phép chứng minh và biên, nguồn/canonical diff đúng hai chỗ, P0=0/P1=0 **trong phạm vi hai lỗi đã sửa**; chưa suy toàn CĐ02 đã đạt MASTER #974. Không merge/deploy.

---

# CĐ2 R06 Q18 AUTHOR_SELF_VERIFIED — formal statements and key-recall QA · 17/11/2026

PACKET_ID: THPT-TOPIC02-INEQ-QUAD-REGION-FULL-R01
CONTENT_REVISION: R06
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
LEARNING_PATH: TOPIC
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic02-ineq-quad-region/Temp_TOPIC02_R06_NUMBERING_CONSISTENT_20261116.md
SOURCE_BLOB: d2f1ac8d5526e28cb9cf4e4c56b005ebea51dbb5
ACADEMIC_SOURCE_BLOB: d2f1ac8d5526e28cb9cf4e4c56b005ebea51dbb5
PREVIOUS_SOURCE_PATH: prototypes/thpt/content-drafts/topic02-ineq-quad-region/Temp_TOPIC02_R05_FULL_LEARNER_VISIBLE_38_CANONICAL_20261115.md
PREVIOUS_SOURCE_BLOB: eb5a01b50262dc4b151b3915f5a5e4b436432374
PREVIOUS_Q18_RECEIPT_PATH: prototypes/thpt/review-packets/Temp_TOPIC02_R05_AUTHOR_SELF_QA_RECEIPT_20261115.md
PREVIOUS_Q18_RECEIPT_BLOB: 19a8ce12552d94add042dc2127a054d20cd29027
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
AUTHOR_QA_H2_H3_SEQ: PASS
AUTHOR_QA_OUTCOMES: 16/16
AUTHOR_QA_CANONICAL: 38/38 EXACT_ITEM_ID_STEM_KEY_SOLUTION_RUBRIC_D6
AUTHOR_QA_SELFCHECK: 16/16 QUESTION_ONLY_PRESERVED
AUTHOR_QA_REVEAL_CONTENT: 55_VALID_SELF_REVEALS_16_KNOWLEDGE_38_PRACTICE_1_SELFCHECK_NAV
CURRENT_PREVIOUS_NUMBERING_SOURCE_BLOB: 41a3d0497057217368ba63fecfa43d118f3e4519
CURRENT_PREVIOUS_EDITORIAL_SOURCE_BLOB: 351dc607a6721fd56947344034f06c6cc8cca253
CURRENT_FORMAL_KNOWLEDGE_QA: TOP02-O01_O02_O03_O09 PASS
CURRENT_RECALL_SUMMARY_QA: TOP02-O01_O02_O03_O09_O15_O16 PASS
CURRENT_SOURCE_PRACTICE_PARITY: 38/38 SAME_STEM_KEY_SOLUTION_RUBRIC_D6
CURRENT_SOURCE_PUBLIC_REPLAY_PARITY: 16/16 SAME_QUESTION_ONLY
CURRENT_SOURCE_SVG_PARITY: 3/3 SAME_PATH
CURRENT_SOURCE_QA_DELTA: CORRECTED_O04_O06_MATH_PLUS_16_KIEM_LOI_D6_PATHS_AND_16_PUBLIC_SELFCHK_MAP_AND_ONE_SOURCE_FOOTER; 0 CANONICAL_ITEM_OR_RUBRIC_CHANGES
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
P0: 0
P1: 0
AUTHOR_SIGNOFF: TOP02_20261121_D6_SELFCHK_ONE_FOOTER_SELFQA_d2f1ac8d5526e28cb9cf4e4c56b005ebea51dbb5
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PRIVATE_RD1_IMPORTED: 0
OFFICIAL_TOPIC_READINESS: NOT_CLAIMED
RELEASE_AUTHORIZATION: NO

S1_RECEIPT: Prior original/owner-checked SGK KNTT Toán 10 T1 ChII B03 print p22–25/SBT p16–18; B04 print p26–30/SBT p19–23; end SGK p31–32/SBT p24–28. G10 T2 B17 source scope p19–24 with fixed-a parameter examples historically recorded; no B18 radical outcome imported. This authoring pass uses immutable S1/SGK original evidence only; **no new PDF direct scan claimed**.
OUTCOME_AUDIT: All 16/16 TOP02-O01..O16 have contiguous explanatory passages grouped into four conceptual arcs, 38/38 public canonical practice IDs mapped (18 unchanged original +20 new), 16 public self-check references, 4 original/new Written in one library.
MATH_VERIFICATION: Recomputed inequalities, discriminants, exact parameter boundaries, feasible polygons/objectives, integer and real optima; all 16 listed outcome cases and 20 new item worked solutions below checked with conditions.
PED_VERIFICATION: Motivation of feasibility precedes rules; bridges from 1 variable to quadratic to 2-variable half-planes and linear optimization. 16 voluntary First Tries with specific corrective D6 and nearby 3 SVG whose mathematical data match text, not checklist microcards.
CANONICAL_Q15: 18 original unique index IDs plus 20 original extension IDs (18 Practice, two Written), exactly one stem/key/solution/rubric at source-of-truth locations. 16 public self-check placements reuse IDs; no item cloned as Topic Core.
ASSESSMENT_Q16: Zero private RD1 imported, public self-check CLIENT_SELF_CHECK_NO_MASTERY, not official TOPIC_READINESS and no automatic Mastery. RELEASE must protect Final Submit from pre-submit key/hint/AI/correctness leak, test actual runtime independently.

## Current formal-maths targeted verification (17/11/2026)

- TOP02-O01: adding or subtracting the same amount preserves inequality direction; multiplication/division by a negative constant reverses direction; an unknown-sign factor must be handled by sign cases.
- TOP02-O02: for f(x)=ax²+bx+c, a≠0, discriminant Δ=b²−4ac separates no real root / double root / two distinct real roots; a=0 is separately handled.
- TOP02-O03: if Δ<0 and a≠0 then f(x) retains the sign of a for every real x; absence of equality roots does not mean a strict inequality has no solution.
- TOP02-O09: with (a,b)≠(0,0), an inequality ax+by ⋄ c may contain one zero coefficient; a pair (x,y) is a solution exactly when substitution makes the inequality true.
- TOP02-O15/O16: convex closed nonempty bounded polygon yields linear extrema at vertices, but integer-constrained optimum requires testing feasible lattice points. The existing 8/3 continuous and integer 13 calculation is unchanged.
- Diff prior selected source `351dc607a6721fd56947344034f06c6cc8cca253` to current 702163e95642d24f070c442cf13f4ad575678145: complete Practice and Selfcheck sections byte-exact, same 38 canonical item markers, same disclosure boundaries, same SVG paths. No new ID, answer, solution, rubric, RD1, or active Mastery.
- DELTA_C affects presentation and precision of mathematical teaching, reviewed within owner-effective Q18 AUTHOR_SELF_VERIFIED scope; no independent NotebookLM Topic acceptance is claimed.

## Evidence and limits

- Existing R05 source `eb5a01b50262dc4b151b3915f5a5e4b436432374` was checked for item/comment identity, all solution/rubric/D6 lines and complete `<details>` blocks against `41a3d0497057217368ba63fecfa43d118f3e4519`. **Exact** content equality aside from heading/promoted numbering and practice item labels. Academic numeric/mathematical PASS belongs to immutable predecessor and is preserved by source-equivalence; no independent NotebookLM new Topic verdict or new arithmetic execution claimed.
- Three independent learner pages now H1; conceptual H2 1..N and lessons H3 1.1..N.M; Practice H2 scoped groups 1..N and labels **Bài 1.** etc, not deep H4. No orphan (b)/(2), no mixed sibling styles found in heading-tree scan.
- SOURCE receipt and V2 on this revision must be relocked to new Git SHA. AUTHORING only; RELEASE separately checks Golden UI/MathJax/DOM/anchor/mobile/Final Submit/owner permission. No merge/deploy.



<!-- TOP02_OWNER_EDITORIAL_DELTA_A_20261119 -->
**19/11 owner ΔA / SOURCE_EQUIVALENT:** 12 tiểu mục trước đây chỉ có phát biểu quy tắc/điều kiện trong văn xuôi được bổ sung **nhãn khối** phân loại đúng nội dung; 4 khối đã có không đổi. Baseline learner `ec8a640c65f66e1f743c8af155642aac6a4170c3` → current `702163e95642d24f070c442cf13f4ad575678145`. Kiểm bằng phép đảo ngược từng phần nhãn: toàn bộ đoạn toán, điều kiện, công thức, 16 ví dụ Đề/Lời giải, 16 Vận dụng/Đối chiếu, Practice/item/rubric/SVG/canonical/Q16 giữ nguyên byte. Đây là cải thiện cách nhận biết kiến thức, **không thêm định lý hoặc phép toán mới**. Bảo toàn AUTHORING CONTENT_READY cũ, không đòi NotebookLM full-topic; không cho phép tự merge/deploy.


<!-- TOP02_S1_G10_T2_B17_DELTA_C_20261120 -->
### 20/11/2026 — S1 G10 Tập 2 B17 (trang in 19) · bổ sung biệt thức thu gọn Δ′, Q01/Q03/Q11/Q18

**Nguồn S1:** SGK Kết nối tri thức Toán 10 Tập hai, Bài 17, trang in 19: biệt thức `Δ=b²−4ac`, biệt thức thu gọn `Δ′=(b′)²−ac` khi `b=2b′`. [Bản SGK gốc đã đối chiếu](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-10-Tap-2-Chuong-trinh-moi.pdf). Trước chỉnh, learner `702163e95642d24f070c442cf13f4ad575678145` đã có Δ nhưng chưa dạy Δ′ trong Kiến thức. Đã thêm vào **đúng một source learner** `cb3a6e6be2ec3419be3fdc16f0e5df3599fe1ec2` tại `TOP02-M02 / TOP02-O02`: giải thích b′ và Δ′, trường hợp âm/bằng 0/dương, nghiệm `(-b′±√Δ′)/a` và ví dụ `2x²−8x+6=0` có nghiệm 1,3.

**Q18 AUTHOR_SELF_VERIFIED_AFFECTED_DELTA:** 6/6 kiểm tra thực tế PASS: với 4×5×4 bộ a,b′,c, `Δ=4Δ′`; nghiệm 1 và 3 đều thỏa phương trình gốc; MathJax delimiter cân bằng; số lượng `item_id` không đổi; bổ sung trước Ví dụ hiện hành; xóa đúng khối bổ sung trả lại learner cũ byte-identical. Không sửa stem/key/solution/rubric/ID/SVG/Readiness, 0 P0/P1 được xác định ở riêng phạm vi Δ′. **Phân loại `DELTA_C_ACADEMIC_MATERIAL`**, không mạo danh independent NotebookLM review hoặc full 22-topic audit. Theo quyết định owner, AUTHORING `CONTENT_READY` giữ nguyên trên nguồn mới sau source-lock. RELEASE và merge/deploy chưa được cho phép.


## 20/11/2026 · ΔA TOP02-O07
- Learner `36d6657b9977e3f72d7bf73d98653188a0ebe760` supersedes historic `cb3a6e6be2ec3419be3fdc16f0e5df3599fe1ec2`: formal label `ĐIỀU KIỆN — Miền nghiệm có điều kiện vật lý` now `PHƯƠNG PHÁP`, because actual source explains how to intersect algebraic solutions with physical feasible domain. All mathematical inequalities, examples, 38 canonical items and rubrics identical; only one label prefix changed. Targeted Q03/PED author self-QA, no full NotebookLM or RELEASE.


## 20/11/2026 — Tự kiểm trang Kiến thức theo SGK, nhánh Chuyên đề 02
- Đối chiếu đúng mảng kiến thức từ SGK. S1 Toán 10 T1 Bài 3-4 và T2 Bài 17: bổ sung định nghĩa tam thức bậc hai, bất phương trình bậc hai, hệ bất phương trình bậc nhất hai ẩn và vô số nghiệm nửa mặt phẳng.
- Tự kiểm điều kiện, ví dụ: a≠0 phân biệt bậc hai; f=x²−1<0 cho -1<x<1; 2y≥4 tương đương y≥2 có vô số x; hệ cần mọi điều kiện cùng đúng. Không thêm bài học/ITEM_ID mới. Luyện tập và Tự kiểm tra giữ nguyên toàn văn. Đã đọc lại bố cục, ký hiệu và lời dẫn của chính bản thảo đang dùng. Mọi SOURCE khác giữ lịch sử, không thêm bản learner.
- SOURCE_HIEN_HANH: 6c975c6f19c11193fad7546cebccb27a9bcbcd2b; kiểm tra học thuật bởi tác giả, không suy là phản biện độc lập hay trạng thái phát hành website.
