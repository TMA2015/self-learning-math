# G10 Chương II · Bài 03 — S1/Q18 Author Self QA and Release Delta receipt R01

**DATE:** 2026-11-16 · **PACKET_ID:** `G10-CHII-B03-KNOWLEDGE-ENRICHMENT-R01-20261116`  
**STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `v3.1.0` · Q01–Q18 (single unified standard).  
**LANES:** OWNER authorized targeted B03 learning-source correction, then RELEASE QA/merge/deploy on exact head; this is **one-lesson delta**, not chapter/Topic-wide approval.  
**LESSON_ID:** `G10-SGK-B03` · **S1_SOURCE:** KNTT Toán 10 Tập Một, Bài 3 printed pp22–25. Previously frozen original SGK PDF SHA256 `3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2` recorded in existing AUTHORING V2 #745. **This turn cross-checked S1 section structure against text reproduction and that recorded custody; original PDF binary/PDF-page-index not re-opened. Do not invent PDF index.**
**SOURCE_REVIEW_PROVENANCE:** [AUTHORING PR #745](https://github.com/TMA2015/self-learning-math/pull/745), R03 consolidated academic source blob `25f4eaf91483cb310ed13ebc5080f98cd247dd70`, historical owner NotebookLM R02 scoped review/receipt immutable. Reviewer-reported original Q18 HOLD on Studio byte mismatch is preserved unchanged; this new snapshot is **AUTHOR_SELF_VERIFIED, not independent NotebookLM PASS**.

**BASELINE_LESSON_GIT_BLOB:** `c9ae5104c2f65779f2dd452d3f7775abe2600b7b`  
**CANDIDATE_LESSON_GIT_BLOB:** `4b6adea71aa7d9d56fae8d7607d4677a5de5a562`  
**LESSON_PATH:** `docs/thpt-preview/sgk/chuong-ii/bai-3.md`  
**BASELINE_CSS_GIT_BLOB:** `e7585ebbd9b082c1b2628aef2d39b7bf7347a13d`  
**CANDIDATE_CSS_GIT_BLOB:** `6953afcbd5e169a5946f4ba73ab1f399792d79c5`  
**CSS_PATH:** `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css`  
**BASELINE_JS_GIT_BLOB:** `7cc162bee17fd553b9d8192e6e564415a43a4996`  
**CANDIDATE_JS_GIT_BLOB:** `e832cbd0a9b5161df0ebe2dac5368591282555ef`  
**JS_PATH:** `docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js`  
**B01_OWNER_ACCEPTED_BLOB:** `dba6430cd79b17dee0591fb2dcd075ea5200b126`  
**B02_OWNER_REVIEWED_BLOB:** `3002487e974f2693528a39b2b2055fad8724d698`  
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` (S1 knowledge hierarchy/figure interpretation/solution examples and pre-TRY worked examples) plus `DELTA_A_UI` (semantic teal concept boxes, source headings Golden, stylesheet/script scoped to B03), `DELTA_B_SOURCE_EQUIVALENT` (five unchanged First Try question/answer canonical objects and two unchanged HELP IDs).  
**AUTHOR_SIGNOFF:** `AUTHOR_SELF_VERIFIED_ENRICHMENT` · **P0:** 0 · **P1:** 0 · **NOT_CLAIMED:** independent NotebookLM PASS for this new B03 source.  
**SOURCE_RECEIPT:** `G10-CHII-B03-KNOWLEDGE-ENRICHMENT-R01-20261116`.

## One S1 section map, five outcomes

| SGK printed section (Bài 3) | Source Knowledge heading | Outcomes | Evidence |
|---|---|---|---|
| 1. Bất phương trình bậc nhất hai ẩn (pp22–23) | `2.1` with `2.1.1`, `2.1.2` | `G10-B03-LINEAR_INEQUALITY`, `G10-B03-POINT_TEST` | Correct `ax+by,square,c`, `(a,b)≠(0,0)`, one coefficient may be zero; point solution replaces both coordinates; inclusive boundary |
| 2. Biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ (pp23–25) | `2.2` with `2.2.1`, `2.2.2`, `2.2.3` | `G10-B03-BOUNDARY`, `G10-B03-HALFPLANE`, `G10-B03-MODELING` | Boundary line vs strict/non-strict; choose point off boundary; correct sign reversal; valid actual variable domains and denominator |

**G10-NUM-01 MONITOR:** two main 2.x sections, subordinate 2.1.1→2.1.2 and 2.2.1→2.2.2→2.2.3; three discovery 1.x, three worked examples 3.x, two remediation headings 4.x. No parent gaps or unexpected sibling numbering; no invented equal-depth list just for count.

## Changed scope and concrete mathematics checked

| ID | Change and Qxx / pedagogy | AUTHOR_SELF_QA proof |
|---|---|---|
| B03-F01 | Q01/Q02/Q03: five false equal-rank headings collapsed under two authentic S1 main headings; five useful subheadings | B03 knowledge source has exactly h3 2.1,2.2 and h4 2.1.1,2.1.2,2.2.1–2.2.3. Original S1 two main sections cross-checked. |
| B03-F02 | Q03/Q09–Q11: four source-derived **teal concept cards** (inequality, solution pair, solution region, boundary) distinct from three original **amber reminder** cards | Four actual definitions reflect valid hypotheses and scope; CSS route restricted by `THPT-G10-CHII-TRY01`, light teal `#e8f7f2`/`#087d69`, slate teal `#193d36`/`#76dfc7`. B01/B02 CSS exactly retained; no global import/demo CSS. |
| B03-F03 | Q04/Q12–13: three worked examples now show `Phân tích → Lời giải → Kiểm lại` | The method is identified before the derivation; not mislabeled “Vì sao chọn cách giải này?” before the method exists. |
| B03-F04 | Q04/Q12: independent examples replace replays of the two-inequality figure `x+2y≤4`, `2x−y<1` | **EX1:** `x+3y≤9`, boundary `(9,0),(0,3)`; `O` gives `0≤9`, included; `M(3,2)` gives `9`, included; `N(10,0)` gives `10>9`, outside. **EX2:** `3x−y<2 ⇔ y>3x−2` (must reverse after dividing negative), `O`: `0>-2` inside, `P(2,4)`: `6-4=2` boundary excluded, `Q(0,1)`: `−1<2` inside, `R(0,−3)`: `3>2` outside. **EX3 unchanged:** weighted average `(140x+180y)/(x+y)≤170`, `x,y≥0,x+y>0`, equivalent `y≤3x`; `(1,3)` gives 170; `(1,4)` gives 172. |
| B03-F05 | Q14/Q15: five `Vận dụng` headings, existing `TRY01…TRY05` and `HELP-G10-B03-01/02` remain one-to-one | No new public item/role, no duplicate ID, no Q16 changes; all voluntarily opened answers remain hidden until student acts. |
| B03-F06 | AP1–AP5: source numbered 1.x–4.x and one SGK/SBT footnote, original four Golden tabs | JS B03-only route verifies 2 sections, 5 children, 3 examples and 2 HELP; no runtime renumbering override of canonical headings. |
| B03-F07 | Q18: baseline/changed source and styling exact SHA | Three source snapshots above plus old reviewer receipt chain. Existing original independent review remains on *its original blob*; newer explanations/examples are self-verified only. |
| B03-F08 | Q04/Q14/PED6: five First Tries retain **exact original canonical stems/keys**. The source examples immediately before TRY01/TRY02 were changed, **not those canonical questions** | TRY01 remains `2x−3y<6 / xy≤6 / 0x+0y≤4`, answer **only first**; the earlier paragraph now uses `x²+y<3` as a different example, without displaying those identical candidate strings. TRY02 remains `x+2y≤6` with A(2,2), B(3,2), C(0,0) and original A/C answer; preceding table instead uses `x+2y≤5` and P(1,2) gives 5, Q(2,2) gives 6, R(0,1) gives 2; no exact TRY02 key revealed in the table. This preserves historical source snapshot/Q15 item identity while making the self-try a fresh calculation. |

**Q15 unique canonical ID set:** `THPT-G10-CHII-TRY01`, `TRY02`, `TRY03`, `TRY04`, `TRY05`; original R02 statements/answers and placement role unchanged aside from the source heading “Em vận dụng.” → “Vận dụng.”. **HELP set:** `HELP-G10-B03-01`, `HELP-G10-B03-02`. Core / Written / RD1 / chapter self-check / learner progress / Firebase / THCS / Topic unchanged. No public copy of protected independent RD1 answers and no unauthorized Mastery writes.

**D6:** each First Try retains `data-thpt-help-ref`; misconception correction for boundary/sign/domain remains in two D6 details. **SVG:** existing `THPT_G10_B03_HALFPLANES_D5_R01.svg` retained; image caption/coordinates reflect original two distinct inequalities. Explain to the student how to read filled regions and boundary, no fabricated image for new example (examples instruct the learner to draw). Note original drawing and new worked examples intentionally use different math cases.

**P0/P1 status:** Math checks above manually recomputed, no contradictory boundary/units; there is no identified remaining P0/P1 in this B03-only scope. Full browser/render CI is still a separate RELEASE gate. **Owner P2** must evaluate the *actual deployed page*, not inherit B01/B02 acceptance.

**History:** Golden B01 F01–F10 and B02 F01–F06 and owner G10-NUM-01 monitor are covered in Issue #795; no new quality standard or release gate.

**NEXT RELEASE GATE:** exact-head source SHA guard plus 18-browser Golden B01–B06 cases 390/820/1440, R4 all devices, UX795 27 lesson regression, ChIV–VII visuals, Roadmap, Q15/Q16, build MathJax/SVG and live `gh-pages` file parity. If all SUCCESS, merge/deploy B03 only under owner's explicit authorization and stop for owner visual UAT. B04 must stay untouched.
