# RELEASE deep source audit — Toán 11 Chương III B08–B09 · R01 · 2026-11-14

**Branch:** RELEASE only, evidence-only. **State:** `G11_CHIII_SOURCE_Q01_Q14_AP_HOLD`, `OWNER_QUALITY_HOLD`, **no authoring revision / no website content edits / no merge / no deploy**. This is NOT a new academic/PED/reviewer PASS, a new `CONTENT_READY` packet, AP1–AP5 final browser acceptance, or protected RD1 clearance.

**Canonical standard:** `SLM-THPT-QUALITY-ONE / 3.1.0` on `main`, one Q01–Q18 standard. Owner-approved G10 B06 four-tab editorial layout extends to G10/G11/G12 but does **not** retroactively mark any source PASS. Preserve immutable reviewer SOURCE_RECEIPT, Q15 IDs, Q16 Final Submit/privacy, Golden learner history and the two independent learning journeys.

**Exact source snapshots:** `main=b103cd91cd32a2ff3accd1ae14c24870330ef9a2`; `gh-pages=469e0c6cffde64a9b6ffbe7c65ed97144eb74659`. Both read live from GitHub. No claim of a newer production deployment or browser click/UAT.

## A. Source-locked inventory: all material actually read

| Source | Verified Git blob (SHA1) | Notes |
|---|---|---|
| [G11 B08 full Knowledge](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iii/bai-8.md) | `4f3d1af635dd548700ad3514aff283ebe29aa9a2` | **85 lines**, continuous vertical Markdown; 4 worked EX, first-try, 3 targeted HELP, 1 actual SVG |
| [G11 B09 full Knowledge](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iii/bai-9.md) | `46aa17f758783330c2b396f9ed36a25ab77a4094` | **111 lines**, continuous vertical Markdown; 6 worked EX, first-try, 3 targeted HELP, 2 actual SVG |
| Published `thpt-preview/sgk/lop-11/chuong-iii/bai-8/index.html` | `6ae5ae64563200eb45b753b7385d93b97475d9ba` | Real static gh-pages HTML article ~7,178 chars, **0 four-tab markers**, 11 `<code>`, 1 `<img>`, 4 `<details>`, no `arithmatex` |
| Published `thpt-preview/sgk/lop-11/chuong-iii/bai-9/index.html` | `7f9adf538f6e2b6c22a9e675b9378112e0096e08` | Real static gh-pages HTML article ~9,077 chars, **0 four-tab markers**, 28 `<code>`, 2 `<img>`, 4 `<details>`, no `arithmatex` |
| [B08/B09 PUBLIC formative JS](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/assets/javascripts/thpt-g11-chiii-b08-b09-source-locked-formative-r03.js) | `ac9b93b1b62d4976fc78a7b1807e87e9cf878448` | **28 unique** IDs, B08 5C+8P=13, B09 5C+10P=15; all `FORMATIVE_ONLY`; actual published HTML references the bank script |
| [Practice hub](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iii/luyen-tap.md) | `1382e31517c3cbc82a5209c1e653f183a79244a1` | Advertises **10 Core + 18 Practice**, source/HTML present |
| [Four shared Written cards](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/thu-vien/tu-luan-g11-chuong-iii.md) | `7642de8c885faaff932a58233bf812a141efcbfc` | W08-01, W08-02-ANCHOR, W09-01, W09-02-ANCHOR; 4 distinct canonical IDs and /4 rubrics |
| [Public self-check entry](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iii/tu-kiem-tra-chuong.md) | `5cadd109625deadc0a31c775382fa7f19b4a0894` | Public **12 item refs**, repeated Practice; no official independently held-out Readiness |
| Chapter III self-check config `docs/assets/data/thpt-g11-selfcheck/CHIII.json` | `ba74db982965c95997603c91b835f93038060934` | `mode=PUBLIC_CANONICAL_REFERENCE_ONLY`; 12 unique Practice refs; `mastery_credit=false`, `independent_readiness_credit=false`, `persist_results=false` |
| Q16 client `docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js` | `295cc4109943b35d289e816678998568fe7dde74` | Static `submitted=false`, reveal answer/solution under `if(submitted)`, CHIII 12 public refs/unique skills, no client outcome persistence |
| Published practice / Written / self-check HTML | `d47f3ef311ea3a6992b8ba9cdf0293bf8410891d` / `ed36c0fdd604ddf4e198877345017c118da3a6cc` / `99118a735fa93bae92581a60fa5afa3246fa731c` | Static HTML read, not actual modal/Final Submit or real-browser click session |

