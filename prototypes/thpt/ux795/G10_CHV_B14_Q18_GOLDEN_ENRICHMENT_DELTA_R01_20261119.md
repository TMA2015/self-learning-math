# G10 Chương V · Bài 14 — RELEASE Knowledge Q18 enrichment · 19/11/2026

**RECEIPT_ID:** G10-CHV-B14-Q18-OWNER-SELF-VERIFIED-ENRICHMENT-R01-20261119  
**STANDARD_ID:** SLM-THPT-QUALITY-ONE · **VERSION:** 3.2.0 · **MODE:** Q18_OWNER_SELF_VERIFIED_ENRICHMENT  
**LESSON_ID:** G10-B14 · **LEARNING_PATH:** SGK_CHAPTER · **SCOPE:** existing published Knowledge only, owner approved continuing lesson-by-lesson  
**BASE_MAIN_SHA:** 5f26e2affb8a3e741dd3203d6c26b2e9a8647123  
**BASELINE_LESSON_GIT_BLOB:** `21c1ef59277f742b45a27900b173fac031a4a04f`  
**CANDIDATE_LESSON_GIT_BLOB:** `7538771fdaede3de14143090db35e74a3c7939ff`  
**G10_B01_B13_FROZEN_CSS_BLOB:** `a4fa446f5437ae5054627700434fb101524827c4`  
**CANDIDATE_GOLDEN_CSS_BLOB:** `bda67d4ed6368179c5a8c9e0a368e149304ab71c`  
**HISTORICAL_CHV_EDITORIAL_RECEIPT_BLOB:** `37c966224d86af61dc5806cbd6b76aa81e5b8e6b`  
**HISTORICAL_R01_AUTHORING_SOURCE_BLOB:** `49502fe39cf0a67f6a3e973a77f94164150637a7`  
**PUBLIC_BANK_FORMATIVE_BLOB:** `ddd5ec947029f644865110f2f381047214499e3e`  
**ORIGINAL_DISPERSION_SVG_BLOB:** `98ab8375e496468e8f7fbc79f6cacc03d08a4645`  
**EXISTING_BOXPLOT_SVG_BLOB:** `60627e01f44dcf1e4c8e4aab5ec9617bece28888`  
**S1_REFERENCE:** Toán 10 Kết nối tri thức với cuộc sống, tập 1, Bài 14, SGK printed pp. 84–88; official headings §2.1 range/IQR, §2.2 variance/SD, §2.3 outliers/boxplot, supported by historical signed ChV source receipt. PDF page **index not independently re-verified in this RELEASE turn**.
**SBT_REFERENCE_GAP_DOCUMENTED:** No new claim of SBT PDF page inspection; historical AUTHORING R01 references SBT pp.78–80. 
**REVIEW_MODE_PROVENANCE:** not an independent NotebookLM round, not a new CONTENT_READY handoff. Applies only to eligible existing published Knowledge §X-C, preserving earlier authoring receipt.
**STATUS:** Q18_OWNER_SELF_VERIFIED_ENRICHMENT_PASS on candidate-source mathematics and pedagogical reasoning; AP/R1–R5 exact-HEAD CI, P1 deploy and physical OWNER P2 are distinct gates; NOT_MERGED / NOT_DEPLOYED at receipt creation.

## G0 · Exact affected-scope ledger

