# CĐ13 R07 — Q18 AUTHOR_SELF_VERIFIED · vector/length precision and canonical W03 v2 · 18/11/2026

**Phạm vi AUTHORING hiệu lực:** sau baseline R04 và sửa bank ký hiệu trên PR #841, lượt này sửa 15 dòng Kiến thức O07/O08/O11/O14/O15 để phân biệt tọa độ vectơ với độ dài đoạn; làm rõ ba đề NEW20 và rubric W03, cùng sáu câu tự kiểm tra chỉ nhắc lại đề đã xem. Giữ nguyên 52 `item_id`, dữ kiện số, đáp án, phép toán, 4 rubric tổng /7, 16 outcome, 4 SVG và Q16 public replay; W03 đổi `content_version=2` trong MỘT bank canonical. DELTA_C cho lỗi diễn đạt toán/rubric W03, DELTA_B cho cách trình bày tương đương ở các câu còn lại, không tự gọi độc lập NotebookLM PASS.

PACKET_ID: THPT-TOPIC13-PLANAR-SPATIAL-VECTORS-FULL-R01
CONTENT_REVISION: R07_EDITORIAL_FINAL_20261118
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
LEARNING_PATH: TOPIC
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic13-vectors/Temp_TOPIC13_R04_NUMBERING_CONSISTENT_20261116.md
SOURCE_BLOB: 2fe260f6da3f4eedec7d9b8c93d683915493cc1e
ACADEMIC_SOURCE_BLOB: 2fe260f6da3f4eedec7d9b8c93d683915493cc1e
PUBLIC_CANONICAL_BANK_PATH: prototypes/thpt/shared-items/Temp_TOPIC13_VECTORS_NEW20_PUBLIC_CANONICAL_R03_20261116.md
PUBLIC_CANONICAL_BANK_BLOB: c74505ba59d047c19943c2309f5fd7c033ac9563
PREVIOUS_SOURCE_PATH: prototypes/thpt/content-drafts/topic13-vectors/Temp_TOPIC13_R03_STUDENT_FIRST_52_CANONICAL_VISIBLE_20261116.md
PREVIOUS_SOURCE_BLOB: 7f3e90e5eadcbaa1dc7b49cd6d5136f6dbf61e22
PREVIOUS_Q18_RECEIPT_PATH: prototypes/thpt/review-packets/Temp_TOPIC13_R03_AUTHOR_SELF_QA_RECEIPT_20261116.md
PREVIOUS_Q18_RECEIPT_BLOB: bf040651f959e2559c37662caeb66d31d68b6bf9
SVG1_BLOB: 55ec9add04cb79da2cad7703b3897271e5b3436a
SVG2_BLOB: 26e388d873521aa5b0bae945343e69357490ec16
SVG3_BLOB: 979ca912e99fdadfc4e91ae0edad5db34fc13928
SVG4_BLOB: 13445da079245a556a08e7a57069d9987097a0be
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
AUTHOR_QA_NUMBERING: PASS
AUTHOR_QA_NUMBERING_H2_H3: NO_GAPS_NO_MIXED_SIBLINGS
AUTHOR_QA_CANONICAL_PARITY: 52/52 SAME_ITEM_IDS; 20/20 CURRENT_NEW20_STEM_MATCH; W03_CONTENT_VERSION_2
AUTHOR_QA_LESSON_HIERARCHY: 16/16 PASS
AUTHOR_QA_PUBLIC_SELFCHECK: 16/16 SAME_REPLAY_IDS; 6 STEM_FORMAT_ONLY_REPHRASES; NO_ANSWERS
AUTHOR_QA_ANSWER_SOLUTION_RUBRIC_D6: NUMERIC_RESULT_AND_SCORE_ALLOCATION_UNCHANGED; AFFECTED_VECTOR_NOTATION_RECHECKED
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
P0: 0
P1: 0
P2: 0
AUTHOR_SIGNOFF: TOPIC13_R07_20261118_2fe260f6da3f4eedec7d9b8c93d683915493cc1e_AUTHOR_SELF_VERIFIED
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PRIVATE_RD1_IMPORTED: 0
OFFICIAL_TOPIC_READINESS: NOT_CLAIMED
RELEASE_AUTHORIZATION: NO

