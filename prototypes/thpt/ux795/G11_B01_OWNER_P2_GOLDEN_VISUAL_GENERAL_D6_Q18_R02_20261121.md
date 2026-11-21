# SGK global #28 / G11 B01 · Q18 R02 owner P2 visual/PED correction

**RECEIPT_ID:** G11-B01-OWNER-P2-GOLDEN-VISUAL-GENERAL-D6-R02-20261121
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0, Q01–Q18, no new standard
**LESSON_ID:** G11-B01
**CANONICAL_PATH:** `docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md`
**R02_PREVIOUS_SOURCE_BLOB:** `2d7cff18f4e46375f06a672a3742a2a43b5f2db5`
**R02_CORRECTED_SOURCE_BLOB:** `e5b140bffd46d829f94d793c45bd987c64838723`
**R01_SOURCE_HISTORY:** `9605eaf510f9f873751e20bef29f4aac848609a3` → `2d7cff18f4e46375f06a672a3742a2a43b5f2db5`; R01 immutable
**PREVIOUS_PAGES_HTML_BLOB:** `ae8e35f84c8235954bf009af0f9ec89b41df2d0c`
**APPROVED_G10_GOLDEN_CSS:** `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css`, Git blob `14001f525b1825557493f439a1f0555e9614185f`
**ORIGINAL_UNIT_CIRCLE_SVG_BLOB:** `a75d70c2dbbedce6934f0f4521c159dd9045844e` unchanged
**DELTA:** DELTA_A_UI for scoped CSS class and approved solution-card reuse + DELTA_C_ACADEMIC_MATERIAL_TARGETED_PED for two general HELP explanations, independent assessment content unchanged
**REVIEW:** Q18_OWNER_SELF_VERIFIED_ENRICHMENT targeted screenshot source+PED review; no independent NotebookLM PASS claimed
**SOURCE_QA:** G0–G2 self-checked; P0=0, P1=0 for corrected target source, G3 and publication remain separate gates
**OWNER_P2:** OWNER_P2_RECHECK_PENDING for R02 corrected website
**SINGLE_ERROR_LEDGER:** https://github.com/TMA2015/self-learning-math/issues/795, ID `SGK-G11-B01-P2-GOLDEN-CARD-AND-GENERAL-D6-20261121`

## G0 · Exact issues shown by owner on seven screenshots

1. Six per-outcome first-try `??? question "Đối chiếu"` and `??? tip "Kiểm lỗi"` showed **native MkDocs green and cyan**, not the neutral rounded **G10 B07 approved Golden**. Root cause: local G11 B01 Golden bridge added `thpt-g10-chiv-golden` but OMITTED the companion `thpt-g10-knowledge-ap1`, required by all inherited Golden CSS selectors. Prior browser QA only checked cards not fully transparent and missed computed padding, border, and disclosure colors.
2. Three concept cards (green), five rule cards (blue) had background colors but lacked **full bordered padded rounded geometry** of G10 B02 / B07, because inline G11 CSS only changed `background`, `border-color`, `border-left-color` while actual base border/padding existed behind the omitted class. Re-enable complete *already approved* base style rather than clone new CSS.
3. Six `thpt-g11-example-solution` had new 4px gray left accent; owner's G10 B01 screenshot uses **neutral soft rounded solution card** `thpt-g10-example-solution` styled by shared CSS. Switch all six to the existing approved class and delete the G11-only duplicated solution CSS rules. Preserve every worked example and all explanations byte-for-byte.
4. Last-tab two historical general HELP IDs `HELP-G11-B01-01/02` were written like exact D6 of TRY01/TRY04/TRY05. Targeted rewrite separates them from six **local** `Vận dụng → Đối chiếu → Kiểm lỗi` blocks: (01) three cross-outcome distinctions between signed rotation, coterminal value, and traveled arc; (02) cross-outcome domain, sign, symmetry and identity checks. Intro explicitly distinguishes general diagnosis from the six local D6. Both labels remain `Kiểm lỗi`, historical IDs remain unchanged and reference existing related Core/Practice/Written items, not invented new canonical items. Only pedagogy around general remediation is rewritten: no new concept/theorem/answer.

## G1–G2 mathematical and interface receipt

- Same four tab names, same four S1 Knowledge sections, **three concept** and **five rule** cards, six First Try stems and **six closed Đối chiếu bodies byte-identical**, six local `Kiểm lỗi` bodies byte-identical. Two general HELP descriptions edited to be multi-outcome; **six First Try IDs and all eight HELP IDs unchanged**.
- All **203 original MathJax source chunks preserved exactly as a multiset** (203→203, zero lost); same single source footer, existing unit-circle SVG still referenced exactly twice. Original Q15 unscored placement and Q16 Final Submit/RD1/Mastery safeguards remain unchanged. Existing core, practice, assessments, runtime, Firebase and G10 B01–B27 canonical are untouched.
- G11 source bridge now applies both `thpt-g10-knowledge-ap1` and `thpt-g10-chiv-golden` on the G11 B01 route only; six solution divs reuse `thpt-g10-example-solution` and no G11-only solution style. **The shared G10 approved stylesheet is unchanged**, as are all source-locked previous G10 P2 snapshots.
- G2 editorial/PED check: final-tab errors each apply to **multiple outcomes** instead of one isolated First Try; general remediation distinguishes when reducing a rotation is legitimate and when it corrupts arc length; domain/sign checks always enforce nonzero denominator, no false Mastery.
- G3 positive/negative browser proof: per 390/820/1440 actual computed CSS requires neutral `details.question/tip` appearance, padded radius/left accent for semantic cards, approved neutral `thpt-g10-example-solution`, blue tab labels and section headings; precise Q15/Q16/MathJax/SVG counts unchanged. A source receipt **does not substitute for Chromium**.
- G5 after exact-final-head all workflow PASS and authorization (owner explicitly requested publish): merge then verify actual `gh-pages` HTML new SHA, border/padding class, six solution card classes, eight neutral error panels and two general-help paragraphs, source/answers and unchanged G10 B27 production HTML blob `68c7e3077ef53b321da6f61155d91ac13f02649e`. OWNER P2 on real device remains separate.

**No clone or new canonical manuscript; this is one exact Q18 receipt, ONE Master #795 ledger and one G11 B01 canonical.**
