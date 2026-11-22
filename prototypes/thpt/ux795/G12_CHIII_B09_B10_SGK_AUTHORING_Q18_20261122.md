# G12 SGK KNTT Tập Một · Chương III B09–B10 · AUTHORING Q18 source-scoped receipt · 22/11/2026

MASTER_TASK: #987 only
STANDARD: SLM-THPT-QUALITY-ONE v3.2.0 · 488afe2908e0b471320e1d55f775391578d88bba
BRANCH: authoring/sgk-g12-chiii-b09-b10-r02-20261122
BASE_COMMIT: c7083ad28d50414c3f4a93f5b33b84c1e9439b9e
DELTA_CLASS: DELTA_C for lessons and instructional plot; HELP label-only equivalence delta
Q18_MODE: AUTHOR_SELF_VERIFIED / scoped source QA
STATUS: AUTHORING_SOURCE_CANDIDATE_READY; NOT CONTENT_READY
RELEASE_AUTHORIZATION: NO

## 1. Exact source locks
| Canonical source | Old blob | Candidate blob |
|---|---|---|
| docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md | 4571bac678c36c4fb06d6a7fde45b86703f8ebce | d4bbfcfb62f5a3b3c5056652022a59f8a1d1a484 |
| docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md | 32f4eda1cfd151592eef5a35921ad872c1f644c4 | 7fe3db93885de61675d237e63317529eeca231b5 |
| docs/assets/data/thpt-g12-chiii-b09-b10-public-r00.json | e72c6050cc97f897939bfbc4e1469691a4ffed62 | d91cad435b9a945b044b2fd2f8ff37c21c00abf9 |
| docs/assets/images/thpt/FIG-G12-CHIII-B09-QUARTILES-R00.svg | 51fd46bc69ee7c4279e5024aa29dc0e83651a1a7 | c69f87d1eef339b238b74db647e24ffe58f3e2c1 |

No parallel learner source; 12 legacy EX IDs retained. Existing bank historical source_blob/receipt_blob metadata retained for renderer compatibility, not a new proof of reviewer approval; reconcile before handoff. No runtime, CSS, data/progress or private assessment change.

## 2. Q01/Q02 source evidence and limitations
Reopened actual historical original visual receipt prototypes/thpt/review-packets/G12_SGK_S1_ORIGINAL_PDF_VISUAL_SCOPE_AND_CHI_PREFLIGHT_20261102.md blob 3089da687075018f6d798293659d7d622f272adc. SGK Tập Một original 104 pages SHA256 faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd; SBT Tập Một original 117 pages SHA256 db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca. Historical observed offset SGK one-based PDF index = print+2; SBT Tập Một print−2 for confirmed sample pages. SGK B09 printed 75–79 (expected PDF1 77–81), B10 80–84 (expected PDF1 82–86), chapter-end begins 85. **No fresh original PDF image/SBT per-lesson page verification this turn.** Do not infer SBT ranges or declare original PDF custody PASS.
Reopened actual historical deep audit prototypes/thpt/ux795/G12_CHIII_B09_B10_DEEP_S1_48_PUBLIC_12_WRITTEN_12_HELP_3_SVG_Q16_AP_AUDIT_R01_20261115.md (blob 5571e1aa1c66799f3206717d3b43d2505c0f678b at f44c6c7fa6c3108ad96e928e131fe769581f822d). It records these public digital lesson transcriptions (not freshly reopened as complete publisher PDF):
- https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iii-cac-so-dac-trung-do-muc-do-phan-tan-cua-mau-so-lieu-ghep-nhom-3542/bai-9-khoang-bien-thien-va-khoang-tu-phan-vi-12942.html
- https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iii-cac-so-dac-trung-do-muc-do-phan-tan-cua-mau-so-lieu-ghep-nhom-3542/bai-10-phuong-sai-va-do-lech-chuan-12988.html
Fresh corroborating secondary text search result https://www.thivien.org/toan-12-kn/ly-thuyet-bai-10-phuong-sai-va-do-lech-chuan.jsp supports n-denominator descriptive variance, SD units and conditional risk comparison. It is not S1 authority and not an original PDF. B09 boundary-position handling follows baseline convention (first positive-frequency group reaching target) and raw even-sized median-of-halves; verify exact original convention for boundary with empty groups in targeted review. B10 n−1 note follows historical audit p81, distinguished from descriptive n; no fresh original print confirmation. B09 top headings 1 range, 2 IQR; B10 1 variance/SD, 2 risk; exact original printed wording pending.
Authored new raw data, not copying textbook problems. Existing six outcomes each preserved; new subskills mapped to parent outcomes, not claim complete new bank coverage.

## 3. Pedagogy and substantive scope
| Lesson | Existing outcomes | FirstTry | Worked EX (legacy + new) | Local HELP | SVG |
|---|---:|---:|---:|---:|---:|
| B09 | 6 | 7 | 6+2=8 | 7 | 2 |
| B10 | 6 | 8 | 6+3=9 | 8 | 1 |
B09: start with raw data and half-open intervals, loss of information, range sensitivity, cumulative positions, derive interpolation fraction, interpret R vs IQR, full exact-vs-grouped method, boundary and empty class. B10: derive weighted mean/variance from repeated representatives and cancellation, expand shortcut, units, comparison of stability, distinguish descriptive n and optional n−1, raw data grouping followed by threshold decision, raw/group comparison and contextual CV limits. 15 local self-opened comparisons and 15 local recoveries with two links to exact same-outcome canonical practice/core. Four Golden tabs, TeX and semantic cards. 17 examples preserve 12 original IDs, add 5 original-data examples. Three SVG (two unchanged, one corrected scale). Some old examples share data with the public bank: formative retrieval only, no independent evidence.

