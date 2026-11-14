# Toán 10 SGK Chương VI — FULL R03 authoring assembly PRE-HANDOFF (không phải CONTENT_READY)

PACKET_ID: G10-SGK-CHVI-FULL-R03-PRE-HANDOFF-20261105
ROLE: AUTHORING_ONLY
STATE: BLOCKED_BY_AUTHORING
BLOCKER_ID: Q18_EXTERNAL_MOUNTED_SOURCE_EQUIVALENCE_NOT_ESTABLISHED
HANDOFF_STATUS: PREPARED_NOT_SIGNED
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH_CLIENT_SELF_CHECK_NO_MASTERY
STANDARD_ID: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
R01_HISTORIC_REVIEW_RECEIPT_BLOB: 23156f35aab6ec28771a6a57d48bad74f3900e9c
R01_SOURCE_ZIP_SHA256: 704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960
R02_FULL_PED_SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md
R02_FULL_PED_SOURCE_BLOB: 1e6a76ee32b722b5e5457e85f90eb32f4d98b57d
R02_OWNER_REVIEWER_SECOND_VERDICT_BLOB: 9c9e1ff77fc8fad501d2858fe14b08dfe4605897
R02_OWNER_REVIEWER_Q07_SVG_VERDICT: PASS_B15_B18
R03_D6_CORRECTED_ROUTE_OVERLAY_PATH: prototypes/thpt/content-drafts/G10_CHVI_PED_D6_R03_EFFECTIVE_ROUTING_OVERLAY_20261105.md
R03_D6_CORRECTED_ROUTE_OVERLAY_BLOB: 3532973d5b0f09b64160f3d59d4f1c8b644c6877
R03_EFFECTIVE_CANONICAL_SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R03_EFFECTIVE_CANONICAL_SOURCE_20261105.md
R03_EFFECTIVE_CANONICAL_SOURCE_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
R03_DELTA_CLASS: DELTA_B_SOURCE_EQUIVALENT_PLACEMENT_AND_DUPLICATE_CANONICAL_ID_RECONCILIATION
R02_REVIEWED_FIRST_TRY_PLACEMENTS: 19
R03_RETIRED_REVIEW_ALIAS: THPT-G10-CHVI-TRY17
R03_ONE_REUSED_CANONICAL: THPT-G10-B18-C01
PRIMARY_S1_SGK_TAP2_SHA256: ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6
PRIMARY_S1_SBT_TAP2_SHA256: 3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7
PUBLIC_CLIENT_FINAL_JSON_GIT_BLOB: 0760782256a2d8d91c398814e62d013cf6083eb7
EXPECTED_OLD_CANONICAL_ITEM_COUNT: 54
EXPECTED_NEW_PUBLIC_FIRST_TRY_ITEM_COUNT: 18
EXPECTED_TOTAL_PUBLIC_DISTINCT_CANONICAL_ITEM_COUNT: 72
PROTECTED_RD1_ITEMS_INCLUDED: 0
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## 1. Học theo thứ tự đúng: một bài, một tiến trình

**Mỗi bài SGK phải tự đủ để học:** Đọc WHY/PRE rồi khám phá bản chất qua MEANING và hướng dẫn READ_VISUAL, hiểu METHOD/LIMITS, **làm FIRST_TRY trước khi xem Core**, sau đó học kiến thức chính và ví dụ SGK/D2, giải một lượt Core và Practice, cuối chương tự kiểm tra client sau Final Submit. Nếu sai ở First Try/Practice, tự mở D6 năm bước theo outcome và trở về **đúng chủ đề cần khắc phục**. Khi chưa có canonical item đúng kỹ năng, quay về mục kiến thức SGK tương ứng (không giả mạo ID hoặc buộc học sinh mở Topic).

- B15 SGK trang in 4–10, SBT 3–9: hàm số, domain/range, đồ thị, đơn điệu, hàm từng đoạn.
- B16 SGK 11–18, SBT 10–15: hàm bậc hai, đỉnh, trục, đồ thị, bảng biến thiên, mô hình thực tế.
- B17 SGK 19–24, SBT 16–18: dấu tam thức, bất phương trình, tham số **a cố định khác 0** (reviewed correction: SGK p24 Bài 6.17/SBT p17 VD3 và p18 bài 6.24), vận dụng rào vườn.
- B18 SGK 25–27, SBT 19–21: hai dạng phương trình chứa căn, điều kiện, bình phương và thử nghiệm gốc.
- Tổng hợp SGK trang 28–29/SBT 22–27 và `CHVI.json` public 18 câu: self-check client không ghi Mastery; không tự nhận có official held-out RD1.

