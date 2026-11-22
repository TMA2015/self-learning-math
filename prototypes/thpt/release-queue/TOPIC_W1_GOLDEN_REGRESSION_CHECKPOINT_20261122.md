# W1 · CĐ02–05 · Golden R4 regression receipt and scoped QA
**Date:** 2026-11-22 · **TYPE:** RELEASE evidence/checklist only; **NOT** a second academic standard.
**Authority:** owner P2 desktop+iPhone CĐ01 PASS; [RELEASE MASTER #995](https://github.com/TMA2015/self-learning-math/issues/995#issuecomment-7077244281); `SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18 X-G`; `TOPIC_GOLDEN_UI_REV=20261122.1`; `RELEASE_SCOPE_LOCK_20261122`; [owner-accepted Golden CĐ01 HTML](https://github.com/TMA2015/self-learning-math/blob/51750e56ca3857aecfe64529b99bac16f95a407d/prototypes/thpt/preview/CD01_Golden_SGK_Preview.html). Do not create new academic labels Q19 or content variants.

## CĐ01 defects and hard prevention gates (must test each CĐ02–05)
| ID | Actual CĐ01 regression seen by owner | RELEASE detection/prevention |
|---|---|---|
| G-R01 | Source-math showed literal `[A\setminus ...]` in definition box | Browser checks real MathJax rendering, avoid visually escaped TeX; no stray unrendered delimiters. Inspect rendered callouts & SVG. |
| G-R02 | Definition/tính chất/etc miscolored and prose/tabs oversized | Computed 3+1 semantic roles: concept teal, rule blue, recap amber, formula neutral; tabs 15px/14px mobile, 44px, body SGK .8rem; check slate. |
| G-R03 | Knowledge `Đối chiếu` bright green default instead of Golden SGK | `details.question` quiet blue-neutral `#f8faff` / `#d9e4f4`, correct focus/dark; no neon green. |
| G-R04 | Practice has duplicated reveal actions (teal `Đối chiếu` plus `Đáp án / Lời giải`) | One disclosure only, with original canonical public solution; answer collapsed by default. No fake scoring. |
| G-R05 | Selfcheck rendered all 11 public prompts at once, no individual solution | One-at-a-time question number buttons, previous/next; direct per-item `Đối chiếu` with **only matching** public canonical ID solution; no prompt/answer bank duplication. |
| G-R06 | Page nav blocked by JS errors; syntax-only PASS masked defect | Actual Chrome/WebKit page interactions, assert no uncaught JS errors, modal focus/ESC/return, navigation and solution. |
| G-R07 | FOUC raw Markdown source visible on refresh | Early scoped hydration mask + loading status before raw source; success hides status, JS blocked/failure shows original content, never permanently blank. |
| G-R08 | 2px document overflow at 820px from MathJax/tab rails | Browser 390/820/1440; horizontal rails/formulas scroll **inside** Topic, no page-level overflow. |
| G-R09 | Incorrect claim that CI passing means device P2 PASS | OWNER P2 separate from AP/R CI and production P1; record device evidence only when owner confirms. |
| G-R10 | Legacy SGK 79 hash CI triggered by common standard change | **Do not run unrelated SGK/THCS/whole-site tests.** Only W1 Topics, source/receipt, Q15/Q16, AP1–AP5/R1–R5 directly affected. If old CI auto-triggered outside scope, tag `OUT_OF_SCOPE_LEGACY_CI`, retain real safety gates. |

## W1 immutable source intake
Use current active AUTHORING Draft HEAD + accepted `ready/` V2/Q18 receipt, verify **exact source blob** per Topic before projecting into 3 public pages. Source custody stays in AUTHORING draft; production Markdown slices are display-only projections and may not become another academic authority. Do not merge AUTHORING drafts wholesale or import private RD1. Check item ID set equality, Practice canonical 1-per-item, SelfCheck same-ID subset, zero Mastery writes, no answer/hint exposure in independent Final Submit. For public-only selfcheck, `CLIENT_SELF_CHECK_NO_MASTERY` with voluntary per-question reveal.

| Topic | PR | Accepted active learner Git blob | Receipt Git blob | Practice IDs | Public replay |
|---|---|---|---|---:|---:|
| CĐ02 | #818 | `d2f1ac8d5526e28cb9cf4e4c56b005ebea51dbb5` | `c1766ba52a80be61b9f8fd2124d0116605f74b92` | 38 | 16 |
| CĐ03 | #888 | `38f41f013e75b42605d7a88f9205c20af6315a41` | `ef40b5871762558959108cf1879155c7e14158fe` | 31 | 12 |
| CĐ04 | #890 | `4e8238e188204eefc060f18c88ef7a0a3c51a60e` | `eba1e820c2544b54e3ff09b0c37ed780e18c3dd5` | 75 | 18 |
| CĐ05 | #889 | `909f873c57e543b8f6d3c383d0b88df6900e334a` | `9c8c62a406e24af99efbdbe0bc081f1998c1f2ba` | 38 | 17 |

**Expected display:** W1 CĐ02–05 four independent complete 3-page journeys, 16/12/18/17 Knowledge outcome subtabs, 4/4/5/4 source Practice groups with exact original ID counts, 4+ public selfcheck question collections (16/12/18/17); no Topic Core.

## Release decision
Gate 0 source/receipt/active ready; Gate 1 UI Golden parity; Gate 2 browser real three routes and per-item mapping; Gate 3 exact-head scoped CI; Gate 4 authorized merge + deploy; Gate 5 GitHub Pages asset/page parity; Gate 6 owner P2 on real device (only when owner explicitly reports). Any blocking defect `TOPIC_GOLDEN_UI_HOLD` with Topic/role/route/evidence; never silently downgrade readiness or widen tests.
