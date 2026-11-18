# ChVI SGK — Authoring R03 effective D6 recovery routing overlay (19 outcomes, no question rewrite)

PACKET_ID: G10-SGK-CHVI-PED-BRIDGE-R02-20261105
ROUTING_OVERLAY_ID: G10-CHVI-PED-D6-ROUTE-EQUIVALENT-R03-20261105
STATUS: AUTHORING_ROUTING_QA_PASS_PRE_HANDOFF_ONLY
QUALITY_STANDARD: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
LEARNING_PATH: SGK_CHAPTER
DELTA_CLASS: DELTA_B_SOURCE_EQUIVALENT_CANONICAL_PLACEMENT_AND_DUPLICATE_ID_DEDUP
ORIGINAL_REVIEWED_PED_R02_SOURCE_BLOB: 1e6a76ee32b722b5e5457e85f90eb32f4d98b57d
HISTORIC_R01_ACADEMIC_RECEIPT_BLOB: 23156f35aab6ec28771a6a57d48bad74f3900e9c
LEGACY_B15_B17_B18_FORMATIVE_PUBLIC_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb
LEGACY_B16_CORE_PILOT_BLOB: a4de741b0ec9dea13e07b22a66f6a121352aaecf
LEGACY_CHVI_APPLICATION_PAGE_BLOB: 4876a1d38267bfaf0a570b9ea5bffa48563488ad
OLD_CHVI_54_CANONICAL_IDS_PRESERVED: YES
R02_HISTORIC_FIRST_TRY_IDS_REVIEWED: 19
R03_ACTIVE_NEW_FIRST_TRY_CANONICAL_ITEMS: 18
R03_REUSED_OLD_CANONICAL_ITEM: THPT-G10-B18-C01
RETIRED_R02_DUPLICATE_ITEM_ALIAS: THPT-G10-CHVI-TRY17
TOTAL_ACTIVE_PUBLIC_CANONICAL_ITEMS: 72
NEW_HELP_19_IDS_PRESERVED: YES
NO_QUESTION_STEM_ANSWER_SOLUTION_RUBRIC_CHANGED: YES
NO_MASTERY_ACTIVATION: YES
PR756_R02_REVIEWED_SOURCE_UNCHANGED: YES
R03_EFFECTIVE_PUBLIC_SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R03_EFFECTIVE_CANONICAL_SOURCE_20261105.md
R03_EFFECTIVE_PUBLIC_SOURCE_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
REVIEWER_NEW_ACADEMIC_PED: REPORTED_PASS_19_19_Q07_PASS
Q18_ORIGINAL_EXTERNAL_SOURCE_RECEIPT: AUTHORING_HOLD
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## Why this correction matters for independent learning

The pre-Core First Try and D6 recovery in the R02 instructional source are academically reviewed for their **mathematical body**, but an author-side comparison against the **ACTUAL existing canonical practice item stems** found some D6 return links navigate to a different skill. This is a learning-navigation/placement defect (not an error in the First Try mathematical answer). Do not automatically send learners to the wrong problem merely because its canonical ID exists. This overlay changes only recovery destinations and resolves one exact duplicate to its original canonical identity; it NEVER changes any reviewed question stem, answer, mathematical condition, worked explanation, rubric or SVG. The immutable R02 source remains as reviewer evidence. The actual frontend has **NOT** been updated by this AUTHORING PR.

The effective R03 source already applies the 12 routing changes below to the D6 Step 5 text and matrix; this table is the verified R02→R03 crosswalk, not a separate competing academic source. Never count both paths as two separate questions or two separate PASS decisions.

## Outcome → existing legacy canonicals → corrected D6 routing

