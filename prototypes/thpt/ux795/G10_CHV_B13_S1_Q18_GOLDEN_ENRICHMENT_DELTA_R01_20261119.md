# G10 SGK ChV · B13 — ENRICHMENT DELTA RECEIPT · R01 · 19/11/2026

**RECEIPT_ID:** G10-CHV-B13-20261119-GOLDEN-SELF-STUDY-R01  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0, Q01–Q18 (no second academic standard)  
**SCOPE:** `G10-B13` only, SGK ChV *Các số đặc trưng đo xu thế trung tâm*; B01–B12 owner-approved unchanged; B14 not opened.  
**STATE:** `CONTENT_MATH_PED_SOURCE_SELF_VERIFIED_PASS / RELEASE_CANDIDATE / NOT_MERGED / NOT_DEPLOYED / NOT_OWNER_P2_PASS`. Đây là verdict **tự kiểm chứng thực chất theo X-C/X-E** của RELEASE, không phải reviewer độc lập/NotebookLM và không tự cấp P2.  
**S1:** SGK Toán 10 KNTT tập 1, Bài 13 trang in 78–83, các mục §1 Số trung bình và trung vị / §2 Tứ phân vị / §3 Mốt. Phạm vi và cách tính đã kiểm qua đối chiếu nguồn học liệu gốc, bản số hóa SGK và nguồn SGK đối chiếu [SGKVN](https://www.sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-v-cac-so-dac-trung-cua-mau-so-lieu-khong-ghep-nhom-3101/bai-13-cac-so-dac-trung-do-xu-the-trung-tam-11213.html), [SGK247](https://www.sachgiaokhoa247.com/sach-giao-khoa/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-v-cac-so-dac-trung-cua-mau-so-lieu-khong-ghep-nhom-3101/bai-13-cac-so-dac-trung-do-xu-the-trung-tam-11213.html) và bản PDF facsimile ở mirror [metaisach](https://media.metaisach.com/2025/09/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-7ff1b316.pdf). **Nội dung, phạm vi và quy ước Q01 đã đủ bằng chứng; chỉ số trang PDF/độ lệch do bìa không trực tiếp xác minh được** nên khai báo giới hạn truy xuất, *không* biến thành lỗi toán hay điều kiện P0/P1. Chưa đọc trực tiếp SBT gốc: `SBT_REFERENCE_GAP_DOCUMENTED`, không coi thiếu tham khảo SBT là thiếu SGK Core. Không tự nhận bản mirror là PDF do NXB cung cấp.  
**Q18_REVIEW:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` theo chuẩn v3.2.0 §X-C / §X-E; RELEASE tự kiểm chứng lại nội dung, kết quả toán, điều kiện, mạch tự học và các item hiện hành trước khi ký. **Không yêu cầu NotebookLM mặc định**, không mạo nhận `INDEPENDENT_REVIEW_PASS`. Các chứng cứ cụ thể và kết luận cho từng outcome bên dưới.

**BASELINE_LESSON_GIT_BLOB:** `0459b67858246cb6136cf9a2cf9e7a7d18bd27be`  
**CANDIDATE_LESSON_GIT_BLOB:** `0db04669163a4436fb893eac8644694c82d8efb4`  
**CANDIDATE_GOLDEN_CSS_BLOB:** `a4fa446f5437ae5054627700434fb101524827c4`  
**G10_B01_B12_FROZEN_CSS_BLOB:** `aac2ad16261382987ea0fbb47ceee0987c5f9631`  
**ACADEMIC_PED_REVIEW_STATE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT_PASS`  
**S1_AUTHENTIC_PDF_STATE:** `S1_SCOPE_MATH_CONVENTION_VERIFIED / PDF_INDEX_NOT_VERIFIED_NON_BLOCKING / SBT_REFERENCE_GAP_DOCUMENTED`

**DELTA_A_UI_NAVIGATION_R02:** Replaces broken five Markdown navigation references only, from prior B13 learner Git blob `d15c561b281986f3e122dcaba1a25ccf0046fda7` to current canonical `e24e90017fa372c3ec2b1677e4823b222c2cea17`; no statistical definitions, examples, five first-tries, HELPs, Core/Practice question bodies or assessment state changed. This is a navigation-path correction inside the broader original `DELTA_C_ACADEMIC_MATERIAL_AFFECTED_REVIEW_HOLD` candidate, **not** a claim of independent academic PASS. The original B13 baseline `0459b67858246cb6136cf9a2cf9e7a7d18bd27be` remains immutable.

**DELTA_C_DOMAIN_CLARIFICATION_R03:** B13 Knowledge §2.2 now explicitly states the **existing mathematical domain** of the SGK half-splitting method \(n\ge2\). For \(n=1\), no nonempty lower/upper halves exist and \(Q_1,Q_3\) are not defined **by this method**; the median \(Q_2\) and mean can still be defined. No existing item, Q1/Q2/Q3 result for n≥2, SVG, answer/rubric, exposure, or CSS modified. After 5-link delta, current Git blob `0db04669163a4436fb893eac8644694c82d8efb4`; source lock is exact. This repairs an unspoken hypothesis rather than changing the authorized SGK quartile convention.

## CURRENT R02 — Q18 self-verification with substantive proof, 19/11/2026

**VERIFICATION_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` (not `Q18_INDEPENDENT_REVIEW`). **AUTHOR_SIGNOFF:** `ChatGPT / RELEASE, scope G10-B13 Knowledge enriched`; **P0=0; P1=0** for the checked pedagogical/mathematical candidate, **Q01/Q02/Q03–Q14/Q15–Q18 as applicable = PASS_SELF_VERIFIED** on **only** the current B13 learner blob `0db04669163a4436fb893eac8644694c82d8efb4`. This is *not* a claim about additional 67 SGK lessons or Topic, and does not bypass independent RELEASE AP/R/CI/owner P2.

### Outcome-by-outcome S1, mathematics, PED and canonical exercise coverage

| LESSON/OUTCOME | S1 scope / concept and prerequisites | Independent math verification, method and boundary | Teaching/self-study and remediation | Existing Q15 roles/items; verdict |
|---|---|---|---|---|
| G10-B13 / MEAN | SGK §1; data count n≥1, sum, repeated values and frequency weights | `TRY05`: (2+4+4+10)/4=5; Example 3.1 sum49/n7=7; Example 3.2 sum49/n6=49/6; Example 3.3 (3·1+4·2+8·3+10·2)/8=55/8=6.875. `P01` freq 2·2+4·3+8·1=24, n=6 →4. **Do not divide by 4 distinct table columns.** | §1.2.1 explains redistributing sum before §2.1 formal; §3.3 has 4 worked steps; D6 §4.2 and `TRY05` route to existing `C01`/P01 | C01/P01 (unchanged), first TRY05 → **PASS** |
| G10-B13 / MEDIAN | SGK §1; sort values, odd one central observation, even mean of two central positions | `TRY06`: sort (2,5,9,12), Q2=(5+9)/2=7; `C02`: sort (1,2,4,8,12), Q2=4; Ex3.1 Q2=6 at index4; Ex3.2 Q2=(7+9)/2=8; `W13`: sorted n10 central positions 5,6 both 3 →3. | §1.2.2 positional intuition before §2.1; Ex3.1/3.2 compare both parity branches, D6 §4.1, TRY06→C02 | C02, W13 shared written, TRY06 → **PASS** |
| G10-B13 / QUARTILES | SGK §2; **KNTT convention excludes only central observation if n is odd**; duplicates remain separate positions | D5 data (2,3,3,7,10): Q1=2.5,Q2=3,Q3=8.5. `TRY07` n7 (1..7): Q=(2,4,6). Ex3.1 sorted (4,5,6,6,7,9,12): Q=(5,6,9). Ex3.2 sorted (3,5,7,9,11,14): Q=(5,8,11). Ex3.3 expanded (3,4,4,8,8,8,10,10): Q=(4,8,9). `P02` n6 (1,3,4,8,9,10): Q=(3,6,9); `P05` n7 (1,2,3,4,6,8,9): Q=(2,4,8); `W13`: Q=(2,3,3). All checked Q1≤Q2≤Q3. | §1.2.3 D5 original SVG guided by text; visible at concept before §2.2 four-step procedure; mobile internal scroll. Examples cover repeated observations, odd/even, frequencies. D6 §4.1 and TRY07→P02, HELP01→P05 | P02/P05, W13, TRY07, HELP01 → **PASS** |
| G10-B13 / MODE | SGK §3; mode = maximum frequency; multiple tied maxima allowed when at least one lesser frequency; **all distinct values same frequency ⇒ no selected mode by KNTT convention** | `TRY08` (2,2,3,3,5) → modes 2,3. `P03` (1,1,3,3,5,7) → modes 1,3. Ex3.1 mode6, Ex3.2 all unique⇒no mode, Ex3.3 freq(8)=3 is unique highest⇒mode8; W13 freq3=4 (highest)⇒mode3. Clarifies mode is not the numerically largest value. | Clothing size story §1.2.4, formal §2.3, Example 3.3 frequency comparison, TRY08/D6 §4.2→P03 | P03, TRY08, HELP02 → **PASS** |
| G10-B13 / INTERPRETATION | SGK learning outcome select representative; compare mean vs robust median under extreme observations; retain all real data | `TRY09` (4,5,6,7,28): mean50/5=10 vs median6; `P04` (4,5,5,6,30): mean50/5=10 median5; `P06` A=(6,7,8,9,10) mean8 median8, B=(6,7,8,9,30) mean12 median8; Ex3.4 (5,6,6,7,100) mean124/5=24.8 vs median6; replacing 100 by 200 increases mean100/5=20, median unchanged. `W13` replacing one 4 by 20 changes sum27→43, mean2.7→4.3, median remains3. Median resists an extreme high **when its sorted central positions remain unchanged**; not an absolute claim of immunity under every data modification. | §1.1 why one number insufficient; §1.2.5 choose method, Ex3.4 states why median for typical wait but mean for total, TRY09→P06/D6 §4.2 | P04/P06, W13, TRY09 → **PASS** |

### Pedagogical Q09–Q14 / D1–D6 / Q15–Q18 challenge tests

- **PED1 Why learn / PED2 prerequisites:** §1.1 comparison of distributions and §1.2.1–1.2.5 each identify prerequisites (sum, sorting, frequency, middle positions). Five distinct user outcomes supported, not a raw count of formulas.
- **PED3 concept-before-formula / PED4 read figures:** tab1 builds a concept before Tab2 definitions and cards; §2.2 now explicitly says n≥2 for two nonempty halves, n=1 has no Q1/Q3 under the stated method; D5 figure verified SVG `acaf49296892e35c48fb2b4a5b335a7d26643336`, data and Q1–Q3 independently recomputed; no fake number-line equal-interval assumption, duplicate observations highlighted.
- **PED5 explain method and limits / D2:** Ex3.1 odd, Ex3.2 even, Ex3.3 weighted table, Ex3.4 outlier each has *Phân tích → Bước 1..4 → Kiểm lại*, plus limits of representative and other percentile conventions. All four source-authored, original bank questions remain one canonical source.
- **PED6 independent first attempt / D6:** original TRY05..TRY09 prompted **before** original source-closed `??? question "Đối chiếu"`; correct mathematical solution and targeted repair link in each. HELP01, HELP02 describe symptom → mathematical reason → corrective steps → existing canonical Core/Practice. Five repaired *Markdown* navigation links now resolve in Roadmap checker; original five HTML First Try links remain. No key revealed prior to independent chapter Final Submit.
- **Q15/Q16/RD1:** 8 public `FORMATIVE_ONLY` records (C01/C02/P01–P06), one W13 ungraded self-comparison with rubric, SVG and original five TRY and two HELP unchanged; reviewed R01 bank SHA `ddd5ec947029f644865110f2f381047214499e3e`; no duplicate answer/key or new RD1 items. The public `CLIENT_SELF_CHECK_NO_MASTERY` is distinct from protected chapter Readiness/Final Submit; Firebase, THCS and G11/G12 unaffected.
- **S1 scope vs physical PDF pagination:** current S1 witness identifies correct Book/volume, 78–83 printed, §1/§2/§3 and quartile/mode conventions. 1-based PDF index and cover offset remain unverified, strictly **provenance-only non-blocking**. No assumption about SBT questions not seen: `SBT_REFERENCE_GAP_DOCUMENTED`. If a contradictory verified S1 Core definition emerges, reopen only affected outcome as Q01 material defect, not the full chapter.
- **P0/P1 risk check:** independently recomputed all five TRY, four examples, eight Core/Practice and W13 including edge cases odd/even/tied modes/unique modes/duplicate median/outliers. No incorrect maths, ambiguous missing hypothesis, grade-10 S1 scope drift, contradictory SVG, wrong original key/rubric or Q16 exposure detected. **AUTHOR/RELEASE SELF SIGNOFF = PASS** for *B13 source mathematical/pedagogical delta only*; do not convert browser/CI PASS into academic proof or conflate with owner P2.

**Three independent release gates remain:** `CONTENT_MATH_PED_SOURCE=PASS_SELF_VERIFIED`, `ASSESSMENT_DATA_SAFETY=VERIFY_AT_FINAL_HEAD`, `RENDER_RELEASE_QA=VERIFY_AT_FINAL_HEAD`; merge/deploy/owner device-P2 separate and still permission-gated. No requirement for extra NotebookLM or PDF-cover-offset receipt when S1 scope and mathematics are established.

---

## Canonical and immutable source custody

| Role | Path / evidence | Git blob SHA |
|---|---|---|
| Frozen baseline B13 public Knowledge | `docs/thpt-preview/sgk/chuong-v/bai-13.md` on `main=f4d97fac0a3535dee8c31a8a682db5f4d6e523e1` | `0459b67858246cb6136cf9a2cf9e7a7d18bd27be` |
| **One active B13 candidate learner Knowledge** | same exact path on `release/g10-b13-central-tendency-upgrade-20261119`; **not cloned into a competing Markdown source** | `0db04669163a4436fb893eac8644694c82d8efb4` |
| Previously owner-accepted G10 B01–B12 CSS prefix | `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css` frozen main | `aac2ad16261382987ea0fbb47ceee0987c5f9631` |
| B13 **only** CSS Golden palette appended | same CSS path, exact signed candidate; previous prefix remains byte-identical | `a4fa446f5437ae5054627700434fb101524827c4` |
| B13–B14 canonical public bank (unchanged) | `docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js` | `ddd5ec947029f644865110f2f381047214499e3e` |
| Original reviewed D5 B13 quartile SVG (unchanged) | `docs/assets/images/thpt/THPT_G10_B13_QUARTILES_D5_R01.svg` | `acaf49296892e35c48fb2b4a5b335a7d26643336` |
| Frozen authoring R01 (unchanged, NOT candidate) | `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md` | `49502fe39cf0a67f6a3e973a77f94164150637a7` |

## Exact affected lesson/outcome and evidence map

- **LESSON_ID:** `G10-B13`. `G10-B12` and other owner-signed lessons unchanged.
- **Outcome 1 — Mean and frequency weighted mean:** Knowledge §1.2.1 and §2.1; 3.3 demonstrates eight actual observations rather than averaging four distinct values; formative `THPT-G10-B13-C01/P01` unchanged.
- **Outcome 2 — Median, odd/even sample:** Knowledge §1.2.2 / §2.1; examples 3.1 / 3.2 explain sorted indices and even center positions; `C02` unchanged.
- **Outcome 3 — Quartiles per KNTT:** §1.2.3 with original D5 figure moved next to conceptual explanation; §2.2 stepwise rule; examples 3.1/3.2/3.3 verify `Q1≤Q2≤Q3`. **Odd n excludes only the observation at the central position, not all repeated equal-value observations.** Canonical `P02/P05` unchanged.
- **Outcome 4 — Mode and ties/no distinct mode:** §1.2.4 / §2.3 and examples 3.1–3.3; canonical `P03` unchanged.
- **Outcome 5 — Choose and interpret a representative:** §1.2.5 and 3.4 distinguish outlier effect on mean vs median; canonical `P04/P06` unchanged.
- **Public 8 IDs** = B13 `C01,C02,P01,P02,P03,P04,P05,P06`; exactly one previously canonical `W13` Written question, not cloned. All original questions, keys, options, solutions, rubrics, roles, difficulty and Q15 IDs in bank/Written **unchanged**.
- **First Try / learner self-application 5**: original `THPT-G10-CHV-TRY05..TRY09` IDs, prompts and comparison held in same five original sections; only visible label `Em tự thử` → owner-prescribed `Em vận dụng` and D6 recovery pointers corrected. Voluntary compare is distinct from protected Final Submit.
- **D6 two HELP IDs**: `HELP-G10-B13-01/02` preserved, headings 4.1/4.2 and links go to real Knowledge §1.x/§2.x and real existing canonical practice. No fake section names or developer IDs in visible prose.
- **D1–D6/PED1–PED6 meaningful change:** Concept motivation/why choose→graded examples with multi-step explanation→D5 guided diagram→pre-Core learner attempts→specific D6 remediation. Four separate examples: seven-value odd sample, six-value even sample, eight-observation frequency table, robust median under extreme value. **Not** the solved D5 sample `2,3,3,7,10`. Four formal teal cards and one blue quartile method rule, aligned B10/B12 Golden.
- **Q16/Q17:** Chapter END, client self-check, public bank roles, Mastery, independent RD1 custody, learner storage and Firebase unchanged; no hint/AI Tutor/answer-key reveal policy changed; no separate Topic path altered.

## Recalculated math spot proofs (not a reviewer verdict)

- EX3.1 data sorted `4,5,6,6,7,9,12`: sum=49, mean=7, median=6, Q1=5, Q3=9, mode=6.
- EX3.2 sorted `3,5,7,9,11,14`: sum=49, mean=49/6, median=8, Q1=5, Q3=11, all unique ⇒ no mode according to declared SGK convention.
- EX3.3 frequency rows `x=[3,4,8,10], m=[1,2,3,2]`: n=8, weighted sum55, mean55/8, sorted `3,4,4,8,8,8,10,10`, Q1=4,Q2=8,Q3=9,mode8.
- EX3.4 five waits `5,6,6,7,100`: sum124, mean24.8, median6; changing 100→200 increases mean20 and leaves median6. Original 5 First Try keys and 8 formative answers unchanged.

## QA gates to close before student publication

1. **CONTENT / REVIEW (R02 done):** Q18 self-verification completed with recomputed outcomes, conditions, SGK S1 scope/convention and pedagogy. PDF index/offset and absent SBT references are recorded as provenance limitations, **not** Academic HOLD. If new contradictory verified Core mathematics appears, reopen affected outcome as `Q01_SOURCE_CONFLICT_HOLD` with evidence; do not impose an unapproved page-index gate.
2. **Golden / browser:** `test-g10-chv-b12-b14-golden-preview-browser.cjs` checks 390/820/1440, first-try count, **four B13 worked examples**, MathJax, B10 actual computed teal/blue/neutral palette, pan/real decode of original quartile D5 in **Tab1**, 2 D6 and Q16. `test-thpt-g10-chv-b13-b14-release-integration.cjs` preserves R01 bank and figure. `test-thpt-sgk-editorial-theme-preservation.cjs` locks owner B01–B12 CSS prefix and B13 full signed candidate with negative mutation.
3. **Release:** exact final PR HEAD CI; verify no other B01–B12 page, HTML, JS source changed, and CSS B01–B12 prefix SHA unchanged. Any failed browser/MathJax/computed palette remains `BLOCKED_BY_RELEASE`. Merge/deploy only with separate explicit owner permission and complete gates; P1 then owner P2 on real device; do not open B14 before B13 owner acceptance.

**Original audit source:** historical commit `f44c6c7fa6c3108ad96e928e131fe769581f822d`, `G10_CHV_B12_B14_DEEP_S1_PED_PRACTICE_WRITTEN_AUDIT_R01_20261114.md`, findings `CHV-B13-01..03`. **R02 supersedes R01 academic hold with signed `Q18_OWNER_SELF_VERIFIED_ENRICHMENT_PASS` for B13 only. It does not claim an independent reviewer PASS.**
