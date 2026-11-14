# R08 — Đề HKI 2025–2026 THPT phổ thông Hà Nội: Phùng Khắc Khoan, lớp 12 và lớp 10

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-HANOI-HKI-G10-G12-PKK-R08-20261106
SCOPE: AUTHORING_EXAM_SOURCE_TO_CANONICAL_READ_ONLY
CANONICAL_D4_BASELINE: G10_31_G11_83_G12_124_TOTAL_238
EXAM_EVENT_COUNT: 2
G12_PDF_TEXT_LOCATED_WRITTEN_QUESTIONS: 3
G10_SECONDARY_WEB_EXCERPTS: 3
SOURCE_ISSUER_ORIGINAL_VERIFIED: NO
G12_PDF_VISUAL_PAGE_VERIFIED: NO
G12_PDF_BYTES_SHA256_VERIFIED: NO
FORMAL_COVERED_GAP_VERDICTS: 0
NEW_CANONICAL_WRITTEN_ITEMS: 0
ACADEMIC_PED_RE_REVIEW: NO
TOPIC_PLACEMENTS_CREATED: 0
RELEASE_PERMISSION: NO

## 1. File/source provenance and distinctions (not counted as multiple independent papers)

### `HN-PKK-2026-HK1-G12-PDF-TEXT`

- School: THPT Phùng Khắc Khoan–Thạch Thất, Hà Nội; **Toán 12**, 2025–2026, kiểm tra **cuối học kỳ I**, 90 phút. Mirrored, indexed PDF: https://file.montoan.com.vn/file-pdf/de-cuoi-ky-1-toan-12-nam-2025-2026-truong-thpt-phung-khac-khoan-ha-noi.pdf .
- The **actual PDF text index**, not merely a web article, includes title `ĐỀ CHÍNH THỨC`, the school's name, **mã 123**, four **printed exam pages**, followed by separate marking guidance. On printed exam **pp3–4/4**, Part IV explicitly enumerates **Câu 1–3**; key text has matching Part IV answers and a split-point rubric. **Do not equate printed 4 pages with the length of the combined exam+answer PDF.**
- The same PDF text later contains **mã 345**. This is **a different exam-code version within one school exam event**, not a second independent school/term. No duplication in prevalence statistics.
- **Visual verification blocker:** attempted PDF screenshots on PDF pages 2, 3 and 4 via the research browser returned `Cache miss`; downloading bytes via the separate file host from the work container also failed DNS. Thus **`PDF_TEXT_AND_MARKING_SECTION_INDEXED=YES`** but **`DIAGRAM_TABLE_FORMULA_VISUAL_CHECK=NO`**, **`PDF_BYTE_SHA=UNAVAILABLE`**, original school publisher file not authenticated. Only the problem type, official-looking printed code and question labels in the *mirrored text* have been located. A published `ĐỀ CHÍNH THỨC` header **inside a secondary copy is not independent verification of school issuance**.
- Do not re-use the mirror's answer key as math authority or promote to `CORPUS_VERIFIED` until the diagram, grouped-frequency table, key and exact page pair are visually checked.

### `HN-PKK-2026-HK1-G10-WEB`

- School attributed: THPT Phùng Khắc Khoan–Thạch Thất, Hà Nội; **Toán 10**, 2025–2026, kiểm tra **cuối học kỳ I**, reported 90 minutes, 12 MCQs +2 True/False +4 short answers +**3 long-response Written**, by three derivative mirror sites with near-identical text: https://toan12.edu.vn/de-cuoi-ky-1-toan-10-nam-2025-2026-truong-thpt-phung-khac-khoan-ha-noi and https://montoan.com.vn/de-cuoi-ky-1-toan-10-nam-2025-2026-truong-thpt-phung-khac-khoan-ha-noi .
- Only **three reproduced task excerpts** were found; original numbered Part IV question locators, exam PDF bytes/graphic and marking key have **not** been retrieved. Use **`WEB-EX##` as author-created excerpt IDs, never an official exam question number**. Multiple mirrored sites with identical summaries are *one lead*, not three independent exam sources.
- Curriculum: G10 2025–2026 is CT GDPT 2018; the source is an ordinary non-specialist Hanoi school and falls within the agreed 2022–2026 corpus window.