Actual source read-back QA: 24/24 per lesson, total 48/48, including four tab order, unique try/help/EX and legacy IDs, hidden comparison/diagnostic count, existing outcomes and same-outcome link targets, four distinct example fields, figure alt/caption, TeX delimiters (no doubled command escapes), semantic card counts 4/3, error tab headings, original routes, HTML tag balance and no runtime/private markers. Not a browser render pass.
Actual numerical QA: B09 15/15, B10 17/17 = 32/32 scenario check groups (one per try or EX), using explicit half-open grouping counts, sorted median-of-halves, cumulative interpolation, weighted direct variance and algebraically equivalent shortcut (agreement tolerance 1e-8), arithmetic and threshold checks. Examples B09 raw [12,13,16,17,19,21,22,24,26,28,31,38] exact R=26, IQR=10.5; grouped f=(5,5,2), R=30, Q1=16,Q3=28,IQR=12; first-reaching boundary with f=(4,0,8,4) gives Q1=10,Q3=30. B10 12 raw observations f=(2,7,3), mean=1/30, variance=59/900, SD=sqrt(59)/30>0.25; separate six-value sample exact variance=29/3, grouped=6.25; n versus n−1 example 2 versus 8/3. Numerical checks are not proof of original source fidelity.
SVG read-back 11/11 scale relationships: y=410−6.5v; 4 bars with heights 39,130,208,260; 5 grid/tick levels 0,10,20,30,40; 2 horizontal quartile lines y345 and y215. One consistent scale, no previous unequal heights. No on-device verification.

## 4. Item/outcome mapping and Q15/Q16
| FirstTry ID | Outcome | Placement | Existing canonical return / practice |
|---|---|---|---|
| THPT-G12-B09-TRY01 | G12-CHIII-B09-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C01 / THPT-G12-B09-P01 |
| THPT-G12-B09-TRY02 | G12-CHIII-B09-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C02 / THPT-G12-B09-P03 |
| THPT-G12-B09-TRY03 | G12-CHIII-B09-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C03 / THPT-G12-B09-P05 |
| THPT-G12-B09-TRY04 | G12-CHIII-B09-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C04 / THPT-G12-B09-P07 |
| THPT-G12-B09-TRY05 | G12-CHIII-B09-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C05 / THPT-G12-B09-P09 |
| THPT-G12-B09-TRY06 | G12-CHIII-B09-O06 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C06 / THPT-G12-B09-P11 |
| THPT-G12-B09-TRY07 | G12-CHIII-B09-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B09-C05 / THPT-G12-B09-P09 |
| THPT-G12-B10-TRY01 | G12-CHIII-B10-O01 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C01 / THPT-G12-B10-P01 |
| THPT-G12-B10-TRY02 | G12-CHIII-B10-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C02 / THPT-G12-B10-P03 |
| THPT-G12-B10-TRY03 | G12-CHIII-B10-O03 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C03 / THPT-G12-B10-P05 |
| THPT-G12-B10-TRY04 | G12-CHIII-B10-O04 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C04 / THPT-G12-B10-P07 |
| THPT-G12-B10-TRY05 | G12-CHIII-B10-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C05 / THPT-G12-B10-P09 |
| THPT-G12-B10-TRY06 | G12-CHIII-B10-O06 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C06 / THPT-G12-B10-P11 |
| THPT-G12-B10-TRY07 | G12-CHIII-B10-O05 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C05 / THPT-G12-B10-P09 |
| THPT-G12-B10-TRY08 | G12-CHIII-B10-O02 | SGK_KNOWLEDGE_FIRST_TRY | THPT-G12-B10-C02 / THPT-G12-B10-P03 |

Read-back reverse replacement of the 12 HELP steps restores exactly the parsed original bank. Exactly 36 entries (steps 2,4,5 in each five-step HELP) change machine-looking codes to natural learner-facing labels; preserve diagnosis, mathematical explanation, example identity, return/practice IDs and role. All 48 item records/answers/solutions/rubrics unchanged, 12 CORE +12 SGK_PRACTICE +12 SGK_APPLICATION +12 WRITTEN, 12 HELP with five steps each, 24 link IDs resolve, 12 public END references unchanged. Existing player reads h.steps; no changes to renderer. Public END reuses previously exposed items, explicitly CLIENT_SELF_CHECK_NO_MASTERY. No RD1 accessed, published or copied. No Final Submit, official grading or Firebase change.
Unchanged control blobs: hub 8773a0e953be1186f47e5cfe852f3ea7b15bf188; end 38d20c092e24c1c8f1a4b23c629eaf081b5c6e91; player 10587fecd9723b702fa079fad227fcf5bee4f99f. New raw-to-group transfer is taught and practised locally in knowledge; dedicated bank/Written depth for those new subskills still pending. Historical source/receipt lock claims do not automatically certify the changed bank metadata.

## 5. Open conditions
SOURCE_CANDIDATE_READY with self-verified scoped QA only; not CONTENT_READY. Fresh original S1 print image and SBT scope missing; targeted independent Delta-C review as warranted, especially quartile boundary/empty-class convention and n−1 note; new dedicated transfer bank coverage, source/receipt/guard reconciliation and V2/ready/REGISTER not attested. No CI/browser AP1–AP5/R/P1/P2, no official readiness or deployment. Next G12 ChIV B11–B13 in MASTER #987.
