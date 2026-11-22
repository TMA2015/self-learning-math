# G12 SGK KNTT Tập Một · Chương II B06–B08 · AUTHORING Q18 source-scoped receipt · 22/11/2026

MASTER_TASK: #987 (only master)
STANDARD: SLM-THPT-QUALITY-ONE v3.2.0 · standard Git blob 488afe2908e0b471320e1d55f775391578d88bba
BRANCH: authoring/sgk-g12-chii-b06-b08-r02-20261122
BASE_COMMIT: c7083ad28d50414c3f4a93f5b33b84c1e9439b9e
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL, including canonical S1-convention correction and D6
Q18_MODE: AUTHOR_SELF_VERIFIED / scoped source QA
STATUS: AUTHORING_SOURCE_CANDIDATE_READY; NOT CONTENT_READY
RELEASE_AUTHORIZATION: NO

## 1. Exact source locks
| Canonical component | Old Git blob | Candidate Git blob |
|---|---|---|
| docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md | 8991c8a30487fdf1db65cf31a19b0ed68ef52518 | 7eedee9e0451be67cc64d061e04b29374a1315c4 |
| docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md | 4bfbed222d552f3ccb9c965616245015930ab1cd | 686282890d50eccaa9fa862b0c4cd57c5253436d |
| docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md | c85922428c85ddeb48cec5e2bd5953faa44207c8 | 347e65b3d744bb54e499bb52ba85266c521d695d |
| docs/assets/data/thpt-g12-chii-b06-b08-public-r00.json | 982c2f2e27f7c7eda5cf8f64de1d6c195b531bfb | d85de4ba099508aecbff5c0c344b95830bcc6f38 |
| docs/assets/images/thpt/FIG-G12-CHII-B06-CENTROID-R02.svg | new instructional SVG | b4a01bcd28968d0b6cc6f0014b20ed50503b2f68 |
| docs/assets/images/thpt/FIG-G12-CHII-B07-R00.svg | 979ca912e99fdadfc4e91ae0edad5db34fc13928 | 7b0ea35135f78a9746ccd587a90a51c9d8928eb9 |

No parallel learner versions. Sixteen legacy EX IDs preserved, new EX identifiers only for new examples. No website JS, CSS, navigation architecture, deployment, progress, or authentication edits. Original P02/HELP values preserved in old immutable blob. New bank remains candidate; historic source_blob/receipt_blob fields in existing JSON are retained for existing renderer compatibility, **not** a new author/reviewer receipt for the candidate content. Reconcile source/receipt/guard and governed handoff before integration/CONTENT_READY.

## 2. Source authority Q01/Q02 and scope
Reopened S1 historical original visual receipt prototypes/thpt/review-packets/G12_SGK_S1_ORIGINAL_PDF_VISUAL_SCOPE_AND_CHI_PREFLIGHT_20261102.md blob 3089da687075018f6d798293659d7d622f272adc. Original SGK Tập Một 104 pages SHA256 faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd; SBT Tập Một 117 pages SHA256 db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca. Historical sampled offset SGK one-based PDF index = print+2; SBT Tập Một print−2. B06 print 45–59 (expected PDF indices 47–61); B07 60–66 (62–68); B08 67–72 (69–74); chapter-end pp73–74 preserved. **Fresh original PDF image and exact SBT per-lesson pages NOT verified this turn**; no invented SBT ranges.
Historical deep audit actually reopened: prototypes/thpt/ux795/G12_CHII_B06_B08_DEEP_S1_64_PUBLIC_16_WRITTEN_16_HELP_3_SVG_Q16_AP_AUDIT_R01_20261115.md blob fc395ffdf2d8b9c0789fa7a41ceef21fd56b06c4 at f44c6c7fa6c3108ad96e928e131fe769581f822d. The original learner files and bank/renderer reopened. Source findings corroborated by fresh public transcribed SGK search excerpts (not original PDF image):
- https://sachgiaokhoa.aistudybuddy.vn/sach-online/lop-12/toan-12-tap-1/bai-6-vecto-trong-khong-gian/ : zero vector convention (same direction/parallel to every vector) and arbitrary angle 0–180°, not a measurable unique angle.
- https://www.thivien.org/toan-12-kn/ly-thuyet-bai-6-vecto-trong-khong-gian.jsp : zero direction convention corroboration.
- https://sachgiaokhoa.aistudybuddy.vn/sach-online/lop-12/toan-12-tap-1/bai-8-bieu-thuc-toa-do-cua-cac-phep-toan-vecto/ : search excerpt on spatial pyramid angles and constant-velocity prediction; direct find returned cache miss, no whole-page original proof.
- Historical audit B06 headings 1 vector, 2 sum/difference, 3 scalar multiplication incl centroid, 4 angle and dot; B07 1 frame, 2 point/vector incl difference, prism/airplane; B08 component operations, dot product, application (working map, confirm exact printed B08 headings on original). B07 actual source crosswalk from historical audit; no fresh full original SGK scan.
All newly authored worked/try numbers distinct from cited textbook examples. S1 convention responsible correction distinguishes no unique physical zero-arrow direction from agreed SGK algebraic direction; arbitrary-angle convention does not license dividing by norm 0. Preserve nonzero-only 90° criterion.

