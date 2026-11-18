# B11–B12 · Delta A UI · B10 Golden component parity · 18/11/2026

**Standard:** SLM-THPT-QUALITY-ONE v3.2.0 · same Q01–Q18, AP1–AP5 / R1–R5. **Owner evidence:** two screenshots dated 18/11/2026: B11 purple MkDocs Example solution boxes; B12 cyan-blue MkDocs Abstract/Info formal boxes and purple Example boxes. **Disposition:** targeted UI presentation correction, no mathematical material changes; owner P2 recheck still required.

## Immutable before/after snapshot proof (source of truth: same current file paths)

**B11_PREVIOUS_SOURCE_BLOB:** `d35a39eedef9d5b55e96836de83649d9a014e42e`
**B11_PREVIOUS_CANONICAL_BLOB:** `c313fdb96e8a0ca1b1f7062512293efbd44dec21`
**B11_SOURCE_CURRENT_BLOB:** `bae18dce68974edc15f940bf7fb2cca09d99ddf8`
**B11_CANONICAL_CURRENT_BLOB:** `3d59f161977d4222a2399f0b0d3db3ab9eba1e5f`
**B12_PREVIOUS_SOURCE_BLOB:** `6b0f137849e11a74a28d4b7fe436d2911a5b5c9d`
**B12_PREVIOUS_CANONICAL_BLOB:** `fea02a91eef4225c986a846ab89a00ecf0c33faf`
**B12_SOURCE_CURRENT_BLOB:** `ff22a17265a0b3f66607bdfb132975877a7a6eba`
**B12_CANONICAL_CURRENT_BLOB:** `04500be3345cca4c5e02fc125e4270383bb27186`
**GOLDEN_CSS_PREVIOUS_BLOB:** `818866d2ea73b3252649f78926fe3abd343abc64`
**GOLDEN_CSS_CURRENT_BLOB:** `aac2ad16261382987ea0fbb47ceee0987c5f9631`
**B10_GOLDEN_SOURCE_BLOB:** `b5f72c28668f9cad548bb6ec000dc435d9557652`
**HISTORIC_DELTA_R01:** `prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_SOURCE_FIRST_DELTA_A_R01_20261118.md` (unchanged)
**HISTORIC_REVIEW:** Existing B11 R02/B12 R01 academic and Q18 receipt SHA preserved; this R02 receipt does not retroactively alter NotebookLM verdict.

## What actually changes in the current manuscript

1. B11 and B12 four exact existing worked solutions each: replace `!!! example "Lời giải"` (default MkDocs violet) with source-authored `<div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ">` and original answer math; identical Golden component/style to *published B10*, not a new per-lesson patch. Keep `Đề`, `Phân tích`, `Kiểm lại` outside. For B11 EX4 preserve math display node `arithmatex`, diagram and problem data.
2. B12 formal terms: replace 3 `!!! abstract` and 1 `!!! info` (default MkDocs cyan/purple) with exact B10 semantic `thpt-r4-knowledge-conclusion thpt-r4-concept-card` and `thpt-r4-knowledge-conclusion thpt-r4-rule-card` in original Section A. The underlying original mathematical paragraphs and their `\\(...\\)` TeX sequences stay identical. Accent heading is inside box, no separate color band / icon.
3. The existing shared `docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css` contains a **strict B12 TRY01-scoped** reuse of B10's exact accepted palette. **Light concept:** #e8f7f2 / #a9dccc / #087d69, **Light rule:** #eaf1fc / #a5bee5 / #4879c2; **Slate concept:** #193d36 / #447e70 / #76dfc7; **Slate rule:** #203551 / #45658a / #8cb4ed. B11 and B12 neutral solution box gets existing Golden CSS, no extra stylesheet or runtime.
4. Neither `docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js`, SVG geometry, assessment bank, canonical item IDs, RD1/Final Submit, Firebase nor the other B01–B10/B13–B27 sources are edited. Original B10 source/palette is immutable.
5. After this update, each lesson still has **one** current canonical file; its Section A and the website lesson Markdown must be byte-for-byte identical. Historical R01 review/receipt in Git is an evidence snapshot, not a parallel active source.

## QA obligations / no premature acceptance

- Exact source/canonical new blob and previous signed blobs, math expression order/checksum unchanged B11=168, B12=165; figure IDs, First Try, D6/HELP and Q15/Q16 invariants.
- Rendered DOM in Chromium 390/820/1440: B11/B12 4 actual neutral Golden `.thpt-g10-example-solution` panels, 0 `.admonition.example`; all 8 plain `Đề/Phân tích` and 8 `Kiểm lại` outside solution panels, math not lost.
- Compare B11/B12 **computed** solution background, border and padding with B10 solution, *same scheme* and viewport; no violet admonition headers/icons. Check B12 3 concepts+1 rule computed background/border colors **identical to B10** both light/slate; 0 `.admonition.abstract/.info`.
- B12 previously enlarged SVG still readable and internally scrollable at phone width; no full-document horizontal overflow. Preserve B01–B10, B13–B27, THCS Golden / core/assessment safety.
- Full exact-HEAD PR CI, golden, Roadmap, R4; merge/deploy only after PASS; then verify `main` + published Pages HTML and obtain owner physical device P2 acceptance.

**Current status:** `UI_SOURCE_AUTHORED / Q18_R02_SHA_LOCKED / QA_PENDING / PR_DRAFT / NO_MERGE_NO_DEPLOY`. This is **not** an independent NotebookLM academic PASS or owner P2 PASS.
