# G10 B27 · SGK S1 three methods, Golden self-learning and exact Q18 release receipt

**RECEIPT_ID:** G10-CHIX-B27-S1-GOLDEN-ENRICHMENT-Q18-R01-20261121
**STANDARD_ID:** SLM-THPT-QUALITY-ONE
**STANDARD_VERSION:** 3.2.0 (Q01–Q18, owner-approved effective)
**LESSON_ID:** G10-B27
**SINGLE_CANONICAL_LEARNER:** `docs/thpt-preview/sgk/chuong-ix/bai-27.md`
**BASELINE_SOURCE_BLOB:** `633c7cd0aaa70cdd1524fce17bb81cbf5d1b9a6d`
**CANDIDATE_SOURCE_BLOB:** `be9ce1b6de3aa381c47d143cfb3827d012ca9e3b`
**SOURCE_FIGURE_SVG_BLOB:** `877abd0e755950e6112f1c2aaa33f281027ad33f`
**DELTA:** DELTA_C_ACADEMIC_MATERIAL + source-scoped DELTA_A_UI
**Q18:** Q18_OWNER_SELF_VERIFIED_ENRICHMENT (affected-scope S1 maths/PED/IDs; not an independent NotebookLM verdict)
**REVIEW:** INDEPENDENT_NOTEBOOKLM_REVIEW_NOT_CLAIMED
**OWNER_P2:** OWNER_P2_PENDING; B01–B26 prior owner P2 accepted in 21/11 conversation, not reopened
**ASSESSMENT_MODE:** CLIENT_SELF_CHECK_NO_MASTERY; no RD1, Final Submit, scores, core canonical item body, protected data or Firestore write modified
**BLOCKER_STATUS_AT_SOURCE_QA:** P0=0 P1=0; G3 exact-final-HEAD browser/CI, G5 deployed Pages HTML/source parity remain mandatory.

## G0 S1 source and scope verification

SGK **Toán 10 Kết nối tri thức tập 2, printed pages 83–87** (PDF textual source opened and inspected, https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-10-Tap-2-Chuong-trinh-moi.pdf). Section order and SGK printed labels:
- **S1 §1, pp83–84:** “SỬ DỤNG PHƯƠNG PHÁP TỔ HỢP”; lottery 6 of 45 (HĐ1), choose people groups, count combinations with equal-likelihood condition.
- **S1 §2, pp84–85:** “SỬ DỤNG SƠ ĐỒ HÌNH CÂY”; HĐ2 multiple spinners, Example 2 three boxes (3×2×2 leaf paths), different branches for multi-step tests, notes about tree outcomes.
- **S1 §3, pp85–86:** “XÁC SUẤT CỦA BIẾN CỐ ĐỐI”; the **one explicitly boxed formal formula** `P(\\overline E)=1-P(E)`, HĐ3, choosing at least one even, complement, practical lottery application.
- **S1 exercise families, pp86–87:** ordered coin/di(e) trials, choosing group cards/balls, tree outcomes, at-least-one, and realistic combinatorial modelling. The canonical source covers these *families* without copying or changing public bank IDs.
- **PDF_INDEX_NOT_VERIFIED_NON_BLOCKING:** attempts to render the external web-PDF pages via the PDF screenshot endpoint returned cache/HTTP errors; printed page labels and exact S1 sections **were** checked from retrieved SGK text. No invented PDF page-offset number. SBT 27 pp64–66 is a pre-existing learner provenance note; SBT is supplementary rather than a second normative Core.

## G1/G2 lesson × outcome × canonical item matrix (Q01–Q14)

| S1/lesson outcome | Canonical existing ID | Source/pedagogical placement, why method | Local D6 |
|---|---|---|---|
| COUNTING_OUTCOMES | `THPT-G10-CHIX-TRY06` | Discovery 1.1 → groups unordered; distinguish five choose two vs 5×4; SGK §1/Knowledge 2.1; Example 3.1 & 3.4 | `HELP-G10-CHIX-TRY06` |
| TREE_SEQUENCE | `THPT-G10-CHIX-TRY07` | Discovery 1.2 adjacent actual four-card tree SVG, remove first card state at second draw, ordered 5×4; SGK §2; Example 3.2/3.5 | `HELP-G10-CHIX-TRY07` |
| COMPLEMENT_PROBABILITY | `THPT-G10-CHIX-TRY08` | Discovery 1.3 before answer, SGK §3, formal blue rule card Knowledge 2.3, justified as partition of Ω; Example 3.3 | `HELP-G10-CHIX-TRY08` |
| MULTISTEP_CONTEXT | `THPT-G10-CHIX-TRY09` | Discovery 1.4 with/without replacement, distinguish 25 vs 20 ordered outcomes; Example 3.5 | `HELP-G10-CHIX-TRY09` |
| EQUIPROBABLE_MODELLING | `THPT-G10-CHIX-TRY10` | Discovery 1.5: 36 ordered die outcomes, 21 grouped outcomes **not** equiprobable; Example 3.6 | `HELP-G10-CHIX-TRY10` |