| Outcome | First Try | R02 D6 return (old) | R03 effective recovery destination | Optional reviewed step | QA |
|---|---|---|---|---|---|
| `B15_OUT_01` | `THPT-G10-CHVI-TRY01` | `THPT-G10-B15-C01` | `THPT-G10-B15-C01` | — | KEEP |
| `B15_OUT_02` | `THPT-G10-CHVI-TRY02` | `THPT-G10-B15-C02` | `THPT-G10-B15-C02` | — | KEEP |
| `B15_OUT_03` | `THPT-G10-CHVI-TRY03` | `THPT-G10-B15-P01` | `KNOWLEDGE:B15_SECTION_2` | — | REMAP_TO_REVIEWED_KNOWLEDGE |
| `B15_OUT_04` | `THPT-G10-CHVI-TRY04` | `THPT-G10-B15-P02` | `THPT-G10-B15-P03` | — | REMAP_EXISTING_CANONICAL |
| `B15_OUT_05` | `THPT-G10-CHVI-TRY05` | `THPT-G10-B15-P04` | `THPT-G10-B15-P02` | `THPT-G10-B15-P04` | REMAP_EXISTING_CANONICAL |
| `B16_OUT_01` | `THPT-G10-CHVI-TRY06` | `THPT-CORE-QF01` | `KNOWLEDGE:B16_SECTION_1` | `THPT-CORE-QF01 (NEXT_OUTCOME_ONLY)` | REMAP_TO_REVIEWED_KNOWLEDGE |
| `B16_OUT_02` | `THPT-G10-CHVI-TRY07` | `THPT-CORE-QF01` | `THPT-CORE-QF01` | — | KEEP |
| `B16_OUT_03` | `THPT-G10-CHVI-TRY08` | `THPT-CORE-QF01` | `THPT-G10-CHVI-APP-A2` | `KNOWLEDGE:B16_SECTION_2` | REMAP_EXISTING_CANONICAL |
| `B16_OUT_04` | `THPT-G10-CHVI-TRY09` | `PRACTICE-THPT-DEMO-01` | `KNOWLEDGE:B16_SECTION_2` | `THPT-G10-CHVI-APP-A2` | REMAP_TO_REVIEWED_KNOWLEDGE |
| `B16_OUT_05` | `THPT-G10-CHVI-TRY10` | `PRACTICE-THPT-DEMO-01` | `KNOWLEDGE:B16_SECTION_5` | `THPT-G10-CHVI-APP-B3` | REMAP_TO_REVIEWED_KNOWLEDGE |
| `B17_OUT_01` | `THPT-G10-CHVI-TRY11` | `THPT-G10-B17-C01` | `THPT-G10-B17-C01` | — | KEEP |
| `B17_OUT_02` | `THPT-G10-CHVI-TRY12` | `THPT-G10-B17-C02` | `THPT-G10-B17-C02` | — | KEEP |
| `B17_OUT_03` | `THPT-G10-CHVI-TRY13` | `THPT-G10-B17-P01` | `THPT-G10-B17-P01` | — | KEEP |
| `B17_OUT_04` | `THPT-G10-CHVI-TRY14` | `THPT-G10-B17-P04` | `THPT-G10-B17-P03` | `THPT-G10-CHVI-APP-B4` | REMAP_EXISTING_CANONICAL |
| `B17_OUT_05` | `THPT-G10-CHVI-TRY15` | `THPT-G10-B17-P03` | `THPT-G10-B17-P04` | `THPT-G10-CHVI-APP-B3` | REMAP_EXISTING_CANONICAL |
| `B18_OUT_01` | `THPT-G10-CHVI-TRY16` | `THPT-G10-B18-C01` | `THPT-G10-B18-C02` | `THPT-G10-B18-P03` | REMAP_EXISTING_CANONICAL |
| `B18_OUT_02` | `THPT-G10-CHVI-TRY17` (retired review alias; ACTIVE CANONICAL: `THPT-G10-B18-C01`) | `THPT-G10-B18-C02` | `THPT-G10-B18-P01` | `THPT-G10-B18-P03` | REMAP_EXISTING_CANONICAL |
| `B18_OUT_03` | `THPT-G10-CHVI-TRY18` | `THPT-G10-B18-P02` | `THPT-G10-B18-P01` | `THPT-G10-B18-P03` | REMAP_EXISTING_CANONICAL |
| `B18_OUT_04` | `THPT-G10-CHVI-TRY19` | `THPT-G10-B18-P04` | `THPT-G10-B18-P04` | — | KEEP |

## Why each remap is required (verifiable against original question text)

- **`B15_OUT_03`:** P01 luyện tập tập xác định, không kiểm điểm thuộc đồ thị; quay lại ví dụ tọa độ B15 §2, sau đó mới luyện đồ thị A2 ở mức vận dụng.
- **`B15_OUT_04`:** P03 hỏi trực tiếp đồng/nghịch biến |x+2|; P02 là hàm từng đoạn, khác kỹ năng.
- **`B15_OUT_05`:** P02 luyện đúng cách chọn nhánh và mốc x=2, P04 mở rộng mô hình ngân sách.
- **`B16_OUT_01`:** QF01 hỏi hoành độ đỉnh, không hỏi a≠0/nhận diện hàm bậc hai; đọc lại định nghĩa B16 §1, không mạo nhận có canonical practice đúng cùng outcome.
- **`B16_OUT_03`:** A2 yêu cầu dạng đỉnh/trục/giao Ox, hợp kỹ năng vẽ phác; QF01 chỉ hỏi hoành độ đỉnh.
- **`B16_OUT_04`:** DEMO-01 là giao Ox tại Topic Practice, không phải biến thiên và không tự đủ SGK. B16 §2 diễn giải tăng/giảm, A2 vận dụng đỉnh/GTLN.
- **`B16_OUT_05`:** DEMO-01 là giao Ox, không phải mô hình thực tế; §5 có mô hình ném vật/doanh thu, B3 có tối ưu diện tích.
- **`B17_OUT_04`:** P03 đúng tham số a=1 cố định và dấu dương mọi x; P04 thực ra mô hình rào vườn.
- **`B17_OUT_05`:** P04 là 30m hàng rào ba cạnh và diện tích; P03 thực ra là tham số.
- **`B18_OUT_01`:** C02 là căn bằng căn, đúng OUT01; C01 là căn bằng biểu thức thường, thuộc OUT02.
- **`B18_OUT_02`:** C01 là căn bằng biểu thức x−1, yêu cầu vế phải không âm và lọc nghiệm; C02 là căn bằng căn.
- **`B18_OUT_03`:** P01 có ứng viên −1 bị loại do dấu, phù hợp ngoại nghiệm; P02 có hai nghiệm ứng viên đều hợp, chưa trực tiếp thực hành loại ngoại nghiệm.