## 3. D1–D6/PED per lesson
| Lesson | Existing lesson outcomes | FirstTry | Worked EX (old IDs + new) | Local help | SVG | Scope |
|---|---:|---:|---:|---:|---:|---|
| B06 | 6 | 8 | 6+3=9 | 8 | 2 | convention, free vector, sum/difference, scalar, triangle/tetrahedron centroid and distance to base, angle from solid, constant-force work, drag ratio |
| B07 | 4 | 6 | 4+3=7 | 6 | 1 | valid unit axes, coordinate reading with projected unit ticks, point/vector, chosen directions, endpoint minus start, prism vertex completion, motion |
| B08 | 6 | 7 | 6+5=11 | 7 | 1 | arithmetic and common-factor conditions, consistent zero convention, midpoint/centroid, dot/angle and distance, nonstraight route vs displacement, full solid angle, forward prediction with constant velocity |
Total 16/16 existing outcomes; 21 FirstTry with optional comparison; 21 local HELP and 27 worked examples (16 original IDs and 11 new); four real SVG (2 original unchanged files, 1 improved file, 1 new). Four semantic Golden tabs with concept/rule distinction and 1.x–4.x; no new UI theme. Each try has closed comparison + diagnostic + two links to canonical same-outcome Core and Practice. Each example has question, analysis, solution and verification distinct from analysis. New subskills represented by parent existing outcomes and local exercises; dedicated canonical Core/Practice/Written coverage for new mastery depth still needs assessment, not claimed by counts.

**Actual QA on read-back learner sources:** 24/24 per lesson =72/72. Verified four tab order, unique FirstTry/HELP/EX including all legacy EX IDs, try IDs outside bank, optional compares and local recovery, outcome coverage, return hash targets and same-outcome links, four example fields with distinct analysis/check, figure count/alt/caption, math delimiters and HTML tags balanced, semantic card counts 7/3/3, error tab counts, unique source footer, no script/style/private marker, original hub routes. Global unique try/EX/local-help IDs. Not rendered visual acceptance.
**Actual calculation QA:** 48/48 scenario checks (B06 17/17, B07 13/13, B08 18/18; one check group per FirstTry and EX) plus 16/16 bank HELP mini-checks. JS explicit vector add/subtract/multiply, average/dot/norm, signs, angular cos, scalar interpolation and displacement with numerical tolerance 1e-8; manual reasoning checked separately. This is calculation sanity, not substitute for proof/review. Examples: tetrahedron I=A+3(G−A)/4 ⇒ height 3 for 12 and 4 for 16; cube AB·AC=16 at edge 4; drag ratio 25/16; new prism B′(5;−1;5), C′(2;2;5); 840 km/h quarter hour gives +210 km south-positive; north 720×20/60=240 km, final y−260; spatial pyramid BD=5, SC=√61, dot −7, angle ≈100.326°; displacement 5 vs route 7 over 2s; prediction C(7;−1;3) and C(70;30;10). B07 SVG line geometry read-back 5/5: O(320,330), P(496,382), H(421,414), M(421,219) use screen basis (88,26),(−75,32),(0,−65), exactly 2/1/3 steps; two dashed projections correctly parallel. B06 centroid SVG geometry 5/5: screen G=(423.333...,333), I=(400,271)=A+0.75(G−A), three projected medians end at true side midpoints. Total 10/10 geometric line checks. No screenshot/responsive/browser claims.