## 2. G12 HKI (PDF text contains printed Part IV Câu 1–3): item-method mapping with limits

| EXAM_SOURCE_ID : printed exam locator | Task-type interpretation grounded in readable PDF text | Existing canonical item and immutable outcome | Actual source-locked practice | Evidence gate |
|---|---|---|---|---|
| `HN-PKK-2026-HK1-G12-PDF-TEXT:123:IV.C1`; **printed p3–4/4** | The shortest bridge from a *parabolic* pond-bank arc to a circular island: choose coordinates and model parabola, define the distance from a variable point to a fixed circle-center, minimize the distance on a bounded interval, subtract circle radius. This combines **coordinate reconstruction + constrained one-variable optimization**. | `THPT-G12-CHI-B02-W02` = `G12-B02-OPTIMIZATION_MODEL` (boundary-aware geometric optimization); `THPT-G12-B08-W05` = `G12-CHII-B08-O05` (Euclidean distance in 3D, prerequisite); possible G10 B06 triangle geometry as prerequisite only. | B02 W02 demands variable/domain, max, distinguish unattained min at open boundary; B08 W05 demands vector difference and norm; **neither proves an existing D4 combines parabolic reconstruction, circle-distance subtraction and derivative quartic minimum**. The mirrored guide indicates a multiple-step quartic objective, but image of actual pond shape and coefficient layout is not verified. | `PAPER_CODE_AND_QUESTION_LABEL_TEXT_VERIFIED; MULTI_OUTCOME_TRANSFER_PENDING; DIAGRAM_VISUAL_HOLD`. **Not** `COVERAGE_GAP`. |
| `HN-PKK-2026-HK1-G12-PDF-TEXT:123:IV.C2`; **printed p4/4** | Three drone positions in Cartesian Oxyz, calculate all **three pairwise Euclidean distances** and add. | `THPT-G12-B08-W05` = `G12-CHII-B08-O05`; `THPT-G12-B08-W06` = `G12-CHII-B08-O06` (spatial physical displacement/length/units). | B08 W05 has explicit 3D distance formula and geometric argument against Manhattan distance. B08 W06 practices straight displacement, length and speed with physical units. The exam requires **repeating the same distance formula over three pairs**, not a new family. | `NEAR_DIRECT_METHOD_MATCH; PDF_VISUAL_HOLD`; no new Written needed *from this one example*. |
| `HN-PKK-2026-HK1-G12-PDF-TEXT:123:IV.C3`; **printed p4/4** | Calculate **grouped-data variance and standard deviation** of shot-put distances given a frequency table. The text extraction drops the original printed table; key text displays grouped midpoints and frequencies. | `THPT-G12-B10-W02` = `G12-CHIII-B10-O02` (variance with n); `THPT-G12-B10-W04` = `G12-CHIII-B10-O04` (compute n, mean, variance, standard deviation); `W03` = `O03` (shortcut/consistency). | **B10 W04 directly covers mean + variance + standard deviation for grouped frequency data**, with complete 5-point rubric, units and limits of interpretation. B10 W02 focuses on denominator `n`, B10 W03 checks equivalence of original/shortcut formula. No source-based claim of absence is warranted. | `NEAR_DIRECT_METHOD_MATCH; ORIGINAL_TABLE_VISUAL_HOLD`. No formal `COVERED` verdict before original data verified. |

**G12 source custody**: `docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json` Git blob `4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a` (B02 W02); `prototypes/thpt/content-drafts/G12_SGK_CHII_B06_B08_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` blob `856a37bd16d2746ffc2e12906de18d1f4338a3b6` (B08 W05/W06); `prototypes/thpt/content-drafts/G12_SGK_CHIII_B09_B10_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` blob `4e8e462a5c2243583be8c71625a9be3095e48c7b` (B10 W02/W03/W04). These are already approved and not re-reviewed.