S1_RECEIPT: Toán 10 KNTT SGK tập1 ChIV B07 trang in46–50, B08 51–54, B09 55–59, B10 60–65, B11 66–70, cuối71–72; SBT B07 45–47, B08 48–50, B09 51–54, B10 55–58, B11 59–65, cuối66–71. SGK Toán 12 KNTT tập1 ChII B06 trang in45–59/PDF47–61, B07 60–66/PDF62–68, B08 67–72/PDF69–74, cuối73–74/PDF75–76; SBT B06 in38–45/PDF36–43, B07 46–49/PDF44–47, B08 50–54/PDF48–52, cuối55–58/PDF53–56. Dựa vào biên bản nguồn SGK lịch sử và Git blob, không tuyên bố mở lại PDF trong R03. G10 original source hiện **nằm trên sibling Draft PR #750**, đã thực đọc chính blob `96b5c95f...` từ nhánh gốc, chưa có trong file tree của PR #841; RELEASE phải kiểm tính khả dụng của phụ thuộc này trên HEAD tích hợp và không được dùng source giả/khác SHA.
OUTCOME_AUDIT: 16/16 TOP13-M01..M16/TOP13-O01..O16 full 3-page Topic Knowledge/Practice/Self Check, 16 Ví dụ (Đề bài, Lời giải) and adjacent 16 Vận dụng/optional Đối chiếu, one suitable D6 path. Original SGK sources retained by distinct owner; outcome material limited to vector geometry/Oxy/Oxyz and applied displacement/work, no unrelated equations/planes.
MATH_VERIFICATION: Current affected-scope *direct re-solve*: O07 A=(-2,1),B=(3,5) gives vector AB=(5,4), BA=(-5,-4), scalar length sqrt41; O08 A=(-1,2),B=(5,-6) gives vector (6,-8), distance10 and midpoint (2,-2); O11 perpendicular box edges 2,3,4 yield sqrt29; O14 A=(1,-1,2),B=(4,3,-2) gives vector(3,4,-4), scalar length sqrt41; O15 A=(1,0,2),B=(5,2,-2) gives vector(4,2,-4), length6, midpoint (3,1,0), AM=MB=3 and directed vectors AM=MB=(2,1,-2). Topic P11 three box edges 3,4,12 yield 13. Written W03: C'=(3,4,12), |AC'|=13, vector AB=(3,0,0) dot vector AC'=(3,4,12) gives 9, cos=9/(3*13)=3/13, unchanged rubric 2+3+2=7. P01 parallelogram AB-vector=DC-vector while CD opposite; P02 AA is zero vector with length 0 per locked KNTT convention. Historical broad 40/40 math/SVG checks belong to prior signed snapshot, **not claimed fresh full rerun**.
PED_VERIFICATION: Source-level 16/16 standalone worked examples and 16 immediate voluntary Vận dụng/Đối chiếu; O07/O08/O14/O15 now explicitly name **coordinate vector** before equality with an ordered tuple, and scalar **length AB=|vector AB|** before a real number. O11 diagram reading and scalar diagonal length are distinguished. Q03/PED mathematical explanation precedes formula, D6 routes unchanged. Four original SVG titles/alt with 5 learner placements held; browser AP2 not claimed. 52 Practice question displays, 4 Written /7, 16 question-only public selfchecks.
CANONICAL_Q15: 52 unique item_id =20 unchanged original G10 public SGK, exact canonical Git blob 96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9 verified on sibling owner Draft #750; 12 G12 original, exact blob 856a37bd16d2746ffc2e12906de18d1f4338a3b6 on Topic branch; 20 Topic NEW20 in exactly ONE active canonical bank c74505ba59d047c19943c2309f5fd7c033ac9563. Verified all 52 source marker IDs exist at respective owner, 20/20 NEW20 current **Dé** stems appear byte-identically in learner Practice, 52 unique placements, no duplicate IDs. Previously ambiguous notational question/solution values for P01/P02/P11 and W03 are synchronized with the same active bank, W03 content_version=2, no changed result or 7-point allocation. Earlier source `d2f4b9...` is historical, not a second active bank. Q15 source ownership for cross-branch G10 is verified on source Draft; RELEASE must confirm physical availability on combined HEAD, not fabricate it in this AUTHORING branch.
ASSESSMENT_Q16: 16/16 replay-only Self Check IDs all occur in Practice, six question-stem notation clarifications synchronized with canonical bank meaning, with no solution/rubric/hint/reveal in Self Check and no RD1 import/official readiness/Final Submit/Mastery. 68 opening and 68 closing voluntary solution details across 16 First Tries and 52 Practice. CLIENT_SELF_CHECK_NO_MASTERY remains demo and self-comparison, not independent assessment.