## 4. Canonical Q15 and D6 delta
| FirstTry ID | Outcome | Placement | Existing canonical return / practice |
|---|---|---|---|
| THPT-G12-B06-TRY01 | G12-CHII-B06-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B06-C01 / THPT-G12-B06-P01 |
| THPT-G12-B06-TRY02 | G12-CHII-B06-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B06-C02 / THPT-G12-B06-P03 |
| THPT-G12-B06-TRY03 | G12-CHII-B06-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B06-C03 / THPT-G12-B06-P05 |
| THPT-G12-B06-TRY04 | G12-CHII-B06-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B06-C04 / THPT-G12-B06-P07 |
| THPT-G12-B06-TRY05 | G12-CHII-B06-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B06-C04 / THPT-G12-B06-P07 |
| THPT-G12-B06-TRY06 | G12-CHII-B06-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B06-C05 / THPT-G12-B06-P09 |
| THPT-G12-B06-TRY07 | G12-CHII-B06-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B06-C05 / THPT-G12-B06-P09 |
| THPT-G12-B06-TRY08 | G12-CHII-B06-O06 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B06-C06 / THPT-G12-B06-P11 |
| THPT-G12-B07-TRY01 | G12-CHII-B07-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B07-C01 / THPT-G12-B07-P01 |
| THPT-G12-B07-TRY02 | G12-CHII-B07-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B07-C01 / THPT-G12-B07-P01 |
| THPT-G12-B07-TRY03 | G12-CHII-B07-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B07-C02 / THPT-G12-B07-P03 |
| THPT-G12-B07-TRY04 | G12-CHII-B07-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B07-C03 / THPT-G12-B07-P05 |
| THPT-G12-B07-TRY05 | G12-CHII-B07-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B07-C04 / THPT-G12-B07-P07 |
| THPT-G12-B07-TRY06 | G12-CHII-B07-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B07-C04 / THPT-G12-B07-P07 |
| THPT-G12-B08-TRY01 | G12-CHII-B08-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B08-C01 / THPT-G12-B08-P01 |
| THPT-G12-B08-TRY02 | G12-CHII-B08-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B08-C02 / THPT-G12-B08-P03 |
| THPT-G12-B08-TRY03 | G12-CHII-B08-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B08-C03 / THPT-G12-B08-P05 |
| THPT-G12-B08-TRY04 | G12-CHII-B08-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B08-C04 / THPT-G12-B08-P07 |
| THPT-G12-B08-TRY05 | G12-CHII-B08-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B08-C05 / THPT-G12-B08-P09 |
| THPT-G12-B08-TRY06 | G12-CHII-B08-O06 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B08-C06 / THPT-G12-B08-P11 |
| THPT-G12-B08-TRY07 | G12-CHII-B08-O06 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B08-C06 / THPT-G12-B08-P11 |

One question only changed, exact ID THPT-G12-B06-P02, stem/answer/solution updated to explicitly ask original SGK convention; length remains 0, no scoring or role change. Old wording: Độ dài 0, hướng không xác định. New wording: Độ dài 0; theo quy ước SGK, cùng hướng và cùng phương với vectơ AB. The item is also reused at end_references position 1; no new public END copy or hidden RD1 content. All 16 bank HELP review_path fields rewritten as concrete human-readable diagnosis, method, mini check, and reference to the newly relevant Khám phá subsection; same help_id, outcome_id, lesson_id, return_item and practice_item. Existing renderer already reads h.review_path, no runtime changes; actual visible layout needs AP4. Read-back reverse replacement restores exact parsed old bank object; all other item fields and all end references/legacy metadata unchanged. 64 unique canonical IDs, 16 CORE +32 PRACTICE +16 WRITTEN, 16 unique HELP, 16 reused end references; 32 HELP targets resolve. No invented new standalone question bank. All 16 original rubrics unchanged. The old R00 byte hash remains historical review only.

Controls unchanged: hub 818c6ab34b2906442ef1517859d25432e07fa8dd, end entry e60592b35a42ce8c8fe9a4901f22ee3e77df69f6, JS abc25f0e7fa148ce30000b4ad16ba015312897e7. Bank remains CLIENT_SELF_CHECK_NO_MASTERY. No private RD1 accessed, published or copied; no change Final Submit/official scoring or student data. Legacy end-ref remedial_path metadata remains unchanged; technical-label renderer behavior/legacy test compatibility to check in appropriate lane. No Q16 independent readiness claim.

## 5. Open conditions and next
SOURCE_CANDIDATE_READY with scoped source self QA only. S1 original print image/SBT remaining checks, new canonical P02 and D6 targeted Delta-C review (scope current mode and owner instruction), full new transfer bank-depth coverage, Q18 candidate receipt/source guard reconciliation, V2/ready/REGISTER not attested. Do not promote old reviewer Academic/PED PASS to new source. No CI/AP/R/P1/P2 full acceptance, no official readiness or merge/deploy. Next G12 ChIII B09–B10 per owner/master #987.
