# G10 ChV B12/B13 — DELTA_A_UI: loại bỏ tiêu đề “Đề bài” trùng nhãn Đề · 19/11/2026

**RECEIPT_ID:** `G10-CHV-B12-B13-DE-LABEL-DELTA-A-R01-20261119`  
**STANDARD:** `SLM-THPT-QUALITY-ONE v3.2.0 / Q01–Q18`  
**MODE:** `DELTA_A_UI` · owner-observed mobile defect · source-first · **NOT** a new academic/reviewer verdict  
**OWNER_INSTRUCTION:** 19/11/2026: Đã có “Đề bài” lại thêm “Đề”; B12 và B13 phải giống B11, chỉ giữ “Đề:”.

## Frozen source chain — historical receipts remain byte-for-byte unchanged

**BASE_MAIN_COMMIT:** `f1d3e498c28b6379aaca40603db22015682c3628`  
**B11_UNCHANGED_SOURCE_BLOB:** `bae18dce68974edc15f940bf7fb2cca09d99ddf8`  
**B12_PREVIOUS_SOURCE_BLOB:** `ff22a17265a0b3f66607bdfb132975877a7a6eba`  
**B12_CURRENT_SOURCE_BLOB:** `d053687c2f8b2cb1f2cb6cb5b86d0751b52d755d`  
**B12_PREVIOUS_CANONICAL_BLOB:** `04500be3345cca4c5e02fc125e4270383bb27186`  
**B12_CURRENT_CANONICAL_BLOB:** `958da47bdea5496deb1885ebcf0af5603d518e08`  
**B13_PREVIOUS_SOURCE_BLOB:** `0db04669163a4436fb893eac8644694c82d8efb4`  
**B13_CURRENT_SOURCE_BLOB:** `95dc361e08a89ec48e1a68255cf8520be2f42117`  
**B13_PREVIOUS_Q18_RECEIPT_BLOB:** `9f6a4343d1b1f4de48b324c5ef79be73085a5b11`  
**B12_PREVIOUS_GOLDEN_RECEIPT_BLOB:** `6f4760c7bb5a07c4fb97abc322f8aaa5623da9cb`  
**SHARED_GOLDEN_CSS_BLOB:** `a4fa446f5437ae5054627700434fb101524827c4`  
**B12_PUBLIC_BANK_BLOB:** `ca93acc0dd4df6e8f7fcd45732a6c69d82892d3f`  
**B13_B14_PUBLIC_BANK_BLOB:** `ddd5ec947029f644865110f2f381047214499e3e`  
**B13_D5_SVG_BLOB:** `acaf49296892e35c48fb2b4a5b335a7d26643336`

## Minimal exact edit

- `docs/thpt-preview/sgk/chuong-v/bai-12.md`: replace exactly four `    #### Đề bài` headings with `<div hidden data-thpt-g10-example-boundary></div>` (invisible compatibility marker preventing the existing ChV Golden DOM adapter from wrapping the prompt as an extra solution panel); preserve all four visible `**Đề:**` paragraphs.
- `docs/thpt-preview/sgk/chuong-v/bai-13.md`: identical four-heading replacement with invisible boundary; four original `**Đề:**` paragraphs unchanged.
- `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md`: apply the **same four-heading-to-invisible-boundary substitution inside Section A**, preserving byte equality with B12 learner Markdown and leaving all bank/Written/rubric sections unchanged.
- Historical B12/B13 Academic/PED receipts remain immutable at their earlier blobs. This Delta A only attaches a new UI receipt to the current learner sources; it does not relabel earlier reviewer verdicts as new PASS.
- No change to S1 theory, data, formulas, reasoning, result, 4 worked solutions each, D6, five First Try each, IDs, Golden CSS, MathJax, figure, Core/Practice/Written bank, Final Submit/RD1, Firebase or THCS.

**TECHNICAL FINDING:** Removing each `#### Đề bài` without a hidden boundary exposed a pre-existing G10 ChV adapter behavior (`polishG10ChapterV` wraps the first direct P under each example h3). The 8/4 browser test caught four unintended *extra* prompt panels in B12. The semantic-invisible marker preserves the original solution grouping without changing shared runtime/CSS or student-visible content. Browser test must prove 4/4 panels and only 4 original `Đề:` labels per lesson.

## Reproducible gates

1. `scripts/test-g10-chv-de-label-parity-delta-a.cjs`: `git show BASE_MAIN_COMMIT:path`, byte-exact replacement of four `#### Đề bài` headings per lesson with four hidden zero-display structural markers; B12 one-canonical Section A equals learner Markdown; B11 unchanged; exactly four `**Đề:**` per B12/B13, zero redundant `#### Đề bài`; source/receipt/CSS/bank/SVG SHA locks.
2. Existing Q18 router and ChV release QA must read the **current** post-fix blobs from this receipt **in addition to**, not instead of, immutable predecessor receipts.
3. Browser smoke on 390/820/1440 checks the visible tab Ví dụ contains zero `Đề bài` headings and exactly four original `Đề:` labels in B12/B13. No release without exact-final-HEAD workflow PASS.
4. Owner has requested this precise correction. Merge/deploy follows the existing authorization-gated release procedure; P1 is separate after `gh-pages`, and owner real-device P2 remains separate.

**STATUS:** `CANDIDATE / NOT_OWNER_P2_PASS` at receipt creation; source files and SHA checks are evidence, but not a declaration of completed CI/deploy.
