# G10 Chương II · Bài 04 — S1/Q18 self-verified Knowledge enrichment & RELEASE receipt R01

**DATE:** 2026-11-16 · **PACKET_ID:** `G10-CHII-B04-KNOWLEDGE-ENRICHMENT-R01-20261116`  
**STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `v3.1.0` · Q01–Q18, §X-C/§X-F  
**SCOPE:** `SGK_CHAPTER / G10-SGK-B04 / PUBLIC_KNOWLEDGE` · no Topic/THCS/Final Submit/Readiness/Mastery changes  
**Q18_VERIFICATION_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` (the responsible assistant's self-QA, not an independent NotebookLM verdict)  
**AUTHOR_SIGNOFF:** `AUTHOR_SELF_VERIFIED_ENRICHMENT` · **ACADEMIC_P0:** 0 · **ACADEMIC_P1:** 0 on this verified candidate; browser/CI/owner gates remain separate  
**SOURCE_S1:** KNTT Toán 10 tập một, ChII B04, printed pp26–30. Authentic three original sections corroborated by #862 audit and public SGK reproduction (https://www.sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-ii-bat-phuong-trinh-va-he-bat-phuong-trinh-bac-nhat-hai-an-3096/bai-4-he-bat-phuong-trinh-bac-nhat-hai-an-11152.html). Original PDF bytes and PDF-page index were **not reopened** in this pass; no offset asserted. Prior AUTHORING #745 source-locked ChII review is historic component evidence on **its own** immutable snapshot, not independent reviewer PASS on this new B04 candidate. SBT page-level verification was not repeated; no invented SBT receipt.  
**AUDIT_INPUT:** #862 `G10_CHI_CHII_B01_B04_DEEP_S1_PED_AUDIT_R01_20261114.md` (B04-F01–F04), #795 master issue and owner B03 keyboard UX note  
**BASELINE_MAIN_COMMIT:** `282436c5e1d588055d794b9c977acc8e10a2c623`  
**LESSON_PATH:** `docs/thpt-preview/sgk/chuong-ii/bai-4.md`  
**BASELINE_LESSON_GIT_BLOB:** `2c432958169cd9f3a8a66e6bc07610b6a60d5815`  
**CANDIDATE_LESSON_GIT_BLOB:** `4c8bfa2bd9af3ac5a31da945abdc990ceaee4618`  
**CSS_PATH:** `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css`  
**BASELINE_CSS_GIT_BLOB:** `6953afcbd5e169a5946f4ba73ab1f399792d79c5`  
**CANDIDATE_CSS_GIT_BLOB:** `8d04ab90cd887c8223d33e13d47043a895d23bb1`  
**JS_PATH:** `docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js`  
**BASELINE_JS_GIT_BLOB:** `e832cbd0a9b5161df0ebe2dac5368591282555ef`  
**CANDIDATE_JS_GIT_BLOB:** `f77fe4725c34015f24a1d963b874a3adb895f7da`  
**D5_ASSET_UNCHANGED:** `THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg` blob `64b0ca1142f9cbcb1edebbb220e5bb7a0752ec61`  
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` affected learning explanation, authentic SGK hierarchy and new worked examples; `DELTA_A_UI` numbering, semantic teal definition boxes and route-scoped keyboard; `DELTA_B_SOURCE_EQUIVALENT` unchanged public canonical first tries and D6.

## Verified lesson/outcome mapping

| OUTCOME_ID | S1 section + canonical hierarchy | Changed-scope QA / issue |
|---|---|---|
| `G10-B04-SYSTEM` | original §1 → `2.1`, substep `2.1.1` | Q01/Q03 formal definition states simultaneous inequalities; original TRY06 preserved |
| `G10-B04-REGION_INTERSECTION` | original §2 → `2.2`, substep `2.2.1` | Figure's O(0,0), A(4,0), B(2,4), C(0,6) satisfy all four constraints; boundary included; original TRY07 independently asks another triangle |
| `G10-B04-FEASIBILITY` | §2 → `2.2.2` | Before TRY08, teach impossibility of `x+y>=7` and `x+y<=5`, NOT original TRY08 system `x>=3,y>=0,x+y<=2`; no preceding identical solution |
| `G10-B04-LINEAR_OBJECTIVE` | original §3 → `2.3` and `2.3.1` | Intuition of moving parallel `F=k` level lines; max/min vertex rule qualified by nonempty, closed, bounded feasible polygon; may attain optimum along an entire edge; no unrestricted claim |
| `G10-B04-INTEGER_MODELS` | §3 application → `2.3.2` | Integer-solution distinction explicitly labeled application/extension; continuous optimum fractional cannot be blindly rounded; TRY10 only compares two listed integer points, not global maximum |