| DELTA_ID | OUTCOME_ID | Source / S1 claim and preserved conditions | Math verification on candidate | Pedagogical verification | severity |
| --- | --- | --- | --- | --- | --- |
| B14-XC-01 | G10-B14-RANGE_IQR | 2.1 semantic definition, R=max−min≥0, IQR=Q3−Q1≥0; quartiles KNTT only with nonempty halves | EX01 sorted 2,4,6,8: n4, mean5, min2 max8 R6, Q1=3 Q3=7 IQR4 | Discovery §1.2.1 before formal formula; example explicitly separates min/max vs median-of-halves and checks 2≤3≤7≤8 | P0=0 P1=0 |
| B14-XC-02 | G10-B14-VARIANCE | s²=(Σ(x−mean)²)/n for descriptive list, n≥1; original explanatory n−1 note retained for n>1; unchanged canonical | EX01 deviations −3,−1,1,3 squared 9,1,1,9; s²20/4=5; EX02 A s²2/3, B32/3; B variance 16× A | Four steps with WHY squaring and dividing n; not claiming better group from variance; TRY11 now points to real §1.2.2 / §2.2 | P0=0 P1=0 |
| B14-XC-03 | G10-B14-STDDEV | s=√s², s≥0, original units/alternative variance note preserved | EX01 s=√5≈2.236; same km/kg unit rule as original; TRY12 2,2,6,6 gives variance4 and SD2 unchanged | Definition and unit immediately adjacent; TRY12 directs real §1.2.3 / §2.2, P05 | P0=0 P1=0 |
| B14-XC-04 | G10-B14-OUTLIERS | Strict x<Q1−1.5IQR OR x>Q3+1.5IQR; equal fence not flagged; no automatic deletion | EX03 1,2,2,3,3,4,4,20: Q1=2 Q2=3 Q3=4 IQR2, fences −1/7, only 20>7; existing figure sample 1..8,20 fences −5/15 untouched | Steps compute quartiles, fences and compare data, mention distinction outlier vs bad data; TRY13 directs real §1.2.4 / §2.3 P03 | P0=0 P1=0 |
| B14-XC-05 | G10-B14-COMPARISON | Original two equal-mean groups A=(4,5,6), B=(1,5,9) preserved | Both means 5, s² A=2/3 B=32/3, B more dispersed (not universally worse) | Example starts with problem, reason for method, explicit steps and check; TRY14 points real §1.2.5 / §2.2 P04 | P0=0 P1=0 |

**Q01–Q02:** original S1 chapter/outcomes remain exactly the same five; no new scope/family.  
**Q03–Q08:** valid formal roles 3 teal definitions, 1 blue rule; original two SVG placements and 2 D6 IDs unchanged; three existing EX-G10-B14-01..03 expanded from result-only into solution with unchanged data/results; First Try 5 have corrected navigation only. No new item canonical.  
**Q09–Q14/PED1–PED6:** 1.1 WHY, 1.2.1–1.2.5 observation and self-try before formulas, 2.x formal S1 and correct figures, 3.1–3.3 explain method/steps/conditions, 4.1–4.2 recovery. Distinguish math correctness from learner-efficacy evidence; **LEARNER_EVIDENCE_PENDING** until owner device check.
**Q15:** exact existing First Try `THPT-G10-CHV-TRY10..14` once, 3 original EX placements and original 2 HELP canonical IDs; original public Core/Practice/Written bank blob and stems/keys/answers/rubric unchanged; none moved into held-out readiness.
**Q16–Q17:** Golden Knowledge only, not assessment; no private RD1, hint/key before independent Final Submit, Mastery/Firebase/Gemini, or Topic changes. 
**Q18:** signed historical receipt and baseline kept immutable; targeted delta via this one receipt. **S1_SCOPE_MATH_CONVENTION_VERIFIED** in affected outcomes, not a claim that owner or NotebookLM independently approved the new wording. P0/P1 self-audit = 0; conditional on exact-source automated math/ped checks and real browser QA.

## Guardrails and release gates

- **DELTA_C_ACADEMIC_MATERIAL:** added worked-method reasoning, revised D6 references, and semantic content presentation; allowed §X-C self-verification because existing published Knowledge and all protected maths/item/assessment fields unchanged. The scoped CSS is **DELTA_A_UI**. Do not downgrade all modifications to UI-only.
- Frozen baseline is `21c1ef59277f742b45a27900b173fac031a4a04f`; the previous sample/input/output/figure/check semantics are logically preserved. Original 3/3 problem families, 5/5 First Try identities and answers before the recovery paragraph, 2 original HELP IDs and SVGs remain.
- Source parity guard must compare the original S1/result tuples and answer paragraphs, not enforce old full-text equality across edited pedagogic sections. **Never rewrite old SHA receipt to trick a test.**
- **AP1–AP5:** 4 tabs, 1.x–4.x, Gold 3+1 semantic teal/blue style light/slate, 3x Dé/Analysis/solution/check, no extra prompt panel after hidden Markdown H4, MathJax, figure decode/reading and 390/820/1440 browser.
- **R1–R5:** source/receipt SHA, no public bank or assessment mutations, exact-HEAD full CI, no merge/deploy without owner-scoped authorization; verify post-merge Pages emitted B14 HTML, CSS, existing banks and B01–B13 blob conservation.
- **P2:** only owner actual Safari/iPad acceptance after P1; simulated viewport does not grant OWNER_P2_PASS.