### Mỗi outcome — first try → D6 → placement thích hợp (19/19)

| Bài | Outcome | WHY → PRE → MEANING → VISUAL → METHOD → FIRST TRY | HELP 5 bước | Sửa lỗi / củng cố SGK tiếp theo | Vận dụng thêm (không bắt buộc) |
|---|---|---|---|---|---|
| B15 | `B15_OUT_01` | `THPT-G10-CHVI-TRY01` | `HELP-G10-CHVI-TRY01` | `THPT-G10-B15-C01` | — |
| B15 | `B15_OUT_02` | `THPT-G10-CHVI-TRY02` | `HELP-G10-CHVI-TRY02` | `THPT-G10-B15-C02` | — |
| B15 | `B15_OUT_03` | `THPT-G10-CHVI-TRY03` | `HELP-G10-CHVI-TRY03` | `SGK B15 §2` | — |
| B15 | `B15_OUT_04` | `THPT-G10-CHVI-TRY04` | `HELP-G10-CHVI-TRY04` | `THPT-G10-B15-P03` | — |
| B15 | `B15_OUT_05` | `THPT-G10-CHVI-TRY05` | `HELP-G10-CHVI-TRY05` | `THPT-G10-B15-P02` | `THPT-G10-B15-P04` |
| B16 | `B16_OUT_01` | `THPT-G10-CHVI-TRY06` | `HELP-G10-CHVI-TRY06` | `SGK B16 §1` | — |
| B16 | `B16_OUT_02` | `THPT-G10-CHVI-TRY07` | `HELP-G10-CHVI-TRY07` | `THPT-CORE-QF01` | — |
| B16 | `B16_OUT_03` | `THPT-G10-CHVI-TRY08` | `HELP-G10-CHVI-TRY08` | `THPT-G10-CHVI-APP-A2` | `SGK B16 §2` |
| B16 | `B16_OUT_04` | `THPT-G10-CHVI-TRY09` | `HELP-G10-CHVI-TRY09` | `SGK B16 §2` | `THPT-G10-CHVI-APP-A2` |
| B16 | `B16_OUT_05` | `THPT-G10-CHVI-TRY10` | `HELP-G10-CHVI-TRY10` | `SGK B16 §5` | `THPT-G10-CHVI-APP-B3` |
| B17 | `B17_OUT_01` | `THPT-G10-CHVI-TRY11` | `HELP-G10-CHVI-TRY11` | `THPT-G10-B17-C01` | — |
| B17 | `B17_OUT_02` | `THPT-G10-CHVI-TRY12` | `HELP-G10-CHVI-TRY12` | `THPT-G10-B17-C02` | — |
| B17 | `B17_OUT_03` | `THPT-G10-CHVI-TRY13` | `HELP-G10-CHVI-TRY13` | `THPT-G10-B17-P01` | — |
| B17 | `B17_OUT_04` | `THPT-G10-CHVI-TRY14` | `HELP-G10-CHVI-TRY14` | `THPT-G10-B17-P03` | `THPT-G10-CHVI-APP-B4` |
| B17 | `B17_OUT_05` | `THPT-G10-CHVI-TRY15` | `HELP-G10-CHVI-TRY15` | `THPT-G10-B17-P04` | `THPT-G10-CHVI-APP-B3` |
| B18 | `B18_OUT_01` | `THPT-G10-CHVI-TRY16` | `HELP-G10-CHVI-TRY16` | `THPT-G10-B18-C02` | `THPT-G10-B18-P03` |
| B18 | `B18_OUT_02` | `THPT-G10-B18-C01` (FIRST_TRY placement; R02 alias `TRY17` retired) | `HELP-G10-CHVI-TRY17` | `THPT-G10-B18-P01` | `THPT-G10-B18-P03` |
| B18 | `B18_OUT_03` | `THPT-G10-CHVI-TRY18` | `HELP-G10-CHVI-TRY18` | `THPT-G10-B18-P01` | `THPT-G10-B18-P03` |
| B18 | `B18_OUT_04` | `THPT-G10-CHVI-TRY19` | `HELP-G10-CHVI-TRY19` | `THPT-G10-B18-P04` | — |

**EFFECTIVE AUTHORING PED SOURCE:** R03 `Temp_G10_CHVI_PED_R03_EFFECTIVE_CANONICAL_SOURCE_20261105.md`, exact Git blob `77d42ce0...`, ghép 19 bài toán R02 reviewed blob `1e6a76ee...` mà không thay đề/đáp án, chỉ sửa 12 destination và hợp nhất một câu trùng canonical (overlay `3532973d...`). Reviewer 19/19 Academic+PED PASS là verdict trên snapshot R02, không phải PASS mới cho R03; Q18 mounted parity là trách nhiệm AUTHORING, không giao NotebookLM làm hash.

