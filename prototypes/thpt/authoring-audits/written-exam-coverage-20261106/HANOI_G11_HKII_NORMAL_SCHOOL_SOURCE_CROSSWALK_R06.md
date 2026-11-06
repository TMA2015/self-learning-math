# R06 — Đề HKII Toán 11 THPT thường Hà Nội: excerpt → outcome → D3/D4 source-locked

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-HANOI-G11-SEMESTER-R06-20261106
SCOPE: AUTHORING_READ_ONLY_EXAM_METHOD_COVERAGE
DATE: 2026-11-06
WINDOW: 2022-2026
EXAM_SOURCE_ID: HN-TNT-2026-HK2-G11
SOURCE_TYPE: ORDINARY_HANOI_G11_HKII
SCHOOL: THPT_TRAN_NHAN_TONG
SCHOOL_EXAM_TITLE_METADATA: 2025-2026;CODE_115;90_MINUTES;PRINTED_THREE_PAGES
ISSUER_ORIGINAL_PDF_VISUAL_VERIFIED: NO
ISSUER_ORIGINAL_PDF_SHA_VERIFIED: NO
SECONDARY_TEXT_EXCERPTS_REVIEWED: 5
PRIMARY_EXAM_QUESTION_NUMBERS_VERIFIED_BY_PDF: 0
CANONICAL_ITEM_IDS_RENAMED: 0
ACADEMIC_PED_REVIEW_REOPEN: NO
CANONICAL_D4_BASELINE: 238
NEW_ITEMS: 0
FORMAL_COVERAGE_GAP_VERDICTS: 0
TOPIC_IMPLEMENTATION: NO
RELEASE_PERMISSION: NO

## Corpus identity, grade/period and important limits

