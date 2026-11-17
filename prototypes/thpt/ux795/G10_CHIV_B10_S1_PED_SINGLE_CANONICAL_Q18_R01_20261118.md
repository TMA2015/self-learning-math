# Toán 10 KNTT · Chương IV · Bài 10 · Q18 scoped self-verification and release-source receipt R01

**SOURCE_AUTHORITY:** SGK KNTT Toán 10 tập 1 Bài 10 in pp60–65 (mở đầu p59), chương §1 “Tọa độ của vectơ”, §2 “Biểu thức tọa độ của các phép toán vectơ”; R01 historical author notes SBT printed pp55–58. Owner supplied original scanned PDF in prior authoring epoch, **not re-mounted here**; current reproduction/transcription checked against S1 page-by-page but **publisher binary identity and exact cover/PDF offset remain unverified**. Do not turn this limitation into a false publisher-source receipt. **QUALITY STANDARD:** one `SLM-THPT-QUALITY-ONE v3.2.0` Q01–Q18; **MODE:** `Q18_AUTHOR_SELF_VERIFIED` (not independent NotebookLM PASS). **DELTA:** `DELTA_C_ACADEMIC_MATERIAL` for pedagogic concept/explanations/example transfer/river MathJax/formal semantic roles/error remedies; CSS scoped `DELTA_A_UI`. No standard change, no duplicate SGK or Chuyên đề source.