## 2. Frozen R01 inventory — đúng một câu/một item ID

### formative (28 IDs, frozen R01)
- `THPT-G10-B15-C01`
- `THPT-G10-B15-C02`
- `THPT-G10-B15-P01`
- `THPT-G10-B15-P02`
- `THPT-G10-B15-P03`
- `THPT-G10-B15-P04`
- `THPT-G10-B17-C01`
- `THPT-G10-B17-C02`
- `THPT-G10-B17-P01`
- `THPT-G10-B17-P02`
- `THPT-G10-B17-P03`
- `THPT-G10-B17-P04`
- `THPT-G10-B18-C01`
- `THPT-G10-B18-C02`
- `THPT-G10-B18-P01`
- `THPT-G10-B18-P02`
- `THPT-G10-B18-P03`
- `THPT-G10-B18-P04`
- `THPT-CORE-QF01`
- `PRACTICE-THPT-DEMO-01`
- `THPT-G10-CHVI-APP-A1`
- `THPT-G10-CHVI-APP-A2`
- `THPT-G10-CHVI-APP-A3`
- `THPT-G10-CHVI-APP-A4`
- `THPT-G10-CHVI-APP-B1`
- `THPT-G10-CHVI-APP-B2`
- `THPT-G10-CHVI-APP-B3`
- `THPT-G10-CHVI-APP-B4`

### written (8 IDs, frozen R01)
- `HPT-G10-CHVI-WRI-15-01`
- `HPT-G10-CHVI-WRI-15-02`
- `HPT-G10-CHVI-WRI-17-01`
- `HPT-G10-CHVI-WRI-17-02`
- `HPT-G10-CHVI-WRI-18-01`
- `HPT-G10-CHVI-WRI-18-02`
- `HPT-WRI-DEMO-01`
- `HPT-WRI-DEMO-ANCHOR-01`

### final (18 IDs, frozen R01)
- `THPT-G10-B15-R01`
- `THPT-G10-B15-R02`
- `THPT-G10-B15-R03`
- `THPT-G10-B15-R04`
- `THPT-G10-B15-R05`
- `THPT-G10-B16-R01`
- `THPT-G10-B16-R02`
- `THPT-G10-B16-R03`
- `THPT-G10-B16-R04`
- `THPT-G10-B16-R05`
- `THPT-G10-B17-R01`
- `THPT-G10-B17-R02`
- `THPT-G10-B17-R03`
- `THPT-G10-B17-R04`
- `THPT-G10-B18-R01`
- `THPT-G10-B18-R02`
- `THPT-G10-B18-R03`
- `THPT-G10-B18-R04`

**Bảo toàn:** 54 item trên là ID của snapshot R01 lịch sử, không phải 54 câu dùng cho official Mastery. 18 câu có role `SGK_CHAPTER_READINESS_HELDOUT` trong **receipt lịch sử** đã được xuất ra client `CHVI.json` trên main với đáp án/lời giải, vì vậy hiện tại phải là `CLIENT_SELF_CHECK_NO_MASTERY`; không coi còn bí mật hoặc dùng Mastery. R01 ZIP bản gốc không copy công khai lại tại đây. 28 formative và 8 Written được tham chiếu ID, giữ nguyên source/đáp án/rubric đã nghiệm thu, không thay bằng bản nháp tiền-review.

## 3. Original SGK knowledge and public-content sources (for future RELEASE intake, no website changes here)

- `docs/thpt-preview/sgk/chuong-vi/bai-15.md` (B15 concepts, bảng dữ liệu, đồng/nghịch biến).
- `docs/thpt-preview/sgk/chuong-vi/bai-16.md` (B16 concepts/diagram/modeling).
- `docs/thpt-preview/sgk/chuong-vi/bai-17.md` (B17 sign theorem, fixed-a parameter correction).
- `docs/thpt-preview/sgk/chuong-vi/bai-18.md` (B18 radical roots).
- `docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js` (18 original B15/17/18 public formative).
- `docs/thpt-preview/sgk/core/ham-so-bac-hai.md` (one B16 Core demo).
- `docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md` contains `PRACTICE-THPT-DEMO-01` (Topic practice, cross-route reuse optional, **not required for SGK**).
- `docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md` (eight original chapter applications).
- `docs/assets/data/thpt-g10-readiness/CHVI.json` (18 **public** old final questions, client-only; no mastery).
- Historical five `Temp_` R01 sources: original ZIP SHA256 `704f23...`, old reviewer receipt SHA & five content-file checksums in `THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md`. A number of original Written/Anchor question bodies remain in frozen historic owner-review packet, not reproduced here; do not declare this a byte-identical full R01 source rebuild.