1. The [Toanmath secondary listing dated 04/05/2026](https://toanmath.com/2026/05/de-hoc-ki-2-toan-11-nam-2025-2026-truong-thpt-tran-nhan-tong-ha-noi.html) labels a **normal Hanoi THPT grade 11 semester-2 assessment**, lists three relevant practical examples verbatim (football group probability; velocity-max movement; frustum pot soil volume), and embeds a PDF at `https://toanmath.com/toanmath-pdf/de-hoc-ki-2-toan-11-nam-2025-2026-truong-thpt-tran-nhan-tong-ha-noi.pdf`. The direct mirrored PDF viewer/download produced `Cache miss`; neither PDF bytes, page screenshots nor checksum are accessible in this audit. **We do NOT invent the official question numbers** for these three excerpt cases.
2. Independent [Scribd](https://www.scribd.com/document/1038061230/De-Hoc-Ki-2-Toan-11-Nam-2025-2026-Truong-Thpt-Tran-Nhan-Tong-Ha-Noi) and [Thư viện nhà trường](https://thuviennhatruong.edu.vn/thuviendientu_moi/sach-338267-de-thi-hoc-ki-2-toan-11-nam-2025-2026-truong-thpt-tran-nhan-tong-ha-noi) secondary text indexes show the heading `ĐỀ KIỂM TRA KHẢO SÁT HỌC KỲ 2, Khối 11, Mã đề 115` and identify **Phần I Câu 3** (three independent warning systems, probability at least one) and **Phần I Câu 9** (annual compound-interest account exceeding a threshold). Secondary plaintext may lose mathematical typography and is **not an official school-hosted original**. Treat those section numbers as *secondary-transcribed IDs*, not as PDF-verified original.
3. The different secondary listings appear to describe **the same school-paper event/code**, not three independent exams. One exam cannot establish regional frequency. All 5 rows below are **classification candidates** with source-locator and method evidence, *not* `COVERED` or `GAP` verdicts.
4. Do not treat another school's *revision outline* as a semester exam. Do not import third-party copyrighted exam question texts, images or answer keys into public canonical source.

## Method-level crosswalk: normal school paper, five identified problems

| Secondary excerpt locator (not confirmed PDF locator) | Problem type paraphrase | Outcome/skill and current approved item IDs | Actual existing source evidence (without re-review) | Evidence-level reading / unresolved exam transfer |
|---|---|---|---|---|
| `HN-TNT-2026-HK2-G11:WEB-EX-FOOTBALL` (Toanmath three extracted examples, original number unknown) | Randomly allocate 12 teams into three labeled groups of four; three designated guest teams must be in separate groups | `G11-B28-EVENT_MODEL`, `G11-B30-MULTIPLY_INDEPENDENT` as **contrast only**, G10 `G10-B24-CONSTRAINTS`; `THPT-G10-CHVIII-W24-ANCHOR-01` is constrained combination but **not** equal to this exam; relevant G11 `THPT-G11-CHVIII-B30-W01` is **independent** trials and should **NOT** be copied as an algorithm for dependent allocation | G11 ChVIII source teaches event/universe and warns draws without replacement are **not independent**. G10 B24 Written teaches constrained subgroup selection with an assigned role. No inspected D4 item demonstrates the *entire constrained 3-group allocation probability* | `SUBMETHOD_AND_INDEPENDENCE_WARNING_PRESENT; COMPOUND_ALLOCATION_PENDING`. Need G10 B23–24 D3, G11 ChVIII D3 and actual original exam before declaring gap |
| `HN-TNT-2026-HK2-G11:WEB-EX-MOTION` (Toanmath example, original number unknown) | Cubic position function; differentiate to obtain velocity, find the time of **maximum velocity**, then compute displacement to that time | `G11-B31-INSTANT_VELOCITY`, `G11-B33-ACCELERATION`; existing `THPT-G11-CHIX-B31-P09`, `THPT-G11-CHIX-B31-W03`, `THPT-G11-CHIX-B33-P04`, `THPT-G11-CHIX-B33-W03` | B31-P09 evaluates speed `|v|` from derivative; B31-W03 derives `v(t)` and checks time-specific sign/units; B33-P04 and W03 derive `a(t)=v'(t)` and interpret it. These **prerequisite methods are present**, not the same as optimizing quadratic `v(t)` before substitution into cubic `s(t)` | `DERIVATIVE_FOUNDATION_PRESENT; MAX_VELOCITY_COMPOSITE_PENDING`. Check other B33 D3, G12 optimization D3 and year-end integrative examples before inferring missing depth |
| `HN-TNT-2026-HK2-G11:WEB-EX-FRUSTUM` (Toanmath example, original number unknown) | Volume of **three** regular square-pyramid frustum flowerpots, top/bottom edge lengths and height given, convert cubic centimeters to cubic meters and round | `G11-B27-FRUSTUM_VOLUME`, `G11-B27-VOLUME_APPLICATION`; `THPT-G11-CHVII-B27-C04`, `THPT-G11-CHVII-B27-P02`, `THPT-G11-CHVII-B27-C05`, `THPT-G11-CHVII-B27-W02-ANCHOR` | B27-C04 & P02 explicitly calculate frustum volume from two **base areas** and perpendicular height; B27-W02-ANCHOR repeats and explains the limiting case; B27-C05 exercises volume conversion. The school excerpt additionally requires deriving square-base areas from given edges and multiplying by **three** pots, which are simple composed steps | `METHOD_FAMILY_AND_UNIT_SKILLS_EXPLICITLY_PRESENT; FULL_EXAM_STEP_EQUIVALENCE_PENDING_PDF`. No evidence for a new Written question from this one excerpt |
| `HN-TNT-2026-HK2-G11:SECONDARY-I-C3` (secondary transcript **Phần I Câu 3**) | Three independent fault-alert systems; probability at least one detects fault | `G11-B30-AT_LEAST_ONE`; `THPT-G11-CHVIII-B30-W02-ANCHOR`, `THPT-G11-CHVIII-B30-W01` | B30-W02 uses complement and independence for two devices; B30-W01 multiplies three independent events and explains why independence matters. This problem combines both existing submethods for **three systems** | `COMPLEMENT_AND_INDEPENDENT_MULTIPLICATION_PRESENT; COMBINATION_TRANSFER_PENDING`. Not a formal Academic judgement |
| `HN-TNT-2026-HK2-G11:SECONDARY-I-C9` (secondary transcript **Phần I Câu 9**) | Compound interest paid annually; find smallest integer number of years to exceed specified amount | `G11-B18-GROWTH_MODEL`, `G11-B21-REAL_CONTEXT`; `THPT-G11-CHVI-B18-P05`, `THPT-G11-CHVI-B21-P06`; G11 `THPT-G11-CHVI-B21-W02-ANCHOR` | B18-P05 practices annual capitalization and compound growth; B21-P06 explicitly finds first **integer year strictly exceeding** a savings threshold; B21-W02 emphasizes `>` vs `≥` and justified minimal integer solution | `SAME_COMPOUND_GROWTH_STRICT_THRESHOLD_METHOD_FAMILY`; evidence indicates relevant learning practice is present, though not claim entire exam source verified |

## Exact immutable learning-source custody for audit

| SGK grade/lesson/role | Git source file | Source blob SHA |
|---|---|---|
| G10 B24 D4 | `docs/thpt-preview/thu-vien/tu-luan-chuong-viii.md` | `e78c43ab7b2f6d3ab1b135d1ad09c7030df2c44e` |
| G11 ChVII B27 D1–D4 | `prototypes/thpt/content-drafts/G11_CHVII_B22_B27_PUBLIC_CANONICAL_R01_SOURCE_LOCK.md` | `afc8ec039213b87b4930f2d34d48c28d1fc6277f` |
| G11 ChVIII B28–B30 D1–D4 | `prototypes/thpt/content-drafts/G11_CHVIII_B28_B30_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` | `fde4f8be91b5884b4559fef59fde46cf826c2bc9` |
| G11 ChIX B31–B33 D1–D4 | `prototypes/thpt/content-drafts/G11_CHIX_B31_B33_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` | `3fe3b1a12fac656b543ba3ba855c4fe0` |
| G11 ChVI B18, B21 D3 | `docs/assets/javascripts/thpt-g11-chvi-b18-b21-source-locked-formative-r01.js` | `33cf4229baa63ac70b4ca1b640a5be8414ed54c1` |

Source snapshots have existing author receipts and NotebookLM PASS in the appropriate handoffs. This research **does not reassess** their mathematical validity or score old rubrics. The 'method family already practiced' statement is about **breadth of exposure**, not measurable learner outcomes or official Topic readiness.

## Priority for next gate

1. Retrieve or view the **actual 3-page school paper code 115**, verify visuals/formulas and exact Part III numbering; only then promote source to `PDF_QUESTION_LEVEL_VERIFIED` with PDF SHA/page.
2. Obtain original HKII PDF for THPT Việt Nam–Ba Lan, 2025–2026; currently only secondary listing, **zero question-level inspection**, do not infer its method distribution.
3. Continue grade 10/12 **ordinary-school HKI/HKII** verified-paper corpus (2022–2026), not all G12 graduation mock papers. Compare per-question required method steps to full D1/D2/D3/D4 **outcomes** before issuing any `COVERAGE_GAP`. Presence of a shared technique is not full problem-type coverage, but also not a curriculum failure.
4. No additions, deletes, modifications, new standards, Word/PDF uploads to public repo, Topic implementation, or RELEASE until owner-authorized decisions. Existing SGK/Topic one-canonical multi-placement architecture remains unchanged.
