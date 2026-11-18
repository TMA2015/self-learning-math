# G10 Chapter IV B07 — Formal concepts and memory semantic correction R05 · 17/11/2026

**PACKET_ID:** `G10_CHIV_B07_SEMANTIC_XF3_OWNER_P2_FIX_R05_20261117`
**LESSON_ID:** `G10-CHIV-B07`
**STANDARD_ID:** `SLM-THPT-QUALITY-ONE`
**STANDARD_VERSION:** `3.1.0` (Q01–Q18, X-F.2, X-F.3, X-F.4, X-F.5)
**VERIFICATION_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` — author critical review plus source/semantic regression; not independent NotebookLM PASS
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` (formal presentation and explicit recap) + `DELTA_A_UI` (scoped definition color)
**MASTER_DEFECT_LEDGER:** `Issue #795 / B07-F01 / G10-SEM-01`
**OWNER_REPORT:** B07 P1 live review found formal definitions/concepts and knowledge to remember hard to identify, P2 REVISE REQUIRED
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-7.md`
**BASELINE_R04_SOURCE_BLOB:** `4640d5beeb2c43c2e65a4a58e400cf99a4e6efd9`
**R05_SOURCE_BLOB:** `e1487ce01e81738228ae69d4d87cbdc56b5e0c69`
**CSS_PATH:** `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css`
**BASELINE_CSS_GIT_BLOB:** `a6f5061a0660ad5ae32867e3639d4a375e05fe29`
**R05_CSS_GIT_BLOB:** `2aaaa262a1e3fe8195ab507bad2f08302302341e`
**PREVIOUS_RECEIPT:** `prototypes/thpt/ux795/G10_CHIV_B07_S1_FORCE_VELOCITY_ENRICHMENT_R04_20261117.md`

## G0 — Source and known-defect intake

Read effective main Q03, Q09–Q14, X-F.2/3/4/5; Issue #795 B07-F01 + G10-SEM-01, historic B01-F10 teal-versus-amber learning; Issue #861 B07–B18 old semantic regression. This new issue was **known and should have been caught before R04 release**. Do not mark it solved by PR CI alone or reopen the superseded first-upgrade PR queue. The owner specifically requested a semantic lesson-level repair, not a new general quality standard.

## G1 — Mandatory learning concepts versus actual formal display

The existing S1 original source already establishes Chapter IV B07 printed SGK KNTT Toán 10 tập 1 pages 46–50; original book/PDF index was **not freshly opened** in this R05. Original two required S1 parent headings remain intact in the same order. No extra mathematics, extra theorem or altered zero-vector convention is introduced. The following are **actual required visual/formal anchors** (not a quota of 7 boxes):

| S1 section, concept / outcome | Formal learner-visible conclusion and conditions | R05 semantic role |
|---|---|---|
| §2.1.1 / `G10-B07-DEFINITION` | “Định nghĩa — Vectơ”: oriented segment, `AB` start/end and direction; nonzero vector line as giá | `FORMAL_DEFINITION` / teal |
| §2.1.1 / `G10-B07-LENGTH` | “Định nghĩa — Độ dài vectơ”: length `|AB→|=AB≥0` is scalar, not orientation | `FORMAL_DEFINITION` / teal |
| §2.1.2 / `G10-B07-ZERO` | “Định nghĩa — Vectơ-không”: same start/end, `AA→=0→`, length 0; SBT special convention is explicitly labeled separately | `FORMAL_DEFINITION` / teal |
| §2.1 closing | “Kiến thức cần nhớ — Mục 2.1”: concise mandatory definition/notation/zero recall, **not** only method tip | `MANDATORY_CONCEPT_RECAP` / amber |
| §2.2.1 / `G10-B07-DIRECTION` | “Định nghĩa — Hai vectơ cùng phương”: nonzero only, supporting lines parallel/coincident, same versus opposite direction | `FORMAL_DEFINITION` / teal |
| §2.2.2 / `G10-B07-EQUALITY` | “Định nghĩa — Hai vectơ bằng nhau”: equal orientation and equal length; does not require same base/line | `FORMAL_DEFINITION` / teal |
| §2.2 closing | “Kiến thức cần nhớ — Mục 2.2”: same-direction plus equal-length condition, order of comparisons and zero-vector exception | `MANDATORY_CONCEPT_RECAP` / amber |

**Not all notes are "Kiến thức cần nhớ":** exact role separation from B01/B06 approved pattern; `Ghi nhớ` may be a legitimate local caution, but a note does not count as the formal definition. Do not force an arbitrary name, number of cards or boxes across lessons. Current B08 already has 5 semantic boxes (3 formal, 2 reminders), correcting the earlier wrong count of 2.

## G2 — Actual self-critical pedagogical review, including unchanged parts

- Tab 1: all five concept-first explanations still illustrate vector, length, direction, equality and zero; applications of 20 N / 10 N / northwest wind stay. No new premature formula introduced into the revised formal Tab 2.
- Tab 2: student's five “What exactly is...?” referents can now be found by plain text and visually highlighted formal statements. The two recaps are substantive, distinguish formal result from advice, do not use a summary-only substitute for individual definitions. The original figure and 2.1/2.2 S1 headings remain next to corresponding definitions.
- Tab 3: original four distinct worked examples, step-by-step reasoning and formulas unchanged from R04. Tab 4: both original D6 HELP unchanged. Five formative `THPT-G10-CHIV-TRY01..TRY05` placements, entire optional answers and official non-exposure untouched.
- **Known pedagogical boundary retained from R04:** an earlier formative TRY01 answer uses notation `−` before B08 introduces vector opposite. This R05 does not silently rewrite canonical self-check answers; track separately if an affected-scope learning review requires change.
- No change to Core/Practice, Written, Mastery, independent Final Submit, private RD1, Gemini, THCS/Topic, G11/G12, or learner data.

## G3 — QA required on exact source/asset and actual rendering

- Source-lock `R04_SOURCE_BLOB→R05_SOURCE_BLOB` and `BASELINE_CSS_GIT_BLOB→R05_CSS_GIT_BLOB` without rewriting historical R02/R03/R04 receipts. Ensure CSS diff only **appends** exact B07 canonical selector `THPT-G10-CHIV-TRY01` with B01-approved teal for formal concepts; all recaps remain amber, light/slate.
- **Outcome-semantic gate, not generic card count:** check seven actual text anchors in correct S1 section order, five formal cards and two recaps with distinct CSS semantics and no missing required conditions. Ensure the renderer locates them in Tab 2 and computed teal/amber colors differ on 390/820/1440.
- Exact-head GitHub Actions ChIV Q18, UX795, R4, Roadmap and cross-chapter regressions, runtime Artifacts, MathJax and SVG. P1 requires actual published `gh-pages` HTML source/asset SHA parity. P2 **must** be owner device review (do not replace with CI).

## G4 — Master ledger transaction

`B07-F01` state in #795: `OPEN→FIXED_IN_PR→CI_PASS→PUBLISHED_P1→OWNER_P2_PASS` only with corresponding evidence at each transition. `G10-SEM-01` is a per-lesson semantic role monitor, not a retrospective revocation of accepted lessons. Do not leave #795 open finding undocumented merely because PR has a body.

## G5 — Release boundary

After all G0–G4, all required exact HEAD gates and standing owner release authorization, an approved PR may merge/deploy. **No owner P2 PASS has been given for R05**; do not advance G10 B09 until owner accepts B07. Only one active SGK RELEASE task.

**STATE:** `R05_CANDIDATE_QA_PENDING` / `B07_F01_FIX_IN_CANDIDATE` / `NO_P1_NO_P2_CLAIM`.
