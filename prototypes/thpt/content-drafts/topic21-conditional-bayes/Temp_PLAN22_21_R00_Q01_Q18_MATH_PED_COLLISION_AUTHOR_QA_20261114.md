# CĐ21 PLAN22-21 · AUTHORING R00 — Math/PED structural QA + Q01 S1 + Q15 canonical collision receipt · 14/11/2026

STATE: AUTHORING_SELF_QA_PROGRESS_NOT_FINAL_SIGNOFF
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
PACKET_ID: THPT-TOPIC21-CONDITIONAL-BAYES-R00-CANDIDATE
LEARNING_PATH: TOPIC
SOURCE_BLOB: 71daa75d5a3862926ddeedd01adb18a0886d8669
SOURCE_PATH: prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R00_FULL_8_OUTCOMES_20261114.md
MATRIX_BLOB: 7614883c3705656de49f84f4d65b142cdb74fe91
MATRIX_PATH: prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R00_19_CANONICAL_27_PLACEMENT_8_OUTCOME_MATRIX_20261114.md
ORIGINAL_SVG_BLOB: 5d27efbf0fb1725e95b98dcec1242ee63592d9f7
ORIGINAL_SVG_PATH: docs/assets/images/thpt/FIG-TOP21-BAYES-TWO-SOURCES_TREE_WHITE_R00.svg
HISTORICAL_CROSS_PR_OLD_G12_BLOB: 156061dd3bb240ddac21183df21a12637e1b5b09
G12_SGK_CHVI_FULL_BLOB: 1578efd4d2d46deb9bae064d12752d88fc3747b8
REVIEWER_VERDICT: NOT_CLAIMED
Q18_AUTHOR_FINAL_SIGNATURE: NOT_SIGNED
RELEASE_AUTHORIZATION: NO

## 1. Source fidelity and explicit historical pagination discrepancy — Q01

**Authoritative original-S1 visual/byte provenance from existing G12 SGK AUTHORING PR #731** (not direct re-download in this chat): source `prototypes/thpt/content-drafts/G12_SGK_CHVI_B18_B19_S1_OUTCOME_BLUEPRINT_WORKING_20261103.md`, Git blob `cb37eeb4cbb21f20c22a57df1a8ca18d9a6630db`, includes original SGK SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`: B18 printed64–71/PDF1 66–73, B19 printed72–78/PDF1 74–80, END printed79–80/PDF1 81–82. SBT original SHA256 `823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1`, B18 printed40–42/PDF1 38–40, B19 printed43–44/PDF1 41–42, END printed45–47/PDF1 43–45. Direct book image inspection **occurred in prior AUTHORING PR #731**; it is NOT repeated here.

**Observed discrepancy:** Legacy combined PR #810 author receipt says SGK G12 ChVI printed `42–58` and SBT `40–64`, which does **not agree** with exact original file visual-index ledger in #731. This new CĐ21 R00 uses the direct-original-S1 page receipt from #731; **does not rewrite old source/receipt** or claim old snapshot reviewer used corrected book bytes. Mark `Q01_HISTORIC_PAGE_RECEIPT_CONFLICT` pending final activity-by-outcome verification. SGK determines Core; SBT only references exercise families.

## 2. Q15 confirmed duplicate-ID / different-stem conflict, NO silent canonical rewrite

The 10 original G12 Practice IDs in historical author source `156061dd3bb240ddac21183df21a12637e1b5b09` (commit `b99297c1470d9ef3f273c8393a39427172c38fba`) were compared **one by one** against identical IDs in already NotebookLM-reviewed G12 SGK ChVI source `1578efd4d2d46deb9bae064d12752d88fc3747b8` on Draft PR #731. **10/10 have different stems**:

| Same item_id | Old Topic G12 brief stem | G12 SGK ChVI brief stem | Assessment |
|---|---|---|---|
| `THPT-G12-B18-P01` | Một nhóm 24 bạn gồm 15 bạn nữ và 9 bạn nam. Có 9 bạn nữ và 5 bạn nam thích vẽ. Chọn đều một bạn… | Chọn đều một thẻ từ 1 đến 12. Biết thẻ chia hết cho 3; tính xác suất thẻ đồng thời là số chẵn.… | DIFFERENT_STEM_HOLD |
| `THPT-G12-B18-P02` | Gieo đều xúc xắc 6 mặt. A: “ra số chẵn”; B: “ra số chia hết cho 3”. Tính \(P(A\mid B)\) và \(P(… | Từ 8 thẻ đánh số 1–8, chọn đều một thẻ. B: thẻ chẵn; A: thẻ chia hết cho 4. Tính P(A\|B) theo c… | DIFFERENT_STEM_HOLD |
| `THPT-G12-B18-P03` | Hộp có 4 thẻ xanh và 3 thẻ vàng. Rút đều lần lượt hai thẻ **không hoàn lại**. Tính xác suất cả … | Với dữ kiện 20 em đi xe buýt, 8 nữ trong số đó, cả lớp có 25 nữ, tính P(đi xe buýt\|nữ).… | DIFFERENT_STEM_HOLD |
| `THPT-G12-B18-P04` | Tung một đồng xu cân đối và gieo một xúc xắc cân đối độc lập. A: “đồng xu ngửa”; B: “số chấm xú… | Cho P(A)=1/2, P(B)=1/2 nhưng P(A∩B)=0. Có thể nói hai biến cố độc lập không?… | DIFFERENT_STEM_HOLD |
| `THPT-G12-B18-P05` | Cho hai biến cố A, B với \(P(B)=2/5\) và \(P(A\mid B)=3/4\). Tính (a) \(P(A\cap B)\); (b) \(P(\… | Dữ liệu: Nhóm X 30 chọn A,20 không; Nhóm Y 15 chọn A,35 không. Tính P(X\|chọn A).… | DIFFERENT_STEM_HOLD |
| `THPT-G12-B19-P01` | Một xưởng lấy 70% sản phẩm từ dây chuyền A, 30% từ dây chuyền B. Xác suất một sản phẩm bị lỗi k… | Cho P(A)=2/5. Tính P(Ā), kiểm hai nhánh phủ hết không gian.… | DIFFERENT_STEM_HOLD |
| `THPT-G12-B19-P02` | Chọn hộp X với xác suất \(2/5\), hộp Y với xác suất \(3/5\). Nếu chọn X, xác suất rút thẻ đỏ là… | Hai nguồn cung A 30%, B 70%, tỉ lệ lỗi lần lượt 10% và 20%. Xác suất lấy ngẫu nhiên một sản phẩ… | DIFFERENT_STEM_HOLD |
| `THPT-G12-B19-P03` | Xác suất ngày mai có mưa là \(1/4\). Khi có mưa, xác suất một chuyến xe đến muộn là \(2/5\); kh… | Cây: P(A)=0,7; xác suất kết quả E nếu A là 0,2, nếu Ā là 0,5. Tính P(E).… | DIFFERENT_STEM_HOLD |
| `THPT-G12-B19-P04` | Trong một lô sản phẩm, 1% sản phẩm thực sự có lỗi. Máy kiểm tra báo “lỗi” cho 90% sản phẩm thực… | P(A)=1/4, P(B\|A)=4/5, P(B\|Ā)=3/5. Tính P(A\|B).… | DIFFERENT_STEM_HOLD |
| `THPT-G12-B19-P05` | Mỗi đơn hàng được phân ngẫu nhiên vào đúng một trong ba tuyến A, B, C (ba lựa chọn xung khắc và… | Giả định tỷ lệ nền 1%, độ nhạy 80%, tỷ lệ dương giả 10%. Tính P(có đặc điểm\|dương).… | DIFFERENT_STEM_HOLD |

Six other old references: two old Written IDs (source custody not yet reconciled), four new old PR #810 extension IDs (shared source on unmerged Draft) are also quarantined. **All sixteen are excluded from CĐ21 active source counts**. This is a **Q15 P1 blocker**: a single `item_id` cannot point to two stems, answers, solutions or rubrics; owner needs a canonical ownership decision before inter-PR reuse. Do not rename existing SGK item IDs or copy old answers into new CĐ21 without explicit reconciliation. Original history PASS remains attached to each frozen source, not transferred across scope split.

## 3. Substantive academic & pedagogy audit (current draft)

- **8/8 outcome distinct flows:** O01 sample-space restriction, O02 conditional denominator, O03 multiplication when dependent, O04 independence check, O05 total probability, O06 Bayes reverse, O07 tree leaf sum, O08 rare base-rate. Each has WHY→prerequisite→meaning before formula→worked reasoning→method applicability→original FirstTry→opt-in solution and D6→separate Practice with explanation and D6.
- **3 written tasks /4:** W01 two-way 2×2 table and directional conditioning, W02 complete 4-leaf tree→total→Bayes, W03 base-rate natural counts and critique of reverse-probability fallacy. Each rubric explicitly sums to /4; public self-score not Mastery.
- **1 original SVG** as a two-source tree with 4 leaves. The text instructs how to multiply branches, sum leaves, check normalization and divide conditional posterior. Source is white/background neutral. No claim of Safari/browsers validated.
- **3 learner pages exactly:** Kiến thức/Luyện tập/Tự kiểm tra. The eight voluntary selfcheck placements reuse P IDs and are `CLIENT_SELF_CHECK_NO_MASTERY`; no official independent TOPIC_READINESS or private RD1 candidate imported.
- **Q01 not finally signed:** Although scoped S1 source and lesson pages are verified in prior reviewer receipt, this independent Topic draft still needs a **per-outcome original SGK activities/skills trace**, not just chapter page starts. Need ensure methods/applications are within S1 or explicitly labelled supplemental (e.g. base-rate screening is model, not real diagnosis).

## 4. Executed deterministic QA assertions — exact rational arithmetic

```text
S01  PASS  8 FirstTry, 8 Practice, 3 Written defined
S02  PASS  19 distinct canonical definitions
S03  PASS  27 active placements, 19 unique IDs
S04  PASS  8 public replay placements
S05  PASS  all 8 outcomes have one new T + one new P
S06  PASS  all definitions have same outcome in placement matrix
S07  PASS  matrix pins exact source blob
S08  PASS  source has only three Topic pages and client replay no mastery
S09  PASS  all ten legacy Practice IDs directly verified different
S10  PASS  legacy 16 references marked quarantined and excluded
M01  PASS  O01 conditional group: 6/9=2/3, 5/12 unchanged
M02  PASS  O02 conditional die and 1..12
M03  PASS  O03 two-step and three-step no replacement
M04  PASS  O04 independent coins intersection vs product, die not independent
M05  PASS  O05 full probability X/Y and weighted practice
M06  PASS  O06 Bayes 3/4 and 1/2
M07  PASS  O07 four leaves sum 1 and red 7/25
M08  PASS  O08 base-rate flag 6/55, sample 16/65
M09  PASS  W01 2×2 and directional condition
M10  PASS  W02 four paths sum to 1, total 2/15, posterior 1/2
M11  PASS  W03 10000 base count and posterior 16/115
M12  PASS  diagram 4 leaves 1, error 1/20, posterior Y 1/2
M13  PASS  Bayes worked example 2/3
M14  PASS  die independence example 1/6
M15  PASS  rare base-rate worked example 19/217
S11  PASS  SVG has title/desc and four leaves
TOTAL_PASS=26/26
MATH_PRECISION=REDUCED_BIGINT_RATIONAL
NEW_UNIQUE_CANONICAL=19
ACTIVE_PLACEMENTS=27
FIRST_TRY=8
PRACTICE=8
WRITTEN=3
PUBLIC_REPLAY_SAME_ID=8
LEGACY_QUARANTINED=16
DEFINITE_SHARED_ID_DIFFERENT_STEM_COLLISIONS=10
```

These are proof of structure/numerical correctness **only on the exact source/asset blobs above**. No claim of independent Academic/PED NotebookLM verdict or real website QA.

## 5. Q01–Q18 status and minimal delta

| Gate | State | Closing action |
|---|---|---|
| Q01 | `P1_HOLD` | S1 precise activity/outcome mapping and page parity reconciliation for this new standalone source; old receipt inconsistent |
| Q02–Q08 | `AUTHOR_MATH_CHECKED_WITH_SCOPE_LIMIT` | 8 outcomes/19 authored IDs mathematically checked, but review actual exercise-family depth against S1 and conditions |
| Q09–Q14 | `AUTHOR_PED_PRELIMINARY` | Eight concept-first loops with why/when, examples, FirstTry/D6; independent pedagogical scrutiny and recovery usability still to inspect |
| Q15 | `P1_COLLISION_HOLD` | Ten colliding G12 Practice IDs and six other old refs must be reconciled; no legacy placements activated |
| Q16 | `PUBLIC_REPLAY_ONLY` | No private RD1, official Final Submit security remains release-only, no Mastery |
| Q17 | `AUTHOR_STRUCTURE_PASS` | Independent three-page Topic includes all local prerequisites; no Topic Core |
| Q18 | `NOT_SIGNED` | Final receipt with P0/P1=0 and all source/owner custody gates only, one V2/ready/REGISTER/CI after clearance |

**P0 detected in current standalone new math:** 0 in audited examples. **P1 blockers:** Q01 source-level activity/reconciliation; Q15 duplicate ID custody. **State:** NOT_CONTENT_READY, no release handoff, no merge/deploy.
