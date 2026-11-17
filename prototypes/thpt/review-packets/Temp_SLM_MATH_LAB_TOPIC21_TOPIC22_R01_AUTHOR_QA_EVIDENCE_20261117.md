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