## Khóa phạm vi so sánh

- **Cùng 3 trang** `Kiến thức / Luyện tập / Tự kiểm tra`; Mạch/nhóm H2 đánh số 1…N và Bài H3 `1.1…`, mỗi nhóm đánh số cùng cấp, không nhảy, không trộn A/B với 1/2. Metadata kỹ thuật Q15/Q16 không còn chen vào nội dung học sinh của CĐ10–CĐ11.
- **Cùng canonical ID, thay presentation đúng phạm vi:** 52/52 canonical item IDs, original numerical answers and rubric point totals unchanged; current NEW20 bank has four affected textual notation clarifications and W03 version 2, and 16 public replays retain same ID while six stems show clearer vector arrows. Prior byte-identical comparison is limited to older snapshots; it is **not** asserted for the new 18/11 changes.
- **Đủ câu và toán:** historic 40/40 broad proof stays snapshot-bound, current independent author re-solve is explicitly limited to affected O07/O08/O11/O14/O15 plus canonical P01/P02/P11/W03. 52 source IDs, 20 current NEW20 stems, all 68 reveal boundaries, full 16 selfchecks and exact source/owner SHA rechecked now. No fictitious browser UAT.
- Nguyên tắc kiểm thêm tiểu ý: không có `(b)` trước `(a)` trong câu luyện có đánh dấu tiểu ý; kiểm đếm phân cấp từ đầu mỗi trang/nhóm. Quy tắc dùng chung giữa AUTHORING/RELEASE, không thêm chuẩn Qxx riêng.
- RELEASE phải QA rendered hierarchy/AP1–AP5 trên Golden, anchor link và responsive; không sửa toán hoặc tự merge/deploy. Nguồn G10 từ Draft PR #750 vẫn là phụ thuộc RELEASE intake trên combined HEAD, chưa giải quyết bằng sửa format.

**Ghi chú lịch sử:** Đánh số nhóm ở R04 cũ là DELTA_A; lượt thay đổi toán/ký hiệu R07 là DELTA_C affected-scope với tự QA thật theo Q18. Không bắt buộc NotebookLM nếu phép toán, nguồn và tác động sư phạm đã được kiểm chắc chắn; không tự cấp reviewer PASS.


## R06 · Learner formal-knowledge correction — scoped author Q18 (17/11/2026)

- Academic source `593484fbe67b168fae677652db0ef3871bcf5695` replaces current previous `9a558f553bd6a4a58701a6bae490717ba5a52540` only for three formal mathematical labels at TOP13-O01–O03 plus one recap before Luyện tập. Existing SGK G10 original source SHA `96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9` and G12 `856a37bd16d2746ffc2e12906de18d1f4338a3b6` unchanged, as is NEW20 canonical bank `136bd4552118e5dba6b18b58965be7d37878e9df`.
- O01: a vector from A to B has initial and terminal points; scalar AB=|AB-vector|>=0 is its magnitude, not a vector. BA=-AB and AA=0 are unchanged in adjacent teaching.
- O02: equality of vectors requires same direction and equal magnitude; translation does not change the represented displacement. SGK KNTT zero-vector convention in the following original paragraph remains unaltered.
- O03: triangle/three-point identity AB-vector + BC-vector = AC-vector holds, whereas AB+BC as **scalar segment lengths** is not generally AC; the example with two orthogonal legs still verifies |(4,6)|=2sqrt13, not 10.
- Recap checks dot product and angle only with two nonzero vectors; the force-work formula assumes constant force and correct units. Original final drone result 11 J unchanged.
- Diff original current R04 learner `9a558f553bd6a4a58701a6bae490717ba5a52540` → this source: all 52/52 Practice stems/keys/solutions/rubrics and D6 BYTE_EXACT, 16/16 Selfcheck question-only BYTE_EXACT, same canonical tags and four SVG paths, disclosure counts unchanged. No new ID/answer/rubric or RD1 material; Q15 inherited same bank.
- This is scoped `AUTHOR_SELF_VERIFIED` under owner-effective Q18, not a whole-class independent NotebookLM verdict or a RELEASE integration decision. G10 source PR #750 remains an explicit cross-branch dependency for RELEASE combined-HEAD validation.

