# G10 ChIV B07 — learner-facing D6 task labels · Delta A R03 · 17/11/2026

**PACKET_ID:** `G10_CHIV_B07_HELP_LABELS_DELTA_A_R03_20261117`  
**STANDARD:** `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18 (Q14/Q15/Q18, AP1–AP5)  
**LESSON_ID:** `G10-CHIV-B07`  
**DELTA_CLASS:** `DELTA_A_UI` — two learner-facing remediation instruction strings only; no mathematics, assessment, exemplar, condition, answer, rubric, outcome, figure, CSS, JS or canonical item change  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-7.md`  
**R02_SOURCE_BLOB:** `7a8f2b8247b3d9da0a1be9375c6ba1a348bbf11f`  
**R03_SOURCE_BLOB:** `6fefa4cb27f4d4603cd3b461c8592d732c603f8e`  
**R02_Q18_RECEIPT:** `prototypes/thpt/ux795/G10_CHIV_B07_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md` Git blob `bcab01d5701e30e927a2b7d25ea60440de8ea5f7` (immutable)  
**B08_PUBLISHED_R03_SOURCE_BLOB:** `9cf96a0e81bea14903a64385359f738145e5a048` (retained)  
**PUBLIC_ITEM_MODE:** `CLIENT_SELF_CHECK_NO_MASTERY` and original Core/Practice IDs untouched; Q16/RD1/Final Submit unchanged.

## Exact visual-only changes after owner-requested holistic presentation sweep

Under `HELP-G10-B07-01` (mistake: direction/point of origin), learner-visible technical identifiers `B07-P03`, `B07-C02` replaced with exact plain-language descriptors based on the immutable existing public bank: "vectơ ngược hướng trong hình bình hành", "điều kiện hai vectơ bằng nhau". The recommended sequence (Practice then Core) and link to `../luyen-tap/` stay unchanged.

Under `HELP-G10-B07-02` (mistake: collinearity/orientation/zero-vector), identifiers `B07-P05`, `B07-P04` replaced with bank-matched descriptions "hai vectơ cùng hướng nhưng khác độ dài", "quy ước vectơ-không". Same Practice-to-Practice order and link are retained.

Exactly **two complete visible sentences** are replaced in two D6 closed tips. Both original HELP canonical IDs `HELP-G10-B07-01` / `HELP-G10-B07-02` preserved, **five public First Try `THPT-G10-CHIV-TRY01`, `THPT-G10-CHIV-TRY02`, `THPT-G10-CHIV-TRY03`, `THPT-G10-CHIV-TRY04`, `THPT-G10-CHIV-TRY05` question/answer bodies byte-identical**. All other source text byte-identical, including mathematical formula and 4 new transfer examples. No new item added; no private RD1 published; no change to Mastery, Firebase, Golden, original SVG or JS.

### QA / release requirements

- Q18 router must confirm R01→R02→R03 SHA chain, reconstruct R02 text by restoring exactly the two prior sentences, and reject any mutation to original items/answers/conditions.
- Golden/browser at 390, 820, 1440 checks closed D6 by default and both opened tips contain no internal `B07-[CP]NN` labels; check task descriptions correspond to existing public bank prompts. Keep 4 tabs, 5 canonical TRY IDs, original SVG decode, MathJax and Q16 boundary.
- Exact-HEAD 8 GitHub workflow SUCCESS, merge and Deploy MkDocs under owner conditional authorization, verify gh-pages B07 HTML/JS/source SHA and record P1. **Owner physical Safari P2 remains pending** until explicit user verdict.
- No NotebookLM repeat for UI-only Delta A and no false reviewer PASS. R02 academic self-verification remains snapshot-locked.

**STATE:** `UI_DELTA_A_QA_PENDING / NO_MERGE_DEPLOY`.
