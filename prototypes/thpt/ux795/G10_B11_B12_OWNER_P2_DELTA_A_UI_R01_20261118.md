# G10 B11 R02 + B12 R01 — Owner P2 targeted UI-only receipt (18/11/2026)

**STANDARD_ID:** SLM-THPT-QUALITY-ONE · **VERSION:** 3.2.0 · **CLAUSES:** Q03/Q04/Q07/Q09–Q14/Q18 and AP1–AP5/R1–R5, one standard.
**ISSUE:** #795 · **DRAFT PR:** #910 · **DELTA_CLASS:** DELTA_A_UI, no changed academic math/condition/formula/answer/rubric. **STATUS:** P2_FIX_DRAFT / QA_PENDING / NO_MERGE_NO_DEPLOY.

## Owner P2 defect evidence and exact scope

1. B12-P2-FIG-SIZE-01: interval figure too small in actual owner screenshot. Original reviewed SVG graphic and numeric data must stay unchanged.
2. B12-P2-FORMAL-02: SGK Tab2 definitions/formulas exist as prose, not visibly identified as official concept/definition/rule. Existing original source paragraphs only get presentation cards and semantic labels. No rewritten mathematics.
3. B12-P2-EXAMPLE-03: old ChV Golden runtime wrongly boxed the FIRST paragraph after each Example heading, which is the problem prompt Đề. Move existing Giải steps, not the prompt, into visible framed solution panel; label existing mathematical reasoning as Phân tích; self-check stays outside.
4. B11-P2-EXAMPLE-02: B11 historical P2 missed this exact Examples-tab display defect. Four Giải paragraphs need frame and their analysis lead should say Phân tích. Previously approved non-example content untouched.

## Immutable academic sources and shared assets verified on candidate branch

- B11 R02 Knowledge source: 60a3d043694986e3250f15b51350380b86f70cfc (unchanged)
- B12 R01 Knowledge source: fc2942aeafdcd34d3cedd9eeb24c48716bbe7e78 (unchanged)
- B12 full one canonical manuscript: c4ee9f322d158d775be551c9888d426aba8ee16d (unchanged)
- B12 formative bank, eight historic plus new separate P07: ca93acc0dd4df6e8f7fcd45732a6c69d82892d3f (unchanged)
- B12 historical author Q18 receipt: 29094e10863a5a8d1d77e559afe010b475b5d916 (unchanged)
- Shared original Golden runtime docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js: 74220df7d4a7632c5aa1b2abd2925d5fbcfee82c (byte-identical)
- Shared original R4 CSS docs/assets/stylesheets/thpt-r4-preview.css: f46b7280965c226039093c408dc7f8e3e78001fa (byte-identical)

## New UI-only extension fingerprints

- docs/assets/javascripts/thpt-g10-b11-b12-owner-p2-fix.js: 567a053c62d3b6c885fc0fe70db51fe7051ec4fb
- docs/assets/stylesheets/thpt-g10-b11-b12-owner-p2-fix.css: 5ff051b46cc496a1b4b116d1f5e2ac0f96e95509
- mkdocs.yml: abc5da9824a9aea89b1bbaee80903075cf8133ff; scoped CSS after existing styles, scoped JS after historical Golden runtime.
- Strict route guard: ONLY G10 ChIV B11 and ChV B12. Material instant navigation supported, idempotent article marker; B01–B10 and B13/B14 unaffected. Original B11/B12 maths/MathJax canonical DOM nodes MOVED, never cloned or altered.
- No RD1, Q16, Final Submit, Mastery, Firebase, private student data, protected items or GitHub release rights changed.

## Required QA and disposition

On exact final PR HEAD, verify actual Chromium at 390/820/1440, including 4 prompts outside frames, 4 Phân tích labels, 4 Giải contents inside frames for each B11 and B12, B12 4 S1 concept/rule cards with painted color (light/slate), interval figure readable at desktop and internally scrollable 600px on mobile with no document horizontal overflow. Run full ChIV/ChV and R4 + Roadmap + B01–B10, B13/B14 regressions, protected Q16. Do not infer source/PED PASS from box counts alone; the existing reviewed academic source is unchanged.

At actual post-deploy P1, verify source SHA and git-built Pages HTML/assets; only owner can reaccept B11 affected Examples Tab and B12 P2 on physical device. KEEP DRAFT / NO MERGE / NO DEPLOY until QA complete.

**Independent reviewer note:** this is a RELEASE Delta A receipt, not a new independent Academic/PED verdict; retains previous review on immutable sources. Original publisher PDF custody remains outside this UI-only change.