## 4. Q01–Q18 authoring gate ledger (one quality standard)

| Q | Chứng cứ AUTHORING / reviewer | Gate |
|---|---|---|
| `Q01` | S1 đúng SGK/SBT Toán 10 KNTT Tập Hai, lịch sử PDF SGK ee8a.../SBT 3cb3..., trang in đúng; nguồn nhìn hình cũ | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q02` | 4 bài, 19 OUTCOME_ID nhất quán R01 + R02 | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q03` | D1 § kiến thức bài SGK giữ, thêm R02 MEANING/PRE/WHY trước công thức | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q04` | D2 ví dụ cũ đã review theo ZIP R01 (giữ nguyên, không tự gán số ví dụ mới) | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q05` | 28 formative Core/Practice/Application R01, không tạo bản sao; thêm 19 Tự thử public formative theo outcome | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q06` | 8 Written/Anchor R01, một item nhiều placement; không nhân bản | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q07` | 2 inline SVG B15/B18 reviewer bổ sung Q07/PED4 PASS, B16 parabol/B17 bảng dấu cũ | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q08` | 19 HELP R02 mỗi thẻ 5 bước, overlay D6 định tuyến đúng kỹ năng (12 sửa metadata) | AUTHOR_ROUTING_QA_PASS; actual website not updated |
| `Q09` | 19 WHY mỗi outcome từ bản R02 reviewer báo PASS | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q10` | 19 PRE mỗi outcome từ bản R02 reviewer báo PASS | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q11` | 19 MEANING trước công thức từ bản R02 reviewer báo PASS | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q12` | 19 READ_VISUAL, bao gồm 2 SVG mới đúng XML, bổ sung nguồn hình/bảng kế thừa | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q13` | 19 METHOD/limits, điều kiện căn và a≠0, S1 B17_OUT04 tham số a cố định | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q14` | 19 FIRST_TRY trước Core, tự mở đáp án và D6 tự sửa, không Mastery | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q15` | R02 TRY17 trùng nguyên đề `THPT-G10-B18-C01`; đã quy về **1 canonical với 2 placements**, 54 old + 18 new TRY = **72 active item IDs**, HELP/FIG khác namespace | AUTHOR_QA_PASS_SOURCE_EQUIVALENT_Q15_DEDUP |
| `Q16` | 18 public final CHVI.json = CLIENT_SELF_CHECK_NO_MASTERY, Final Submit, không RD1 protected; practice không Mastery | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q17` | Chỉ SGK Chapter, Topic tự đủ riêng; không dùng Topic Core để vá SGK, không suy Topic PASS | DOCUMENTED_OR_REVIEWER_REPORTED_PASS |
| `Q18` | R01 frozen ZIP 5 SHA; R02 Git blob exists nhưng external NotebookLM mounted diff (93,198 vs 92,640), chưa có diff chứng minh source equivalence | **HOLD_AUTHOR_SOURCE_CUSTODY** |

## 5. What can and cannot be handed to RELEASE

**Prepared now:** exact R03 effective Git source gồm 19 bài toán nguyên vẹn, đã sửa routing và định danh canonical,  reviewer summary with correct 19/19 item outcomes, approved B17 parameter correction, verified two SVG Q07/PED4 PASS, source/page index, repaired D6 routing-to-skill metadata (12 remaps without changing any question body), one 72-item active canonical ID inventory, safety boundary CHVI public selfcheck no mastery, and lesson-by-lesson concept-first route.

**NOT prepared / blocked:** this is **NOT** a true full canonical reproduction of the historic five R01 source files, because the private original ZIP is not present in Git at this path, and R02 external NotebookLM mounted source differs in raw bytes without mechanically established equivalence; therefore do not misstate `Q18 PASS`. For a signed FULL_R03 V2 `CONTENT_READY` handoff, AUTHORING must establish credible source-custody proof without delegating it to NotebookLM, then freeze exact R03 source/receipt SHA and create **ONE** handoff V2, **ONE** `ready/` manifest and **ONE** new REGISTER row. If this cannot be closed, report `BLOCKED_BY_AUTHORING(Q18)` without endless technical re-review loops.

**Release rights:** no integration, runtime patch, QA AP/R/P, staging, merge, deploy or official Mastery from this AUTHORING document. The existing website production scope is unchanged. Golden UI THCS/THPT and Firebase remain untouched.
