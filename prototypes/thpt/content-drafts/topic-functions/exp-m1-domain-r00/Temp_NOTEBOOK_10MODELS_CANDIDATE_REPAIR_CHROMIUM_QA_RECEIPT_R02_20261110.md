# AUTHORING R02 — Notebook 10-model HTML: reproducible local QA repair receipt (not a canonical source)

**Date:** 2026-11-10 | **Lane:** AUTHORING; scope as **research QA for owner-uploaded file**, not creation/release of new Topic content.  
**Canonical Standard:** \`SLM-THPT-QUALITY-ONE/1.2.0\` Q01–Q18. **Academic/PED=NOT_REVIEWED; CONTENT_READY=NO; NO MERGE/DEPLOY**.

## Exact provenance and candidate

- Owner source \`Trang_Web_Tương_Tác_10_Mô_Hình_Toán_THPT.html\`, SHA-256 \`93b3764dae9a60defa7d2ebe8d353c60f5e4e7edc4523f5a837c00fae05cddc3\`, **133170 bytes** (no mutations).
- **Standalone repaired candidate** \`Temp_NOTEBOOK_10_MODELS_QA_REPAIR_CANDIDATE_R01_20261110.html\`, SHA-256 **\`b25949c157507b47ed7da4e113319699761ca40805b98025b55a930ade52584d\`**, **141586 bytes**.
- Candidate provided as downloadable **conversation attachment** with full verification report \`Temp_NOTEBOOK_10_MODELS_QA_REPAIR_VERIFICATION_R01_20261110.md\`, report SHA-256 \`9125eeb2ce37f338de6e8376a3fc128fbb1996b17522baaf4f4e2575a8b95656\`, 8996 bytes.
- **Candidate HTML bytes intentionally NOT committed to GitHub**; this receipt does not promote the standalone 10-model catalog into the canonical content tree or add new \`MODEL_ID/ITEM_ID\`. Full SHA may be used to match the attachment exactly. No private RD1 source/key/rubric included.

## What was repaired (59 targeted source substitutions)

| Notebook model | Narrow QA repair | Browser evidence |
|---|---|---|
| 1 | Preset objective \`a,b\` respected in F, vertex table, level line, max search | c1=c2=12, F=2x+5y gives max 30 at C(0,6) |
| 2 | If a=1 (invalid log base), slider **itself** and label visibly switch to a=1.05 | slider/label 1.05/1.05 |
| 3 | Greek α Canvas rendering; animation RAF stops on tab exit | playing=false after tab switch |
| 4 | Removed \`f′≈0 => extremum\`, added \`f=x³\` counterexample; correct slope angle convention | f′(0)=0 with no extremum; for k=−1 angle 135°; sin(1.55) ≈0.021 not horizontal |
| 5 | Hemisphere [0,2] bound applied before \`dx\`, f no longer mutates integration bounds; midpoint caveat; locked full 360° to avoid false partial-volume drawing | N=8 sum 16.79, exact 16.76; for f²=x midpoint exact for all N is explained |
| 6 | Zero-vector angular undefined, parallel/opposite classifications, shortest arc, actual endpoint pointer drag + y-sliders | zero vector not “perpendicular”; mouse moved u=(4,0)→(3,2); 64/64 random dot comparisons and 3/3 direction edge cases |
| 7 | Special right-pyramid assumptions stated, pointer yaw/pitch implemented | drag changes yaw by 0.56 radians |
| 8 | No circle-section radius when d>R | R=3,d=4.5 => “Không có thiết diện” |
| 9 | Bayes exact probability separately from rounded 1000-person grid | 0.2%/80%/99.5% => 24.28%; grid approximates 2/7; **36/36** random independent formula checks |
| 10 | \`mean≈median\` no longer called normality, symmetry preset fixed, frequency bar drag added | f3 36→42/43 across responsive viewports |

Global runtime guard: stale tab timer skips hidden canvas; \`getCrispCanvas\` returns null for zero-sized canvas. Corrected misleading “SLM-THPT-v2.1” badge to **unreviewed QA candidate**, without introducing any new standard.

## Real Chromium evidence (only the standalone repaired candidate)

Headless Chromium / Python Playwright, actual \`page.set_content\` HTML with external HTTP(S) blocked, viewports **390, 820, 1440 CSS px**, height 1000; 3 × 10 model selections. **30/30** viewports have one active model, **30/30** canvases nonempty, **0** horizontal document overflows, **0** JavaScript page errors. A rapid **80-cycle** 9↔10 tab switch reproduced no previous negative-radius exception. Functional tests included presets, sliders, zero/parallel/opposite vector cases, pointer drag, plane/no-section, exact Bayes and histogram drag. Additional checks in Chromium at 820px: **64/64** dot products, **36/36** Bayes formula values, negative tangent angle, and genuine level-1 navigation click.

**Precise caveats:** (a) external CDN KaTeX/Lucide/fonts block correct offline typesetting, so offline operation is **NOT QA PASS**; (b) iOS/Safari/real touch/screens-reader/complete keyboard/Golder UI parity are **PENDING**, (c) these are finite browser cases, not exhaustive math or S1 proof; (d) this test did **not** execute real browser QA against the existing exact GitHub Topic #801/#793 HTML sources. **Do not close Q07/AP1–AP5** on those sources using this receipt.

## Preservation / owner governance

- Topic 1 M1–M3/M6 R06 independent NotebookLM review packet Git blob \`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\` **unchanged**, 11 DRAFT item candidates, Q15/PED/Academic pending.
- Topic 1 immutable R18 public canonical blob \`2340ea4975b37a457363eea59dd617070934983c\` preserved; Topic 2 #793 R02 Academic/PED + private RD1 baseline remains immutable.
- No other Topic opened, no new SGK/Topic journey, no new READY manifest/REGISTER/Model ID; \`CONTENT_READY=NO\` and Issue #790 V2 intake remains outside AUTHORING control.
- **DECISION:** reference candidate for visual/interaction ideas only. If owner authorizes *one* model to migrate, compare existing canonical model, record explicit \`OUTCOME_ID/MODEL_ID/placement\`, fix all P0/P1, obtain targeted NotebookLM Academic/PED + real browser/handheld accessibility gates before any CONTENT_READY promotion. Do not copy the raw catalog into the website.

**Checkpoint:** \`REFERENCE_CANDIDATE_QA_CHROMIUM_CASES_PASS\`; \`MATHEMATICAL_INDEPENDENT_VERDICT_HOLD\`; \`EXISTING_AUTHORING_SNAPSHOTS_PRESERVED\`; \`NO_RELEASE\`.