- Preserved **5/5 original closed Đối chiếu answer/rationale HTML contents byte-exact** after changing only their disclosure labels from “Tự đối chiếu lời giải sau khi em đã thử” to Golden `Đối chiếu`. Names/stems and canonical `data-thpt-first-try-id` multisets intact.
- Preserved **all seven HELP/D6 IDs** (five first-try + two general misconception cards), all nine existing `data-thpt-formative-id` occurrences and existing course/core/written links. D6 disclosure titles are meaningful errors rather than five duplicated generic labels.
- The single existing original SVG `THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg` remains byte-exact under `docs/assets/images/thpt/`, with accessible title/desc. Correct model four differentiated cards, 4×3 ordered leaves, totals 2+4+4+2=12; placed adjacent to Discovery explanation/caption.
- Golden 4 primary tabs exactly `Khám phá kiến thức / Kiến thức SGK / Ví dụ / Lỗi thường gặp`; the five Vận dụng/Đối chiếu/Kiểm lỗi appear **within the learning flow**, not in tab 2. Tab 2 has **exactly SGK three sections** with one semantic `FORMAL_RULE` blue card for complement; it does **not** box numeric lottery/choice application, nor mislabel another probability formula as a new definition.
- Six full examples on tab 3 each **Đề bài → Phân tích → Lời giải (neutral card) → Kiểm lại**, no meta-prompts announcing the visible structure. Verified arithmetic:
  1. `C(12,6)=924`, `C(7,3)C(5,3)=350`, result `25/66`;
  2. three-box tree `3×2×2=12`, five favorable sequences `DXD, DVX, XVD, VXD, VVX`, result `5/12`;
  3. choose 2 among 10, `C(10,2)=45`, no even `C(5,2)=10`, result `7/9`;
  4. 6/45 lottery `C(45,6)=8,145,060`, jackpot one group, **exactly five** match `C(6,5)C(39,1)=234`, probabilities `1/8145060` and `234/8145060`;
  5. two draws four cards: no replacement at-least-one-blue `5/6`, with replacement `3/4`;
  6. two fair distinguishable dice sum five `(1,4),(2,3),(3,2),(4,1)` out of 36, result `1/9`.
- Replaced the duplicated generic `Nguồn toán học ...` + specific small `Nguồn S1 ...` with **one last-page source footnote only**; no filler “Mỗi ví dụ có…” or internal QA prose. Local presentation-only Golden bridge is scoped by B27 route and marker TRY06, no shared CSS/JS/runtime modified.

## Exact math migration and Q15/16 fail-closed policy

**B27_AFFECTED_MATH_TOKEN_MIGRATION=15:** Historical source had 32 LaTeX display/inline occurrences, rewritten source has 75 (on candidate SHA); 15 exact old tokens are rephrased, moved between examples/outcomes or replaced with logically equivalent expressions (e.g. `\\binom n2` generalized to `\\binom nk`; `\\bar A` became `\\overline E`; the three old red/blue first-draw labels use equivalent pair-list text; original three inline example equations move into fully checked new examples). Retaining 5 original exact answer/rationale blocks is **mandatory**; source-locked expected count 15 is **not** a general exemption for changing canonical answers/conditions.

**Do not assume source QA = independent review / P1 / P2.** Requires exact-final-HEAD browser AP1–AP5 at 390/820/1440 px, MathJax, lazy image decode and font scale, Golden/Q16; exact SHA and route check after merge/deploy on GitHub Pages. Every new defect belongs only in [the ONE cumulative issue #795 ledger](https://github.com/TMA2015/self-learning-math/issues/795); this file is a receipt not another defect list.