## 19-outcome D6/First Try protocol retained (no new academic material)

1. **PED1–PED6 original text and answers remain exactly in** `prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R02_FULL_CHAPTER_REVIEW_20261105.md`, Git blob `1e6a76ee...`. First Try comes before the existing SGK Core, user self-attempt then voluntarily reveals correct answer, D6 five steps recovers missing prerequisites. The table changes **where to go for remediation**, not the rules or explanations/conditions/formulas.
2. For `KNOWLEDGE:B15_SECTION_2` and `KNOWLEDGE:B16_SECTION_1/2/5`, the learner returns to an **existing reviewed SGK explanation/example in the SAME lesson** (see `docs/thpt-preview/sgk/chuong-vi/bai-15.md` §2 and `bai-16.md` §§1/2/5); these are not new questions and do not get an `item_id`. Do NOT substitute a wrong-skill problem just to meet a numeric count. A secondary application after review is optional, not a second official Core.
3. The two B16 demos `THPT-CORE-QF01` and `PRACTICE-THPT-DEMO-01` are **single shared canonical ID each**, not duplicate copies. `PRACTICE-THPT-DEMO-01` currently sits in the Topic Hàm số page and is about **Ox intersections**; it does not teach B16 variation or movement models. The SGK route must be understandable and complete **without following an obligatory Topic link**; any placement reuse is optional.
4. `THPT-G10-CHVI-APP-A2` (parabola graph) and `APP-B3` (fencing/area optimization) are **already-reviewed original R01 public application IDs** per receipt; linked as optional SGK application after a direct lesson explanation. `APP-B4` covers all-real parameter sign, consistent with fixed a≠0 B17 source correction. No new items/reviews from this metadata.
5. R02 First Try `B17_OUT_04` = **TRY14**, returns to `THPT-G10-B17-P03` parametric; R02 `B17_OUT_05` = TRY15, returns to `THPT-G10-B17-P04` fencing/area. This *undoes the swapped targets* in the old R02 author crosswalk, not its independently reviewed mathematics.
6. R03 B18 `OUT_01` = two radicals (return `C02`); `OUT_02` = radical vs expression (**FIRST_TRY reuses canonical `C01`**, recovery points to a different exercise `P01`, not repeating `C01`); `OUT_03` = extraneous candidate (return `P01`). The historical `TRY17` label is a retired reviewer alias only, not a new canonical question. Don't send students into the other radical type by mistake.
7. The previously published 18 `CHVI.json` questions remain `CLIENT_SELF_CHECK_NO_MASTERY`, no protected RD1. FIRST_TRY and HELP are public formative and never issue official mastery credit. `SGK_CHAPTER_READINESS` is distinct from `TOPIC_READINESS`.

## Author QA and handoff gate

**R03 routing QA:** `19` outcomes, `12` corrected placements (including knowledge-first), `7` unchanged valid placements. All new canonical targets are either in original R01 28-item reviewed register or existing SGK knowledge/8 reviewed Chapter Application IDs. The exact duplicated mathematical question at R02 `TRY17` has been consolidated into existing R01 `THPT-G10-B18-C01` (one canonical / two placements), no new answer/rubric. D6 exact wording remains within R02 source; this overlay is a **metadata-only authoring correction** to be applied at integration, not a claim that the student site is already improved.

**Remaining author gate:** Q18 exact source custody for external mounted R02 remains separately recorded as unresolved. Do not mark `CONTENT_READY`, do not create ready manifest, and never ask NotebookLM for Git/SHA reconciliation. Future reviewer action only if a *real material* new academic/s pedagogy defect is introduced (not these navigation link/placement corrections). Preserve the original R01 immutable independent verdict and the new 19/19 reported Academic/PED and Q07/PED4 verdict. RELEASE AP/R/P, owner approval, website preview QA and student safety are separate.