**LESSON_ID:** `G10-CHIV-B10`
**BASELINE_B10_KNOWLEDGE_BLOB:** `ceaa76688e73274c9cf2d3116c41c6d4d0ac2726`
**R01_SOURCE_BLOB:** `93ddcc4f034d69196df33af0875b11c650af9f77`
**ONE_CANONICAL_LESSON_BLOB:** `2b672fdfa336291fc895cab4a8b9a26932f64465`
**ONE_CANONICAL_LESSON_PATH:** `prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md`
**DERIVED_KNOWLEDGE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-10.md`
**CSS_OWNER_B09_P2_BASELINE_BLOB:** `7a658ab449818a616382c145c72880066c2ab57a`
**CSS_R01_SCOPED_B10_BLOB:** `0238a8cbdc55cc76783997cbad1b7c18afc29d50`
**R01_BANK_SOURCE_BLOB:** `a9f6fab820559a8da98a5a42cd9902dbf9891f34`
**R01_ORIGINAL_PUBLIC_BANK_BLOB:** `713e6a97b95c2c807c8b76045b324bdddf1a6737`
**SHARED_WRITTEN_LIBRARY_BLOB:** `cedf2a952624095d9135e04a84dc469e22ec53e5`
**B09_OWNER_P2_STATUS:** `OWNER_P2_PASS_20261118`
**B10_RELEASE_STATE:** `ACADEMIC_SELF_QA_CANDIDATE / EXACT_HEAD_CI_PENDING / P1_NOT_PUBLISHED / OWNER_P2_PENDING`

## G0 · Historical 79/79 source audit intake + prevention ledger

Mandatory immutable 23-audit matrix at `f44c6c7fa6c3108ad96e928e131fe769581f822d`, specific file `G10_CHIV_B07_B11_DEEP_S1_PED_PRACTICE_WRITTEN_AUDIT_R01_20261114.md`, defects and closure evidence into **single** Issue #795:
- `CHIV-10-A` (P1/AP2): raw code backticks `v_bờ=(3;5)`, `t=60/5`, metadata `EX-G10-B10-RIVER-TR01` and HELP admin note were visible to learners; now **zero backticks in Knowledge**, formulas in TeX; real rendered MathJax must still be verified.
- `CHIV-10-B` (P1): two-case complete river worked example misplaced in Discovery and river SVG had **different numeric dataset**; now river self-attempt stays in Discovery, worked 96/3/5 example moved to **Tab3 3.4**, river image located with clear caption disclosing 150/2.5/6.5 data from another Written problem. **Do not copy the public W10-RIVER written stem/answer as a new item.**
- `CHIV-10-C` (P2): admin words, staged “Kiến thức tiền đề”/HELP instructions in learner prose; replaced with natural WHY/reading-figure and genuine 4.x wrong step→root cause→fix→try. Three original helper marker IDs remain unchanged.
- `B09-F04`: the Tab 4 **must contain actual false student work and mathematical diagnosis**, never a generic “chưa phân tích được” method note; transferred to B10 three errors. `B09-CI-D6-03`: canonical HELP count is a distinct constraint from number of visible mistake disclosures; both happen to be 3 for B10 but must be tested separately. `B09-CI-BASELINE-02`: no bypass of exact older/accepted SHA chain; only append signed new B10 candidate to immutable source.

## G1–G2 · Outcome matrix and mathematical proof

| OUTCOME_ID | WHY/definition or rule | Independent worked/first-try/practice/feedback | Verification |
|---|---|---|---|
| `G10-B10-VECTOR_COORDS` | Unique (x\vec i+y\vec j) in a perpendicular `Oxy` basis, zero and vector equality; `AB=B−A` from B08 | Early original D5, TRY16, EX1, C01/P02, D6 4.1 | A(1;1)→B(4;3)=(3;2); EX1 A(−1;2)→B(3;5)=(4;3); original C01 A(−2;3)→B(4;1)=(6;−2); opposite reverses |
| `G10-B10-OPERATIONS` | Coordinate-wise (+,-,t\vec u); use actual axes and relative velocity, not arithmetic speed sum | TRY17, original B10 P01, EX2, EX4, river TRY, existing shared public Written item | (2(2;-1)-(-3;4)=(7;-6)); EX4 ((3;5)) yields (t=96/5=19.2), drift 57.6; counter-current ((-3;4)) yields (t=24) |
| `G10-B10-NORM_DISTANCE` | Pythagoras; distinguish straight distance from taxicab path | TRY18, EX1, C02/P06, D6 4.3 | ((3;4)) length 5; old C02 ((5;12)) length 13; original P06 ((6;-8)) distance 10 |
| `G10-B10-COLLINEAR_COORDS` | Reference vector nonzero, one shared (t), equivalent (ad-bc=0), zero convention separate | TRY19, EX2 check det (2(-6)-(-1)7=-5), P05, D6 4.2 | ((6;3)=3(2;1)), ((6;4)) not; no division by zero in conditions |
| `G10-B10-MIDPOINT_CENTROID` | B08/B09 midpoint+centroid vector identities; averages 2 vs 3 with triangle | TRY20, EX3, P03/P04, original W10, D6 4.2 | For A(1;3),B(5;−1),C(−2;4): M(3;1), G(4/3;2). Check GA+GB+GC=0 |

**SOURCE STRUCTURE:** 4 Golden tabs; **Tab1** 1.1 concept before formula, 1.2 actual original coordinate SVG **before first TRY16**, six voluntary tries closed by default, 1.3 terms; **Tab2** only two exact S1 2.x headings in correct order and three semantically selected class roles (`FORMAL_DEFINITION` turquoise; `FORMAL_RULE` pale blue; `MANDATORY_RECAP` yellow only once, because it is required to connect formulas; `KEY_FORMULA` border/no fill). **Tab3** four fully worked steps with WHY/limits/independent check. **Tab4** three genuine mistakes and feedback routes; no leaked implementation IDs in learner prose. Correct original SVG is positioned before its teaching prompt; river SVG used only with explicit distinct-data caveat.

**PROTECTED / Q15–Q16:** 8 original B10 Core/Practice `item_id` with exact original immutable stem, correct answer, version, public role and rubric; original W10 one shared written item, W10-RIVER only one existing public written library record, not a second item. One `item_id` per question across all placements, no new Readiness/Final Submit/Mastery evidence. No modification to student records, Firebase, Topic, private RD1, Original B01–B09 accepted sources, global site identity.

## G3–G5 · release gates, negative tests, and limits

- `scripts/test-thpt-g10-b10-single-canonical-source.cjs`: byte-exact **single current manuscript→public Knowledge**, original R01 **8 source-exact** IDs/answers/rubrics, original W10 source-exact, old bank/Written library/source SHA locks and negative mutations. Do not edit old bank.
- `scripts/test-g10-chiv-editorial-source.cjs`, `scripts/test-thpt-ap-vector-knowledge-parity.cjs`, `scripts/test-g10-chiv-golden-browser.cjs` and source router: accept B10 **only by signed R01 blob chain**, verify 2.1/2.2, exact original 6 TRY + 3 HELP IDs, new pedagogic Delta C identities, distinct 3+1 CSS appended after owner B09 P2 frozen SHA, four reasoned EX, no backticks and 3 real errors/MathJax + 390/820/1440 on actual Chromium.
- **Exact final HEAD CI** required incl. Roadmap, R4 full SGK, UX795 79-source/frozen regression; then authorized merge/deploy, actual gh-pages B10/unchanged B09 blob and source parity P1; **owner P2 remains separate**. No false independent NotebookLM PASS, official publisher-PDF custody, actual mobile Safari acceptance, Mastery.
- If QA fails, log `B10-...` in active **#795**, root cause, fix in the **same PR** and regression test. Do not create a competing academic file or new issue/standard.