**Editorial coverage:** four original Golden tabs remain; Tab 1 meaningful 1.1–1.3, Tab 2 authentic three main S1 sections with five correctly nested subtopics, Tab 3 three independent 3.1–3.3 worked examples, Tab 4 two 4.x targeted HELP disclosures. Keep one source note. Teal for **two** S1 concept boxes versus amber for **three** existing recap cards; CSS selector specifically requires B04 canonical `THPT-G10-CHII-TRY06`, cannot recolor B01–B03/other lessons.

## Independent mathematical recalculation for affected examples

- **D5 existing polygon:** `x,y>=0, x+y<=6, 2x+y<=8`, intersection B(2,4) from 6 and 8; O(0,0), A(4,0), B(2,4), C(0,6) all valid; retained SVG includes `F=3x+2y` values 0,12,14,12 as a *visual illustration*, not duplicated as the Tab 3 worked example.
- **EX3.1 independent transfer:** `x,y>=0, x+y<=9,3x+y<=15`; vertices O(0,0), A(5,0), B(3,6), C(0,9). `F=5x+2y` values 0,25,27,18; max 27 at B, min 0 at O. Every vertex was re-substituted into all constraints. No repeat of existing B04 public P02 data `x+y<=7,2x+y<=10,F=4x+3y`.
- **EX3.2 algebra contradiction:** `x+y<2` implies `2x+2y<4`; `2x+2y>=5` impossible; no need for graph.
- **EX3.3 original authored production application:** cost `12x+8y<=720` ↔ `3x+2y<=180`, quantity `x+y<=75`, `x,y` nonnegative integers. Continuous polygon O(0,0), A(60,0), B(30,45), C(0,75). `F=2.8x+2y` values 0,168,174,150 (million VND); maximum 174 at (30,45), verified using exhaustive integer enumeration of all feasible pairs 0≤x,y≤75. Capital `12*30+8*45=720`, quantity `30+45=75`.
- **TRY09 unchanged:** triangle O(0,0), A(3,0), C(0,6), `F=x+2y` values 0,3,12, max 12 at (0,6).
- **TRY10 unchanged:** `x+2y<=7,2x+y<=7`; (7/3,7/3) continuous feasible but non-integer, (2,2) feasible F=10, (3,1) feasible F=11; comparison limited to these two points, no unproved global optimum.
- **D6 HELP:** two canonical IDs `HELP-G10-B04-01`, `HELP-G10-B04-02`; remediation anchors updated for new nested 2.x labels without changing practice links.

**Q15 canonical public First Try IDs retained verbatim, one placement each:** `THPT-G10-CHII-TRY06`, `TRY07`, `TRY08`, `TRY09`, `TRY10`. Existing original answer bodies/keys not edited. Shared Core/Practice bank `docs/assets/javascripts/thpt-chii-reviewed-formative-v1.js` is unchanged; so are Written/Anchor and RD1 metadata/source. **Q16:** no hint/AI/correctness/key before Final Submit for protected RD1; these five Knowledge tries are opt-in public disclosures with `CLIENT_SELF_CHECK_NO_MASTERY` only. No Firebase/assessment or student data mutation.

## Owner TAB keyboard UX DELTA_A

`G10-TAB-KEYNAV-01`: retain B01–B03 accepted behavior and wire **B04 only** using the existing four MkDocs Material radio/label pairs. The code attaches `ArrowLeft`/`ArrowRight` handlers only to B04's four tab labels/radios, uses .click() on existing radios and focuses the selected label, never captures document-wide keys/input text, and preserves mouse/touch clicks. Browser QA must prove selected radio and visible content at 390/820/1440. Do not assume other later 75 lessons automatically gained this behavior; monitor/rollout per lesson in Issue #795.

## Release gates and snapshot

- **AUTHORING/Q18:** Source self-verified with inspected S1 section content and independent arithmetic; **not external NotebookLM PASS**. Historical original-PDF index not reverified, documented, previously recorded source custody reused at real scope; no fabricated provenance.
- **SOURCE_QA:** 4 Golden tabs / 3 S1 parent sections / 5 nested subtopics / 3 distinct worked examples / 5 unchanged first tries / 2 HELP IDs / 1 unchanged exact D5 SVG / 1 footer. No duplicate public item or answer-key change.
- **ASSESSMENT_DATA_SAFETY:** protected RD1 and Final Submit routes untouched, recheck in PR exact-head regression; no official Mastery from Knowledge self-check.
- **RENDER_RELEASE_QA:** **PENDING** until real browser 390/820/1440, Keyboard arrows, MathJax, SVG, Golden, all eight workflows on exact last PR HEAD SUCCESS, authorized merge/deploy, site artifact parity P1 and owner device P2. No academic receipt can preapprove render or deploy.
- **B01/B02/B03:** immutable academic source and original reviewer/Owner P2 acceptance preserved. B04 only, do not open B05 until B04 owner authorizes progression.
