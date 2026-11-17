# AUTHORING · Math Lab CĐ21–CĐ22 · executed-source QA R01

**DATE:** 2026-11-17  
**STANDARD:** `SLM-THPT-QUALITY-ONE v3.1.0`, Q01–Q18  
**MODE:** preliminary `AUTHOR_SELF_VERIFIED` static/numeric evidence — NOT full Q18 author clearance, NOT NotebookLM independent review.  
**SOURCE:** `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_TOPIC21_TOPIC22_SHARED_MATH_LAB_R01_20261117.html`  
**SOURCE_BLOB:** `12c51bce313ed32da7907af1ea42f0bed4f20f4e`.

## Results executed against exact source

- `STATIC_SOURCE_CHECKS=PASS`: 2 named canonical models, 2 `PUBLIC_DISCOVERY_NO_MASTERY` roles, 38 unique HTML IDs, no external JS/CSS, no storage/scoring API, responsive/focus/aria-live, edge-case 7 identical dot chart viewbox fix.
- `BAYES_NUMERIC_CASES=22050 PASS`: prior 1–99% with 2% step, conditional rates 0–100% with 5% steps. Valid total probability 0..1, posterior 0..1 if denominator positive, undefined otherwise. Reference `P(L)=0.034`, `P(X|L)=3/17≈0.17647`. Both rates 0 ⇒ `P(L)=0`; no division by zero.
- `STATISTICS_NUMERIC_CASES=4004 PASS`: deterministic raw integer 7-observation sets, invariant mean within range, `Q1≤Me≤Q3`, nonnegative range, source-equivalent KNTT odd-n quartile policy. Reference `2,2,3,4,5,5,20` ⇒ mean 41/7, Me 4, Q1 2, Q3 5, IQR 3, range 18. All-identical case checked.
- `FINDINGS=0` for this **numeric/static scope**. This **does not verify browser render or pedagogy independently**.

## Open gates (not PASS)

- `G0`: map CĐ15/17/18/19/20 exact outcome IDs from signed handoffs; CĐ17 HTML missing embedded MODEL_ID, alias is provisional.
- `G1`: complete Q18 author-self-verification of D5/PED1–PED6 on new models, including source S1 receipt, model-to-outcome placement and fallback learning narrative. If uncertainty remains, targeted independent review.
- `G2`: CSS parity 22/22 with Golden R4; old HTML assets across Draft PRs have differing local CSS and must be normalized without altering frozen math.
- `G3`: Chromium 390/820/1440, offline, keyboard, touch, reset, tabbing, focus, labels, output and SVG/Canvas clipping. **NOT_TESTED** here.
- `RELEASE`: AP1–AP5/R1–R5, iPad/iPhone Safari, Final Submit safety, exact combined HEAD CI and owner merge/deploy authority are separate, **NOT_STARTED**.

**Scope invariant:** no existing 22 Topic academic sources, public Q15 item bank, protected RD1, Firebase, Mastery or website code changed. No CONTENT_READY claimed for the interaction models.


## R03 · TARGETED Q14/PED6 SELF-QA — First Try before solution (17/11/2026)

- **SOURCE_BLOB:** `5926ccb91237a9de4a18e8e21bab0204f05d31ac` · **SOURCE:** existing `Temp_THPT_TOPIC21_TOPIC22_SHARED_MATH_LAB_R01_20261117.html` on Draft #880; no second learner/model source.
- **MODE:** `Q18_AUTHOR_SELF_VERIFIED_AFFECTED_SCOPE`, Q14 (first-try before reveal), Q07 (unchanged formulas/graphics), Q15/Q16 (public exploration; no canonical assessment change), Q18 (SHA recorded). **Not independent NotebookLM verdict.**
- **Affected placements:** CĐ21 `TOP21-O05/O06/O07/O08`; CĐ22 `G10-B13-MEAN/MEDIAN/QUARTILES`, `G10-B14-RANGE_IQR/OUTLIERS`.
- **Confirmed P2/PED defect in previous SHA `918088d1...`:** both `Vận dụng · Đối chiếu` disclosure boxes held **both** the voluntary first-try question and worked solution; opening the box to read the question exposed its answer at once.
- **Single-source fix:** display the two questions as `Vận dụng · Tự thử trước` paragraphs, outside disclosure; leave the exact existing worked solutions inside independent `<details><summary>Đối chiếu sau khi tự thử</summary>...` boxes. Do not clone model or canonical items.
- **Executed source checks on current SHA:** `MODEL_ARTICLES=2/2`; `FIRST_TRY_PRECEDES_DISCLOSURE=2/2`; `SOLUTION_ONLY_INSIDE_VOLUNTARY_DETAILS=2/2`; `DETAILS_COUNT=2`; `SCRIPT_BYTE_EQUIVALENT_TO_PRE_R03=PASS` established at transformation; no change in CSS, SVG drawing, slider ranges, text of mathematical solution, MODEL_ID or `PUBLIC_DISCOVERY_NO_MASTERY`.
- **Mathematical spot check of unchanged values:** CĐ21 baseline `P(L)=0.034, P(X|L)=3/17`, application `P(L)=0.038, P(X|L)=12/19`, both error rates zero ⇒ posterior undefined. CĐ22 `2,2,3,4,5,5,20`: total 41, mean 41/7, median 4, Q1=2, Q3=5, range=18, IQR=3, upper fence=9.5.
- **Receipt verdict:** `AFFECTED_Q14_PED6_SOURCE_DELTA_PASS` for these **two disclosure sequences only**; no new P0/P1 found in changed scope. `G1_FULL_MATH_PED=S1_AND_OUTCOME_CHECK_PENDING`; `G2_VISUAL=OPEN`; `G3_BROWSER=OPEN`; `G4_HANDOFF=OPEN`; `CONTENT_READY=NO`; `RELEASE_AUTHORIZATION=NO`.


## R04 · Q03/Q10/Q14 student prose cleanup — affected-scope author QA (17/11/2026)

**CURRENT SOURCE BLOB** `33632fdf8743b5526b925e8c9f393397bb04d943` (same existing Math Lab HTML on Draft #880). R01 pre-CSS numeric tests and R03 disclosure changes remain historical, not re-claimed as complete new math or browser tests.

- **Original defect:** learner sees internal `TOP21-O05/O06/O07/O08`, `G10-B13-...`, `RD1`, `Mastery` in two model headers/footers. These are author/assessment metadata, not explanations needed for study.
- **Corrections in place:** CĐ21 header now names probability topics; CĐ22 header names mean/median/quartiles/outliers; two notes explain that students explore and compare without formal scoring. Four public text lines changed; private assessment semantics not touched.
- **Source checks:** `VISIBLE_TECHNICAL_METADATA_4_TOKENS=0`, `FIRST_TRY_BEFORE_OPTIONAL_REVEAL=2/2`, `REVEAL_LABELS=2/2`, `JAVASCRIPT_BYTE_PARITY_R03_TO_R04=PASS`; MODEL_ID attributes/canonical registry, SVG and formulas not changed.
- **Signed scope:** `Q18_AUTHOR_SELF_VERIFIED_AFFECTED_SCOPE` for Q03/Q10 learner prose and Q14 continuity. `DELTA_B_SOURCE_EQUIVALENT` for four user-facing text changes; no independent reviewer claimed. **Full G1 source/S1/outcome/maths/PED review remains OPEN**, as do G2 actual visual QA, G3 browser/touch/offline and G4 handoff; `CONTENT_READY=NO`, `NO_MERGE_DEPLOY`.