## R05 — Q04/Q15/Q18 canonical vector correction (AUTHOR_SELF_VERIFIED, 17/11/2026)

Source currently `9a558f553bd6a4a58701a6bae490717ba5a52540` in the existing Topic13 learner file, single canonical NEW20 bank `136bd4552118e5dba6b18b58965be7d37878e9df`; R04 predecessor learner `5f6d3a1efc50e5869f98c80dd6f5b3c3a94082aa`, bank `d2f4b9fbd11b65ddd0a3190cc4cfbb8569951175` remain historical only.

**Identified substantive ambiguity:** 8 NEW20 original canonical stems and 8 answer/explanation blocks across **9 IDs** used AB/AC/BC/AG/AM as if scalar segment lengths in vector-coordinate calculations; Topic learner corrected them using explicit `\\overrightarrow{}` notation and separated lengths (AB) from vector AB. In-place bank has now been corrected to the identical learner math. Affected: `THPT-TOP13-P04/P06/P07/P12/P14/P15/W01/W02/W03`; P15 only solution, W03 only stem. Preserve same original mathematical results, 4 Written /7 allocation, ID, no new copies or extra assessments. For instance, \\(\\overrightarrow{AB}-\\overrightarrow{AC}=\\overrightarrow{CB}\\) is vector equality, whereas `AB-AC=CB` as segment lengths is generally false.