## 3. G10 HKI (secondary excerpt only; original question numbers unknown)

| EXCERPT locator (internal) | Reported applied exam task | Existing canonical knowledge evidence | Interpretation / missing proof |
|---|---|---|---|
| `HN-PKK-2026-HK1-G10-WEB:EX01` | Statistical survey of 20 egg masses; inspect mean, quartiles, sample range/variance/standard deviation claims. | `THPT-G10-CHV-W14-ANCHOR` = `G10-B14-VARIANCE` + `G10-B14-STDDEV` + `RANGE_IQR`; approved source blob `ea0de4b484527c2f47e07840c7f00914badd67e7`. | W14 already combines mean, median, range, IQR, variance, standard deviation and interpretation for two small ungrouped samples. **Method-family transfer present**. The original egg-mass raw table and whether the excerpt is Part II True/False are not visually verified; not a Written-question claim. |
| `HN-PKK-2026-HK1-G10-WEB:EX02` | Allocate eight hectares between two crops under both acreage and labor constraints; maximize earnings. | `THPT-G10-CHII-W04-ANCHOR` = `G10-B04-LINEAR_OBJECTIVE`; approved source blob `25f4eaf91483cb310ed13ebc5080f98cd247dd70`. | W04 already practices two-variable linear inequalities, feasible polygon, vertex comparison and integrality. The school crop task changes coefficient units and resource constraints, but is **the same linear-program family**. Need original diagram/answers and question section to establish full transfer. |
| `HN-PKK-2026-HK1-G10-WEB:EX03` | Off-road race with one flat and two sloped segments, slope triangle specified by two angles and baseline; compute two route lengths and add times with differing speeds. | `THPT-G10-CHIII-W06-ANCHOR` = `G10-B06-APPLICATION` and `G10-B06-COSINE_RULE` (triangle side/area/radius contextual); source blob `9d186b2eb8d1c8250a716014beae3021625a6f6c`. | Requires sine rule and/or triangle metric reconstruction *then* physical time = distance/speed, **different from the W06 multi-output triangle geometry**. `GEOMETRY_AND_UNIT_PREREQUISITES_PRESENT; COMPOUND_TRAVEL_TIME_TRANSFER_PENDING`. **Figure geometry not verified**, no claim that exact triangle or solution is covered. |

## 4. Scope and next gate

- This packet contains **2 separate school/grade/semester exam leads** and **6 distinct exam problem-type locations**: **3 G12 labelled Part IV essay questions from a PDF's indexed text**, plus **3 G10 web task excerpts of unknown original question number and section**. Do **not** report 6 verified exam questions or 6 verified files.
- The PDF mirror contains multiple exam codes (123/345) and model answer sections; one exam event, not two independent exams. PDF screenshot attempts failed. **There is no file SHA, no independently verified original school publisher**, and diagrams/tables are still unresolved. `CORPUS_VERIFIED=NO`, while `PDF_TEXT_QUESTION_REFERENCE_LOCATED=YES` for code 123 only.
- Skill already practiced at near-direct method level: **3D distances** `G12 B08`; **grouped sample variance and standard deviation** `G12 B10`; **two-variable linear objective** `G10 B04`; **ungrouped descriptive statistics** `G10 B14`.
- Complex transfer research candidates, **not confirmed gaps**: from actual parabola diagram to bounded distance-to-circle minimum; triangle side reconstruction plus per-segment travel time. Cross-check full D3/lesson examples and at least one more recent normal Hanoi semester school before any new item request.
- Source integrity: no exam PDF bytes, full exam/key copies, learner information, original statements or proprietary answer keys committed to public GitHub. Only paraphrased classifications and traceable external URLs. No 238 D4 changes, no Topic Content Ready, no merge/deploy, no academic standard change.
