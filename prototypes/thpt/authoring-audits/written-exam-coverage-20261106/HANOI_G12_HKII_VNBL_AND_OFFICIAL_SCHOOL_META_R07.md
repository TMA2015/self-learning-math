# R07 — G12 HKII Việt Nam–Ba Lan 2026 and school-origin source custody 2023–24 (AUTHORING)

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-HANOI-SEMESTER-G12-R07-20261106
OWNER_SCOPE: ORDINARY_HANOI_THPT_HKI_HKII_2022_2026
AUTHORING_READ_ONLY: YES
BASELINE_D4_CANONICAL: 238
NEW_WRITTEN_ITEMS: 0
CANONICAL_ID_RENAMES_OR_CLONES: 0
ACADEMIC_PED_RE_REVIEW: NO
FORMAL_COVERED_OR_GAP_VERDICTS: 0
SOURCE_PDF_ISSUER_AND_QUESTION_NUMBER_VERIFIED: NO
SOURCE_META_FROM_OFFICIAL_SCHOOL_PAGE_VERIFIED: YES_FOR_2023_24_NQT
TOPIC_IMPLEMENTATION: NO
RELEASE_AUTHORIZATION: NO

## A. Actual regular-school G12 semester paper: 3 publicly excerpted applied questions

`EXAM_SOURCE_ID=HN-VNBL-2026-HK2-G12`

- Secondary publisher **Toanmath**, dated **03/05/2026**, explicitly labels **THPT Việt Nam–Ba Lan (Hà Nội), Toán 12, cuối HKII 2025–2026**, with three task excerpts: https://toanmath.com/2026/05/de-hoc-ki-2-toan-12-nam-2025-2026-truong-thpt-viet-nam-ba-lan-ha-noi.html .
- The article excerpt gives mathematical task type and data but **does not provide verified official question numbers/page images, original school-issued file or PDF SHA** in the current audit. Use audit-local suffixes `WEB-EX01/02/03` as **excerpt pointers only**, never claim they are official item numbers. No copies of original question/answer/rubric are committed here.
- These are **ordinary-school semester exam demands** and take priority for the present task over new specialty-school or G12 graduation-mock catalogs.

| Research excerpt locator (NOT official exam number) | Paraphrase of task and reasoning demanded | Existing immutable canonical evidence | Coverage interpretation (non-verdict) | Further evidence needed |
|---|---|---|---|---|
| `HN-VNBL-2026-HK2-G12:WEB-EX01` | Medical screening with prior prevalence, sensitivity and false positives. Compute posterior probability conditioned on positive. Must avoid confusing `P(disease \| positive)` and `P(positive \| disease)`. | G12 ChVI B19 `THPT-G12-B19-W05` (`G12-CHVI-B19-O05`), `W04` (`O04`), `W07` (`O07`). **W05 is exceptionally close in method:** base prevalence, specificity/false positives, hypothetical test-population count, posterior, explanation why sensitivity is not posterior; existing /5 rubric distinguishes those steps. | `NEAR_DIRECT_METHOD_FAMILY_MATCH`. This **rules out a claim that Bayes false-positive interpretation is unpracticed**; not a formal exam-equivalence or Academic rereview | Check original printed question/answer and whether the school source version and test numerical rounding/format differ; do not count this mirror as independent verified PDF |
| `HN-VNBL-2026-HK2-G12:WEB-EX02` | Factory model: price per product decreases linearly with quantity; manufacturing total cost is cubic; maximize `R(x)-C(x)` with feasible quantity domain. | G12 ChI `THPT-G12-CHI-B05-A02` (`G12-B05-MODEL_VARIABLE_DOMAIN`, variable unit-price feasibility), `THPT-G12-CHI-B05-A03` (`G12-B05-UNIT_ASSUMPTION_CHECK`, profit quadratic and domain), D4 `THPT-G12-CHI-B02-W02` (open-boundary optimization) and `THPT-G12-CHI-B05-W02` (marginal versus discrete cost). | `PREREQUISITE_AND_REAL_PROFIT_OPTIMIZATION_PRESENT`, **not identical** to deriving cubic profit from separate R and C and optimizing with an economic feasible set. Candidate composite transfer `REVENUE_MINUS_CUBIC_COST_DOMAIN`; **not a gap** without inspecting other D3/EX and original exam | Verify whether production quantity must be integer, any capacity cap, expected rounding, and full question source; inspect other G12 ChI D3 outcomes before gap proposal |
| `HN-VNBL-2026-HK2-G12:WEB-EX03` | Lantern whose horizontal cross-sections are **squares**; varying side length is inferred from a **parabolic vertical silhouette**, then integrate squared cross-sectional side over physical height, convert cm³ to liters. | G12 ChIV B13 `THPT-G12-B13-W06` (`G12-CHIV-B13-O06`) directly asks to calculate volume from variable **square cross-sectional area** `S(x)=side(x)^2` and a definite integral; existing /5 rubric checks section description, correct area, integral and units. `THPT-G12-B13-W05` practices area/units and `W07` contrasts circular sections. | `CROSS_SECTION_INTEGRAL_METHOD_DIRECTLY_PRACTICED`; distinct **parabola reconstruction from geometry** and symmetry + unit-conversion sequence remains `COMPOUND_GRAPH_TO_SECTION_TRANSFER_PENDING`. Do not infer the school paper's picture/formula from secondary prose alone | Original parabolic diagram, coordinate positioning, side-length vs diagonal interpretation, exact constraints and volume conversion from school PDF |

