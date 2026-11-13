# Q18 AUTHOR_SELF_QA — 14 canonical model placements / 11 shared interactive demos R02

**Date:** 13/11/2026 · **Lane:** AUTHORING · **Standard:** SLM-THPT-QUALITY-ONE v3.1.0 Q01–Q18. This receipt is a **targeted MODEL_D5/PED_QA_ONLY**, not an independent NotebookLM verdict, not a new topic Academic/PED verdict on old content, not a browser or production QA receipt.

MODEL_SOURCE_PATH: prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html
MODEL_SOURCE_BLOB: 7cb825f867f2ff69287536f5ad0a333bed9ce5c2
MODEL_DESIGN_PLACEMENT_PATH: prototypes/thpt/content-drafts/interactive-models/Temp_THPT_INTERACTIVE_MODEL_DESIGN_AND_CD01_CD14_PLACEMENT_R01_20261113.md
MODEL_DESIGN_PLACEMENT_BLOB: 271ca5c6416bd98aed8acc1f715540ed6809f87e
MODEL_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED_SCOPE_MODEL_ONLY
ACADEMIC_MODEL_MATH_VERDICT: AUTHOR_SELF_CHECK_45_45_PASS
MODEL_SOURCE_STRUCTURE_VERDICT: AUTHOR_STATIC_GUARDS_10_10_PASS
BROWSER_RENDER_VERDICT: NOT_TESTED
TOUCH_SAFARI_VERDICT: NOT_TESTED
GOLDEN_UI_INTEGRATION_VERDICT: NOT_TESTED
RELEASE_AUTHORIZATION: NO
OWNER_MASTERY_AUTHORIZATION: NO
RD1_PRIVATE_COUNT: 0
Q18_MODEL_P0: 0
Q18_MODEL_P1: 0
MODEL_HANDOFF_STATUS: MODEL_AUTHOR_QA_PASS_BROWSER_GATE_OPEN

## Model source R01 → R02 corrections

1. **CĐ12 critical edge:** With A=30°, a=BC=8, b=AC=16, the ray/circle intersection is tangent. Floating-point `sin(π/6)` and `sqrt(discriminant)` produced two near-equal candidate lengths and erroneously 2 nondegenerate triangles. Corrected source R02 to treat `|discriminant|<1e−8` as zero before generating roots. Verified `b=7→1,8→1,12→2,16→1,18→0,15.999→2,16.001→0`; collinear AB=0 excluded. The original R01 history remains auditable; all 11 source pointers on individual Topic branches now use the one R02 source blob above.
2. **CĐ02 domain coverage:** quadratic-sign model input k was only [0,6], although prose explained k<0 case (f=x²−k has no real root and is positive). R02 slider now **k∈[−3,6]**, includes k<0,0,>0 and checks x root behavior.
3. **First interaction pedagogy:** initial numerical result is not revealed in text until student changes a slider; after first input, observations are shown. Reset returns to prediction state. All explanations remain in a native closed `<details>` opened only by learner.
4. **Math convention safety:** the exp/log model uses permitted bases [.5,.7,1.3,2,3] and does not instantiate a=1; the parabola model uses *SGK* y²=2px, p>0; the Riemann uses f(x)=x² on [0,2], not the degenerate sqrt(x) example whose midpoint sum is exact for all n; the box domain is (0,6) and optimum 2; sequence n is integer; open/filled piecewise endpoints preserved.

## Independent math + static guards

**55/55 assertion checks PASS** executed on the model formulas and present source features, **not** by executing Canvas/DOM in a real browser:
- 4 implication truth-table combinations; 2 quadratic-sign cases; 2 radical equation/extraneous cases; 3 logarithm/function-inverse identities; 3 sinusoidal special angles; 3 AP/GP discrete recurrence cases; 3 one-sided limit/continuity conditions; 2 box-volume extremum/boundary cases; 4 midpoint Riemann sums `n=2,6,24,30`; 7 SSA edge/near-tangent cases; 12 parabola focus/directrix equal-distance cases = **45 mathematical conditions**.
- 11 model routes present, 11 prediction prompts and 11 applications; prediction-before-interaction guard; focus-visible; no external CDN script/style; high DPI; model query route; SSA root tolerance; negative k slider = **10 source-static guards**.
- The three reused **separate** canonical demos on old AUTHORING branches were verified by GitHub file readback and Git blob SHA, **not** re-executed in browser in this turn:
  - CĐ05 Graph Transform `5bc8204f8bd024f30a73230231857210f1ce2123` (PR #801);
  - CĐ09 Tangent + derivative `ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5` (PR #801);
  - CĐ13 Dot/projection `06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e` (PR #793).
- Older 10-in-1 dark prototype and repaired standalone candidate are **research references only**, not canonical replacements for these 14 models.

## UI/PED design contract inspected

- Palette: white #fff, light header #eaf4fa, canvas #fafdff, border #c7dfe9, text #183b54, blue #1687b4, green #218f73, orange #e9922a, system-ui/Segoe UI.
- Flow: Dự đoán → input → Quan sát dynamic canvas **and independent readable text** → Giải thích → Vận dụng → learner-triggered Đối chiếu; no additional top-level tabs; models appear inside Kiến thức at matched outcome (not independent fourth path).
- Script is offline self-contained, no CDN scripts. Uses native keyboard-operable range, focus-visible, DPI-aware Canvas, screen-reader result role= status with aria-live. **These are code features, not proof of real Safari/keyboard/screen-reader testing.**
- **Q15:** MODEL_ID must remain separate from ITEM_ID. Insertion into two routes uses placement ref, not duplicate HTML file or question. All 14 old Topic source SHA/academic Q18 receipts remain unchanged; 14 dedicated model placement addenda created.
- **Q16:** PUBLIC_DISCOVERY_NO_MASTERY, zero RD1 public payload; no Final Submit/private test form in the model, no completion status or Firebase write.

## Gates still open

- [ ] **Browser real DOM/Canvas QA** on 390/820/1440 widths, all 11 routes, slider and Reset, no JS errors, overflow, clipped axes, font/Unicode; three reused models too.
- [ ] **Mobile touch and keyboard** range/drag, screen reader fallback, reduced motion and contrast; actual iPhone/iPad Safari where required.
- [ ] **Source-linked placement inside every learner page** at exact R04/R02 outcome and correct model/asset resolution. Current 14 addenda state **placement intended**, not runtime already embedded.
- [ ] **Targeted academic/PED closure for Delta C** on only the model additions, respecting original immutable Topic CONTENT_READY; update V2/ready manifest only once source integration is actually valid.
- [ ] RELEASE AP1–AP5, R1–R5/Q16, Golden, combined current main REGISTER, owner permission, merge/deploy separate.

**Conclusion:** `11_NEW_REAL_HTML_MODELS_CREATED` + `3_EXISTING_MODEL_REUSE_REFERENCED` + `14_TOPIC_PLACEMENT_ADDENDA_CREATED` + `55_AUTHOR_MATH_STATIC_CHECKS_PASS`; `BROWSER_AND_EMBEDDING_PENDING`; `NO_RELEASE`.