**Reconciled source evidence:** 20/20 G10 reused SGK item STEM/KEY/SOLUTION exact original SHA `96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9` (Draft #750); 12/12 G12 reused item STEM/KEY/SOLUTION exact source `856a37bd16d2746ffc2e12906de18d1f4338a3b6`; 20/20 Topic-new canonicals now have identical stem and optional solution to the current learner, each ID once, total **52/52 Q15 source placements parity**. This is source-identity proof, NOT complete re-solving every item or original PDF source re-check.

**Verdict:** `Q18_AUTHOR_SELF_VERIFIED_AFFECTED=PASS`, `Q15_CANONICAL_SOURCE_PARITY=52/52`, `Q04_VECTOR_NOTATION_TARGETED=PASS`, `P0=0/P1=0` in this affected correction. `DELTA_C_ACADEMIC_MATERIAL` (mathematical meaning clarified before website release), no external NotebookLM PASS asserted. Existing public selfcheck no-Mastery, protected RD1, Q16, Firebase and website unaffected. SGK #750 is still a Draft dependency for combined-head RELEASE R1; original 22-topic full Academic/PED and AP1–AP5/R1–R5 not claimed.

## 18/11/2026 · Final Practice H2 numbering delta-A on current source

- Current learner SOURCE_BLOB `4722b4ab923e162733a100610c3d825cbe9b67f5`, previous concept-verified learner `593484fbe67b168fae677652db0ef3871bcf5695`. Two and only two H2 Practice labels changed: `## Câu luyện SGK dùng chung` → `## 1. Câu luyện SGK dùng chung` and `## Bài mới theo mạch học` → `## 2. Bài mới theo mạch học`. Original Knowledge lessons H2 1..3 and H3 numbering, all 52 original canonical practice stems/keys/solutions/rubrics/D6, selfchecks, 4 SVG, public `details`, and source-owned bank IDs unchanged byte-for-byte.
- This increment is **DELTA_A_UI only**, preserving the earlier 17/11 **DELTA_C** formal vector O01–O03 and prior scoped Q18 source math/PED assertions. Neither a new Topic 52 mathematical re-solve nor an independent NotebookLM reviewer PASS is claimed; G10 SGK original source PR #750 remains external Draft dependency for combined-HEAD RELEASE.


## R07 · Current source/canonical and direct math/PED closure (18/11/2026)

- **Effective learner:** one file `prototypes/thpt/content-drafts/topic13-vectors/Temp_TOPIC13_R04_NUMBERING_CONSISTENT_20261116.md`, Git blob `2fe260f6da3f4eedec7d9b8c93d683915493cc1e`; former R04 `4722b4ab923e162733a100610c3d825cbe9b67f5` historical only. **Active original NEW20 bank** `c74505ba59d047c19943c2309f5fd7c033ac9563`; predecessor `136bd4552118e5dba6b18b58965be7d37878e9df` historical.
- **Vector/length Q03/Q04/Q13 & D6:** exact changed teaching lines O07/O08/O11/O14/O15 and source-owned P01/P02/P11/W03 show arrows and distinguish a coordinate tuple from a nonnegative length. No change to integer/numeric calculations. W03 rubric now `(AB vector)·(AC' vector)=9` and `|AC' vector|=13`, 7 points; only W03 canonical `content_version=2`. Direct computations in MATH_VERIFICATION above.
- **Q15 canonical:** 52 original IDs (20 G10 owner PR #750, 12 G12, 20 Topic), 52 unique placements; all 20 current NEW20 `**Đề:**` text lines match learner Practice source; no shadow library. All 16 public replay IDs match Practice, six only re-typeset mathematical vector notation without changing questions' requested quantities.
- **Q16 assessment:** 68 opening and 68 closing disclosures, 16 Self Check question stems with zero embedded `<details>` and no protected keys/score; no official Topic Readiness or Mastery. Four SHA-retained SVGs in five placements, not newly generated.
- **Owner-effective Q18/Delta:** `DELTA_C_ACADEMIC_MATERIAL` for significant correction of ambiguous vector equation and W03 rubric notation; `DELTA_B_SOURCE_EQUIVALENT` for otherwise identical symbolic re-typesetting. Author checked exact assumptions, geometry, measures, rubric and PED on this Git SHA; `NOTEBOOKLM_REREVIEW=NOT_REQUIRED_WITH_REASON` (PR #808 governance Q18 v3), P0/P1/P2=0 within checked affected scope. **Not** an independent NotebookLM Topic PASS or proof of full browser AP1–AP5.
- **Cross-source dependency:** original G10 owner SGK source `96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9` exists on Draft #750, not the Topic-only file tree; explicit RELEASE combined-HEAD source intake must verify exact blob or HOLD. AUTHORING verifies identity, **does not copy/merge** a different source owner as a workaround.


## 18/11/2026 · owner #864 13-item FINAL learner-view editing (DELTA_A_UI)

- After the earlier source-locked mathematical Q03/Q04/Q15 fixes, the final read-through against the same owner-approved [Issue #864](https://github.com/TMA2015/self-learning-math/issues/864) uncovered two **presentation-only** defects: the learner file had **zero** readable final S1 source-footnotes (item 12), and 48 SGK/new Practice reveal labels said `Đối chiếu lời giải` while 4 Written labels said `Đối chiếu và rubric /7` (item 9). This was **not** a reason to reopen mathematical verification or NotebookLM. No extra standard/contract created.
- **Exact source changes:** `48` Practice `<summary>` captions now `Lời giải`, `4` Written captions now `Lời giải và rubric`; the 16 Knowledge Vận dụng opt-in labels remain `Đối chiếu`. One human-readable source line appended **at the very end** of the Topic only, without technical page numbers, Git SHA or Source Receipt text: “SGK và SBT Toán 10, Tập Một, Chương IV; SGK và SBT Toán 12, Tập Một, Chương II — bộ Kết nối tri thức với cuộc sống”. 20 equivalent optional-reveal labels inside the ONE NEW20 canonical bank normalized in place as well, with unchanged questions, answers, mathematical steps and rubric allocations. All public IDs untouched.
- Final active learner Git blob `2fe260f6da3f4eedec7d9b8c93d683915493cc1e`, single NEW20 bank `c74505ba59d047c19943c2309f5fd7c033ac9563`. Direct recheck of all `52/52` canonical source markers, `20/20` new Practice stem rows matching the bank, `16/16` public Self Check question IDs, exactly `68/68` opening and closing details, 4 real SVG assets/five placements. **Source footer count exactly 1 at end**, zero old solution-caption strings or student-visible author metadata. No official Final Submit or Mastery behavior changed.
- **Verdict on this last change:** `DELTA_A_UI` (naming and visible source footnote only), author source QA PASS. The substantive earlier `DELTA_C_ACADEMIC_MATERIAL` vector/length and W03 mathematics verified above persists without modification; independent NotebookLM not required merely to re-label summary controls. Full original historical independent SGK review is not extended to Topic by this correction.