### Figure register: ALL actual SVGs source inspected (not missing/wrong)
- B08 `FIG-G11-B08-01_R01.svg` blob `ef440d8b314bbbf74a21d624843a38577b040876`: four contiguous equal-width bins [0,10), [10,20), [20,30), [30,40), heights **4,8,6,2**, labels and title/desc/alt consistent.
- B09 `FIG-G11-B09-01_R01.svg` blob `84b570e65c5cdf63871be984b2c186508591bce9`: cumulative 4,12,18,20 at right boundaries 10,20,30,40, matches source.
- B09 `FIG-G11-B09-02_R01.svg` blob `9cf54f86f54a81070bfc75a2782c3ab48b1842da`: marks Q1≈11.25, Me≈17.5, Q3≈25, consistent with sample A and axis positions. All 3 have SVG title/desc; **device-scale clarity at 390/820/1440 and screen reader interaction not verified**.

## B. S1 boundaries (do not overstate original PDF access)

**True scope:** SGK Toán 11 Kết nối tri thức **Tập 1**, ChIII. Web text transcription [B08, printed p58–61](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iii-cac-so-dac-trung-do-xu-the-trung-tam-cua-mau-so-lieu-ghep-nhom-3430/bai-8-mau-so-lieu-ghep-nhom-12616.html) has two parent sections **1 Giới thiệu về mẫu số liệu ghép nhóm; 2 Ghép nhóm mẫu số liệu**, and outcomes **đọc/giải thích, tự ghép nhóm**, plus practical estimate from observed sample (e.g. 500 uniforms). Web text transcription [B09, printed p62 onward](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iii-cac-so-dac-trung-do-xu-the-trung-tam-cua-mau-so-lieu-ghep-nhom-3430/bai-9-cac-so-dac-trung-do-xu-the-trung-tam-12638.html) has FOUR official mathematical groups: **mean, median, quartiles, mode**. It also contains the specific `Chú ý` on **integer-discrete interval correction**: a closed integer group `k1–k2` must be transformed into `[k1−0.5;k2+0.5)` before applying grouped-data formulas. Corroboration: [Hoc247 transcription](https://m.hoc247.net/toan-11/bai-9-cac-so-dac-trung-do-xu-the-trung-tam-l13964.html), [Thivien/Haylamdo transcription](https://thivien.org/toan-11-kn/ly-thuyet-bai-9-cac-so-dac-trung-do-xu-the-trung-tam.jsp). **Original publisher-binary visual PDF and printed-page-to-PDF offset were NOT authenticated; neither full SBT nor source-custody has been verified.** Therefore no blanket `Q01_S1_PASS` claimed; specific content comparison below is well corroborated but needs original S1 visual confirmation for final academic acceptance.

## C. New targeted findings (lesson + line + consequence + responsible gate)

### P1 — `G11_CHIII_GOLDEN_FOUR_TABS_SOURCE_AND_PUBLISHED_HOLD`
**B08:** headings at lines **9,17,27,36,61,65**; **B09:** lines **9,17,27,50,85,91**. Both have continuous vertical chapters `Trước khi học → Tự thử → Kiến thức SGK → Ví dụ → Hình → Tự khắc phục`; published HTML zero `data-thpt-golden-tabs`, zero `data-thpt-r4-tabs`, zero actual `tabbed-set` in learner article. The links to Chapter/Practice/Check in the masthead are **not** the four Golden Knowledge tabs. **Q03–Q14/AP1/AP4/owner §X-F**. A genuine distinct `Khám phá kiến thức / Kiến thức SGK / Ví dụ / Lỗi thường gặp` flow should preserve mathematical depth, NOT move paragraphs blindly or call existing continuous layout a Golden pass. A change in explanation pedagogy is a scoped Delta C; formatting/labels equivalent can be Delta A.

### P1 — `G11_CHIII_AP2_UNFORMATTED_FORMULAS`
Published B08 article has **11 `<code>`**, B09 **28 `<code>`**, with **zero `class=arithmatex` or MathJax delimited math** in learner article. Actual source: B08 **31–34** contains `[a_i;a_{i+1})`, `m_i`, `n=Σm_i`, `h=b-a>0` as inline literal/code; B09 **31–45** contains `x_i=(...)`, `Me = L + ...`, `Q_r=...`, `Mo=...` as inline code/text. Loading MathJax CDN ≠ typesetting arbitrary raw code. **AP2/Q03/Q13**; equivalence-preserving formatting needs browser Maths QA and exact output after corrected delimiters; mathematical edits are NOT Delta A.

### P1 — `G11_B09_DISCRETE_GROUP_HALF_UNIT_OUTCOME_HOLD`
The S1 `Chú ý` in grouped mean (§1) explains discrete/integer group label `5–7` → **`[4.5;7.5)`** (same inclusive integer endpoints), to permit correct continuous-width calculations. In B09 source **lines 9–15,31–48** (all teaching), six examples **52–83**, 15 B09 public C/P and both Written W09 there is **no rule, worked illustration or item applying this conversion**. B08 §3 width comments also do not teach discrete endpoint correction. **Q01/Q02/Q03/Q10/Q13**, targeted S1 outcome gap. Add one contextual self-teaching demonstration + justified independent practice through AUTHORING/source locked change *if owner authorizes*. Do not claim the entire B09 mean/median/quartile/mode theory is wrong; existing numerical tasks use already continuous half-open bins and remain valid. **Full S1 visual custodian verification remains pending**.

### P1 — `G11_CHIII_EXAMPLE_TO_PRACTICE_EXPOSURE_HOLD`
B09 source **lines 11–13** and **52–66** solves sample A mean **18**, median **17.5**, quartiles **11.25/25**, mode **50/3≈16.67**, then the PUBLIC B09 **P01/P02/P03/P04** ask **the exact same sample A and exact same results**. **B09 P08** sample C Q3 **70** is disclosed in source **line74**; **B09 C04** median group [10;20) appears already in discovery line13. This is valuable formative retrieval but **no independent transfer** for these item appearances, not fresh Q05 depth/readiness evidence. B08 **C02** repeats the exact boundary query in B08 first try lines **19–23**; B08 **P01** source stem [5,10,10,19,20,29]→[1,3,2] is fully done in HELP **lines67–69**, B08 **P04** 9/20=45% repeats EX3 lines46–48, B08 **P05** missing final 2 exactly done in HELP **line73**. Remedy only by evidence-based outcome/role mapping and distinct progression, avoid re-ID/mutation of canonical stems/keys; **Q05/Q14/Q15**. Canonical source bank `28/28 unique` is a positive and must be protected.

### P1 — `G11_B09_FIRST_TRY_PREANSWER_EXPOSURE`
B09 discovery line **11** already computes `n=20`, line **13** already computes cumulative **4,12,18,20** and states `n/2=10` falls in **[10;20)**. The `Tự thử` in **line19** asks merely `n=?` and “vị trí thứ 10 thuộc nhóm nào?”—both answers fully supplied before the attempt. Its disclosure remains technically hidden in `<details>`, but **the exercise content itself is already spoiled by preceding instruction**. **Q09–Q14/PED6**; reframe a meaningful undisclosed transfer step before expanding `Đối chiếu`, owner learning label `Vận dụng`. This would be a pedagogic Delta C, not a silent Release copy fix.

### P1 — `G11_B09_EX06_INSUFFICIENT_INPUT_FOR_NUMERIC_RESULT`
B09 **lines72–74** “Mẫu C tích lũy [2,7,15,20], Q3 ở vị trí 15 bằng 70 là biên chung” never states the **actual class intervals** defining why that boundary is 70. The number 70 does follow from source **B09-P08** **[40,50), [50,60), [60,70), [70,80)** and frequencies `2,5,8,5`, but an independently readable **worked example** cannot derive 70 from the cumulative frequencies alone. **Q04/Q13/PED5**, self-contained EX or explicit table required. This is an **under-specified example**, NOT a wrong numeric key in B09-P08.

### P1 — `G11_CHIII_FIGURE_TOO_LATE_AND_TABLE_WORKFLOW_SHALLOW`
B08 figure at **line63** after EX 1–4; B09 both figures **lines87–89** after EX 1–6, not beside concept/method formation. Figures correctly portray data (see A), but not placed at conceptual bottlenecks. B08 text EX2 line **44** says build a grouped-frequency table but only gives `[2,3,2,1]` as text, and B08 figure is a bar chart, **not a step-by-step formed table** demonstrating each raw observation-to-bin-to-count. Learners should see a real table and boundary decisions while learning, before trying independently. **Q04/Q07/Q12/AP3–AP4**; preserve each correct SVG and alt, check 390/820/1440 responsive accessibility. Do not invent figure errors.

### P2 — `G11_CHIII_S1_APPLICATION_TRANSFER_DEPTH`
B08 transcribed S1 real-life application estimates uniform-size proportions for a batch of 500 from a sample; current B08 C/P exercises do test grouping and proportions (P04 45%, Written W08-02 50%) but **no analogous scaled production/planning decision**. This is an **opportunity for substantive transfer**, not a claim that B08 has no application or that all SBT problems are mandatory. **Q02/Q05** targeted only if full S1 outcome matrix confirms material gap.

### P2 — `G11_CHIII_STUDENT_UI_TECHNICAL_TEXT`
Both source and published B08/B09 visible headings line **17** still say **“Tự thử trước khi luyện tập”** instead of owner-approved **“Vận dụng”**. Student-facing HELP links display raw canonical `THPT-G11-B0x-...` (B08 **69,74,79**, B09 **95,100,105**); Written card visible `<h2>` labels are technical IDs `THPT-G11-CHIII-W08-...`, not learner titles. B08/B09 HELP paragraphs use semicolon-period punctuation `.;` in mini-step strings, hard to scan; the method selection bullets live **after** all EX rather than beside each EX (B08 **54–59**, B09 **76–83**), despite substantively correct method ideas. **Q08/Q13/Q14/AP4**. Safe label/display Delta A where math unchanged, formal example-reasoning enrichment Delta C if actual explanation changes.

## D. Actual math check: 28 source records + 4 Written + diagrams

**28/28 unique PUBLIC C/P stems, supplied solutions, and conditions inspected/recomputed** (B08 5 Core+8 Practice; B09 5 Core+10 Practice). **No incorrect mathematical answer observed in these source records.** B08 grouped cases [5,10,10,19,20,29]→[1,3,2], grouped percentages 9/20=45%, 20-(4+8+6)=2; B08 P06 distinguishes [1,2] from [2,1] as stated. B09 A: `mean 360/20=18`, `Me=10+(10-4)·10/8=17.5`, `Q1=11.25`, `Q3=25`, `Mo=10+4/6·10=50/3`; B09 B: weighted sum `400/20=20`, `Me=20+5/9=185/9`; C: `Q1=56,Q3=70`; equal-bin frequencies [7,7,7,7] no single mode per cited SGK convention. Uniqueness `28/28` verified in parsed JS. This is a **source math check**, not a new NotebookLM/Academic PASS or full Q01/Q02 S1 certification.

**4 Written /4 rubrics independently rechecked:** 
- `W08-01` bins of 12 raw scores → **[3,5,3,1]**;
- `W08-02-ANCHOR` 12/24=**50%**, midpoint 22.5 is not every person's real time;
- `W09-01` weighted **116/20=5.8**, interpolation `Me=6` at shared right endpoint, correctly described as estimated;
- `W09-02-ANCHOR` `Q1=110,Q3=120,Mo=685/6≈114.17`, correct after checking 5/(5+7)×10. **Anchor is only a role, not a second canonical bank**. Rubrics correctly score /4; no automatic Written marking or Mastery.

## E. Self-check Q16 — source-only no-leak boundary, NOT runtime PASS

The **public** ChIII self-check is 12 existing practice items from source-locked `CHIII.json`, 12 unique skills, `PUBLIC_CANONICAL_REFERENCE_ONLY`, `mastery_credit=false`, `independent_readiness_credit=false`, `persist_results=false`, `public_client_answer_keys=true`. JS `submitted=false` until `Final Submit`; rendered correctness/answer/solution only under `if(submitted)` (JS lines **99,161–174,179–200**); CHIII bank/ID/role validations **329–347** reject non-public/unexpected data. **This is not independent held-out `SGK_CHAPTER_READINESS` and not system-graded free text.** No browser clicking, dom/event-state tracing, 390/820/1440 QA, Safari P2, protected RD1 inspection, Gemini suppression verification, or official no-leak runtime PASS has been performed. Source contains no new private RD1 stems/keys/rubrics in this audit.

## F. Checkpoint / next action

`SOURCE_G11_CHIII_B08_B09=READ` · `PUBLISHED_HTML_STATIC=READ` · `28_PUBLIC_IDS_AND_SOLUTIONS=RECOMPUTED_NO_WRONG_KEY_OBSERVED` · `4_WRITTEN=RECOMPUTED` · `3_REAL_SVG=MATHEMATICALLY_CONSISTENT` · `Q16_SOURCE_GUARD=LIMITED_STATIC_REVIEW` · `S1_ORIGINAL_PDF_OFFSET=UNVERIFIED` · `P1_GOLDEN_AP2_Q02_Q14=OPEN` · `BROWSER_P1_P2=NOT_ACCEPTED` · `OWNER_QUALITY_HOLD=YES`.

**Deep source-audit progress under Issue #795:** Toán 10 B01–B27 (27), Toán 11 B01–B04 (4), B05–B07 (3), **B08–B09 (2) = 36/79** across THPT. **Do not represent 36 as Academic+PED full PASS, four-tab browser PASS or RELEASE acceptance.** Continue with Toán 11 ChIV B10–B14, while retaining each existing blocker and no new work in AUTHORING without owner scope.

**NO CONTENT EDIT · NO PR MERGE · NO WEBSITE DEPLOY · NO STUDENT/MASTER/PRIVATE RD1 WRITE.**