### Exact canonical source custody and no re-review

| Content source | Git source blob (read from source-locked repo) | Evidence type |
|---|---|---|
| G12 ChVI `prototypes/thpt/content-drafts/G12_SGK_CHVI_B18_B19_END_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` | `1578efd4d2d46deb9bae064d12752d88fc3747b8` | B19 `W04/W05/W07` source statements and **already-approved** rubrics; no regrading |
| G12 ChIV `prototypes/thpt/content-drafts/G12_SGK_CHIV_B11_B13_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` | `45722cd386a498f3e0e96a09928c85565af56d1b` | B13 `W05/W06/W07` and outcome mapping |
| G12 ChI `docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json` | `4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a` | Exact B05 D3 application and B02/B05 D4 source IDs/rubric; upstream reviewed source blob `f0862dcdab21dec136e43969f45c42638e7c7574` |

`WRITTEN_D4_REFERENCE_IDS` here are not new items; `CORE/PRACTICE/APPLICATION` can contribute skill practice without being added to the 238 D4 count. A near-direct method match means *practice opportunity exists*, not proficiency demonstrated by individual students.

## B. Direct school-publisher metadata: THPT Nguyễn Quốc Trinh 2023–24 (three grades)

These entries are **different quality of source provenance** from Toanmath/Vietjack: they are actual **official school website pages** listing attached PDFs under author/source `Trường THPT Nguyễn Quốc Trinh`. The page is school-issued metadata. However the attachment server is `quantri.hanoi.shieldix.app` and PDF bytes/visuals could not yet be fetched. Thus `SCHOOL_ATTACHMENT_METADATA_CONFIRMED` **does not mean** `EXAM_QUESTION_VERIFIED`.

| Internal source ID | Original issuing school URL | Publisher attachment name | 2026-current curriculum relevance |
|---|---|---|---|
| `HN-NQT-2024-HK2-G10-OFFICIAL_META` | https://thptnguyenquoctrinh.hanoi.edu.vn/thi-va-tuyen-sinh/de-kiem-tra-cuoi-hoc-ky-ii-khoi-10-11-nam-hoc-2023-2024/ctmb/21706/22818 | `tieng-anhtoan-10cuoi-hkii.pdf` (ambiguous merged filename; inspect **before** assuming it contains an independent Math 10 paper) | Grade 10 was already CT GDPT 2018 in 2023–24; `ELIGIBLE_IF_PDF_CONFIRMED` |
| `HN-NQT-2024-HK2-G11-OFFICIAL_META` | Same official school page dated 07/05/2024 | `toan-11cuoi-hkii-23-24.pdf` | Grade 11 was already CT GDPT 2018 in 2023–24; `ELIGIBLE_IF_PDF_CONFIRMED` |
| `HN-NQT-2024-HK2-G12-LEGACY_META` | https://thptnguyenquoctrinh.hanoi.edu.vn/thi-va-tuyen-sinh/de-kiem-tra-cuoi-hoc-ky-ii-khoi-12-nam-hoc-2023-2024/ctmb/21706/22769 (26/04/2024) | `kt-cuoi-hkiitoannqt.pdf` | **Grade 12 had NOT yet entered CT GDPT 2018 in 2023–24**. `LEGACY_CURRICULUM_CONTEXT_ONLY`; must **not** be a direct gap requirement for modern G12 |

**Program rollout basis:** Ministry's `Thông tư 32/2018/TT-BGDĐT`, Art. 2 (effective rollout): G10 from 2022–23, G11 from 2023–24, G12 from 2024–25; https://thuvienphapluat.vn/van-ban/Giao-duc/Thong-tu-32-2018-TT-BGDDT-Chuong-trinh-giao-duc-pho-thong-403454.aspx?anchor=loai_1 . Hence a universal 2022–2026 **date window is necessary, but is not sufficient**; class year and curriculum compatibility must both pass.

No official school 2023–24 PDF stem/rubric has been read, so no 2024 academic-method mapping or frequency statistics are emitted.

## C. Audit decisions

- `WRITTEN_BASELINE_UNCHANGED=238`; no clone/rename, no answer or rubric edits.
- `EXAM_COVERAGE_VERDICTS=0`, `PROVEN_GAP_ITEMS=0`, `NEW_ITEM_PROPOSALS=0`. One school + three HTML excerpts is **not a prevalence benchmark**.
- Important positive method findings: **Bayes diagnostic false-positive** and **square-section definite-integral volume** are already explicit in existing *approved Written cards*. Do **not** propose a new exercise merely because the exam wraps the same method in a richer story.
- Highest-value unresolved transfer tasks: maximize a derived cubic revenue-minus-cost objective with real-world domain; derive a *parabolic* square-section side-length function from a diagram; verify rounded output and method transfer.
- Keep G12 2023–24 old-program paper out of present `G12_CT2018_EXAM_COVERAGE` until compatibility is demonstrated; do not use its questions to imply 2025+ graduation readiness.
- No Topic item creation: future Topic pre-placement can point to canonical IDs only, with Topic journey independently complete and separate QA later. This audit is not a standard change.
